import Research from "@/components/Research";
import CoreExpertise from "@/components/CoreExpertise";
import PageHeader from "@/components/site/PageHeader";

export default function ResearchPage() {
  return (
    <>
      {/* Page header text from the design (pages.tsx L182). */}
      <PageHeader
        eyebrow="Research"
        title="Research themes"
        intro="Mechanism-based computational research spanning electronic structure, crystal defects, thermodynamics, microstructure, and alloy performance."
      />
      <Research />
      <CoreExpertise />
    </>
  );
}
