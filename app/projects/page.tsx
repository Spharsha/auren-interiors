import Link from "next/link";
import Header from "../components/Header";

const projects = [
  {
    title: "Modern Luxury Residence",
    category: "RESIDENTIAL",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000",
  },
  {
    title: "Contemporary Living Space",
    category: "LIVING ROOM",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000",
  },
  {
    title: "Elegant Dining Interior",
    category: "DINING",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000",
  },
  {
    title: "Minimal Bedroom Design",
    category: "BEDROOM",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1000",
  },
  {
    title: "Modern Kitchen Design",
    category: "KITCHEN",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000",
  },
  {
    title: "Luxury Interior Concept",
    category: "INTERIOR DESIGN",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#292a25] text-white">
      <Header />

      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <p className="mb-5 text-xs tracking-[0.4em] text-[#d6c1a1]">
          OUR PORTFOLIO
        </p>

        <h1 className="font-serif text-5xl md:text-7xl">Selected Projects</h1>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60">
          Explore a collection of thoughtfully designed spaces that combine
          elegance, comfort and functionality.
        </p>
      </section>

      {/* Projects Gallery */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <p className="mb-8 text-center text-sm text-white/50">
          Total Projects: {projects.length}
        </p>

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group">
              <div className="overflow-hidden bg-[#34352f]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <p className="mt-6 text-[10px] tracking-[0.3em] text-[#d6c1a1]">
                {project.category}
              </p>

              <h2 className="mt-3 font-serif text-2xl">{project.title}</h2>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#34352f] px-6 py-20 text-center">
        <p className="mb-5 text-xs tracking-[0.3em] text-[#d6c1a1]">
          LET'S CREATE SOMETHING BEAUTIFUL
        </p>

        <h2 className="font-serif text-4xl md:text-5xl">
          Have a Project in Mind?
        </h2>

        <p className="mt-5 text-sm text-white/60">
          Let us help you create a space you will love.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block bg-[#d6c1a1] px-10 py-4 text-xs font-semibold tracking-widest text-[#292a25] transition hover:bg-white"
        >
          GET IN TOUCH →
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center">
        <Link href="/" className="font-serif text-2xl tracking-widest">
          AUREN<span className="text-[#d6c1a1]">.</span>
        </Link>

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-white/50">
          <Link href="/about">ABOUT</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/contact">CONTACT</Link>
        </div>

        <p className="mt-6 text-xs text-white/50">
          © 2026 Auren Interiors. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
