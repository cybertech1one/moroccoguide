-- ============================================================================
-- MOROCCO GUIDE - SEED DATA
-- Complete tourism encyclopedia for Morocco
-- ============================================================================

-- Clean existing data
TRUNCATE regions, cities, categories, listings, attractions, tours,
         accommodations, restaurants, activities, guides, transport_options,
         events, travel_tips, itineraries, reviews CASCADE;

-- ============================================================================
-- REGIONS (12 regions of Morocco)
-- ============================================================================

INSERT INTO regions (id, name, slug, description, long_description, capital, population, area_sq_km) VALUES
('a0000000-0000-0000-0000-000000000001', 'Marrakech-Safi', 'marrakech-safi', 'Home to the iconic Red City of Marrakech, this region blends ancient medina culture with Atlantic coastal charm in Safi and Essaouira.', 'The Marrakech-Safi region is one of Morocco''s most visited areas, anchored by the legendary city of Marrakech with its bustling Jemaa el-Fnaa square, stunning palaces, and vibrant souks. The region extends westward to the Atlantic coast, encompassing the laid-back surf town of Essaouira and the pottery capital of Safi. From the snow-capped High Atlas mountains to sun-baked plains and rugged coastline, this region offers extraordinary diversity.', 'Marrakech', 4745728, 39167),
('a0000000-0000-0000-0000-000000000002', 'Fes-Meknes', 'fes-meknes', 'The spiritual and intellectual heart of Morocco, featuring the world''s oldest university and the best-preserved medieval city in the Arab world.', 'Fes-Meknes is the cultural soul of Morocco. Fes el-Bali is the largest car-free urban area in the world and home to the University of al-Qarawiyyin, founded in 859 AD. Meknes, a former imperial capital, dazzles with its monumental gates and granaries. The region also includes the Roman ruins of Volubilis, the holy town of Moulay Idriss Zerhoun, and the cedar forests of Ifrane and Azrou.', 'Fes', 4236892, 40075),
('a0000000-0000-0000-0000-000000000003', 'Tanger-Tetouan-Al Hoceima', 'tanger-tetouan-al-hoceima', 'Where the Mediterranean meets the Atlantic, this northern gateway region features cosmopolitan Tangier, the blue pearl of Chefchaouen, and pristine Rif mountain landscapes.', 'Stretching across Morocco''s northern tip, this region is a crossroads of cultures where Europe gazes across the Strait of Gibraltar. Tangier has long attracted artists and writers with its dramatic setting and bohemian energy. Chefchaouen''s blue-washed medina is one of Morocco''s most photographed destinations. The Rif Mountains provide spectacular hiking, while Al Hoceima offers untouched Mediterranean beaches.', 'Tangier', 3556729, 17262),
('a0000000-0000-0000-0000-000000000004', 'Rabat-Sale-Kenitra', 'rabat-sale-kenitra', 'Morocco''s administrative capital region, where modern governance meets ancient Almohad architecture along the Atlantic coast.', 'The Rabat-Sale-Kenitra region is Morocco''s political center. Rabat, the capital, is a UNESCO World Heritage city with the iconic Hassan Tower, the Kasbah of the Udayas, and the modern Mohammed VI Museum of Modern and Contemporary Art. Sale, across the Bou Regreg river, has its own rich history as a corsair republic. Kenitra to the north serves as an important economic hub.', 'Rabat', 4580866, 18194),
('a0000000-0000-0000-0000-000000000005', 'Casablanca-Settat', 'casablanca-settat', 'Morocco''s economic powerhouse and largest metropolis, home to the magnificent Hassan II Mosque and a thriving modern cityscape.', 'Casablanca-Settat is the engine of Morocco''s economy. Casablanca is the largest city in the Maghreb, a bustling metropolis where Art Deco architecture meets modern skyscrapers. The Hassan II Mosque, with its minaret rising 210 meters, is the tallest religious structure in the world. Beyond the city, El Jadida''s Portuguese cistern and Azemmour''s quiet medina offer coastal escapes.', 'Casablanca', 6862000, 19448),
('a0000000-0000-0000-0000-000000000006', 'Beni Mellal-Khenifra', 'beni-mellal-khenifra', 'A lush inland region at the foot of the Middle Atlas, known for cascading waterfalls, olive groves, and the gateway to Ouzoud Falls.', 'Beni Mellal-Khenifra sits at the crossroads of Morocco''s fertile plains and the Middle Atlas mountains. The region is celebrated for the spectacular Ouzoud Falls, the highest in North Africa at 110 meters. Beni Mellal itself is surrounded by olive and orange groves, while Khenifra serves as a gateway to Middle Atlas lakes and cedar forests. The Ain Asserdoun spring and Kasbah Ras el-Ain overlook the city.', 'Beni Mellal', 2520776, 28374),
('a0000000-0000-0000-0000-000000000007', 'Draa-Tafilalet', 'draa-tafilalet', 'The gateway to the Sahara, featuring the spectacular Erg Chebbi dunes of Merzouga, dramatic kasbahs, and the lush Draa Valley oasis.', 'Draa-Tafilalet is Morocco''s most dramatic region, stretching from the rugged Anti-Atlas to the golden sand seas of the Sahara. Errachidia is the regional capital, but the real stars are Merzouga with its towering Erg Chebbi dunes, the UNESCO-listed Ait Ben Haddou kasbah, the film studios of Ouarzazate, and the spectacular Todra and Dades gorges. The Draa Valley, Morocco''s longest river oasis, is lined with date palms and ancient ksour.', 'Errachidia', 1635008, 88836),
('a0000000-0000-0000-0000-000000000008', 'Souss-Massa', 'souss-massa', 'Morocco''s premier beach destination centered on Agadir, with the walled city of Taroudant and the Anti-Atlas mountains as a stunning backdrop.', 'Souss-Massa is synonymous with sunshine, boasting over 300 days of sun per year. Agadir is Morocco''s largest beach resort, rebuilt after the devastating 1960 earthquake. Nearby Taghazout has become a world-class surf destination. Taroudant, often called ''Little Marrakech,'' retains its impressive ramparts and relaxed souks. The Souss-Massa National Park protects endangered bald ibis along the coast.', 'Agadir', 2676847, 51642),
('a0000000-0000-0000-0000-000000000009', 'Guelmim-Oued Noun', 'guelmim-oued-noun', 'The gateway to Morocco''s deep south, where the Anti-Atlas meets the Atlantic and camel markets echo ancient Saharan trade routes.', 'Guelmim-Oued Noun marks the transition between Morocco''s developed north and the vast southern territories. Guelmim has historically been known as the ''Gateway to the Sahara'' and its weekly camel market (souk of camels) is legendary. The coast features dramatic cliffs at Legzira with its famous natural stone arches, and the laid-back fishing village of Sidi Ifni with its Art Deco Spanish colonial architecture.', 'Guelmim', 433757, 46108),
('a0000000-0000-0000-0000-000000000010', 'Laayoune-Sakia El Hamra', 'laayoune-sakia-el-hamra', 'A vast Saharan region with windswept Atlantic coastline, traditional Sahrawi culture, and some of Africa''s best kitesurfing conditions.', 'Laayoune-Sakia El Hamra encompasses much of the Western Sahara territory administered by Morocco. Laayoune is the largest city in the region, with a growing modern infrastructure. The coastline is wild and largely untouched, offering world-class kitesurfing and windsurfing. Traditional Sahrawi culture, with its distinctive tea ceremonies, music, and hospitality, provides a unique cultural experience.', 'Laayoune', 367758, 140018),
('a0000000-0000-0000-0000-000000000011', 'Dakhla-Oued Ed Dahab', 'dakhla-oued-ed-dahab', 'Morocco''s southern frontier on a dramatic peninsula, renowned as one of the world''s top kitesurfing and windsurfing destinations.', 'Dakhla-Oued Ed Dahab is Morocco''s southernmost region, centered on the city of Dakhla which sits on a stunning 40km peninsula jutting into the Atlantic. The lagoon between the peninsula and the mainland creates perfect flat-water conditions for kitesurfing, attracting athletes from around the world. The region also offers exceptional fishing, flamingo-watching, and white sand beaches that stretch endlessly.', 'Dakhla', 142955, 50880),
('a0000000-0000-0000-0000-000000000012', 'Oriental', 'oriental', 'Morocco''s eastern frontier bordering Algeria, with the Mediterranean port of Nador, the cultural capital of Oujda, and diverse landscapes from coast to steppe.', 'The Oriental region stretches from the Mediterranean coast to the high steppe of eastern Morocco. Oujda, near the Algerian border, is the regional capital with a rich musical heritage in Gharnati and Rai traditions. Nador offers access to the pristine Marchica lagoon and Cap des Trois Fourches. The region includes the unique desert oasis of Figuig and the dramatic landscapes of the Beni Snassen mountains.', 'Oujda', 2314346, 82820);

-- ============================================================================
-- CITIES (55 cities with rich descriptions)
-- ============================================================================

INSERT INTO cities (id, name, slug, region_id, description, long_description, population, elevation, climate, best_time_to_visit, latitude, longitude, is_imperial_city, is_coastal, airport_code, tags) VALUES
-- MARRAKECH-SAFI REGION
('c0000000-0000-0000-0000-000000000001', 'Marrakech', 'marrakech', 'a0000000-0000-0000-0000-000000000001',
 'The Red City - Morocco''s most famous destination with its legendary Jemaa el-Fnaa square, opulent palaces, and labyrinthine souks.',
 'Marrakech is a sensory overload in the best possible way. Founded in 1070 by the Almoravids, this imperial city has been Morocco''s cultural capital for nearly a millennium. The medina, a UNESCO World Heritage site, is a maze of narrow alleys opening onto stunning riads, hammams, and monuments. Jemaa el-Fnaa, the main square, transforms from a daytime market into an open-air restaurant and entertainment venue each evening. The Koutoubia Mosque''s 77-meter minaret dominates the skyline. Beyond the walls, the Majorelle Garden and Menara Gardens offer tranquil escapes, while the modern Gueliz district showcases contemporary Moroccan art and cuisine.',
 928850, 466, 'Semi-arid with hot summers (38C+) and mild winters. Very little rainfall.', 'March to May and September to November for pleasant temperatures',
 31.6295, -7.9811, TRUE, FALSE, 'RAK',
 ARRAY['imperial-city', 'unesco', 'medina', 'souks', 'culture', 'food', 'riads', 'nightlife']),

('c0000000-0000-0000-0000-000000000002', 'Essaouira', 'essaouira', 'a0000000-0000-0000-0000-000000000001',
 'The Wind City of Africa - a laid-back Atlantic port town beloved by surfers, artists, and fans of fresh seafood.',
 'Essaouira (formerly Mogador) is one of Morocco''s most charming coastal cities. Its 18th-century medina, designed by French architect Theodore Cornut, is a UNESCO World Heritage site with a distinctive blend of Moroccan and European architecture. The city is famous for its powerful Atlantic trade winds, making it a world-class windsurfing and kitesurfing destination. The vibrant blue fishing port serves some of Morocco''s freshest seafood. Jimi Hendrix visited in 1969, and the city''s bohemian spirit endures through its thriving arts scene and the annual Gnaoua World Music Festival.',
 77966, 10, 'Oceanic climate moderated by Atlantic breezes. Cooler than inland cities even in summer.', 'June to September for the best weather; June for the Gnaoua Festival',
 31.5085, -9.7595, FALSE, TRUE, 'ESU',
 ARRAY['coastal', 'surf', 'art', 'music', 'seafood', 'medina', 'unesco', 'wind']),

('c0000000-0000-0000-0000-000000000003', 'Safi', 'safi', 'a0000000-0000-0000-0000-000000000001',
 'Morocco''s pottery capital and a thriving Atlantic fishing port with a Portuguese-era fortress and artisan traditions.',
 'Safi is renowned throughout Morocco and beyond for its distinctive pottery, produced in the hillside Potters Quarter (Colline des Potiers) where artisans have worked for centuries. The city also boasts a significant sardine fishing industry and a well-preserved Portuguese fortress, the Kechla. The medina retains an authentic feel with far fewer tourists than neighboring cities. Safi''s ceramics, recognizable by their blue, green, and polychrome patterns, are exported worldwide.',
 308508, 50, 'Mediterranean climate with Atlantic influence. Mild year-round.', 'April to October',
 32.2994, -9.2372, FALSE, TRUE, NULL,
 ARRAY['coastal', 'pottery', 'crafts', 'fishing', 'authentic']),

('c0000000-0000-0000-0000-000000000004', 'Oualidia', 'oualidia', 'a0000000-0000-0000-0000-000000000001',
 'A tranquil lagoon village famous for its oyster farms and considered the best beach destination on Morocco''s Atlantic coast.',
 'Oualidia is a hidden gem on Morocco''s Atlantic coast, centered on a stunning crescent-shaped lagoon protected from the open ocean by a sandbar. The village is famous throughout Morocco for its oyster farms, established during the French protectorate era, and visitors come to eat fresh oysters right at the water''s edge. The calm lagoon waters make it perfect for families, while surfers can find waves on the ocean side. The village has a relaxed, upscale atmosphere with excellent gourmet restaurants.',
 10000, 5, 'Mild Atlantic climate with warm summers and cool winters.', 'June to September for swimming; year-round for oysters',
 32.7364, -9.0297, FALSE, TRUE, NULL,
 ARRAY['coastal', 'lagoon', 'oysters', 'beach', 'seafood', 'relaxation']),

-- FES-MEKNES REGION
('c0000000-0000-0000-0000-000000000005', 'Fes', 'fes', 'a0000000-0000-0000-0000-000000000002',
 'The world''s largest car-free urban area and spiritual capital of Morocco, home to the oldest university on Earth.',
 'Fes is Morocco''s most ancient imperial city, founded in 789 AD by Idris I. Fes el-Bali (Old Fes) is the world''s largest car-free urban zone and a UNESCO World Heritage site of extraordinary depth. The medina contains over 9,000 streets and alleys, 300+ mosques, and the University of al-Qarawiyyin, founded in 859 AD and recognized by UNESCO as the world''s oldest continually operating university. The famous Chouara Tannery, where leather has been dyed in stone vats using traditional methods for a thousand years, is one of the city''s most iconic sights. The Bou Inania and Al-Attarine madrasas showcase the pinnacle of Marinid decorative arts.',
 1150131, 410, 'Mediterranean climate with hot, dry summers and cool, wet winters.', 'March to May and September to November',
 34.0181, -5.0078, TRUE, FALSE, 'FEZ',
 ARRAY['imperial-city', 'unesco', 'medina', 'culture', 'crafts', 'tannery', 'university', 'spiritual']),

('c0000000-0000-0000-0000-000000000006', 'Meknes', 'meknes', 'a0000000-0000-0000-0000-000000000002',
 'The Versailles of Morocco - an underrated imperial city with monumental gates, vast granaries, and royal stables built by Sultan Moulay Ismail.',
 'Meknes is often overlooked in favor of Fes and Marrakech, but this imperial city rewards visitors with some of Morocco''s most impressive monuments and a fraction of the crowds. Sultan Moulay Ismail (1672-1727) made Meknes his capital and embarked on a building spree that earned the city its comparison to Versailles. The massive Bab Mansour gate is widely considered the finest in all of North Africa. The Heri es-Souani granary complex and royal stables, designed to house 12,000 horses, are staggering in scale. The medina has excellent restaurants and a relaxed atmosphere.',
 632079, 546, 'Mediterranean with continental influence. Hot summers, cold winters.', 'April to June and September to November',
 33.8935, -5.5547, TRUE, FALSE, NULL,
 ARRAY['imperial-city', 'unesco', 'history', 'monuments', 'authentic', 'relaxed']),

('c0000000-0000-0000-0000-000000000007', 'Ifrane', 'ifrane', 'a0000000-0000-0000-0000-000000000002',
 'The Switzerland of Morocco - a clean mountain resort town with ski slopes, cedar forests, and a famous stone lion.',
 'Ifrane is unlike anywhere else in Morocco. Built by the French in 1929 as an alpine resort, the town features red-roofed chalets, manicured gardens, and tree-lined boulevards that could be mistaken for a Swiss village. At 1,665 meters elevation, Ifrane is one of Morocco''s coldest cities and home to the Michlifen ski resort. The surrounding Middle Atlas cedar forests shelter endangered Barbary macaques. Al Akhawayn University gives the town a youthful energy. Ifrane holds the record for the coldest temperature ever recorded in Africa: -23.9C in 1935.',
 73782, 1665, 'Mountain climate with heavy snowfall in winter and cool summers.', 'December to February for skiing; June to August for hiking',
 33.5228, -5.1109, FALSE, FALSE, NULL,
 ARRAY['mountain', 'skiing', 'nature', 'cedar-forests', 'clean', 'cool']),

('c0000000-0000-0000-0000-000000000008', 'Moulay Idriss Zerhoun', 'moulay-idriss-zerhoun', 'a0000000-0000-0000-0000-000000000002',
 'Morocco''s holiest town, perched on twin hills above the ancient Roman ruins of Volubilis.',
 'Moulay Idriss Zerhoun is the most sacred town in Morocco, built around the tomb of Moulay Idriss I, the founder of Morocco''s first dynasty and great-grandson of Prophet Muhammad. Until 2005, non-Muslims were not permitted to stay overnight. The whitewashed town cascades down two hills (forming a shape locals compare to the Arabic word for Allah) and offers stunning views over olive groves to the Roman ruins of Volubilis below. The Saturday moussem (pilgrimage festival) draws thousands of devotees. In recent years, boutique guesthouses have made it a wonderful base for exploring the region.',
 12000, 540, 'Mediterranean climate, slightly cooler than Meknes due to elevation.', 'April to June and September to October',
 34.0554, -5.5230, FALSE, FALSE, NULL,
 ARRAY['spiritual', 'pilgrimage', 'holy', 'views', 'authentic', 'history']),

('c0000000-0000-0000-0000-000000000009', 'Azrou', 'azrou', 'a0000000-0000-0000-0000-000000000002',
 'A Berber mountain town surrounded by ancient cedar forests, famous for its Barbary macaque population and traditional Tuesday market.',
 'Azrou sits at the heart of the Middle Atlas at 1,250 meters elevation, surrounded by one of the finest cedar forests in the Mediterranean basin. The town is a center of Amazigh (Berber) culture, and its famous Tuesday souk is one of the most vibrant traditional markets in the region. The nearby Cedar Gouraud Forest is home to troops of endangered Barbary macaques who have become accustomed to visitors. Azrou is also known for its stone-carving tradition and cooperative craft workshops.',
 55000, 1250, 'Mountain climate with cold, snowy winters and mild summers.', 'April to October for hiking; winter for snow scenery',
 33.4341, -5.2226, FALSE, FALSE, NULL,
 ARRAY['mountain', 'berber', 'cedar-forests', 'monkeys', 'crafts', 'hiking']),

-- TANGER-TETOUAN-AL HOCEIMA REGION
('c0000000-0000-0000-0000-000000000010', 'Tangier', 'tangier', 'a0000000-0000-0000-0000-000000000003',
 'The gateway between Africa and Europe, a cosmopolitan port city with a legendary artistic heritage and stunning views of the Strait of Gibraltar.',
 'Tangier has long been one of the most mythologized cities in the world. Sitting at the northwestern tip of Africa where the Atlantic meets the Mediterranean, it has attracted everyone from Delacroix and Matisse to the Beat Generation writers -- Paul Bowles, William Burroughs, Jack Kerouac, and Allen Ginsberg all spent significant time here. The Kasbah, perched above the port, contains a museum in a former sultan''s palace. The Caves of Hercules nearby are a natural wonder. Modern Tangier is booming, with the Tanger Med port, a new high-speed rail link to Casablanca, and a vibrant contemporary arts scene.',
 947952, 20, 'Mediterranean climate with oceanic influences. Mild, wet winters and warm summers.', 'May to October for beach weather; year-round for sightseeing',
 35.7595, -5.8340, FALSE, TRUE, 'TNG',
 ARRAY['coastal', 'culture', 'art', 'history', 'gateway', 'cosmopolitan', 'nightlife']),

('c0000000-0000-0000-0000-000000000011', 'Chefchaouen', 'chefchaouen', 'a0000000-0000-0000-0000-000000000003',
 'The Blue Pearl of Morocco - a dreamy mountain town where every building is painted in shades of blue, nestled in the Rif Mountains.',
 'Chefchaouen (often shortened to Chaouen) is one of the most visually striking towns on Earth. Founded in 1471 as a fortress against Portuguese invasions, its medina was painted blue by Jewish refugees in the 1930s -- some say to symbolize the sky and heaven, others to repel mosquitoes. Whatever the origin, the result is enchanting: every wall, doorway, staircase, and planter cascades in shades of blue from powder to cobalt to indigo. The town sits at 564 meters in the Rif Mountains, with excellent hiking trails to the Spanish Mosque viewpoint and Akchour waterfalls. It is also a center for woven blankets and goat cheese.',
 42786, 564, 'Mountain Mediterranean climate. Cool winters with occasional snow; warm, dry summers.', 'April to June and September to November',
 35.1688, -5.2636, FALSE, FALSE, NULL,
 ARRAY['blue', 'mountain', 'photography', 'hiking', 'medina', 'crafts', 'instagrammable']),

('c0000000-0000-0000-0000-000000000012', 'Tetouan', 'tetouan', 'a0000000-0000-0000-0000-000000000003',
 'The White Dove - a UNESCO-listed Andalusian medina with strong Spanish influences and a thriving arts tradition.',
 'Tetouan''s medina is one of the smallest but most authentic in Morocco, earning UNESCO World Heritage status for its unique blend of Moroccan and Andalusian architecture. The city was heavily settled by Muslims and Jews expelled from Spain, and their architectural influence is visible in the whitewashed buildings, tiled courtyards, and wrought-iron balconies. The Ethnographic Museum and School of Arts and Crafts are excellent. The nearby Martil and Mdiq beaches draw summer crowds from across Morocco.',
 380787, 10, 'Mediterranean climate with mild, wet winters and hot summers.', 'May to September for beaches; spring and fall for the medina',
 35.5889, -5.3626, FALSE, TRUE, NULL,
 ARRAY['unesco', 'medina', 'andalusian', 'art', 'coastal', 'authentic']),

('c0000000-0000-0000-0000-000000000013', 'Al Hoceima', 'al-hoceima', 'a0000000-0000-0000-0000-000000000003',
 'A pristine Mediterranean beach town surrounded by the dramatic Rif Mountains and the Al Hoceima National Park.',
 'Al Hoceima is one of Morocco''s best-kept secrets for beach lovers. Set on a dramatic bay rimmed by the Rif Mountains, the town offers crystal-clear Mediterranean waters, uncrowded beaches like Quemado and Cala Iris, and excellent seafood. The Al Hoceima National Park protects a remarkable stretch of coastline with marine biodiversity including dolphins and ospreys. The town has a distinct Riffian Berber identity and a relaxed, unhurried pace that feels worlds away from Morocco''s bustling imperial cities.',
 395644, 19, 'Mediterranean climate. Warm, dry summers and mild winters.', 'June to September for beaches',
 35.2517, -3.9372, FALSE, TRUE, 'AHU',
 ARRAY['coastal', 'beach', 'nature', 'rif', 'berber', 'relaxation', 'diving']),

('c0000000-0000-0000-0000-000000000014', 'Asilah', 'asilah', 'a0000000-0000-0000-0000-000000000003',
 'A whitewashed Atlantic artists'' town with colorful murals, Portuguese ramparts, and a famous annual arts festival.',
 'Asilah is a small, exceptionally photogenic coastal town south of Tangier. Its well-preserved medina, enclosed by 15th-century Portuguese ramparts, is painted brilliant white and adorned with vibrant murals created during the annual Asilah Arts Festival (Moussem), one of the oldest cultural festivals in Africa. The town has a gentle, artistic atmosphere with excellent galleries, boutique guesthouses, and seafood restaurants. Paradise Beach to the south offers long stretches of golden sand.',
 31147, 10, 'Oceanic climate moderated by the Atlantic. Mild year-round.', 'July to August for the festival; May to October for beaches',
 35.4653, -6.0340, FALSE, TRUE, NULL,
 ARRAY['coastal', 'art', 'murals', 'festival', 'medina', 'portuguese', 'photography']),

('c0000000-0000-0000-0000-000000000015', 'Larache', 'larache', 'a0000000-0000-0000-0000-000000000003',
 'A tranquil Atlantic port with Spanish colonial architecture and proximity to the ancient ruins of Lixus.',
 'Larache is an atmospheric port town at the mouth of the Loukkos River. Its Spanish colonial architecture, dating from the early 20th century, gives it a distinctive character. The town overlooks the Atlantic from a clifftop kasbah and has a wonderful fish market. Nearby Lixus is an ancient Phoenician, Roman, and Berber archaeological site with stunning views over the river and ocean. Jean Genet, the French writer, is buried in the old Spanish cemetery here at his own request.',
 125008, 15, 'Oceanic Mediterranean climate. Mild and humid.', 'May to October',
 35.1932, -6.1561, FALSE, TRUE, NULL,
 ARRAY['coastal', 'spanish-colonial', 'ruins', 'authentic', 'fishing']),

-- RABAT-SALE-KENITRA REGION
('c0000000-0000-0000-0000-000000000016', 'Rabat', 'rabat', 'a0000000-0000-0000-0000-000000000004',
 'Morocco''s elegant capital city, a UNESCO World Heritage site blending Almohad grandeur with French colonial urbanism and contemporary culture.',
 'Rabat is perhaps Morocco''s most underrated city. As the political capital since 1912, it combines rich history with a cosmopolitan, orderly atmosphere that many visitors find refreshing after the intensity of Marrakech or Fes. The Hassan Tower, an unfinished 12th-century minaret, and the adjacent Mohammed V Mausoleum are the city''s most iconic landmarks. The Kasbah of the Udayas, perched above the Bou Regreg river, is a whitewashed gem with Andalusian gardens. The Mohammed VI Museum of Modern and Contemporary Art is world-class. The medina is manageable and hassle-free, and the Ville Nouvelle boasts excellent restaurants and tree-lined boulevards.',
 577827, 75, 'Oceanic Mediterranean climate. Mild and pleasant year-round.', 'March to November, with spring being ideal',
 34.0209, -6.8416, TRUE, TRUE, 'RBA',
 ARRAY['imperial-city', 'capital', 'unesco', 'culture', 'art', 'coastal', 'elegant']),

('c0000000-0000-0000-0000-000000000017', 'Sale', 'sale', 'a0000000-0000-0000-0000-000000000004',
 'Rabat''s twin city across the Bou Regreg river, with a rich corsair history, traditional medina, and the annual wax candle procession.',
 'Sale (Sala), directly across the Bou Regreg from Rabat, was once home to the notorious Sale Rovers -- a Barbary corsair republic that terrorized European shipping in the 17th century. Robinson Crusoe was famously held captive here in Defoe''s novel. Today, Sale''s medina retains an authentic charm with its souks, the Grand Mosque, and the Medersa dating to the Marinid period. The annual procession of wax candles (Moussem des Cires) is one of Morocco''s most unique religious celebrations.',
 890403, 24, 'Oceanic Mediterranean climate, identical to Rabat.', 'April to October',
 34.0531, -6.7986, FALSE, TRUE, NULL,
 ARRAY['coastal', 'history', 'corsair', 'medina', 'authentic', 'crafts']),

('c0000000-0000-0000-0000-000000000018', 'Kenitra', 'kenitra', 'a0000000-0000-0000-0000-000000000004',
 'A growing economic hub on the Sebou River with the nearby resort beach of Mehdia and one of Morocco''s best surf breaks.',
 'Kenitra is one of Morocco''s fastest-growing industrial cities, with a major Atlantic Free Zone and automotive manufacturing hub. While not a traditional tourist destination, the nearby beach of Mehdia offers excellent surfing and a historic kasbah. The city sits on the banks of the Sebou, Morocco''s largest river, and serves as a gateway to the Mamora cork oak forest, one of the largest in the world.',
 431282, 20, 'Oceanic climate with mild temperatures year-round.', 'May to September for beach activities',
 34.2610, -6.5802, FALSE, TRUE, NULL,
 ARRAY['modern', 'industry', 'surf', 'beach']),

-- CASABLANCA-SETTAT REGION
('c0000000-0000-0000-0000-000000000019', 'Casablanca', 'casablanca', 'a0000000-0000-0000-0000-000000000005',
 'Morocco''s largest city and economic capital, home to the world''s tallest mosque minaret and a stunning Art Deco architectural heritage.',
 'Casablanca is Morocco''s cosmopolitan megalopolis -- a city of over 4 million people that serves as the economic engine of the nation. The Hassan II Mosque, built on a promontory over the Atlantic, is the third largest mosque in the world and the only one in Morocco open to non-Muslim visitors. Its 210-meter minaret, the world''s tallest religious structure, shoots a laser beam toward Mecca. Beyond the mosque, Casablanca rewards exploration with one of the world''s finest collections of Art Deco architecture, the atmospheric old medina, Rick''s Cafe (recreating the film set), the Morocco Mall, and a booming contemporary dining and nightlife scene in the Corniche and Gauthier districts.',
 3359818, 27, 'Mediterranean oceanic climate. Mild and humid year-round.', 'March to November; summers can be foggy',
 33.5731, -7.5898, FALSE, TRUE, 'CMN',
 ARRAY['coastal', 'modern', 'art-deco', 'mosque', 'business', 'nightlife', 'shopping']),

('c0000000-0000-0000-0000-000000000020', 'El Jadida', 'el-jadida', 'a0000000-0000-0000-0000-000000000005',
 'A charming Atlantic coastal city with a UNESCO-listed Portuguese fortress, a stunning underground cistern, and family-friendly beaches.',
 'El Jadida (formerly Mazagan) is centered on a remarkable Portuguese-built fortified city (Cite Portugaise) that has been a UNESCO World Heritage site since 2004. The highlight is the underground Portuguese Cistern, a hauntingly beautiful vaulted space reflected in shallow water that was featured in Orson Welles'' Othello. The modern city has excellent beaches, a lively corniche, and hosts the annual Salon du Cheval, one of the largest horse shows in the Arab world. The nearby Sidi Bouzid beach is a popular resort area.',
 194934, 15, 'Oceanic climate. Mild year-round with Atlantic breezes.', 'May to October for beaches; year-round for the Portuguese city',
 33.2549, -8.5008, FALSE, TRUE, NULL,
 ARRAY['coastal', 'unesco', 'portuguese', 'beach', 'history', 'cistern']),

('c0000000-0000-0000-0000-000000000021', 'Azemmour', 'azemmour', 'a0000000-0000-0000-0000-000000000005',
 'A quiet river-mouth town with Portuguese walls, a fascinating medina of street art, and some of Morocco''s best surfing at Haouzia beach.',
 'Azemmour is one of Morocco''s hidden treasures. This small town at the mouth of the Oum er-Rbia river has Portuguese-era ramparts, a captivating medina adorned with contemporary street art murals, and a deeply authentic atmosphere largely free of tourism. Nearby Haouzia (El Haouzia) beach is considered one of the best surf spots on Morocco''s Atlantic coast. The town is said to be the birthplace of Estevanico, the first African to explore what is now the American Southwest.',
 40000, 10, 'Oceanic climate. Mild year-round.', 'April to October',
 33.2883, -8.3425, FALSE, TRUE, NULL,
 ARRAY['coastal', 'street-art', 'surf', 'authentic', 'hidden-gem', 'portuguese']),

('c0000000-0000-0000-0000-000000000022', 'Settat', 'settat', 'a0000000-0000-0000-0000-000000000005',
 'An agricultural hub in the Chaouia plains, known for its role in Morocco''s breadbasket and the nearby Kasbah Boulaouane.',
 'Settat is the capital of the Chaouia-Ouardigha agricultural region, Morocco''s most important grain-producing area. While not a major tourist destination, the city serves as a base for visiting the impressive Kasbah Boulaouane, a hilltop fortress overlooking a bend in the Oum er-Rbia river. The city has a growing university and modern infrastructure.',
 142250, 367, 'Semi-arid with hot summers and mild winters.', 'Spring and autumn',
 33.0011, -7.6166, FALSE, FALSE, NULL,
 ARRAY['agriculture', 'kasbah', 'authentic']),

-- BENI MELLAL-KHENIFRA REGION
('c0000000-0000-0000-0000-000000000023', 'Beni Mellal', 'beni-mellal', 'a0000000-0000-0000-0000-000000000006',
 'A green city at the foot of the Atlas Mountains, gateway to the spectacular Ouzoud Falls and the Ain Asserdoun spring.',
 'Beni Mellal sits in one of Morocco''s most fertile regions, surrounded by olive groves and orange orchards at the foot of the Middle Atlas. The city is dominated by the hillside Kasbah Ras el-Ain and the beautiful Ain Asserdoun spring, which feeds terraced gardens descending the slope. The main draw for visitors is the spectacular Cascades d''Ouzoud, located about 150km northeast, where water plunges 110 meters in a series of cascades surrounded by Barbary macaques and lush vegetation. The region also offers excellent hiking and rock climbing.',
 163248, 520, 'Semi-arid continental climate. Hot summers, mild winters.', 'March to May for waterfall at peak flow; year-round',
 32.3373, -6.3498, FALSE, FALSE, NULL,
 ARRAY['nature', 'waterfalls', 'hiking', 'mountain', 'olives', 'springs']),

('c0000000-0000-0000-0000-000000000024', 'Khouribga', 'khouribga', 'a0000000-0000-0000-0000-000000000006',
 'The phosphate capital of Morocco, an important mining city in the heart of the plateau region.',
 'Khouribga is the center of Morocco''s massive phosphate mining industry -- Morocco holds over 70% of the world''s phosphate reserves. The OCP Museum (Office Cherifien des Phosphates) documents this important industry. While primarily an industrial city, Khouribga has parks, a growing cultural scene, and serves as a base for exploring the surrounding plateau landscapes.',
 196196, 800, 'Semi-arid with hot summers and cool winters.', 'Spring and autumn',
 32.8811, -6.9063, FALSE, FALSE, NULL,
 ARRAY['industry', 'mining', 'phosphate']),

-- DRAA-TAFILALET REGION
('c0000000-0000-0000-0000-000000000025', 'Ouarzazate', 'ouarzazate', 'a0000000-0000-0000-0000-000000000007',
 'The Hollywood of Morocco - a desert gateway city between the Atlas Mountains and the Sahara, home to the Atlas Film Studios.',
 'Ouarzazate (pronounced war-za-zat) sits at the crossroads of the High Atlas and the Saharan south, earning its nickname as the door to the desert. The city is most famous for the Atlas Film Studios, the largest in the world outside Hollywood, where blockbusters like Gladiator, Lawrence of Arabia, Game of Thrones, and Kingdom of Heaven were filmed. The nearby Taourirt Kasbah is one of the most photogenic in Morocco. Ouarzazate serves as the starting point for excursions to Ait Ben Haddou, the Draa Valley, and the Dades and Todra Gorges.',
 71067, 1160, 'Desert climate with very hot summers, cold winters, and minimal rainfall.', 'March to May and September to November',
 30.9189, -6.8936, FALSE, FALSE, 'OZZ',
 ARRAY['desert', 'film-studios', 'kasbah', 'gateway', 'hollywood']),

('c0000000-0000-0000-0000-000000000026', 'Merzouga', 'merzouga', 'a0000000-0000-0000-0000-000000000007',
 'The gateway to Erg Chebbi - Morocco''s most spectacular sand dunes rising up to 150 meters at the edge of the Sahara.',
 'Merzouga is a small Saharan village on the edge of Erg Chebbi, Morocco''s largest and most accessible sand sea. The dunes stretch 22km from north to south and reach heights of 150 meters, creating an otherworldly landscape of golden, orange, and even pink sand depending on the light. Visitors come for camel treks to desert camps, sandboarding, 4x4 excursions, and the unforgettable experience of sleeping under the stars in a luxury or traditional Berber bivouac. The nearby seasonal lake Dayet Srji attracts flamingos. The Gnaoua village of Khamlia preserves unique Sub-Saharan musical traditions.',
 3000, 700, 'Hot desert climate. Extreme heat in summer (50C+), cold winter nights.', 'October to April; avoid summer heat',
 31.0801, -4.0133, FALSE, FALSE, NULL,
 ARRAY['desert', 'sahara', 'dunes', 'camel-trek', 'camping', 'stars', 'adventure']),

('c0000000-0000-0000-0000-000000000027', 'Errachidia', 'errachidia', 'a0000000-0000-0000-0000-000000000007',
 'The administrative capital of Draa-Tafilalet, a garrison town serving as a hub for exploring the Ziz Valley and Tafilalet oasis.',
 'Errachidia (formerly Ksar es-Souk) is a modern administrative city that serves as the gateway to the Ziz Valley, one of Morocco''s most dramatic palm-lined river valleys. The Source Bleue de Meski, a natural spring-fed oasis just south of town, is a popular swimming spot. The Ziz Gorges, carved through red rock, are spectacular when approached from the north. Errachidia has a large military base and university, giving it a more modern feel than surrounding desert towns.',
 92374, 1051, 'Hot semi-arid climate with extreme temperature variation.', 'October to April',
 31.9314, -4.4266, FALSE, FALSE, 'ERH',
 ARRAY['gateway', 'desert', 'oasis', 'ziz-valley', 'gorges']),

('c0000000-0000-0000-0000-000000000028', 'Ait Ben Haddou', 'ait-ben-haddou', 'a0000000-0000-0000-0000-000000000007',
 'A UNESCO World Heritage ksar (fortified village) of stunning earthen architecture, one of the most photographed places in all of Morocco.',
 'Ait Ben Haddou is a picture-perfect ksar (fortified village) rising above the Ounila River valley. Its tightly packed earthen buildings, decorated with geometric Berber patterns and crowned by a granary at the summit, represent the finest example of southern Moroccan earthen architecture. The site has been a UNESCO World Heritage site since 1987. Its photogenic quality has made it a favorite filming location -- it has appeared in Lawrence of Arabia, Gladiator, Game of Thrones, and many more productions. A handful of families still live within the ksar walls, maintaining a living connection to this ancient way of building.',
 2500, 1300, 'Semi-arid desert climate. Hot days, cool nights.', 'March to May and September to November',
 31.0470, -7.1299, FALSE, FALSE, NULL,
 ARRAY['unesco', 'kasbah', 'film-location', 'architecture', 'photography', 'history']),

('c0000000-0000-0000-0000-000000000029', 'Tinghir', 'tinghir', 'a0000000-0000-0000-0000-000000000007',
 'A palm oasis town at the entrance to the spectacular Todra Gorge, with a well-preserved Jewish quarter and silver jewelry tradition.',
 'Tinghir (also Tinerhir) is a large oasis town in the Todra Valley, best known as the gateway to the Todra Gorge, where 300-meter limestone walls narrow to just 10 meters apart. The town itself has an impressive palmery extending along the valley, a crumbling but atmospheric old mellah (Jewish quarter), and a tradition of silver Berber jewelry. The surrounding area offers excellent hiking and rock climbing, with routes in the gorge attracting climbers from around the world.',
 42044, 1342, 'Semi-arid desert climate. Hot summers, cold winters.', 'March to May and September to November',
 31.5147, -5.5327, FALSE, FALSE, NULL,
 ARRAY['gorge', 'oasis', 'climbing', 'hiking', 'jewelry', 'palmery']),

('c0000000-0000-0000-0000-000000000030', 'Zagora', 'zagora', 'a0000000-0000-0000-0000-000000000007',
 'The famous sign says "Timbuktu 52 Days" - a Draa Valley oasis town that was once the starting point of trans-Saharan caravans.',
 'Zagora sits in the heart of the Draa Valley, Morocco''s longest river oasis. The iconic road sign reading "Tombouctou 52 Jours" (by camel caravan) captures the town''s history as a departure point for trans-Saharan trade. Today, Zagora is a gateway to the smaller but beautiful Erg Chigaga dunes and the surrounding desert. The Wednesday souk draws people from across the valley. The nearby Tamegroute village houses an ancient library of Islamic manuscripts and a distinctive green pottery tradition.',
 35085, 720, 'Hot desert climate. Scorching summers, mild winters.', 'October to April',
 30.3286, -5.8381, FALSE, FALSE, NULL,
 ARRAY['desert', 'draa-valley', 'oasis', 'camel-trek', 'history', 'timbuktu']),

('c0000000-0000-0000-0000-000000000031', 'Midelt', 'midelt', 'a0000000-0000-0000-0000-000000000007',
 'The apple capital of Morocco, a mountain town between the Middle and High Atlas with excellent mineral specimens and hiking.',
 'Midelt sits at 1,508 meters between the Middle and High Atlas mountain ranges, surrounded by apple orchards that supply much of Morocco''s production. The town is known for its mineral and fossil shops, as the surrounding region is rich in vanadinite, azurite, and other minerals. The Cirque de Jaffar, a dramatic mountain amphitheater, is one of the most scenic drives in Morocco. The Kasbah Myriem, now a workshop run by Franciscan nuns, produces beautiful embroidered goods.',
 55304, 1508, 'Continental mountain climate. Cold winters with snow; warm summers.', 'April to October',
 32.6798, -4.7330, FALSE, FALSE, NULL,
 ARRAY['mountain', 'apples', 'minerals', 'fossils', 'hiking', 'atlas']),

-- SOUSS-MASSA REGION
('c0000000-0000-0000-0000-000000000032', 'Agadir', 'agadir', 'a0000000-0000-0000-0000-000000000008',
 'Morocco''s premier beach resort city with 300+ days of sunshine, rebuilt after a devastating earthquake in 1960.',
 'Agadir is Morocco''s largest beach resort, stretching along a magnificent 10km crescent of golden sand on the Atlantic coast. The city was almost entirely destroyed by a catastrophic earthquake on February 29, 1960, which killed over 15,000 people in just 15 seconds. Rebuilt in a modern style, Agadir lacks the historic medina character of other Moroccan cities but compensates with excellent beach infrastructure, a bustling marina, the Souk El Had market (one of the largest in North Africa with 6,000+ shops), and the ruins of the hilltop Kasbah (Agadir Oufella) with panoramic views. The Vallee des Oiseaux (Bird Valley) park and the Amazigh Heritage Museum add cultural depth.',
 421844, 30, 'Semi-arid subtropical climate. Over 300 days of sunshine. Rarely exceeds 30C.', 'Year-round; the eternal spring of Morocco',
 30.4278, -9.5981, FALSE, TRUE, 'AGA',
 ARRAY['coastal', 'beach', 'resort', 'sunshine', 'modern', 'surfing', 'relaxation']),

('c0000000-0000-0000-0000-000000000033', 'Taroudant', 'taroudant', 'a0000000-0000-0000-0000-000000000008',
 'Little Marrakech - a walled market town with intact ramparts, vibrant souks, and a laid-back atmosphere at the foot of the High Atlas.',
 'Taroudant is often called ''Little Marrakech'' for its impressive 7.5km circuit of red-earth ramparts, but it has a character entirely its own -- less hectic, more intimate, and thoroughly Amazigh. The twin souks (Arab Souk and Berber Souk) are excellent for leather goods, spices, and Berber jewelry without the hard sell of larger cities. The town is surrounded by citrus and olive groves backed by the snow-capped peaks of the High Atlas and Jebel Sirwa. It is an excellent base for treks into the western High Atlas and visits to the Tioute palm oasis.',
 80149, 230, 'Semi-arid with hot summers and mild winters. Sheltered by mountains.', 'October to May',
 30.4727, -8.8748, FALSE, FALSE, NULL,
 ARRAY['ramparts', 'souks', 'berber', 'atlas', 'authentic', 'relaxed']),

('c0000000-0000-0000-0000-000000000034', 'Taghazout', 'taghazout', 'a0000000-0000-0000-0000-000000000008',
 'Morocco''s surf capital - a once-sleepy fishing village transformed into a world-class surfing destination with yoga retreats and beachfront cafes.',
 'Taghazout has exploded onto the global surf scene over the past two decades. This small village 20km north of Agadir was once a stop on the 1960s hippie trail and has maintained its laid-back vibe even as it has grown into Morocco''s premier surf destination. Anchor Point, Killer Point, and Hash Point are among the famous breaks. Beyond surfing, the village offers yoga retreats, great seafood cafes, and access to Paradise Valley, a stunning palm-lined gorge with natural swimming pools. The new Taghazout Bay resort development has added luxury options while the village retains its bohemian character.',
 6000, 10, 'Subtropical semi-arid. Warm and sunny year-round.', 'September to April for best surf; year-round',
 30.5425, -9.7141, FALSE, TRUE, NULL,
 ARRAY['surf', 'coastal', 'yoga', 'beach', 'bohemian', 'paradise-valley']),

('c0000000-0000-0000-0000-000000000035', 'Tiznit', 'tiznit', 'a0000000-0000-0000-0000-000000000008',
 'The silver jewelry capital of Morocco, a walled town known for its skilled silversmiths and gateway to the Anti-Atlas coast.',
 'Tiznit is a relatively young Moroccan city -- its walls were built only in 1882 by Sultan Hassan I -- but it has become the undisputed center of Berber silver jewelry craftsmanship. The Souk des Bijoutiers (Jewelers'' Market) is filled with workshops where artisans create intricate fibulae (brooches), bracelets, and rings using techniques passed down for generations. The town also serves as a gateway to the stunning Anti-Atlas coastal villages of Mirleft, Sidi Ifni, and Legzira.',
 74699, 240, 'Semi-arid with Atlantic influence. Warm and dry.', 'October to May',
 29.6974, -9.7996, FALSE, FALSE, NULL,
 ARRAY['silver', 'jewelry', 'crafts', 'berber', 'gateway', 'ramparts']),

-- GUELMIM-OUED NOUN REGION
('c0000000-0000-0000-0000-000000000036', 'Sidi Ifni', 'sidi-ifni', 'a0000000-0000-0000-0000-000000000009',
 'A former Spanish enclave with faded Art Deco charm, dramatic cliffs, and a laid-back coastal atmosphere on Morocco''s southern Atlantic coast.',
 'Sidi Ifni was the last piece of Moroccan territory returned by Spain in 1969, and its Art Deco and Streamline Moderne architecture from the 1930s-1950s lends it a unique, slightly melancholy charm. The town perches on cliffs above the Atlantic with a striking former airstrip, old consulate, and church that have been repurposed for Moroccan life. Sunday mornings bring a fantastic souk. The coastline south toward Legzira is among the most dramatic in Morocco, with towering red stone arches over the beach.',
 20000, 40, 'Desert oceanic climate. Foggy mornings, warm afternoons, very little rain.', 'Year-round; spring and autumn are ideal',
 29.3797, -10.1727, FALSE, TRUE, NULL,
 ARRAY['coastal', 'art-deco', 'spanish-colonial', 'cliffs', 'authentic', 'relaxation']),

('c0000000-0000-0000-0000-000000000037', 'Guelmim', 'guelmim', 'a0000000-0000-0000-0000-000000000009',
 'The Gateway to the Sahara, famous for its historic camel market and blue-robed Sahrawi traders.',
 'Guelmim has been called the Gateway to the Sahara for centuries, serving as the last major settlement before the vast desert to the south. The town''s Saturday camel souk, though less significant than in its caravan-trade heyday, remains a colorful spectacle where blue-robed Sahrawi and Tuareg traders gather. Guelmim is also known for its guedra dance, a traditional Sahrawi trance dance performed by women. The nearby Plage Blanche (White Beach) is a 40km stretch of pristine, nearly deserted Atlantic coastline.',
 118318, 284, 'Hot semi-arid climate. Very warm summers, mild winters.', 'October to April',
 28.9836, -10.0572, FALSE, FALSE, NULL,
 ARRAY['desert', 'camel-market', 'gateway', 'sahara', 'sahrawi', 'authentic']),

('c0000000-0000-0000-0000-000000000038', 'Mirleft', 'mirleft', 'a0000000-0000-0000-0000-000000000009',
 'A laid-back beach village on dramatic cliffs, beloved by surfers and those seeking Morocco''s most beautiful unspoiled coastline.',
 'Mirleft is a tiny village perched above some of Morocco''s most spectacular beaches. Dramatic rocky headlands separate a series of sandy coves, each with its own character and surf break. The village itself is wonderfully unpretentious, with a handful of guesthouses, surf camps, and restaurants. French colonial ruins dot the clifftops, and the surrounding countryside of argan trees and goatherds feels timeless. Many visitors who come for a night end up staying a week.',
 5000, 50, 'Desert oceanic climate. Warm and sunny with coastal fog.', 'Year-round; best waves October to March',
 29.5800, -10.0427, FALSE, TRUE, NULL,
 ARRAY['coastal', 'surf', 'beach', 'hidden-gem', 'relaxation', 'cliffs']),

('c0000000-0000-0000-0000-000000000039', 'Legzira', 'legzira', 'a0000000-0000-0000-0000-000000000009',
 'Home to Morocco''s most famous natural stone arches, a dramatic red-rock beach that has become an iconic photography destination.',
 'Legzira Beach is one of the most visually stunning spots on Morocco''s entire coastline. Towering natural stone arches carved from red sandstone cliffs frame the beach -- though one of the two most famous arches collapsed in 2016, the remaining arch and the surrounding cliffscapes remain breathtaking. The beach stretches for kilometers with virtually no development, backed by red cliffs that glow intensely at sunset. Swimming can be dangerous due to strong currents, but the visual spectacle is unmatched.',
 500, 10, 'Desert oceanic climate. Warm and dry.', 'Year-round; sunset is the most magical time',
 29.4336, -10.1163, FALSE, TRUE, NULL,
 ARRAY['coastal', 'beach', 'arches', 'photography', 'natural-wonder', 'sunset']),

-- LAAYOUNE-SAKIA EL HAMRA REGION
('c0000000-0000-0000-0000-000000000040', 'Laayoune', 'laayoune', 'a0000000-0000-0000-0000-000000000010',
 'The largest city in Morocco''s southern provinces, a growing desert city with Sahrawi culture and access to wild Atlantic coastline.',
 'Laayoune (also El Aaiun) is the main city of Morocco''s southern provinces in the Western Sahara territory. The city has grown significantly with Moroccan investment and features modern infrastructure, a large mosque, and parks including the striking Colline aux Oiseaux (Bird Hill). The Place du Mechouar serves as the city center. Sahrawi culture is dominant, with traditional tea ceremonies, music, and the distinctive blue melhfa garment. The coast near Laayoune has excellent fishing and birding at the Naila lagoon.',
 217732, 75, 'Hot desert climate moderated by Atlantic proximity. Very little rain.', 'October to April',
 27.1536, -13.2034, FALSE, FALSE, 'EUN',
 ARRAY['desert', 'sahrawi', 'modern', 'southern-provinces']),

-- DAKHLA-OUED ED DAHAB REGION
('c0000000-0000-0000-0000-000000000041', 'Dakhla', 'dakhla', 'a0000000-0000-0000-0000-000000000011',
 'A kitesurfing paradise on a 40km Atlantic peninsula, with a stunning lagoon, white sand beaches, and world-class wind conditions.',
 'Dakhla is one of the most remarkable destinations in Africa. Sitting on a narrow peninsula that extends 40km into the Atlantic Ocean, the city overlooks a vast shallow lagoon with perfectly flat, warm water and consistent winds -- conditions that have made it one of the world''s top kitesurfing and windsurfing destinations. Professional riders come from across the globe for speed records and freestyle training. Beyond water sports, Dakhla offers excellent fishing (the waters teem with sea bass, corvina, and bream), flamingo-watching in the lagoon, and visits to the oyster farms. White sand beaches and the Saharan desert landscape complete the picture. The city itself has a growing culinary scene with exceptional fresh seafood.',
 106277, 12, 'Hot desert climate with constant Atlantic winds. Warm year-round.', 'Year-round; February to November for kitesurfing',
 23.6848, -15.9580, FALSE, TRUE, NULL,
 ARRAY['coastal', 'kitesurfing', 'windsurfing', 'lagoon', 'desert', 'fishing', 'adventure']),

-- ORIENTAL REGION
('c0000000-0000-0000-0000-000000000042', 'Oujda', 'oujda', 'a0000000-0000-0000-0000-000000000012',
 'Morocco''s eastern capital near the Algerian border, a city of music, gardens, and centuries of crossroads culture.',
 'Oujda is Morocco''s easternmost major city, sitting just 15km from the Algerian border. Founded in 994 AD, it has a long history as a cultural crossroads. The city is famous for its musical traditions, particularly Gharnati (Andalusian) and Rai music. The medina, centered on the Place El Attarine, has a distinctly eastern Moroccan character. Lalla Setti park and its surrounding gardens offer green respite. Oujda''s cuisine, influenced by both Algerian and Moroccan traditions, features distinctive specialties like berkoukes and rfissa.',
 494252, 470, 'Semi-arid Mediterranean with continental influence. Hot summers, cold winters.', 'March to May and September to November',
 34.6814, -1.9086, FALSE, FALSE, 'OUD',
 ARRAY['music', 'culture', 'eastern', 'border', 'gardens', 'cuisine']),

('c0000000-0000-0000-0000-000000000043', 'Nador', 'nador', 'a0000000-0000-0000-0000-000000000012',
 'A Mediterranean port city with the spectacular Marchica lagoon and access to the dramatic Cap des Trois Fourches peninsula.',
 'Nador sits on the shore of the Marchica (Mar Chica) lagoon, a 25km Mediterranean lagoon that has been the focus of a major eco-tourism development project. The city is a commercial hub and ferry port with connections to Spain. Nearby attractions include the Cap des Trois Fourches, a wild and dramatic volcanic peninsula, and the Gurugu mountains. The city has a strong Riffian Berber identity and is growing rapidly.',
 161726, 10, 'Mediterranean climate. Hot, dry summers and mild, wet winters.', 'May to October',
 35.1744, -2.9287, FALSE, TRUE, 'NDR',
 ARRAY['coastal', 'lagoon', 'mediterranean', 'rif', 'berber']),

('c0000000-0000-0000-0000-000000000044', 'Taza', 'taza', 'a0000000-0000-0000-0000-000000000002',
 'A historic fortress city guarding the Taza Gap, with a fascinating old medina and access to the Tazzeka National Park caves and waterfalls.',
 'Taza occupies one of the most strategically important positions in Morocco -- the Taza Gap, a narrow corridor between the Rif and Middle Atlas mountains that has been the main passage between eastern and western Morocco for millennia. The old city (Taza Haut) sits atop a plateau and retains a compelling medieval atmosphere with its Grand Mosque (one of the oldest in Morocco), defensive towers, and unspoiled medina. The Tazzeka National Park nearby offers the Friouato caves (some of the deepest in Africa), waterfalls, and mountain scenery.',
 148456, 510, 'Semi-arid Mediterranean. Hot summers, cool winters.', 'April to June and September to October',
 34.2133, -4.0103, FALSE, FALSE, NULL,
 ARRAY['mountain', 'history', 'caves', 'nature', 'fortress', 'authentic']),

-- MORE DRAA-TAFILALET
('c0000000-0000-0000-0000-000000000045', 'Imlil', 'imlil', 'a0000000-0000-0000-0000-000000000001',
 'The base camp for trekking Jebel Toubkal, North Africa''s highest peak at 4,167 meters, in the heart of the High Atlas Mountains.',
 'Imlil is a small Berber village at 1,740 meters in the Toubkal National Park, serving as the primary starting point for treks to the summit of Jebel Toubkal (4,167m), the highest mountain in North Africa. The village is surrounded by terraced walnut groves and has developed a range of mountain lodges and guesthouses. Even non-climbers will find the scenery breathtaking, with day hikes to the Setti Fatma waterfalls, the Armed valley, and surrounding Berber villages. Mule handlers and experienced mountain guides are available for hire.',
 5000, 1740, 'Mountain climate. Cold winters with heavy snow; pleasant summers.', 'June to September for Toubkal; April to October for general hiking',
 31.1372, -7.9194, FALSE, FALSE, NULL,
 ARRAY['mountain', 'trekking', 'toubkal', 'berber', 'high-atlas', 'adventure']),

('c0000000-0000-0000-0000-000000000046', 'Moulay Bousselham', 'moulay-bousselham', 'a0000000-0000-0000-0000-000000000004',
 'A sleepy coastal village with one of Morocco''s most important wetlands, a paradise for birdwatchers and lovers of tranquility.',
 'Moulay Bousselham is a quiet fishing village on Morocco''s Atlantic coast, centered on the Merja Zerga (Blue Lagoon), a Ramsar-designated wetland of international importance. The lagoon attracts over 100 species of migratory birds including flamingos, spoonbills, avocets, and the globally threatened marbled teal. Boat trips through the lagoon with local fishermen are the main activity. The village has a saint''s tomb (marabout) and a weekend fish market. It is refreshingly free of mass tourism.',
 3000, 5, 'Oceanic Atlantic climate. Mild and humid.', 'November to March for bird migration; summer for beach',
 34.8769, -6.2945, FALSE, TRUE, NULL,
 ARRAY['coastal', 'birdwatching', 'lagoon', 'wetland', 'nature', 'tranquil']),

-- Additional cities to reach 50+
('c0000000-0000-0000-0000-000000000047', 'Volubilis', 'volubilis', 'a0000000-0000-0000-0000-000000000002',
 'The best-preserved Roman ruins in North Africa, a UNESCO World Heritage site with stunning mosaics and triumphal arches.',
 'Volubilis (Walili in Arabic) is Morocco''s premier archaeological site, a sprawling Roman city founded in the 3rd century BC that became the westernmost outpost of the Roman Empire. The ruins, a UNESCO World Heritage site since 1997, are remarkably well-preserved with triumphal arches, a basilica, thermal baths, and exceptional floor mosaics depicting mythological scenes. The site sits amid rolling farmland with views to Moulay Idriss Zerhoun and the surrounding mountains. Unlike many Roman sites, Volubilis has minimal barriers allowing an intimate exploration experience.',
 200, 390, 'Mediterranean. Hot summers, mild winters.', 'April to June for wildflowers and comfortable temperatures',
 34.0727, -5.5547, FALSE, FALSE, NULL,
 ARRAY['ruins', 'roman', 'unesco', 'mosaics', 'history', 'archaeology']),

('c0000000-0000-0000-0000-000000000048', 'Figuig', 'figuig', 'a0000000-0000-0000-0000-000000000012',
 'A remote desert oasis of seven ksour near the Algerian border, one of Morocco''s most isolated and authentic settlements.',
 'Figuig is one of the most remote towns in Morocco, an oasis of 200,000 date palms clustered around seven ancient fortified villages (ksour) near the Algerian border. Each ksar has its own character and traditions, connected by a remarkable system of underground irrigation channels (khettaras). The palm gardens, divided by ancient stone walls, create a labyrinthine green world in the middle of the barren desert. Figuig is a place where time seems to stand still, and visitors are exceedingly rare.',
 12577, 900, 'Hot desert climate. Extreme summer heat; cool winters.', 'October to March',
 32.1140, -1.2290, FALSE, FALSE, NULL,
 ARRAY['oasis', 'desert', 'remote', 'authentic', 'dates', 'ksour']),

('c0000000-0000-0000-0000-000000000049', 'Moulay Yacoub', 'moulay-yacoub', 'a0000000-0000-0000-0000-000000000002',
 'A thermal spa town near Fes famous for its hot sulfur springs, used for therapeutic treatments since Roman times.',
 'Moulay Yacoub is a small town 20km northwest of Fes, renowned for its natural hot sulfur springs that have been used for therapeutic bathing since antiquity. The springs emerge at 54 degrees Celsius and are believed to help with skin conditions, rheumatism, and respiratory problems. A modern thermal spa complex offers treatments alongside the traditional public baths. The town makes an easy half-day excursion from Fes.',
 8000, 250, 'Mediterranean. Similar to Fes but slightly warmer.', 'Year-round',
 34.0862, -5.1775, FALSE, FALSE, NULL,
 ARRAY['thermal', 'spa', 'wellness', 'springs', 'health']),

('c0000000-0000-0000-0000-000000000050', 'Chichaoua', 'chichaoua', 'a0000000-0000-0000-0000-000000000001',
 'A small town on the road from Marrakech to Essaouira, famous for its Berber carpet weaving cooperatives.',
 'Chichaoua is a market town midway between Marrakech and Essaouira that has gained fame for its women''s carpet weaving cooperatives. The distinctive Chichaoua carpets (also called Haouz carpets) feature bold geometric patterns in red, orange, and black on a cream background. Visiting the cooperatives offers insight into this ancient craft and the opportunity to purchase directly from the weavers. The weekly Thursday souk is also worth visiting.',
 15000, 330, 'Semi-arid. Hot summers, mild winters.', 'Year-round; Thursday for the souk',
 31.5475, -8.7653, FALSE, FALSE, NULL,
 ARRAY['carpets', 'crafts', 'berber', 'cooperatives', 'authentic']),

('c0000000-0000-0000-0000-000000000051', 'Tamegroute', 'tamegroute', 'a0000000-0000-0000-0000-000000000007',
 'A desert village with a centuries-old Islamic library housing priceless manuscripts and a unique green pottery tradition.',
 'Tamegroute is a small village in the Draa Valley, 18km south of Zagora, known for two remarkable traditions. The Zaouia Nassiriya library contains thousands of ancient Islamic manuscripts, some dating to the 13th century, including rare works on astronomy, mathematics, and medicine. The village is also the only place in Morocco producing distinctive green-glazed pottery, made using a technique involving manganese oxide and copper. The pottery cooperative welcomes visitors to watch the process. The surrounding palmery and adjacent desert landscapes are stunning.',
 3000, 700, 'Hot desert climate. Extreme summer heat.', 'October to April',
 30.2635, -5.8314, FALSE, FALSE, NULL,
 ARRAY['library', 'manuscripts', 'pottery', 'desert', 'draa-valley', 'crafts']),

('c0000000-0000-0000-0000-000000000052', 'Imilchil', 'imilchil', 'a0000000-0000-0000-0000-000000000007',
 'A remote High Atlas village famous for its annual marriage festival (moussem) and the twin lakes of Isli and Tislit.',
 'Imilchil is a remote village at 2,160 meters in the central High Atlas, best known for its annual September marriage moussem where young Ait Hadiddou Berber men and women meet and marry. Legend says the twin lakes nearby -- Isli (his) and Tislit (hers) -- were formed from the tears of two lovers forbidden to marry. The village is spectacularly situated and the journey here, whether from Errachidia or Beni Mellal, crosses some of Morocco''s most dramatic mountain passes.',
 2000, 2160, 'Mountain climate. Very cold winters, mild summers.', 'September for the moussem; June to September for trekking',
 32.1531, -5.6307, FALSE, FALSE, NULL,
 ARRAY['mountain', 'festival', 'berber', 'lakes', 'remote', 'high-atlas', 'marriage']),

('c0000000-0000-0000-0000-000000000053', 'Tafraout', 'tafraout', 'a0000000-0000-0000-0000-000000000008',
 'A stunning Anti-Atlas valley town surrounded by pink granite formations, almond groves, and the painted rocks of Jean Verame.',
 'Tafraout sits in a spectacular valley in the Anti-Atlas Mountains, surrounded by enormous pink and ochre granite boulders and terraces of almond trees that bloom brilliantly in February. The town is the cultural capital of the Ammeln Valley and the Chleuh Berber people, many of whom have become successful merchants across Morocco. Notable attractions include the Painted Rocks of Belgian artist Jean Verame, the prehistoric rock carvings nearby, and the dramatic Napoleon''s Hat rock formation. The almond blossom festival in February is the best time to visit.',
 7000, 1200, 'Semi-arid mountain climate. Hot summers, cool winters.', 'February for almond blossoms; March to May and October to November',
 29.7231, -8.9736, FALSE, FALSE, NULL,
 ARRAY['mountain', 'anti-atlas', 'granite', 'almonds', 'painted-rocks', 'berber']),

('c0000000-0000-0000-0000-000000000054', 'Tan-Tan', 'tan-tan', 'a0000000-0000-0000-0000-000000000009',
 'A Saharan frontier town known for its annual Moussem of Tan-Tan, a UNESCO Masterpiece of the Oral and Intangible Heritage of Humanity.',
 'Tan-Tan marks the beginning of Morocco''s Saharan south. The town is best known for the Moussem of Tan-Tan, an annual gathering of nomadic peoples from across the Sahara that was proclaimed a UNESCO Masterpiece of the Oral and Intangible Heritage of Humanity in 2005. The festival features camel races, traditional music, poetry, and the famous guedra dance. The town itself is marked by a distinctive roadside sculpture of two giant kissing camels. Nearby Tan-Tan Plage has a wild, windswept beach.',
 73209, 30, 'Hot desert climate. Very hot summers, mild winters.', 'September for the Moussem; October to April otherwise',
 28.4380, -11.1020, FALSE, FALSE, NULL,
 ARRAY['desert', 'moussem', 'unesco', 'sahara', 'nomadic', 'camels']),

('c0000000-0000-0000-0000-000000000055', 'Sefrou', 'sefrou', 'a0000000-0000-0000-0000-000000000002',
 'A charming small city at the foot of the Middle Atlas known for its cherry festival, waterfall, and once-thriving Jewish community.',
 'Sefrou is a small city 28km south of Fes that was once home to one of Morocco''s largest Jewish communities. The well-preserved mellah (Jewish quarter) is one of the most atmospheric in Morocco, with overhanging upper floors creating covered alleyways. The town is famous for the annual Cherry Festival (Fete des Cerises) in June, one of Morocco''s oldest festivals. A waterfall cascades through the center of town, and the surrounding countryside of cherry orchards and olive groves is beautiful. Sefrou''s medina is compact, easy to navigate, and refreshingly tourist-free.',
 79887, 850, 'Mediterranean with mountain influence. Cooler than Fes.', 'June for the Cherry Festival; spring and autumn',
 33.8314, -4.8353, FALSE, FALSE, NULL,
 ARRAY['cherry-festival', 'jewish-heritage', 'waterfall', 'medina', 'authentic', 'atlas']);
