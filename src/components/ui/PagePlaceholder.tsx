type PagePlaceholderProps = {
  title: string;
  description: string;
  badge?: string;
};

export default function PagePlaceholder({
  title,
  description,
  badge = "Foundation",
}: PagePlaceholderProps) {
  return (
    <section className="space-y-6">
      <header>
        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          {badge}
        </span>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {title}
        </h1>

        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
          {description}
        </p>
      </header>

      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-center text-sm text-slate-500">
          This screen will be completed during the core Build phase.
        </p>
      </div>
    </section>
  );
}