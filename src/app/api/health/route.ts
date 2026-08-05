export async function GET() {
  return Response.json({
    status: "ok",
    service: process.env.NEXT_PUBLIC_APP_NAME ?? "Casefile AI",
    environment: process.env.NODE_ENV,
    version: "0.1.0",
    systems: {
      web: "operational",
      caseArchive: "scaffolded",
      aiInterviews: "planned",
      evidenceEngine: "planned",
    },
    timestamp: new Date().toISOString(),
  });
}