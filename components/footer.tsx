export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg2">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid sm:grid-cols-3 gap-10 mb-8">
          <div>
            <span className="font-mono text-sm font-bold tracking-[0.22em] text-fg uppercase">DASK</span>
            <p className="font-mono text-[10px] text-muted tracking-[0.1em] mt-2 leading-relaxed">
              Servis obráběcích strojů od 1999.<br />Certifikát LNS · ČR + SR.
            </p>
          </div>
          <div>
            <p className="font-mono text-[9px] text-muted tracking-[0.2em] uppercase mb-4">Navigace</p>
            <ul className="space-y-2">
              {[["Služby","#sluzby"],["O nás","#o-nas"],["Reference","#reference"],["Náhradní díly","#nahradni-dily"],["Kontakt","#kontakt"]].map(([l,h]) => (
                <li key={h}>
                  <a href={h} className="font-mono text-[11px] text-fg2 hover:text-blue transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[9px] text-muted tracking-[0.2em] uppercase mb-4">Kontakt</p>
            <div className="space-y-1.5">
              <a href="tel:+420728541353" className="block font-mono text-[11px] text-fg2 hover:text-blue transition-colors">+420 728 541 353</a>
              <p className="font-mono text-[11px] text-muted">Petr Tupý</p>
              <p className="font-mono text-[11px] text-muted">Vyšetice, ČR</p>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[10px] text-muted">© {year} DASK</p>
          <p className="font-mono text-[10px] text-muted">CNC Servis · Vyšetice · ČR</p>
        </div>
      </div>
    </footer>
  );
}
