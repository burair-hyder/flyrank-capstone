import Link from "next/link";
import { navigationItems } from "@/lib/navigation";

export default function MobileNavigation() {
  return (
    <header className="border-b border-slate-200 bg-white lg:hidden">
      <div className="flex items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-slate-950"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm text-white">
            TF
          </span>

          <span>TaskFlow</span>
        </Link>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="overflow-x-auto border-t border-slate-100"
      >
        <ul className="flex min-w-max gap-2 px-4 py-3">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
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