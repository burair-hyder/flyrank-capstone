import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function TimelinePage() {
  return (
    <PagePlaceholder
      eyebrow="Chronology Analysis"
      title="Case Timeline"
      description="Compare verified events, disputed claims, witness statements, and unknown time periods surrounding the crime."
      features={[
        "Verified events",
        "Claimed movements",
        "Disputed statements",
        "Estimated crime window",
        "Security activity",
        "Timeline contradictions",
      ]}
    />
  );
}