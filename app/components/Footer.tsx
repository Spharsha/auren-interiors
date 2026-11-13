import Link from "next/link";

const socialClass =
  "flex h-10 w-10 items-center justify-center border border-linen/25 text-linen/70 transition hover:border-brass-light hover:text-brass-light";

export default function Footer() {
  return (
    <footer className="bg-espresso px-5 py-14 text-linen sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-linen/10 pb-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-3xl tracking-[0.2em]">
              AUREN<span className="text-brass-light">.</span>
            </p>
            <p className="mt-1 text-[10px] tracking-[0.3em] text-linen/50">
              INTERIORS · CHENNAI
            </p>
            <p className="mt-5 max-w-xs text-sm leading-7 text-linen/55">
              Warm, practical interiors for Indian homes and workplaces.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs tracking-[0.25em] text-brass-light">
              EXPLORE
            </h3>
            <div className="flex flex-col gap-3 text-sm text-linen/65">
              <Link href="/projects" className="transition hover:text-white">
                Projects
              </Link>
              <Link href="/services" className="transition hover:text-white">
                Services and estimator
              </Link>
              <Link href="/about" className="transition hover:text-white">
                About
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs tracking-[0.25em] text-brass-light">
              FOLLOW
            </h3>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className={socialClass}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className={socialClass}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.6V13h2.8v8h3.1z" />
                </svg>
              </a>
              <a href="#" aria-label="Pinterest" className={socialClass}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="9" />
                  <text
                    x="12"
                    y="16.5"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fontFamily="Georgia, serif"
                    fill="currentColor"
                    stroke="none"
                  >
                    P
                  </text>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-8 text-xs text-linen/45 md:flex-row">
          <p>© 2026 Auren Interiors. All rights reserved.</p>
          <p className="text-brass-light">Demo website · Sample content</p>
        </div>
      </div>
    </footer>
  );
}
