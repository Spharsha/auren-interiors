import Link from "next/link";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-[#25251f]">
      <Header />

      {/* Hero */}
      <section className="bg-[#292a25] px-6 py-24 text-center text-white">
        <p className="mb-5 text-xs tracking-[0.4em] text-[#d6c1a1]">
          GET IN TOUCH
        </p>

        <h1 className="font-serif text-5xl md:text-7xl">Let's Talk.</h1>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60">
          Have a project in mind? Tell us about your ideas. We'd love to hear
          from you and help create a space you'll love.
        </p>
      </section>

      {/* Contact Details and Form */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 lg:px-10">
        <div>
          <p className="mb-5 text-xs tracking-[0.3em] text-[#a58b67]">
            START A CONVERSATION
          </p>

          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Tell us about your dream space.
          </h2>

          <p className="mt-7 max-w-md text-sm leading-8 text-[#77766f]">
            Whether you are planning a new home, renovating a room or designing
            a commercial space, we would love to understand your vision.
          </p>

          <div className="mt-12 space-y-6">
            <div>
              <p className="text-xs tracking-widest text-[#a58b67]">
                OUR APPROACH
              </p>
              <p className="mt-2 text-sm text-[#77766f]">
                Personal attention. Thoughtful planning. Timeless design.
              </p>
            </div>

            <div>
              <p className="text-xs tracking-widest text-[#a58b67]">
                ENQUIRIES
              </p>
              <p className="mt-2 text-sm text-[#77766f]">
                Please use the contact form to send us your project details.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#292a25] p-6 text-white md:p-10">
          <h2 className="font-serif text-3xl">Send an Enquiry</h2>

          <p className="mt-3 text-sm leading-7 text-white/60">
            Fill in the details below and we'll receive your enquiry.
          </p>

          <ContactForm />
        </div>
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
