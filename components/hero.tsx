export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col px-6 overflow-hidden">
      {/* Blue glow top-left */}
      <div aria-hidden className="absolute -top-60 -left-40 w-[700px] h-[700px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 65%)" }} />

      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center pt-28 pb-20">
        {/* Top meta row */}
        <div className="flex items-center gap-6 mb-12">
          <span className="chip">Výjezd do 24&nbsp;h</span>
          <span className="font-mono text-[10px] text-muted tracking-[0.2em] uppercase">
            LNS Certifikace&nbsp;·&nbsp;ČR&nbsp;+&nbsp;SR
          </span>
        </div>

        {/* Main content – split */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-end">
          {/* Left */}
          <div>
            <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-black leading-[0.92] tracking-tight text-fg mb-8">
              Servis&nbsp;&amp;<br />
              modernizace<br />
              <span className="text-blue">obráběcích</span><br />
              strojů
            </h1>
            <p className="text-fg2 text-lg leading-relaxed max-w-lg mb-10">
              Opravy SPT&nbsp;16/32, certifikovaný servis LNS, modernizace
              řídících systémů Siemens a&nbsp;Fanuc. Od roku 1999, provozovna
              Vyšetice.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#sluzby"
                className="inline-flex items-center px-6 py-3 bg-blue text-white font-semibold text-sm hover:bg-blue-hi transition-colors">
                Naše služby
              </a>
              <a href="#kontakt"
                className="inline-flex items-center px-6 py-3 border border-border text-fg2 font-semibold text-sm hover:border-blue hover:text-fg transition-colors">
                Kontaktujte nás
              </a>
            </div>
          </div>

          {/* Right – spec panel */}
          <div className="hidden lg:block border border-border bg-card min-w-[260px]">
            <div className="border-b border-border px-5 py-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue" />
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted">
                DASK.SPEC
              </span>
            </div>
            <div className="px-5 py-4 space-y-3">
              {[
                ["Typ", "CNC Servis"],
                ["Stroje", "SPT 16 / SPT 32"],
                ["Systémy", "Siemens · Fanuc"],
                ["Certifikace", "LNS ČR + SR"],
                ["Výjezd", "< 24 hodin"],
                ["Provozovna", "Vyšetice"],
                ["Aktivní od", "1999"],
              ].map(([key, val]) => (
                <div key={key} className="flex justify-between items-baseline gap-4">
                  <span className="font-mono text-[9px] text-muted tracking-[0.12em] uppercase flex-shrink-0">
                    {key}
                  </span>
                  <span className="font-mono text-[11px] text-fg text-right">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom rule with stats */}
        <div className="mt-16 pt-6 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { v: "1999", l: "Rok vzniku" },
            { v: "24h", l: "Výjezd" },
            { v: "LNS", l: "Certifikát" },
            { v: "SPT 16/32", l: "Specializace" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-mono text-xl font-bold text-blue leading-none">{s.v}</div>
              <div className="font-mono text-[9px] text-muted tracking-[0.15em] uppercase mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
