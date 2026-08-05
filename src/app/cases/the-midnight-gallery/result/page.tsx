import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function ResultPage() {
  return (
    <PagePlaceholder
      eyebrow="Case Evaluation"
      title="Investigation Result"
      description="Review the final verdict, evidence accuracy, reasoning score, timeline consistency, missing details, and detective performance."
      features={[
        "Correct suspect evaluation",
        "Motive score",
        "Evidence strength",
        "Timeline consistency",
        "Reasoning quality",
        "Detective rank progress",
      ]}
    />
  );
}