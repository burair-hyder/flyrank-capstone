export async function GET() {
  return Response.json({
    status: "ok",
    service: process.env.NEXT_PUBLIC_APP_NAME ?? "TaskFlow",
    environment: process.env.NODE_ENV,
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
}