import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BudgetEstimator from "../components/BudgetEstimator";
import { services, steps } from "../data";

export const metadata: Metadata = {
  title: "Services | Auren Interiors (Demo)",
  description:
    "Full home interiors, modular kitchens, Vastu-friendly planning and commercial spaces, with a budget estimator.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
          <p className="text-xs tracking-[0.3em] text-brass">WHAT WE DO</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] sm:text-6xl">
            Everything your space needs, under one roof.
          </h1>

          <div className="mt-14 border-t border-walnut/15">
            {services.map((service) => (
              <article
                key={service.number}
                className="grid gap-6 border-b border-walnut/15 py-10 md:grid-cols-[90px_1fr_1fr] md:gap-10"
              >
                <span className="font-serif text-3xl text-brass">
                  {service.number}
                </span>
                <div>
                  <h2 className="font-serif text-3xl">{service.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-clay">
                    {service.text}
                  </p>
                </div>
                <ul className="space-y-3 text-sm">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brass" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 md:pb-24">
          <BudgetEstimator />
        </section>

        <section className="bg-sand px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs tracking-[0.3em] text-brass">HOW WE WORK</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              From first visit to handover
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="border-t border-walnut/20 pt-6"
                >
                  <p className="font-serif text-4xl text-brass">
                    {step.number}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-clay">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 text-center sm:px-8">
          <h2 className="font-serif text-4xl sm:text-5xl">Ready to begin?</h2>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-walnut px-9 py-4 text-xs tracking-[0.2em] text-linen transition hover:bg-brass"
          >
            BOOK A CONSULTATION
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
