import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function ProfilePage() {
  return (
    <PagePlaceholder
      eyebrow="Detective Record"
      title="Detective Profile"
      description="Review solved cases, average score, detective rank, evidence accuracy, hint usage, achievements, and investigation history."
      features={[
        "Detective rank",
        "Cases solved",
        "Average case score",
        "Evidence accuracy",
        "Hints used",
        "Investigation history",
      ]}
    />
  );
}