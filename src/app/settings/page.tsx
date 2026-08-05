import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function SettingsPage() {
  return (
    <PagePlaceholder
      eyebrow="System Preferences"
      title="Settings"
      description="Control appearance, text size, sound effects, motion preferences, interview display, accessibility options, and save behavior."
      features={[
        "Sound and ambience",
        "Reduced motion",
        "Text-size controls",
        "High-contrast mode",
        "Interview transcript settings",
        "Save-data management",
      ]}
    />
  );
}