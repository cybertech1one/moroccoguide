import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Wind,
  MapPin,
  Star,
  Clock,
  DollarSign,
  Calendar,
  CheckCircle,
  Camera,
  AlertTriangle,
  Shield,
  Sun,
  ArrowRight,
  CloudSun,
  Sunrise,
  Eye,
  Mountain,
  Plane,
  Users,
  ThumbsUp,
  Info,
  CircleDot,
  Gauge,
  HelpCircle,
  Phone,
  Globe,
  Shirt,
  Weight,
  ChevronDown,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hot Air Balloon & Aerial Adventures Morocco | Balloon Rides, Paragliding, Helicopter Tours',
  description:
    'Soar above Morocco with hot air balloon rides over Marrakech and the Atlas Mountains, paragliding in Aguergour, helicopter tours, zip lining at Terres d\'Amanar, and more aerial adventures. Prices from 800 MAD.',
  keywords: [
    'hot air balloon marrakech',
    'hot air balloon morocco',
    'ciel d afrique marrakech',
    'marrakech by air',
    'paragliding morocco',
    'paragliding aguergour',
    'helicopter tour marrakech',
    'zip lining morocco',
    'terres d amanar',
    'aerial adventures morocco',
    'balloon ride atlas mountains',
    'skydiving morocco',
    'ultralight morocco',
    'microlight marrakech',
    'morocco from above',
    'balloon flight marrakech price',
  ],
  openGraph: {
    title: 'Hot Air Balloon & Aerial Adventures Morocco | Balloon Rides, Paragliding & More',
    description:
      'Complete guide to Morocco\'s aerial experiences. Hot air balloon flights from 1,500 MAD, paragliding from 800 MAD, helicopter tours, zip lining, and more.',
    url: 'https://citytoursmorocco.com/hot-air-balloon',
    images: [
      {
        url: '/images/hero-hot-air-balloon.webp',
        width: 1200,
        height: 630,
        alt: 'Hot air balloon floating over Marrakech at sunrise with Atlas Mountains in the background',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Hot Air Balloon & Aerial Adventures in Morocco',
  description:
    'A comprehensive guide to aerial experiences in Morocco including hot air balloon flights over Marrakech, paragliding, helicopter tours, zip lining, and ultralight flights.',
  url: 'https://citytoursmorocco.com/hot-air-balloon',
  location: {
    '@type': 'Country',
    name: 'Morocco',
  },
  touristType: ['Adventure travelers', 'Couples', 'Photographers', 'Families'],
};

/* ─── Hot Air Balloon Operators ─── */

const balloonOperators = [
  {
    name: 'Ciel d\'Afrique',
    established: 1990,
    description:
      'Morocco\'s oldest and most respected balloon operator. Founded by French aeronaut Maurice Parisot, Ciel d\'Afrique has completed over 10,000 flights since 1990 with a perfect safety record. They operate a fleet of Cameron and Ultramagic balloons and employ some of the most experienced pilots in North Africa. Their flagship sunrise flight takes off from the Jbilet Hills north of Marrakech and drifts over the Haouz Plain toward the Atlas Mountains.',
    priceRange: '1,800 - 2,500 MAD per person',
    flightDuration: 'Approximately 1 hour airborne',
    capacity: '8-16 passengers per basket',
    includes: [
      'Hotel pickup from Marrakech (4:30-5:30 AM depending on season)',
      'Transfer to launch site in the Jbilet Hills',
      'Pre-flight briefing and inflation observation',
      'Approximately 60-minute balloon flight',
      'Traditional Berber breakfast with mint tea upon landing',
      'Flight certificate signed by the pilot',
      'Return transfer to your hotel by 10:00 AM',
    ],
    highlights: [
      'Atlas Mountain panorama stretching across the entire southern horizon',
      'Sunrise over the Jbilet Hills and Haouz Plain',
      'Aerial views of Berber villages, olive groves, and palm groves',
      'Possible sighting of nomadic camps and seasonal rivers',
      'Snow-capped peaks of Toubkal and the High Atlas on clear days',
    ],
    website: 'cieldafrique.com',
    phone: '+212 524 43 28 43',
  },
  {
    name: 'Marrakech By Air',
    established: 2005,
    description:
      'A well-established operator offering both standard group flights and exclusive private balloon experiences. Marrakech By Air distinguishes itself with smaller basket sizes for a more intimate experience and flexible routing that can include flights over the Agafay Desert or the palm groves of the Palmeraie. Their pilots are FAA and DGAC certified with thousands of hours of flight time.',
    priceRange: '1,500 - 2,200 MAD per person (private flights from 8,000 MAD)',
    flightDuration: 'Approximately 1 hour airborne',
    capacity: '4-12 passengers per basket (private flights available)',
    includes: [
      'Hotel pickup from Marrakech or nearby hotels',
      'Transfer to launch site (varies by wind conditions)',
      'Safety briefing and balloon inflation viewing',
      'Approximately 60-minute balloon flight',
      'Moroccan breakfast with fresh pastries, fruit, and mint tea',
      'Commemorative flight certificate',
      'Return to hotel by mid-morning',
    ],
    highlights: [
      'Smaller baskets for a more personal experience',
      'Private flight option for couples and special occasions',
      'Flexible launch sites depending on wind patterns',
      'Views across the Haouz Plain, olive orchards, and Atlas foothills',
      'Photographers can request optimal positioning in the basket',
    ],
    website: 'marrakechbyair.com',
    phone: '+212 661 24 66 24',
  },
  {
    name: 'Royal Balloon Marrakech',
    established: 2012,
    description:
      'A newer operator that has quickly built a strong reputation for premium balloon experiences. Royal Balloon focuses on luxury touches including champagne toasts, gourmet breakfasts, and professional in-flight photography. They operate the newest fleet of balloons in Morocco with state-of-the-art Cameron A-210 and A-250 envelopes.',
    priceRange: '2,000 - 2,500 MAD per person',
    flightDuration: 'Approximately 1 hour airborne',
    capacity: '8-20 passengers per basket',
    includes: [
      'Luxury 4x4 transfer from your Marrakech accommodation',
      'Welcome coffee and dates at the launch field',
      'Watch the full balloon inflation process',
      'Approximately 60-minute flight with experienced pilot commentary',
      'Champagne toast upon landing',
      'Full Moroccan breakfast with panoramic views',
      'Professional photos emailed within 24 hours',
      'Return to hotel',
    ],
    highlights: [
      'Premium experience with champagne and professional photography',
      'Newest balloon fleet in Morocco',
      'Pilot commentary about geography and local culture during flight',
      'Ideal for proposals, anniversaries, and special celebrations',
      'Complimentary professional photo package',
    ],
    website: 'royalballoonmarrakech.com',
    phone: '+212 524 43 72 94',
  },
];

/* ─── Minute-by-Minute Flight Experience ─── */

const flightTimeline = [
  {
    time: '4:30 - 5:30 AM',
    title: 'Hotel Pickup',
    description:
      'A 4x4 vehicle collects you from your riad or hotel in the Marrakech medina or Gueliz. The pre-dawn streets are quiet and the city is still sleeping. The early start is essential because balloon flights require the calm, cool air of early morning.',
  },
  {
    time: '5:30 - 6:00 AM',
    title: 'Arrival at Launch Site',
    description:
      'After a 30-40 minute drive north through the Jbilet Hills, you arrive at the launch field. The crew is already preparing the balloon. Hot coffee, mint tea, and Moroccan pastries welcome you as you watch the massive envelope being laid out on the ground.',
  },
  {
    time: '6:00 - 6:20 AM',
    title: 'Balloon Inflation',
    description:
      'Powerful fans inflate the balloon envelope while it lies on its side. Once partially inflated, the pilot fires the burners for the first time, sending roaring jets of flame into the opening. The balloon slowly rises from horizontal to vertical as hot air fills the 2,800 cubic meter envelope. This is a spectacular sight and excellent photo opportunity.',
  },
  {
    time: '6:20 - 6:30 AM',
    title: 'Safety Briefing & Boarding',
    description:
      'The pilot gives a clear safety briefing covering landing positions, basket etiquette, and what to expect. Passengers board the basket by stepping onto the foothold and swinging over the edge. The basket is surprisingly spacious, divided into compartments for stability.',
  },
  {
    time: '6:30 AM',
    title: 'Liftoff',
    description:
      'With a sustained blast of the burners, the balloon gently lifts off the ground. There is no jolt or sudden movement, just a smooth, silent ascent. The ground falls away and the landscape opens up below you. Within minutes, you are floating 300-500 meters above the earth in near-complete silence.',
  },
  {
    time: '6:30 - 6:45 AM',
    title: 'Sunrise Over the Atlas',
    description:
      'As the balloon drifts with the breeze, the sun rises over the eastern horizon. The Atlas Mountains are bathed in golden light, and the shadows across the plain create a dramatic contrast of light and dark. This is the magical moment that makes the early wake-up worthwhile. The silence is extraordinary, broken only by occasional burner blasts.',
  },
  {
    time: '6:45 - 7:15 AM',
    title: 'Cruising Over the Landscape',
    description:
      'The pilot controls altitude by managing burner output, taking you from treetop level over palm groves to soaring heights with panoramic views. You drift over Berber villages where farmers tend their fields, past olive orchards and seasonal rivers, with the full Atlas range stretching across the southern horizon. The pilot points out landmarks and shares stories about the landscape below.',
  },
  {
    time: '7:15 - 7:30 AM',
    title: 'Descent & Landing',
    description:
      'The pilot selects a landing site based on wind conditions. You may skim the treetops or touch down in an open field. The ground crew has been following the balloon by 4x4 and is ready at the landing site. You are instructed to adopt the landing position: knees bent, holding the rope handles, facing the direction of travel.',
  },
  {
    time: '7:30 - 8:30 AM',
    title: 'Breakfast & Celebration',
    description:
      'After landing, the crew sets up a traditional Moroccan breakfast on rugs laid out in the field. Fresh bread, honey, amlou (argan and almond paste), jams, fruit, boiled eggs, Moroccan pancakes (msemen and baghrir), and endless mint tea. You receive your flight certificate while the crew packs the balloon into its bag.',
  },
  {
    time: '8:30 - 9:30 AM',
    title: 'Return to Hotel',
    description:
      'The 4x4 returns you to your hotel in Marrakech by mid-morning, leaving the rest of the day free to explore the city. You will be back before most tourists have finished their breakfast.',
  },
];

/* ─── Atlas Mountain Balloon Flights ─── */

const atlasBalloonDetails = [
  {
    area: 'Ourika Valley Flights',
    description:
      'Some operators offer specialized flights that launch closer to the Atlas foothills, providing closer views of the Ourika Valley and its terraced hillsides. These flights are seasonal and depend heavily on mountain wind patterns. The Ourika Valley is one of the most scenic areas near Marrakech, with traditional Berber villages clinging to the hillsides and the river winding through the valley floor below.',
    season: 'October to April (best conditions: November to March)',
    note: 'Mountain flights are more weather-dependent than plain flights. Cancellation rates are higher, particularly in winter when mountain winds can be unpredictable.',
  },
  {
    area: 'Imlil Area Views',
    description:
      'While balloon flights do not launch from Imlil itself due to the narrow valley terrain, flights from the Haouz Plain on clear days offer spectacular views toward Imlil and the Toubkal massif. On the clearest mornings, you can see the summit of Jebel Toubkal (4,167m), the highest peak in North Africa, glistening with snow. The contrast between the flat agricultural plain below and the towering Atlas peaks on the horizon is breathtaking.',
    season: 'Year-round on clear days (best visibility: October to May)',
    note: 'Ask your operator about routing toward the mountains. Wind conditions on the day determine the flight path, so mountain views cannot be guaranteed, but most flights offer at least partial Atlas panoramas.',
  },
  {
    area: 'Agafay Desert Launches',
    description:
      'The rocky desert landscape of Agafay, just 30 kilometers southwest of Marrakech, provides a more dramatic launch setting than the northern plains. Some operators offer flights from this area, floating over the barren, moon-like terrain with the Atlas Mountains as a dramatic backdrop. The stark beauty of the Agafay contrasts with the lush palm groves visible in the distance toward Marrakech.',
    season: 'Year-round (summer dawn flights avoid the extreme heat)',
    note: 'Agafay launches are less common and typically require private booking. Check with individual operators for availability.',
  },
];

/* ─── Paragliding Sites ─── */

const paraglidingSites = [
  {
    name: 'Aguergour',
    location: '30 minutes south of Marrakech in the Atlas foothills',
    description:
      'The premier paragliding site near Marrakech and the most popular in Morocco for tandem flights. The launch site sits at approximately 1,200 meters on a ridge above the village of Aguergour, offering panoramic views across the Haouz Plain toward Marrakech in one direction and the Atlas peaks in the other. Reliable thermals develop throughout the day, particularly from mid-morning onward. Several professional operators offer tandem flights here year-round.',
    flightDuration: '15-30 minutes (tandem), 1-3 hours (experienced pilots)',
    priceRange: '800 - 1,200 MAD for tandem flight',
    difficulty: 'No experience required for tandem flights',
    bestTime: 'Year-round. Best thermals: March to October. Calmest: September to November.',
    operators: ['Marrakech Tandem', 'Atlas Parapente', 'Morocco Paragliding'],
    includes: [
      'Transport from Marrakech (30-minute drive)',
      'Safety briefing and equipment check',
      'Tandem flight with certified instructor',
      'GoPro video of your flight (most operators)',
      'Return transport to Marrakech',
    ],
  },
  {
    name: 'Dunes d\'Essaouira',
    location: 'Coastal cliffs and dunes near Essaouira',
    description:
      'Coastal soaring along the Atlantic cliffs south of Essaouira. The persistent trade winds that make Essaouira famous for windsurfing also create excellent ridge lift for paragliding. Flights here offer a unique perspective of the Atlantic coastline, with views of the medina walls, the port, and the Iles Purpuraires from the air. The sandy dune area south of the city provides gentler launch and landing conditions for less experienced pilots.',
    flightDuration: '15-25 minutes (tandem)',
    priceRange: '900 - 1,500 MAD for tandem flight',
    difficulty: 'No experience required for tandem flights. Wind can be strong.',
    bestTime: 'September to November and March to May. Summer winds can be too strong.',
    operators: ['Essaouira Paragliding', 'Ocean Parapente'],
    includes: [
      'Meeting point near Essaouira',
      'Briefing and equipment fitting',
      'Tandem coastal flight',
      'Video recording (most operators)',
    ],
  },
  {
    name: 'Ifrane & Middle Atlas',
    location: 'Near Ifrane in the Middle Atlas Mountains',
    description:
      'The cedar forests and rolling hills of the Middle Atlas near Ifrane provide excellent conditions for cross-country paragliding. The area is less commercially developed than Aguergour, attracting experienced pilots with their own equipment rather than tandem tourists. However, a growing number of operators are beginning to offer tandem flights here, particularly during the excellent thermal season from March to October. The landscape of cedar forests, lakes, and green valleys is dramatically different from the arid south.',
    flightDuration: '20-40 minutes (tandem), 2-5 hours (cross-country)',
    priceRange: '1,000 - 1,500 MAD for tandem flight',
    difficulty: 'Tandem: No experience needed. Solo: Intermediate to Advanced.',
    bestTime: 'March to October for thermals. Avoid winter snow and wind.',
    operators: ['Middle Atlas Paragliding', 'Ifrane Air Sports'],
    includes: [
      'Transfer from Ifrane or Fes (1-hour drive)',
      'Full safety briefing',
      'Tandem flight over cedar forests',
      'Video and photos',
      'Return transport',
    ],
  },
  {
    name: 'Imi n\'Ifri (Demnate)',
    location: 'Near Demnate, 100km east of Marrakech',
    description:
      'The natural rock bridge of Imi n\'Ifri creates unique thermal conditions that attract experienced paragliders. The surrounding hills and gorges provide dramatic scenery and reliable lift. While less accessible than Aguergour, the flying here is considered more interesting by experienced pilots. The area is developing as a paragliding destination, and some operators offer tandem flights for visitors.',
    flightDuration: '20-30 minutes (tandem)',
    priceRange: '1,000 - 1,400 MAD for tandem flight',
    difficulty: 'Tandem: Beginner-friendly. Solo: Intermediate.',
    bestTime: 'March to November. Strong thermals in summer.',
    operators: ['Demnate Parapente'],
    includes: [
      'Transport from Marrakech (90-minute drive)',
      'Pre-flight briefing',
      'Tandem flight over gorge landscape',
      'Return transport',
    ],
  },
];

/* ─── Zip Lining ─── */

const zipLiningVenues = [
  {
    name: 'Terres d\'Amanar',
    location: 'Tahanaoute, 35km south of Marrakech in the Atlas foothills',
    description:
      'Morocco\'s premier outdoor adventure park, set in a beautiful 30-hectare forest of olive, carob, and almond trees with panoramic Atlas Mountain views. Terres d\'Amanar offers a comprehensive adventure experience that goes well beyond simple zip lining. The park features multiple aerial courses at different difficulty levels, suspension bridges, Tarzan swings, and one of the longest zip lines in Morocco stretching over 300 meters across a valley. It is professionally run with European-standard safety equipment and trained staff.',
    activities: [
      {
        name: 'Zip Line Circuit',
        price: '350 - 500 MAD per person',
        duration: '1.5 - 2 hours',
        description: 'Multiple zip lines including the signature 300-meter valley crossing. Varying heights from 5 to 25 meters above ground.',
      },
      {
        name: 'Adventure Parcours (Accrobranche)',
        price: '250 - 400 MAD per person',
        duration: '1.5 - 2 hours',
        description: 'Tree-to-tree aerial obstacle courses with rope bridges, cargo nets, balance beams, and Tarzan swings. Three difficulty levels from children\'s course to expert.',
      },
      {
        name: 'Full Day Adventure Package',
        price: '600 - 900 MAD per person',
        duration: 'Full day (9:00 AM - 4:00 PM)',
        description: 'Combines zip lining, accrobranche, rock climbing wall, archery, mountain biking, and a traditional Berber lunch. The complete Terres d\'Amanar experience.',
      },
    ],
    practicalInfo: {
      minAge: '6 years for children\'s course, 10 years for intermediate, 14 years for expert',
      maxWeight: '120 kg',
      openingHours: '9:00 AM - 5:00 PM, daily except Monday',
      bookingAdvice: 'Book 1-2 days ahead in peak season (October-April). Walk-ins accepted on quieter days.',
    },
  },
  {
    name: 'Atlas Adventure Park',
    location: 'Ouirgane Valley, 60km south of Marrakech',
    description:
      'A smaller but scenic adventure course in the Ouirgane Valley, deeper in the Atlas Mountains than Terres d\'Amanar. The park combines zip lines with hiking trails through walnut and olive groves, with views of the surrounding mountain peaks. Less crowded than Terres d\'Amanar and ideal for those who want a more remote mountain experience.',
    activities: [
      {
        name: 'Zip Line Course',
        price: '300 - 450 MAD per person',
        duration: '1 - 1.5 hours',
        description: 'Series of zip lines through the valley with mountain scenery. Suitable for ages 8 and up.',
      },
      {
        name: 'Combined Zip Line & Hike',
        price: '450 - 650 MAD per person',
        duration: '3 - 4 hours',
        description: 'Zip lines combined with a guided hike through Berber villages and walnut groves. Includes mint tea with a local family.',
      },
    ],
    practicalInfo: {
      minAge: '8 years',
      maxWeight: '110 kg',
      openingHours: '9:00 AM - 4:00 PM, weekends and holidays. Weekday by reservation.',
      bookingAdvice: 'Advance booking required. Contact through Marrakech tour agencies.',
    },
  },
];

/* ─── Helicopter Tours ─── */

const helicopterTours = [
  {
    name: 'Marrakech City Aerial Tour',
    duration: '20 - 30 minutes',
    priceRange: '3,500 - 5,000 MAD per person (minimum 2 passengers)',
    description:
      'A bird\'s-eye tour of Marrakech revealing perspectives impossible from the ground. Fly over the ancient medina walls, the geometric precision of the Koutoubia Mosque and minaret, the vast green expanse of the Agdal and Menara Gardens, the royal palace compound, and the Jemaa el-Fnaa square. The route typically extends over the Palmeraie palm groves and the modern Gueliz district before returning to the helipad.',
    highlights: [
      'Koutoubia Mosque and minaret from above',
      'The winding lanes of the medina seen in their full geometric complexity',
      'Royal Palace and Agdal Gardens',
      'Palmeraie palm groves stretching to the horizon',
      'Panoramic view of Marrakech with Atlas Mountains as backdrop',
    ],
  },
  {
    name: 'Atlas Mountains Helicopter Flight',
    duration: '45 - 90 minutes',
    priceRange: '8,000 - 18,000 MAD per person (varies by route and duration)',
    description:
      'An extraordinary flight deep into the High Atlas Mountains, revealing dramatic valleys, remote Berber villages, and the snow-capped summit of Jebel Toubkal. Routes can include the Ourika Valley, the Imlil Valley, the Toubkal massif, and the dramatic Tizi n\'Test pass. On longer flights, you can reach the M\'Goun massif and the Valley of Roses. This is the fastest way to see the best of the Atlas and a unique perspective that even experienced trekkers rarely achieve.',
    highlights: [
      'Jebel Toubkal summit (4,167m) from helicopter altitude',
      'Ourika Valley terraced villages from above',
      'Dramatic high mountain passes including Tizi n\'Test',
      'Remote Berber settlements accessible only on foot',
      'Snow fields and glacial lakes in winter and spring',
      'Valley of Roses (seasonal: April-May)',
    ],
  },
  {
    name: 'Luxury Desert Transfer',
    duration: '1.5 - 3 hours (one way)',
    priceRange: '25,000 - 60,000 MAD per helicopter (not per person, 2-6 passengers)',
    description:
      'For travelers who want to experience the Sahara without the long overland drive, helicopter transfers from Marrakech to luxury desert camps near Merzouga or M\'Hamid are available. The flight itself is spectacular, crossing the entire Atlas range, the Draa Valley, and arriving at the edge of the Erg Chebbi or Erg Chigaga dunes. What takes 8-10 hours by road takes 1.5-3 hours by air, with incomparably better views.',
    highlights: [
      'Cross the entire Atlas range in under an hour',
      'Aerial views of the Draa Valley and its kasbahs',
      'Approach the Sahara dunes from the air',
      'Direct landing at luxury desert camps',
      'Saves 8-10 hours of road travel each way',
    ],
  },
];

/* ─── Microlight/Ultralight ─── */

const microlightOptions = [
  {
    name: 'Marrakech Ultralight Flights',
    location: 'Small airfields near Marrakech',
    description:
      'Experience the thrill of open-cockpit flying in a weight-shift microlight (ULM in French) over the Marrakech region. Unlike balloons, microlights offer the pilot control over direction and altitude, making for a more dynamic flight experience. You sit behind the pilot in an open or semi-enclosed cockpit, with unobstructed views in all directions. Flights typically cover the Palmeraie, Agafay Desert, and the approaches to the Atlas Mountains.',
    priceRange: '1,200 - 2,500 MAD per person',
    duration: '20 - 60 minutes',
    note: 'Microlight flights are weather-dependent and operate in calm morning conditions. Book several days ahead and expect possible rescheduling.',
  },
  {
    name: 'Essaouira Coastal Flights',
    location: 'Airfield near Essaouira',
    description:
      'Coastal microlight flights offer a unique perspective of the Atlantic shoreline, the Essaouira medina and port, and the dramatic argan forest landscape inland. The combination of ocean views, ancient fortifications, and the contrast of green argan trees against sandy terrain is visually stunning. Some operators fly south toward the dramatic cliffs of Sidi Kaouki.',
    priceRange: '1,500 - 3,000 MAD per person',
    duration: '20 - 45 minutes',
    note: 'Wind conditions in Essaouira are more challenging than Marrakech. Flights are typically only available in the early morning when winds are calmest.',
  },
  {
    name: 'Ouarzazate Desert Flights',
    location: 'Ouarzazate airfield',
    description:
      'Ouarzazate, the gateway to the Sahara and home to Morocco\'s famous film studios, offers microlight flights over the dramatic desert landscape. Fly over the Ait Benhaddou kasbah (UNESCO World Heritage Site), the Ouarzazate dam, and the stark desert terrain that has served as a backdrop for countless films including Gladiator and Game of Thrones.',
    priceRange: '1,800 - 3,500 MAD per person',
    duration: '30 - 60 minutes',
    note: 'Limited operators. Book well in advance and confirm availability. Best conditions: October to April.',
  },
];

/* ─── Skydiving ─── */

const skydivingInfo = {
  overview:
    'Skydiving in Morocco is not as developed as in Europe or North America, but tandem jumps are occasionally available through visiting operators and organized events. The sport is growing, with occasional dropzones established near Marrakech, Beni Mellal, and the coastal cities. The Royal Moroccan Aero Club (Aeroclub Royal du Maroc) oversees aerial sports and can provide current information about registered skydiving operators.',
  options: [
    {
      name: 'Tandem Skydiving near Marrakech',
      description:
        'When available, tandem skydiving jumps are offered from small airfields near Marrakech at altitudes of 3,000-4,000 meters. The freefall lasts approximately 45-60 seconds, followed by a 5-7 minute parachute ride with views of the Atlas Mountains and the Haouz Plain. Availability is inconsistent, so plan well ahead and have alternative activities ready.',
      priceRange: '3,000 - 4,500 MAD per person',
      availability: 'Seasonal and operator-dependent. Most active: March to June and September to November.',
    },
    {
      name: 'Beni Mellal Dropzone',
      description:
        'The Beni Mellal area, between Marrakech and Fes at the base of the Middle Atlas, has hosted organized skydiving events. The flat terrain and generally clear skies make it suitable for parachute operations. Check with the Royal Moroccan Aero Club for upcoming events and registered operators.',
      priceRange: '3,500 - 5,000 MAD per person',
      availability: 'Event-based. Not consistently available year-round.',
    },
  ],
  tips: [
    'Verify that the operator is registered with the Royal Moroccan Aero Club',
    'Ensure the tandem instructor holds an internationally recognized rating (USPA, BPA, or FFP)',
    'Check that equipment is maintained and inspected to international standards',
    'Book well in advance as spots are limited when operators are active',
    'Have a backup plan in case the jump is cancelled due to weather or operational issues',
  ],
};

/* ─── Photography Tips ─── */

const photographyTips = [
  {
    title: 'Camera Settings for Balloon Flights',
    icon: Camera,
    tips: [
      'Use aperture priority mode (A/Av) with f/5.6-f/8 for landscape sharpness',
      'Set ISO to auto with a maximum of 800-1600 for dawn light conditions',
      'Shutter speed of at least 1/250s to compensate for basket movement',
      'Shoot in RAW format for maximum flexibility in post-processing the variable dawn light',
      'Use a wide-angle lens (16-35mm or equivalent) for sweeping landscapes',
      'Bring a medium zoom (24-70mm or 70-200mm) for village details and the balloon itself',
      'Disable image stabilization if resting the camera on the basket rim (it can cause blur)',
    ],
  },
  {
    title: 'GoPro vs Smartphone',
    icon: Eye,
    tips: [
      'GoPro Hero series: Excellent for wide-angle video, mount on the basket or chest harness. Use linear mode to reduce fisheye distortion. 4K at 30fps recommended.',
      'Smartphone: Modern phones (iPhone 14+, Samsung S23+) produce excellent aerial photos. Use the 0.5x ultrawide for landscapes, 1x for villages, and 3-5x telephoto for details.',
      'Smartphone Pro mode: Set to RAW capture for best quality. Manual white balance for golden hour.',
      'GoPro advantage: Hands-free video capture while you enjoy the experience. Set and forget.',
      'Smartphone advantage: Instant sharing, better computational photography, and portrait mode for basket selfies.',
      'Bring both if you have them. GoPro for continuous video, phone for curated stills.',
    ],
  },
  {
    title: 'Golden Hour Timing',
    icon: Sunrise,
    tips: [
      'Balloon flights are timed for golden hour, the 30-60 minutes after sunrise when light is warm and soft',
      'The best light occurs during the first 20 minutes of the flight, immediately after sunrise',
      'Shoot toward the sun for dramatic silhouettes of the balloon and landscape',
      'Shoot away from the sun for evenly lit, warm-toned landscape photos',
      'The balloon envelope itself glows beautifully when lit from behind by the rising sun',
      'As the sun climbs, shadows shorten and contrast increases; adjust exposure compensation accordingly',
      'For paragliding and helicopter flights later in the day, a polarizing filter reduces haze and deepens sky color',
    ],
  },
  {
    title: 'Practical Photo Tips',
    icon: CheckCircle,
    tips: [
      'Secure all equipment with neck straps and wrist straps. Dropped cameras from balloons are gone forever.',
      'Bring a lens cloth; early morning dew can form on lenses at altitude',
      'Charge all batteries the night before; cold morning air drains batteries faster',
      'Bring a spare memory card; you will take more photos than you expect',
      'For video, bring a small gimbal or stabilizer for smooth aerial footage',
      'Do NOT fly drones near balloons, paragliders, or helicopters. It is illegal and extremely dangerous.',
      'The best photo from a balloon is often straight down. Look for patterns, shadows, and the balloon\'s shadow on the ground.',
    ],
  },
];

/* ─── Booking & Practical Guide ─── */

const bookingAdvice = [
  {
    title: 'When to Book',
    icon: Calendar,
    content: [
      'Balloon flights: Book 2-5 days in advance during October to April (peak season). In summer, 1-2 days is usually sufficient.',
      'Paragliding: Book 1-3 days ahead. Same-day booking is sometimes possible outside peak season.',
      'Helicopter tours: Book 1-2 weeks in advance, especially for Atlas Mountain flights.',
      'Zip lining: Book 1-2 days ahead for weekends, walk-ins possible on weekdays.',
      'Peak season for all aerial activities: October to April, with highest demand December to February.',
    ],
  },
  {
    title: 'Dawn Flights & Wind Conditions',
    icon: CloudSun,
    content: [
      'Balloon flights only operate at dawn when winds are calmest (typically below 10 knots).',
      'Wind speeds above 15 knots will result in flight cancellation for balloons.',
      'Paragliding requires different wind conditions: some wind is needed for launch, but too much causes cancellation.',
      'Helicopter tours operate in a wider range of conditions but may be cancelled in storms or very high winds.',
      'Morning is almost always calmer than afternoon for all aerial activities in Morocco.',
      'The calmest months overall: September to November. Most cancellations: January to March (winter storms).',
    ],
  },
  {
    title: 'Cancellation Policies',
    icon: Info,
    content: [
      'Weather cancellations: Most operators offer a full refund or free reschedule for weather cancellations.',
      'Client cancellations: Typically free cancellation up to 24-48 hours before the flight.',
      'No-shows: Usually non-refundable. Always contact the operator if you cannot make it.',
      'Partial conditions: If the flight is shortened due to changing winds, most operators offer a partial refund or discount on a future flight.',
      'Get cancellation policies in writing before booking. Reputable operators have clear, fair policies.',
    ],
  },
  {
    title: 'What to Wear',
    icon: Shirt,
    content: [
      'Balloon flights: Dress warmly in layers. It is cold at 4:30 AM and cooler at altitude. Bring a jacket even in summer.',
      'Flat, closed-toe shoes are essential for balloon flights (no sandals, heels, or flip-flops).',
      'Paragliding: Comfortable, non-restrictive clothing. Sneakers or hiking boots. Sunglasses with a strap.',
      'Helicopter: No loose clothing or scarves that could blow in the rotor wash. Tie back long hair.',
      'Zip lining: Athletic clothing that allows free movement. Closed-toe shoes mandatory.',
      'All activities: Sunscreen, sunglasses, and a hat (secured with a chin strap for paragliding and zip lining).',
    ],
  },
  {
    title: 'Weight Limits',
    icon: Weight,
    content: [
      'Hot air balloons: Generally no strict individual weight limit, but total basket weight is managed by the operator. Passengers over 120 kg should inform the operator when booking.',
      'Paragliding tandem: Maximum passenger weight typically 90-100 kg. Some operators accommodate up to 110 kg with larger wings.',
      'Zip lining: Maximum 110-120 kg depending on the course and equipment.',
      'Helicopter: Weight limits vary by aircraft. Inform the operator of passenger weights at booking for proper fuel and balance calculations.',
      'Microlight/ultralight: Maximum passenger weight typically 90-100 kg due to aircraft limitations.',
      'Always declare your weight accurately. It is a safety issue, not a judgment.',
    ],
  },
  {
    title: 'Safety Standards',
    icon: Shield,
    content: [
      'Morocco\'s civil aviation authority (Direction Generale de l\'Aviation Civile, DGAC) regulates commercial balloon operations.',
      'Reputable balloon operators use Cameron or Ultramagic balloons with regular maintenance and inspection.',
      'Balloon pilots should hold a commercial balloon pilot license with current medical certification.',
      'Paragliding operators should be affiliated with the Federation Royale Marocaine des Sports Aeriens.',
      'Ask about safety records, pilot experience, and equipment maintenance schedules before booking.',
      'Travel insurance that covers aerial activities is strongly recommended. Check your policy before flying.',
    ],
  },
  {
    title: 'Best Season Overall',
    icon: Sun,
    content: [
      'October to April is the best overall season for aerial activities in Morocco.',
      'October-November: Warm, clear, calm. Excellent for all activities. Lower tourist numbers.',
      'December-February: Cooler mornings, snow on the Atlas. Dramatic photography. Peak tourist season.',
      'March-April: Warming up, wildflowers in bloom, longer days. Occasional spring storms.',
      'May-September: Hot, especially inland. Balloon flights operate but haze can reduce visibility. Fewer tourists, lower prices.',
      'The single best month: November. Perfect weather, clear skies, calm winds, manageable tourist numbers.',
    ],
  },
];

/* ─── Comparison Table Data ─── */

const comparisonData = [
  {
    activity: 'Hot Air Balloon',
    price: '1,500 - 2,500 MAD',
    duration: '3-4 hours (total)',
    airTime: '~60 minutes',
    difficulty: 'Easy',
    minAge: '6 years',
    bestLocation: 'Marrakech / Jbilet Hills',
    bestSeason: 'Oct - Apr',
    thrill: 'Low (gentle, serene)',
    photoOpportunity: 'Exceptional',
  },
  {
    activity: 'Paragliding (Tandem)',
    price: '800 - 1,500 MAD',
    duration: '2-3 hours (total)',
    airTime: '15-30 minutes',
    difficulty: 'Easy (tandem)',
    minAge: '12 years',
    bestLocation: 'Aguergour',
    bestSeason: 'Mar - Nov',
    thrill: 'Medium-High',
    photoOpportunity: 'Good (GoPro)',
  },
  {
    activity: 'Zip Lining',
    price: '350 - 900 MAD',
    duration: '1.5-6 hours',
    airTime: 'Minutes (per line)',
    difficulty: 'Easy-Moderate',
    minAge: '6-14 years',
    bestLocation: 'Terres d\'Amanar',
    bestSeason: 'Year-round',
    thrill: 'Medium',
    photoOpportunity: 'Good',
  },
  {
    activity: 'Helicopter Tour',
    price: '3,500 - 18,000 MAD',
    duration: '20 min - 3 hours',
    airTime: 'Full duration',
    difficulty: 'Easy',
    minAge: '2 years',
    bestLocation: 'Marrakech / Atlas',
    bestSeason: 'Year-round',
    thrill: 'Medium',
    photoOpportunity: 'Outstanding',
  },
  {
    activity: 'Microlight/Ultralight',
    price: '1,200 - 3,500 MAD',
    duration: '1-2 hours (total)',
    airTime: '20-60 minutes',
    difficulty: 'Easy',
    minAge: '16 years',
    bestLocation: 'Marrakech',
    bestSeason: 'Oct - May',
    thrill: 'Medium-High',
    photoOpportunity: 'Good',
  },
  {
    activity: 'Skydiving (Tandem)',
    price: '3,000 - 5,000 MAD',
    duration: '3-4 hours (total)',
    airTime: '~7 minutes',
    difficulty: 'Easy (tandem)',
    minAge: '18 years',
    bestLocation: 'Near Marrakech',
    bestSeason: 'Mar - Nov',
    thrill: 'Extreme',
    photoOpportunity: 'Good (GoPro)',
  },
];

/* ─── FAQ ─── */

const faqs = [
  {
    question: 'Is hot air ballooning safe in Morocco?',
    answer:
      'Yes. Morocco\'s established balloon operators such as Ciel d\'Afrique have flown for over 30 years with excellent safety records. Commercial balloon flights are regulated by Morocco\'s DGAC (civil aviation authority). The main operators use Cameron and Ultramagic balloons, which are internationally certified, and employ pilots with thousands of hours of flight time. Weather-related cancellations are a sign of good safety culture; never pressure an operator to fly in marginal conditions.',
  },
  {
    question: 'What happens if my balloon flight is cancelled due to weather?',
    answer:
      'Reputable operators will either reschedule your flight for the next available morning or offer a full refund. Weather cancellations are common (approximately 10-20% of flights are cancelled, rising to 30% in winter). Most operators make the cancellation decision by 5:00 AM and will contact you or your hotel. If you have limited days in Marrakech, book the balloon for your first morning so you have backup days available.',
  },
  {
    question: 'Can children fly in hot air balloons?',
    answer:
      'Yes. Most operators accept children from age 6, provided they can stand for the duration of the flight (approximately 1 hour). Children under 6 are generally not permitted for safety reasons. There is no reduced price for children on most balloon flights. For paragliding, the minimum age is typically 12 for tandem flights, and for zip lining it varies from 6-14 depending on the course difficulty.',
  },
  {
    question: 'Do I need to be physically fit for a balloon flight?',
    answer:
      'No special fitness is required. You need to be able to stand for approximately one hour in the basket and step over the basket edge (about 1.2 meters high) during boarding and disembarkation. The landing can involve a minor bump, so passengers with serious back or knee problems should consult their doctor. Pregnant women in the third trimester are typically advised not to fly.',
  },
  {
    question: 'How high do the balloons fly?',
    answer:
      'Typical flight altitude ranges from 100 meters (close enough to see individual people and animals on the ground) to 500-600 meters (panoramic landscape views). The pilot varies altitude throughout the flight to provide different perspectives. At lower altitudes, you can hear roosters crowing and donkeys braying in the villages below. At higher altitudes, the entire Haouz Plain and Atlas Mountain range come into view.',
  },
  {
    question: 'Is paragliding scary for beginners?',
    answer:
      'Tandem paragliding is surprisingly gentle. The launch involves a short run down a slope, and once airborne, the sensation is more like floating than falling. Your instructor controls everything; you simply enjoy the view. Unlike skydiving, there is no freefall or stomach-dropping sensation. Most first-time flyers describe it as peaceful and exhilarating rather than frightening. If you are comfortable with heights, you will likely enjoy it.',
  },
  {
    question: 'Can I propose during a balloon flight?',
    answer:
      'Absolutely, and operators love helping arrange proposals. Private balloon flights can be booked specifically for this purpose (expect to pay 8,000-12,000 MAD for a private balloon). Operators can arrange champagne, flowers, and even a photographer in a second balloon or at the landing site. Let them know your plans when booking so they can help make the moment perfect. The sunrise, the silence, and the Atlas Mountains as your backdrop make for an unforgettable setting.',
  },
  {
    question: 'Should I tip the balloon crew?',
    answer:
      'Tipping is appreciated but not mandatory. A typical tip is 50-100 MAD per person for the crew. The pilot and ground crew work very early hours and physically demanding shifts. For exceptional service, 100-200 MAD is generous. For private flights or special arrangements (proposals, celebrations), a larger tip of 200-500 MAD is appropriate.',
  },
  {
    question: 'What is the best time of year for aerial photography?',
    answer:
      'November and March offer the best combination of clear skies, dramatic light, and snow on the Atlas peaks. The air is clearest in autumn (October-November) before winter dust storms begin. Winter (December-February) can offer stunning snow-capped Atlas views but occasional haze. Spring (March-April) brings green valleys and wildflowers. Summer has the earliest sunrise times but heat haze can reduce distant visibility.',
  },
  {
    question: 'Are helicopter tours worth the high price?',
    answer:
      'For those who can afford it, helicopter tours offer an unmatched perspective of Morocco\'s landscapes. The Atlas Mountain flights in particular reveal terrain that is impossible to see any other way, including remote valleys, dramatic passes, and close-up views of the Toubkal massif. For couples and small groups, the per-person cost becomes more reasonable. The luxury desert transfer also saves an entire day of driving, which may justify the cost on a tight schedule.',
  },
  {
    question: 'Can I fly my drone during a balloon or paragliding flight?',
    answer:
      'Absolutely not. Flying drones near balloons, paragliders, helicopters, or any manned aircraft is illegal and extremely dangerous. A drone collision with a balloon envelope could cause a catastrophic deflation. A drone strike on a paraglider could cause a collapse. Moroccan authorities take unauthorized drone flights near aircraft very seriously. Leave your drone at the hotel and use a camera or GoPro instead.',
  },
  {
    question: 'What if I have a fear of heights?',
    answer:
      'Interestingly, many people with a fear of heights find balloon flights comfortable because there is no physical connection to the ground to trigger vertigo. You are in an enclosed basket, and the gentle floating sensation is very different from standing on a cliff edge. Paragliding is more exposed and may be challenging for those with severe acrophobia. If your fear is mild, a balloon flight is an excellent way to experience altitude in a gentle, controlled way.',
  },
];

/* ═══════════════════════════════════ RENDER ═══════════════════════════════════ */

export default function HotAirBalloonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── Hero Section ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-hot-air-balloon.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/adventure" className="hover:text-white transition-colors">
              Adventure
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Hot Air Balloon &amp; Aerial</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Wind className="w-4 h-4 text-orange-400" />
            7 Aerial Activities
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Soar Above Morocco
          </h1>
          <p className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-white/90 mb-3">
            Hot Air Balloon &amp; Aerial Adventures
          </p>
          <p className="text-lg text-white/80 max-w-2xl">
            Float silently over the Atlas Mountains at sunrise, paraglide above ancient villages,
            soar by helicopter over hidden valleys, and see Morocco from perspectives
            that few travelers ever experience.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ─── Quick Stats ─── */}
      <section className="py-10 gradient-moroccan">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">7</div>
              <div className="text-sm text-white/70 mt-1">Aerial Activities</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">1990</div>
              <div className="text-sm text-white/70 mt-1">Ballooning Since</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">800+</div>
              <div className="text-sm text-white/70 mt-1">MAD Lowest Price</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">4,167m</div>
              <div className="text-sm text-white/70 mt-1">Atlas Views from Air</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Introduction ─── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco from Above: A Perspective That Changes Everything
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                There is a moment during a hot air balloon flight over Marrakech when the burner
                falls silent, the basket stops swaying, and you find yourself floating in absolute
                stillness 400 meters above the earth. Below, the Haouz Plain stretches in every
                direction, divided into patchwork fields of wheat and olive groves. To the south,
                the entire High Atlas range fills the horizon, its snow-capped peaks glowing pink
                and gold in the first light of dawn. It is, without exaggeration, one of the most
                magical experiences Morocco has to offer.
              </p>
              <p>
                Morocco&apos;s aerial adventures extend far beyond balloon flights. The diverse
                geography that makes this country exceptional on the ground &mdash; Atlantic
                coastline, mountain ranges, deserts, gorges, and ancient cities &mdash; becomes
                even more extraordinary from the air. Paraglide from the Atlas foothills above
                Aguergour and watch Marrakech shimmer on the horizon. Take a helicopter deep into
                valleys that would require days of trekking to reach on foot. Zip line across
                Atlas gorges at Terres d&apos;Amanar. Or feel the open-cockpit rush of a
                microlight flight over the Sahara gateway at Ouarzazate.
              </p>
              <p>
                This guide covers every aerial experience available in Morocco, from the serene
                to the adrenaline-pumping. Whether you want a peaceful sunrise float or the
                ultimate skydiving thrill, you will find detailed information on operators,
                prices in Moroccan Dirhams, locations, what to expect minute by minute, and
                practical booking advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Quick Navigation ─── */}
      <section className="py-8 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h3 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4 text-center">
            Jump to Activity
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: 'Hot Air Balloons', id: 'hot-air-balloons' },
              { label: 'Atlas Balloon Flights', id: 'atlas-balloon-flights' },
              { label: 'Paragliding', id: 'paragliding' },
              { label: 'Zip Lining', id: 'zip-lining' },
              { label: 'Helicopter Tours', id: 'helicopter-tours' },
              { label: 'Microlight Flights', id: 'microlight-flights' },
              { label: 'Skydiving', id: 'skydiving' },
              { label: 'Photography Tips', id: 'photography-tips' },
              { label: 'Booking Guide', id: 'booking-guide' },
              { label: 'Comparison Table', id: 'comparison-table' },
              { label: 'FAQ', id: 'faq' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border-light)] text-[var(--text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Hot Air Balloon Marrakech ─── */}
      <section id="hot-air-balloons" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Sun className="w-4 h-4" />
              <span>Morocco&apos;s Signature Aerial Experience</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Hot Air Balloon Flights &mdash; Marrakech
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Sunrise flights over the Jbilet Hills and Haouz Plain with the Atlas Mountains as
              your backdrop. Operating since 1990, Marrakech is Morocco&apos;s hot air balloon capital.
            </p>
          </div>

          <div className="space-y-8">
            {balloonOperators.map((operator, index) => (
              <div key={operator.name} className="card-moroccan overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-sm font-bold text-[var(--color-primary)]">
                          {index + 1}
                        </span>
                        <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {operator.name}
                        </h3>
                      </div>
                      <p className="text-sm text-[var(--text-muted)]">
                        Established {operator.established} &middot; {operator.capacity}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium">
                        <DollarSign className="w-3.5 h-3.5" />
                        {operator.priceRange}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-sm font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {operator.flightDuration}
                      </span>
                    </div>
                  </div>

                  <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                    {operator.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        What&apos;s Included
                      </h4>
                      <ul className="space-y-2">
                        {operator.includes.map((item, i) => (
                          <li key={i} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                            <ArrowRight className="w-3 h-3 text-[var(--color-primary)] mt-1 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-[var(--color-secondary)]" />
                        Flight Highlights
                      </h4>
                      <ul className="space-y-2">
                        {operator.highlights.map((item, i) => (
                          <li key={i} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                            <Eye className="w-3 h-3 text-[var(--color-secondary)] mt-1 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border-light)] flex flex-wrap gap-4 text-sm text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" />
                      {operator.website}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" />
                      {operator.phone}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Minute-by-Minute Experience ─── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Clock className="w-4 h-4" />
              <span>Your Flight Experience</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Minute-by-Minute: What to Expect
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              A detailed walkthrough of the entire balloon flight experience, from the pre-dawn
              hotel pickup to the traditional Berber breakfast after landing.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-[var(--color-primary)]/20" />

              <div className="space-y-8">
                {flightTimeline.map((step, index) => (
                  <div key={index} className="relative pl-12 md:pl-16">
                    <div className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>

                    <div className="card-moroccan p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2 py-0.5 rounded">
                          {step.time}
                        </span>
                        <h3 className="font-bold text-[var(--text-primary)]">{step.title}</h3>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Atlas Mountain Balloon Flights ─── */}
      <section id="atlas-balloon-flights" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Mountain className="w-4 h-4" />
              <span>Mountain Flights</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Hot Air Balloon &mdash; Atlas Mountains
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Specialized flights offering closer views of the High Atlas, Ourika Valley,
              and the Agafay Desert landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {atlasBalloonDetails.map((item) => (
              <div key={item.area} className="card-moroccan p-6">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 mb-3">
                  <Mountain className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{item.area}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                    <span className="text-[var(--text-secondary)]">{item.season}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Info className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                    <span className="text-[var(--text-muted)] italic">{item.note}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Paragliding ─── */}
      <section id="paragliding" className="py-16 md:py-20 bg-[var(--surface-muted)] scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Wind className="w-4 h-4" />
              <span>Soar Like a Bird</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Paragliding in Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the Atlas foothills to the Atlantic coast, Morocco offers exceptional paragliding
              conditions with tandem flights from 800 MAD. No experience required.
            </p>
          </div>

          <div className="space-y-8">
            {paraglidingSites.map((site, index) => (
              <div key={site.name} className="card-moroccan overflow-hidden">
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-2/5 p-6 md:p-8 bg-[var(--surface-muted)]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {site.name}
                        </h3>
                        <p className="text-xs text-[var(--text-muted)]">{site.location}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="p-3 rounded-lg bg-[var(--surface)]">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-1">
                          <DollarSign className="w-3 h-3" /> Price
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">{site.priceRange}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-[var(--surface)]">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider mb-1">
                          <Clock className="w-3 h-3" /> Flight Time
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">{site.flightDuration}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-[var(--surface)]">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-green-700 uppercase tracking-wider mb-1">
                          <Gauge className="w-3 h-3" /> Difficulty
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">{site.difficulty}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-[var(--surface)]">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-1">
                          <Calendar className="w-3 h-3" /> Best Time
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">{site.bestTime}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">Operators</h4>
                      <div className="flex flex-wrap gap-1">
                        {site.operators.map((op) => (
                          <span key={op} className="text-xs px-2 py-1 rounded bg-[var(--surface)] text-[var(--text-secondary)]">
                            {op}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-6 md:p-8">
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                      {site.description}
                    </p>

                    <h4 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      What&apos;s Included
                    </h4>
                    <ul className="space-y-2">
                      {site.includes.map((item, i) => (
                        <li key={i} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                          <ArrowRight className="w-3 h-3 text-[var(--color-primary)] mt-1 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Zip Lining & Adventure Parks ─── */}
      <section id="zip-lining" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Wind className="w-4 h-4" />
              <span>Fly Through the Atlas</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Zip Lining &amp; Adventure Parks
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Soar across Atlas Mountain valleys on zip lines up to 300 meters long at
              Morocco&apos;s purpose-built adventure parks.
            </p>
          </div>

          <div className="space-y-10">
            {zipLiningVenues.map((venue) => (
              <div key={venue.name} className="card-moroccan overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {venue.name}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {venue.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                    {venue.description}
                  </p>

                  <h4 className="font-bold text-[var(--text-primary)] mb-4">Activities &amp; Prices</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {venue.activities.map((act) => (
                      <div key={act.name} className="p-4 rounded-lg bg-[var(--surface-muted)] border border-[var(--border-light)]">
                        <h5 className="font-bold text-sm text-[var(--text-primary)] mb-1">{act.name}</h5>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs text-[var(--color-primary)] font-medium flex items-center gap-1">
                            <DollarSign className="w-3 h-3" /> {act.price}
                          </span>
                          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {act.duration}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{act.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-lg bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
                    <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                      <Info className="w-4 h-4 text-[var(--color-primary)]" />
                      Practical Information
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="text-sm">
                        <span className="font-bold text-[var(--text-primary)]">Minimum age: </span>
                        <span className="text-[var(--text-secondary)]">{venue.practicalInfo.minAge}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-bold text-[var(--text-primary)]">Weight limit: </span>
                        <span className="text-[var(--text-secondary)]">{venue.practicalInfo.maxWeight}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-bold text-[var(--text-primary)]">Hours: </span>
                        <span className="text-[var(--text-secondary)]">{venue.practicalInfo.openingHours}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-bold text-[var(--text-primary)]">Booking: </span>
                        <span className="text-[var(--text-secondary)]">{venue.practicalInfo.bookingAdvice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Helicopter Tours ─── */}
      <section id="helicopter-tours" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Plane className="w-4 h-4" />
              <span>Luxury Aerial Experiences</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Helicopter Tours
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              From city overflights to deep Atlas explorations and luxury desert transfers,
              helicopter tours offer the ultimate aerial perspective of Morocco.
            </p>
          </div>

          <div className="space-y-6">
            {helicopterTours.map((tour) => (
              <div key={tour.name} className="card-moroccan overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center">
                        <Plane className="w-5 h-5 text-[var(--color-secondary)]" />
                      </span>
                      <div>
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {tour.name}
                        </h3>
                        <p className="text-xs text-[var(--text-muted)]">{tour.duration}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-sm font-medium">
                      <DollarSign className="w-3.5 h-3.5" />
                      {tour.priceRange}
                    </span>
                  </div>

                  <p className="text-[var(--text-secondary)] leading-relaxed mb-5">
                    {tour.description}
                  </p>

                  <h4 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-[var(--color-secondary)]" />
                    What You&apos;ll See
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tour.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <Eye className="w-3.5 h-3.5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 border-l-4 border-l-[var(--color-secondary)]">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-2 rounded-lg bg-[var(--color-secondary)]/10 shrink-0">
                <Info className="w-5 h-5 text-[var(--color-secondary)]" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Booking Helicopter Tours</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Helicopter tours in Morocco are typically arranged through luxury hotels, high-end
                  travel agencies, or directly with charter operators in Marrakech. Prices are
                  per-aircraft for transfers and per-person for sightseeing tours (with minimum
                  passenger requirements). Book 1-2 weeks in advance. Your riad or hotel concierge
                  can usually arrange helicopter tours through their network of operators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Microlight & Ultralight Flights ─── */}
      <section id="microlight-flights" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Wind className="w-4 h-4" />
              <span>Open-Cockpit Adventure</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Microlight &amp; Ultralight Flights
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Experience the thrill of open-cockpit flying in a weight-shift microlight.
              More dynamic than a balloon, more intimate than a helicopter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {microlightOptions.map((option) => (
              <div key={option.name} className="card-moroccan p-6">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 mb-3">
                  <Plane className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{option.name}</h3>
                <p className="text-xs text-[var(--text-muted)] mb-3 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {option.location}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {option.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="p-2 rounded bg-[var(--surface-muted)]">
                    <span className="text-xs font-bold text-[var(--color-primary)]">Price: </span>
                    <span className="text-xs text-[var(--text-secondary)]">{option.priceRange}</span>
                  </div>
                  <div className="p-2 rounded bg-[var(--surface-muted)]">
                    <span className="text-xs font-bold text-[var(--color-secondary)]">Duration: </span>
                    <span className="text-xs text-[var(--text-secondary)]">{option.duration}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs text-[var(--text-muted)] italic">
                  <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  {option.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Skydiving ─── */}
      <section id="skydiving" className="py-16 md:py-20 bg-[var(--surface-muted)] scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Wind className="w-4 h-4" />
              <span>Extreme Aerial</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Skydiving in Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Limited but growing options for tandem skydiving, with occasional operations
              near Marrakech and Beni Mellal.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="card-moroccan p-6 md:p-8 mb-6">
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                {skydivingInfo.overview}
              </p>

              <div className="space-y-4">
                {skydivingInfo.options.map((option) => (
                  <div key={option.name} className="p-4 rounded-lg bg-[var(--surface-muted)] border border-[var(--border-light)]">
                    <h4 className="font-bold text-[var(--text-primary)] mb-2">{option.name}</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                      {option.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="text-xs inline-flex items-center gap-1 text-[var(--color-primary)]">
                        <DollarSign className="w-3 h-3" /> {option.priceRange}
                      </span>
                      <span className="text-xs inline-flex items-center gap-1 text-[var(--text-muted)]">
                        <Calendar className="w-3 h-3" /> {option.availability}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6 border-l-4 border-l-[var(--color-primary)]">
              <h4 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[var(--color-primary)]" />
                Skydiving Safety Checklist
              </h4>
              <ul className="space-y-2">
                {skydivingInfo.tips.map((tip, i) => (
                  <li key={i} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Photography Tips ─── */}
      <section id="photography-tips" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Camera className="w-4 h-4" />
              <span>Capture the Moment</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Aerial Photography Tips
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Expert advice on camera settings, equipment choices, and timing to capture
              stunning aerial photographs of Morocco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photographyTips.map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10">
                    <section.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)]">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="text-sm text-[var(--text-secondary)] flex items-start gap-2 leading-relaxed">
                      <CircleDot className="w-3 h-3 text-[var(--color-primary)] mt-1.5 shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Practical Booking Guide ─── */}
      <section id="booking-guide" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <CheckCircle className="w-4 h-4" />
              <span>Plan Your Flight</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Practical Booking Guide
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to know before booking an aerial experience in Morocco,
              from timing and clothing to safety standards and weight limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookingAdvice.map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10">
                    <section.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)]">{section.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {section.content.map((item, i) => (
                    <li key={i} className="text-sm text-[var(--text-secondary)] flex items-start gap-2 leading-relaxed">
                      <ArrowRight className="w-3 h-3 text-[var(--color-primary)] mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 border-l-4 border-l-[var(--color-secondary)]">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-2 rounded-lg bg-[var(--color-secondary)]/10 shrink-0">
                <ThumbsUp className="w-5 h-5 text-[var(--color-secondary)]" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Pro Tip: Book Balloon Flights First</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  If a balloon flight is on your Morocco bucket list, schedule it for the first
                  morning of your stay in Marrakech. This gives you backup days in case of weather
                  cancellation. The flight is over by 9:30 AM, leaving the rest of the day free
                  for other activities. Many travelers pair a morning balloon flight with an
                  afternoon cooking class or hammam visit for a perfect first day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Comparison Table ─── */}
      <section id="comparison-table" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Gauge className="w-4 h-4" />
              <span>Compare All Activities</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Aerial Activities Comparison
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Side-by-side comparison of every aerial experience available in Morocco.
              Find the perfect activity for your budget, schedule, and thrill tolerance.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[900px]">
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)] sticky left-0 bg-[var(--surface-muted)] z-10">Activity</th>
                    <th className="px-3 py-3 text-xs font-semibold text-[var(--text-secondary)]">Price (MAD)</th>
                    <th className="px-3 py-3 text-xs font-semibold text-[var(--text-secondary)]">Total Duration</th>
                    <th className="px-3 py-3 text-xs font-semibold text-[var(--text-secondary)]">Air Time</th>
                    <th className="px-3 py-3 text-xs font-semibold text-[var(--text-secondary)]">Difficulty</th>
                    <th className="px-3 py-3 text-xs font-semibold text-[var(--text-secondary)]">Min Age</th>
                    <th className="px-3 py-3 text-xs font-semibold text-[var(--text-secondary)]">Best Location</th>
                    <th className="px-3 py-3 text-xs font-semibold text-[var(--text-secondary)]">Season</th>
                    <th className="px-3 py-3 text-xs font-semibold text-[var(--text-secondary)]">Thrill Level</th>
                    <th className="px-3 py-3 text-xs font-semibold text-[var(--text-secondary)]">Photo Quality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-light)]">
                  {comparisonData.map((row) => (
                    <tr key={row.activity} className="hover:bg-[var(--surface-muted)]/50 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-[var(--text-primary)] sticky left-0 bg-[var(--surface)] z-10">
                        {row.activity}
                      </td>
                      <td className="px-3 py-3 text-xs text-[var(--text-secondary)]">{row.price}</td>
                      <td className="px-3 py-3 text-xs text-[var(--text-secondary)]">{row.duration}</td>
                      <td className="px-3 py-3 text-xs text-[var(--text-secondary)]">{row.airTime}</td>
                      <td className="px-3 py-3 text-xs text-[var(--text-secondary)]">{row.difficulty}</td>
                      <td className="px-3 py-3 text-xs text-[var(--text-secondary)]">{row.minAge}</td>
                      <td className="px-3 py-3 text-xs text-[var(--text-secondary)]">{row.bestLocation}</td>
                      <td className="px-3 py-3 text-xs text-[var(--text-secondary)]">{row.bestSeason}</td>
                      <td className="px-3 py-3 text-xs text-[var(--text-secondary)]">{row.thrill}</td>
                      <td className="px-3 py-3 text-xs text-[var(--text-secondary)]">{row.photoOpportunity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-[var(--text-muted)] mt-4 text-center">
            Prices are approximate and may vary by operator, season, and group size. All prices in Moroccan Dirhams (MAD).
            1 MAD is approximately 0.10 USD / 0.09 EUR.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-16 md:py-20 bg-[var(--surface-muted)] scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Answers to the most common questions about aerial experiences in Morocco.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="card-moroccan group">
                <summary className="flex items-start gap-3 p-5 cursor-pointer list-none">
                  <ChevronDown className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0 transition-transform group-open:rotate-180" />
                  <h3 className="font-bold text-[var(--text-primary)] text-sm md:text-base">
                    {faq.question}
                  </h3>
                </summary>
                <div className="px-5 pb-5 ml-8">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to See Morocco from Above?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Whether you choose the serene silence of a sunrise balloon flight or the
            adrenaline rush of paragliding over the Atlas, Morocco&apos;s aerial experiences
            will give you memories and photographs that last a lifetime.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[var(--color-primary)] font-medium hover:bg-white/90 transition-colors"
            >
              Explore All Activities
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/adventure"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Adventure Sports Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/best-time"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Best Time to Visit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ─── Related Guides ─── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-8">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/adventure" className="card-moroccan p-6 group hover:border-[var(--color-primary)] transition-colors">
              <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 mb-3">
                <Mountain className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Adventure Sports Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                20+ adventure activities including surfing, trekking, rock climbing, and desert sports across Morocco.
              </p>
            </Link>
            <Link href="/atlas-mountains" className="card-moroccan p-6 group hover:border-[var(--color-primary)] transition-colors">
              <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 mb-3">
                <Mountain className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Trekking, day trips, and outdoor adventures in the High Atlas, including Toubkal and the Ourika Valley.
              </p>
            </Link>
            <Link href="/activities" className="card-moroccan p-6 group hover:border-[var(--color-primary)] transition-colors">
              <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 mb-3">
                <Users className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                All Activities
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Browse the complete collection of things to do in Morocco, from cultural experiences to outdoor adventures.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
