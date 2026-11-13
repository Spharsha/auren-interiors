"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close menu automatically whenever pathname changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Handle body scroll lock & Escape key
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-walnut/10 bg-linen/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="font-serif text-2xl tracking-[0.2em]">
            AUREN<span className="text-brass">.</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden border border-walnut px-5 py-2.5 text-xs tracking-[0.2em] transition hover:bg-walnut hover:text-linen sm:block"
            >
              BOOK A CONSULTATION
            </Link>

            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="full-menu"
              onClick={() => setOpen(true)}
              className="flex h-11 items-center gap-3 border border-walnut/40 px-4 text-xs tracking-[0.2em] transition hover:bg-walnut hover:text-linen"
            >
              MENU
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="h-5 w-5"
              >
                <path d="M4 9h16M4 15h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="full-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-espresso text-linen animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between px-5 py-4 sm:px-8">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-serif text-2xl tracking-[0.2em]"
            >
              AUREN<span className="text-brass-light">.</span>
            </Link>

            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center gap-3 border border-linen/30 px-4 text-xs tracking-[0.2em] transition hover:bg-linen hover:text-espresso"
            >
              CLOSE
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="h-5 w-5"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav
            aria-label="Main"
            className="flex flex-1 flex-col justify-center px-5 py-8 sm:px-8 lg:px-16"
          >
            {links.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-5 border-b border-linen/10 py-4 sm:py-5"
                >
                  <span className="text-xs tracking-[0.2em] text-brass-light">
                    0{index + 1}
                  </span>
                  <span
                    className={`font-serif text-3xl transition group-hover:translate-x-2 group-hover:text-brass-light sm:text-6xl ${
                      isActive ? "text-brass-light" : "text-linen"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col justify-between gap-2 px-5 py-6 text-xs tracking-wide text-linen/60 sm:flex-row sm:px-8 lg:px-16">
            <p>Chennai · Mon – Sat, 10 AM – 7 PM</p>
            <p>Demo website · Sample content</p>
          </div>
        </div>
      )}
    </>
  );
}
