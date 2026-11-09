import Link from "next/link";
import Header from "../components/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#292a25] text-white">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-center justify-center bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 px-6 text-center">
          <p className="mb-5 text-xs tracking-[0.4em] text-[#d6c1a1]">
            GET TO KNOW US
          </p>
          <h1 className="font-serif text-5xl md:text-7xl">About Auren</h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/80">
            We create thoughtful spaces that inspire beautiful living.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-5 text-xs tracking-[0.3em] text-[#d6c1a1]">
            OUR STORY
          </p>

          <h2 className="mb-8 font-serif text-4xl leading-tight md:text-5xl">
            Designing Spaces.
            <br />
            Creating Experiences.
          </h2>

          <p className="mb-6 text-sm leading-8 text-white/65">
            At Auren Interiors, we believe every space has a story to tell. Our
            goal is to transform ordinary spaces into beautiful, functional and
            timeless environments.
          </p>

          <p className="text-sm leading-8 text-white/65">
            From carefully selected materials to thoughtful details, we focus on
            creating interiors that reflect the personality and lifestyle of the
            people who live and work in them.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000"
            alt="Elegant interior designed living space"
            className="h-[450px] w-full object-cover"
          />
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="bg-[#34352f] px-6 py-24 text-center">
        <p className="mb-5 text-xs tracking-[0.3em] text-[#d6c1a1]">
          OUR PHILOSOPHY
        </p>

        <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
          Beautiful design is not just about appearance. It is about how a space
          makes you feel.
        </h2>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center">
        <Link href="/" className="font-serif text-2xl tracking-widest">
          AUREN<span className="text-[#d6c1a1]">.</span>
        </Link>
        <p className="mt-4 text-xs text-white/50">
          © 2026 Auren Interiors. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
