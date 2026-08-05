import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function HowToPlayPage() {
  return (
    <PagePlaceholder
      eyebrow="Field Manual"
      title="How to Play"
      description="Learn how to inspect locations, question suspects, collect evidence, identify contradictions, build theories, and submit accusations."
      features={[
        "Read the case briefing",
        "Explore every relevant location",
        "Question suspects carefully",
        "Connect evidence and claims",
        "Challenge contradictions",
        "Submit a supported final theory",
      ]}
    />
  );
}