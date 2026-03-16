import os
import re

BASE = r"C:\Users\X1 Extreme\Documents\GitHub\moroccoguide\src\app"

def process_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    for old, new in replacements.items():
        content = content.replace(old, new)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    remaining = content.count('unsplash.com')
    name = os.path.basename(os.path.dirname(filepath))
    print(f"{name}/page.tsx done - {remaining} unsplash URLs remaining")

# ==================== WELLNESS PAGE ====================
process_file(os.path.join(BASE, "wellness", "page.tsx"), {
    "'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=630&fit=crop'": "'/images/hero-wellness-spa.webp'",
    'src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&q=80"': 'src="/images/hero-wellness-spa.webp"',
    "'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80'": "'/images/hero-spa.webp'",
    "'https://images.unsplash.com/photo-1509310228460-e0266a1e0d7c?w=800&q=80'": "'/images/hero-hammam.webp'",
    "'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80'": "'/images/hero-yoga.webp'",
    "'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80'": "'/images/hero-atlas.webp'",
    "'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80'": "'/images/hero-essaouira.webp'",
    "'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=800&q=80'": "'/images/hero-desert.webp'",
    "'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80'": "'/images/hero-marrakech.webp'",
    'src="https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=800&q=80"': 'src="/images/hero-desert.webp"',
    'src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80"': 'src="/images/hero-atlas.webp"',
})

# ==================== EVENTS PAGE ====================
filepath = os.path.join(BASE, "events", "page.tsx")
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&h=630&fit=crop'", "'/images/hero-jemaa-elfna-night.webp'")
content = content.replace('src="https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1600&q=80"', 'src="/images/hero-jemaa-elfna-night.webp"')
content = content.replace("'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=800&q=80'", "'/images/hero-desert.webp'")
content = content.replace("'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80'", "'/images/photo-fantasia-tbourida.webp'")
content = content.replace("'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80'", "'/images/hero-fes.webp'")
content = content.replace("'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80'", "'/images/hero-marrakech.webp'")
content = content.replace("'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?w=800&q=80'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80'", "'/images/hero-berber-culture.webp'")
content = content.replace("'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800&q=80'", "'/images/hero-asilah-aerial.webp'")
content = content.replace("'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80'", "'/images/art-gnawa-music.webp'")
content = content.replace("'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80'", "'/images/art-gnawa-music.webp'")
content = content.replace("'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80'", "'/images/hero-jemaa-elfna-night.webp'")
content = content.replace("'https://images.unsplash.com/photo-1564227901-6b1d20bebe9d?w=800&q=80'", "'/images/hero-asilah-aerial.webp'")
content = content.replace("'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?w=800&q=80'", "'/images/hero-surfing.webp'")
content = content.replace("'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80'", "'/images/art-gnawa-music.webp'")
content = content.replace("'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?w=800&q=80'", "'/images/art-street-art.webp'")
content = content.replace("'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80'", "'/images/hero-berber-culture.webp'")
content = content.replace("'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80'", "'/images/art-gnawa-music.webp'")
content = content.replace("'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80'", "'/images/hero-ait-benhaddou.webp'")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
remaining = content.count('unsplash.com')
print(f"events/page.tsx done - {remaining} unsplash URLs remaining")

# ==================== FESTIVALS PAGE ====================
filepath = os.path.join(BASE, "festivals", "page.tsx")
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=630&fit=crop'", "'/images/photo-fantasia-tbourida.webp'")
content = content.replace("'url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2800)'", "'url(/images/photo-fantasia-tbourida.webp)'")
# Replace all remaining unsplash URLs in festivals with appropriate images
content = content.replace("'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800'", "'/images/art-gnawa-music.webp'")
content = content.replace("'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800'", "'/images/art-gnawa-music.webp'")
content = content.replace("'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800'", "'/images/art-gnawa-music.webp'")
content = content.replace("'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800'", "'/images/hero-jemaa-elfna-night.webp'")
content = content.replace("'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800'", "'/images/hero-jemaa-elfna-night.webp'")
content = content.replace("'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?q=80&w=800'", "'/images/hero-berber-culture.webp'")
content = content.replace("'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800'", "'/images/photo-fantasia-tbourida.webp'")
content = content.replace("'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?q=80&w=800'", "'/images/hero-desert.webp'")
content = content.replace("'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800'", "'/images/hero-marrakech.webp'")
content = content.replace("'https://images.unsplash.com/photo-1504387828636-abeb50778c0c?q=80&w=800'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800'", "'/images/hero-ait-benhaddou.webp'")
content = content.replace("'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?q=80&w=800'", "'/images/hero-kasbahs.webp'")
content = content.replace("'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?q=80&w=800'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?q=80&w=800'", "'/images/hero-surfing.webp'")
content = content.replace("'https://images.unsplash.com/photo-1564227901-6b1d20bebe9d?q=80&w=800'", "'/images/hero-asilah-aerial.webp'")
content = content.replace("'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=800'", "'/images/hero-berber-culture.webp'")
content = content.replace("'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?q=80&w=800'", "'/images/art-street-art.webp'")
content = content.replace("'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=800'", "'/images/hero-fes.webp'")
content = content.replace("'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=800'", "'/images/hero-fes.webp'")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
remaining = content.count('unsplash.com')
print(f"festivals/page.tsx done - {remaining} unsplash URLs remaining")

# ==================== FILMING LOCATIONS PAGE ====================
filepath = os.path.join(BASE, "filming-locations", "page.tsx")
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1200&h=630&fit=crop'", "'/images/hero-ait-benhaddou.webp'")
content = content.replace("'url(https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=2800)'", "'url(/images/hero-ait-benhaddou.webp)'")
content = content.replace("'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1200'", "'/images/hero-ait-benhaddou.webp'")
content = content.replace("'https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=800'", "'/images/hero-ait-benhaddou.webp'")
content = content.replace("'https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=600'", "'/images/hero-ait-benhaddou.webp'")
content = content.replace("'https://images.unsplash.com/photo-1548018560-c7196e66aca2?q=80&w=800'", "'/images/hero-kasbahs.webp'")
content = content.replace("'https://images.unsplash.com/photo-1548018560-c7196e66aca2?q=80&w=600'", "'/images/hero-kasbahs.webp'")
content = content.replace("'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800'", "'/images/hero-essaouira-ramparts.webp'")
content = content.replace("'https://images.unsplash.com/photo-1545071677-2df608f54e72?q=80&w=800'", "'/images/hero-hassan-mosque.webp'")
content = content.replace("'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=800'", "'/images/hero-marrakech.webp'")
content = content.replace("'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=600'", "'/images/hero-marrakech.webp'")
content = content.replace("'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800'", "'/images/hero-desert.webp'")
content = content.replace("'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=600'", "'/images/hero-desert.webp'")
content = content.replace("'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?q=80&w=800'", "'/images/hero-fes.webp'")
content = content.replace("'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?q=80&w=600'", "'/images/hero-fes.webp'")
content = content.replace("'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=800'", "'/images/hero-todra-gorge.webp'")
content = content.replace("'https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=800'", "'/images/hero-kasbahs.webp'")
content = content.replace("'https://images.unsplash.com/photo-1577147443647-81856d5151af?q=80&w=800'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1577147443647-81856d5151af?q=80&w=600'", "'/images/hero-morocco.webp'")
content = content.replace('src="https://images.unsplash.com/photo-1548018560-c7196e66aca2?q=80&w=800"', 'src="/images/hero-kasbahs.webp"')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
remaining = content.count('unsplash.com')
print(f"filming-locations/page.tsx done - {remaining} unsplash URLs remaining")

# ==================== FOOTBALL PAGE ====================
filepath = os.path.join(BASE, "football", "page.tsx")
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=630&fit=crop'", "'/images/hero-morocco.webp'")
content = content.replace("'url(https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2800)'", "'url(/images/hero-morocco.webp)'")
# Stadium images
content = content.replace("'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800'", "'/images/hero-marrakech.webp'")
content = content.replace("'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=800'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=800'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=800'", "'/images/hero-fes.webp'")
content = content.replace("'https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=800'", "'/images/hero-morocco.webp'")
# Player images
content = content.replace("'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=400'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=400'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=400'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=400'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=400'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=400'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=400'", "'/images/hero-morocco.webp'")
# Standalone images
content = content.replace('src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800"', 'src="/images/hero-morocco.webp"')
content = content.replace('src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800"', 'src="/images/flyer-worldcup2030.webp"')
content = content.replace('src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800"', 'src="/images/flyer-worldcup2030.webp"')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
remaining = content.count('unsplash.com')
print(f"football/page.tsx done - {remaining} unsplash URLs remaining")

# ==================== GARDENS PAGE ====================
filepath = os.path.join(BASE, "gardens", "page.tsx")
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("'https://images.unsplash.com/photo-1585247226801-bc613c441316?w=1200&h=630&fit=crop'", "'/images/hero-majorelle-garden.webp'")
content = content.replace('src="https://images.unsplash.com/photo-1585247226801-bc613c441316?w=1600&q=80"', 'src="/images/hero-majorelle-garden.webp"')
content = content.replace("'https://images.unsplash.com/photo-1585247226801-bc613c441316?w=800&q=80'", "'/images/hero-majorelle-garden.webp'")
content = content.replace("'https://images.unsplash.com/photo-1572204097183-e1ab140342ed?w=800&q=80'", "'/images/hero-majorelle-garden.webp'")
content = content.replace("'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80'", "'/images/hero-marrakech.webp'")
content = content.replace("'https://images.unsplash.com/photo-1570526904826-6690e3b98efa?w=800&q=80'", "'/images/hero-riad-interior.webp'")
content = content.replace("'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80'", "'/images/hero-majorelle-garden.webp'")
content = content.replace("'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80'", "'/images/hero-national-parks.webp'")
content = content.replace("'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80'", "'/images/hero-fes.webp'")
content = content.replace("'https://images.unsplash.com/photo-1548018560-c7196e5f96c2?w=800&q=80'", "'/images/hero-riad-interior.webp'")
content = content.replace("'https://images.unsplash.com/photo-1570197571499-166b36435b75?w=800&q=80'", "'/images/hero-kasbahs.webp'")
content = content.replace("'https://images.unsplash.com/photo-1562501748-ac39c3b0fb8f?w=800&q=80'", "'/images/hero-kasbahs.webp'")
content = content.replace("'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80'", "'/images/photo-argan-cooperative.webp'")
content = content.replace("'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'", "'/images/hero-essaouira.webp'")
content = content.replace("'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80'", "'/images/poster-oasis.webp'")
content = content.replace("'https://images.unsplash.com/photo-1548017544-09dbc9fb99f6?w=800&q=80'", "'/images/hero-kasbahs.webp'")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
remaining = content.count('unsplash.com')
print(f"gardens/page.tsx done - {remaining} unsplash URLs remaining")

# ==================== WILDLIFE PAGE ====================
filepath = os.path.join(BASE, "wildlife", "page.tsx")
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1200&h=630&fit=crop'", "'/images/hero-national-parks.webp'")
content = content.replace("'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1200'", "'/images/hero-national-parks.webp'")
content = content.replace('src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=2800"', 'src="/images/hero-national-parks.webp"')
content = content.replace("'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=600'", "'/images/hero-national-parks.webp'")
content = content.replace("'https://images.unsplash.com/photo-1516728778615-2d590ea1855e?q=80&w=600'", "'/images/hero-desert.webp'")
content = content.replace("'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=600'", "'/images/hero-national-parks.webp'")
content = content.replace("'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=600'", "'/images/hero-camel-caravan.webp'")
content = content.replace("'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?q=80&w=600'", "'/images/hero-national-parks.webp'")
content = content.replace("'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=600'", "'/images/hero-desert.webp'")
content = content.replace("'https://images.unsplash.com/photo-1555224371-e29aa23e4440?q=80&w=600'", "'/images/hero-birdwatching.webp'")
content = content.replace("'https://images.unsplash.com/photo-1497206365907-f5e630693df0?q=80&w=600'", "'/images/hero-birdwatching.webp'")
content = content.replace("'https://images.unsplash.com/photo-1590608897006-f82fbbf4ad64?q=80&w=600'", "'/images/hero-birdwatching.webp'")
content = content.replace("'https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=600'", "'/images/hero-national-parks.webp'")
content = content.replace("'https://images.unsplash.com/photo-1574068468668-a05a11f871da?q=80&w=600'", "'/images/hero-national-parks.webp'")
content = content.replace("'https://images.unsplash.com/photo-1591025207163-942350e47db2?q=80&w=600'", "'/images/hero-coastal.webp'")
content = content.replace("'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=600'", "'/images/hero-coastal.webp'")
content = content.replace("'https://images.unsplash.com/photo-1542273917363-1f3e5ce68a2c?q=80&w=600'", "'/images/hero-national-parks.webp'")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
remaining = content.count('unsplash.com')
print(f"wildlife/page.tsx done - {remaining} unsplash URLs remaining")

# ==================== RESTAURANTS PAGE ====================
filepath = os.path.join(BASE, "restaurants", "page.tsx")
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&h=630&fit=crop'", "'/images/hero-food.webp'")
content = content.replace('src="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1600&q=80"', 'src="/images/hero-food.webp"')
content = content.replace("'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80'", "'/images/photo-tagine-closeup.webp'")
content = content.replace("'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80'", "'/images/hero-fes.webp'")
content = content.replace("'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80'", "'/images/hero-essaouira.webp'")
content = content.replace("'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?w=800&q=80'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?w=800&q=80'", "'/images/hero-tangier-kasbah.webp'")
content = content.replace("'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=800&q=80'", "'/images/hero-chefchaouen.webp'")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
remaining = content.count('unsplash.com')
print(f"restaurants/page.tsx done - {remaining} unsplash URLs remaining")

# ==================== OASES PAGE ====================
filepath = os.path.join(BASE, "oases", "page.tsx")
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("'https://images.unsplash.com/photo-1548018560-c7196e4f82e7?w=1200&h=630&fit=crop'", "'/images/poster-oasis.webp'")
content = content.replace("'https://images.unsplash.com/photo-1548018560-c7196e4f82e7?w=1200'", "'/images/poster-oasis.webp'")
content = content.replace('src="https://images.unsplash.com/photo-1548018560-c7196e4f82e7?q=80&w=2800"', 'src="/images/poster-oasis.webp"')
content = content.replace("'https://images.unsplash.com/photo-1548018560-c7196e4f82e7?q=80&w=800'", "'/images/poster-oasis.webp'")
content = content.replace("'https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=800'", "'/images/hero-desert.webp'")
content = content.replace("'https://images.unsplash.com/photo-1545157933-2a6788aa2724?q=80&w=800'", "'/images/hero-kasbahs.webp'")
content = content.replace("'https://images.unsplash.com/photo-1517309230475-6736d926b979?q=80&w=800'", "'/images/hero-desert.webp'")
content = content.replace("'https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=800'", "'/images/hero-todra-gorge.webp'")
content = content.replace("'https://images.unsplash.com/photo-1504195505-7427ddbaab63?q=80&w=800'", "'/images/hero-desert.webp'")
# Broken URL in source
content = content.replace("'https://images.unsplash.com/photo-1507820284832-de tried?q=80&w=800'", "'/images/hero-desert.webp'")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
remaining = content.count('unsplash.com')
print(f"oases/page.tsx done - {remaining} unsplash URLs remaining")

# ==================== DAY TRIPS PAGE ====================
filepath = os.path.join(BASE, "day-trips", "page.tsx")
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&h=630&fit=crop'", "'/images/hero-morocco.webp'")
content = content.replace('src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1600&h=900&fit=crop"', 'src="/images/hero-morocco.webp"')
# Day trip images
content = content.replace("'https://images.unsplash.com/photo-1570197571499-166b36435e9f?q=80&w=800'", "'/images/hero-todra-gorge.webp'")
content = content.replace("'https://images.unsplash.com/photo-1547037579-f0fc020ac3be?q=80&w=800'", "'/images/hero-national-parks.webp'")
content = content.replace("'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800'", "'/images/hero-essaouira.webp'")
content = content.replace("'https://images.unsplash.com/photo-1548017544-13e612e42a90?q=80&w=800'", "'/images/hero-ait-benhaddou.webp'")
content = content.replace("'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800'", "'/images/hero-atlas.webp'")
content = content.replace("'https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=800'", "'/images/hero-marrakech-koutoubia.webp'")
content = content.replace("'https://images.unsplash.com/photo-1580922531613-c4e19e0e2e56?q=80&w=800'", "'/images/hero-kasbahs.webp'")
content = content.replace("'https://images.unsplash.com/photo-1560614861-4bdb77ade040?q=80&w=800'", "'/images/hero-asilah-aerial.webp'")
content = content.replace("'https://images.unsplash.com/photo-1545042679-2a5c9fa45a38?q=80&w=800'", "'/images/hero-fes.webp'")
content = content.replace("'https://images.unsplash.com/photo-1580746738099-78d6833b3f84?q=80&w=800'", "'/images/hero-atlas.webp'")
content = content.replace("'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800'", "'/images/hero-national-parks.webp'")
content = content.replace("'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800'", "'/images/hero-essaouira-ramparts.webp'")
content = content.replace("'https://images.unsplash.com/photo-1569587112025-0d460e81a126?q=80&w=800'", "'/images/hero-tangier-kasbah.webp'")
content = content.replace("'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=800'", "'/images/hero-souk-lamps.webp'")
content = content.replace("'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800'", "'/images/card-beach.webp'")
content = content.replace("'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?q=80&w=800'", "'/images/hero-chefchaouen.webp'")
content = content.replace("'https://images.unsplash.com/photo-1568454537842-d933259bb258?q=80&w=800'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1571401835393-8c5f40381b4f?q=80&w=800'", "'/images/hero-morocco.webp'")
content = content.replace("'https://images.unsplash.com/photo-1502680390548-bdbac40f0100?q=80&w=800'", "'/images/hero-surfing.webp'")
content = content.replace("'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800'", "'/images/hero-camping.webp'")
content = content.replace("'https://images.unsplash.com/photo-1590501006614-e53ad7753e3f?q=80&w=800'", "'/images/hero-wine.webp'")
content = content.replace("'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=800'", "'/images/hero-desert.webp'")
content = content.replace("'https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=800'", "'/images/hero-coastal.webp'")
content = content.replace("'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800'", "'/images/hero-birdwatching.webp'")
# City hub images
content = content.replace("'https://images.unsplash.com/photo-1597212618440-806262de4fe6?q=80&w=400'", "'/images/hero-marrakech.webp'")
content = content.replace("'https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?q=80&w=400'", "'/images/hero-fes.webp'")
content = content.replace("'https://images.unsplash.com/photo-1577147443647-81856d5151af?q=80&w=400'", "'/images/hero-hassan-mosque.webp'")
content = content.replace("'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=400'", "'/images/hero-tangier-kasbah.webp'")
content = content.replace("'https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?q=80&w=400'", "'/images/card-beach.webp'")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
remaining = content.count('unsplash.com')
print(f"day-trips/page.tsx done - {remaining} unsplash URLs remaining")

print("\nAll files processed!")
