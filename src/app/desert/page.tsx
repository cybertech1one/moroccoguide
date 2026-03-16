import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Sun,
  Moon,
  Star,
  Compass,
  Thermometer,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Car,
  Tent,
  Camera,
  Backpack,
  Wind,
  Shield,
  Sunrise,
  Sunset,
  Mountain,
  TreePalm,
  Info,
  Lightbulb,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sahara Desert Guide Morocco | Merzouga, Zagora, Erg Chigaga & Desert Camps',
  description:
    'Plan your Sahara Desert adventure in Morocco. Complete guide to Merzouga, Erg Chebbi, Erg Chigaga, Zagora, Draa Valley with camel trekking, sandboarding, luxury camps, photography tips, and what to pack.',
  openGraph: {
    title: 'Sahara Desert Complete Guide - Morocco',
    description:
      'Everything you need for the ultimate Sahara experience: desert camps, camel treks, sandboarding, stargazing, and photography under the clearest skies on Earth.',
    url: 'https://citytoursmorocco.com/desert',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Camel caravan crossing Sahara sand dunes at sunset in Morocco',
      },
    ],
  },
};

const desertDestinations = [
  {
    name: 'Merzouga & Erg Chebbi',
    tagline: 'The Classic Sahara Experience',
    description:
      'Erg Chebbi is the most famous sand sea in Morocco, with towering dunes reaching 150 meters high that glow orange, pink, and gold depending on the light. The small village of Merzouga sits at its edge, serving as the gateway to the most iconic Sahara experience. This is where you will find the widest range of camps, from budget bivouacs to ultra-luxury glamping.',
    detailedGuide: {
      gettingThere: 'From Fes: 8-9 hours via the Ziz Valley (N13 through Errachidia). From Marrakech: 9-10 hours via Ouarzazate and Tinghir (N10/N13). Many tours include the scenic Todra Gorge stop. The nearest airport is Errachidia (Er-Rachidia Moulay Ali Cherif, 130 km). Supratours buses run daily from Fes and Marrakech to Rissani (35 km from Merzouga), where you transfer to a local taxi.',
      camps: 'Over 100 camps line the western edge of Erg Chebbi. Budget camps cluster near Merzouga village (400-800 MAD/night). Mid-range camps like Erg Chebbi Luxury Camp and Merzouga Desert Camp sit 2-3 km into the dunes (1,200-2,500 MAD/night). Ultra-luxury camps such as Kam Kam Dunes and Azalai Desert Lodge offer private suites, pools, and gourmet dining (3,500-8,000+ MAD/night).',
      activities: 'Sunrise camel trek (depart 5:30am, 1.5 hours), sunset camel trek (depart 4pm, 1.5 hours), sandboarding on the main dunes (free if boards provided by camp), quad biking circuits (300-600 MAD/hour), 4x4 tours to the black volcanic desert of Taouz and the fossil-rich sites near Rissani, Gnaoua music performances at Khamlia village (donation-based, typically 50-100 MAD), and overnight stargazing sessions.',
      sunriseSunset: 'Sunrise is the main event here. The eastern face of the dunes catches the first light, turning from deep purple to rose gold to blazing orange in about 20 minutes. The best vantage point is the crest of the tallest dune directly behind your camp. Sunset is equally dramatic from the western ridgelines, with the dunes casting long purple shadows that stretch to the horizon.',
    },
    highlights: ['Tallest dunes in Morocco (150m)', 'Widest camp selection', 'Gnaoua music culture', 'Khamlia village visit', 'Best for first-time visitors'],
    bestFor: 'First-time desert visitors, photographers, luxury seekers',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
  },
  {
    name: 'Erg Chigaga (M\'Hamid)',
    tagline: 'The Wilder Alternative',
    description:
      'Erg Chigaga is Morocco\'s largest dune field, stretching 40 km long and 15 km wide with dunes up to 300 meters high. Located 50 km from M\'Hamid El Ghizlane by off-road track, it is accessible only by 4x4 or camel caravan, which keeps it blissfully uncrowded. This is the real Sahara for those who want solitude, silence, and the sense of being truly lost in an ocean of sand.',
    detailedGuide: {
      gettingThere: 'From Marrakech: 8-9 hours to M\'Hamid via Ouarzazate and Zagora (N9/N12). From M\'Hamid village, it is a 2-hour 4x4 drive (50 km off-road) or a 2-day camel trek to reach Erg Chigaga. There is no public transport beyond M\'Hamid. All camps arrange 4x4 transfers. The route passes through reg (stony desert) and small dune fields before the massive Erg Chigaga appears on the horizon.',
      camps: 'Far fewer camps than Erg Chebbi, giving it a more exclusive feel. Erg Chigaga Luxury Desert Camp is the standout (3,500-6,000 MAD/night, private tents with en-suite). Camp Mars offers mid-range comfort (1,500-2,500 MAD/night). Basic nomad camps run 600-1,000 MAD/night. All prices typically include 4x4 transfer, meals, and a camel ride.',
      activities: 'Multi-day camel treks between dune fields (2-5 day circuits), 4x4 desert rallying, visiting Iriki Lake (a dry salt lake that fills partially after rain, creating stunning reflections), nomad family encounters, sandboarding on the mega-dunes, and night camps in total silence where the only sound is your own breathing.',
      sunriseSunset: 'The sheer scale of Erg Chigaga makes the light shows here arguably more dramatic than Erg Chebbi. The dunes are wider and taller, creating deeper shadows and more complex color gradients. At sunrise, climb to the nearest ridge for 360-degree views of nothing but sand and sky in every direction.',
    },
    highlights: ['Largest dune field in Morocco', 'Only 4x4 access (50 km off-road)', 'True wilderness solitude', 'Nomad encounters', 'Taragalte Music Festival (October)'],
    bestFor: 'Adventurers, those seeking solitude, experienced desert travelers',
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=800',
  },
  {
    name: 'Draa Valley',
    tagline: 'Morocco\'s River of Palms',
    description:
      'The Draa Valley is one of the most beautiful drives in all of Morocco. Running 200 km from Ouarzazate to Zagora, this lush ribbon of palm oases, fortified kasbahs, and earthen villages threads between arid hillsides and the seasonal Draa River. The valley contains the highest concentration of date palms in the country (over 2 million trees) and some of the finest examples of traditional Berber architecture.',
    detailedGuide: {
      gettingThere: 'The valley is best experienced as a scenic drive between Ouarzazate and Zagora on the N9. From Marrakech, cross the Tizi n\'Tichka pass (2,260m) to Ouarzazate (4 hours), then follow the Draa south. Key stops include Agdz (first palm oases), Tamnougalt (ancient kasbah, 500+ years old), and Tansikht (riverside picnic spot).',
      camps: 'Accommodation lines the valley rather than concentrating in dunes. Riad Caravane in Agdz (700-1,200 MAD/night) is a beautifully restored kasbah. Dar Ahlam in Skoura (nearby) is one of Morocco\'s finest luxury stays. In Zagora, Riad Dar Sofian and Villa Zagora offer good mid-range options (500-1,000 MAD/night).',
      activities: 'Kasbah exploration (Tamnougalt, Timiderte), palm grove walks, date harvest participation (October-November), traditional pottery workshops in Tamegroute (famous green-glazed ceramics), visiting the Tamegroute library (one of Africa\'s oldest, with 13th-century manuscripts), sunset walks along the Draa riverbed, and cycling through the oases.',
      sunriseSunset: 'The Draa Valley is oriented roughly north-south, so sunrise and sunset light falls across the kasbahs rather than along them. The golden hour turns the mud-brick buildings into glowing amber fortresses. The best viewpoints are from the hilltop kasbahs looking down over the palm groves.',
    },
    highlights: ['200 km of palm oases', 'Ancient kasbahs (Tamnougalt)', 'Tamegroute pottery & library', 'Date harvest season', 'Scenic N9 highway'],
    bestFor: 'Culture lovers, photographers, road trippers, those combining desert and valley',
    image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=800',
  },
  {
    name: 'Zagora',
    tagline: 'Gateway to the Desert',
    description:
      'Zagora is the closest desert gateway from Marrakech and the natural starting point for trips deeper into the Sahara. Famous for its "Timbuktu 52 Days" road sign (indicating the old caravan route), Zagora sits at the edge of the Draa Valley where the lush palms give way to the hammada (stony desert). While the local dunes at Erg Lihoudi are smaller and flatter than Erg Chebbi, the area compensates with fewer tourists, lower prices, and a more authentic Moroccan desert-edge atmosphere.',
    detailedGuide: {
      gettingThere: 'From Marrakech: 6-7 hours via the Tizi n\'Tichka pass and Ouarzazate (N9). Supratours and CTM buses run daily from Marrakech and Ouarzazate. Grand taxis connect Zagora to Ouarzazate (100-150 MAD) and M\'Hamid (50-80 MAD). Many travelers visit Zagora as part of a 2-day/1-night desert tour from Marrakech, though 3 days allows a much more relaxed experience.',
      camps: 'Desert camps at Erg Lihoudi (45 minutes from Zagora) are smaller and more intimate than those at Erg Chebbi. Expect to pay 400-700 MAD for a budget camp night and 1,200-2,500 MAD for mid-range. Luxury options are limited here, with most upscale travelers continuing to Erg Chigaga.',
      activities: 'Sunset camel rides on Erg Lihoudi dunes, exploring the Zagora oasis by bicycle, visiting the Wednesday souk (one of the largest in the Draa region), a side trip to Tamegroute for its pottery cooperatives and Koranic library, and hiking in Jebel Zagora (the flat-topped mountain overlooking town, with an 11th-century Almoravid fortress ruin at the summit).',
      sunriseSunset: 'Jebel Zagora provides the best elevated viewpoint. The summit hike takes about 45 minutes and rewards with panoramic views over the Draa Valley and the desert beyond. The dune camps at Erg Lihoudi face west, making sunset the primary event here rather than sunrise.',
    },
    highlights: ['Closest to Marrakech (6-7 hrs)', '"52 Days to Timbuktu" sign', 'Jebel Zagora fortress hike', 'Wednesday market', 'Budget-friendly'],
    bestFor: 'Short trips, budget travelers, those wanting fewer crowds',
    image: 'https://images.unsplash.com/photo-1507363524160-a7c57878847f?q=80&w=800',
  },
];

const experienceTypes = [
  {
    type: 'Overnight Camel Trek',
    duration: '1 night',
    price: '400-800 MAD',
    description: 'The most popular option. Ride camels to a desert camp at sunset, enjoy dinner under the stars, sleep in tents, and watch sunrise over the dunes. The camel ride is typically 1-1.5 hours each way through the dunes.',
    ideal: 'First-timers, couples, those short on time',
    whatToExpect: 'You depart camp around 4:00-4:30pm, riding single-file on dromedaries led by Berber handlers. After reaching the overnight camp, you climb the nearest dune for sunset, enjoy a tagine dinner with drum music, sleep under blankets in Berber tents, then wake at 5:30am for the sunrise camel ride back.',
  },
  {
    type: 'Multi-Day Desert Expedition',
    duration: '2-5 nights',
    price: '1,500-6,000 MAD',
    description: 'Trek deeper into the Sahara by camel or 4x4. Camp in different locations each night, visit nomad families, cross varied terrain from reg to erg, and experience true desert solitude far from any other travelers.',
    ideal: 'Adventurers, photographers, cultural enthusiasts',
    whatToExpect: 'Each day covers 15-25 km by camel (5-7 hours of riding). Camps are set up fresh each evening by the support crew. You eat traditional meals cooked over fire, wash with minimal water, and sleep under some of the clearest skies on Earth. The M\'Hamid to Erg Chigaga circuit is the most popular multi-day route.',
  },
  {
    type: 'Luxury Desert Glamping',
    duration: '1-3 nights',
    price: '2,500-8,000 MAD',
    description: 'Private luxury tents with real beds, en-suite bathrooms, gourmet dining, and personal guides. Some camps have pools, spas, and generators for electricity. The desert experience without sacrificing comfort.',
    ideal: 'Luxury travelers, honeymooners, special occasions',
    whatToExpect: 'Arrive by 4x4 to a pre-set camp with furnished tents (king beds, rugs, lanterns, private toilet/shower). A private chef prepares a multi-course dinner with wine. Some camps offer massage services, private dune excursions, and telescope-guided stargazing. Kam Kam Dunes and Azalai near Merzouga are top choices.',
  },
  {
    type: 'Budget Desert Trip',
    duration: '1-2 nights',
    price: '400-1,200 MAD',
    description: 'Basic bivouac camp with shared tents, communal dinner, and group camel ride. No frills but still magical under the stars. Most budget trips from Marrakech include transport, meals, and the camp as a package.',
    ideal: 'Backpackers, solo travelers, budget-conscious',
    whatToExpect: 'Shared tents (2-6 people per tent) with foam mattresses and heavy blankets. Communal toilet may or may not be available. Dinner is a group tagine around a campfire. The experience is less polished but the stars, the silence, and the sunrise are identical to what luxury guests see.',
  },
];

const activities = [
  {
    icon: Compass,
    name: 'Camel Trekking',
    description: 'The quintessential Sahara experience. Ride a dromedary (one-hump camel) through the dunes as the sun sets, following ancient caravan routes. Most treks last 1-2 hours each way. Two formats: the standard overnight (1 night, 1.5 hr ride each way) and multi-day expeditions (2-5 days, 15-25 km daily). The camels are gentle and well-trained. Tip your handler 20-50 MAD.',
    practicalTip: 'Wear loose trousers and bring a scarf to wrap around your face against blowing sand. Saddle soreness is real after 2+ hours, so consider padded cycling shorts for multi-day treks.',
  },
  {
    icon: Wind,
    name: 'Sandboarding',
    description: 'Strap on a board and surf the dunes. Most camps at Erg Chebbi provide boards for free. The sand is soft for landings, and the views from the top of a 150-meter dune are extraordinary. Unlike snow, sand requires waxing the board base with candle wax for speed. The best runs are on dunes with a 30-40 degree incline.',
    practicalTip: 'Go early morning when the sand is firm and cool. By midday, the sand becomes too hot and soft. Wear closed shoes for the climb up.',
  },
  {
    icon: Star,
    name: 'Stargazing',
    description: 'The Sahara has some of the darkest skies on Earth, with a Bortle scale rating of 1-2 (the lowest possible light pollution). You can see the Milky Way with the naked eye, and on clear nights, up to 6,000 individual stars. The best months are October-March when the air is dry and clear. Some luxury camps provide telescopes and astronomy guides.',
    practicalTip: 'New moon phases offer the darkest skies. Download a stargazing app (Star Walk or SkyView) before you lose signal. Allow 20 minutes for your eyes to fully adjust to the dark.',
  },
  {
    icon: Car,
    name: '4x4 Desert Safari',
    description: 'Explore remote dune fields, dried lake beds (Iriki Lake), and fossil sites by Land Cruiser. Essential for reaching Erg Chigaga from M\'Hamid and for those who prefer not to ride camels. Half-day tours (300-600 MAD) cover the local area. Full-day circuits (800-1,500 MAD) reach fossil beds near Rissani and the black volcanic desert of Taouz.',
    practicalTip: 'Negotiate price and itinerary in advance. Ensure the vehicle has working seatbelts and the driver carries water and a satellite phone or radio.',
  },
  {
    icon: Camera,
    name: 'Desert Photography',
    description: 'The desert offers extraordinary light at dawn and dusk. The golden hour lasts longer here because the flat horizon extends the sun\'s low-angle phase. Dune patterns, camel caravans, starscapes, and Berber portraits are photographer favorites. The blue hour just after sunset creates an ethereal palette of indigo and magenta over the dunes.',
    practicalTip: 'Bring a polarizing filter to deepen blue skies, a wide-angle lens for dune landscapes, and a telephoto for caravan silhouettes. Protect gear with ziplock bags against sand infiltration.',
  },
  {
    icon: Moon,
    name: 'Berber Music & Culture',
    description: 'Evening campfires feature traditional Berber drumming and singing. In Merzouga, visit Khamlia village (3 km south) to hear Gnaoua music, a UNESCO-recognized art form with roots in sub-Saharan Africa. The Gnaoua musicians of Khamlia are descendants of formerly enslaved people and their trance-like music features metal castanets (qraqeb) and deep bass drums.',
    practicalTip: 'Khamlia visits are free but a donation of 50-100 MAD per person is expected and appreciated. Performances happen throughout the day but evening sessions have the best atmosphere.',
  },
];

const overnightGuide = [
  {
    time: '3:30 - 4:00 PM',
    event: 'Departure',
    description: 'Meet your camel handler at the camp or hotel edge. Your small bag is loaded onto the camel. You mount (it lurches forward when standing, hold on) and the caravan departs single-file toward the dunes.',
  },
  {
    time: '4:00 - 5:30 PM',
    event: 'Camel Trek to Camp',
    description: 'Ride through increasingly tall dunes. The handler leads you along ridgelines for the best views. Stop at a high point for sunset photos. The light shifts through orange, pink, and purple as you ride.',
  },
  {
    time: '5:30 - 6:30 PM',
    event: 'Sunset & Dune Climbing',
    description: 'Arrive at the overnight camp. Climb the tallest nearby dune (15-20 min climb in soft sand) for panoramic sunset views. This is the most photographed moment of the trip.',
  },
  {
    time: '7:00 - 9:00 PM',
    event: 'Dinner & Music',
    description: 'Traditional Berber tagine or couscous cooked on-site. Mint tea by the fire. Drum circle begins with the camp staff playing traditional rhythms. You are welcome to join in.',
  },
  {
    time: '9:00 - 11:00 PM',
    event: 'Stargazing',
    description: 'Lie on the dune sand (still warm from the day) and gaze upward. The Milky Way arches overhead in a dense, luminous band. Shooting stars are common. Most people fall asleep outside before retreating to their tents.',
  },
  {
    time: '5:00 - 5:30 AM',
    event: 'Wake-up Call',
    description: 'Your guide gently wakes you. Hot mint tea or coffee is ready. The air is cold (5-15 degrees C depending on season). Bundle up and prepare for the sunrise.',
  },
  {
    time: '5:30 - 6:30 AM',
    event: 'Sunrise',
    description: 'Climb the dune again. Watch the dunes transform from grey-blue to warm gold as the sun crests the horizon. The shadows create dramatic patterns. This is often considered even more beautiful than sunset.',
  },
  {
    time: '7:00 - 8:30 AM',
    event: 'Breakfast & Return',
    description: 'Simple breakfast of bread, jam, butter, and coffee. Mount camels for the return journey. The morning light makes for excellent photography as you ride back through the dune field.',
  },
];

const photographyGuide = [
  {
    title: 'Golden Hour Timing',
    description: 'The desert golden hour is extraordinary. Arrive at your shooting position 30 minutes before sunrise or 1 hour before sunset. The low-angle light creates dramatic shadows in the dune ripples and ridges. The color palette shifts through gold, orange, rose, and purple in rapid succession.',
    tip: 'Use spot metering on highlights to preserve detail in the bright sand. Expose for the sky and let the dunes go slightly dark for silhouette effects.',
  },
  {
    title: 'Dune Patterns & Textures',
    description: 'Wind creates mesmerizing patterns in the sand: ripples, scallops, knife-edge ridgelines, and sweeping curves. These are best photographed at low angles with side light (early morning or late afternoon). A telephoto lens compresses the dune layers beautifully.',
    tip: 'Get low to the ground. Shoot along the dune surface to emphasize ripple patterns. A 70-200mm lens is ideal for isolating individual dune shapes.',
  },
  {
    title: 'Camel Caravans',
    description: 'The silhouette of a camel caravan against the setting sun is the iconic Sahara image. Position yourself on a high dune looking down, or shoot from the side with the caravan between you and the sun. Long shadows in late afternoon create dramatic leading lines.',
    tip: 'Ask your guide to arrange a moment where the caravan crosses a ridgeline. Shoot at f/8-f/11 for maximum sharpness. Underexpose by 1-2 stops for rich silhouettes.',
  },
  {
    title: 'Night Sky & Astrophotography',
    description: 'The Sahara is a world-class astrophotography location. The Milky Way core is visible from March to October. Use a wide-angle lens (14-24mm), f/2.8 or wider, ISO 3200-6400, and 15-25 second exposures. Include a tent, camel, or dune ridgeline in the foreground for scale.',
    tip: 'Bring a sturdy tripod (sand is unstable, push legs in deep). Use a remote shutter or 2-second timer. Focus manually on a bright star using live view magnification. Shoot RAW for maximum editing flexibility.',
  },
  {
    title: 'Protecting Your Gear',
    description: 'Desert sand is the enemy of camera equipment. Fine grains infiltrate every crevice, scratch lenses, and jam mechanisms. Wind can kick up without warning, turning a clear day into a sandstorm in minutes.',
    tip: 'Keep your camera in a sealed bag when not shooting. Change lenses inside a bag or jacket. Use a UV filter as a sacrificial lens protector. Carry a rocket blower (not canned air) to clean the sensor. Wipe gear with a microfiber cloth after each session.',
  },
];

const packingList = [
  { category: 'Clothing', items: ['Lightweight long-sleeve shirts (sun protection)', 'Loose trousers or harem pants', 'Warm fleece or jacket (nights drop to 5-10C in winter)', 'Scarf or cheche (desert headwrap, buy locally for 30-50 MAD)', 'Sandals and closed shoes', 'Warm socks for cold desert nights', 'Swimsuit (some luxury camps have pools)'] },
  { category: 'Protection', items: ['High-SPF sunscreen (50+), reapply every 2 hours', 'Quality UV-blocking sunglasses (polarized recommended)', 'Wide-brim hat or cap with neck flap', 'Lip balm with SPF', 'Moisturizer (desert air is extremely dry)', 'Aloe vera gel for sunburn', 'Insect repellent (mosquitoes near oases)'] },
  { category: 'Essentials', items: ['Water bottle (2+ liters per day minimum)', 'Headlamp or torch with fresh batteries', 'Camera with extra batteries (cold nights drain them)', 'Phone power bank (10,000+ mAh)', 'Wet wipes and hand sanitizer', 'Basic toiletries (biodegradable)', 'Any prescription medications', 'Passport copy and emergency contacts'] },
  { category: 'Comfort', items: ['Sleeping bag liner (camps provide blankets but extra warmth is welcome)', 'Ear plugs and eye mask', 'Small day pack for dune hikes', 'Snacks for the journey (nuts, dates, energy bars)', 'Cash in small denominations for tips (20-50 MAD notes)', 'Book or journal (no wifi in the desert)', 'Ziplock bags for sand protection of electronics'] },
];

const monthlyGuide = [
  { months: 'October - November', temp: '20-30C day / 10-15C night', rating: 5, verdict: 'Perfect. Warm days, cool nights, clear skies, and the date harvest in full swing. The absolute best time for a desert trip. Book camps well in advance.' },
  { months: 'March - April', temp: '22-32C day / 12-18C night', rating: 5, verdict: 'Excellent. Spring temperatures, occasional wildflowers in the oases, and comfortable nights. Second-best window and slightly less crowded than October.' },
  { months: 'December - February', temp: '15-22C day / 0-8C night', rating: 4, verdict: 'Great during the day but bitterly cold at night. Temperatures can drop below freezing in January. Pack serious warm layers and request extra blankets.' },
  { months: 'May', temp: '30-38C day / 18-22C night', rating: 3, verdict: 'Getting hot. Still manageable with early morning and late afternoon activities. Midday rest is essential. Good deals on camps.' },
  { months: 'September', temp: '32-40C day / 20-25C night', rating: 3, verdict: 'Hot but tolerable. Fewer tourists, good deals on camps. The heat begins to break by late September.' },
  { months: 'June - August', temp: '38-50C day / 25-30C night', rating: 1, verdict: 'Extremely hot and genuinely dangerous. Sand surface temperatures can exceed 70C. Most camps close entirely. Strongly advised against visiting.' },
];

const campComparison = [
  {
    type: 'Standard/Budget Camp',
    price: '400-1,200 MAD/night',
    features: ['Shared tents (2-4 people)', 'Foam mattresses and heavy blankets', 'Communal toilets (pit or portable)', 'Simple tagine dinner and basic breakfast', 'Group campfire with drumming', 'Basic but clean and functional'],
    considerations: 'Best for backpackers and those who want the experience without the price. The stars and sunrise are identical regardless of camp level. Main drawbacks are shared sleeping quarters and minimal bathroom facilities.',
    image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=600',
  },
  {
    type: 'Luxury Desert Camp',
    price: '2,500-8,000+ MAD/night',
    features: ['Private tent with en-suite bathroom', 'Real beds with premium linens and heating', 'Hot showers and flushing toilets', 'Gourmet multi-course dinner with wine', 'Private campfire, music, and stargazing', 'Some with pool, spa, electricity, and A/C'],
    considerations: 'Worth the splurge for honeymooners and special occasions. Top camps include Kam Kam Dunes (Erg Chebbi), Azalai Desert Lodge (Merzouga), Erg Chigaga Luxury Desert Camp (M\'Hamid), and Desert Luxury Camp (Merzouga). Book 2-4 weeks in advance for peak season.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=600',
  },
];

const safetyTips = [
  'Always travel with an experienced local guide. The desert is vast and featureless; getting lost can be fatal. Even GPS can be unreliable when dunes shift.',
  'Drink at least 3-4 liters of water per day, more if active. Dehydration is the number one risk and symptoms include headache, dizziness, and confusion.',
  'Inform someone of your itinerary. Cell phone coverage is nonexistent in most of the deep desert. Some camps have satellite phones for emergencies.',
  'Protect yourself from the sun at all times. Sunburn and heatstroke happen faster than you expect at this latitude. Cover exposed skin and wear a hat.',
  'Watch for scorpions, especially around camps at night. Shake out your shoes in the morning. Use a headlamp when walking to the toilet after dark.',
  'Sandstorms can arise quickly. If caught in one, turn your back to the wind, cover your nose and mouth with a scarf, close your eyes, and wait. They rarely last more than 30 minutes.',
  'If you have respiratory issues (asthma), bring medication and a face covering for wind and sand days. Fine desert dust can trigger attacks.',
  'Carry cash in small denominations. There are no ATMs in the desert, and camps rarely accept cards. Budget 50-100 MAD per day for tips and small purchases.',
  'Respect the desert environment. Take all trash with you, including cigarette butts. Do not disturb fossil sites or remove stones.',
];

const draaValleyStops = [
  { name: 'Agdz', description: 'The gateway to the Draa Valley. A small town where the palms begin, with a weekly Thursday souk and the hilltop Kasbah of the Glaoui family offering valley panoramas.', km: '0 km (start)' },
  { name: 'Tamnougalt', description: 'One of the oldest and most impressive kasbahs in the valley, dating to the 16th century. Now partially restored as a museum and guesthouse. The ancient Jewish quarter (mellah) is still visible.', km: '8 km' },
  { name: 'Tansikht', description: 'A riverside village where the Draa flows wide and slow through dense palm groves. An ideal spot for a picnic lunch with views of the river and the kasbahs beyond.', km: '60 km' },
  { name: 'Tamegroute', description: 'Home to the Nassiriyya zaouia (religious brotherhood), a famous Koranic library with 13th-century manuscripts, and the renowned green-glazed pottery cooperatives. One of the Draa\'s most culturally significant stops.', km: '170 km' },
  { name: 'Zagora', description: 'The valley\'s main town and launching point for desert trips. See the famous "Timbuktu 52 Days" sign, explore the palm groves by bicycle, and stock up at the lively souk.', km: '200 km' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Sahara Desert Morocco',
  description: 'Complete guide to Sahara Desert experiences in Morocco including Merzouga, Zagora, Erg Chigaga, and the Draa Valley.',
  url: 'https://citytoursmorocco.com/desert',
  touristType: ['Adventure tourism', 'Nature tourism', 'Photography tourism'],
  geo: { '@type': 'GeoCoordinates', latitude: 31.0977, longitude: -4.0085 },
  image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200',
};

export default function DesertPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2800)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Sahara Desert</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            The Sahara Desert
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            A complete guide to Morocco&apos;s most awe-inspiring landscape. From golden dunes and camel caravans to starlit camps and ancient caravan routes.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Great Sahara Awaits
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                The Sahara is the world&apos;s largest hot desert, stretching across 11 countries and covering an area larger than the United States. Morocco offers the most accessible and well-organized gateway to this extraordinary landscape, with established routes, professional guides, and desert camps ranging from basic bivouacs to five-star glamping experiences.
              </p>
              <p>
                A desert trip is the single most memorable experience you can have in Morocco. There is nothing quite like watching the sun set over an ocean of golden sand dunes, riding a camel along a ridge as the sky turns from orange to purple, sitting around a Berber campfire under a canopy of more stars than you have ever seen, and waking at dawn to see the dunes painted in shades of pink and gold.
              </p>
              <p>
                Morocco&apos;s Sahara experience centers on four main areas: <strong>Merzouga (Erg Chebbi)</strong> for the classic towering-dune experience, <strong>M&apos;Hamid (Erg Chigaga)</strong> for wild, remote wilderness, <strong>Zagora</strong> for shorter accessible trips, and the <strong>Draa Valley</strong> for a scenic journey through palm oases and kasbahs. This guide covers all four in detail, along with everything you need to know about activities, camps, timing, packing, and photography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Desert Destinations - Detailed */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Desert Destinations In Depth
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four distinct gateways to the Sahara, each with its own character, landscape, and level of accessibility.
          </p>
          <div className="space-y-16">
            {desertDestinations.map((dest, index) => (
              <div key={dest.name} id={dest.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4">
                        <span className="tag tag-accent">{dest.tagline}</span>
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                      {dest.name}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{dest.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {dest.highlights.map((h) => (
                        <span key={h} className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-3 py-1 rounded-full border border-[var(--border-light)]">
                          {h}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">
                      <strong className="text-[var(--text-primary)]">Best for:</strong> {dest.bestFor}
                    </p>
                  </div>
                </div>
                {/* Detailed Sub-Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="card-moroccan p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Car className="w-5 h-5 text-[var(--color-primary)]" />
                      <h4 className="font-bold text-[var(--text-primary)]">Getting There</h4>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{dest.detailedGuide.gettingThere}</p>
                  </div>
                  <div className="card-moroccan p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tent className="w-5 h-5 text-[var(--color-primary)]" />
                      <h4 className="font-bold text-[var(--text-primary)]">Camps & Accommodation</h4>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{dest.detailedGuide.camps}</p>
                  </div>
                  <div className="card-moroccan p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Compass className="w-5 h-5 text-[var(--color-primary)]" />
                      <h4 className="font-bold text-[var(--text-primary)]">Activities</h4>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{dest.detailedGuide.activities}</p>
                  </div>
                  <div className="card-moroccan p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Sunrise className="w-5 h-5 text-[var(--color-primary)]" />
                      <h4 className="font-bold text-[var(--text-primary)]">Sunrise & Sunset</h4>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{dest.detailedGuide.sunriseSunset}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Draa Valley Route */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <TreePalm className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            The Draa Valley Route
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A 200 km journey through Morocco&apos;s longest river valley, from Ouarzazate to Zagora. Stop at these key points along the N9 highway.
          </p>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-primary)]/20" />
            <div className="space-y-8">
              {draaValleyStops.map((stop, index) => (
                <div key={stop.name} className="relative pl-16">
                  <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                    <MapPin className="w-3 h-3 text-white" />
                  </div>
                  <div className="card-moroccan p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">{stop.name}</h3>
                      <span className="text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3 py-1 rounded-full">{stop.km}</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{stop.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Types */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Types of Desert Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceTypes.map((exp) => (
              <div key={exp.type} className="card-moroccan p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{exp.type}</h3>
                  <span className="tag tag-primary">{exp.duration}</span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-3">{exp.description}</p>
                <div className="bg-[var(--surface-muted)] rounded-lg p-4 mb-4">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    <strong className="text-[var(--text-primary)]">What to expect:</strong> {exp.whatToExpect}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-[var(--border-light)]">
                  <span className="text-sm font-semibold text-[var(--color-primary)]">
                    <DollarSign className="w-3.5 h-3.5 inline mr-1" />
                    {exp.price}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">Best for: {exp.ideal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overnight Timeline */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Moon className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Overnight in the Desert: What to Expect
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A detailed timeline of the classic one-night desert camp experience, the most popular way to experience the Sahara.
          </p>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/30" />
            <div className="space-y-6">
              {overnightGuide.map((step) => (
                <div key={step.event} className="relative pl-16">
                  <div className="absolute left-2 top-1 w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[var(--color-accent-dark)]" />
                  </div>
                  <div className="card-moroccan p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono font-semibold text-[var(--color-primary)]">{step.time}</span>
                      <h3 className="font-bold text-[var(--text-primary)]">{step.event}</h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Desert Activities */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white text-center mb-12">
            Desert Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <div key={activity.name} className="card-moroccan p-8">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <activity.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{activity.name}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-4">{activity.description}</p>
                <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    <Lightbulb className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                    <strong>Tip:</strong> {activity.practicalTip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Guide */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Desert Photography Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Sahara is one of the most photogenic landscapes on Earth. Here is how to capture it at its best.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photographyGuide.map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{section.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{section.description}</p>
                <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    <Camera className="w-3 h-3 inline mr-1 text-[var(--color-primary)]" />
                    <strong>Pro tip:</strong> {section.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Go */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            When to Visit the Sahara
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing is critical for a desert trip. The difference between the best and worst months is the difference between paradise and genuine danger.
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            {monthlyGuide.map((period) => (
              <div key={period.months} className="card-moroccan p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="sm:w-48 shrink-0">
                    <h3 className="font-bold text-[var(--text-primary)]">{period.months}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Thermometer className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      <span className="text-xs text-[var(--text-muted)]">{period.temp}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 sm:w-28 shrink-0">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < period.rating ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-[var(--border)]'}`} />
                    ))}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{period.verdict}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto mt-8">
            <div className="card-moroccan p-6 border-l-4 border-l-[var(--color-accent)]">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent-dark)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[var(--text-primary)] mb-1">Summer Warning (June-August)</h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Do not visit the desert in summer. Temperatures regularly exceed 50C (122F), sand surface temperatures can reach 70C (158F), and heatstroke is a genuine medical emergency. Most camps close entirely. If your Morocco trip falls in summer, consider the Atlas Mountains or Atlantic coast instead. If you must visit the region, stay in Ouarzazate or Errachidia where air-conditioned accommodation is available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Camp Comparison */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Desert Camps: Standard vs Luxury
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {campComparison.map((camp) => (
              <div key={camp.type} className="card-moroccan overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img src={camp.image} alt={camp.type} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{camp.type}</h3>
                  <p className="text-sm font-semibold text-[var(--color-primary)] mb-4">{camp.price}</p>
                  <ul className="space-y-2 mb-4">
                    {camp.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      <Info className="w-3 h-3 inline mr-1" />
                      {camp.considerations}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing List */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            What to Pack for the Desert
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packingList.map((category) => (
              <div key={category.category} className="card-moroccan p-6">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 mb-3">
                  <Backpack className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-3">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Getting to the Desert
          </h2>
          <div className="space-y-6">
            {[
              {
                from: 'From Marrakech',
                description: 'The most common starting point. To Zagora: 6-7 hours via the spectacular Tizi n\'Tichka mountain pass (2,260m), stopping at Ait Benhaddou. To Merzouga: 9-10 hours via Ouarzazate, Tinghir, and the Todra Gorge. Most travelers break the journey with an overnight stop in Ouarzazate or Dades Valley. To M\'Hamid: 8-9 hours via Ouarzazate and Zagora.',
                options: ['Organized tour (most popular, 800-3,000 MAD)', 'Shared minibus (250-400 MAD)', 'Private driver (1,500-2,500 MAD/day)', 'Rental car (4x4 recommended, 500-800 MAD/day)'],
              },
              {
                from: 'From Fes',
                description: 'A scenic drive through the Middle Atlas cedar forests and past the Ifrane ski resort. To Merzouga: 8-9 hours via Midelt and the Ziz Valley, with its dramatic gorges and palm-filled oases. The route passes through Errachidia, an often-overlooked city with a fascinating desert-edge culture. This is the most direct route to Erg Chebbi.',
                options: ['Organized tour (most popular)', 'Supratours bus to Errachidia + local transfer (200 MAD)', 'Private driver (1,500-2,000 MAD/day)', 'Rental car (Ziz Valley is a highlight)'],
              },
              {
                from: 'From Ouarzazate',
                description: 'Known as the "Door of the Desert" and home to Morocco\'s Hollywood studios. To Merzouga: 5-6 hours via Tinghir and the Dades/Todra Gorges. To Zagora: 2-3 hours south through the Draa Valley. To M\'Hamid: 5-6 hours via Zagora. Ouarzazate makes an excellent base for exploring the region, with its Kasbah Taourirt and Atlas Studios worth a visit.',
                options: ['Local bus CTM/Supratours (80-150 MAD)', 'Grand taxi (negotiable, 150-300 MAD)', 'Rental car (best flexibility)', 'Tour extension from Marrakech'],
              },
            ].map((route) => (
              <div key={route.from} className="card-moroccan p-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <Car className="w-5 h-5 text-[var(--color-primary)]" />
                  {route.from}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{route.description}</p>
                <div className="flex flex-wrap gap-2">
                  {route.options.map((opt) => (
                    <span key={opt} className="tag tag-secondary">{opt}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Desert Safety Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Sahara is beautiful but demands respect. Follow these guidelines for a safe and enjoyable experience.
          </p>
          <div className="space-y-4">
            {safetyTips.map((tip, index) => (
              <div key={index} className="card-moroccan p-6 flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-accent)]/10 shrink-0">
                  <AlertTriangle className="w-4 h-4 text-[var(--color-accent-dark)]" />
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Quick Comparison: Which Desert?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A side-by-side comparison to help you choose the right Sahara destination for your trip.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--border)]">
                  <th className="text-left py-4 px-4 text-[var(--text-primary)] font-bold">Feature</th>
                  <th className="text-left py-4 px-4 text-[var(--text-primary)] font-bold">Erg Chebbi</th>
                  <th className="text-left py-4 px-4 text-[var(--text-primary)] font-bold">Erg Chigaga</th>
                  <th className="text-left py-4 px-4 text-[var(--text-primary)] font-bold">Zagora</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-light)]">
                {[
                  { feature: 'Dune Height', chebbi: 'Up to 150m', chigaga: 'Up to 300m', zagora: 'Up to 30m' },
                  { feature: 'Accessibility', chebbi: 'Paved road to edge', chigaga: '50 km off-road 4x4', zagora: 'Paved road' },
                  { feature: 'From Marrakech', chebbi: '9-10 hours', chigaga: '8-9 hrs + 2 hr 4x4', zagora: '6-7 hours' },
                  { feature: 'Crowd Level', chebbi: 'Moderate-High', chigaga: 'Very Low', zagora: 'Low-Moderate' },
                  { feature: 'Camp Range', chebbi: '100+ camps', chigaga: '~15 camps', zagora: '~30 camps' },
                  { feature: 'Budget Camp', chebbi: '400-800 MAD', chigaga: '600-1,000 MAD', zagora: '400-700 MAD' },
                  { feature: 'Luxury Camp', chebbi: '3,500-8,000 MAD', chigaga: '3,500-6,000 MAD', zagora: 'Limited options' },
                  { feature: 'Best For', chebbi: 'First-timers, photos', chigaga: 'Adventurers, solitude', zagora: 'Short trips, budget' },
                ].map((row) => (
                  <tr key={row.feature}>
                    <td className="py-3 px-4 font-semibold text-[var(--text-primary)]">{row.feature}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{row.chebbi}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{row.chigaga}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{row.zagora}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready for the Sahara?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Browse our curated desert tours or use our trip planner to build your perfect Sahara adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Tent className="w-4 h-4" /> Desert Tours
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
