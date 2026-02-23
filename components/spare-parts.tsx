import { Package, ArrowRight } from "lucide-react";

const parts = [
  {
    category: "Snímače a spínače",
    items: [
      { name: "IRC 120/1250 – inkrementální snímač", price: "5 800 Kč" },
      { name: "Spínač s kladkou (koncový)", price: "298 Kč" },
      { name: "Uhlíkový kartáč vřetene", price: "148 Kč" },
    ],
  },
  {
    category: "Monitory a zobrazovače",
    items: [
      { name: "Monitor HEIDENHAIN TNC 407–426", price: "14 500 Kč" },
      { name: "LCD konverze pro TNC monitory", price: "11 200 Kč" },
      { name: "VGA převodník pro CNC", price: "4 200 Kč" },
    ],
  },
  {
    category: "Siemens příslušenství",
    items: [
      { name: "Vřetenový motor (skladem)", price: "na dotaz" },
      { name: "Klávesnice SIEMENS 802D", price: "na dotaz" },
      { name: "Ruční kolečko SIEMENS", price: "na dotaz" },
    ],
  },
];

export function SpareParts() {
  return (
    <section id="nahradni-dily" className="py-24 px-6 bg-bg2">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="label-sm mb-3">Sklad</p>
            <h2 className="text-4xl sm:text-5xl font-black text-fg tracking-tight leading-tight">
              Náhradní díly
            </h2>
          </div>
          <p className="text-fg2 max-w-xs text-sm leading-relaxed">
            Díly pro SPT 16/32, HEIDENHAIN a Siemens skladem. Ceny bez DPH.
            Pro objednávku nebo poptávku nás kontaktujte.
          </p>
        </div>

        {/* Parts grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {parts.map((cat) => (
            <div key={cat.category} className="bg-card border border-border rounded-2xl overflow-hidden">
              {/* Category header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-bg2">
                <Package size={14} className="text-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-muted">
                  {cat.category}
                </span>
              </div>

              {/* Items */}
              <ul className="divide-y divide-border">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between px-6 py-4 gap-4">
                    <span className="text-sm text-fg2 leading-snug">{item.name}</span>
                    <span className="text-sm font-bold text-accent whitespace-nowrap flex-shrink-0">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-accent text-accent font-semibold text-sm hover:bg-accent hover:text-bg transition-all"
          >
            Poptat náhradní díl
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
