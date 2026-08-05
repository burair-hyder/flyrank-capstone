import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function GenerateCasePage() {
  return (
    <PagePlaceholder
      eyebrow="AI Case Laboratory"
      title="Generate a Mystery"
      description="Future players will configure the crime, setting, difficulty, number of suspects, and investigation style before generating a validated mystery."
      features={[
        "Crime-type selection",
        "Setting configuration",
        "Difficulty level",
        "Suspect count",
        "Structured AI case generation",
        "Case consistency validation",
      ]}
    />
  );
}