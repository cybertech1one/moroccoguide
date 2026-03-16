import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  ShoppingBag,
  HandCoins,
  Truck,
  AlertTriangle,
  MapPin,
  Star,
  BadgeCheck,
  MessageSquare,
  Package,
  Banknote,
  Scale,
  Globe,
  Store,
} from 'lucide-react';
import ShoppingClient from './ShoppingClient';
import type { ShoppingItem } from './ShoppingClient';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Shopping in Morocco | What to Buy, Where & How to Haggle | CityGuide',
  description:
    'Your complete guide to shopping in Morocco. Discover 20 must-buy items from Moroccan rugs and leather goods to argan oil and spices. Learn haggling tips, authenticity checks, and the best souks and markets.',
  keywords: [
    'shopping in Morocco',
    'Moroccan souvenirs',
    'Moroccan rugs',
    'Moroccan leather',
    'argan oil Morocco',
    'Moroccan spices',
    'haggling Morocco',
    'Moroccan souks',
    'what to buy in Morocco',
    'Moroccan crafts',
    'Moroccan lanterns',
    'Moroccan ceramics',
    'Moroccan babouches',
    'Moroccan tea set',
    'zellige tiles',
  ],
  openGraph: {
    title: 'Shopping in Morocco - CityGuide',
    description:
      'Discover what to buy, where to find it, and how to haggle like a pro in Morocco\'s legendary souks and markets.',
    url: 'https://cityguide.ma/shopping',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1531501410720-c8d437636169?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan souk with handmade goods and lanterns',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/shopping' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ShoppingCenter',
  '@id': 'https://cityguide.ma/shopping',
  name: 'Shopping in Morocco Guide',
  description:
    'Comprehensive guide to shopping in Morocco covering 20 must-buy items, haggling tips, best markets, authenticity verification, and shipping advice.',
  url: 'https://cityguide.ma/shopping',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.7917,
    longitude: -7.0926,
  },
};

/* ═══════════════════════════════════════════════════════════════
   SHOPPING ITEMS DATA (20 items)
   ═══════════════════════════════════════════════════════════════ */

const shoppingItems: ShoppingItem[] = [
  {
    name: 'Moroccan Rug',
    category: 'Textiles',
    description:
      'Hand-knotted or hand-woven carpets in styles ranging from thick, plush Beni Ourain rugs with minimalist geometric patterns to vibrant, flat-woven Kilim and Boucherouite textiles. Each rug is unique, woven by Berber women who embed personal stories and protective symbols into the design.',
    priceRange: '500 - 10,000 MAD',
    whereToBuy: ['Marrakech', 'Fes', 'Ouarzazate', 'Chefchaouen'],
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80',
    haggleTip: 'Start at 40-50% of the asking price and work up. Expect to settle at 50-70%. Ask about the materials (wool vs synthetic), weaving time, and origin region.',
    authenticity: 'Authentic hand-woven rugs have slight imperfections and an irregular back. Flip the rug over: machine-made rugs look the same on both sides. A genuine wool rug smells faintly of lanolin when rubbed and bounces back when compressed.',
  },
  {
    name: 'Leather Babouches',
    category: 'Leather',
    description:
      'Traditional Moroccan slippers crafted from soft, naturally tanned leather. Available in pointed or round-toe styles, in every color imaginable. Babouches are the quintessential Moroccan footwear, worn daily by locals and making elegant, lightweight souvenirs.',
    priceRange: '80 - 300 MAD',
    whereToBuy: ['Fes', 'Marrakech', 'Taroudant'],
    image: 'https://images.unsplash.com/photo-1517646287270-a5a0a6e11d26?w=600&q=80',
    haggleTip: 'For a basic pair, aim for 80-120 MAD. Embroidered or high-quality leather pairs command 200-300 MAD. Buy from shops near the tanneries in Fes for the best selection.',
    authenticity: 'Real leather babouches have a distinctive natural smell (not chemical). The leather should be supple, not stiff or plasticky. Check the sole stitching is hand-sewn, not glued.',
  },
  {
    name: 'Argan Oil',
    category: 'Beauty',
    description:
      'Liquid gold from the argan forests of southwestern Morocco, available in culinary (roasted, nutty flavor) and cosmetic (cold-pressed, lighter) grades. Used for skincare, haircare, and cooking. Morocco is the only significant producer of argan oil in the world.',
    priceRange: '150 - 400 MAD',
    whereToBuy: ['Essaouira', 'Agadir', 'Taroudant', 'Marrakech'],
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80',
    haggleTip: 'Buy directly from women\'s cooperatives near Essaouira or Agadir for the best price and quality. Prices in tourist-heavy souks can be 3-4x higher.',
    authenticity: 'Pure argan oil has a light golden color and a subtle nutty scent. It absorbs quickly into skin without leaving a greasy residue. If it smells rancid, feels greasy, or is suspiciously cheap, it may be diluted with cheaper oils.',
  },
  {
    name: 'Ras el Hanout',
    category: 'Spices',
    description:
      'The legendary "head of the shop" spice blend, containing up to 30+ ingredients including cardamom, nutmeg, cinnamon, cloves, dried rosebuds, and more. Every spice merchant has a secret family recipe, making each blend unique.',
    priceRange: '30 - 150 MAD',
    whereToBuy: ['Fes', 'Marrakech', 'Meknes', 'Essaouira'],
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    haggleTip: 'Buy from reputable spice shops in the medina, not tourist stalls on main thoroughfares. A small bag (100g) should cost 30-60 MAD. Ask to smell before buying.',
    authenticity: 'A quality ras el hanout should have a complex, aromatic fragrance with no single spice dominating. Look for visible whole spice fragments. Pre-ground mixes in sealed bags from established merchants are more reliable than open-air market scoops.',
  },
  {
    name: 'Tagine Pot',
    category: 'Ceramics',
    description:
      'The iconic conical clay cooking vessel used to prepare Morocco\'s signature slow-cooked stews. Available in functional unglazed cooking versions and decorative painted versions. The shape traps steam and returns condensed liquid to the dish, keeping it moist.',
    priceRange: '50 - 500 MAD',
    whereToBuy: ['Safi', 'Fes', 'Marrakech', 'Meknes'],
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&q=80',
    haggleTip: 'Cooking tagines are cheaper (50-150 MAD); decorative ones cost more (150-500 MAD). In Safi, the pottery capital, prices are 30-50% lower than in Marrakech.',
    authenticity: 'A functional cooking tagine should be unglazed on the inside and feel heavy and thick. Tap it gently; it should produce a dull, solid sound. Decorative tagines are often not suitable for cooking, so ask before you buy.',
  },
  {
    name: 'Moroccan Lantern',
    category: 'Decor',
    description:
      'Handcrafted metal lanterns in brass, copper, or iron, featuring intricate pierced and hammered designs. When lit, they cast mesmerizing geometric shadow patterns across walls and ceilings. Available from small table-top sizes to large hanging fixtures.',
    priceRange: '100 - 2,000 MAD',
    whereToBuy: ['Marrakech', 'Fes', 'Casablanca'],
    image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&q=80',
    haggleTip: 'Small lanterns start around 100-200 MAD; large, elaborate pieces run 800-2,000 MAD. Visit the metalworking souk for the widest selection and most competitive prices.',
    authenticity: 'Handmade lanterns have slight irregularities in the pierced patterns. Check the seams and joins; mass-produced versions have visible machine welds. Brass and copper should feel heavy and warm to the touch.',
  },
  {
    name: 'Silver Jewelry',
    category: 'Jewelry',
    description:
      'Traditional Berber silver jewelry featuring bold geometric designs, semi-precious stones (coral, amber, amazonite), and symbolic motifs. Fibulae (cloak pins), chunky bracelets, elaborate headpieces, and Tuareg crosses are among the most distinctive pieces.',
    priceRange: '100 - 3,000 MAD',
    whereToBuy: ['Tiznit', 'Essaouira', 'Marrakech', 'Fes'],
    image: 'https://images.unsplash.com/photo-1515562141589-67f0d569b6fc?w=600&q=80',
    haggleTip: 'Tiznit is the silver capital of Morocco and offers the best prices. In Marrakech, prices can be 50-100% higher. Weight is a good indicator of value for silver pieces.',
    authenticity: 'Real silver will have a 925 stamp (sterling silver) or test positive with a silver testing kit. Antique Berber pieces are often tribal silver (lower purity) with a dark patina. If the jewelry is very shiny and light, it may be silver-plated or aluminum.',
  },
  {
    name: 'Zellige Tiles',
    category: 'Decor',
    description:
      'Handcut geometric mosaic tiles in vivid jewel tones, arranged into mesmerizing Islamic geometric patterns. Available as individual loose tiles, framed decorative panels, or small table tops. Smaller pieces make beautiful, packable souvenirs.',
    priceRange: '50 - 1,500 MAD',
    whereToBuy: ['Fes', 'Meknes', 'Marrakech'],
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&q=80',
    haggleTip: 'Individual tiles or small panels (50-200 MAD) make great souvenirs. Full table tops run 500-1,500 MAD. Visit workshops in Fes where you can watch artisans at work.',
    authenticity: 'Handcut zellige tiles have slightly irregular edges and uneven surfaces, which is the charm. Factory-made tiles are perfectly uniform. Look for the chisel marks on the back of each piece.',
  },
  {
    name: 'Handmade Basket',
    category: 'Decor',
    description:
      'Woven baskets made from palm leaf, doum, or raffia in natural and dyed colors. Market baskets, bread baskets, and large storage baskets are practical and decorative. The round woven "belly baskets" and colorful market totes have become global design favorites.',
    priceRange: '30 - 300 MAD',
    whereToBuy: ['Marrakech', 'Essaouira', 'Taroudant'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80',
    haggleTip: 'Simple market baskets start at 30-60 MAD. Larger decorative baskets run 100-300 MAD. Buy directly from weavers in rural souks for the best prices.',
    authenticity: 'Handwoven baskets have natural variations in the weave pattern and color. Check for tight, consistent weaving. Real palm and doum baskets have a natural, slightly sweet grass smell.',
  },
  {
    name: 'Embroidered Kaftan',
    category: 'Textiles',
    description:
      'Elegant long robes adorned with intricate hand-embroidery, beading, and braiding (sfifa and akaad trimmings). Kaftans range from simple everyday cotton versions to lavish silk-and-gold celebration gowns. The Moroccan kaftan is considered one of the world\'s great garment traditions.',
    priceRange: '300 - 5,000 MAD',
    whereToBuy: ['Fes', 'Casablanca', 'Marrakech', 'Rabat'],
    image: 'https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=600&q=80',
    haggleTip: 'Ready-made kaftans start at 300-800 MAD. Custom-made or heavily embroidered pieces cost 1,500-5,000+ MAD. Fes has the finest embroidery tradition.',
    authenticity: 'Hand-embroidered kaftans have slight irregularities in the stitching visible on close inspection. Machine embroidery is perfectly uniform. Quality kaftans use real silk thread for the embroidery, which has a natural sheen.',
  },
  {
    name: 'Berber Blanket',
    category: 'Textiles',
    description:
      'Thick, hand-loomed wool blankets (handira) from the Middle Atlas, traditionally made as bridal gifts. Characterized by cream or white backgrounds with distinctive colored stripes and sequin embellishments. These blankets are now prized globally as throws, wall hangings, and bedspreads.',
    priceRange: '400 - 2,000 MAD',
    whereToBuy: ['Azrou', 'Ifrane', 'Marrakech', 'Ouarzazate'],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    haggleTip: 'Buy in Middle Atlas towns (Azrou, Ifrane) for the best prices, 30-50% lower than Marrakech. A genuine handira takes weeks to weave, which justifies the price.',
    authenticity: 'Authentic Berber blankets are made from pure sheep wool, which has a natural lanolin smell. The weave should be tight but slightly uneven. Synthetic versions feel lighter and slipperier.',
  },
  {
    name: 'Thuja Wood Box',
    category: 'Decor',
    description:
      'Beautifully crafted boxes, chess sets, and decorative items made from aromatic thuya burl wood, unique to the Essaouira region. The swirling grain patterns of the burl wood are naturally ornate, and artisans enhance them with cedar, lemon wood, and mother-of-pearl inlays.',
    priceRange: '50 - 800 MAD',
    whereToBuy: ['Essaouira', 'Marrakech'],
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80',
    haggleTip: 'Small jewelry boxes start at 50-100 MAD; larger items with inlay work run 300-800 MAD. Essaouira workshops offer the best prices and you can watch the artisans work.',
    authenticity: 'Genuine thuya wood has a distinctive warm, resinous fragrance. The burl grain creates unique swirling patterns that are never repeated. If the smell is weak or the grain pattern looks printed, it may be fake.',
  },
  {
    name: 'Ceramic Bowls',
    category: 'Ceramics',
    description:
      'Hand-painted ceramic bowls in the distinctive styles of different Moroccan cities: Fes blue-and-white, Safi multicolor, and Tamegroute green. Used for serving tagines, salads, and olives, these versatile pieces are both functional and decorative.',
    priceRange: '30 - 200 MAD',
    whereToBuy: ['Fes', 'Safi', 'Marrakech', 'Meknes'],
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80',
    haggleTip: 'Small bowls cost 30-60 MAD; large serving bowls 80-200 MAD. Buy in Safi for the lowest prices, as it is the pottery capital. In tourist areas, negotiate 30-50% off.',
    authenticity: 'Handmade ceramics have slight weight and shape variations. Turn the bowl over to check for a potter\'s mark. The glaze on handmade pieces may have small bubbles or color variations that add character.',
  },
  {
    name: 'Moroccan Tea Set',
    category: 'Decor',
    description:
      'An ornate silver or nickel-silver teapot with matching engraved tea glasses, often presented on a hammered metal tray. The tea set is central to Moroccan hospitality and makes an impressive, culturally meaningful gift.',
    priceRange: '200 - 1,500 MAD',
    whereToBuy: ['Fes', 'Marrakech', 'Meknes', 'Tangier'],
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80',
    haggleTip: 'A basic set (teapot + 6 glasses) starts at 200-400 MAD. Silver-plated or heavily engraved sets cost 600-1,500 MAD. Test the pour before buying to make sure the lid stays on.',
    authenticity: 'Quality teapots are made from solid nickel-silver (maillechort) or silver-plated brass and should feel heavy. Cheap versions are thin, light aluminum. Check that the hinge is solid and the lid fits snugly.',
  },
  {
    name: 'Saffron',
    category: 'Spices',
    description:
      'Premium saffron threads from the Taliouine region of southern Morocco, considered among the finest in the world. These precious red stigmas of the Crocus sativus flower impart a golden color, floral aroma, and unique flavor to dishes, teas, and desserts.',
    priceRange: '30 - 150 MAD per gram',
    whereToBuy: ['Taliouine', 'Marrakech', 'Fes', 'Taroudant'],
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    haggleTip: 'Buy in Taliouine or from reputable spice merchants for the best quality. A gram of top-quality saffron costs 50-100 MAD. If the price seems too good to be true, it probably is.',
    authenticity: 'Real saffron threads are uniformly red with a slight orange tint at the tips. They should have a strong, honey-like aroma. When placed in warm water, genuine saffron slowly releases golden-yellow color; fake saffron releases color immediately and may turn the water red.',
  },
  {
    name: 'Orange Blossom Water',
    category: 'Food',
    description:
      'Distilled from the blossoms of bitter orange trees, this fragrant water is used in Moroccan pastries, salads, drinks, and as a refreshing face mist. The Dades and Kelaat M\'gouna valleys are the primary production regions.',
    priceRange: '20 - 80 MAD',
    whereToBuy: ['Kelaat M\'gouna', 'Fes', 'Marrakech', 'Meknes'],
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=80',
    haggleTip: 'Buy from herbalists (attarine) or directly from distilleries during spring blossom season. A large bottle (500ml) costs 30-60 MAD from local producers.',
    authenticity: 'Pure orange blossom water has a delicate, sweet floral aroma. It should be clear, not cloudy, and have no artificial fragrance notes. Shake the bottle; real flower water produces fine, quickly dissipating bubbles.',
  },
  {
    name: 'Handwoven Scarf',
    category: 'Textiles',
    description:
      'Lightweight scarves and shawls in cotton, silk, or wool, handwoven on traditional looms. Options range from simple monochrome wraps to intricately patterned pieces with fringed edges. Cactus silk (sabra) scarves from the south have a distinctive sheen.',
    priceRange: '50 - 400 MAD',
    whereToBuy: ['Marrakech', 'Fes', 'Chefchaouen', 'Ouarzazate'],
    image: 'https://images.unsplash.com/photo-1601924921557-45e8e0e67fb2?w=600&q=80',
    haggleTip: 'Cotton scarves cost 50-100 MAD; cactus silk (sabra) pieces run 100-250 MAD; real silk scarves cost 200-400 MAD. Feel the fabric quality before negotiating.',
    authenticity: 'Handwoven scarves have slight irregularities in the weave. Cactus silk (sabra) has a distinctive crinkly texture and muted sheen. True silk is smooth, drapes beautifully, and feels cool to the touch.',
  },
  {
    name: 'Copper Tray',
    category: 'Decor',
    description:
      'Large, round hammered and engraved copper or brass trays used as serving platters and decorative wall hangings. The intricate geometric and arabesque engravings are done entirely by hand, taking skilled artisans days to complete a single piece.',
    priceRange: '200 - 1,500 MAD',
    whereToBuy: ['Fes', 'Marrakech', 'Meknes'],
    image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&q=80',
    haggleTip: 'Small trays (30cm) start at 200-400 MAD; large pieces (60cm+) run 800-1,500 MAD. Visit the metalworkers\' souk early in the morning when artisans are more willing to negotiate.',
    authenticity: 'Hand-engraved trays have slightly uneven line depths and widths. Run your finger across the engraving; you should feel the ridges. Machine-stamped trays have perfectly uniform patterns and feel flat.',
  },
  {
    name: 'Amlou (Almond Spread)',
    category: 'Food',
    description:
      'A rich, creamy spread made from roasted almonds, argan oil, and honey, often called "Moroccan peanut butter." Amlou is a traditional Berber breakfast staple from the Souss region, served with bread. It makes a delicious, authentic, and easy-to-pack food souvenir.',
    priceRange: '40 - 120 MAD',
    whereToBuy: ['Essaouira', 'Agadir', 'Taroudant', 'Marrakech'],
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&q=80',
    haggleTip: 'Buy from argan cooperatives for the freshest product and best price. A 250g jar costs 40-70 MAD from cooperatives versus 80-120 MAD in tourist shops.',
    authenticity: 'Quality amlou should have a smooth, slightly grainy texture with visible almond pieces. The argan oil should give it a nutty, slightly smoky flavor. Avoid versions that taste overly sweet or have a chemical aftertaste.',
  },
  {
    name: 'Fossilized Trilobites',
    category: 'Decor',
    description:
      'Morocco is one of the world\'s richest sources of fossils, particularly trilobites dating back 300-500 million years. Available as individual specimens, polished plates, and decorative items. The Erfoud and Alnif regions in the southeastern desert are the primary fossil hunting grounds.',
    priceRange: '50 - 2,000 MAD',
    whereToBuy: ['Erfoud', 'Midelt', 'Marrakech', 'Ouarzazate'],
    image: 'https://images.unsplash.com/photo-1504870712536-2d1d2d50be00?w=600&q=80',
    haggleTip: 'Buy directly in Erfoud or along the road between Erfoud and Rissani for the lowest prices. Small loose trilobites cost 50-200 MAD; large polished plates run 500-2,000 MAD.',
    authenticity: 'Genuine trilobites have fine, detailed segments and natural coloring (dark brown/black). Fake ones are often carved from stone and painted. Look for the natural matrix (surrounding rock). A genuine fossil will have natural imperfections and visible geological layering.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   SOUK GUIDES
   ═══════════════════════════════════════════════════════════════ */

const soukGuides = [
  {
    city: 'Marrakech',
    name: 'Souks of the Marrakech Medina',
    overview:
      'The most famous shopping destination in Morocco, the Marrakech souks radiate outward from the central Jemaa el-Fna square in a labyrinth of covered alleyways. Each souk specializes in a different craft: Souk Semmarine for textiles and clothing, Souk des Teinturiers for dyed fabrics, Souk Haddadine for metalwork, Souk Chouari for woodworking, and Souk Smata for babouches and leather goods.',
    tips: [
      'The further you walk from Jemaa el-Fna, the lower the prices tend to be',
      'Visit in the morning (9-11 AM) for a calmer, less crowded experience',
      'The fixed-price Ensemble Artisanal near the Koutoubia Mosque is excellent for benchmarking fair prices',
      'Gueliz (the new town) has modern boutiques selling curated Moroccan crafts at fixed prices',
    ],
    bestFor: 'Lanterns, leather goods, textiles, spices, Berber jewelry',
    priceLevel: 'Tourist prices (negotiate firmly)',
  },
  {
    city: 'Fes',
    name: 'Fes el-Bali Medina',
    overview:
      'The world\'s largest car-free urban zone, Fes el-Bali is a UNESCO World Heritage Site with over 9,000 narrow alleyways. The medina\'s souks are more authentic and less tourist-oriented than Marrakech. Key areas include the tanneries district (Chouara Tannery), the pottery quarter near Bab el-Amer, the brass and copper souk near Place Seffarine, and the spice and perfume alley near Attarine Medersa.',
    tips: [
      'Hire an official guide (250-400 MAD for a half-day) to navigate the maze-like medina on your first visit',
      'The tanneries area has persistent touts; be firm about which leather shop you visit',
      'Fes blue ceramics and embroidered textiles are notably higher quality than elsewhere',
      'Wednesday and Sunday are local market days when rural vendors sell at the outskirts',
    ],
    bestFor: 'Ceramics, leather (tanneries), zellige tiles, embroidery, brass',
    priceLevel: 'Fair prices (less tourist inflation than Marrakech)',
  },
  {
    city: 'Essaouira',
    name: 'Essaouira Medina & Art Galleries',
    overview:
      'Essaouira\'s compact, grid-planned medina (also UNESCO-listed) is one of the most pleasant shopping experiences in Morocco. The relaxed atmosphere means less aggressive selling and easier negotiation. The town is particularly famous for thuya woodwork, silver jewelry, argan oil, and art. Avenue de l\'Istiqlal and the streets around Place Moulay Hassan are the main shopping areas.',
    tips: [
      'Visit the women\'s argan oil cooperatives on the road to Marrakech for the purest oil at fair prices',
      'The Skala de la Ville (sea ramparts) area has many woodworking ateliers',
      'Essaouira has a thriving contemporary art scene; galleries in the medina sell original paintings',
      'Prices are generally 20-30% lower than Marrakech for similar items',
    ],
    bestFor: 'Thuya woodwork, argan oil, silver jewelry, contemporary art, amlou',
    priceLevel: 'Moderate (lower than Marrakech, relaxed negotiation)',
  },
  {
    city: 'Chefchaouen',
    name: 'The Blue City Medina',
    overview:
      'Chefchaouen\'s photogenic blue-washed medina is small enough to explore without getting lost, making it a stress-free shopping experience. The town specializes in handwoven blankets, goat cheese, locally made soaps, woven goods from the Rif Mountains, and distinctive blue-painted pottery. The main shopping streets run from Place Outa el-Hammam toward Ras el-Ma (the source).',
    tips: [
      'The locally made goat cheese (jben) is unique to the region and makes a great edible souvenir',
      'Handwoven Rif Mountain blankets and woolens are less expensive here than in Marrakech',
      'Blue-painted items are made specifically for the tourist market but are charming nonetheless',
      'Monday and Thursday are the main souk days when rural Berber vendors come to town',
    ],
    bestFor: 'Woven blankets, goat cheese, handmade soaps, wool goods, blue pottery',
    priceLevel: 'Budget-friendly (least tourist inflation)',
  },
  {
    city: 'Fes & Safi',
    name: 'Morocco\'s Pottery Capitals',
    overview:
      'For serious ceramics shoppers, Safi and Fes are the essential destinations. Safi, on the Atlantic coast, is the industrial pottery capital where you can visit large workshops and buy directly at wholesale prices. Fes is home to the more refined, hand-painted blue-and-white ceramic tradition. In both cities, visiting the workshops where artisans shape, paint, and fire the pieces adds immense value to the purchase.',
    tips: [
      'In Safi, the Colline des Potiers (Potters\' Hill) has dozens of workshops open to visitors',
      'Fes ceramics use traditional natural pigments (cobalt blue, antimony black) that are food-safe',
      'Negotiate sets (6 bowls, a tagine, and serving dishes) for significant volume discounts',
      'Ask about shipping; many workshops in Safi have experience packing and mailing internationally',
    ],
    bestFor: 'Tagines, bowls, plates, decorative tiles, ceramic lamps',
    priceLevel: 'Wholesale prices in Safi, moderate in Fes',
  },
  {
    city: 'Tiznit',
    name: 'Silver Capital of Morocco',
    overview:
      'This small walled town in southern Morocco is the undisputed center of Berber silver jewelry production. The circular souk in the town center has dozens of silver workshops where you can watch jewelers at work and buy directly. Prices here are a fraction of what you would pay in Marrakech or Essaouira for the same quality.',
    tips: [
      'Visit the Souk des Bijoutiers (jewelers\' souk) inside the old medina walls',
      'Bring a small magnifying glass to check for silver hallmarks (925 for sterling)',
      'Antique Berber pieces are increasingly rare; most "antique" pieces in tourist markets are reproductions',
      'Combine a Tiznit silver shopping trip with nearby Taroudant for leather and Agadir for the beach',
    ],
    bestFor: 'Silver jewelry, Berber fibulae, Tuareg crosses, amber pendants',
    priceLevel: 'Lowest prices in Morocco for silver',
  },
];

/* ═══════════════════════════════════════════════════════════════
   BARGAINING SCRIPTS
   ═══════════════════════════════════════════════════════════════ */

const bargainingScripts = [
  {
    scenario: 'Opening a Negotiation',
    dialogue: [
      { speaker: 'You', line: '"Salaam! These are beautiful. How much for this one?" (point casually)' },
      { speaker: 'Seller', line: '"For you, my friend, special price: 800 dirhams."' },
      { speaker: 'You', line: '"Oh, that is more than I expected. I was thinking around 350." (smile warmly)' },
      { speaker: 'Seller', line: '"350?! Impossible! This is genuine handmade. I can do 700."' },
      { speaker: 'You', line: '"I understand it is quality work. What about 400? That is fair."' },
    ],
    tip: 'Start at about 40-50% of the asking price. The seller expects this and has priced accordingly. Stay relaxed and friendly throughout.',
  },
  {
    scenario: 'Using the Walk-Away',
    dialogue: [
      { speaker: 'You', line: '"500 is the most I can spend today. Thank you, but I will keep looking."' },
      { speaker: 'Seller', line: '"Wait, wait! Okay, for you because you are nice: 550."' },
      { speaker: 'You', line: '"I really like it, but 500 is my budget. 500 and we have a deal?"' },
      { speaker: 'Seller', line: '"Okay, 500. You are killing me, but okay!" (both laugh)' },
    ],
    tip: 'The walk-away is your strongest card. Once you physically turn and start to leave, the real price appears. Only use this if you are genuinely prepared to leave.',
  },
  {
    scenario: 'Buying Multiple Items',
    dialogue: [
      { speaker: 'You', line: '"I like these three scarves. What is the best price if I take all three?"' },
      { speaker: 'Seller', line: '"Each one is 200, so 600 for three."' },
      { speaker: 'You', line: '"For three I would expect a volume discount. 400 for all three?"' },
      { speaker: 'Seller', line: '"I can do 500 for three. That is already a good deal."' },
      { speaker: 'You', line: '"450 and I will buy right now, cash." (show the money)' },
      { speaker: 'Seller', line: '"Okay, 450. Deal!"' },
    ],
    tip: 'Bundling items is an excellent strategy. Sellers prefer larger transactions and will give better per-item prices. Having cash visibly ready closes deals faster.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PRICE GUIDE DATA
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { item: 'Leather babouches (basic)', touristPrice: '200-300 MAD', fairPrice: '80-120 MAD' },
  { item: 'Leather babouches (embroidered)', touristPrice: '400-600 MAD', fairPrice: '200-300 MAD' },
  { item: 'Leather bag (medium)', touristPrice: '600-1,000 MAD', fairPrice: '300-500 MAD' },
  { item: 'Small Beni Ourain rug (1x1.5m)', touristPrice: '3,000-5,000 MAD', fairPrice: '1,200-2,500 MAD' },
  { item: 'Large Beni Ourain rug (2x3m)', touristPrice: '8,000-15,000 MAD', fairPrice: '3,500-7,000 MAD' },
  { item: 'Boucherouite rug (medium)', touristPrice: '2,000-4,000 MAD', fairPrice: '800-1,500 MAD' },
  { item: 'Argan oil (1 liter, cosmetic)', touristPrice: '400-600 MAD', fairPrice: '200-300 MAD' },
  { item: 'Argan oil (1 liter, culinary)', touristPrice: '300-500 MAD', fairPrice: '150-250 MAD' },
  { item: 'Ras el hanout (100g)', touristPrice: '80-150 MAD', fairPrice: '30-60 MAD' },
  { item: 'Saffron (1g, Taliouine)', touristPrice: '100-200 MAD', fairPrice: '50-80 MAD' },
  { item: 'Tagine pot (cooking)', touristPrice: '150-300 MAD', fairPrice: '50-120 MAD' },
  { item: 'Tagine pot (decorative)', touristPrice: '300-600 MAD', fairPrice: '150-300 MAD' },
  { item: 'Ceramic bowl (medium)', touristPrice: '80-150 MAD', fairPrice: '30-60 MAD' },
  { item: 'Metal lantern (small)', touristPrice: '200-400 MAD', fairPrice: '100-200 MAD' },
  { item: 'Metal lantern (large)', touristPrice: '1,000-2,500 MAD', fairPrice: '500-1,200 MAD' },
  { item: 'Tea set (teapot + 6 glasses)', touristPrice: '400-800 MAD', fairPrice: '200-400 MAD' },
  { item: 'Silver Berber bracelet', touristPrice: '300-600 MAD', fairPrice: '150-300 MAD' },
  { item: 'Cotton scarf', touristPrice: '100-200 MAD', fairPrice: '50-100 MAD' },
  { item: 'Cactus silk (sabra) scarf', touristPrice: '200-400 MAD', fairPrice: '100-200 MAD' },
  { item: 'Thuya wood box (small)', touristPrice: '100-200 MAD', fairPrice: '50-100 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   SHOPPING TIPS DATA
   ═══════════════════════════════════════════════════════════════ */

const shoppingTips = {
  haggling: [
    'Always greet the shopkeeper warmly and take your time. Rushing signals that you are an easy target.',
    'Start at 40-50% of the asking price and be prepared to settle at 50-70%. The first price is never the real price.',
    'Be prepared to walk away. This is the most powerful negotiation tool. If the seller stops you, the price will drop.',
    'Compare prices at multiple shops before committing. This gives you a realistic sense of fair market value.',
    'Buy multiple items from the same seller for a better overall deal. Shopkeepers prefer larger transactions.',
    'Keep the mood friendly and light. Haggling is a social ritual, not a battle. Humor goes a long way.',
    'Know that fixed-price shops exist (look for "prix fixe" signs) and are useful for establishing baseline prices.',
  ],
  bestMarkets: [
    { name: 'Marrakech Medina Souks', description: 'The most famous market in Morocco. Sprawling, chaotic, and endlessly fascinating. Best for lanterns, leather, textiles, and spices.' },
    { name: 'Fes Medina (Fes el-Bali)', description: 'The world\'s largest car-free urban area. More authentic and less touristy than Marrakech. Best for ceramics, leather, zellige, and metalwork.' },
    { name: 'Essaouira Medina', description: 'A relaxed, artistic coastal town with excellent thuya woodwork, silver jewelry, argan oil, and art galleries.' },
    { name: 'Chefchaouen Medina', description: 'The blue city\'s compact medina is ideal for woven goods, goat cheese, and locally made soaps in a relaxed atmosphere.' },
    { name: 'Tiznit Souk', description: 'The silver capital of Morocco. Best destination for authentic Berber silver jewelry at fair prices.' },
    { name: 'Safi Pottery Quarter', description: 'Morocco\'s pottery capital, where you can watch artisans work and buy directly at workshop prices.' },
  ],
  shipping: [
    'Most shops in tourist areas can arrange shipping. Get a written receipt with a tracking number.',
    'For large items (rugs, furniture), use a professional shipping company like Morocco Logistics or DHL.',
    'Hand-carry small, valuable items (saffron, argan oil, jewelry) in your luggage for safety.',
    'Check your home country\'s customs rules for duty-free allowances. Many countries allow 200-400 USD/EUR of goods.',
    'Wrap ceramics and fragile items in your clothing inside your checked bag. Bubble wrap is available in medina shops.',
    'Ask for a certificate of origin for high-value artisanal goods. This can help with customs and proves authenticity.',
  ],
};

/* ═══════════════════════════════════════════════════════════════
   SHIPPING & CUSTOMS GUIDE
   ═══════════════════════════════════════════════════════════════ */

const shippingGuide = [
  {
    title: 'Carrying Items in Luggage',
    description:
      'The simplest option for small to medium purchases. Most airlines allow 23 kg checked baggage. Pack ceramics wrapped in clothing in the center of your bag. Spices, argan oil (sealed in bags), and small crafts travel well in carry-on. Liquids in carry-on must follow the 100ml rule; pack larger bottles in checked luggage.',
    costEstimate: 'Free (within baggage allowance) or 200-600 MAD for extra bag',
  },
  {
    title: 'Morocco Post (La Poste)',
    description:
      'The national postal service offers affordable international shipping. A 5 kg package to Europe costs approximately 200-350 MAD, to North America 300-500 MAD. Delivery takes 2-4 weeks. Available at post offices in every city. Registered mail with tracking is recommended.',
    costEstimate: '200-500 MAD for a 5 kg package',
  },
  {
    title: 'DHL / FedEx / UPS',
    description:
      'International couriers offer the fastest and most reliable shipping. DHL has offices in Marrakech, Casablanca, Fes, and Agadir. A 5 kg package to Europe costs 500-900 MAD with 3-5 day delivery. More expensive but includes full tracking and insurance.',
    costEstimate: '500-1,500 MAD depending on weight and destination',
  },
  {
    title: 'Shop-Arranged Shipping',
    description:
      'Many established shops, especially rug dealers and furniture sellers, have their own shipping arrangements with freight companies. They handle packing, customs documentation, and door-to-door delivery. Get everything in writing: total cost, delivery timeline, tracking number, and refund policy if items arrive damaged.',
    costEstimate: 'Varies (1,000-5,000+ MAD for large items like rugs)',
  },
  {
    title: 'Customs Duties',
    description:
      'Most countries allow a duty-free personal allowance (typically 200-800 USD/EUR depending on country). Above this threshold, expect to pay import duty (usually 5-20%) plus local sales tax (VAT/GST). Textiles, leather goods, and handicrafts often have lower duty rates than luxury goods. Keep receipts; customs may ask you to declare high-value items.',
    costEstimate: '5-20% import duty above your duty-free allowance',
  },
  {
    title: 'Prohibited & Restricted Items',
    description:
      'Most Moroccan crafts can be exported freely. However, genuine antiques (over 100 years old) require an export permit from the Ministry of Culture. Certain fossils require documentation. Food items (spices, argan oil, amlou) are generally fine but check your destination country\'s regulations on agricultural products. Never attempt to buy or export protected wildlife products.',
    costEstimate: 'N/A',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function ShoppingPage() {
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
            src="https://images.unsplash.com/photo-1531501410720-c8d437636169?w=1600&q=80"
            alt="Colorful Moroccan souk with handmade lanterns and crafts"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Shopping</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Souks &amp; Markets
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Shopping in Morocco
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From hand-knotted Berber rugs to fragrant spice blends, discover the 20 must-buy treasures of
              Morocco&apos;s legendary souks and learn to shop like a local.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Shopping in Morocco is an immersive sensory experience unlike anywhere else in the world. The
              labyrinthine souks of Marrakech and Fes overflow with handcrafted treasures &mdash; vibrant textiles,
              gleaming metalwork, aromatic spices, and artisanal goods that represent centuries of living craft
              traditions. Every item tells a story, and the art of haggling transforms a simple purchase into a
              memorable cultural exchange.
            </p>
            <p>
              This guide covers the 20 essential items to buy in Morocco, where to find the best quality, how to
              verify authenticity, and practical tips for negotiating fair prices. Whether you are seeking a hand-woven
              Beni Ourain rug, a bottle of pure argan oil, or a souvenir that captures the magic of your journey,
              you will find everything you need to shop with confidence and bring a piece of Morocco home.
            </p>
          </div>
        </div>
      </section>

      {/* ── Shopping Items (Client Component) ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ShoppingBag className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              20 Must-Buy Items
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Our curated selection of the most authentic, beautiful, and memorable things to buy in Morocco,
              with expert tips on price, quality, and where to find them.
            </p>
          </div>
          <ShoppingClient items={shoppingItems} />
        </div>
      </section>

      {/* ── Comprehensive Souk Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Store className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Souk-by-Souk Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Each Moroccan city offers a distinct shopping experience. Here is your guide to
              the best souks and what to look for in each one.
            </p>
          </div>

          <div className="space-y-6">
            {soukGuides.map((souk) => (
              <div key={souk.city} className="card-moroccan overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {souk.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-sm text-[var(--color-primary)] font-medium">
                      <MapPin className="w-3.5 h-3.5" /> {souk.city}
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                    {souk.overview}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">Insider Tips</p>
                      <ul className="space-y-2">
                        {souk.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <Star className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">Best For</p>
                        <p className="text-sm text-[var(--text-secondary)]">{souk.bestFor}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">Price Level</p>
                        <p className="text-sm text-[var(--text-secondary)]">{souk.priceLevel}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bargaining Scripts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <HandCoins className="w-7 h-7 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Bargaining Scripts
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Real-world negotiation scripts you can adapt for your own shopping
              encounters. Practicing these before you arrive will save you money and
              boost your confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {bargainingScripts.map((script) => (
              <div key={script.scenario} className="card-moroccan p-6 md:p-8 flex flex-col">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4">
                  {script.scenario}
                </h3>
                <div className="space-y-3 flex-1">
                  {script.dialogue.map((line, i) => (
                    <div
                      key={i}
                      className={`flex gap-3 ${
                        line.speaker === 'You' ? '' : 'flex-row-reverse text-right'
                      }`}
                    >
                      <span
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          line.speaker === 'You'
                            ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                            : 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                        }`}
                      >
                        {line.speaker === 'You' ? 'You' : 'S'}
                      </span>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic flex-1">
                        {line.line}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[var(--border)]">
                  <p className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-1">
                    Pro Tip
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {script.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Banknote className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Price Guide: What Things Really Cost
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Know before you go. This table shows the typical tourist price versus the
              fair local price for the most common purchases. All prices are in Moroccan
              Dirham (MAD). 10 MAD is approximately 1 USD / 0.90 EUR.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left px-4 md:px-6 py-3 font-semibold text-[var(--text-primary)]">Item</th>
                    <th className="text-left px-4 md:px-6 py-3 font-semibold text-[var(--text-primary)]">
                      Tourist Price
                    </th>
                    <th className="text-left px-4 md:px-6 py-3 font-semibold text-[var(--color-primary)]">
                      Fair Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {priceGuide.map((row, i) => (
                    <tr
                      key={row.item}
                      className={i % 2 === 0 ? '' : 'bg-[var(--surface-muted)]'}
                    >
                      <td className="px-4 md:px-6 py-3 text-[var(--text-primary)] font-medium">
                        {row.item}
                      </td>
                      <td className="px-4 md:px-6 py-3 text-[var(--text-secondary)] line-through opacity-60">
                        {row.touristPrice}
                      </td>
                      <td className="px-4 md:px-6 py-3 text-[var(--color-primary)] font-semibold">
                        {row.fairPrice}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 md:px-6 py-4 bg-[var(--color-primary)]/5 text-xs text-[var(--text-secondary)]">
              Prices as of 2025. Fair prices assume good-quality handmade goods purchased from
              established artisan shops or cooperatives. Prices vary by season, location, and quality.
            </div>
          </div>
        </div>
      </section>

      {/* ── Shopping Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <MessageSquare className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Shopping Tips &amp; Advice
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Master the art of shopping in Morocco with these practical tips on haggling, choosing markets, and
              getting your treasures safely home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Haggling Guide */}
            <div className="card-moroccan p-6 md:p-8">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                <HandCoins className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4">
                How to Haggle
              </h3>
              <ul className="space-y-3">
                {shoppingTips.haggling.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Best Markets */}
            <div className="card-moroccan p-6 md:p-8">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4">
                Best Markets &amp; Souks
              </h3>
              <ul className="space-y-4">
                {shoppingTips.bestMarkets.map((market) => (
                  <li key={market.name}>
                    <p className="font-semibold text-sm text-[var(--text-primary)] flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      {market.name}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-0.5 ml-5">
                      {market.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Home */}
            <div className="card-moroccan p-6 md:p-8">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                <Truck className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4">
                Shipping Your Purchases Home
              </h3>
              <ul className="space-y-3">
                {shoppingTips.shipping.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Warning Box */}
          <div className="mt-8 card-moroccan p-6 md:p-8 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-accent)]/10 shrink-0">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Scam Awareness</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                  Be cautious of unsolicited &ldquo;guides&rdquo; who lead you to specific shops (they earn a commission that
                  inflates your price). Avoid buying from aggressive sellers in tourist hotspots where prices are
                  heavily marked up. If a deal seems too good to be true &mdash; especially for saffron, argan oil,
                  or silver &mdash; it probably is. Take your time, trust your instincts, and remember that the
                  best shopping experiences happen when you wander off the beaten path and discover your own
                  favorite shops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Shipping & Customs Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Globe className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Shipping &amp; Customs Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to know about getting your Moroccan treasures home safely,
              from postal services and couriers to customs duties and restricted items.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shippingGuide.map((method) => (
              <div key={method.title} className="card-moroccan p-6 md:p-8 flex flex-col">
                <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10 mb-3 self-start">
                  <Package className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  {method.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                  {method.description}
                </p>
                {method.costEstimate !== 'N/A' && (
                  <div className="mt-4 pt-3 border-t border-[var(--border)]">
                    <p className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide">
                      Estimated Cost
                    </p>
                    <p className="text-sm text-[var(--color-primary)] font-semibold mt-0.5">
                      {method.costEstimate}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Shop Like a Local?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Explore Morocco&apos;s legendary medinas and souks. Browse our city guides for detailed market maps, or
            book a guided souk tour for the ultimate shopping experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Cities
            </Link>
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" /> Souk Tours
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
