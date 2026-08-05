import Link from "next/link";

const systems = [
  "AI-powered suspect interviews",
  "Interactive evidence board",
  "Explorable locations",
  "Case timelines and contradictions",
  "Detective notebook and theories",
  "AI-evaluated final accusations",
];

export default function HomePage() {
  return (
    <section className="grid min-h-[78vh] items-center gap-12 py-10 xl:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
          Detective Intelligence System
        </p>

        <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-stone-100 sm:text-5xl lg:text-7xl">
          Every suspect has a story.
          <span className="block text-stone-500">
            Not every story is true.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-400">
          Investigate structured mysteries, interrogate AI-controlled suspects,
          connect evidence, expose contradictions, and submit your final theory.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/cases/the-midnight-gallery/briefing"
            className="rounded-xl bg-amber-400 px-5 py-3 font-semibold text-stone-950 transition hover:bg-amber-300"
          >
            Begin Investigation
          </Link>

          <Link
            href="/cases"
            className="rounded-xl border border-stone-700 bg-stone-900 px-5 py-3 font-semibold text-stone-200 transition hover:border-stone-600 hover:bg-stone-800"
          >
            Browse Case Files
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-stone-800 bg-stone-900/70 p-6 shadow-2xl shadow-black/30 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
              Active Case
            </p>

            <h2 className="mt-3 text-2xl font-bold text-stone-100">
              The Midnight Gallery
            </h2>

            <p className="mt-2 text-sm leading-6 text-stone-500">
              A priceless painting has disappeared, its owner has been attacked,
              and four guests are hiding more than they admit.
            </p>
          </div>

          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
            Medium
          </span>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {systems.map((system) => (
            <li
              key={system}
              className="rounded-xl border border-stone-800 bg-stone-950/70 p-4 text-sm text-stone-300"
            >
              {system}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}