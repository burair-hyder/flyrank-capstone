import Link from "next/link";

const cases = [
  {
    id: "the-midnight-gallery",
    title: "The Midnight Gallery",
    description:
      "An art collector is attacked during a private gathering, and a priceless painting disappears.",
    difficulty: "Medium",
    status: "Available",
  },
  {
    id: "room-404",
    title: "Room 404",
    description:
      "A hotel guest disappears from a locked room with no recorded exit.",
    difficulty: "Hard",
    status: "Coming later",
  },
  {
    id: "the-last-train",
    title: "The Last Train",
    description:
      "A passenger vanishes before an overnight train reaches its final station.",
    difficulty: "Medium",
    status: "Coming later",
  },
];

export default function CasesPage() {
  return (
    <section className="space-y-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-400">
          Investigation Archive
        </p>

        <h1 className="mt-4 text-3xl font-bold text-stone-100 sm:text-4xl">
          Case Files
        </h1>

        <p className="mt-3 max-w-2xl text-stone-400">
          Select an investigation, review its difficulty, and continue your
          detective career.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {cases.map((caseFile) => {
          const available = caseFile.status === "Available";

          return (
            <article
              key={caseFile.id}
              className="flex min-h-72 flex-col rounded-2xl border border-stone-800 bg-stone-900/70 p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-stone-800 px-3 py-1 text-xs font-semibold text-stone-300">
                  {caseFile.difficulty}
                </span>

                <span className="text-xs font-semibold text-stone-500">
                  {caseFile.status}
                </span>
              </div>

              <h2 className="mt-6 text-xl font-bold text-stone-100">
                {caseFile.title}
              </h2>

              <p className="mt-3 flex-1 text-sm leading-6 text-stone-400">
                {caseFile.description}
              </p>

              {available ? (
                <Link
                  href={`/cases/${caseFile.id}/briefing`}
                  className="mt-6 rounded-xl bg-amber-400 px-4 py-3 text-center text-sm font-semibold text-stone-950"
                >
                  Open Case
                </Link>
              ) : (
                <span className="mt-6 rounded-xl border border-stone-800 px-4 py-3 text-center text-sm font-semibold text-stone-600">
                  Locked
                </span>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}