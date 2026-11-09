"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-white/10 bg-[#080b18] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-wide"
          onClick={() => setMenuOpen(false)}
        >
          AUREN<span className="text-[#d6c1a1]">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-white/70 transition hover:text-[#d6c1a1]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded border border-white/20 md:hidden"
        >
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-white/10 bg-[#080b18] px-6 py-5 shadow-xl md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-white/80 transition hover:text-[#d6c1a1]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
