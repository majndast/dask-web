const services = [
  {
    num: "01",
    title: "Střední opravy",
    desc: "Opravy kluzných ploch, nástrojových hlav a vřeten. Přetěsnění hydrauliky, výměna pohonů. Mechanický i elektrický servis na místě.",
    tags: ["Kluzné plochy", "Nástrojové hlavy", "Vřetena", "Hydraulika", "Pohony"],
  },
  {
    num: "02",
    title: "Servis do 24 hodin",
    desc: "Výjezd k zákazníkovi nebo oprava v provozovně ve Vyšeticích. Náhradní díly SPT 16/32 skladem pro okamžitou opravu.",
    tags: ["Výjezd k zákazníkovi", "Provozovna Vyšetice", "Díly skladem", "Siemens · Fanuc"],
  },
  {
    num: "03",
    title: "Generální opravy",
    desc: "Kompletní mechanická a elektrická renovace. Modernizace řídících systémů Siemens 802D / 840Di a Fanuc 0i-TC včetně digitálního odměřování.",
    tags: ["Kompletní renovace", "Siemens 802D / 840Di", "Fanuc 0i-TC", "Digitální odměřování"],
  },
];

export function Services() {
  return (
    <section id="sluzby" className="py-24 px-6 bg-bg2">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-2">
          <span className="font-mono text-[9px] text-muted tracking-[0.2em] uppercase">
            DASK.SERVICES
          </span>
        </div>
        <div className="border-t border-blue/40 mb-12" />
        <h2 className="text-4xl sm:text-5xl font-black text-fg tracking-tight mb-16">
          Co pro vás uděláme
        </h2>

        {/* Numbered list */}
        <div className="space-y-0">
          {services.map((s, i) => (
            <div key={s.num}
              className={`group grid md:grid-cols-[80px_1fr_auto] gap-6 md:gap-10 py-10 border-t border-border hover:border-blue/30 transition-colors ${i === services.length - 1 ? "border-b" : ""}`}>
              {/* Number */}
              <div className="font-mono text-4xl font-black text-border group-hover:text-blue/30 transition-colors leading-none pt-1 select-none">
                {s.num}
              </div>
              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-fg mb-3">{s.title}</h3>
                <p className="text-fg2 text-sm leading-relaxed max-w-xl">{s.desc}</p>
              </div>
              {/* Tags */}
              <div className="flex flex-wrap md:flex-col gap-2 items-start md:items-end md:justify-start pt-1">
                {s.tags.map((tag) => (
                  <span key={tag} className="chip whitespace-nowrap">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
