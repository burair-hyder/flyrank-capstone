type HealthData = {
  status: string;
  service: string;
  environment: string;
  version: string;
  timestamp: string;
};

async function getHealthData(): Promise<HealthData> {
  await new Promise((resolve) => setTimeout(resolve, 150));

  return {
    status: "operational",
    service: process.env.NEXT_PUBLIC_APP_NAME ?? "Casefile AI",
    environment: process.env.NODE_ENV,
    version: "0.1.0",
    timestamp: new Date().toISOString(),
  };
}

export default async function HealthPage() {
  const health = await getHealthData();

  const rows = [
    { label: "Status", value: health.status },
    { label: "Service", value: health.service },
    { label: "Environment", value: health.environment },
    { label: "Version", value: health.version },
    { label: "Checked at", value: new Date(health.timestamp).toUTCString() },
  ];

  return (
    <section className="space-y-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-400">
          Operational
        </p>

        <h1 className="mt-4 text-3xl font-bold text-stone-100 sm:text-4xl">
          System Health
        </h1>

        <p className="mt-3 max-w-2xl text-stone-400">
          This server-rendered page demonstrates asynchronous data retrieval and
          confirms that the deployed Casefile AI application is operational.
        </p>
      </header>

      <div className="max-w-3xl overflow-hidden rounded-2xl border border-stone-800 bg-stone-900/70">
        <dl className="divide-y divide-stone-800">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 px-5 py-4 sm:grid-cols-[180px_1fr] sm:gap-5 sm:px-6"
            >
              <dt className="text-sm font-medium text-stone-500">
                {row.label}
              </dt>

              <dd className="break-words text-sm font-semibold text-stone-200">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}