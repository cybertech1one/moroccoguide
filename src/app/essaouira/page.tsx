import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Wind,
  Star,
  MapPin,
  Clock,
  Plane,
  Car,
  Bus,
  Bed,
  Utensils,
  Sun,
  Camera,
  Waves,
  ArrowRight,
  Calendar,
  ThermometerSun,
  Compass,
  Heart,
  Globe,
  Sparkles,
  Eye,
  Fish,
  Sailboat,
  Mountain,
  Music,
  Palette,
  Shield,
  TreePine,
  ShoppingBag,
  BookOpen,
  Landmark,
  Coffee,
  Footprints,
  Users,
  DollarSign,
  Info,
  CheckCircle,
  AlertTriangle,
  Anchor,
  Building2,
} from 'lucide-react';

/* ================================================================
   METADATA + JSON-LD
   ================================================================ */

export const metadata: Metadata = {
  title: "Essaouira Travel Guide - Morocco's Wind City on the Atlantic | MoroccoGuide",
  description:
    "Discover Essaouira, Morocco's enchanting Wind City. Explore the UNESCO medina, Portuguese ramparts, world-class kitesurfing, the Gnaoua Festival, fresh seafood at the port, and the legendary art scene on the Atlantic coast.",
  openGraph: {
    title: "Essaouira - Morocco's Wind City on the Atlantic | MoroccoGuide",
    description:
      'UNESCO medina, Portuguese ramparts, world-class wind sports, the Gnaoua & World Music Festival, fresh-grilled seafood, and bohemian art galleries. Your complete guide to Essaouira.',
    url: 'https://moroccoguide.com/essaouira',
    type: 'website',
    images: [
      {
        url: '/images/hero-essaouira-port.webp',
        width: 2800,
        height: 1600,
        alt: 'Essaouira port and medina walls on the Atlantic coast, Morocco',
      },
    ],
  },
  alternates: {
    canonical: 'https://moroccoguide.com/essaouira',
  },
};

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function EssaouiraPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Essaouira',
    description:
      'A UNESCO-listed Atlantic coastal city in Morocco known for its 18th-century medina, Portuguese ramparts, world-class wind sports, vibrant art scene, the annual Gnaoua & World Music Festival, and legendary fresh seafood.',
    url: 'https://moroccoguide.com/essaouira',
    touristType: ['Wind Sports Enthusiasts', 'Culture Lovers', 'Foodies', 'Artists', 'Music Fans', 'History Buffs'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.5085,
      longitude: -9.7595,
    },
    includesAttraction: [
      { '@type': 'TouristAttraction', name: 'Skala de la Ville' },
      { '@type': 'TouristAttraction', name: 'Skala du Port' },
      { '@type': 'TouristAttraction', name: 'Moulay Hassan Square' },
      { '@type': 'TouristAttraction', name: 'Essaouira Medina (UNESCO)' },
      { '@type': 'TouristAttraction', name: 'Essaouira Beach' },
      { '@type': 'TouristAttraction', name: 'Essaouira Port & Fish Market' },
      { '@type': 'TouristAttraction', name: 'Borj El Baroud' },
      { '@type': 'TouristAttraction', name: 'Sidi Mohammed Ben Abdallah Museum' },
      { '@type': 'TouristAttraction', name: 'Diabat Ruins' },
      { '@type': 'TouristAttraction', name: 'Gnaoua & World Music Festival' },
    ],
  };

  /* -- Data Arrays -- */

  const attractions = [
    {
      name: 'Skala de la Ville',
      description: "The iconic 18th-century sea bastion stretching along the northern cliffs of the medina. Lined with a row of European bronze cannons pointed at the Atlantic, this fortification was built by Sultan Mohammed III and designed by French architect Theodore Cornut. The ramparts offer sweeping panoramic views of the ocean, the Iles Purpuraires, and the medina rooftops. Orson Welles filmed scenes from Othello here in 1949, and Game of Thrones shot Astapor and Slaver's Bay sequences on these very walls.",
      image: '/images/hero-essaouira-port.webp',
      type: 'Historic Fortress',
      rating: 4.9,
    },
    {
      name: 'Skala du Port',
      description: "The imposing circular watchtower guarding the entrance to Essaouira's working fishing port. Built in the 18th century as part of the city's fortification system, this bastion offers dramatic views of the harbour, the crashing Atlantic waves, and the fishing boats returning with their daily catch. The tower served as the filming location for the Walk of Punishment scene in Game of Thrones Season 3.",
      image: '/images/hero-essaouira-port.webp',
      type: 'Historic Fortress',
      rating: 4.8,
    },
    {
      name: 'Moulay Hassan Square',
      description: "The vibrant heart of Essaouira and the main gathering place in the medina. This wide, sun-drenched plaza is ringed by cafes with outdoor terraces, restaurants, and the arched entrance to the port. By day it hums with vendors, street musicians, and tourists sipping mint tea. During the Gnaoua Festival in June, it transforms into the main concert stage with performances that electrify thousands of spectators.",
      image: '/images/hero-essaouira-port.webp',
      type: 'City Square',
      rating: 4.7,
    },
    {
      name: 'Essaouira Port & Fish Market',
      description: "One of Morocco's most active Atlantic fishing ports, where blue wooden trawlers unload sardines, sea bass, sole, shrimp, and octopus each morning. The open-air fish market is a sensory whirlwind of shouting fishmongers, glistening catches, and swooping seagulls. Choose your fish at the stalls and have it grilled on the spot at the outdoor barbecue stands for 50 to 100 MAD per plate, served with bread, salad, and harissa.",
      image: '/images/hero-essaouira-port.webp',
      type: 'Market & Food',
      rating: 4.8,
    },
    {
      name: 'Essaouira Medina (UNESCO)',
      description: "Inscribed as a UNESCO World Heritage Site in 2001, the medina of Essaouira is a masterpiece of late-18th-century military architecture blended with North African town planning. Unlike the labyrinthine medinas of Fes or Marrakech, Essaouira's streets follow a rational grid pattern inspired by European urban design. The medina is enclosed by crenellated walls and contains the mellah (Jewish quarter), souks, zawiyas, mosques, and hundreds of artisan workshops.",
      image: '/images/hero-essaouira-port.webp',
      type: 'UNESCO Heritage',
      rating: 4.9,
    },
    {
      name: 'Essaouira Beach',
      description: "A vast crescent of golden sand stretching south from the medina walls for over 5 kilometers, battered by consistent Atlantic trade winds. The northern end near the medina is popular with football players and camel ride operators, while the southern stretch toward Diabat attracts kitesurfers and windsurfers. At low tide, the wet sand becomes a mirror reflecting the sky, creating spectacular photography conditions.",
      image: '/images/hero-essaouira-port.webp',
      type: 'Beach',
      rating: 4.7,
    },
    {
      name: 'Sidi Mohammed Ben Abdallah Museum',
      description: "Housed in a beautifully restored 19th-century riad near Moulay Hassan Square, this ethnographic museum showcases the rich cultural heritage of the Essaouira region. Collections include traditional Berber and Jewish jewelry, antique weapons, musical instruments used in Gnaoua ceremonies, marquetry woodwork, Roman-era artifacts from the Iles Purpuraires, and historic photographs. Entry is 70 MAD.",
      image: '/images/hero-essaouira-port.webp',
      type: 'Museum',
      rating: 4.5,
    },
    {
      name: 'Borj El Baroud',
      description: "A dramatic ruined bastion at the southern end of the beach, partially submerged at high tide. This crumbling 18th-century powder magazine sits where the Oued Ksob river meets the Atlantic, creating an evocative, almost otherworldly scene. At low tide you can walk right up to the ruins and explore the remnants of the fortification. A favorite spot for photographers seeking moody, atmospheric shots.",
      image: '/images/hero-essaouira-port.webp',
      type: 'Ruins',
      rating: 4.6,
    },
    {
      name: 'The Mellah (Jewish Quarter)',
      description: "Essaouira once had the largest Jewish community in Morocco, and the mellah preserves this extraordinary heritage. The quarter features distinctive architecture with external balconies and large windows. The Slat Lkahal synagogue has been restored and is open to visitors. At its peak in the 19th century, Jews comprised nearly 40 percent of the city's population and dominated its international trade.",
      image: '/images/hero-essaouira-port.webp',
      type: 'Heritage Quarter',
      rating: 4.6,
    },
    {
      name: 'Art Galleries of the Medina',
      description: "Essaouira has been a magnet for artists since the 1960s, and the medina contains dozens of galleries showcasing contemporary Moroccan art. Galerie Damgaard on Avenue Oqba Ibn Nafiaa is the most famous, having championed self-taught Gnaoua-inspired painters for decades. Other notable galleries include Espace Othello, La Petite Galerie, and the cooperative gallery on Rue de la Skala.",
      image: '/images/hero-essaouira-port.webp',
      type: 'Art & Culture',
      rating: 4.7,
    },
    {
      name: 'Medina Souks & Thuya Wood Workshops',
      description: "The souks of Essaouira are calmer and more navigable than those of Marrakech, organized along the two main arteries of Avenue de l'Istiqlal and Avenue Sidi Mohammed Ben Abdallah. The city is famous for its thuya wood artisans, who carve intricate boxes, chess sets, and furniture from the aromatic root wood of the thuya tree endemic to the Essaouira region.",
      image: '/images/hero-essaouira-port.webp',
      type: 'Shopping & Crafts',
      rating: 4.6,
    },
    {
      name: 'Diabat Village & Ruins',
      description: 'A small Berber village 5 kilometers south of Essaouira along the beach, famous for its association with Jimi Hendrix, who allegedly visited in 1969. The ruins of the Dar Soltane palace, a crumbling 18th-century royal residence half-buried in dunes, add to the mystique. The walk along the windswept beach through the sand dunes is undeniably magical.',
      image: '/images/hero-essaouira-port.webp',
      type: 'Village & Legend',
      rating: 4.5,
    },
  ];

  const windSports = [
    { sport: 'Kitesurfing', description: "Essaouira's consistent Alizee trade winds (15 to 25 knots) from April to September make it one of the best kitesurfing destinations in Africa. The main beach offers side-onshore conditions ideal for progression. For flat-water sessions, head to Moulay Bouzerktoune, 25 km north, where a protected bay delivers butter-smooth water.", spots: ['Essaouira Beach (main)', 'Moulay Bouzerktoune (flat water)', 'Sidi Kaouki (waves)'], season: 'April to September (peak), rideable year-round', icon: Wind },
    { sport: 'Windsurfing', description: "The sport that first put Essaouira on the wind sports map in the 1980s. The same consistent trade winds that attract kiters make this a world-class windsurfing venue. The main beach is excellent for intermediates, while advanced riders seek out the wave sailing conditions at Moulay Bouzerktoune and Cap Sim.", spots: ['Essaouira Beach', 'Moulay Bouzerktoune', 'Cap Sim'], season: 'April to September (peak winds)', icon: Waves },
    { sport: 'Surfing', description: "When the wind drops between October and March, Essaouira transforms into a beginner-friendly surf destination. Sidi Kaouki, 25 km south, is the go-to spot with consistent beach breaks perfect for learning. Several surf schools offer lessons and board rentals year-round.", spots: ['Sidi Kaouki', 'Essaouira Beach', 'Moulay Bouzerktoune'], season: 'October to March (best swells)', icon: Sailboat },
  ];

  const windSchools = [
    {
      name: 'ION Club Essaouira',
      specialty: 'Kitesurfing & Windsurfing',
      price: '500-800 MAD/session',
      description: "Part of the internationally renowned ION Club chain, this center offers professional IKO-certified kite instruction and windsurfing courses right on Essaouira beach. Top-quality Duotone and Fanatic equipment. Beginner courses start at 500 MAD for a 2-hour group lesson, private sessions from 800 MAD.",
      location: 'Essaouira Beach, near Sofitel',
    },
    {
      name: 'Explora Watersports',
      specialty: 'Kitesurfing & Surfing',
      price: '400-700 MAD/session',
      description: "A well-established local school run by experienced Moroccan instructors. Known for patient teaching and a friendly atmosphere. Group kite lessons from 400 MAD, surf lessons from 400 MAD including board and wetsuit. Also arranges downwinders and guided kite trips to Moulay Bouzerktoune.",
      location: 'Essaouira Beach, south end',
    },
    {
      name: 'Mogasurf',
      specialty: 'Surfing & SUP',
      price: '400-600 MAD/session',
      description: "Essaouira's premier surf school offering lessons for all levels at both Essaouira beach and Sidi Kaouki. Surf lessons from 400 MAD for 2 hours with equipment included. Also offers stand-up paddleboarding sessions and surf camps with accommodation packages starting at 3,500 MAD per week.",
      location: 'Rue Hoummane El Fatouaki, Medina',
    },
    {
      name: 'Kite Paradise Essaouira',
      specialty: 'Kitesurfing',
      price: '500-750 MAD/session',
      description: "Boutique kite school offering personalized instruction with small group sizes (max 4 students per instructor). IKO-certified courses from discovery sessions to advanced coaching. Equipment rental available from 300 MAD per hour.",
      location: 'Essaouira Beach, central section',
    },
  ];

  const restaurants = [
    {
      name: 'Ocean Vagabond',
      cuisine: 'International & Moroccan Fusion',
      price: '120-250 MAD',
      description: "A beachfront institution with its feet literally in the sand. This laid-back restaurant-bar serves excellent grilled fish, wood-fired pizzas, fresh salads, and Moroccan tagines. The outdoor terrace overlooking the ocean is the best seat in Essaouira for sunset. Try the grilled catch of the day with chermoula sauce.",
      location: 'Boulevard Mohammed V, Beachfront',
      highlight: 'Best sunset views in town',
    },
    {
      name: 'La Table by Madada',
      cuisine: 'Modern Moroccan Fine Dining',
      price: '200-400 MAD',
      description: "The rooftop restaurant of the stylish Madada Mogador hotel, offering refined Moroccan cuisine with a contemporary twist. Chef uses locally sourced ingredients including fresh Atlantic seafood, regional argan oil, and seasonal produce. The tasting menu at 400 MAD is outstanding. Reservations essential.",
      location: '5 Rue Youssef El Fassi, Medina',
      highlight: 'Fine dining with medina rooftop views',
    },
    {
      name: 'Taros Cafe',
      cuisine: 'Mediterranean & Moroccan',
      price: '100-200 MAD',
      description: "An Essaouira landmark occupying a multi-level building on Moulay Hassan Square with a famous rooftop terrace and live music program. The menu spans Moroccan classics, Mediterranean dishes, and excellent cocktails. Regular live Gnaoua music performances in the evening.",
      location: 'Place Moulay Hassan, 2nd Floor',
      highlight: 'Live Gnaoua music and rooftop terrace',
    },
    {
      name: 'Les Alizes Mogador',
      cuisine: 'Traditional Moroccan',
      price: '80-160 MAD',
      description: "A beloved local restaurant tucked away in the medina serving authentic, home-style Moroccan cooking at fair prices. The fish tagine with preserved lemons and olives is legendary, and the couscous on Friday is not to be missed. Simple decor but enormous portions and genuine hospitality. No alcohol.",
      location: '26 Rue de la Skala, Medina',
      highlight: 'Authentic home-style Moroccan cooking',
    },
    {
      name: 'Port Fish Stalls',
      cuisine: 'Grilled Seafood',
      price: '50-100 MAD',
      description: "The unmissable Essaouira experience. Choose your fish, prawns, calamari, or lobster from the fishmonger stalls near the port entrance, then have it grilled to order at the outdoor barbecue stands. A plate of mixed grilled fish with bread, salad, olives, and harissa costs 50 to 80 MAD. Lobster runs 100 to 150 MAD. Cash only.",
      location: 'Port entrance, off Place Moulay Hassan',
      highlight: 'Freshest and cheapest seafood in Morocco',
    },
    {
      name: 'Elizir',
      cuisine: 'Italian-Moroccan Fusion',
      price: '100-220 MAD',
      description: "A charming Italian-run restaurant in the medina combining Moroccan ingredients with Italian technique. Handmade pasta, wood-fired pizzas, and creative fusion dishes like argan oil bruschetta and sea bass with chermoula pesto. The candlelit courtyard is one of the most romantic dining spots in the city.",
      location: 'Rue Aguenaou, Medina',
      highlight: 'Romantic courtyard dining',
    },
    {
      name: 'Umia',
      cuisine: 'Asian-Moroccan Fusion',
      price: '130-250 MAD',
      description: "A stylish newcomer with creative Asian-Moroccan fusion dishes, excellent poke bowls, fresh juices, and craft cocktails. The modern interior with traditional Moroccan accents strikes the right balance. Vegetarian and vegan options are plentiful and well-executed.",
      location: '2 Rue du Rif, Medina',
      highlight: 'Best vegetarian options in Essaouira',
    },
    {
      name: 'Cafe Restaurant Laayoune',
      cuisine: 'Traditional Moroccan',
      price: '40-80 MAD',
      description: "Where the locals eat. This no-frills restaurant on a quiet medina street serves enormous plates of tagine, grilled meats, and harira soup at incredible prices. The kefta tagine with egg is superb at just 45 MAD. Perfect for budget travelers seeking authenticity over ambiance.",
      location: 'Avenue Sidi Mohammed Ben Abdallah, Medina',
      highlight: 'Best budget meals in the medina',
    },
  ];

  const accommodations = [
    {
      name: 'Heure Bleue Palais',
      type: 'Luxury Hotel',
      price: '2,500-5,000 MAD/night',
      description: "Essaouira's most prestigious address, a Relais & Chateaux property occupying a restored 18th-century palace. Features a rooftop pool, cinema, spa, and opulent suites with antique furnishings. The rooftop terrace offers 360-degree views over the medina, port, and Atlantic.",
      budget: 'Luxury',
    },
    {
      name: "Villa de l'O",
      type: 'Boutique Hotel',
      price: '1,800-3,500 MAD/night',
      description: "An exquisite boutique hotel built into the medina ramparts with rooms offering direct ocean views. Minimalist-chic design, a heated pool, excellent restaurant, and an intimate spa. One of the most architecturally stunning properties in Morocco.",
      budget: 'Luxury',
    },
    {
      name: 'Riad Madada Mogador',
      type: 'Boutique Riad',
      price: '1,200-2,200 MAD/night',
      description: "A design-forward riad in the heart of the medina with just 7 rooms, each uniquely decorated with contemporary art and traditional craftsmanship. Home to the acclaimed La Table by Madada restaurant. The rooftop terrace with lounging areas is perfect for afternoon tea.",
      budget: 'Mid-Range to Luxury',
    },
    {
      name: 'Riad Dar Maya',
      type: 'Traditional Riad',
      price: '700-1,400 MAD/night',
      description: "A beautifully restored traditional riad with a tranquil courtyard garden, plunge pool, and 6 individually designed rooms. Run by a welcoming British-Moroccan couple who provide excellent local tips. Homemade breakfast with freshly baked msemen is a highlight.",
      budget: 'Mid-Range',
    },
    {
      name: 'Riad Baladin',
      type: 'Charming Riad',
      price: '500-900 MAD/night',
      description: "A colorful, art-filled riad with a sunny rooftop terrace and warm atmosphere. Each room features original artwork by local artists. Central medina location within walking distance of all major sights.",
      budget: 'Mid-Range',
    },
    {
      name: 'Dar Liouba',
      type: 'Budget Riad',
      price: '350-600 MAD/night',
      description: "A simple but spotless riad offering excellent value in the medina. Small courtyard with a fountain, clean rooms with traditional decor, and a friendly owner who goes above and beyond. The rooftop terrace has partial ocean views. Breakfast included.",
      budget: 'Budget-Friendly',
    },
    {
      name: 'Essaouira Youth Hostel (HI)',
      type: 'Hostel',
      price: '120-200 MAD/night',
      description: "A clean, well-run hostel near the medina walls with both dormitory beds and private rooms. Shared kitchen, communal lounge, and a small terrace. Popular with backpackers and surfers. Dorm beds from 120 MAD, private doubles from 200 MAD.",
      budget: 'Budget',
    },
    {
      name: 'Sofitel Essaouira Mogador Golf & Spa',
      type: 'Resort',
      price: '2,000-4,000 MAD/night',
      description: "A sprawling 5-star resort outside the medina with a Gary Player-designed golf course, full-service thalassotherapy spa, multiple restaurants, and an enormous pool. Sits on the beachfront between the medina and the open dunes.",
      budget: 'Luxury',
    },
  ];

  const dayTrips = [
    {
      name: 'Sidi Kaouki Beach',
      distance: '25 km south',
      duration: '30 min by car',
      description: "A laid-back surf village with a wide, windswept beach and consistent Atlantic swells. Much quieter than Essaouira, Sidi Kaouki has a handful of surf camps, a few beachfront cafes, and a Sufi shrine. Surfing lessons from 350 MAD. Grand taxis cost about 20 MAD per person.",
      icon: Waves,
    },
    {
      name: 'Argan Forest & Cooperatives',
      distance: '15-30 km east',
      duration: 'Half-day trip',
      description: "The Essaouira region is the heartland of the argan tree. Visit women's cooperatives where Berber women hand-crack argan nuts and cold-press the precious oil. Watch goats climbing argan trees (a genuine phenomenon). Half-day tours cost 300 to 500 MAD per person including transport and tastings.",
      icon: TreePine,
    },
    {
      name: 'Paradise Valley',
      distance: '60 km northeast',
      duration: 'Full-day trip',
      description: "A stunning hidden gorge with natural rock pools, waterfalls, and palm-lined cliffs about 90 minutes from Essaouira. The turquoise pools are perfect for swimming in summer. Popular combined with an argan cooperative visit. Organized tours run 400 to 600 MAD per person.",
      icon: Mountain,
    },
    {
      name: 'Diabat Village Walk',
      distance: '5 km south',
      duration: '2-3 hours walking',
      description: "A beautiful walk along the beach from Essaouira to the small Berber village of Diabat, passing the ruins of the Dar Soltane palace half-buried in sand dunes. Associated with Jimi Hendrix's 1969 visit. Stop for mint tea in the village. Free.",
      icon: Footprints,
    },
    {
      name: 'Camel Ride on the Beach',
      distance: 'From Essaouira beach',
      duration: '1-2 hours',
      description: "Camel and dromedary rides depart from the beach near the medina walls and head south toward Diabat. Sunset rides are particularly popular. Prices start at 200 MAD for one hour and 350 MAD for two hours. Negotiate firmly but fairly.",
      icon: Compass,
    },
    {
      name: 'Iles Purpuraires',
      distance: '1 km offshore',
      duration: 'Half-day',
      description: "Small islands visible from the Skala de la Ville, named for the purple dye the Romans extracted from murex shells. The main island hosts ruins of a prison and mosque, and is a breeding ground for Eleonora's falcon. Boat trips can be arranged for 200 to 400 MAD.",
      icon: Anchor,
    },
  ];

  const gettingThere = [
    { method: 'Supratours Bus from Marrakech', icon: Bus, duration: '2.5 to 3 hours', price: '80 MAD one way', details: "The most popular and reliable option. Supratours buses depart from the Marrakech train station (Gare ONCF) several times daily. Buses are modern, air-conditioned, and comfortable. Book tickets at the station or online. The bus station in Essaouira is a 10-minute walk from the medina." },
    { method: 'CTM Bus from Marrakech', icon: Bus, duration: '3 hours', price: '75 MAD one way', details: "CTM operates a similar service with slightly older but comfortable buses. Departures from the CTM bus station in Marrakech Gueliz district. Fewer daily departures than Supratours. The CTM station in Essaouira is near the Bab Doukkala entrance to the medina." },
    { method: 'Grand Taxi', icon: Car, duration: '2 to 2.5 hours', price: '100-120 MAD shared, 600-800 MAD private', details: "Shared grand taxis depart from a stand near the Marrakech bus station when all 6 seats are filled. Faster than the bus but less comfortable. The drive follows the scenic N8 road through argan forests and Berber villages." },
    { method: 'Rental Car', icon: Car, duration: '2.5 hours', price: '300-600 MAD/day', details: "Renting a car gives you freedom to stop at argan cooperatives, visit Sidi Kaouki, and explore at your own pace. The N8 from Marrakech is a well-maintained, scenic two-lane road. Parking outside the medina walls is 20 to 30 MAD per day." },
    { method: 'Essaouira-Mogador Airport', icon: Plane, duration: 'Flights from Casablanca', price: 'Varies by season', details: "Essaouira-Mogador Airport (ESU) is 16 km south of the city. Domestic flights from Casablanca and seasonal international charters from European cities. A taxi from the airport to the medina costs about 150 MAD." },
  ];

  const practicalInfo = [
    { title: 'Best Time to Visit', icon: ThermometerSun, details: ['April to June: Perfect weather (20-25 C), wind sports season beginning', 'June: Gnaoua Festival month, incredible atmosphere but very crowded', 'July to September: Peak wind season, hot days (25-30 C) cooled by trade winds', 'October to March: Fewer tourists, milder winds, better for surfing', 'Essaouira is significantly cooler than Marrakech year-round'] },
    { title: 'What to Pack', icon: ShoppingBag, details: ['A windbreaker or light jacket: the wind is relentless, even in summer', 'Layers: mornings and evenings can be surprisingly cool', 'Sunscreen and sunglasses: ocean reflection amplifies UV exposure', 'Sandals and walking shoes: medina streets are uneven', 'A scarf or bandana: useful against wind-blown sand on the beach'] },
    { title: 'How Many Days', icon: Calendar, details: ['2 days: Medina highlights, port fish, and rampart walks', '3 to 4 days: Add wind sports, day trips, and soak in the atmosphere', '5 to 7 days: Combine Essaouira with Sidi Kaouki and Paradise Valley', 'Many travelers visit as a 2 to 3 day side trip from Marrakech'] },
    { title: 'Money & Haggling', icon: DollarSign, details: ["ATMs on Avenue de l'Istiqlal and near Moulay Hassan Square", 'Most riads accept credit cards, port fish stalls are cash only', 'Haggling expected in souks: start at 40-50 percent of asking price', 'Essaouira shopkeepers are less aggressive than in Marrakech', 'Thuya wood: 50 MAD for small boxes to 2,000+ MAD for chess sets', 'Fixed-price cooperatives offer fair argan oil prices'] },
    { title: 'Safety', icon: Shield, details: ['Essaouira is one of the safest cities in Morocco for tourists', 'The medina is compact and well-lit, safe to walk at night', 'Beware of strong currents when swimming: no lifeguards', 'Wind can be dangerously strong for inexperienced water sports', 'Unofficial guides near the port: a firm "la shukran" works'] },
  ];

  const gnaoua = {
    title: 'Gnaoua & World Music Festival',
    dates: 'Four days in late June (usually third or fourth weekend)',
    description: "The Gnaoua World Music Festival is Essaouira's crown jewel event and one of the most important music festivals in Africa. Founded in 1998, it celebrates the ancient Gnaoua musical tradition, which originated with sub-Saharan African slaves brought to Morocco centuries ago. The hypnotic, trance-inducing music features the guembri (a three-stringed bass lute), krakeb (metal castanets), and call-and-response singing.",
    highlights: [
      'Free outdoor concerts on Moulay Hassan Square and at the Skala, attracting 300,000+ visitors over four days',
      'Fusion performances pairing Gnaoua masters (maalems) with international jazz, blues, rock, and electronic artists',
      'Past headliners include Robert Plant, Marcus Miller, Maceo Parker, Hindi Zahra, and Tinariwen',
      'Intimate lilas (traditional all-night Gnaoua ceremonies) in riads and private venues throughout the medina',
      'Street performances, parades, and spontaneous jam sessions filling every corner of the medina',
      'Art exhibitions, film screenings, and cultural workshops running alongside the music program',
    ],
    practicalInfo: [
      'All main stage concerts are free of charge, no tickets required',
      'Book accommodation at least 2 to 3 months in advance as hotels sell out completely',
      'Hotel prices typically double or triple during festival week',
      'Consider staying in Sidi Kaouki or nearby villages and commuting by taxi',
      'The medina becomes extremely crowded, especially around Moulay Hassan Square',
      'Food stalls pop up throughout the medina during the festival',
      'The festival program is published on the official website in late May',
      'Arrive at main stage concerts at least 1 hour early for a good position',
    ],
    musicTradition: 'Gnaoua music is rooted in the spiritual practices of the Gnaoua brotherhood, descendants of sub-Saharan Africans who were brought to Morocco through the trans-Saharan slave trade. The music is deeply spiritual, used in healing ceremonies called lilas that involve trance, possession rituals, and all-night musical performances. The maalem (master musician) leads the ceremony with the guembri while the krakeb players and singers respond in hypnotic repetition. UNESCO recognized Gnaoua culture as Intangible Cultural Heritage of Humanity in 2019.',
  };

  const faqItems = [
    { question: 'Is Essaouira worth visiting?', answer: "Absolutely. Essaouira offers a completely different experience from Marrakech: a UNESCO medina you can explore without getting lost, world-class wind sports, fresh seafood grilled to order for under 100 MAD, a vibrant art scene, and a relaxed, bohemian atmosphere. It is one of the most enjoyable cities in Morocco and a perfect 2 to 3 day escape from Marrakech." },
    { question: 'How do I get from Marrakech to Essaouira?', answer: "The most popular option is the Supratours bus from the Marrakech train station, taking 2.5 to 3 hours for 80 MAD one way. CTM buses cost 75 MAD. Grand taxis take 2.5 hours at 100 to 120 MAD per person shared or 600 to 800 MAD private. You can also rent a car and drive the scenic N8 road." },
    { question: 'Did Jimi Hendrix really live in Essaouira?', answer: "This is one of Morocco's most persistent legends. Hendrix visited Morocco briefly in 1969, and some sources suggest he spent time near Essaouira (specifically Diabat), but the extent of his stay is debated. Regardless, the legend is part of the city's identity, and you will find Hendrix cafes and references throughout town." },
    { question: 'Where was Game of Thrones filmed in Essaouira?', answer: "Several Season 3 scenes were filmed here. The Skala de la Ville served as the walls of Astapor where Daenerys acquires the Unsullied army. The Skala du Port was used for the Walk of Punishment sequence. The ramparts and medina walls appeared throughout the Slaver's Bay storyline." },
    { question: 'Is Essaouira good for surfing?', answer: "Essaouira is better known for kitesurfing and windsurfing. For surfing, head to Sidi Kaouki (25 km south) which has more consistent, cleaner waves and less wind. The main beach picks up swells in winter. October to March is the best surfing season." },
    { question: 'How much should I pay for grilled fish at the port?', answer: "A plate of mixed grilled fish (sardines, sea bass, shrimp, calamari) with bread, salad, and condiments costs 50 to 80 MAD. A whole grilled lobster runs 100 to 150 MAD. Agree on prices before cooking. Tip 5 to 10 MAD if satisfied." },
    { question: 'Is Essaouira windy all the time?', answer: "The Alizee trade winds blow consistently from April through September, often reaching 20 to 30 knots. October through March is calmer. The wind keeps summer temperatures pleasant when Marrakech hits 45 C. Pack a windbreaker regardless of season." },
    { question: 'What is the Gnaoua Festival and when is it held?', answer: "A four-day music festival held annually in late June celebrating the ancient Gnaoua musical tradition. Free open-air concerts on Moulay Hassan Square attract over 300,000 visitors. Features collaborations between Gnaoua master musicians and international artists." },
    { question: 'Can I visit Essaouira as a day trip from Marrakech?', answer: "You can, but it is not ideal. The 2.5-hour drive each way means 5 hours in transit for 4 to 5 hours in the city. An overnight stay is strongly recommended to experience sunset and morning hours. If a day trip is your only option, leave by 7 AM and return by 7 PM." },
    { question: 'What souvenirs should I buy in Essaouira?', answer: "Signature crafts are thuya wood products (boxes, chess sets) and argan oil (culinary and cosmetic). Other good buys include Gnaoua instruments (krakeb from 100 MAD), local artwork, silver Berber jewelry, and saffron. Women's argan cooperatives outside town offer the best prices." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* -- Hero Section -- */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-essaouira-port.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-white transition-colors">Cities</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Essaouira</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Wind className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Essaouira
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-[family-name:var(--font-display)] italic mb-4">
            Morocco&apos;s Wind City on the Atlantic
          </p>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            Where 18th-century Portuguese ramparts meet crashing Atlantic waves, where Gnaoua rhythms
            echo through a UNESCO medina, and where the trade winds have drawn artists, surfers, and
            free spirits for generations. Welcome to Morocco&apos;s most bohemian coastal city.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Landmark className="w-3.5 h-3.5 mr-1.5" /> UNESCO Heritage</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Wind className="w-3.5 h-3.5 mr-1.5" /> Wind Sports Capital</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Music className="w-3.5 h-3.5 mr-1.5" /> Gnaoua Festival</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Fish className="w-3.5 h-3.5 mr-1.5" /> Atlantic Seafood</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Palette className="w-3.5 h-3.5 mr-1.5" /> Art & Culture</span>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Overview / Introduction -- */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Atlantic&apos;s Most Enchanting City
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              Essaouira, known as Mogador until Moroccan independence, is a city shaped by wind, waves, and centuries of cross-cultural exchange. Founded in its current form in 1764 by Sultan Mohammed III, the city was designed as a royal port to rival Agadir and establish diplomatic ties with European trading powers. The result was a unique blend of Moroccan, Portuguese, French, and Jewish influences that persists to this day.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              The medina, inscribed as a UNESCO World Heritage Site in 2001, is an outstanding example of a late-18th-century fortified town built according to European military architecture principles but adapted to North African life. Unlike the tangled alleys of Fes or Marrakech, Essaouira&apos;s streets follow a logical grid, making it one of the easiest Moroccan medinas to navigate.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              The city&apos;s Portuguese ramparts, crowned with rows of bronze cannons aimed at the Atlantic, are among the most dramatic fortifications in North Africa. They served as the filming location for Astapor and Slaver&apos;s Bay in HBO&apos;s Game of Thrones, bringing global attention to a city that artists, musicians, and wind sports enthusiasts had already claimed as their own.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Then there is the legend of Jimi Hendrix, who allegedly visited the nearby village of Diabat in 1969 and was so captivated by the windswept landscape that it inspired &quot;Castles Made of Sand.&quot; Whether the story is fact or fable, it perfectly captures Essaouira&apos;s spirit: creative, untamed, and utterly magnetic.
            </p>
          </div>
        </div>
      </section>

      {/* -- Quick Facts -- */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <Info className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Quick Facts
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="card-moroccan p-4 text-center">
              <Users className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wide mb-1">Population</p>
              <p className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                77,000
              </p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Landmark className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wide mb-1">UNESCO Status</p>
              <p className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Since 2001
              </p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Wind className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wide mb-1">Wind Days</p>
              <p className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                300+ / Year
              </p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <ThermometerSun className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wide mb-1">Avg Temp</p>
              <p className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                20 C
              </p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Car className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wide mb-1">From Marrakech</p>
              <p className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                2.5 Hours
              </p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Music className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wide mb-1">Gnaoua Fest</p>
              <p className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Late June
              </p>
            </div>
          </div>
          <div className="mt-8 card-moroccan p-6">
            <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg mb-3">
              Why Visit Essaouira?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>UNESCO-listed medina with a navigable grid layout</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>World-class kitesurfing, windsurfing, and surfing</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>Freshest grilled seafood in Morocco from 50 MAD</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>Game of Thrones filming location (Astapor)</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>Gnaoua & World Music Festival every June (free)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>Thriving art gallery scene and thuya wood crafts</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>Cooler temperatures than Marrakech year-round</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>One of the safest and most relaxed cities in Morocco</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -- Top Attractions -- */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Camera className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Top Attractions
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            From cannon-lined ramparts to a bustling fish market, Essaouira packs extraordinary experiences into a compact, walkable medina. Here are the 12 sights you should not miss.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div
                key={attraction.name}
                className="card-moroccan overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={index < 3 ? 'eager' : 'lazy'}
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="tag bg-white/90 text-[var(--color-primary)] font-semibold">{attraction.type}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                    <Star className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                    <span className="text-white text-xs font-semibold">{attraction.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-2"
                    >{attraction.name}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-4">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Wind Sports Capital -- */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Wind className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]"
              >Wind Sports Capital of Africa</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            With 300+ days of rideable wind per year and consistent Alizee trade winds blowing 15 to 25 knots from April through September, Essaouira is one of the top wind sports destinations on the planet.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {windSports.map((sport) => {
              const Icon = sport.icon;
              return (
                <div key={sport.sport} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary)]"
                      ><Icon className="w-6 h-6" /></div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)]">{sport.sport}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{sport.description}</p>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-1">Best Spots</p>
                    <ul className="space-y-1">
                      {sport.spots.map((spot) => (
                        <li key={spot} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                          <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0" />{spot}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--color-primary)] font-medium"
                    ><Calendar className="w-3.5 h-3.5" />{sport.season}</div>
                </div>
              );
            })}
          </div>
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2"
            >Recommended Schools & Centers</h3>
          <p className="text-[var(--text-secondary)] mb-6"
            >Lessons range from 400 to 800 MAD per session depending on sport, duration, and group or private instruction. All schools provide equipment.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {windSchools.map((school) => (
              <div
                key={school.name}
                className="card-moroccan p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg">{school.name}</h4>
                  <span className="tag bg-[var(--color-accent-50)] text-[var(--color-accent)] font-semibold">{school.price}</span>
                </div>
                <span className="inline-block tag bg-[var(--color-primary-50)] text-[var(--color-primary)] mb-3">{school.specialty}</span>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">{school.description}</p>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                  ><MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />{school.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Art & Culture -- */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Palette className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Art & Culture</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl"
            >Essaouira has been a magnet for artists, musicians, and bohemian travelers since the 1960s. The city&apos;s creative spirit is palpable in every gallery, workshop, and street corner.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]"
                  ><Eye className="w-5 h-5" /></div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg">The Gallery Scene</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3"
                >Essaouira hosts the densest concentration of art galleries of any Moroccan city relative to its size. The movement was catalyzed by Danish-born art dealer Frederic Damgaard, who opened Galerie Damgaard on Avenue Oqba Ibn Nafiaa in the 1980s and championed self-taught local artists.</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed"
                >Notable spaces include Espace Othello (housed in a converted synagogue), La Petite Galerie, and Galerie d&apos;Art Frederic Damgaard. Prices range from 200 MAD for small prints to 20,000+ MAD for significant original works.</p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]"
                  ><TreePine className="w-5 h-5" /></div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg">Thuya Wood Artisans</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3"
                >Essaouira is the undisputed capital of thuya wood craftsmanship. The thuya tree (Tetraclinis articulata) grows only in the Essaouira region and parts of Algeria, producing richly patterned, aromatic wood prized for marquetry and carving.</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed"
                >Products range from small jewelry boxes (50 to 200 MAD) to elaborate chess sets (500 to 2,000 MAD). The Ensemble Artisanal cooperative offers fixed prices and quality assurance.</p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]"
                  ><Sparkles className="w-5 h-5" /></div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg"
                  >Argan Oil Cooperatives</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3"
                >The argan tree is endemic to southwestern Morocco, and the Essaouira region sits at the heart of the UNESCO-designated Arganeraie Biosphere Reserve. Women&apos;s cooperatives process the oil by hand using traditional stone mills.</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed"
                >Culinary argan oil costs 150 to 250 MAD for 500ml. Cosmetic argan oil runs 200 to 350 MAD for 100ml. Cooperative prices are fair and fixed, with profits going directly to the women workers.</p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]"
                  ><Music className="w-5 h-5" /></div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg"
                  >Gnaoua Music Heritage</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3"
                >Essaouira is the spiritual home of Gnaoua music, a powerful blend of sub-Saharan African rhythms, Berber traditions, and Sufi spiritual practices. The music features the guembri (a three-stringed bass lute), krakeb castanets, and hypnotic call-and-response chanting.</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed"
                >Gnaoua musicians perform in Moulay Hassan Square most evenings. The tradition was recognized by UNESCO as Intangible Cultural Heritage of Humanity in 2019.</p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Where to Eat -- */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Utensils className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Where to Eat</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl"
            >Essaouira&apos;s food scene revolves around the Atlantic catch. From 50 MAD grilled fish plates at the port to refined rooftop dining, every budget and taste is served. All prices in Moroccan Dirham (MAD).</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.name}
                className="card-moroccan p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg">{restaurant.name}</h3>
                  <span className="tag bg-[var(--color-accent-50)] text-[var(--color-accent)] font-semibold text-sm"
                    >{restaurant.price}</span>
                </div>
                <div className="flex items-center gap-3 mb-3"
                  ><span className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]"
                  >{restaurant.cuisine}</span></div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">{restaurant.description}</p>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-2"
                  ><MapPin className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0" />{restaurant.location}</div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-primary)] font-medium"
                  ><Star className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />{restaurant.highlight}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* -- Essaouira Signature Dishes -- */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Fish className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Essaouira&apos;s Signature Dishes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            The Atlantic coast delivers some of Morocco&apos;s finest flavors. Here are the dishes
            you absolutely must try during your visit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-moroccan p-6 text-center group">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-primary-50)] text-[var(--color-primary)] mx-auto mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                <Fish className="w-7 h-7" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                Grilled Sardines
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-2">
                Essaouira&apos;s most iconic dish. Fresh Atlantic sardines grilled over charcoal at
                the port stalls, served with bread, harissa, and a squeeze of lemon.
              </p>
              <span className="text-sm font-semibold text-[var(--color-accent)]">
                30-50 MAD/plate
              </span>
            </div>
            <div className="card-moroccan p-6 text-center group">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-primary-50)] text-[var(--color-primary)] mx-auto mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                <Utensils className="w-7 h-7" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                Fish Tagine with Chermoula
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-2">
                Sea bass or sole slow-cooked in a clay tagine with chermoula marinade (cilantro,
                garlic, cumin, paprika, lemon), preserved lemons, and Moroccan olives.
              </p>
              <span className="text-sm font-semibold text-[var(--color-accent)]">
                80-150 MAD
              </span>
            </div>
            <div className="card-moroccan p-6 text-center group">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-primary-50)] text-[var(--color-primary)] mx-auto mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                Argan Oil Amlou
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-2">
                A rich, thick paste made from argan oil, roasted almonds, and honey, often called
                Moroccan peanut butter. Spread on bread at breakfast. An Essaouira specialty.
              </p>
              <span className="text-sm font-semibold text-[var(--color-accent)]">
                50-80 MAD/jar
              </span>
            </div>
            <div className="card-moroccan p-6 text-center group">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-primary-50)] text-[var(--color-primary)] mx-auto mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                <Coffee className="w-7 h-7" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                Spiced Mint Tea
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-2">
                Essaouira&apos;s cafes serve Morocco&apos;s beloved mint tea with a coastal twist:
                sometimes infused with chiba (wormwood) or luisa (lemon verbena) grown in the region.
              </p>
              <span className="text-sm font-semibold text-[var(--color-accent)]">
                10-15 MAD/glass
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* -- Where to Stay -- */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Bed className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Where to Stay</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl"
            >From palatial Relais &amp; Chateaux properties to backpacker-friendly hostels, Essaouira offers accommodation for every budget. Staying inside the medina puts you steps from everything.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accommodations.map((hotel) => (
              <div
                key={hotel.name}
                className="card-moroccan p-6 flex gap-4"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent-50)] text-[var(--color-accent)]"
                  ><Bed className="w-6 h-6" /></div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">{hotel.name}</h3>
                    <span className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]">{hotel.type}</span>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] mb-2">{hotel.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[var(--color-accent)]">{hotel.price}</span>
                    <span className="tag bg-[var(--surface-muted)] text-[var(--text-secondary)]">{hotel.budget}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Day Trips -- */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Compass className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]"
              >Day Trips from Essaouira</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl"
            >From surf villages and hidden gorges to argan forests where goats climb trees. Most can be done independently or through local operators for 300 to 600 MAD per person.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dayTrips.map((trip) => {
              const Icon = trip.icon;
              return (
                <div key={trip.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]"
                      ><Icon className="w-5 h-5" /></div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">{trip.name}</h3>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {trip.distance}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {trip.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{trip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* -- Budget Breakdown -- */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Budget Guide
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Essaouira is one of Morocco&apos;s more affordable destinations. Here is what to
            expect at each budget level, with all prices in Moroccan Dirham (MAD).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6 border-t-4 border-t-green-500">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-xl mb-4">
                Budget Traveler
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                300-500 MAD per day
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Hostel dorm bed: 120-200 MAD/night</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Port fish stalls for lunch: 50-80 MAD</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Local restaurant dinner: 40-80 MAD</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Free activities: ramparts, beach, medina walks</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Supratours bus from Marrakech: 80 MAD</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6 border-t-4 border-t-[var(--color-accent)]">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-xl mb-4">
                Mid-Range Traveler
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                800-1,500 MAD per day
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>Charming riad: 500-900 MAD/night</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>Restaurant lunches: 100-200 MAD</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>Wind sports lesson: 400-600 MAD</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>Day trip with transport: 300-500 MAD</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>Dinner with drinks: 150-300 MAD</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6 border-t-4 border-t-[#C4960C]">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-xl mb-4">
                Luxury Traveler
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                3,000-6,000+ MAD per day
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-[#C4960C] flex-shrink-0 mt-0.5" />
                  <span>Heure Bleue or Villa de l&apos;O: 2,000-5,000 MAD/night</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-[#C4960C] flex-shrink-0 mt-0.5" />
                  <span>Fine dining at La Table by Madada: 300-500 MAD</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-[#C4960C] flex-shrink-0 mt-0.5" />
                  <span>Private kite/surf lessons: 800 MAD</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-[#C4960C] flex-shrink-0 mt-0.5" />
                  <span>Private guided day trips: 1,000-2,000 MAD</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle className="w-4 h-4 text-[#C4960C] flex-shrink-0 mt-0.5" />
                  <span>Spa treatments at Sofitel: 500-1,500 MAD</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -- Getting There -- */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Plane className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Getting There</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl"
            >Essaouira is 175 km west of Marrakech (2.5 hours by road). Most visitors arrive by bus or taxi from Marrakech.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gettingThere.map((transport) => {
              const Icon = transport.icon;
              return (
                <div
                  key={transport.method}
                  className="card-moroccan p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]"
                      ><Icon className="w-5 h-5" /></div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">{transport.method}</h3>
                  </div>
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <span className="flex items-center gap-1 text-[var(--text-secondary)]"
                      ><Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" /> {transport.duration}</span>
                    <span className="font-semibold text-[var(--color-accent)]">{transport.price}</span>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{transport.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Practical Information -- */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Info className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Practical Information</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">Everything you need to know to plan your Essaouira visit.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className="card-moroccan p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]"
                      ><Icon className="w-5 h-5" /></div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">{info.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {info.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)] leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Gnaoua Festival Deep Dive -- */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Music className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">{gnaoua.title}</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-4 max-w-2xl">{gnaoua.dates}</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-xl mb-4"
                >About the Festival</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{gnaoua.description}</p>
              <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-3">Festival Highlights</h4>
              <ul className="space-y-2">
                {gnaoua.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)] leading-relaxed">
                    <Star className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" /><span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="card-moroccan p-6 mb-6">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-xl mb-4"
                  >Practical Tips for Festival-Goers</h3>
                <ul className="space-y-2">
                  {gnaoua.practicalInfo.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)] leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-[#C4960C] flex-shrink-0 mt-0.5" /><span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-xl mb-4"
                  >The Gnaoua Musical Tradition</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{gnaoua.musicTradition}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Seasons -- */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Sun className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]"
              >Essaouira Through the Seasons</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">Each season brings a different character to the Wind City.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-moroccan p-6 text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-green-50 text-green-600 mx-auto mb-4"
                ><TreePine className="w-7 h-7" /></div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">Spring (Mar-May)</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed"
                >Temperatures rise to 18-23 C. Winds begin picking up in April. Wildflowers bloom. Fewer tourists than summer. Excellent balance of weather and crowds.</p>
              <div className="mt-3 flex items-center justify-center gap-1 text-sm font-medium text-green-600"
                ><ThermometerSun className="w-3.5 h-3.5" /> 18-23 C</div>
            </div>
            <div className="card-moroccan p-6 text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 mx-auto mb-4"
                ><Sun className="w-7 h-7" /></div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">Summer (Jun-Aug)</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed"
                >Peak wind sports season with 20-25 knot trade winds. 25-30 C but feels cooler. Gnaoua Festival in June. Busy with tourists. Book accommodation in advance.</p>
              <div className="mt-3 flex items-center justify-center gap-1 text-sm font-medium text-amber-600"
                ><ThermometerSun className="w-3.5 h-3.5" /> 25-30 C</div>
            </div>
            <div className="card-moroccan p-6 text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 mx-auto mb-4"
                ><Wind className="w-7 h-7" /></div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">Autumn (Sep-Nov)</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed"
                >Winds ease through September. October brings warmer sea temperatures and surf season. Tourist numbers drop significantly. Ideal for budget travelers.</p>
              <div className="mt-3 flex items-center justify-center gap-1 text-sm font-medium text-orange-600"
                ><ThermometerSun className="w-3.5 h-3.5" /> 18-26 C</div>
            </div>
            <div className="card-moroccan p-6 text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mx-auto mb-4"
                ><Waves className="w-7 h-7" /></div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">Winter (Dec-Feb)</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed"
                >Quietest season, 12-18 C. Occasional rain and calmer winds make this best for surfing at Sidi Kaouki. Hotel prices drop 30-50 percent. More intimate atmosphere.</p>
              <div className="mt-3 flex items-center justify-center gap-1 text-sm font-medium text-blue-600"
                ><ThermometerSun className="w-3.5 h-3.5" /> 12-18 C</div>
            </div>
          </div>
        </div>
      </section>

      {/* -- History Timeline -- */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]"
              >A Brief History of Essaouira</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl"
            >From Phoenician traders to Gnaoua musicians, Essaouira has always been a crossroads of cultures.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { year: '7th Century BC', title: 'Phoenician & Roman Trading Post', description: "Phoenician traders established a seasonal trading post on the Iles Purpuraires offshore. The Romans later extracted prized Tyrian purple dye from murex shells found here." },
              { year: '1506', title: 'Portuguese Fortress', description: "The Portuguese built a fortified trading post called Castelo Real de Mogador, establishing the European military presence that would shape the city's architecture." },
              { year: '1764', title: 'Sultan Mohammed III Founds Essaouira', description: "Sultan Mohammed III commissioned French architect Theodore Cornut to design a new royal port city, creating the unique medina that stands today." },
              { year: '18th-19th C', title: 'Golden Age of Trade', description: "Essaouira became Morocco's most important Atlantic trading port, with a large Jewish merchant community controlling commerce with Europe." },
              { year: '1949', title: 'Orson Welles Films Othello', description: "Orson Welles shot key scenes of his Othello adaptation here, using the Skala de la Ville and medina as backdrop. A plaque on the ramparts commemorates the filming." },
              { year: '1960s-70s', title: 'The Hippie Era', description: "Essaouira became a stop on the hippie trail, attracting artists and counterculture travelers. Jimi Hendrix allegedly visited in 1969." },
              { year: '1998', title: 'Gnaoua Festival Founded', description: "The first Gnaoua & World Music Festival was held, putting Essaouira on the international music map and launching a cultural renaissance." },
              { year: '2001', title: 'UNESCO World Heritage Status', description: "The medina was inscribed as a UNESCO World Heritage Site, recognized as an outstanding example of a late-18th-century fortified town." },
              { year: '2012', title: 'Game of Thrones Filming', description: "HBO chose Essaouira's ramparts as the filming location for Astapor and Slaver's Bay in Season 3, bringing the city to millions of viewers worldwide." },
              { year: '2019', title: 'UNESCO Intangible Heritage', description: "Gnaoua culture and music was recognized by UNESCO as Intangible Cultural Heritage of Humanity." },
            ].map((event) => (
              <div key={event.year} className="card-moroccan p-5 flex gap-4 items-start">
                <div className="flex-shrink-0"
                  ><span className="inline-block px-3 py-1 rounded-lg bg-[var(--color-primary)] text-white text-xs font-bold"
                  >{event.year}</span></div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">{event.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* -- Game of Thrones Filming Locations -- */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Camera className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Game of Thrones Filming Locations
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Essaouira served as the backdrop for several key scenes in HBO&apos;s Game of Thrones.
            Here is where fiction met the dramatic reality of these 18th-century fortifications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent-50)] text-[var(--color-accent)]">
                  <Landmark className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                  Astapor (Skala de la Ville)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                The cannon-lined ramparts served as the walls of Astapor, the slave city where
                Daenerys Targaryen negotiated for and ultimately freed the Unsullied army in Season 3.
                The dramatic scene where Daenerys reveals she speaks Valyrian was filmed on these very walls.
              </p>
              <p className="text-sm text-[var(--text-secondary)] font-medium">
                Season 3, Episodes 3-4
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent-50)] text-[var(--color-accent)]">
                  <Anchor className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                  Walk of Punishment (Skala du Port)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                The circular port watchtower and its surrounding walls were used for the infamous
                &quot;Walk of Punishment&quot; sequence, where enslaved people are displayed along the
                walls of Astapor. The tower&apos;s dramatic architecture made it perfect for the scene.
              </p>
              <p className="text-sm text-[var(--text-secondary)] font-medium">
                Season 3, Episode 3
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent-50)] text-[var(--color-accent)]">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                  Slaver&apos;s Bay Panoramas
                </h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                Wide establishing shots of the medina walls and Atlantic coastline were used to
                represent the broader Slaver&apos;s Bay region throughout Seasons 3 and 4. The
                city&apos;s photogenic ramparts, ocean views, and weathered stone provided the
                perfect canvas for the fictional slave cities of Essos.
              </p>
              <p className="text-sm text-[var(--text-secondary)] font-medium">
                Seasons 3-4
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Self-Guided Walking Tour -- */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Footprints className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Self-Guided Walking Tour
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            A perfect morning route covering the medina&apos;s highlights in about 3 hours. Start
            early to catch the morning light on the ramparts and the fishermen returning with their catch.
          </p>

          <div className="space-y-4">
            {[
              {
                step: 1,
                title: 'Bab el Sebaa (Main Gate)',
                time: '8:30 AM',
                description:
                  'Enter the medina through the grand Bab el Sebaa gate. Take a moment to admire the fortified walls and the arched entrance that has welcomed visitors for over 250 years. The gate opens onto the main commercial street.',
              },
              {
                step: 2,
                title: "Avenue de l'Istiqlal",
                time: '8:45 AM',
                description:
                  "Walk the main commercial artery of the medina, lined with shops selling spices, argan oil, and traditional clothing. This wide street demonstrates Essaouira's unusually orderly grid layout, designed by European architects for a Moroccan sultan.",
              },
              {
                step: 3,
                title: 'Skala de la Ville',
                time: '9:00 AM',
                description:
                  'Climb to the ramparts and walk along the row of European cannons pointing at the Atlantic. The morning light is perfect for photography. Look for the Game of Thrones filming plaques. Spend time enjoying the panoramic ocean views.',
              },
              {
                step: 4,
                title: 'Thuya Woodworking Quarter',
                time: '9:30 AM',
                description:
                  'Descend from the Skala into the woodworking workshops below the ramparts. Watch artisans carving intricate designs from fragrant thuya wood. A small box makes an excellent souvenir and costs 50 to 200 MAD.',
              },
              {
                step: 5,
                title: 'Moulay Hassan Square',
                time: '10:00 AM',
                description:
                  'Arrive at the main square and settle into a cafe terrace for mint tea and msemen (Moroccan pancakes). Watch the square come alive with musicians, vendors, and strolling visitors. This is the Gnaoua Festival main stage.',
              },
              {
                step: 6,
                title: 'Essaouira Port & Fish Market',
                time: '10:30 AM',
                description:
                  'Walk through the arched port entrance to the fishing harbour. Watch the blue trawlers unloading the morning catch and browse the fish stalls. This is the time to choose your lunch fish from the freshest selection.',
              },
              {
                step: 7,
                title: 'Skala du Port',
                time: '11:00 AM',
                description:
                  'Climb the circular watchtower for panoramic views of the port, the medina walls, and the open Atlantic. This is the Game of Thrones Walk of Punishment filming location. Entry costs 70 MAD.',
              },
              {
                step: 8,
                title: 'Grilled Fish Lunch at the Port',
                time: '11:30 AM',
                description:
                  'Return to the fish grill stalls and have your chosen fish cooked to order. Enjoy the freshest, most affordable seafood meal in Morocco with bread, salad, and harissa. Budget 50 to 100 MAD per person.',
              },
            ].map((stop) => (
              <div
                key={stop.step}
                className="card-moroccan p-5 flex gap-4 items-start"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white font-bold"
                  >
                  {stop.step}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {stop.title}
                    </h3>
                    <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {stop.time}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {stop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* -- Suggested 3-Day Itinerary -- */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Suggested 3-Day Itinerary
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Three days is the ideal amount of time to experience Essaouira properly. Here is
            how to make the most of every moment.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white font-bold">
                  1
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg">
                  Day 1: Medina & Ramparts
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <Clock className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Morning:</span> Walk
                    the Skala de la Ville ramparts, explore the thuya wood workshops below, and visit
                    Galerie Damgaard for Gnaoua-inspired art.
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <Clock className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Lunch:</span> Grilled
                    fish at the port stalls. Choose your catch, watch it sizzle, and eat for under
                    100 MAD.
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <Clock className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Afternoon:</span> Climb
                    the Skala du Port, explore the mellah and Slat Lkahal synagogue, browse the
                    medina souks for thuya boxes and spices.
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <Clock className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Evening:</span> Sunset
                    drinks at Taros Cafe rooftop, followed by dinner at La Table by Madada or Les
                    Alizes for authentic tagine.
                  </div>
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white font-bold">
                  2
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg">
                  Day 2: Beach & Wind Sports
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <Clock className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Morning:</span> Try a
                    kitesurfing or surfing lesson with ION Club or Explora (400 to 800 MAD for
                    2 hours with equipment). Or walk to Diabat along the beach.
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <Clock className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Lunch:</span> Ocean
                    Vagabond beachfront restaurant for pizza, fish, and ocean views.
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <Clock className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Afternoon:</span> Visit
                    the Sidi Mohammed Ben Abdallah Museum (70 MAD), then explore art galleries in the
                    medina. Pick up argan oil from a cooperative.
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <Clock className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Evening:</span> Sunset
                    camel ride on the beach (200 MAD/hour), then dinner at Elizir for romantic
                    courtyard Italian-Moroccan fusion.
                  </div>
                </li>
              </ul>
            </div>

            {/* Day 3 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white font-bold">
                  3
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg">
                  Day 3: Day Trip
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <Clock className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Morning:</span> Drive
                    to an argan oil cooperative (30 min) to watch the traditional process and taste
                    fresh argan products. Then continue to Paradise Valley for swimming in natural
                    rock pools.
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <Clock className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Lunch:</span> Picnic
                    at Paradise Valley or lunch at a local roadside restaurant. Budget 60 to 100 MAD.
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <Clock className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Alternative:</span> Spend
                    the day at Sidi Kaouki surf village. Take a surf lesson (350 MAD), relax on the
                    quieter beach, and have fresh fish at a beachfront cafe.
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <Clock className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Evening:</span> Final
                    evening in the medina. Farewell dinner at Umia for creative fusion, or return to
                    the port stalls for one last plate of the freshest seafood.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]"
              >Frequently Asked Questions</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl"
            >Answers to the most common questions travelers ask about visiting Essaouira.</p>
          <div className="max-w-3xl space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg mb-3">{faq.question}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqItems.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: { '@type': 'Answer', text: faq.answer },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* -- Explore More -- */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Globe className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]"
              >Explore More of Morocco</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl"
            >Essaouira pairs perfectly with these nearby destinations and related guides.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Marrakech', description: 'The Red City, just 2.5 hours away. Most visitors combine both.', href: '/marrakech', icon: Building2 },
              { title: 'Agadir Guide', description: "Morocco's beach resort capital, 3 hours south along the coast.", href: '/agadir-guide', icon: Sun },
              { title: 'Beaches of Morocco', description: 'The best Atlantic and Mediterranean beaches across the country.', href: '/beaches', icon: Waves },
              { title: 'Moroccan Music', description: 'Gnaoua, Andalusian, Amazigh, and contemporary Moroccan music.', href: '/music', icon: Music },
              { title: 'Water Sports', description: "Surfing, kitesurfing, and more across Morocco's coastline.", href: '/water-sports', icon: Sailboat },
              { title: 'Moroccan Crafts', description: 'From thuya wood to zellige tiles, artisan traditions explored.', href: '/crafts', icon: Palette },
              { title: 'Festival Guide', description: "Plan your trip around Morocco's best cultural festivals.", href: '/festivals', icon: Calendar },
              { title: 'All Cities', description: 'Browse our complete guide to every major destination.', href: '/cities', icon: MapPin },
            ].map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.title} href={link.href} className="card-moroccan p-5 group hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors"
                      ><Icon className="w-5 h-5" /></div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">{link.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-2">{link.description}</p>
                  <span className="text-sm font-semibold text-[var(--color-primary)] flex items-center gap-1 group-hover:gap-2 transition-all"
                    >Read guide <ArrowRight className="w-3.5 h-3.5" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Photo Gallery -- */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-morocco">
          <div className="text-center mb-12">
            <Camera className="w-8 h-8 mx-auto mb-4" style={{ color: '#A0522D' }} />
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A1814' }}>
              Essaouira in Pictures
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#1A1814', opacity: 0.7 }}>
              Atlantic winds, Portuguese ramparts, blue fishing boats, and the bohemian soul
              of Morocco&apos;s beloved Wind City on the coast.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { src: '/images/hero-essaouira-ramparts.webp', alt: 'Historic Portuguese ramparts of Essaouira with cannons overlooking the Atlantic Ocean' },
              { src: '/images/hero-essaouira-fishing.webp', alt: 'Traditional blue fishing boats in the Essaouira port with the medina walls in the background' },
            ].map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-[16/9] group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section className="py-12 md:py-16">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4"
            >Ready to Discover Essaouira?</h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8"
            >Pack a windbreaker, bring your appetite for fresh fish, and prepare to fall in love with Morocco&apos;s most enchanting coastal city. The Wind City is calling.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cities" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
              >
              Explore All Cities <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/tools/planner" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
              >
              Plan Your Trip <Calendar className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
