import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function EvidencePage() {
  return (
    <PagePlaceholder
      eyebrow="Evidence Archive"
      title="Collected Evidence"
      description="Inspect physical, digital, documentary, testimonial, and forensic evidence discovered during the investigation."
      features={[
        "Broken watch",
        "Gallery security log",
        "Wine glass",
        "Deleted message",
        "Muddy footprint",
        "Medication bottle",
      ]}
    />
  );
}