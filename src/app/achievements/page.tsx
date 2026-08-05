import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function AchievementsPage() {
  return (
    <PagePlaceholder
      eyebrow="Detective Career"
      title="Achievements"
      description="Track investigation milestones, perfect deductions, evidence discoveries, contradiction streaks, and no-hint victories."
      features={[
        "No Help Needed",
        "Sharp Eye",
        "Cross Examiner",
        "Cold Case Expert",
        "Perfect Theory",
        "Master Investigator",
      ]}
    />
  );
}