export function About() {
  return (
    <section id="o-nas" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-2">
          <span className="font-mono text-[9px] text-muted tracking-[0.2em] uppercase">
            DASK.ABOUT
          </span>
        </div>
        <div className="border-t border-blue/40 mb-12" />

        <div className="grid lg:grid-cols-[1fr_360px] gap-16">
          {/* Left – main text */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-fg tracking-tight leading-tight mb-8">
              25 let zkušeností<br />v&nbsp;oboru
            </h2>
            <div className="space-y-4 text-fg2 leading-relaxed mb-10 max-w-xl">
              <p>
                Firma DASK vznikla v&nbsp;roce 1999 a od té doby se věnuje poradenskému
                a servisnímu zázemí pro obráběcí stroje. Naším cílem jsou co
                nejrychlejší a nejefektivnější opravy – přímo u zákazníka nebo
                v&nbsp;provozovně ve Vyšeticích.
              </p>
              <p>
                Od roku 2010 jsme certifikovaným servisním střediskem LNS pro
                Českou a Slovenskou republiku. Zajišťujeme instalace, záruční
                i&nbsp;pozáruční servis a dodávky originálních náhradních dílů.
              </p>
            </div>

            {/* Quote */}
            <div className="border-l-2 border-blue pl-5">
              <p className="text-fg italic leading-relaxed mb-2 text-sm">
                „Nové automatizační prvky jako digitální odměřování aplikujeme
                i na starší stroje – prodloužíme jejich životnost a zvýšíme
                přesnost."
              </p>
              <span className="font-mono text-[10px] text-muted tracking-[0.12em] uppercase">
                Petr Tupý — servisní technik
              </span>
            </div>
          </div>

          {/* Right – data table */}
          <div className="border border-border bg-card">
            <div className="border-b border-border px-5 py-3">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted">
                DASK.PROFILE
              </span>
            </div>
            <table className="w-full">
              <tbody>
                {[
                  ["Rok vzniku", "1999"],
                  ["Sídlo", "Vyšetice, ČR"],
                  ["Zaměření", "Obráběcí stroje"],
                  ["Certifikace", "LNS (od 2010)"],
                  ["Pokrytí", "ČR + SR"],
                  ["Výjezd", "do 24 hodin"],
                  ["Systémy", "Siemens, Fanuc"],
                  ["Stroje", "SPT 16, SPT 32"],
                ].map(([k, v], i, arr) => (
                  <tr key={k} className={i < arr.length - 1 ? "border-b border-border" : ""}>
                    <td className="px-5 py-3 font-mono text-[9px] text-muted tracking-[0.12em] uppercase">
                      {k}
                    </td>
                    <td className="px-5 py-3 font-mono text-[11px] text-fg text-right">
                      {v}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
