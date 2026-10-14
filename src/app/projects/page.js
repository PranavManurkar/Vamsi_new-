import PageHeader from "@/components/site/PageHeader";
import ProjectTabs from "@/components/site/ProjectTabs";
import { PROJECTS_DATA } from "@/lib/projectsData";

export default function ProjectsPage() {
  return (
    <>
      {/* redesign-data: design eyebrow "Projects", title "Sponsored research" and intro (pages.tsx L224); repo title "Research Projects". Kept repo. */}
      <PageHeader title="Research Projects" />
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ProjectTabs projects={PROJECTS_DATA} />
        </div>
      </section>
    </>
  );
}
