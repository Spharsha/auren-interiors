import Link from "next/link";
import Header from "../components/Header";

const services = [
  {
    number: "01",
    title: "Residential Design",
    description:
      "Thoughtfully designed homes that reflect your personality and lifestyle. From elegant living rooms to beautiful bedrooms, we create spaces that feel like home.",
  },
  {
    number: "02",
    title: "Commercial Spaces",
    description:
      "Inspiring workspaces, offices and commercial interiors designed to improve comfort, functionality and visual appeal.",
  },
  {
    number: "03",
    title: "Space Planning",
    description:
      "Smart layouts that make the best use of available space while maintaining comfort, balance and elegance.",
  },
  {
    number: "04",
    title: "Kitchen Design",
    description:
      "Beautiful and practical kitchen spaces with carefully planned storage, materials and layouts.",
  },
  {
    number: "05",
    title: "Bedroom Interiors",
    description:
      "Relaxing bedroom designs that combine thoughtful details, comfortable layouts and timeless style.",
  },
  {
    number: "06",
    title: "Interior Consultation",
    description:
      "Professional design guidance to help you plan your space, choose materials and bring your ideas together.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-[#25251f]">
      <Header />

      {/* Hero */}
      <section className="bg-[#292a25] px-6 py-28 text-center text-white">
        <p className="mb-5 text-xs tracking-[0.4em] text-[#d6c1a1]">
          WHAT WE DO
        </p>

        <h1 className="font-serif text-5xl md:text-7xl">Our Services</h1>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60">
          Thoughtful interior design solutions created around your space,
          lifestyle and vision.
        </p>
      </section>

      {/* Services List */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14">
          <p className="mb-4 text-xs tracking-[0.3em] text-[#a58b67]">
            OUR EXPERTISE
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            Spaces designed around you.
          </h2>
        </div>

        <div className="border-t border-[#dedbd3]">
          {services.map((service) => (
            <div
              key={service.number}
              className="grid gap-5 border-b border-[#dedbd3] py-10 md:grid-cols-[100px_1fr_1fr] md:items-center"
            >
              <span className="text-sm text-[#a58b67]">{service.number}</span>

              <h3 className="font-serif text-2xl">{service.title}</h3>

              <p className="text-sm leading-7 text-[#77766f]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#efeee9] px-6 py-20 text-center">
        <p className="mb-5 text-xs tracking-[0.3em] text-[#a58b67]">
          HAVE A PROJECT IN MIND?
        </p>

        <h2 className="font-serif text-4xl md:text-5xl">
          Let's create something beautiful.
        </h2>

        <Link
          href="/contact"
          className="mt-8 inline-block bg-[#292a25] px-10 py-4 text-xs tracking-widest text-white transition hover:bg-[#a58b67]"
        >
          GET IN TOUCH →
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#20211d] px-6 py-10 text-center text-xs text-white/50">
        <Link
          href="/"
          className="font-serif text-2xl tracking-widest text-white"
        >
          AUREN<span className="text-[#d6c1a1]">.</span>
        </Link>

        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <Link href="/about">ABOUT</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/contact">CONTACT</Link>
        </div>

        <p className="mt-6">© 2026 Auren Interiors. All rights reserved.</p>
      </footer>
    </main>
  );
}
