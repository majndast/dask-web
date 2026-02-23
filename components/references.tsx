import { Cpu, Layers, GraduationCap } from "lucide-react";

const projects = [
  {
    icon: Cpu,
    tag: "Fanuc",
    title: "SPT32NC FANUC",
    specs: [
      "Řídící systém Fanuc 0i-TC",
      "Pohony Beta HV Series",
      "Barevná LCD obrazovka",
      "Rychloposuv 12 m/min",
    ],
  },
  {
    icon: Layers,
    tag: "Siemens",
    title: "SPT16NC SIEMENS",
    specs: [
      "Siemens 802D sl",
      "Pohony Simodrive 611",
      "Vřeteno 22 kW",
      "Rychloposuv 16 m/min",
    ],
  },
  {
    icon: GraduationCap,
    tag: "Vzdělávání",
    title: "Školení obsluhy",
    specs: [
      "Siemens 802D a 840Di",
      "ShopTurn / ShopMill",
      "Fanuc 0i série",
      "Servis i obsluha",
    ],
  },
];

export function References() {
  return (
    <section id="reference" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="label-sm mb-3">Reference</p>
          <h2 className="text-4xl sm:text-5xl font-black text-fg tracking-tight leading-tight">
            Realizované projekty
          </h2>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-300"
              >
                {/* Number + icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-5xl font-black text-border group-hover:text-accent/20 transition-colors leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon size={18} className="text-accent" />
                  </div>
                </div>

                {/* Tag */}
                <span className="inline-block px-2 py-0.5 rounded-md bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-3">
                  {p.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-fg mb-5">{p.title}</h3>

                {/* Specs */}
                <ul className="space-y-2.5">
                  {p.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-3 text-sm text-fg2">
                      <span className="w-px h-4 bg-accent/50 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
