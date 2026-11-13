import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Auren Interiors (Demo)",
  description: "Book a design consultation. Demo website with sample content.",
};

const details = [
  {
    label: "STUDIO",
    lines: ["Sample Address, Alwarpet", "Chennai, Tamil Nadu"],
  },
  { label: "HOURS", lines: ["Monday – Saturday", "10:00 AM – 7:00 PM"] },
  { label: "REPLY TIME", lines: ["Within one working day"] },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] text-brass">GET IN TOUCH</p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] sm:text-6xl">
              Tell us about your dream space.
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 text-clay">
              Planning a new home, a renovation or an office? Share a few
              details and we will arrange a consultation.
            </p>

            <div className="mt-10 space-y-8">
              {details.map((item) => (
                <div key={item.label}>
                  <p className="text-xs tracking-[0.25em] text-brass">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-7">
                    {item.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-xs leading-5 text-clay">
              Address and timings on this demo are placeholders.
            </p>
          </div>

          <div className="bg-sand p-6 sm:p-10">
            <h2 className="font-serif text-3xl">Send an enquiry</h2>
            <p className="mb-8 mt-2 text-sm text-clay">
              Share your email or phone number, and a short message.
            </p>
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
