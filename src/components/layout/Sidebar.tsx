import Link from "next/link";
import {
  investigationNavigationItems,
  primaryNavigationItems,
} from "@/lib/navigation";

export default function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 shrink-0 border-r border-stone-800 bg-stone-950 lg:block">
      <div className="sticky top-0 max-h-screen overflow-y-auto p-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 font-bold text-amber-300">
            CA
          </span>

          <span>
            <span className="block text-lg font-bold tracking-wide text-stone-100">
              Casefile AI
            </span>

            <span className="block text-xs text-stone-500">
              Detective Intelligence System
            </span>
          </span>
        </Link>

        <nav className="mt-8" aria-label="Primary navigation">
          <p className="px-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-600">
            Headquarters
          </p>

          <ul className="mt-3 space-y-1">
            {primaryNavigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-stone-400 transition hover:bg-stone-900 hover:text-stone-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="mt-8" aria-label="Active case navigation">
          <p className="px-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-600">
            Active Case
          </p>

          <p className="mt-3 px-3 text-sm font-semibold text-amber-300">
            The Midnight Gallery
          </p>

          <ul className="mt-3 space-y-1">
            {investigationNavigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-4 py-2.5 text-sm text-stone-400 transition hover:bg-stone-900 hover:text-stone-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 rounded-2xl border border-stone-800 bg-stone-900/60 p-4">
          <p className="text-sm font-semibold text-stone-200">
            Foundation status
          </p>

          <p className="mt-2 text-xs leading-5 text-stone-500">
            Case routes, investigation workspaces, health checks, and deployment
            infrastructure are active.
          </p>
        </div>
      </div>
    </aside>
  );
}