import { ArrowDown, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Decorative amber glow */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07] dark:opacity-[0.12]"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wider uppercase">
              <Zap size={10} />
              Výjezd do 24 hodin
            </span>
            <span className="text-muted text-xs uppercase tracking-widest font-medium">
              Est. 1999
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-fg mb-6">
            Servis a modernizace{" "}
            <span className="text-accent">obráběcích</span>{" "}
            strojů
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-fg2 max-w-xl leading-relaxed mb-10">
            Opravy, modernizace a náhradní díly pro SPT&nbsp;16/32.
            Certifikované servisní středisko LNS pro Českou
            a Slovenskou republiku.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#sluzby"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-bg font-bold text-sm hover:bg-accent-light transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Naše služby
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border text-fg2 font-semibold text-sm hover:border-accent hover:text-fg transition-all"
            >
              Kontaktujte nás
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-24 pt-8 border-t border-border flex flex-wrap gap-8 items-center">
          {[
            { value: "1999", label: "Rok založení" },
            { value: "24h", label: "Výjezd k zákazníkovi" },
            { value: "LNS", label: "Certifikovaný servis" },
            { value: "SPT 16/32", label: "Specializace" },
          ].map((s) => (
            <div key={s.value} className="flex flex-col">
              <span className="text-2xl font-black text-accent leading-none">
                {s.value}
              </span>
              <span className="text-xs text-muted mt-1 uppercase tracking-widest font-medium">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#sluzby"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted hover:text-fg2 transition-colors"
        aria-label="Přejít na služby"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">
          Scroll
        </span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
