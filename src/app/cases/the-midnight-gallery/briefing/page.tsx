import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function BriefingPage() {
  return (
    <PagePlaceholder
      eyebrow="Case 001 · The Midnight Gallery"
      title="Case Briefing"
      description="At 11:42 PM, renowned art collector Adrian Vale was discovered unconscious in his private gallery. A priceless painting had vanished, the security camera was disabled, and four people remained inside the estate."
      features={[
        "Review the crime summary and investigation objective",
        "Study known facts before entering the scene",
        "Meet the four initial persons of interest",
        "Track the estimated crime window",
      ]}
    />
  );
}