export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg2">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <span className="text-2xl font-black text-accent tracking-tight">DASK</span>
            <p className="text-muted text-xs mt-2 leading-relaxed max-w-xs">
              Servis a modernizace obráběcích strojů od roku 1999.
              Certifikované servisní středisko LNS.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-4">
              Navigace
            </p>
            <ul className="space-y-2.5">
              {[
                ["Služby", "#sluzby"],
                ["O nás", "#o-nas"],
                ["Reference", "#reference"],
                ["Náhradní díly", "#nahradni-dily"],
                ["Kontakt", "#kontakt"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-fg2 hover:text-accent transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-4">
              Kontakt
            </p>
            <div className="space-y-2">
              <a
                href="tel:+420728541353"
                className="block text-sm text-fg2 hover:text-accent transition-colors"
              >
                +420 728 541 353
              </a>
              <p className="text-sm text-muted">Petr Tupý</p>
              <p className="text-sm text-muted">Vyšetice</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">
            © {year} DASK. Všechna práva vyhrazena.
          </p>
          <p className="text-xs text-muted">
            Servis CNC obráběcích strojů · Vyšetice · ČR
          </p>
        </div>
      </div>
    </footer>
  );
}
