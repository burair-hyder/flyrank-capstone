import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function AccusePage() {
  return (
    <PagePlaceholder
      eyebrow="Final Submission"
      title="Make Your Accusation"
      description="Submit the suspect, motive, method, key evidence, timeline explanation, and final written theory."
      features={[
        "Select the accused suspect",
        "Identify motive and method",
        "Choose supporting evidence",
        "Explain the crime timeline",
        "Submit a complete written theory",
        "Receive structured AI evaluation",
      ]}
    />
  );
}