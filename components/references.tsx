const projects = [
  {
    id: "REF-001",
    title: "SPT32NC FANUC",
    system: "Fanuc 0i-TC",
    specs: [
      { k: "Pohony", v: "Beta HV Series" },
      { k: "Display", v: "Barevná LCD" },
      { k: "Rychloposuv", v: "12 m/min" },
      { k: "Typ", v: "Modernizace" },
    ],
  },
  {
    id: "REF-002",
    title: "SPT16NC SIEMENS",
    system: "Siemens 802D sl",
    specs: [
      { k: "Pohony", v: "Simodrive 611" },
      { k: "Vřeteno", v: "22 kW" },
      { k: "Rychloposuv", v: "16 m/min" },
      { k: "Typ", v: "Modernizace" },
    ],
  },
  {
    id: "TRN-001",
    title: "Školení obsluhy",
    system: "Siemens / Fanuc",
    specs: [
      { k: "Systémy", v: "802D, 840Di" },
      { k: "Apps", v: "ShopTurn / ShopMill" },
      { k: "Série", v: "Fanuc 0i" },
      { k: "Typ", v: "Vzdělávání" },
    ],
  },
];

export function References() {
  return (
    <section id="reference" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-2">
          <span className="font-mono text-[9px] text-muted tracking-[0.2em] uppercase">
            DASK.REFERENCES
          </span>
        </div>
        <div className="border-t border-blue/40 mb-12" />
        <h2 className="text-4xl sm:text-5xl font-black text-fg tracking-tight mb-16">
          Realizované projekty
        </h2>

        {/* Table header */}
        <div className="hidden md:grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr] gap-4 px-4 pb-3 border-b border-border">
          {["ID", "Projekt", "Systém", "Pohony / Výkon", "Rychloposuv", "Typ"].map((h) => (
            <span key={h} className="font-mono text-[9px] text-muted tracking-[0.12em] uppercase">{h}</span>
          ))}
        </div>

        {/* Table rows */}
        {projects.map((p, i) => (
          <div key={p.id}
            className={`group grid md:grid-cols-[120px_1fr_1fr_1fr_1fr_1fr] gap-4 px-4 py-5 items-center border-b border-border hover:bg-bg2 transition-colors ${i === 0 ? "border-t" : ""}`}>
            {/* ID */}
            <span className="font-mono text-[10px] text-blue tracking-[0.1em]">{p.id}</span>
            {/* Title */}
            <span className="font-semibold text-fg text-sm">{p.title}</span>
            {/* System */}
            <span className="font-mono text-[11px] text-fg2">{p.system}</span>
            {/* Specs flattened */}
            {p.specs.slice(0, 3).map((s) => (
              <span key={s.k} className="font-mono text-[11px] text-fg2 hidden md:block">{s.v}</span>
            ))}
            {/* Mobile specs */}
            <div className="md:hidden col-span-full flex flex-wrap gap-2 mt-2">
              {p.specs.map((s) => (
                <span key={s.k} className="chip">{s.k}: {s.v}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
