import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const dir = dirname(fileURLToPath(import.meta.url));
const fp = join(dir, 'page.tsx');

const content = String.raw`import type { Metadata } from 'next';
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
    { name: 'Skala de la Ville', description: "The iconic 18th-century sea bastion stretching along the northern cliffs of the medina. Lined with a row of European bronze cannons pointed at the Atlantic, this fortification was built by Sultan Mohammed III and designed by French architect Theodore Cornut. The ramparts offer sweeping panoramic views of the ocean, the Iles Purpuraires, and the medina rooftops. Orson Welles filmed scenes from Othello here in 1949, and Game of Thrones shot Astapor and Slaver's Bay sequences on these very walls.", image: '/images/hero-essaouira-port.webp', type: 'Historic Fortress', rating: 4.9 },
    { name: 'Skala du Port', description: "The imposing circular watchtower guarding the entrance to Essaouira's working fishing port. Built in the 18th century as part of the city's fortification system, this bastion offers dramatic views of the harbour, the crashing Atlantic waves, and the fishing boats returning with their daily catch. The tower served as the filming location for the Walk of Punishment scene in Game of Thrones Season 3.", image: '/images/hero-essaouira-port.webp', type: 'Historic Fortress', rating: 4.8 },
    { name: 'Moulay Hassan Square', description: "The vibrant heart of Essaouira and the main gathering place in the medina. This wide, sun-drenched plaza is ringed by cafes with outdoor terraces, restaurants, and the arched entrance to the port. By day it hums with vendors, street musicians, and tourists sipping mint tea. During the Gnaoua Festival in June, it transforms into the main concert stage with performances that electrify thousands of spectators.", image: '/images/hero-essaouira-port.webp', type: 'City Square', rating: 4.7 },
    { name: 'Essaouira Port & Fish Market', description: "One of Morocco's most active Atlantic fishing ports, where blue wooden trawlers unload sardines, sea bass, sole, shrimp, and octopus each morning. The open-air fish market is a sensory whirlwind of shouting fishmongers, glistening catches, and swooping seagulls. Choose your fish at the stalls and have it grilled on the spot at the outdoor barbecue stands for 50 to 100 MAD per plate, served with bread, salad, and harissa.", image: '/images/hero-essaouira-port.webp', type: 'Market & Food', rating: 4.8 },
    { name: 'Essaouira Medina (UNESCO)', description: "Inscribed as a UNESCO World Heritage Site in 2001, the medina of Essaouira is a masterpiece of late-18th-century military architecture blended with North African town planning. Unlike the labyrinthine medinas of Fes or Marrakech, Essaouira's streets follow a rational grid pattern inspired by European urban design. The medina is enclosed by crenellated walls and contains the mellah (Jewish quarter), souks, zawiyas, mosques, and hundreds of artisan workshops.", image: '/images/hero-essaouira-port.webp', type: 'UNESCO Heritage', rating: 4.9 },
    { name: 'Essaouira Beach', description: "A vast crescent of golden sand stretching south from the medina walls for over 5 kilometers, battered by consistent Atlantic trade winds. The northern end near the medina is popular with football players and camel ride operators, while the southern stretch toward Diabat attracts kitesurfers and windsurfers. At low tide, the wet sand becomes a mirror reflecting the sky, creating spectacular photography conditions.", image: '/images/hero-essaouira-port.webp', type: 'Beach', rating: 4.7 },
    { name: 'Sidi Mohammed Ben Abdallah Museum', description: "Housed in a beautifully restored 19th-century riad near Moulay Hassan Square, this ethnographic museum showcases the rich cultural heritage of the Essaouira region. Collections include traditional Berber and Jewish jewelry, antique weapons, musical instruments used in Gnaoua ceremonies, marquetry woodwork, Roman-era artifacts from the Iles Purpuraires, and historic photographs. Entry is 70 MAD.", image: '/images/hero-essaouira-port.webp', type: 'Museum', rating: 4.5 },
    { name: 'Borj El Baroud', description: "A dramatic ruined bastion at the southern end of the beach, partially submerged at high tide. This crumbling 18th-century powder magazine sits where the Oued Ksob river meets the Atlantic, creating an evocative, almost otherworldly scene. At low tide you can walk right up to the ruins and explore the remnants of the fortification. A favorite spot for photographers seeking moody, atmospheric shots.", image: '/images/hero-essaouira-port.webp', type: 'Ruins', rating: 4.6 },
    { name: 'The Mellah (Jewish Quarter)', description: "Essaouira once had the largest Jewish community in Morocco, and the mellah preserves this extraordinary heritage. The quarter features distinctive architecture with external balconies and large windows. The Slat Lkahal synagogue has been restored and is open to visitors. At its peak in the 19th century, Jews comprised nearly 40 percent of the city's population and dominated its international trade.", image: '/images/hero-essaouira-port.webp', type: 'Heritage Quarter', rating: 4.6 },
    { name: 'Art Galleries of the Medina', description: "Essaouira has been a magnet for artists since the 1960s, and the medina contains dozens of galleries showcasing contemporary Moroccan art. Galerie Damgaard on Avenue Oqba Ibn Nafiaa is the most famous, having championed self-taught Gnaoua-inspired painters for decades. Other notable galleries include Espace Othello, La Petite Galerie, and the cooperative gallery on Rue de la Skala.", image: '/images/hero-essaouira-port.webp', type: 'Art & Culture', rating: 4.7 },
    { name: 'Medina Souks & Thuya Wood Workshops', description: "The souks of Essaouira are calmer and more navigable than those of Marrakech, organized along the two main arteries of Avenue de l'Istiqlal and Avenue Sidi Mohammed Ben Abdallah. The city is famous for its thuya wood artisans, who carve intricate boxes, chess sets, and furniture from the aromatic root wood of the thuya tree endemic to the Essaouira region.", image: '/images/hero-essaouira-port.webp', type: 'Shopping & Crafts', rating: 4.6 },
    { name: 'Diabat Village & Ruins', description: 'A small Berber village 5 kilometers south of Essaouira along the beach, famous for its association with Jimi Hendrix, who allegedly visited in 1969. The ruins of the Dar Soltane palace, a crumbling 18th-century royal residence half-buried in dunes, add to the mystique. The walk along the windswept beach through the sand dunes is undeniably magical.', image: '/images/hero-essaouira-port.webp', type: 'Village & Legend', rating: 4.5 },
  ];

  const windSports = [
    { sport: 'Kitesurfing', description: "Essaouira's consistent Alizee trade winds (15 to 25 knots) from April to September make it one of the best kitesurfing destinations in Africa. The main beach offers side-onshore conditions ideal for progression. For flat-water sessions, head to Moulay Bouzerktoune, 25 km north, where a protected bay delivers butter-smooth water.", spots: ['Essaouira Beach (main)', 'Moulay Bouzerktoune (flat water)', 'Sidi Kaouki (waves)'], season: 'April to September (peak), rideable year-round', icon: Wind },
    { sport: 'Windsurfing', description: "The sport that first put Essaouira on the wind sports map in the 1980s. The same consistent trade winds that attract kiters make this a world-class windsurfing venue. The main beach is excellent for intermediates, while advanced riders seek out the wave sailing conditions at Moulay Bouzerktoune and Cap Sim.", spots: ['Essaouira Beach', 'Moulay Bouzerktoune', 'Cap Sim'], season: 'April to September (peak winds)', icon: Waves },
    { sport: 'Surfing', description: "When the wind drops between October and March, Essaouira transforms into a beginner-friendly surf destination. Sidi Kaouki, 25 km south, is the go-to spot with consistent beach breaks perfect for learning. Several surf schools offer lessons and board rentals year-round.", spots: ['Sidi Kaouki', 'Essaouira Beach', 'Moulay Bouzerktoune'], season: 'October to March (best swells)', icon: Sailboat },
  ];

  const windSchools = [
    { name: 'ION Club Essaouira', specialty: 'Kitesurfing & Windsurfing', price: '500-800 MAD/session', description: "Part of the internationally renowned ION Club chain, this center offers professional IKO-certified kite instruction and windsurfing courses right on Essaouira beach. Top-quality Duotone and Fanatic equipment. Beginner courses start at 500 MAD for a 2-hour group lesson, private sessions from 800 MAD.", location: 'Essaouira Beach, near Sofitel' },
    { name: 'Explora Watersports', specialty: 'Kitesurfing & Surfing', price: '400-700 MAD/session', description: "A well-established local school run by experienced Moroccan instructors. Known for patient teaching and a friendly atmosphere. Group kite lessons from 400 MAD, surf lessons from 400 MAD including board and wetsuit. Also arranges downwinders and guided kite trips to Moulay Bouzerktoune.", location: 'Essaouira Beach, south end' },
    { name: 'Mogasurf', specialty: 'Surfing & SUP', price: '400-600 MAD/session', description: "Essaouira's premier surf school offering lessons for all levels at both Essaouira beach and Sidi Kaouki. Surf lessons from 400 MAD for 2 hours with equipment included. Also offers stand-up paddleboarding sessions and surf camps with accommodation packages starting at 3,500 MAD per week.", location: 'Rue Hoummane El Fatouaki, Medina' },
    { name: 'Kite Paradise Essaouira', specialty: 'Kitesurfing', price: '500-750 MAD/session', description: "Boutique kite school offering personalized instruction with small group sizes (max 4 students per instructor). IKO-certified courses from discovery sessions to advanced coaching. Equipment rental available from 300 MAD per hour.", location: 'Essaouira Beach, central section' },
  ];

  const restaurants = [
    { name: 'Ocean Vagabond', cuisine: 'International & Moroccan Fusion', price: '120-250 MAD', description: "A beachfront institution with its feet literally in the sand. This laid-back restaurant-bar serves excellent grilled fish, wood-fired pizzas, fresh salads, and Moroccan tagines. The outdoor terrace overlooking the ocean is the best seat in Essaouira for sunset. Try the grilled catch of the day with chermoula sauce.", location: 'Boulevard Mohammed V, Beachfront', highlight: 'Best sunset views in town' },
    { name: 'La Table by Madada', cuisine: 'Modern Moroccan Fine Dining', price: '200-400 MAD', description: "The rooftop restaurant of the stylish Madada Mogador hotel, offering refined Moroccan cuisine with a contemporary twist. Chef uses locally sourced ingredients including fresh Atlantic seafood, regional argan oil, and seasonal produce. The tasting menu at 400 MAD is outstanding. Reservations essential.", location: '5 Rue Youssef El Fassi, Medina', highlight: 'Fine dining with medina rooftop views' },
    { name: 'Taros Cafe', cuisine: 'Mediterranean & Moroccan', price: '100-200 MAD', description: "An Essaouira landmark occupying a multi-level building on Moulay Hassan Square with a famous rooftop terrace and live music program. The menu spans Moroccan classics, Mediterranean dishes, and excellent cocktails. Regular live Gnaoua music performances in the evening.", location: 'Place Moulay Hassan, 2nd Floor', highlight: 'Live Gnaoua music and rooftop terrace' },
    { name: 'Les Alizes Mogador', cuisine: 'Traditional Moroccan', price: '80-160 MAD', description: "A beloved local restaurant tucked away in the medina serving authentic, home-style Moroccan cooking at fair prices. The fish tagine with preserved lemons and olives is legendary, and the couscous on Friday is not to be missed. Simple decor but enormous portions and genuine hospitality. No alcohol.", location: '26 Rue de la Skala, Medina', highlight: 'Authentic home-style Moroccan cooking' },
    { name: 'Port Fish Stalls', cuisine: 'Grilled Seafood', price: '50-100 MAD', description: "The unmissable Essaouira experience. Choose your fish, prawns, calamari, or lobster from the fishmonger stalls near the port entrance, then have it grilled to order at the outdoor barbecue stands. A plate of mixed grilled fish with bread, salad, olives, and harissa costs 50 to 80 MAD. Lobster runs 100 to 150 MAD. Cash only.", location: 'Port entrance, off Place Moulay Hassan', highlight: 'Freshest and cheapest seafood in Morocco' },
    { name: 'Elizir', cuisine: 'Italian-Moroccan Fusion', price: '100-220 MAD', description: "A charming Italian-run restaurant in the medina combining Moroccan ingredients with Italian technique. Handmade pasta, wood-fired pizzas, and creative fusion dishes like argan oil bruschetta and sea bass with chermoula pesto. The candlelit courtyard is one of the most romantic dining spots in the city.", location: 'Rue Aguenaou, Medina', highlight: 'Romantic courtyard dining' },
    { name: 'Umia', cuisine: 'Asian-Moroccan Fusion', price: '130-250 MAD', description: "A stylish newcomer with creative Asian-Moroccan fusion dishes, excellent poke bowls, fresh juices, and craft cocktails. The modern interior with traditional Moroccan accents strikes the right balance. Vegetarian and vegan options are plentiful and well-executed.", location: '2 Rue du Rif, Medina', highlight: 'Best vegetarian options in Essaouira' },
    { name: 'Cafe Restaurant Laayoune', cuisine: 'Traditional Moroccan', price: '40-80 MAD', description: "Where the locals eat. This no-frills restaurant on a quiet medina street serves enormous plates of tagine, grilled meats, and harira soup at incredible prices. The kefta tagine with egg is superb at just 45 MAD. Perfect for budget travelers seeking authenticity over ambiance.", location: 'Avenue Sidi Mohammed Ben Abdallah, Medina', highlight: 'Best budget meals in the medina' },
  ];

  const accommodations = [
    { name: 'Heure Bleue Palais', type: 'Luxury Hotel', price: '2,500-5,000 MAD/night', description: "Essaouira's most prestigious address, a Relais & Chateaux property occupying a restored 18th-century palace. Features a rooftop pool, cinema, spa, and opulent suites with antique furnishings. The rooftop terrace offers 360-degree views over the medina, port, and Atlantic.", budget: 'Luxury' },
    { name: "Villa de l'O", type: 'Boutique Hotel', price: '1,800-3,500 MAD/night', description: "An exquisite boutique hotel built into the medina ramparts with rooms offering direct ocean views. Minimalist-chic design, a heated pool, excellent restaurant, and an intimate spa. One of the most architecturally stunning properties in Morocco.", budget: 'Luxury' },
    { name: 'Riad Madada Mogador', type: 'Boutique Riad', price: '1,200-2,200 MAD/night', description: "A design-forward riad in the heart of the medina with just 7 rooms, each uniquely decorated with contemporary art and traditional craftsmanship. Home to the acclaimed La Table by Madada restaurant. The rooftop terrace with lounging areas is perfect for afternoon tea.", budget: 'Mid-Range to Luxury' },
    { name: 'Riad Dar Maya', type: 'Traditional Riad', price: '700-1,400 MAD/night', description: "A beautifully restored traditional riad with a tranquil courtyard garden, plunge pool, and 6 individually designed rooms. Run by a welcoming British-Moroccan couple who provide excellent local tips. Homemade breakfast with freshly baked msemen is a highlight.", budget: 'Mid-Range' },
    { name: 'Riad Baladin', type: 'Charming Riad', price: '500-900 MAD/night', description: "A colorful, art-filled riad with a sunny rooftop terrace and warm atmosphere. Each room features original artwork by local artists. Central medina location within walking distance of all major sights.", budget: 'Mid-Range' },
    { name: 'Dar Liouba', type: 'Budget Riad', price: '350-600 MAD/night', description: "A simple but spotless riad offering excellent value in the medina. Small courtyard with a fountain, clean rooms with traditional decor, and a friendly owner who goes above and beyond. The rooftop terrace has partial ocean views. Breakfast included.", budget: 'Budget-Friendly' },
    { name: 'Essaouira Youth Hostel (HI)', type: 'Hostel', price: '120-200 MAD/night', description: "A clean, well-run hostel near the medina walls with both dormitory beds and private rooms. Shared kitchen, communal lounge, and a small terrace. Popular with backpackers and surfers. Dorm beds from 120 MAD, private doubles from 200 MAD.", budget: 'Budget' },
    { name: 'Sofitel Essaouira Mogador Golf & Spa', type: 'Resort', price: '2,000-4,000 MAD/night', description: "A sprawling 5-star resort outside the medina with a Gary Player-designed golf course, full-service thalassotherapy spa, multiple restaurants, and an enormous pool. Sits on the beachfront between the medina and the open dunes.", budget: 'Luxury' },
  ];

  const dayTrips = [
    { name: 'Sidi Kaouki Beach', distance: '25 km south', duration: '30 min by car', description: "A laid-back surf village with a wide, windswept beach and consistent Atlantic swells. Much quieter than Essaouira, Sidi Kaouki has a handful of surf camps, a few beachfront cafes, and a Sufi shrine. Surfing lessons from 350 MAD. Grand taxis cost about 20 MAD per person.", icon: Waves },
    { name: 'Argan Forest & Cooperatives', distance: '15-30 km east', duration: 'Half-day trip', description: "The Essaouira region is the heartland of the argan tree. Visit women's cooperatives where Berber women hand-crack argan nuts and cold-press the precious oil. Watch goats climbing argan trees (a genuine phenomenon). Half-day tours cost 300 to 500 MAD per person including transport and tastings.", icon: TreePine },
    { name: 'Paradise Valley', distance: '60 km northeast', duration: 'Full-day trip', description: "A stunning hidden gorge with natural rock pools, waterfalls, and palm-lined cliffs about 90 minutes from Essaouira. The turquoise pools are perfect for swimming in summer. Popular combined with an argan cooperative visit. Organized tours run 400 to 600 MAD per person.", icon: Mountain },
    { name: 'Diabat Village Walk', distance: '5 km south', duration: '2-3 hours walking', description: "A beautiful walk along the beach from Essaouira to the small Berber village of Diabat, passing the ruins of the Dar Soltane palace half-buried in sand dunes. Associated with Jimi Hendrix's 1969 visit. Stop for mint tea in the village. Free.", icon: Footprints },
    { name: 'Camel Ride on the Beach', distance: 'From Essaouira beach', duration: '1-2 hours', description: "Camel and dromedary rides depart from the beach near the medina walls and head south toward Diabat. Sunset rides are particularly popular. Prices start at 200 MAD for one hour and 350 MAD for two hours. Negotiate firmly but fairly.", icon: Compass },
    { name: 'Iles Purpuraires', distance: '1 km offshore', duration: 'Half-day', description: "Small islands visible from the Skala de la Ville, named for the purple dye the Romans extracted from murex shells. The main island hosts ruins of a prison and mosque, and is a breeding ground for Eleonora's falcon. Boat trips can be arranged for 200 to 400 MAD.", icon: Anchor },
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
  ];` + "\n";

writeFileSync(fp, content);
console.log('File written:', content.split('\n').length, 'lines');
