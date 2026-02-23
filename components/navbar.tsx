"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Služby", href: "#sluzby" },
  { label: "O nás", href: "#o-nas" },
  { label: "Reference", href: "#reference" },
  { label: "Náhradní díly", href: "#nahradni-dily" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-bg/95 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="font-mono text-sm font-bold tracking-[0.22em] text-fg uppercase group-hover:text-blue transition-colors">
            DASK
          </span>
          <span className="hidden sm:block font-mono text-[9px] text-muted tracking-[0.18em] uppercase border-l border-border pl-3">
            CNC&nbsp;·&nbsp;EST.&nbsp;1999
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted hover:text-fg transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          {mounted && (
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-muted hover:text-fg hover:bg-bg2 transition-all" aria-label="Přepnout téma">
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          )}
          <a href="#kontakt"
            className="hidden md:inline-flex items-center px-4 py-2 bg-blue text-white font-mono text-[10px] tracking-[0.15em] uppercase hover:bg-blue-hi transition-colors">
            Kontakt
          </a>
          <button className="md:hidden p-2 text-muted hover:text-fg transition-all" onClick={() => setOpen(!open)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-bg border-b border-border">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted hover:text-fg py-1 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
