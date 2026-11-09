import Link from "next/link";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
const projects = [
  {
    title: "Modern Luxury Residence",
    category: "RESIDENTIAL",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Contemporary Living Space",
    category: "LIVING ROOM",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Elegant Dining Interior",
    category: "DINING",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Minimal Bedroom Design",
    category: "BEDROOM",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Modern Kitchen Design",
    category: "KITCHEN",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Luxury Interior Concept",
    category: "INTERIOR DESIGN",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
];

const services = [
  {
    number: "01",
    title: "Residential Design",
    description:
      "Thoughtfully designed homes that reflect your personality and lifestyle.",
  },
  {
    number: "02",
    title: "Commercial Spaces",
    description:
      "Inspiring workspaces and commercial interiors built around your vision.",
  },
  {
    number: "03",
    title: "Space Planning",
    description:
      "Smart layouts that bring together functionality, comfort and elegance.",
  },
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#f8f7f4] text-[#25251f]">
      <Header />
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="text-2xl font-semibold tracking-[0.18em]">
          AUREN<span className="text-[#a58b67]">.</span>
          <span className="ml-2 text-xs font-normal tracking-[0.25em]">
            INTERIORS
          </span>
        </Link>

        <div className="hidden items-center gap-9 text-sm md:flex">
          <Link href="#about" className="transition hover:text-[#a58b67]">
            About
          </Link>
          <Link href="/projects" className="transition hover:text-[#a58b67]">
            Projects
          </Link>
          <Link href="#services" className="transition hover:text-[#a58b67]">
            Services
          </Link>
          <Link href="#contact" className="transition hover:text-[#a58b67]">
            Contact
          </Link>
        </div>

        <Link
          href="#contact"
          className="border border-[#25251f] px-5 py-3 text-xs tracking-widest transition hover:bg-[#25251f] hover:text-white"
        >
          LET'S TALK
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative mx-5 min-h-[620px] overflow-hidden bg-[#39372f] md:mx-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(20,20,17,0.75), rgba(20,20,17,0.12)), url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90')",
          }}
        />

        <div className="relative z-10 flex min-h-[620px] max-w-7xl flex-col justify-center px-8 py-20 text-white md:px-20">
          <p className="mb-7 text-xs tracking-[0.4em] text-[#d6c1a1]">
            THOUGHTFUL SPACES. TIMELESS DESIGN.
          </p>

          <h1 className="max-w-3xl text-5xl leading-[1.12] font-light tracking-tight md:text-7xl">
            Spaces that
            <br />
            tell your <span className="italic text-[#d6c1a1]">story.</span>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-8 text-white/75">
            We create beautifully considered interiors that bring elegance,
            comfort and personality into everyday living.
          </p>

          <Link
            href="/projects"
            className="mt-10 w-fit border border-white/70 px-8 py-4 text-xs tracking-[0.2em] transition hover:bg-white hover:text-black"
          >
            EXPLORE OUR WORK →
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-14 px-6 py-28 md:grid-cols-2 md:items-center lg:px-10"
      >
        <div>
          <p className="mb-5 text-xs tracking-[0.3em] text-[#a58b67]">
            ABOUT AUREN
          </p>

          <h2 className="text-4xl leading-tight font-light md:text-5xl">
            Design is not just
            <br />
            how a space looks.
            <br />
            It's how it <span className="italic">feels.</span>
          </h2>
        </div>

        <div>
          <p className="text-base leading-8 text-[#77766f]">
            At Auren Interiors, we believe every space has a story waiting to be
            told. Our approach combines thoughtful planning, timeless materials
            and carefully selected details to create interiors that feel truly
            personal.
          </p>

          <p className="mt-5 text-base leading-8 text-[#77766f]">
            From the first concept to the finishing touches, we make every
            detail count.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-block border-b border-[#a58b67] pb-2 text-sm tracking-wider"
          >
            DISCOVER OUR APPROACH →
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-[#efeee9] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs tracking-[0.3em] text-[#a58b67]">
                SELECTED WORK
              </p>

              <h2 className="text-4xl font-light md:text-5xl">
                Spaces we've created.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#77766f]">
              A collection of thoughtfully designed spaces where beauty meets
              everyday functionality.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="group">
                <div className="overflow-hidden bg-[#dedbd3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <p className="mt-6 text-xs tracking-[0.2em] text-[#a58b67]">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-light">{project.title}</h3>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/projects"
              className="inline-block border border-[#25251f] px-9 py-4 text-xs tracking-[0.2em] transition hover:bg-[#25251f] hover:text-white"
            >
              VIEW ALL PROJECTS →
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="mb-14">
          <p className="mb-4 text-xs tracking-[0.3em] text-[#a58b67]">
            WHAT WE DO
          </p>
          <h2 className="text-4xl font-light md:text-5xl">Our expertise.</h2>
        </div>

        <div className="border-t border-[#dedbd3]">
          {services.map((service) => (
            <div
              key={service.number}
              className="grid gap-5 border-b border-[#dedbd3] py-9 md:grid-cols-[100px_1fr_1fr] md:items-center"
            >
              <span className="text-sm text-[#a58b67]">{service.number}</span>

              <h3 className="text-2xl font-light">{service.title}</h3>

              <p className="text-sm leading-7 text-[#77766f]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-block border-b border-[#a58b67] pb-2 text-sm tracking-wider"
          >
            EXPLORE OUR SERVICES →
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-[#292a25] px-6 py-24 text-center text-white"
      >
        <p className="mb-6 text-xs tracking-[0.3em] text-[#d6c1a1]">
          LET'S CREATE SOMETHING BEAUTIFUL
        </p>

        <h2 className="mx-auto max-w-3xl text-4xl leading-tight font-light md:text-6xl">
          Your dream space
          <br />
          starts with a{" "}
          <span className="italic text-[#d6c1a1]">conversation.</span>
        </h2>

        <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-white/60">
          Have a project in mind? We'd love to hear about your ideas and explore
          how we can bring them to life.
        </p>

        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-between gap-4 bg-[#20211d] px-6 py-8 text-center text-xs text-white/50 md:flex-row md:px-10">
        <p className="tracking-[0.2em]">AUREN INTERIORS</p>
        <p>© 2026 Auren Interiors. All rights reserved.</p>
        <Link href="#top" className="hover:text-white">
          BACK TO TOP ↑
        </Link>
      </footer>
    </main>
  );
}
