import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function SuspectsPage() {
  return (
    <PagePlaceholder
      eyebrow="Persons of Interest"
      title="Suspects"
      description="Review suspect profiles, motives, relationships, alibis, interview history, and discovered contradictions."
      features={[
        "Elena Vale — the victim's daughter",
        "Marcus Reed — an art dealer in financial trouble",
        "Dr. Hayes — the family physician",
        "Thomas Bell — the estate manager",
        "AI-powered interrogation transcripts",
        "Evidence-aware follow-up questions",
      ]}
    />
  );
}