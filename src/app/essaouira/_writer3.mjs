import { appendFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const dir = dirname(fileURLToPath(import.meta.url));
const fp = join(dir, 'page.tsx');

const jsx = `
      {/* -- Where to Eat -- */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Utensils className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Where to Eat</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">Essaouira&apos;s food scene revolves around the Atlantic catch. From 50 MAD grilled fish plates at the port to refined rooftop dining, every budget and taste is served. All prices in Moroccan Dirham (MAD).</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurants.map((restaurant) => (
              <div key={restaurant.name} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg">{restaurant.name}</h3>
                  <span className="tag bg-[var(--color-accent-50)] text-[var(--color-accent)] font-semibold text-sm">{restaurant.price}</span>
                </div>
                <div className="flex items-center gap-3 mb-3"><span className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]">{restaurant.cuisine}</span></div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">{restaurant.description}</p>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-2"><MapPin className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0" />{restaurant.location}</div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-primary)] font-medium"><Star className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />{restaurant.highlight}</div>
              </div>
            ))}
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
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">From palatial Relais &amp; Chateaux properties to backpacker-friendly hostels, Essaouira offers accommodation for every budget. Staying inside the medina puts you steps from everything.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accommodations.map((hotel) => (
              <div key={hotel.name} className="card-moroccan p-6 flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent-50)] text-[var(--color-accent)]"><Bed className="w-6 h-6" /></div>
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
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Day Trips from Essaouira</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">From surf villages and hidden gorges to argan forests where goats climb trees. Most can be done independently or through local operators for 300 to 600 MAD per person.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dayTrips.map((trip) => {
              const Icon = trip.icon;
              return (
                <div key={trip.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]"><Icon className="w-5 h-5" /></div>
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

      {/* -- Getting There -- */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Plane className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Getting There</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">Essaouira is 175 km west of Marrakech (2.5 hours by road). Most visitors arrive by bus or taxi from Marrakech.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gettingThere.map((transport) => {
              const Icon = transport.icon;
              return (
                <div key={transport.method} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]"><Icon className="w-5 h-5" /></div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">{transport.method}</h3>
                  </div>
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <span className="flex items-center gap-1 text-[var(--text-secondary)]"><Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" /> {transport.duration}</span>
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
                <div key={info.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]"><Icon className="w-5 h-5" /></div>
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
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-xl mb-4">About the Festival</h3>
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
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-xl mb-4">Practical Tips for Festival-Goers</h3>
                <ul className="space-y-2">
                  {gnaoua.practicalInfo.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)] leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-[#C4960C] flex-shrink-0 mt-0.5" /><span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-xl mb-4">The Gnaoua Musical Tradition</h3>
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
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Essaouira Through the Seasons</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">Each season brings a different character to the Wind City.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-moroccan p-6 text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-green-50 text-green-600 mx-auto mb-4"><TreePine className="w-7 h-7" /></div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">Spring (Mar-May)</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">Temperatures rise to 18-23 C. Winds begin picking up in April. Wildflowers bloom. Fewer tourists than summer. Excellent balance of weather and crowds.</p>
              <div className="mt-3 flex items-center justify-center gap-1 text-sm font-medium text-green-600"><ThermometerSun className="w-3.5 h-3.5" /> 18-23 C</div>
            </div>
            <div className="card-moroccan p-6 text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 mx-auto mb-4"><Sun className="w-7 h-7" /></div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">Summer (Jun-Aug)</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">Peak wind sports season with 20-25 knot trade winds. 25-30 C but feels cooler. Gnaoua Festival in June. Busy with tourists. Book accommodation in advance.</p>
              <div className="mt-3 flex items-center justify-center gap-1 text-sm font-medium text-amber-600"><ThermometerSun className="w-3.5 h-3.5" /> 25-30 C</div>
            </div>
            <div className="card-moroccan p-6 text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 mx-auto mb-4"><Wind className="w-7 h-7" /></div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">Autumn (Sep-Nov)</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">Winds ease through September. October brings warmer sea temperatures and surf season. Tourist numbers drop significantly. Ideal for budget travelers.</p>
              <div className="mt-3 flex items-center justify-center gap-1 text-sm font-medium text-orange-600"><ThermometerSun className="w-3.5 h-3.5" /> 18-26 C</div>
            </div>
            <div className="card-moroccan p-6 text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mx-auto mb-4"><Waves className="w-7 h-7" /></div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">Winter (Dec-Feb)</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">Quietest season, 12-18 C. Occasional rain and calmer winds make this best for surfing at Sidi Kaouki. Hotel prices drop 30-50 percent. More intimate atmosphere.</p>
              <div className="mt-3 flex items-center justify-center gap-1 text-sm font-medium text-blue-600"><ThermometerSun className="w-3.5 h-3.5" /> 12-18 C</div>
            </div>
          </div>
        </div>
      </section>

      {/* -- History Timeline -- */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">A Brief History of Essaouira</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">From Phoenician traders to Gnaoua musicians, Essaouira has always been a crossroads of cultures.</p>
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
                <div className="flex-shrink-0"><span className="inline-block px-3 py-1 rounded-lg bg-[var(--color-primary)] text-white text-xs font-bold">{event.year}</span></div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">{event.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Frequently Asked Questions</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">Answers to the most common questions travelers ask about visiting Essaouira.</p>
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
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Explore More of Morocco</h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">Essaouira pairs perfectly with these nearby destinations and related guides.</p>
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
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors"><Icon className="w-5 h-5" /></div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">{link.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-2">{link.description}</p>
                  <span className="text-sm font-semibold text-[var(--color-primary)] flex items-center gap-1 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-3.5 h-3.5" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section className="py-12 md:py-16">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">Ready to Discover Essaouira?</h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">Pack a windbreaker, bring your appetite for fresh fish, and prepare to fall in love with Morocco&apos;s most enchanting coastal city. The Wind City is calling.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cities" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors">
              Explore All Cities <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/tools/planner" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors">
              Plan Your Trip <Calendar className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
`;

appendFileSync(fp, jsx);
console.log('Part 3 written:', jsx.split('\n').length, 'lines');
