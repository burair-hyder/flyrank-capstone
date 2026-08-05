import Link from "next/link";
import { primaryNavigationItems } from "@/lib/navigation";

export default function MobileNavigation() {
  return (
    <header className="border-b border-stone-800 bg-stone-950 lg:hidden">
      <div className="flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-sm font-bold text-amber-300">
            CA
          </span>

          <span>
            <span className="block font-bold text-stone-100">Casefile AI</span>
            <span className="block text-[11px] text-stone-500">
              Detective Intelligence System
            </span>
          </span>
        </Link>

        <Link
          href="/cases"
          className="rounded-lg border border-stone-700 px-3 py-2 text-xs font-semibold text-stone-300"
        >
          Cases
        </Link>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="overflow-x-auto border-t border-stone-900"
      >
        <ul className="flex min-w-max gap-2 px-4 py-3">
          {primaryNavigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg bg-stone-900 px-3 py-2 text-sm font-medium text-stone-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}