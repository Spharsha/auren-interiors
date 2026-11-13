"use client";

import Link from "next/link";
import { useState } from "react";

const sizes = [
  { label: "1 BHK", range: [3, 5] },
  { label: "2 BHK", range: [6, 9] },
  { label: "3 BHK", range: [9, 14] },
  { label: "Villa", range: [18, 28] },
];

const finishes = [
  { label: "Standard", factor: 1 },
  { label: "Premium", factor: 1.4 },
  { label: "Luxury", factor: 2 },
];

function lakh(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

export default function BudgetEstimator() {
  const [size, setSize] = useState(1);
  const [finish, setFinish] = useState(0);

  const base = sizes[size].range;
  const factor = finishes[finish].factor;
  const low = Math.round(base[0] * factor * 10) / 10;
  const high = Math.round(base[1] * factor * 10) / 10;

  const choice =
    "border px-5 py-3 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brass";

  return (
    <div className="grid gap-10 bg-walnut p-6 text-linen sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
      <div>
        <p className="text-xs tracking-[0.3em] text-brass-light">
          BUDGET ESTIMATOR
        </p>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
          Get a rough idea of your budget
        </h2>

        <p className="mt-8 text-sm text-linen/70">Home size</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {sizes.map((item, index) => (
            <button
              key={item.label}
              type="button"
              aria-pressed={size === index}
              onClick={() => setSize(index)}
              className={`${choice} ${
                size === index
                  ? "border-brass-light bg-brass-light text-espresso"
                  : "border-linen/30 hover:border-linen"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-linen/70">Finish level</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {finishes.map((item, index) => (
            <button
              key={item.label}
              type="button"
              aria-pressed={finish === index}
              onClick={() => setFinish(index)}
              className={`${choice} ${
                finish === index
                  ? "border-brass-light bg-brass-light text-espresso"
                  : "border-linen/30 hover:border-linen"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center border-t border-linen/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
        <p className="text-xs tracking-[0.25em] text-linen/60">
          ESTIMATED RANGE
        </p>
        <p className="mt-3 font-serif text-4xl sm:text-5xl" aria-live="polite">
          ₹{lakh(low)} – {lakh(high)} lakh
        </p>
        <p className="mt-3 text-sm leading-6 text-linen/60">
          {sizes[size].label}, {finishes[finish].label.toLowerCase()} finish.
          This is a sample estimate only. The real cost depends on your design,
          materials and site.
        </p>
        <Link
          href="/contact"
          className="mt-7 w-fit bg-brass-light px-8 py-4 text-xs tracking-[0.2em] text-espresso transition hover:bg-white"
        >
          GET AN EXACT QUOTE →
        </Link>
      </div>
    </div>
  );
}
