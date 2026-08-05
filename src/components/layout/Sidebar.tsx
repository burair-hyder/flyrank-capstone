import Link from "next/link";
import { navigationItems } from "@/lib/navigation";

export default function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r border-slate-200 bg-white lg:block">
      <div className="sticky top-0 p-6">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-xl font-bold text-slate-950"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            TF
          </span>

          <span>TaskFlow</span>
        </Link>

        <nav className="mt-8" aria-label="Main navigation">
          <ul className="space-y-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 rounded-xl border border-blue-100 bg-blue-50 p-4">
          <p className="text-sm font-semibold text-blue-950">
            Foundation phase
          </p>

          <p className="mt-1 text-xs leading-5 text-blue-700">
            Routed placeholders and deployment infrastructure are being
            prepared.
          </p>
        </div>
      </div>
    </aside>
  );
}