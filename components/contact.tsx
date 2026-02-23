"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const inputCls = "w-full bg-bg border border-border px-4 py-2.5 text-sm text-fg placeholder:text-muted focus:border-blue focus:outline-none transition-colors font-mono";
const labelCls = "block font-mono text-[9px] tracking-[0.15em] uppercase text-muted mb-1.5";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-2">
          <span className="font-mono text-[9px] text-muted tracking-[0.2em] uppercase">
            DASK.CONTACT
          </span>
        </div>
        <div className="border-t border-blue/40 mb-12" />

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-black text-fg tracking-tight leading-tight mb-6">
              Napište nám
            </h2>
            <p className="text-fg2 text-sm leading-relaxed mb-10">
              Servis, náhradní díl nebo technická konzultace — ozvěte se.
            </p>

            <div className="space-y-5">
              <div>
                <div className="font-mono text-[9px] text-muted tracking-[0.15em] uppercase mb-1">Telefon</div>
                <a href="tel:+420728541353"
                  className="font-mono text-sm text-fg hover:text-blue transition-colors">
                  +420 728 541 353
                </a>
                <div className="font-mono text-[10px] text-muted mt-0.5">Petr Tupý</div>
              </div>
              <div>
                <div className="font-mono text-[9px] text-muted tracking-[0.15em] uppercase mb-1">Provozovna</div>
                <div className="font-mono text-sm text-fg">Vyšetice</div>
                <div className="font-mono text-[10px] text-muted mt-0.5">Příjem strojů i výjezdy</div>
              </div>
              <div>
                <div className="font-mono text-[9px] text-muted tracking-[0.15em] uppercase mb-1">Dostupnost</div>
                <div className="font-mono text-sm text-fg">Výjezd do 24&nbsp;h</div>
              </div>
            </div>
          </div>

          {/* Right – form */}
          <div className="border border-border bg-card">
            <div className="border-b border-border px-6 py-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue" />
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted">
                DASK.FORM
              </span>
            </div>

            {status === "success" ? (
              <div className="px-6 py-16 flex flex-col items-center text-center gap-4">
                <CheckCircle size={40} className="text-blue" />
                <h3 className="text-lg font-bold text-fg">Zpráva odeslána</h3>
                <p className="text-fg2 text-sm">Ozveme se vám co nejdříve.</p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", message: "" }); }}
                  className="font-mono text-[10px] tracking-[0.15em] uppercase text-blue hover:text-blue-hi transition-colors mt-2">
                  Odeslat další →
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="px-6 py-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Jméno *</label>
                    <input name="name" value={form.name} onChange={onChange} required
                      placeholder="Jan Novák" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={onChange} required
                      placeholder="jan@firma.cz" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Telefon</label>
                  <input name="phone" type="tel" value={form.phone} onChange={onChange}
                    placeholder="+420 600 000 000" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Zpráva *</label>
                  <textarea name="message" value={form.message} onChange={onChange} required rows={5}
                    placeholder="Typ stroje, závada, poptávaný díl..."
                    className={`${inputCls} resize-none`} />
                </div>
                {status === "error" && (
                  <div className="flex items-center gap-2 text-xs text-red-400 font-mono">
                    <AlertCircle size={12} />
                    Odesílání selhalo. Zavolejte prosím přímo.
                  </div>
                )}
                <button type="submit" disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-blue text-white font-mono text-[10px] tracking-[0.15em] uppercase hover:bg-blue-hi transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === "loading" ? (
                    <>
                      <span className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" />
                      Odesílám...
                    </>
                  ) : (
                    <><Send size={12} />Odeslat zprávu</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
