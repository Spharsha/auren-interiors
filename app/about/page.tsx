import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { photo } from "../data";

export const metadata: Metadata = {
  title: "About | Auren Interiors (Demo)",
  description:
    "Our approach to warm, practical interior design for Indian homes. Demo website with sample content.",
};

const values = [
  {
    title: "Listen first",
    text: "Every home starts with your family, your habits and your budget, not with a catalogue.",
  },
  {
    title: "Honest budgets",
    text: "You see clear costs before work begins, and we tell you early if something will not fit.",
  },
  {
    title: "Built to last",
    text: "We choose materials and hardware that handle Indian weather, cooking and daily family life.",
  },
];

const materials = [
  "Teak and rosewood",
  "Kota and marble stone",
  "Brass accents",
  "Cane and jute",
  "Handloom textiles",
  "Terracotta and clay",
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="text-xs tracking-[0.3em] text-brass">ABOUT AUREN</p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] sm:text-6xl">
              Design that feels like home.
            </h1>
            <p className="mt-7 text-base leading-8 text-clay">
              Auren Interiors is a Chennai design studio for families and small
              businesses. We believe a good interior is quiet, practical and
              personal, and that it should be easy to get there.
            </p>
            <p className="mt-4 text-base leading-8 text-clay">
              From planning and Vastu-friendly layouts to modular kitchens and
              final styling, one team stays with you through the whole project.
            </p>
          </div>

          <div className="group overflow-hidden bg-sand">
            <img
              src={photo("photo-1600607687920-4e2a09cf159d", 1000)}
              alt="Elegant living space with warm lighting"
              width={1000}
              height={1100}
              loading="lazy"
              className="aspect-5/5.5 w-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none"
            />
          </div>
        </section>

        <section className="bg-sand px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs tracking-[0.3em] text-brass">
              OUR PRINCIPLES
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              How we think
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="border-t border-walnut/25 pt-6"
                >
                  <p className="font-serif text-3xl text-brass">0{index + 1}</p>
                  <h3 className="mt-4 font-serif text-2xl">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-clay">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="text-xs tracking-[0.3em] text-brass">
            MATERIALS WE LOVE
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Rooted in Indian craft
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {materials.map((item) => (
              <span
                key={item}
                className="border border-walnut/30 px-5 py-3 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-walnut px-5 py-16 text-center text-linen sm:px-8">
          <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
            Let us talk about your space.
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-brass-light px-9 py-4 text-xs tracking-[0.2em] text-espresso transition hover:bg-white"
          >
            BOOK A CONSULTATION
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
