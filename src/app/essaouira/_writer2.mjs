import { appendFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const dir = dirname(fileURLToPath(import.meta.url));
const fp = join(dir, 'page.tsx');

const jsx = `
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

      {/* -- Top Attractions -- */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
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
              <div key={attraction.name} className="card-moroccan overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={attraction.image} alt={attraction.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading={index < 3 ? 'eager' : 'lazy'} />
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
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-2">{attraction.name}</h3>
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
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Wind Sports Capital of Africa</h2>
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
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary)]"><Icon className="w-6 h-6" /></div>
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
                  <div className="flex items-center gap-2 text-sm text-[var(--color-primary)] font-medium"><Calendar className="w-3.5 h-3.5" />{sport.season}</div>
                </div>
              );
            })}
          </div>
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">Recommended Schools & Centers</h3>
          <p className="text-[var(--text-secondary)] mb-6">Lessons range from 400 to 800 MAD per session depending on sport, duration, and group or private instruction. All schools provide equipment.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {windSchools.map((school) => (
              <div key={school.name} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg">{school.name}</h4>
                  <span className="tag bg-[var(--color-accent-50)] text-[var(--color-accent)] font-semibold">{school.price}</span>
                </div>
                <span className="inline-block tag bg-[var(--color-primary-50)] text-[var(--color-primary)] mb-3">{school.specialty}</span>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">{school.description}</p>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"><MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />{school.location}</div>
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
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">Essaouira has been a magnet for artists, musicians, and bohemian travelers since the 1960s. The city&apos;s creative spirit is palpable in every gallery, workshop, and street corner.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]"><Eye className="w-5 h-5" /></div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg">The Gallery Scene</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">Essaouira hosts the densest concentration of art galleries of any Moroccan city relative to its size. The movement was catalyzed by Danish-born art dealer Frederic Damgaard, who opened Galerie Damgaard on Avenue Oqba Ibn Nafiaa in the 1980s and championed self-taught local artists.</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">Notable spaces include Espace Othello (housed in a converted synagogue), La Petite Galerie, and Galerie d&apos;Art Frederic Damgaard. Prices range from 200 MAD for small prints to 20,000+ MAD for significant original works.</p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]"><TreePine className="w-5 h-5" /></div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg">Thuya Wood Artisans</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">Essaouira is the undisputed capital of thuya wood craftsmanship. The thuya tree (Tetraclinis articulata) grows only in the Essaouira region and parts of Algeria, producing richly patterned, aromatic wood prized for marquetry and carving.</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">Products range from small jewelry boxes (50 to 200 MAD) to elaborate chess sets (500 to 2,000 MAD). The Ensemble Artisanal cooperative offers fixed prices and quality assurance.</p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]"><Sparkles className="w-5 h-5" /></div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg">Argan Oil Cooperatives</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">The argan tree is endemic to southwestern Morocco, and the Essaouira region sits at the heart of the UNESCO-designated Arganeraie Biosphere Reserve. Women&apos;s cooperatives process the oil by hand using traditional stone mills.</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">Culinary argan oil costs 150 to 250 MAD for 500ml. Cosmetic argan oil runs 200 to 350 MAD for 100ml. Cooperative prices are fair and fixed, with profits going directly to the women workers.</p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]"><Music className="w-5 h-5" /></div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg">Gnaoua Music Heritage</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">Essaouira is the spiritual home of Gnaoua music, a powerful blend of sub-Saharan African rhythms, Berber traditions, and Sufi spiritual practices. The music features the guembri (a three-stringed bass lute), krakeb castanets, and hypnotic call-and-response chanting.</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">Gnaoua musicians perform in Moulay Hassan Square most evenings. The tradition was recognized by UNESCO as Intangible Cultural Heritage of Humanity in 2019.</p>
            </div>
          </div>
        </div>
      </section>
`;

appendFileSync(fp, jsx);
console.log('Part 2 written:', jsx.split('\n').length, 'lines');
