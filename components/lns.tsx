import { ShieldCheck } from "lucide-react";

export function Lns() {
  return (
    <section className="py-20 px-6 bg-bg2">
      <div className="max-w-6xl mx-auto">
        <div className="border border-blue/25 bg-card">
          {/* Top bar */}
          <div className="border-b border-border px-6 sm:px-10 py-4 flex items-center gap-3">
            <span className="w-2 h-2 bg-blue" />
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted">
              CERT.LNS.2010
            </span>
          </div>

          <div className="px-6 sm:px-10 py-8 sm:py-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            {/* Icon */}
            <div className="w-14 h-14 border border-blue/30 bg-blue/5 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={28} className="text-blue" />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h2 className="text-2xl font-black text-fg mb-2">
                Certifikované servisní středisko LNS
              </h2>
              <p className="text-fg2 text-sm leading-relaxed max-w-xl">
                Od roku 2010 jsme autorizovaným servisním střediskem LNS pro
                Českou a Slovenskou republiku. Instalace, záruční i pozáruční
                servis, originální náhradní díly podavačů LNS.
              </p>
            </div>

            {/* CTA */}
            <a href="#kontakt"
              className="flex-shrink-0 inline-flex items-center px-5 py-2.5 border border-blue text-blue font-mono text-[10px] tracking-[0.15em] uppercase hover:bg-blue hover:text-white transition-colors">
              Technická podpora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
