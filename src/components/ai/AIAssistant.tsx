'use client';

import { useState, useRef, useEffect, useCallback, type FormEvent, type KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, User, ChevronDown } from 'lucide-react';

/* ─── Types ─── */

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface AIAssistantProps {
  pageContext?: string;
}

/* ─── Suggested Prompts ─── */

const SUGGESTED_PROMPTS = [
  'What to see in Marrakech?',
  'Best time to visit Morocco?',
  'Top restaurants in Fes?',
  'How to get around Morocco?',
  'Desert tour recommendations?',
];

/* ─── Simple Markdown Renderer ─── */

function renderMarkdown(text: string): string {
  let html = text
    // Escape HTML entities first
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Bold: **text** or __text__
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.*?)__/g, '<strong>$1</strong>')
    // Italic: *text* or _text_ (not preceded/followed by *)
    .replace(/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/g, '<em>$1</em>')
    // Links: [text](url)
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="ai-msg-link">$1</a>'
    )
    // Unordered lists: lines starting with - or *
    .replace(/^[\s]*[-*]\s+(.+)$/gm, '<li>$1</li>')
    // Ordered lists: lines starting with digits.
    .replace(/^[\s]*\d+\.\s+(.+)$/gm, '<li>$1</li>')
    // Wrap consecutive <li> in <ul>
    .replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul class="ai-msg-list">$1</ul>')
    // Line breaks: double newline to paragraph break
    .replace(/\n\n/g, '<br/><br/>')
    // Single newlines inside text
    .replace(/\n/g, '<br/>');

  return html;
}

/* ─── Component ─── */

export default function AIAssistant({ pageContext }: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  /* ─── Auto-scroll to bottom ─── */

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  /* ─── Track scroll position to show/hide scroll-down indicator ─── */

  const handleMessagesScroll = useCallback(() => {
    const container = messagesContainerRef.current;
    if (!container) return;
    const isNearBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight < 80;
    setShowScrollDown(!isNearBottom && messages.length > 0);
  }, [messages.length]);

  /* ─── Send Message ─── */

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      setError(null);
      setInput('');

      const userMessage: Message = {
        id: `user-${Date.now()}`,
        role: 'user',
        content: trimmed,
      };

      const assistantMessageId = `assistant-${Date.now()}`;
      const assistantMessage: Message = {
        id: assistantMessageId,
        role: 'assistant',
        content: '',
      };

      setMessages((prev) => [...prev, userMessage, assistantMessage]);
      setIsLoading(true);

      try {
        const response = await fetch('/api/ai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: trimmed,
            context: pageContext,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          throw new Error(
            errorData?.error || 'Sorry, I\'m having trouble connecting. Please try again.'
          );
        }

        if (!response.body) {
          throw new Error('No response body received.');
        }

        // Stream the response
        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });

          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMessageId
                ? { ...msg, content: msg.content + chunk }
                : msg
            )
          );
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : 'Sorry, I\'m having trouble connecting. Please try again.';

        setError(errorMessage);

        // Remove the empty assistant message on error
        setMessages((prev) =>
          prev.filter((msg) => msg.id !== assistantMessageId)
        );
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, pageContext]
  );

  /* ─── Form Submit ─── */

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  /* ─── Toggle Panel ─── */

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    if (!hasBeenOpened) {
      setHasBeenOpened(true);
    }
  };

  /* ─── Render ─── */

  return (
    <>
      {/* ── Chat Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="ai-panel"
            role="dialog"
            aria-label="CityGuide AI Assistant"
          >
            {/* Header */}
            <div className="ai-panel-header">
              <div className="ai-panel-header-left">
                <div className="ai-panel-icon">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h2 className="ai-panel-title">CityGuide AI</h2>
                  <p className="ai-panel-subtitle">Your Morocco travel assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="ai-panel-close"
                aria-label="Close AI assistant"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div
              ref={messagesContainerRef}
              onScroll={handleMessagesScroll}
              className="ai-panel-messages"
            >
              {messages.length === 0 && !isLoading ? (
                /* Empty State with Suggested Prompts */
                <div className="ai-panel-empty">
                  <div className="ai-panel-empty-icon">
                    <Bot size={32} />
                  </div>
                  <p className="ai-panel-empty-title">
                    Ask me anything about Morocco
                  </p>
                  <p className="ai-panel-empty-subtitle">
                    I can help with destinations, food, culture, transport, and more.
                  </p>
                  <div className="ai-panel-suggestions">
                    {SUGGESTED_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => sendMessage(prompt)}
                        className="ai-suggestion-chip"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Message List */
                <div className="ai-message-list">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`ai-message ${
                        msg.role === 'user' ? 'ai-message-user' : 'ai-message-assistant'
                      }`}
                    >
                      {/* Avatar */}
                      <div
                        className={`ai-message-avatar ${
                          msg.role === 'user'
                            ? 'ai-message-avatar-user'
                            : 'ai-message-avatar-assistant'
                        }`}
                      >
                        {msg.role === 'user' ? (
                          <User size={14} />
                        ) : (
                          <Sparkles size={14} />
                        )}
                      </div>

                      {/* Bubble */}
                      <div
                        className={`ai-message-bubble ${
                          msg.role === 'user'
                            ? 'ai-message-bubble-user'
                            : 'ai-message-bubble-assistant'
                        }`}
                      >
                        {msg.role === 'assistant' && msg.content === '' && isLoading ? (
                          <div className="ai-typing-indicator">
                            <span className="ai-typing-dot" />
                            <span className="ai-typing-dot" />
                            <span className="ai-typing-dot" />
                          </div>
                        ) : msg.role === 'assistant' ? (
                          <div
                            className="ai-message-content"
                            dangerouslySetInnerHTML={{
                              __html: renderMarkdown(msg.content),
                            }}
                          />
                        ) : (
                          <p className="ai-message-content">{msg.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              )}

              {/* Scroll-down button */}
              <AnimatePresence>
                {showScrollDown && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={scrollToBottom}
                    className="ai-scroll-down"
                    aria-label="Scroll to latest message"
                  >
                    <ChevronDown size={16} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Error Banner */}
            {error && (
              <div className="ai-error-banner">
                <p>{error}</p>
                <button onClick={() => setError(null)} className="ai-error-dismiss">
                  Dismiss
                </button>
              </div>
            )}

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="ai-panel-input-area">
              <div className="ai-input-wrapper">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Morocco..."
                  rows={1}
                  className="ai-input"
                  disabled={isLoading}
                  maxLength={2000}
                  aria-label="Type your question"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="ai-send-btn"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="ai-disclaimer">
                AI responses may contain inaccuracies. Verify important details.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Trigger Button ── */}
      <motion.button
        onClick={toggleOpen}
        className={`ai-fab ${isOpen ? 'ai-fab-active' : ''}`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close AI assistant' : 'Open AI assistant'}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="ai-fab-icon"
            >
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="ai-fab-icon"
            >
              <Sparkles size={24} />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring when not yet opened */}
        {!hasBeenOpened && !isOpen && (
          <span className="ai-fab-pulse" aria-hidden="true" />
        )}
      </motion.button>

      {/* ── Styles ── */}
      <style jsx global>{`
        /* ── Floating Action Button ── */
        .ai-fab {
          position: fixed;
          bottom: 6rem;
          right: 2rem;
          z-index: 400;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
          color: var(--color-primary-dark);
          box-shadow: 0 4px 20px rgba(196, 150, 12, 0.35), 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease;
        }
        .ai-fab:hover {
          box-shadow: 0 6px 28px rgba(196, 150, 12, 0.45), 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .ai-fab-active {
          background: var(--color-primary);
          color: white;
          box-shadow: 0 4px 20px rgba(26, 24, 20, 0.3);
        }
        .ai-fab-active:hover {
          box-shadow: 0 6px 28px rgba(26, 24, 20, 0.4);
        }
        .ai-fab-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ai-fab-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid var(--color-accent);
          animation: aiFabPulse 2s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes aiFabPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 0; }
        }

        /* ── Chat Panel ── */
        .ai-panel {
          position: fixed;
          bottom: 10.5rem;
          right: 2rem;
          z-index: 400;
          width: 400px;
          height: 500px;
          max-height: calc(100dvh - 12rem);
          background: var(--surface);
          border-radius: var(--radius-2xl);
          border: 1px solid var(--border-light);
          box-shadow: 0 24px 80px -12px rgba(26, 24, 20, 0.2), 0 8px 24px -8px rgba(26, 24, 20, 0.1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* Mobile: full width */
        @media (max-width: 480px) {
          .ai-panel {
            width: calc(100vw - 1.5rem);
            right: 0.75rem;
            bottom: 6.5rem;
            height: calc(100dvh - 8rem);
            max-height: calc(100dvh - 8rem);
            border-radius: var(--radius-xl);
          }
          .ai-fab {
            bottom: 1.5rem;
            right: 1.25rem;
          }
        }

        /* ── Panel Header ── */
        .ai-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.875rem 1rem;
          border-bottom: 1px solid var(--border-light);
          background: var(--surface);
          flex-shrink: 0;
        }
        .ai-panel-header-left {
          display: flex;
          align-items: center;
          gap: 0.625rem;
        }
        .ai-panel-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
          color: var(--color-primary-dark);
          flex-shrink: 0;
        }
        .ai-panel-title {
          font-family: var(--font-heading);
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
        }
        .ai-panel-subtitle {
          font-size: 0.6875rem;
          color: var(--text-muted);
          line-height: 1.3;
        }
        .ai-panel-close {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          background: transparent;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.15s ease;
          flex-shrink: 0;
        }
        .ai-panel-close:hover {
          background: var(--surface-muted);
          color: var(--text-primary);
          border-color: var(--border);
        }

        /* ── Messages Area ── */
        .ai-panel-messages {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
          position: relative;
          scrollbar-width: thin;
          scrollbar-color: var(--color-sand-300) transparent;
        }
        .ai-panel-messages::-webkit-scrollbar { width: 4px; }
        .ai-panel-messages::-webkit-scrollbar-track { background: transparent; }
        .ai-panel-messages::-webkit-scrollbar-thumb {
          background: var(--color-sand-300);
          border-radius: 2px;
        }

        /* ── Empty State ── */
        .ai-panel-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          padding: 1rem;
        }
        .ai-panel-empty-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface-muted);
          color: var(--color-accent);
          margin-bottom: 0.75rem;
        }
        .ai-panel-empty-title {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        .ai-panel-empty-subtitle {
          font-size: 0.8125rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          max-width: 260px;
          line-height: 1.5;
        }
        .ai-panel-suggestions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
        }
        .ai-suggestion-chip {
          padding: 0.375rem 0.75rem;
          border-radius: 9999px;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
          white-space: nowrap;
        }
        .ai-suggestion-chip:hover {
          border-color: var(--color-accent);
          color: var(--color-accent-dark);
          background: var(--color-accent-50);
        }

        /* ── Messages ── */
        .ai-message-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .ai-message {
          display: flex;
          gap: 0.5rem;
          max-width: 92%;
        }
        .ai-message-user {
          flex-direction: row-reverse;
          align-self: flex-end;
          margin-left: auto;
        }
        .ai-message-assistant {
          align-self: flex-start;
        }
        .ai-message-avatar {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .ai-message-avatar-user {
          background: var(--color-primary);
          color: white;
        }
        .ai-message-avatar-assistant {
          background: linear-gradient(135deg, var(--color-accent-50), var(--color-accent-100));
          color: var(--color-accent-dark);
        }

        /* ── Bubbles ── */
        .ai-message-bubble {
          padding: 0.625rem 0.875rem;
          border-radius: var(--radius-xl);
          font-size: 0.8125rem;
          line-height: 1.6;
          word-break: break-word;
        }
        .ai-message-bubble-user {
          background: #1A1814;
          color: #FAF7F2;
          border-bottom-right-radius: var(--radius-sm);
        }
        .ai-message-bubble-assistant {
          background: var(--surface-muted);
          color: var(--text-primary);
          border-bottom-left-radius: var(--radius-sm);
        }

        /* Dark mode adjustments */
        :root[data-theme="dark"] .ai-message-bubble-user,
        :root:not([data-theme="light"]) .ai-message-bubble-user {
          background: var(--color-accent-dark);
          color: #FAF7F2;
        }

        /* ── Message Content (AI markdown) ── */
        .ai-message-content {
          margin: 0;
        }
        .ai-message-content strong {
          font-weight: 700;
        }
        .ai-message-content em {
          font-style: italic;
        }
        .ai-msg-link {
          color: var(--color-accent-dark);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .ai-msg-link:hover {
          color: var(--color-accent);
        }
        .ai-message-bubble-user .ai-msg-link {
          color: var(--color-accent-light);
        }
        .ai-msg-list {
          margin: 0.375rem 0;
          padding-left: 1.25rem;
          list-style: disc;
        }
        .ai-msg-list li {
          margin-bottom: 0.125rem;
        }

        /* ── Typing Indicator ── */
        .ai-typing-indicator {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 0;
        }
        .ai-typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--text-muted);
          animation: aiTypingBounce 1.4s infinite ease-in-out both;
        }
        .ai-typing-dot:nth-child(1) { animation-delay: 0s; }
        .ai-typing-dot:nth-child(2) { animation-delay: 0.16s; }
        .ai-typing-dot:nth-child(3) { animation-delay: 0.32s; }
        @keyframes aiTypingBounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }

        /* ── Scroll Down Button ── */
        .ai-scroll-down {
          position: sticky;
          bottom: 0.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: var(--shadow-md);
          margin: 0 auto;
          transition: all 0.15s ease;
        }
        .ai-scroll-down:hover {
          background: var(--surface-muted);
          color: var(--text-primary);
        }

        /* ── Error Banner ── */
        .ai-error-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: #FEF2F2;
          border-top: 1px solid #FECACA;
          color: #991B1B;
          font-size: 0.75rem;
          flex-shrink: 0;
        }
        .ai-error-banner p {
          margin: 0;
          flex: 1;
        }
        .ai-error-dismiss {
          background: none;
          border: none;
          color: #991B1B;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.75rem;
          white-space: nowrap;
          text-decoration: underline;
        }

        /* Dark mode error */
        :root[data-theme="dark"] .ai-error-banner,
        :root:not([data-theme="light"]) .ai-error-banner {
          background: rgba(153, 27, 27, 0.15);
          border-top-color: rgba(153, 27, 27, 0.3);
          color: #FCA5A5;
        }
        :root[data-theme="dark"] .ai-error-dismiss,
        :root:not([data-theme="light"]) .ai-error-dismiss {
          color: #FCA5A5;
        }

        /* ── Input Area ── */
        .ai-panel-input-area {
          padding: 0.75rem 1rem;
          border-top: 1px solid var(--border-light);
          background: var(--surface);
          flex-shrink: 0;
        }
        .ai-input-wrapper {
          display: flex;
          align-items: flex-end;
          gap: 0.5rem;
          background: var(--surface-muted);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 0.375rem 0.5rem 0.375rem 0.875rem;
          transition: border-color 0.15s ease;
        }
        .ai-input-wrapper:focus-within {
          border-color: var(--color-accent);
        }
        .ai-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.8125rem;
          line-height: 1.5;
          resize: none;
          max-height: 80px;
          padding: 0.25rem 0;
        }
        .ai-input::placeholder {
          color: var(--text-muted);
        }
        .ai-send-btn {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.15s ease;
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
          color: var(--color-primary-dark);
        }
        .ai-send-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .ai-send-btn:not(:disabled):hover {
          box-shadow: 0 2px 8px rgba(196, 150, 12, 0.35);
        }

        /* ── Disclaimer ── */
        .ai-disclaimer {
          margin: 0.375rem 0 0;
          font-size: 0.625rem;
          color: var(--text-muted);
          text-align: center;
          line-height: 1.4;
        }
      `}</style>
    </>
  );
}
