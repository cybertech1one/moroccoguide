import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Handshake,
  Shirt,
  UtensilsCrossed,
  Building2,
  Camera,
  Coins,
  Gift,
  DoorOpen,
  XCircle,
  Moon,
  Users,
  ArrowRight,
  AlertTriangle,
  Heart,
  Coffee,
  Eye,
  Star,
  Languages,
  ShoppingBag,
  Check,
  X,
  ThumbsUp,
  ThumbsDown,
  Sparkles,
  BookOpen,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Moroccan Etiquette & Culture Guide | CityGuide',
  description:
    'Essential guide to Moroccan etiquette, customs, and cultural norms. Learn about greetings, dress code, dining traditions, mosque etiquette, tipping, Ramadan travel, photography rules, bargaining, and what NOT to do in Morocco.',
  keywords: [
    'Morocco etiquette',
    'Moroccan customs',
    'Morocco dress code',
    'Morocco tipping guide',
    'Ramadan travel Morocco',
    'Morocco dining etiquette',
    'mosque etiquette Morocco',
    'Morocco photography rules',
    'Morocco cultural norms',
    'Morocco tourist mistakes',
    'Morocco gift giving',
    'Morocco gender norms',
    'LGBT travel Morocco',
    'Morocco bargaining guide',
    'Morocco haggling tips',
    'Morocco public behavior',
    'Morocco alcohol rules',
  ],
  openGraph: {
    title: 'Moroccan Etiquette & Culture Guide - Travel With Respect',
    description:
      'Everything you need to know about Moroccan customs, etiquette, and cultural norms. Dress code, dining, tipping, bargaining, Ramadan, and more.',
    url: 'https://citytoursmorocco.com/etiquette',
    images: [
      {
        url: '/images/hero-desert.webp',
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan tea ceremony',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/etiquette' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://citytoursmorocco.com/etiquette',
  name: 'Moroccan Etiquette & Culture Guide',
  description:
    'Comprehensive guide to Moroccan etiquette covering greetings, dress code, dining customs, mosque protocol, tipping, photography rules, bargaining, and cultural norms for respectful travel.',
  url: 'https://citytoursmorocco.com/etiquette',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
      { '@type': 'ListItem', position: 2, name: 'Etiquette & Culture', item: 'https://citytoursmorocco.com/etiquette' },
    ],
  },
};

/* ===================================================================
   GREETING ETIQUETTE
   =================================================================== */

const greetingRules = [
  {
    title: 'The Handshake',
    description:
      'Handshakes are the standard greeting between men. The Moroccan handshake is often softer than a Western one and may be held for longer. After shaking hands, many Moroccans place their right hand over their heart as a gesture of sincerity and warmth. Follow their lead and mirror the gesture.',
  },
  {
    title: 'Cheek Kissing',
    description:
      'Between people of the same gender who know each other, cheek kissing (usually two kisses, one on each cheek) is common. Between men and women who are not family, a handshake is more appropriate unless the woman initiates a cheek kiss. In conservative areas, a woman may not shake hands with an unrelated man at all &mdash; a slight bow with the hand on the heart is the respectful alternative.',
  },
  {
    title: 'The Right Hand Tradition',
    description:
      'Always use your right hand for greetings, eating, giving, and receiving items. The left hand is traditionally associated with hygiene and is considered unclean. Even if you are left-handed, make the effort to shake hands, pass food, and hand over money with your right hand. This is one of the most important cultural rules in Morocco.',
  },
  {
    title: 'Greeting Elders',
    description:
      'Show extra respect to older people. It is customary to greet the eldest person in a group first. Some younger Moroccans may kiss the hand of an elderly relative or respected elder. A warm "Salam, baba" (for men) or "Salam, mama" (for women) shows respect even to strangers of a certain age.',
  },
  {
    title: 'Greetings Take Time',
    description:
      'Moroccans do not rush greetings. A typical exchange includes asking about health, family, work, and well-being before any business or conversation begins. Rushing past the greeting ritual to "get to the point" is considered rude. Take your time, ask "Labas?" and genuinely listen to the response.',
  },
  {
    title: 'Common Greeting Phrases',
    description:
      '"Salam alaykum" (Peace be upon you) is the universal greeting, appropriate in any situation. The response is "Wa alaykum salam." After the initial greeting, "Labas?" (Are you well?) is standard, with the reply "Labas, hamdullah" (Fine, praise God). "Sbah l\'kheir" (Good morning) and "Msa l\'kheir" (Good evening) are used for time-specific greetings. Even a simple "Salam" with a smile opens every door.',
  },
];

/* ===================================================================
   DRESS CODE
   =================================================================== */

const dressCode = [
  {
    category: 'For Women',
    guidelines: [
      'Cover shoulders and knees in medinas, rural areas, and smaller towns. Loose-fitting clothing is ideal.',
      'A lightweight scarf is versatile: use it to cover shoulders when entering religious areas or conservative neighborhoods.',
      'In cosmopolitan areas like Gueliz (Marrakech), the Corniche (Casablanca), or beach resorts, Western-style clothing is more accepted.',
      'Swimwear is fine at hotel pools and resort beaches. At public beaches, some women prefer more modest swimwear.',
      'Avoid low-cut tops, very short skirts, and see-through fabrics in traditional areas &mdash; this significantly reduces unwanted attention.',
    ],
  },
  {
    category: 'For Men',
    guidelines: [
      'Shorts are acceptable in tourist areas and coastal cities but stand out in medinas and rural areas. Long trousers are more respectful.',
      'Sleeveless shirts are fine in casual tourist settings but a sleeved shirt shows more respect in traditional contexts.',
      'Dress neatly when visiting someone\'s home, a formal restaurant, or attending any official occasion.',
      'Swimwear is appropriate only at beaches and pools. Walking through town in swim trunks is frowned upon.',
    ],
  },
  {
    category: 'At Mosques',
    guidelines: [
      'Non-Muslims cannot enter most mosques in Morocco (the Hassan II Mosque in Casablanca is the notable exception).',
      'If visiting Hassan II Mosque or invited into a mosque, women must cover their hair, arms, and legs completely.',
      'Men should wear long trousers and a shirt that covers the shoulders.',
      'Shoes must be removed before entering. Carry a plastic bag to hold your shoes.',
      'Dress very conservatively and avoid bright or attention-grabbing clothing.',
    ],
  },
  {
    category: 'In Medinas',
    guidelines: [
      'The medina is a residential and working neighborhood, not a theme park. Modest dress shows respect for the people who live there.',
      'Comfortable closed-toe shoes are essential: medina streets are uneven, sometimes slippery, and donkey traffic is common.',
      'Loose, breathable layers work best for navigating hot, crowded medina alleys.',
    ],
  },
  {
    category: 'At Beaches',
    guidelines: [
      'International resort beaches (Agadir, Taghazout, Essaouira) are relaxed about swimwear.',
      'At public beaches frequented by locals, women may feel more comfortable in modest swimwear or a cover-up.',
      'Topless sunbathing is not acceptable anywhere in Morocco, including hotel pools.',
      'In surfing towns like Taghazout and Imsouane, the culture is more relaxed and boardshorts/bikinis are the norm.',
    ],
  },
  {
    category: 'Cities vs. Rural Areas',
    guidelines: [
      'Major cities like Casablanca, Rabat, and Tangier are significantly more liberal in dress than smaller towns and villages.',
      'In the Rif Mountains, High Atlas, and Saharan communities, conservative dress is strongly advised for both men and women.',
      'When in doubt, observe what local women are wearing and aim for similar coverage.',
      'During Ramadan, dress more conservatively everywhere, even in cities.',
    ],
  },
];

/* ===================================================================
   DINING ETIQUETTE
   =================================================================== */

const diningRules = [
  {
    title: 'Eating With Your Hands',
    description:
      'Traditional Moroccan meals, especially tagine and couscous, are eaten communally from a shared dish using the right hand (never the left). Tear off a piece of bread to scoop food, or use your thumb and first two fingers to gather a mouthful. Eat only from the section of the communal dish directly in front of you. The host often pushes choice pieces of meat toward honored guests.',
  },
  {
    title: 'Bread as a Utensil',
    description:
      'Bread (khobz) is sacred in Moroccan culture. It serves as your primary utensil for scooping food. Never place bread upside down on the table &mdash; this is considered deeply disrespectful. If bread falls on the ground, pick it up, kiss it, and touch it to your forehead before setting it aside. Stale bread is given to animals, never thrown in the garbage.',
  },
  {
    title: 'The Tea Ceremony',
    description:
      'Moroccan mint tea (atay nana) is not just a drink &mdash; it is a symbol of hospitality, friendship, and welcome. Tea is always served by the host, poured from height to create a frothy head. You should accept at least one glass (refusing is rude). Three glasses are traditional: the first is "gentle as life," the second "strong as love," the third "bitter as death." Never pour your own tea when a host is present.',
  },
  {
    title: 'Complimenting the Cook',
    description:
      'Moroccans take immense pride in their cooking. Saying "Bnayn!" (delicious) or touching your fingertips to your lips to signal how wonderful the food is will delight your host. Leaving food on your plate suggests the food was not good, but cleaning your plate completely may prompt your host to serve more. A small amount left on the plate signals you are satisfied.',
  },
  {
    title: 'Bismillah & Hamdullah',
    description:
      'Meals begin with "Bismillah" (In the name of God) and end with "Hamdullah" (Praise be to God). As a guest, you do not need to say these, but doing so shows cultural awareness and respect. If your host says Bismillah before eating, wait a moment before starting.',
  },
  {
    title: 'Shoes Off, Hands Washed',
    description:
      'Before a formal meal in a home, a family member may bring a basin and kettle for you to wash your hands. Hold your hands over the basin while water is poured over them. This ritual hand-washing is both practical and symbolic. In many traditional homes, you will also remove your shoes before entering the dining area.',
  },
  {
    title: 'The Communal Dish',
    description:
      'The central dish (tagine, couscous, or rfissa) is meant to be shared. Do not reach across to someone else\'s section of the dish. If you want something from the center or the far side, the host will move it toward you. Friday couscous is traditionally eaten by hand, rolling the semolina into small balls with the fingers. Spoons are increasingly common at restaurants, but the hand method is the cultural ideal.',
  },
  {
    title: 'When You Have Had Enough',
    description:
      'Your host will insist that you eat far more than you thought possible. A polite way to signal you are full is to say "Hamdullah, shbert" (Praise God, I am full), lean back slightly, and stop reaching for food. Your host may still urge you to continue. A gentle but firm "Hamdullah" repeated with a smile is the graceful way to stop the flow of food.',
  },
];

/* ===================================================================
   MOSQUE & RELIGIOUS RESPECT
   =================================================================== */

const mosqueRules = [
  {
    title: 'Non-Muslim Access',
    description:
      'Unlike many Muslim countries, Morocco restricts non-Muslim entry to nearly all mosques. The Hassan II Mosque in Casablanca is the grand exception and offers guided tours. A few other sites like the Tin Mal Mosque in the Atlas Mountains also permit visitors. Always ask before entering any religious space, and respect any refusal graciously.',
  },
  {
    title: 'Ramadan Rules',
    description:
      'During Ramadan (the holy month of fasting), Muslims do not eat, drink, or smoke from sunrise to sunset. As a visitor, you are not required to fast, but eating, drinking, or smoking openly in public during daylight hours is very disrespectful. Eat privately in your hotel or riad. Many restaurants close during the day but all open for iftar (the evening meal to break the fast).',
  },
  {
    title: 'The Call to Prayer',
    description:
      'The adhan (call to prayer) sounds five times daily from mosque minarets. It is a beautiful and defining feature of Moroccan life. During the call, lower your voice, do not play loud music, and show respect. Do not mimic or record the adhan in a mocking way. Many visitors come to love the call to prayer as the ambient soundtrack of their Moroccan experience.',
  },
  {
    title: 'Friday Prayer',
    description:
      'Friday is the Muslim holy day. The midday Friday prayer (salat al-jumu\'ah) is the most important weekly communal prayer. Expect streets around mosques to be very crowded between approximately 12:00 and 14:00 on Fridays, with prayer mats spilling into the streets. Some shops close for a few hours. Plan accordingly and avoid scheduling mosque visits or nearby activities during this time.',
  },
  {
    title: 'Respect Sacred Spaces',
    description:
      'Do not peer into mosques through doors or windows. Do not sit on or lean against the outer walls of mosques. Avoid walking in front of someone who is praying. If you see a small shrine (marabout) with a green or white dome, these are sacred sites and should be treated with the same respect as a mosque.',
  },
];

/* ===================================================================
   PHOTOGRAPHY RULES
   =================================================================== */

const photographyRules = [
  {
    rule: 'Always Ask Permission for Portraits',
    description: 'Photographing people without consent is considered rude and can cause genuine offense. This is especially important with women in conservative areas. A friendly "Photo?" with a gesture toward your camera and a smile usually works. Accept a refusal graciously.',
  },
  {
    rule: 'Women and Children',
    description: 'Never photograph women without explicit permission, particularly in rural areas or conservative neighborhoods. Photographing children requires a parent\'s consent. Some families welcome it; others are deeply opposed. When in doubt, don\'t.',
  },
  {
    rule: 'Military and Police Sites',
    description: 'Photographing military installations, police stations, government buildings, and royal palaces is strictly prohibited and can result in your camera being confiscated or police questioning. Be aware of your surroundings and look for "no photography" signs.',
  },
  {
    rule: 'Paid Photo Opportunities',
    description: 'Snake charmers, henna artists, water sellers in traditional garb, and Jemaa el-Fnaa performers expect payment for photos (10-20 MAD). Agree on a price before taking the photo. Taking a sneaky photo and walking away is considered stealing.',
  },
  {
    rule: 'Mosques and Religious Ceremonies',
    description: 'Do not photograph the interior of mosques (even from outside through doors). Be respectful during religious ceremonies and processions. If in doubt, ask a nearby local if photography is acceptable.',
  },
  {
    rule: 'Markets and Artisans',
    description: 'Many shopkeepers and artisans welcome photos, especially if you are a potential customer. Some do not want their stock photographed (they may fear competitors). Ask first, buy something small as a courtesy if they agree, and show them the photo afterward.',
  },
];

/* ===================================================================
   BARGAINING GUIDE
   =================================================================== */

const bargainingGuide = [
  {
    title: 'Where to Bargain',
    description:
      'Bargaining is expected and enjoyed in traditional souks (markets), with street vendors, for taxi fares (petit taxis without meters), and with unofficial guides. It is part of the social fabric and is seen as a conversation, not a confrontation. The souk is the primary arena: carpets, leather goods, ceramics, clothing, spices, and souvenirs are all negotiable.',
  },
  {
    title: 'Where NOT to Bargain',
    description:
      'Never haggle in places with fixed prices: supermarkets (Marjane, Carrefour, Acima), pharmacies, restaurants with printed menus, government cooperatives with displayed price tags, major brand stores, hotels, and bus/train tickets. Attempting to bargain in these contexts is embarrassing and marks you as inexperienced. Look for price tags as your cue.',
  },
  {
    title: 'The Opening Move',
    description:
      'The vendor\'s first price is typically 2-4 times what they expect to receive (sometimes more for high-value items like carpets). Browse casually without showing too much enthusiasm. When you ask "Bshhal?" (How much?), react with polite surprise at the first price, even if it seems reasonable. "Ghali bzaf!" (Too expensive!) said with a friendly smile is your opening gambit.',
  },
  {
    title: 'Your Counter-Offer',
    description:
      'Start your counter at roughly 30-40% of their asking price. This gives both sides room to move toward a middle ground. The vendor will act shocked at your low offer (this is part of the performance). You will go back and forth several times. Expect to settle at around 50-60% of the original asking price for most items. For high-value items like carpets, the range can be wider.',
  },
  {
    title: 'The Walk-Away',
    description:
      'Walking away is the most powerful tool in your bargaining arsenal. If you and the vendor cannot agree, thank them warmly, say "Shukran, ghadi nmshi" (Thanks, I\'ll leave), and start walking away slowly. If they have room to come down, they will call you back with a better offer. If they let you go, their last price was genuine. You can always return later if you change your mind.',
  },
  {
    title: 'Expected Discount Ranges',
    description:
      'Leather goods: expect 30-50% off asking. Carpets: 40-60% off (highly negotiable, take your time). Ceramics and pottery: 20-40% off. Spices: 10-20% off (margins are thinner). Clothing: 30-40% off. Metalwork and lanterns: 30-50% off. Buying multiple items from the same vendor gives additional leverage: "Ila shrit juj, nqes li?" (If I buy two, will you reduce?).',
  },
  {
    title: 'The Golden Rules',
    description:
      'Never start bargaining unless you are genuinely interested in buying. Once you agree on a price, you are morally committed to the purchase. Keep the mood friendly and humorous &mdash; this is a social ritual, not a fight. Accept that you will probably pay slightly more than a local &mdash; a "tourist premium" of 10-20% is normal and acceptable. If the price is fair and you can afford it, close the deal and move on with a smile.',
  },
];

/* ===================================================================
   TIPPING GUIDE
   =================================================================== */

const tippingGuide = [
  { context: 'Restaurants (sit-down)', amount: '10-15% of the bill', note: 'Leave cash on the table. Service charge is rarely included.' },
  { context: 'Cafes (tea/coffee)', amount: '2-5 MAD', note: 'Round up or leave small change.' },
  { context: 'Hotel housekeeping', amount: '10-20 MAD/day', note: 'Leave daily on the pillow or bedside table.' },
  { context: 'Hotel porter/bellhop', amount: '10-20 MAD per bag', note: 'Tip when bags are delivered to your room.' },
  { context: 'Tour guides (full day)', amount: '100-200 MAD', note: 'Per person for an excellent guide.' },
  { context: 'Tour guides (half day)', amount: '50-100 MAD', note: 'Per person for a shorter excursion.' },
  { context: 'Riad/hotel staff', amount: '50-100 MAD', note: 'Leave in an envelope at checkout for the team.' },
  { context: 'Taxi drivers', amount: 'Round up', note: 'Round up to the nearest 5 or 10 MAD.' },
  { context: 'Parking attendants', amount: '2-5 MAD', note: 'The men in reflective vests who "watch" your car.' },
  { context: 'Hammam attendant', amount: '20-50 MAD', note: 'Directly to the person who scrubbed you.' },
  { context: 'Gas station attendants', amount: '5-10 MAD', note: 'If they wash your windshield or check tires.' },
  { context: 'Bathroom attendants', amount: '1-2 MAD', note: 'At public restrooms with an attendant.' },
  { context: 'Unofficial "helpers"', amount: '5-10 MAD', note: 'Anyone who gives directions or helps carry bags in the medina.' },
  { context: 'Cooking class chef', amount: '50-100 MAD', note: 'If not included in the class fee.' },
  { context: 'Desert camp staff', amount: '50-100 MAD', note: 'For the team at the end of your stay.' },
];

/* ===================================================================
   GIFT GIVING
   =================================================================== */

const giftGiving = [
  {
    title: 'Appropriate Gifts',
    description:
      'When visiting a Moroccan home, bring pastries from a good patisserie (this is the most common and appreciated gift), dried fruits and nuts, high-quality dates, or flowers. Gifts from your home country are also cherished &mdash; chocolates, specialty foods, or souvenirs that represent where you are from.',
  },
  {
    title: 'Tea and Hospitality',
    description:
      'If you are invited for tea, your presence is the gift. But bringing a box of pastries or cookies is the standard Moroccan courtesy and will delight your host. If you stay for a meal (which is likely &mdash; Moroccan hospitality is legendary), your host will insist you eat far more than humanly possible. Accept graciously.',
  },
  {
    title: 'What to Avoid',
    description:
      'Do not bring alcohol unless you are absolutely certain your host drinks (many Moroccans do not, for religious reasons). Avoid gifts featuring dogs (considered unclean in Islamic tradition). Do not give gifts with the left hand. If giving money as a gift (for a wedding or celebration), use new, crisp bills in an envelope.',
  },
  {
    title: 'Receiving Gifts',
    description:
      'If a Moroccan gives you a gift, accept it graciously with your right hand. You may not be expected to open it immediately in front of the giver. Express genuine gratitude and reciprocate when the opportunity arises. Moroccans are incredibly generous and may insist you accept gifts that seem too valuable &mdash; a polite resistance followed by gracious acceptance is the expected dance.',
  },
];

/* ===================================================================
   HOME VISIT PROTOCOL
   =================================================================== */

const homeVisitRules = [
  {
    rule: 'Remove Your Shoes',
    description: 'Always remove your shoes at the entrance. Your host will usually have slippers available. If not, going barefoot or in socks is perfectly fine. Look for a row of shoes at the door as your cue.',
  },
  {
    rule: 'Accept Tea (Always)',
    description: 'You will be offered mint tea almost immediately. Accept it. Refusing tea in a Moroccan home is one of the most impolite things you can do. Even if you don\'t love mint tea, take a few sips and express appreciation. You will likely be offered three glasses.',
  },
  {
    rule: 'Bring Pastries',
    description: 'Stop at a patisserie on the way and buy a box of Moroccan pastries (gateaux). This is the universal guest gift and is always expected when visiting someone\'s home for the first time. Your host will protest that you shouldn\'t have, but they will be pleased.',
  },
  {
    rule: 'Compliment the Home',
    description: 'Moroccans take great pride in their homes. Complimenting the decor, the cleanliness, or the tea set shows appreciation. However, be cautious about admiring a specific item too enthusiastically &mdash; your host may insist on giving it to you.',
  },
  {
    rule: 'Extended Hospitality',
    description: 'A "quick tea" may easily become a three-hour visit with a full meal. This is normal and wonderful. Do not look at your watch or rush. Moroccan hospitality is generous, warm, and boundless. Trying to leave too quickly may offend your host.',
  },
  {
    rule: 'Dining Position',
    description: 'You may be seated on cushions around a low table. Sit cross-legged or with your legs tucked to one side. Avoid pointing the soles of your feet at anyone or at the food. The guest of honor is typically seated at the head of the table or facing the entrance.',
  },
];

/* ===================================================================
   PUBLIC BEHAVIOR & SOCIAL NORMS
   =================================================================== */

const publicBehavior = [
  {
    title: 'Public Displays of Affection',
    description:
      'Morocco is conservative regarding physical intimacy in public. Handholding between married couples is generally tolerated in cosmopolitan areas, but kissing, embracing, and overt romantic behavior in public are frowned upon and can attract unwanted attention or even police intervention. Same-gender friends holding hands or walking arm-in-arm is normal and carries no romantic connotation. Reserve affection for private settings.',
  },
  {
    title: 'Alcohol in Morocco',
    description:
      'Morocco has a complex relationship with alcohol. While the country produces its own wine and beer (Flag Speciale, Casablanca Beer), and licensed bars, restaurants, and hotels serve alcohol, public drunkenness is deeply frowned upon and can lead to police trouble. Drinking in the street is illegal. Never bring alcohol to someone\'s home unless you know they drink. During Ramadan, alcohol sales are restricted and many licensed establishments close their bars.',
  },
  {
    title: 'Ramadan Public Behavior',
    description:
      'During Ramadan, eat, drink, and smoke only in private (your hotel room, riad, or tourist-oriented restaurants that stay open). Playing loud music, wearing very revealing clothing, or behaving in an overtly festive manner during fasting hours shows disrespect. The mood shifts at sunset: evenings are celebratory and social. Saying "Ramadan Mubarak" (Blessed Ramadan) is always appreciated.',
  },
  {
    title: 'Conversation Topics',
    description:
      'Moroccans are warm conversationalists and enjoy discussing family, food, football, travel, and culture. Avoid criticizing the King (Morocco has strict lese-majeste laws), Islam, or Moroccan politics with strangers. The Western Sahara issue is politically sensitive. Ask about local customs, food, and recommendations &mdash; Moroccans love sharing their culture with genuinely curious visitors.',
  },
  {
    title: 'Cannabis (Kif) Culture',
    description:
      'The Rif Mountains region has a long history of cannabis cultivation. While you may be offered kif (cannabis) in tourist areas, particularly in Chefchaouen and the Rif, possession and consumption remain illegal in Morocco. Police enforcement can be inconsistent, but tourists have been arrested. Politely decline with "La, shukran" (No, thank you) and move on.',
  },
  {
    title: 'Money & Negotiation Etiquette',
    description:
      'Always hand over money with your right hand. When paying for goods or services, do not throw or slide money across the counter. In many transactions, especially in traditional settings, money is passed hand to hand with a moment of eye contact. When receiving change, check it politely &mdash; honest mistakes happen in both directions. Keep small bills and coins available for tips, taxis, and small purchases.',
  },
];

/* ===================================================================
   WHAT NOT TO DO
   =================================================================== */

const touristMistakes = [
  {
    mistake: 'Eating or drinking in public during Ramadan',
    explanation: 'This is deeply disrespectful and can even lead to police attention. Eat and drink privately in your hotel or riad during daylight hours in Ramadan.',
  },
  {
    mistake: 'Photographing people without permission',
    explanation: 'Especially women in conservative areas. This causes genuine offense and can escalate into confrontation. Always ask first.',
  },
  {
    mistake: 'Entering mosques as a non-Muslim',
    explanation: 'Morocco restricts non-Muslim entry to almost all mosques. Do not try to enter, and do not photograph interiors through doors.',
  },
  {
    mistake: 'Placing bread upside down',
    explanation: 'Bread is sacred in Moroccan culture. Placing it upside down, stepping on it, or wasting it is considered deeply disrespectful.',
  },
  {
    mistake: 'Using the left hand for eating or greetings',
    explanation: 'The left hand is associated with hygiene. Always eat, greet, give, and receive with your right hand.',
  },
  {
    mistake: 'Showing soles of feet',
    explanation: 'Pointing the soles of your feet at people or at food is an insult. Be mindful when sitting cross-legged on the floor.',
  },
  {
    mistake: 'Criticizing the King or Islam',
    explanation: 'Morocco has strict lese-majeste laws. Public criticism of the monarchy or Islam can lead to arrest. These are not casual conversation topics.',
  },
  {
    mistake: 'Wearing revealing clothing in medinas',
    explanation: 'The medina is a residential neighborhood. Revealing clothing shows disrespect to the community and attracts unwanted attention.',
  },
  {
    mistake: 'Refusing hospitality',
    explanation: 'Refusing tea, food, or a home invitation without a compelling reason (allergies, genuine illness) is a serious social faux pas.',
  },
  {
    mistake: 'Public displays of affection',
    explanation: 'Morocco is conservative. Kissing and embracing in public makes locals uncomfortable and may attract unwanted attention or police intervention.',
  },
  {
    mistake: 'Haggling at fixed-price shops',
    explanation: 'Cooperatives, supermarkets, and shops with displayed price tags have fixed prices. Attempting to haggle here is embarrassing for both parties.',
  },
  {
    mistake: 'Assuming everyone speaks English',
    explanation: 'Outside tourist hotspots, English is not widely spoken. Learn basic French or Darija phrases. Expecting English everywhere comes across as entitled.',
  },
];

/* ===================================================================
   RAMADAN TRAVEL TIPS
   =================================================================== */

const ramadanTips = [
  {
    title: 'What to Expect',
    description:
      'During Ramadan, the rhythm of Morocco transforms. The pace slows during daylight hours as people conserve energy while fasting. Streets become quiet in the afternoons. Then, as sunset approaches, cities come alive with a palpable energy as families prepare iftar (the meal to break the fast). The evenings become vibrant, social, and festive.',
  },
  {
    title: 'Dining During Fasting Hours',
    description:
      'Most restaurants and cafes close during the day in Ramadan (some tourist-oriented establishments stay open). Eat breakfast at your hotel, carry snacks, and eat discretely indoors during the day. Never eat, drink, or smoke visibly in public during daylight hours. Many riads will serve lunch privately to non-Muslim guests.',
  },
  {
    title: 'Iftar Experience',
    description:
      'Experiencing iftar is one of the most beautiful cultural moments in Morocco. As the cannon fires or the adhan sounds at sunset, the entire country breaks fast simultaneously. Harira (lentil soup), dates, chebakia (honey cookies), and juices appear on every table. Many restaurants offer special iftar menus, and you are welcome to join the communal meal.',
  },
  {
    title: 'Practical Adjustments',
    description:
      'Expect shorter business hours. Many shops open late, close midday, and reopen in the evening after iftar. Tourist attractions usually maintain normal hours. Traffic becomes intense in the hour before iftar as everyone rushes home. Stay off the roads during this time. Nightlife and evening activity extend much later, with streets bustling past midnight.',
  },
  {
    title: 'Respectful Behavior',
    description:
      'Dress more conservatively during Ramadan. Be patient if service is slower (staff are fasting). Avoid playing loud music in public. Express awareness and respect: saying "Ramadan Mubarak" (Blessed Ramadan) to people you meet is always appreciated. Despite the challenges, traveling during Ramadan offers a uniquely intimate window into Moroccan culture.',
  },
];

/* ===================================================================
   GENDER NORMS & LGBT TRAVEL
   =================================================================== */

const genderAndLgbt = [
  {
    title: 'Gender Roles in Public Life',
    description:
      'Moroccan society is modernizing rapidly, and gender norms vary enormously between urban and rural areas. In Casablanca and Rabat, women work in every profession, drive, and participate fully in public life. In conservative rural areas, gender roles remain more traditional. As a visitor, you will not be expected to conform to local gender roles, but awareness and sensitivity will enhance your experience.',
  },
  {
    title: 'Women Travelers',
    description:
      'Morocco welcomes thousands of solo women travelers annually. However, unwanted attention, catcalling, and persistent approaches from men are more frequent than in many Western countries, especially in medinas and tourist areas. Dress modestly, walk with purpose, and use firm phrases like "La, shukran" (No, thanks). Traveling with at least one companion reduces unwanted approaches significantly. Women-only hammams are safe and culturally enriching experiences.',
  },
  {
    title: 'Same-Sex Couples',
    description:
      'It is important to be honest about this topic. Same-sex sexual activity is illegal in Morocco under Article 489 of the Penal Code, with penalties of up to three years in prison. While prosecutions of tourists are extremely rare, the law reflects broader social attitudes. LGBTQ+ travelers do visit Morocco, but discretion is essential. Avoid public displays of affection, and be aware that the concept of being openly LGBTQ+ is not accepted in Moroccan society.',
  },
  {
    title: 'Practical Advice for LGBTQ+ Travelers',
    description:
      'Two friends of the same gender sharing a hotel room will not raise any eyebrows. Same-gender friends commonly walk arm-in-arm in Morocco, so casual physical contact between friends is normal. Major cities like Marrakech, Essaouira, and Casablanca are generally more tolerant. Avoid dating apps that may expose your location. Book accommodations with strong reviews from international travelers. Your safety comes first &mdash; discretion is not oppression, it is pragmatism.',
  },
];

/* ===================================================================
   DO'S AND DON'TS QUICK REFERENCE
   =================================================================== */

const quickReferenceDos = [
  'Say "Salam" and "Shukran" &mdash; even basic greetings transform interactions',
  'Use your right hand for everything: eating, greeting, giving, receiving',
  'Dress modestly in medinas, rural areas, and religious contexts',
  'Accept mint tea when offered &mdash; it is the currency of friendship',
  'Remove shoes before entering homes and mosques',
  'Ask permission before photographing people',
  'Haggle with humor and respect in traditional souks',
  'Bring pastries when visiting someone\'s home',
  'Show patience &mdash; greetings, negotiations, and meals take time',
  'Respect the call to prayer and Islamic customs',
  'Tip service workers generously &mdash; they depend on it',
  'Say "Ramadan Mubarak" during the holy month',
];

const quickReferenceDonts = [
  'Eat, drink, or smoke in public during Ramadan daytime',
  'Enter mosques as a non-Muslim (except Hassan II)',
  'Photograph women without permission, especially in rural areas',
  'Place bread upside down or waste it',
  'Point the soles of your feet at people or food',
  'Criticize the King or Islam publicly',
  'Show overt romantic affection in public',
  'Refuse tea or hospitality without a genuine reason',
  'Photograph military, police, or government buildings',
  'Get visibly drunk in public',
  'Haggle at fixed-price shops, pharmacies, or restaurants',
  'Rush greetings or skip the social pleasantries',
];

/* ===================================================================
   PAGE COMPONENT (Server)
   =================================================================== */

export default function EtiquettePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-desert.webp"
            alt="Traditional Moroccan tea ceremony with silver teapot"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Etiquette &amp; Culture</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Customs &amp; Traditions
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Moroccan Etiquette &amp; Culture Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Understanding Moroccan customs is the key to meaningful travel. This guide covers
              everything from greetings and dining to mosque etiquette, bargaining, and Ramadan, so you can
              travel with confidence and respect.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Quick Reference Card ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Sparkles className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Quick Reference: Do&apos;s &amp; Don&apos;ts
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Pin this to your phone or print it out. These are the essential rules that will guide you
              through 90% of cultural situations in Morocco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Do's Card */}
            <div className="card-moroccan p-6 md:p-8 border-l-4 border-l-green-600">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex p-2.5 rounded-xl bg-green-100">
                  <ThumbsUp className="w-5 h-5 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Do This
                </h3>
              </div>
              <ul className="space-y-3">
                {quickReferenceDos.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Don'ts Card */}
            <div className="card-moroccan p-6 md:p-8 border-l-4 border-l-red-600">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex p-2.5 rounded-xl bg-red-100">
                  <ThumbsDown className="w-5 h-5 text-red-700" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Avoid This
                </h3>
              </div>
              <ul className="space-y-3">
                {quickReferenceDonts.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Greeting Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Handshake className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Greeting Etiquette
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-3xl leading-relaxed">
            Greetings are sacred in Moroccan culture. How you greet someone sets the entire tone of the interaction.
            Taking time with greetings shows respect and opens doors that remain closed to rushed travelers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {greetingRules.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dress Code ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Shirt className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Dress Code
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-3xl leading-relaxed">
            Morocco is not as strict as some Muslim countries, but modest dress shows respect and significantly
            improves your experience. What you wear signals how you want to be treated.
          </p>

          <div className="space-y-6">
            {dressCode.map((section) => (
              <div key={section.category} className="card-moroccan p-6 md:p-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.guidelines.map((guideline, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                      <span className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                        {guideline}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Henna Art Visual ── */}
      <div className="container-morocco py-12">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/images/photo-henna-art.webp"
            alt="Intricate henna designs being applied to hands, a traditional Moroccan art form used for celebrations and everyday beauty"
            loading="lazy"
            className="w-full h-64 md:h-80 object-cover"
          />
          <p className="text-sm text-[var(--text-muted)] mt-3 text-center">
            Henna art is deeply woven into Moroccan culture -- from weddings to everyday adornment
          </p>
        </div>
      </div>

      {/* ── Dining Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <UtensilsCrossed className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Dining Etiquette
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-3xl leading-relaxed">
            Moroccan meals are communal, generous, and deeply social. Understanding dining customs will
            help you feel at ease and honor your hosts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {diningRules.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Coffee className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mosque & Religious Respect ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Building2 className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Mosque &amp; Religious Respect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mosqueRules.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Moroccan Carpet Visual ── */}
      <div className="container-morocco py-12">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/images/art-moroccan-carpet.webp"
            alt="Richly patterned traditional Moroccan carpet with geometric Berber motifs in warm reds, oranges, and natural tones"
            loading="lazy"
            className="w-full h-64 md:h-80 object-cover"
          />
          <p className="text-sm text-[var(--text-muted)] mt-3 text-center">
            Moroccan carpets tell stories through their patterns -- each region has its own distinct weaving traditions
          </p>
        </div>
      </div>

      {/* ── Photography Rules ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Camera className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Photography Rules
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photographyRules.map((item) => (
              <div key={item.rule} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="text-base font-bold text-[var(--text-primary)]">
                    {item.rule}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bargaining Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <ShoppingBag className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              The Art of Bargaining
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-3xl leading-relaxed">
            Bargaining in Morocco is a social ritual, a conversation, and an art form. It is not about
            getting the cheapest price &mdash; it is about the exchange between buyer and seller. Approach it
            with humor, patience, and genuine enjoyment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bargainingGuide.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Handshake className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tipping Guide ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-white/10">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white">
              Tipping Guide
            </h2>
          </div>
          <p className="text-white/80 text-lg mb-8 max-w-3xl">
            Tipping is expected and appreciated in Morocco. Service workers rely on tips as a significant
            part of their income. Keep small bills (10, 20, 50 MAD notes) and coins readily available.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tippingGuide.map((item) => (
              <div
                key={item.context}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10"
              >
                <p className="text-white font-semibold text-sm mb-1">{item.context}</p>
                <p className="text-2xl font-bold text-white mb-1">{item.amount}</p>
                <p className="text-sm text-white/60">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gift Giving ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Gift className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Gift Giving
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {giftGiving.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Public Behavior & Social Norms ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Users className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Public Behavior &amp; Social Norms
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-3xl leading-relaxed">
            Navigating public spaces in Morocco requires awareness of local sensitivities around alcohol,
            affection, religious observance, and social conduct. These guidelines will help you blend in
            respectfully.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publicBehavior.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Home Visit Protocol ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <DoorOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Home Visit Protocol
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-3xl leading-relaxed">
            Being invited into a Moroccan home is one of the greatest privileges of travel. These visits
            are where you will experience the legendary warmth of Moroccan hospitality at its finest.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeVisitRules.map((item, i) => (
              <div key={i} className="card-moroccan p-6">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">{item.rule}</h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What NOT to Do ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-red-100">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              What NOT to Do &mdash; 12 Tourist Mistakes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-3xl leading-relaxed">
            These are the most common mistakes tourists make in Morocco. Avoiding them will save you
            embarrassment and show the respect that Moroccans deeply appreciate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {touristMistakes.map((item, i) => (
              <div key={i} className="card-moroccan p-5 flex items-start gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 text-sm font-bold shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">
                    {item.mistake}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {item.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ramadan Travel Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Moon className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Ramadan Travel Tips
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-3xl leading-relaxed">
            Traveling during Ramadan is a unique and rewarding experience if you are prepared. The country
            transforms, and you will witness a spiritual depth and communal beauty that is invisible at other times.
          </p>

          <div className="space-y-6">
            {ramadanTips.map((item) => (
              <div key={item.title} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gender Norms & LGBT Travel ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Users className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Gender Norms &amp; LGBT Travel
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-3xl leading-relaxed">
            Honest, practical advice. Morocco is a conservative Muslim-majority country that is simultaneously
            undergoing rapid modernization. These realities coexist, and understanding both will serve you well.
          </p>

          <div className="space-y-6">
            {genderAndLgbt.map((item) => (
              <div key={item.title} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Travel Morocco With Confidence
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Now that you understand Moroccan customs, pair this knowledge with our language guide
            to communicate respectfully and connect authentically with the people you meet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/language"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <Languages className="w-4 h-4" /> Language Guide
            </Link>
            <Link
              href="/safety"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Safety Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
