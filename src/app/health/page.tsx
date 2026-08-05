type HealthData = {
  status: string;
  service: string;
  environment: string;
  version: string;
  timestamp: string;
};

async function getHealthData(): Promise<HealthData> {
  return {
    status: "ok",
    service: process.env.NEXT_PUBLIC_APP_NAME ?? "TaskFlow",
    environment: process.env.NODE_ENV,
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  };
}

export default async function HealthPage() {
  const health = await getHealthData();

  const rows = [
    {
      label: "Status",
      value: health.status,
    },
    {
      label: "Service",
      value: health.service,
    },
    {
      label: "Environment",
      value: health.environment,
    },
    {
      label: "Version",
      value: health.version,
    },
    {
      label: "Checked at",
      value: new Date(health.timestamp).toUTCString(),
    },
  ];

  return (
    <section className="space-y-6">
      <header>
        <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
          Operational
        </span>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          System Health
        </h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          This server-rendered page confirms that the application is running
          and can retrieve health information.
        </p>
      </header>

      <div className="max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <dl className="divide-y divide-slate-200">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 px-5 py-4 sm:grid-cols-[160px_1fr] sm:gap-4 sm:px-6"
            >
              <dt className="text-sm font-medium text-slate-500">
                {row.label}
              </dt>

              <dd className="break-words text-sm font-semibold text-slate-900">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}