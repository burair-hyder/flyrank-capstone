import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function InvestigationPage() {
  return (
    <PagePlaceholder
      eyebrow="Active Investigation"
      title="Investigation Workspace"
      description="This will become the main detective workspace, combining case progress, active leads, recent discoveries, interviews, and investigation status."
      features={[
        "Current investigation progress",
        "Recently discovered clues",
        "Unlocked interview questions",
        "Unresolved contradictions",
        "Case objective and status",
        "Quick access to detective tools",
      ]}
    />
  );
}