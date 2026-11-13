"use client";

import { useCallback, useEffect, useState } from "react";
import { photo, projects, rooms } from "../data";

export default function ProjectGallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);

  const list =
    filter === "All" ? projects : projects.filter((p) => p.room === filter);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % list.length)),
    [list.length],
  );
  const prev = useCallback(
    () =>
      setActive((i) => (i === null ? i : (i - 1 + list.length) % list.length)),
    [list.length],
  );

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  const current = active === null ? null : list[active];

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects by room"
        className="flex flex-wrap gap-2"
      >
        {rooms.map((room) => (
          <button
            key={room}
            type="button"
            aria-pressed={filter === room}
            onClick={() => {
              setFilter(room);
              setActive(null);
            }}
            className={`border px-5 py-2.5 text-xs tracking-[0.15em] transition ${
              filter === room
                ? "border-walnut bg-walnut text-linen"
                : "border-walnut/30 hover:border-walnut"
            }`}
          >
            {room.toUpperCase()}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-clay">
        Showing {list.length} {list.length === 1 ? "project" : "projects"}
      </p>

      <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((project, index) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setActive(index)}
            className="group text-left"
            aria-label={`View ${project.title}`}
          >
            <div className="overflow-hidden bg-sand">
              <img
                src={photo(project.image, 800)}
                alt={project.title}
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-4/5 w-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none"
              />
            </div>
            <p className="mt-5 text-[11px] tracking-[0.25em] text-brass">
              {project.room.toUpperCase()}
            </p>
            <h3 className="mt-2 font-serif text-2xl">{project.title}</h3>
            <p className="mt-1 text-sm text-clay">{project.place}</p>
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fade-in fixed inset-0 z-50 flex flex-col bg-espresso/95 text-linen"
          onClick={close}
        >
          <div className="flex items-center justify-between px-5 py-4 sm:px-8">
            <p className="text-xs tracking-[0.2em] text-brass-light">
              {(active ?? 0) + 1} / {list.length}
            </p>
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="flex h-11 w-11 items-center justify-center border border-linen/30 transition hover:bg-linen hover:text-espresso"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="h-5 w-5"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div
            className="flex min-h-0 flex-1 items-center justify-center gap-3 px-3 sm:px-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Previous project"
              onClick={prev}
              className="flex h-11 w-11 shrink-0 items-center justify-center border border-linen/30 transition hover:bg-linen hover:text-espresso"
            >
              ‹
            </button>

            <img
              src={photo(current.image, 1600)}
              alt={current.title}
              className="max-h-full min-w-0 max-w-full object-contain"
            />

            <button
              type="button"
              aria-label="Next project"
              onClick={next}
              className="flex h-11 w-11 shrink-0 items-center justify-center border border-linen/30 transition hover:bg-linen hover:text-espresso"
            >
              ›
            </button>
          </div>

          <div
            className="px-5 py-5 text-center sm:px-8"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="text-[11px] tracking-[0.25em] text-brass-light">
              {current.room.toUpperCase()} · {current.place.toUpperCase()}
            </p>
            <h3 className="mt-2 font-serif text-2xl sm:text-3xl">
              {current.title}
            </h3>
            <p className="mt-2 text-sm text-linen/65">
              {current.size}. {current.blurb}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
