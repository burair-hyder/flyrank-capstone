type PagePlaceholderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  features?: readonly string[];
};

export default function PagePlaceholder({
  eyebrow = "Casefile AI",
  title,
  description,
  features = [],
}: PagePlaceholderProps) {
  return (
    <section className="space-y-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-400">
          {eyebrow}
        </p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl">
          {title}
        </h1>

        <p className="mt-4 text-base leading-7 text-stone-400">
          {description}
        </p>
      </header>

      {features.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature}
              className="rounded-2xl border border-stone-800 bg-stone-900/70 p-5 shadow-lg shadow-black/10"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300">
                ✓
              </div>

              <p className="font-medium text-stone-200">{feature}</p>
            </article>
          ))}
        </div>
      )}

      <div className="rounded-2xl border border-dashed border-stone-700 bg-stone-900/50 p-8 text-center sm:p-12">
        <p className="text-sm leading-6 text-stone-500">
          This system is scaffolded for the Foundations phase and will be
          implemented during the core Build and AI-integration phases.
        </p>
      </div>
    </section>
  );
}