import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

/* ─── Gemini Client ─── */

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

/* ─── Rate Limiting (in-memory, per IP) ─── */

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 20;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

// Periodically clean up stale entries to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 5 * 60 * 1000); // Clean every 5 minutes

/* ─── System Prompt ─── */

const SYSTEM_PROMPT = `You are CityGuide AI, an expert Morocco travel assistant. You provide helpful, accurate information about Morocco including cities, attractions, food, culture, transport, weather, and travel tips. Keep responses concise (2-3 paragraphs max). Always be helpful and enthusiastic about Morocco travel. If you don't know something specific, suggest relevant pages on citytoursmorocco.com.`;

/* ─── POST Handler ─── */

export async function POST(request: NextRequest) {
  try {
    // Check for API key
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'AI service is not configured.' },
        { status: 503 }
      );
    }

    // Rate limiting by IP
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor?.split(',')[0]?.trim() || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment and try again.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { message, context } = body as {
      message: string;
      context?: string;
    };

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Please provide a message.' },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: 'Message is too long. Please keep it under 2000 characters.' },
        { status: 400 }
      );
    }

    // Build the prompt with optional page context
    let fullPrompt = message;
    if (context) {
      fullPrompt = `[User is currently viewing: ${context}]\n\n${message}`;
    }

    // Initialize model and start streaming
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      systemInstruction: SYSTEM_PROMPT,
    });

    const result = await model.generateContentStream(fullPrompt);

    // Create a ReadableStream to stream the response
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();
        } catch (streamError) {
          console.error('Gemini stream error:', streamError);
          controller.enqueue(
            encoder.encode(
              '\n\n[Sorry, the response was interrupted. Please try again.]'
            )
          );
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Transfer-Encoding': 'chunked',
      },
    });
  } catch (error) {
    console.error('AI route error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
