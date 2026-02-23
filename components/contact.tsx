"use client";

import { useState } from "react";
import { Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
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
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left – info (2 col) */}
          <div className="lg:col-span-2">
            <p className="label-sm mb-3">Kontakt</p>
            <h2 className="text-4xl sm:text-5xl font-black text-fg tracking-tight leading-tight mb-6">
              Napište nám
            </h2>
            <p className="text-fg2 leading-relaxed mb-10">
              Potřebujete servis, náhradní díl nebo technickou konzultaci?
              Ozvěte se nám — rádi poradíme.
            </p>

            <div className="space-y-6">
              <a
                href="tel:+420728541353"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-0.5">
                    Telefon
                  </p>
                  <p className="text-fg font-semibold group-hover:text-accent transition-colors">
                    +420 728 541 353
                  </p>
                  <p className="text-xs text-muted">Petr Tupý – servisní technik</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-0.5">
                    Provozovna
                  </p>
                  <p className="text-fg font-semibold">Vyšetice</p>
                  <p className="text-xs text-muted">Příjem strojů i výjezd k zákazníkovi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right – form (3 col) */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-8 bg-card border border-accent/30 rounded-2xl">
                <CheckCircle size={48} className="text-accent mb-4" />
                <h3 className="text-xl font-bold text-fg mb-2">Zpráva odeslána!</h3>
                <p className="text-fg2 text-sm max-w-sm">
                  Děkujeme za zprávu. Ozveme se vám co nejdříve.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", message: "" }); }}
                  className="mt-6 text-sm text-accent hover:text-accent-light transition-colors font-semibold"
                >
                  Odeslat další zprávu
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-2xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-muted uppercase tracking-widest mb-2">
                      Jméno *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jan Novák"
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted uppercase tracking-widest mb-2">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jan@firma.cz"
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted uppercase tracking-widest mb-2">
                    Telefon
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+420 600 000 000"
                    className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted uppercase tracking-widest mb-2">
                    Zpráva *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Popište váš požadavek – typ stroje, závada, poptávaný díl..."
                    className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm text-red-500">
                    <AlertCircle size={14} />
                    Odesílání se nezdařilo. Zkuste to znovu nebo zavolejte.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent text-bg font-bold text-sm hover:bg-accent-light transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                      Odesílám...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Odeslat zprávu
                    </>
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
