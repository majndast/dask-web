import { ShieldCheck, ExternalLink } from "lucide-react";

export function Lns() {
  return (
    <section className="py-20 px-6 bg-bg2 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl border border-accent/30 bg-card p-10 sm:p-14 overflow-hidden">
          {/* Background decoration */}
          <div
            aria-hidden
            className="absolute -right-16 -top-16 w-72 h-72 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
          />

          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-8">
            {/* Badge */}
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center">
              <ShieldCheck size={32} className="text-accent" />
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="label-sm mb-2">Certifikace</p>
              <h2 className="text-2xl sm:text-3xl font-black text-fg mb-2">
                Certifikované servisní středisko LNS
              </h2>
              <p className="text-fg2 leading-relaxed max-w-xl">
                Od roku 2010 jsme certifikovaným servisním střediskem firmy LNS
                pro Českou a Slovenskou republiku. Zajišťujeme instalace,
                záruční i pozáruční servis a dodávky originálních náhradních
                dílů podavačů LNS.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#kontakt"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-bg text-sm font-bold hover:bg-accent-light transition-all"
            >
              Technická podpora
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
