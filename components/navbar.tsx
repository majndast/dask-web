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
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="text-xl font-black tracking-tight text-accent group-hover:text-accent-light transition-colors">
            DASK
          </span>
          <span className="hidden sm:block text-[10px] font-semibold tracking-[0.2em] uppercase text-muted border-l border-border pl-3">
            CNC Servis
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-fg2 hover:text-fg transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg text-muted hover:text-fg hover:bg-bg2 transition-all"
              aria-label="Přepnout téma"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          {/* Kontakt CTA – desktop only */}
          <a
            href="#kontakt"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-bg text-sm font-semibold hover:bg-accent-light transition-colors"
          >
            Kontakt
          </a>

          {/* Hamburger – mobile */}
          <button
            className="md:hidden p-2 rounded-lg text-muted hover:text-fg hover:bg-bg2 transition-all"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-border">
          <nav className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-fg2 hover:text-fg transition-colors py-1 font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
