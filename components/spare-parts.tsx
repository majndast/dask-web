const parts = [
  { id: "S-001", name: "IRC 120/1250 – inkrementální snímač", cat: "Snímače", price: "5 800 Kč", stock: "Skladem" },
  { id: "S-002", name: "Spínač s kladkou (koncový)", cat: "Snímače", price: "298 Kč", stock: "Skladem" },
  { id: "S-003", name: "Uhlíkový kartáč vřetene", cat: "Snímače", price: "148 Kč", stock: "Skladem" },
  { id: "M-001", name: "Monitor HEIDENHAIN TNC 407–426", cat: "Monitory", price: "14 500 Kč", stock: "Skladem" },
  { id: "M-002", name: "LCD konverze pro TNC monitory", cat: "Monitory", price: "11 200 Kč", stock: "Skladem" },
  { id: "M-003", name: "VGA převodník pro CNC", cat: "Monitory", price: "4 200 Kč", stock: "Skladem" },
  { id: "T-001", name: "Vřetenový motor", cat: "Siemens", price: "Na dotaz", stock: "Skladem" },
  { id: "T-002", name: "Klávesnice SIEMENS 802D", cat: "Siemens", price: "Na dotaz", stock: "Skladem" },
  { id: "T-003", name: "Ruční kolečko SIEMENS", cat: "Siemens", price: "Na dotaz", stock: "Skladem" },
];

export function SpareParts() {
  return (
    <section id="nahradni-dily" className="py-24 px-6 bg-bg2">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-2">
          <span className="font-mono text-[9px] text-muted tracking-[0.2em] uppercase">
            DASK.INVENTORY
          </span>
          <span className="font-mono text-[9px] text-muted">Ceny bez DPH</span>
        </div>
        <div className="border-t border-blue/40 mb-12" />
        <h2 className="text-4xl sm:text-5xl font-black text-fg tracking-tight mb-16">
          Náhradní díly
        </h2>

        {/* Table */}
        <div className="border border-border bg-card overflow-hidden mb-8">
          {/* Header */}
          <div className="grid grid-cols-[60px_1fr_80px_120px_80px] gap-4 px-5 py-3 border-b border-border bg-bg2">
            {["ID", "Název dílu", "Kategorie", "Cena", "Dostupnost"].map((h) => (
              <span key={h} className="font-mono text-[9px] text-muted tracking-[0.1em] uppercase">{h}</span>
            ))}
          </div>
          {/* Rows */}
          {parts.map((p, i) => (
            <div key={p.id}
              className={`grid grid-cols-[60px_1fr_80px_120px_80px] gap-4 px-5 py-3.5 items-center hover:bg-bg2 transition-colors ${i < parts.length - 1 ? "border-b border-border" : ""}`}>
              <span className="font-mono text-[10px] text-blue tracking-[0.08em]">{p.id}</span>
              <span className="text-sm text-fg leading-snug">{p.name}</span>
              <span className="font-mono text-[10px] text-muted hidden sm:block">{p.cat}</span>
              <span className="font-mono text-[11px] text-fg font-semibold">{p.price}</span>
              <span className="font-mono text-[10px] text-cyan hidden sm:block">{p.stock}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted">
            Nenašli jste hledaný díl? Kontaktujte nás.
          </p>
          <a href="#kontakt"
            className="inline-flex items-center px-5 py-2.5 border border-blue text-blue font-mono text-[10px] tracking-[0.15em] uppercase hover:bg-blue hover:text-white transition-colors">
            Poptat díl →
          </a>
        </div>
      </div>
    </section>
  );
}
