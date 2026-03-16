import os
import re

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

def replace_all_unsplash(filepath, default_image):
    """Replace any remaining unsplash URLs with a default image"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    content = re.sub(
        r"https://images\.unsplash\.com/[^'\")\s]+",
        default_image,
        content
    )
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    remaining = content.count('unsplash.com')
    name = os.path.basename(os.path.dirname(filepath))
    print(f"{name}/page.tsx final cleanup - {remaining} unsplash URLs remaining")

BASE = r"C:\Users\X1 Extreme\Documents\GitHub\moroccoguide\src\app"

# ==================== GUIDES PAGE ====================
process_file(os.path.join(BASE, "guides", "page.tsx"), {
    "'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&h=630&fit=crop'": "'/images/hero-morocco.webp'",
    'src="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1600&q=80"': 'src="/images/hero-morocco.webp"',
    'src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&q=80"': 'src="/images/hero-berber-culture.webp"',
    "'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'": "'/images/portrait-artisan.webp'",
    "'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'": "'/images/art-berber-portrait.webp'",
    "'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80'": "'/images/portrait-artisan.webp'",
    "'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'": "'/images/art-berber-portrait.webp'",
    "'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'": "'/images/portrait-artisan.webp'",
    "'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80'": "'/images/art-berber-portrait.webp'",
    "'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80'": "'/images/portrait-artisan.webp'",
    "'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80'": "'/images/art-berber-portrait.webp'",
    "'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80'": "'/images/portrait-artisan.webp'",
    "'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80'": "'/images/art-berber-portrait.webp'",
    "'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80'": "'/images/portrait-artisan.webp'",
    "'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80'": "'/images/art-berber-portrait.webp'",
    "'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80'": "'/images/portrait-artisan.webp'",
    "'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80'": "'/images/art-berber-portrait.webp'",
    "'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80'": "'/images/art-berber-portrait.webp'",
    "'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80'": "'/images/art-berber-portrait.webp'",
    "'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'": "'/images/art-berber-portrait.webp'",
})

# ==================== HAMMAM PAGE ====================
process_file(os.path.join(BASE, "hammam", "page.tsx"), {
    "'https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=1200&h=630&fit=crop'": "'/images/hero-hammam.webp'",
    "'https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&q=80'": "'/images/hero-hammam.webp'",
    "'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80'": "'/images/hero-hammam-interior.webp'",
    "'https://images.unsplash.com/photo-1583416750470-965b2707b355?w=600&q=80'": "'/images/hero-hammam.webp'",
    "'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80'": "'/images/hero-spa.webp'",
    "'https://images.unsplash.com/photo-1515362655824-9a74989e13cc?w=600&q=80'": "'/images/hero-wellness-spa.webp'",
    "'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80'": "'/images/hero-riad-interior.webp'",
    "'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80'": "'/images/hero-riad-interior.webp'",
    "'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80'": "'/images/hero-hammam-interior.webp'",
    "'https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=600&q=80'": "'/images/hero-spa.webp'",
    "'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80'": "'/images/hero-essaouira.webp'",
    "'https://images.unsplash.com/photo-1548018560-c7196281e579?w=600&q=80'": "'/images/hero-hammam.webp'",
    "'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=600&q=80'": "'/images/hero-tangier-kasbah.webp'",
    "'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80'": "'/images/hero-hammam-interior.webp'",
    "'https://images.unsplash.com/photo-1498843053639-170ff2122f35?w=600&q=80'": "'/images/hero-spa.webp'",
    "'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80'": "'/images/photo-argan-oil-stilllife.webp'",
    "'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&q=80'": "'/images/hero-spices.webp'",
})

# ==================== HISTORY PAGE ====================
process_file(os.path.join(BASE, "history", "page.tsx"), {
    "'https://images.unsplash.com/photo-1548017544-09dbc9fb99f6?w=1200&h=630&fit=crop'": "'/images/hero-kasbahs.webp'",
    'src="https://images.unsplash.com/photo-1548017544-09dbc9fb99f6?w=1600&q=80"': 'src="/images/hero-kasbahs.webp"',
    "'https://images.unsplash.com/photo-1504870712536-2d1d2d50be00?w=600&q=80'": "'/images/hero-kasbahs.webp'",
    "'https://images.unsplash.com/photo-1548017544-09dbc9fb99f6?w=600&q=80'": "'/images/hero-ait-benhaddou.webp'",
    "'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80'": "'/images/hero-souk-lamps.webp'",
    "'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&q=80'": "'/images/hero-marrakech-koutoubia.webp'",
    "'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=600&q=80'": "'/images/detail-zellige-mosaic.webp'",
    "'https://images.unsplash.com/photo-1560095633-6858e1e1e682?w=600&q=80'": "'/images/hero-hassan-mosque.webp'",
    "'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80'": "'/images/hero-essaouira-ramparts.webp'",
    "'https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?w=600&q=80'": "'/images/hero-morocco.webp'",
    "'https://images.unsplash.com/photo-1577147443647-81856d5151af?w=600&q=80'": "'/images/hero-morocco.webp'",
    # Imperial cities
    "'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=400&q=80'": "'/images/hero-fes.webp'",
    "'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80'": "'/images/hero-marrakech.webp'",
    "'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&q=80'": "'/images/hero-essaouira-ramparts.webp'",
    "'https://images.unsplash.com/photo-1577147443647-81856d5151af?w=400&q=80'": "'/images/hero-morocco.webp'",
    "'https://images.unsplash.com/photo-1545071677-2df608f54e72?w=400&q=80'": "'/images/hero-hassan-mosque.webp'",
    "'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=400&q=80'": "'/images/hero-essaouira.webp'",
    "'https://images.unsplash.com/photo-1548017544-09dbc9fb99f6?w=400&q=80'": "'/images/hero-ait-benhaddou.webp'",
    "'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=400&q=80'": "'/images/hero-marrakech.webp'",
    "'https://images.unsplash.com/photo-1560095633-6858e1e1e682?w=400&q=80'": "'/images/hero-kasbahs.webp'",
})

# ==================== JEWISH HERITAGE PAGE ====================
process_file(os.path.join(BASE, "jewish-heritage", "page.tsx"), {
    "'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&h=630&fit=crop'": "'/images/hero-fes.webp'",
    'src="https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1600&q=80"': 'src="/images/hero-fes.webp"',
    "'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80'": "'/images/hero-fes.webp'",
    "'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=600&q=80'": "'/images/hero-fes.webp'",
    "'https://images.unsplash.com/photo-1548017544-09dbc9fb99f6?w=600&q=80'": "'/images/hero-kasbahs.webp'",
    "'https://images.unsplash.com/photo-1560095633-6858e1e1e682?w=600&q=80'": "'/images/hero-marrakech.webp'",
    "'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&q=80'": "'/images/hero-marrakech.webp'",
    "'https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=600&q=80'": "'/images/hero-marrakech.webp'",
    "'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80'": "'/images/hero-essaouira.webp'",
    "'https://images.unsplash.com/photo-1577147443647-81856d5151af?w=600&q=80'": "'/images/hero-morocco.webp'",
    "'https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?w=600&q=80'": "'/images/hero-morocco.webp'",
    "'https://images.unsplash.com/photo-1545071677-2df608f54e72?w=600&q=80'": "'/images/hero-hassan-mosque.webp'",
    "'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&q=80'": "'/images/hero-morocco.webp'",
    "'https://images.unsplash.com/photo-1504870712536-2d1d2d50be00?w=600&q=80'": "'/images/hero-atlas.webp'",
    "'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&q=80'": "'/images/hero-berber-culture.webp'",
    # Standalone hero imgs
    'src="https://images.unsplash.com/photo-1577147443647-81856d5151af?w=800&q=80"': 'src="/images/hero-essaouira.webp"',
    'src="https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80"': 'src="/images/hero-fes.webp"',
    'src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?w=800&q=80"': 'src="/images/hero-morocco.webp"',
})

# ==================== LUXURY PAGE ====================
process_file(os.path.join(BASE, "luxury", "page.tsx"), {
    "'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&h=630&fit=crop'": "'/images/cover-morocco-luxury.webp'",
    "'url(https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2800)'": "'url(/images/cover-morocco-luxury.webp)'",
    "'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800'": "'/images/cover-morocco-luxury.webp'",
    "'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800'": "'/images/hero-riad-interior.webp'",
    "'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800'": "'/images/hero-atlas.webp'",
    "'https://images.unsplash.com/photo-1548018560-c7196e91a1e2?q=80&w=800'": "'/images/hero-riad-interior.webp'",
    "'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800'": "'/images/card-riad.webp'",
    "'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800'": "'/images/hero-riad-interior.webp'",
    "'https://images.unsplash.com/photo-1545041552-c7bf3e2daaee?q=80&w=800'": "'/images/hero-fes.webp'",
    "'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800'": "'/images/hero-fes.webp'",
    "'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=800'": "'/images/hero-desert.webp'",
    "'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800'": "'/images/card-beach.webp'",
    "'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800'": "'/images/card-riad.webp'",
    "'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800'": "'/images/hero-coastal.webp'",
    "'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800'": "'/images/hero-golf.webp'",
    "'https://images.unsplash.com/photo-1560437091-4383266ac31b?q=80&w=800'": "'/images/hero-essaouira-ramparts.webp'",
    "'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800'": "'/images/hero-tangier-kasbah.webp'",
})

# ==================== MOUNTAINS PAGE ====================
process_file(os.path.join(BASE, "mountains", "page.tsx"), {
    "'https://images.unsplash.com/photo-1548820513-f632723d10b4?w=1200&h=630&fit=crop'": "'/images/hero-atlas.webp'",
    "'url(https://images.unsplash.com/photo-1548820513-f632723d10b4?q=80&w=2800)'": "'url(/images/hero-atlas.webp)'",
    "'https://images.unsplash.com/photo-1548820513-f632723d10b4?w=1200'": "'/images/hero-atlas.webp'",
    "'https://images.unsplash.com/photo-1548820513-f632723d10b4?q=80&w=800'": "'/images/hero-atlas.webp'",
    "'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=800'": "'/images/hero-atlas.webp'",
    "'https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?q=80&w=800'": "'/images/hero-trekking.webp'",
    "'https://images.unsplash.com/photo-1553522991-71439aa62779?q=80&w=800'": "'/images/hero-chefchaouen.webp'",
    "'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800'": "'/images/hero-trekking.webp'",
    "'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800'": "'/images/hero-trekking.webp'",
    "'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=800'": "'/images/hero-atlas.webp'",
    "'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800'": "'/images/hero-chefchaouen.webp'",
    "'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=600'": "'/images/hero-todra-gorge.webp'",
    "'https://images.unsplash.com/photo-1531171074112-e2e0b6368535?q=80&w=600'": "'/images/hero-dades-gorge.webp'",
    "'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600'": "'/images/hero-national-parks.webp'",
    "'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=600'": "'/images/hero-atlas.webp'",
    "'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600'": "'/images/hero-trekking.webp'",
    "'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=600'": "'/images/hero-national-parks.webp'",
    "'https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=80&w=600'": "'/images/hero-national-parks.webp'",
})

# ==================== MUSIC PAGE ====================
process_file(os.path.join(BASE, "music", "page.tsx"), {
    "'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=630&fit=crop'": "'/images/art-gnawa-music.webp'",
    'src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80"': 'src="/images/art-gnawa-music.webp"',
    'src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80"': 'src="/images/art-gnawa-music.webp"',
    "'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=700&q=80'": "'/images/art-gnawa-music.webp'",
    "'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80'": "'/images/art-gnawa-music.webp'",
    "'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=700&q=80'": "'/images/art-gnawa-music.webp'",
    "'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&q=80'": "'/images/hero-jemaa-elfna-night.webp'",
    "'https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=700&q=80'": "'/images/hero-berber-culture.webp'",
    "'https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=600&q=80'": "'/images/hero-berber-culture.webp'",
    "'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=700&q=80'": "'/images/art-gnawa-music.webp'",
    "'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=700&q=80'": "'/images/hero-jemaa-elfna-night.webp'",
    "'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=700&q=80'": "'/images/hero-jemaa-elfna-night.webp'",
    "'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=700&q=80'": "'/images/art-gnawa-music.webp'",
    "'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&q=80'": "'/images/hero-berber-culture.webp'",
    "'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80'": "'/images/hero-jemaa-elfna-night.webp'",
    "'https://images.unsplash.com/photo-1564227901-6b1d20bebe9d?w=600&q=80'": "'/images/hero-berber-culture.webp'",
})

# ==================== NIGHTLIFE PAGE ====================
# This has many repeated URLs. Use regex approach.
filepath = os.path.join(BASE, "nightlife", "page.tsx")
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Hero/OG
content = content.replace("'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&h=630&fit=crop'", "'/images/hero-jemaa-elfna-night.webp'")
content = content.replace('src="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1600&q=80"', 'src="/images/hero-jemaa-elfna-night.webp"')
# Marrakech venues
content = content.replace("'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80'", "'/images/hero-jemaa-elfna-night.webp'")
content = content.replace("'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80'", "'/images/hero-marrakech.webp'")
content = content.replace("'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80'", "'/images/hero-marrakech.webp'")
# Casablanca
content = content.replace("'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?w=800&q=80'", "'/images/hero-morocco.webp'")
# Chefchaouen
content = content.replace("'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=800&q=80'", "'/images/hero-chefchaouen.webp'")
# Essaouira
content = content.replace("'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80'", "'/images/hero-essaouira.webp'")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
remaining = content.count('unsplash.com')
print(f"nightlife/page.tsx done - {remaining} unsplash URLs remaining")

# ==================== PHOTOGRAPHY PAGE ====================
process_file(os.path.join(BASE, "photography", "page.tsx"), {
    "'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=1200&h=630&fit=crop'": "'/images/hero-chefchaouen.webp'",
    "'url(https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?q=80&w=2800)'": "'url(/images/hero-chefchaouen.webp)'",
    "'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=1200'": "'/images/hero-chefchaouen.webp'",
    "'https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=800'": "'/images/hero-jemaa-elfna-night.webp'",
    "'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?q=80&w=800'": "'/images/hero-chefchaouen-drone.webp'",
    "'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800'": "'/images/hero-sahara-sunrise.webp'",
    "'https://images.unsplash.com/photo-1531501410720-c8d437636169?q=80&w=800'": "'/images/hero-ait-benhaddou.webp'",
    "'https://images.unsplash.com/photo-1545041420-3c8cb7d74e42?q=80&w=800'": "'/images/hero-fes-tanneries.webp'",
    "'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800'": "'/images/hero-hassan-mosque.webp'",
    "'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800'": "'/images/hero-essaouira-ramparts.webp'",
    "'https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?q=80&w=800'": "'/images/hero-todra-gorge.webp'",
    "'https://images.unsplash.com/photo-1577493340887-b7bfff550145?q=80&w=800'": "'/images/detail-zellige-mosaic.webp'",
    "'https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=800'": "'/images/hero-dades-gorge.webp'",
    "'https://images.unsplash.com/photo-1517821362941-f7f753200fef?q=80&w=800'": "'/images/hero-fes-tanneries.webp'",
    "'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=800'": "'/images/hero-national-parks.webp'",
    "'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=800'": "'/images/hero-majorelle-garden.webp'",
    "'https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=800'": "'/images/hero-coastal.webp'",
    "'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=800'": "'/images/hero-fes.webp'",
    "'https://images.unsplash.com/photo-1455729552457-5c322b47ff7e?q=80&w=800'": "'/images/hero-surfing.webp'",
    "'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800'": "'/images/hero-atlas.webp'",
    "'https://images.unsplash.com/photo-1564227901-6b1d20bebe9d?q=80&w=800'": "'/images/hero-morocco.webp'",
    "'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=800'": "'/images/hero-dades-gorge.webp'",
    "'https://images.unsplash.com/photo-1519817650390-64a93db51571?q=80&w=800'": "'/images/hero-tangier-kasbah.webp'",
})

# ==================== RIADS PAGE ====================
process_file(os.path.join(BASE, "riads", "page.tsx"), {
    "'https://images.unsplash.com/photo-1548018560-c7196e5f96c2?w=1200&h=630&fit=crop'": "'/images/hero-riad-interior.webp'",
    "'url(https://images.unsplash.com/photo-1548018560-c7196e5f96c2?q=80&w=2800)'": "'url(/images/hero-riad-interior.webp)'",
    "'https://images.unsplash.com/photo-1548018560-c7196e5f96c2?w=1200'": "'/images/hero-riad-interior.webp'",
    "'https://images.unsplash.com/photo-1548018560-c7196e5f96c2?q=80&w=800'": "'/images/hero-riad-interior.webp'",
    "'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=800'": "'/images/card-riad.webp'",
    "'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800'": "'/images/hero-riad-interior.webp'",
    "'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800'": "'/images/card-riad.webp'",
    "'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800'": "'/images/hero-riad-interior.webp'",
    "'https://images.unsplash.com/photo-1577493340887-b7bfff550145?q=80&w=800'": "'/images/detail-moroccan-door.webp'",
    "'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800'": "'/images/detail-zellige-mosaic.webp'",
    "'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800'": "'/images/card-riad.webp'",
    "'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800'": "'/images/hero-riad-interior.webp'",
    "'https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=800'": "'/images/hero-essaouira.webp'",
    "'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800'": "'/images/hero-essaouira-ramparts.webp'",
    "'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?q=80&w=800'": "'/images/hero-chefchaouen.webp'",
    "'https://images.unsplash.com/photo-1539437829697-1b4ed5aebd19?q=80&w=800'": "'/images/hero-atlas.webp'",
    # Grid images at bottom
    "src: 'https://images.unsplash.com/photo-1548018560-c7196e5f96c2?q=80&w=600'": "src: '/images/hero-riad-interior.webp'",
    "src: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=600'": "src: '/images/detail-zellige-pattern.webp'",
    "src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=600'": "src: '/images/hero-riad-interior.webp'",
    "src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600'": "src: '/images/hero-riad-interior.webp'",
    "src: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145?q=80&w=600'": "src: '/images/detail-moroccan-door.webp'",
    "src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=600'": "src: '/images/card-riad.webp'",
    "src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=600'": "src: '/images/detail-zellige-mosaic.webp'",
    "src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600'": "src: '/images/hero-riad-interior.webp'",
})

# ==================== SHOPPING PAGE ====================
process_file(os.path.join(BASE, "shopping", "page.tsx"), {
    "'https://images.unsplash.com/photo-1531501410720-c8d437636169?w=1200&h=630&fit=crop'": "'/images/hero-souk-lamps.webp'",
    'src="https://images.unsplash.com/photo-1531501410720-c8d437636169?w=1600&q=80"': 'src="/images/hero-souk-lamps.webp"',
    "'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80'": "'/images/art-berber-carpet-weaving.webp'",
    "'https://images.unsplash.com/photo-1517646287270-a5a0a6e11d26?w=600&q=80'": "'/images/card-leather.webp'",
    "'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80'": "'/images/photo-argan-oil-stilllife.webp'",
    "'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80'": "'/images/hero-spices.webp'",
    "'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&q=80'": "'/images/photo-ceramics-pottery.webp'",
    "'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&q=80'": "'/images/hero-souk-lamps.webp'",
    "'https://images.unsplash.com/photo-1515562141589-67f0d569b6fc?w=600&q=80'": "'/images/hero-spices.webp'",
    "'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&q=80'": "'/images/detail-zellige-mosaic.webp'",
    "'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80'": "'/images/photo-souvenirs-flatlay.webp'",
    "'https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=600&q=80'": "'/images/art-moroccan-calligraphy.webp'",
    "'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80'": "'/images/art-berber-carpet-weaving.webp'",
    "'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80'": "'/images/hero-essaouira.webp'",
    "'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80'": "'/images/photo-ceramics-pottery.webp'",
    "'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80'": "'/images/card-lanterns.webp'",
    "'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=80'": "'/images/hero-spices.webp'",
    "'https://images.unsplash.com/photo-1601924921557-45e8e0e67fb2?w=600&q=80'": "'/images/photo-souvenirs-flatlay.webp'",
    "'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&q=80'": "'/images/photo-argan-oil-stilllife.webp'",
    "'https://images.unsplash.com/photo-1504870712536-2d1d2d50be00?w=600&q=80'": "'/images/hero-spices.webp'",
})

print("Batch complete!")
