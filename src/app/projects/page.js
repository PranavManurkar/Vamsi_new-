import PageHeader from "@/components/site/PageHeader";
import ProjectTabs from "@/components/site/ProjectTabs";
import { PROJECTS_DATA } from "@/lib/projectsData";

export default function ProjectsPage() {
  return (
    <>
      {/* Page header text from the design (pages.tsx L224). */}
      <PageHeader
        eyebrow="Projects"
        title="Sponsored research"
        intro="Ongoing awards, approved projects, completed work, and proposals under review are shown separately."
      />
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ProjectTabs projects={PROJECTS_DATA} />
        </div>
      </section>
    </>
  );
}
