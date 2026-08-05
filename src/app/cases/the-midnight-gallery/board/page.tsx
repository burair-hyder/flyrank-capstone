import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function EvidenceBoardPage() {
  return (
    <PagePlaceholder
      eyebrow="Reasoning Workspace"
      title="Evidence Board"
      description="Arrange suspects, evidence, locations, statements, motives, and timeline events into a visual investigation graph."
      features={[
        "Drag-and-drop evidence nodes",
        "Labelled connections",
        "Suspect-to-evidence links",
        "Contradiction markers",
        "Saved investigation layouts",
        "Keyboard-accessible board controls",
      ]}
    />
  );
}