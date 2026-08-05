import Link from "next/link";

const features = [
  "Responsive application shell",
  "Routed placeholder screens",
  "Server Components by default",
  "Tailwind design tokens",
  "Deployment health check",
];

export default function HomePage() {
  return (
    <section className="grid min-h-[75vh] items-center gap-12 py-10 lg:grid-cols-2">
      <div>
        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          Foundations phase
        </span>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Organize your work with TaskFlow
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          A responsive task-management dashboard for planning work, tracking
          deadlines, and reviewing productivity.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/dashboard"
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Open dashboard
          </Link>

          <Link
            href="/health"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Check system health
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-slate-950">
          Foundation completed
        </h2>

        <ul className="mt-6 space-y-4">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
            >
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700"
              >
                ✓
              </span>

              <span className="text-sm font-medium text-slate-700">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}