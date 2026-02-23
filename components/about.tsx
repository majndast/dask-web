import { Award, MapPin, Phone } from "lucide-react";

export function About() {
  return (
    <section id="o-nas" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – text */}
          <div>
            <p className="label-sm mb-3">O firmě</p>
            <h2 className="text-4xl sm:text-5xl font-black text-fg tracking-tight leading-tight mb-6">
              25 let zkušeností v oboru
            </h2>
            <p className="text-fg2 leading-relaxed mb-4">
              Firma DASK vznikla v&nbsp;roce 1999 a od té doby se věnuje
              poradenskému a servisnímu zázemí pro obráběcí stroje. Naším
              cílem jsou co nejrychlejší a nejefektivnější opravy – přímo
              u&nbsp;zákazníka nebo v naší provozovně ve Vyšeticích.
            </p>
            <p className="text-fg2 leading-relaxed mb-8">
              Od roku 2010 zajišťujeme jako certifikované servisní středisko
              instalace, záruční a pozáruční servis a dodávky náhradních dílů
              LNS pro Českou a Slovenskou republiku.
            </p>

            {/* Quote */}
            <blockquote className="border-l-2 border-accent pl-5 py-1">
              <p className="text-fg italic leading-relaxed mb-2">
                „Nové automatizační prvky jako digitální odměřování
                aplikujeme i na starší stroje – prodloužíme jejich životnost
                a zvýšíme přesnost."
              </p>
              <cite className="text-sm text-muted not-italic font-semibold">
                Petr Tupý — servisní technik DASK
              </cite>
            </blockquote>
          </div>

          {/* Right – info cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Award,
                title: "Certifikát LNS",
                desc: "Certifikované servisní středisko LNS pro ČR a SR od roku 2010.",
              },
              {
                icon: MapPin,
                title: "Provozovna",
                desc: "Opravujeme u zákazníka nebo ve vlastní provozovně ve Vyšeticích.",
              },
              {
                icon: Phone,
                title: "Dostupnost 24/7",
                desc: "Výjezd k zákazníkovi do 24 hodin. Náhradní díly skladem.",
              },
              {
                icon: Award,
                title: "Siemens & Fanuc",
                desc: "Školení a servis Siemens 802D, 840Di a Fanuc 0i-TC.",
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-fg mb-1.5 text-sm">{card.title}</h3>
                  <p className="text-muted text-xs leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
