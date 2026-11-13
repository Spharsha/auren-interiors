import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { photo, projects, services, steps } from "./data";

const featured = [projects[0], projects[1], projects[4]];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 sm:pt-8">
          <div className="group relative overflow-hidden bg-walnut">
            <img
              src={photo("photo-1600210492486-724fe5c67fb0", 1600)}
              alt="Warm, modern living room interior"
              width={1600}
              height={1000}
              fetchPriority="high"
              className="h-140 w-full object-cover transition duration-1000 group-hover:scale-105 motion-reduce:transition-none sm:h-160"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-espresso/90 via-espresso/30 to-transparent"
            />

            <div className="absolute bottom-0 left-0 max-w-2xl p-6 text-linen sm:p-12">
              <p className="text-[11px] tracking-[0.35em] text-brass-light">
                INTERIOR DESIGN · CHENNAI
              </p>
              <h1 className="mt-5 font-serif text-5xl leading-[1.05] sm:text-7xl">
                Homes that feel like you.
              </h1>
              <p className="mt-5 max-w-lg text-base leading-8 text-linen/80">
                Warm, practical interiors for Indian families, designed around
                the way you really live.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/projects"
                  className="bg-brass-light px-8 py-4 text-center text-xs tracking-[0.2em] text-espresso transition hover:bg-white"
                >
                  VIEW PROJECTS
                </Link>
                <Link
                  href="/contact"
                  className="border border-linen/60 px-8 py-4 text-center text-xs tracking-[0.2em] transition hover:bg-linen hover:text-espresso"
                >
                  BOOK A CONSULTATION
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-2 md:items-center md:py-28">
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            Design is not just how a space looks.
            <span className="text-brass"> It is how it feels.</span>
          </h2>
          <div>
            <p className="text-base leading-8 text-clay">
              At Auren, we plan every home around your family, your routines and
              your budget. From the first conversation to the final styling, one
              team looks after everything.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-block border-b border-brass pb-1 text-sm tracking-[0.15em]"
            >
              OUR APPROACH →
            </Link>
          </div>
        </section>

        {/* Featured projects */}
        <section className="bg-sand px-5 py-20 sm:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs tracking-[0.3em] text-brass">
                  FEATURED WORK
                </p>
                <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                  Recent spaces
                </h2>
              </div>
              <Link
                href="/projects"
                className="text-sm tracking-[0.15em] underline underline-offset-4"
              >
                ALL PROJECTS →
              </Link>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {featured.map((project) => (
                <Link
                  key={project.id}
                  href="/projects"
                  className="group block"
                  aria-label={project.title}
                >
                  <div className="overflow-hidden bg-linen">
                    <img
                      src={photo(project.image, 800)}
                      alt={project.title}
                      width={800}
                      height={1000}
                      loading="lazy"
                      className="aspect-4/5 w-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none"
                    />
                  </div>
                  <p className="mt-5 text-[11px] tracking-[0.25em] text-brass">
                    {project.room.toUpperCase()}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">{project.title}</h3>
                  <p className="mt-1 text-sm text-clay">{project.place}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <p className="text-xs tracking-[0.3em] text-brass">WHAT WE DO</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Our services</h2>

          <div className="mt-12 border-t border-walnut/15">
            {services.slice(0, 4).map((service) => (
              <div
                key={service.number}
                className="grid gap-3 border-b border-walnut/15 py-8 md:grid-cols-[90px_1fr_1.2fr] md:items-center"
              >
                <span className="text-sm text-brass">{service.number}</span>
                <h3 className="font-serif text-2xl">{service.title}</h3>
                <p className="text-sm leading-7 text-clay">{service.text}</p>
              </div>
            ))}
          </div>

          <Link
            href="/services"
            className="mt-8 inline-block border-b border-brass pb-1 text-sm tracking-[0.15em]"
          >
            SERVICES AND BUDGET ESTIMATOR →
          </Link>
        </section>

        {/* Process */}
        <section className="bg-walnut px-5 py-20 text-linen sm:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs tracking-[0.3em] text-brass-light">
              HOW WE WORK
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Four simple steps
            </h2>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="border-t border-linen/20 pt-6"
                >
                  <p className="font-serif text-4xl text-brass-light">
                    {step.number}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-linen/65">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-20 text-center sm:px-8">
          <p className="text-xs tracking-[0.3em] text-brass">
            LET US CREATE SOMETHING BEAUTIFUL
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
            Your dream space starts with a conversation.
          </h2>
          <Link
            href="/contact"
            className="mt-9 inline-block bg-walnut px-9 py-4 text-xs tracking-[0.2em] text-linen transition hover:bg-brass"
          >
            BOOK A CONSULTATION
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
