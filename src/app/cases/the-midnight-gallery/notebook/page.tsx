import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function NotebookPage() {
  return (
    <PagePlaceholder
      eyebrow="Detective Notes"
      title="Investigation Notebook"
      description="Record theories, tag suspects, attach evidence, organize unresolved questions, and track competing explanations."
      features={[
        "Free-form detective notes",
        "Evidence attachments",
        "Suspect tags",
        "Theory cards",
        "Supporting and opposing evidence",
        "Searchable entries",
      ]}
    />
  );
}