import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectGallery from "../components/ProjectGallery";

export const metadata: Metadata = {
  title: "Projects | Auren Interiors (Demo)",
  description:
    "Browse sample interior projects by room: living room, bedroom, kitchen, dining and full homes.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main>
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
          <p className="text-xs tracking-[0.3em] text-brass">OUR PORTFOLIO</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] sm:text-6xl">
            Spaces we have created.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-clay">
            Filter by room, and tap any photo to see it larger. These are sample
            projects for this demo.
          </p>

          <div className="mt-12">
            <ProjectGallery />
          </div>
        </section>

        <section className="bg-walnut px-5 py-16 text-center text-linen sm:px-8">
          <h2 className="font-serif text-4xl sm:text-5xl">
            Have a space in mind?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-brass-light px-9 py-4 text-xs tracking-[0.2em] text-espresso transition hover:bg-white"
          >
            TALK TO US
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
