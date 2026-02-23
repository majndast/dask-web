import { Wrench, Clock, RefreshCcw } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Střední opravy",
    desc: "Opravy kluzných ploch, nástrojových hlav a vřeten. Přetěsnění hydrauliky a výměna pohonů. Mechanický i elektrický servis.",
    items: ["Kluzné plochy", "Nástrojové hlavy", "Vřetena", "Hydraulika", "Pohony"],
  },
  {
    icon: Clock,
    title: "Servis do 24 hodin",
    desc: "Rychlý výjezd k zákazníkovi nebo oprava v naší provozovně ve Vyšeticích. Náhradní díly pro SPT 16/32 skladem.",
    items: ["Výjezd k zákazníkovi", "Oprava v provozovně", "Díly skladem", "Siemens & Fanuc"],
  },
  {
    icon: RefreshCcw,
    title: "Generální opravy",
    desc: "Kompletní mechanické a elektrické renovace obráběcích strojů. Modernizace řídících systémů Siemens 802D / 840Di a Fanuc 0i-TC.",
    items: ["Kompletní renovace", "Modernizace Siemens", "Modernizace Fanuc", "Digitální odměřování"],
  },
];

export function Services() {
  return (
    <section id="sluzby" className="py-24 px-6 bg-bg2">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="label-sm mb-3">Naše služby</p>
          <h2 className="text-4xl sm:text-5xl font-black text-fg tracking-tight leading-tight">
            Co pro vás uděláme
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:border-accent transition-all duration-300 overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(245,158,11,0.06) 0%, transparent 60%)" }}
                />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon size={20} className="text-accent" />
                  </div>

                  {/* Title & desc */}
                  <h3 className="text-xl font-bold text-fg mb-3">{s.title}</h3>
                  <p className="text-fg2 text-sm leading-relaxed mb-6">{s.desc}</p>

                  {/* Feature list */}
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                        <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
