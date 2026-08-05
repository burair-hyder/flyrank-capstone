import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function LocationsPage() {
  return (
    <PagePlaceholder
      eyebrow="Scene Investigation"
      title="Locations"
      description="Explore interactive scenes, inspect important objects, uncover hidden evidence, and unlock new investigation paths."
      features={[
        "Private gallery",
        "Library",
        "Kitchen",
        "Victim's study",
        "Garden entrance",
        "Estate security room",
      ]}
    />
  );
}