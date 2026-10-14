import Research from "@/components/Research";
import CoreExpertise from "@/components/CoreExpertise";
import PageHeader from "@/components/site/PageHeader";

export default function ResearchPage() {
  return (
    <>
      {/* redesign-data: design eyebrow "Research", title "Research themes" and an intro paragraph (pages.tsx L182); repo title "Research". Kept repo. */}
      <PageHeader title="Research" />
      <Research />
      <CoreExpertise />
    </>
  );
}
