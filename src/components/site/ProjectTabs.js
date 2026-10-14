"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { buttonClasses } from "@/lib/ui";
import { onTabKeyDown } from "@/lib/tabs";

export default function ProjectTabs({ projects }) {
  const statuses = ["All", ...new Set(projects.map((p) => p.status))];
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.status === active);
  const count = (status) => (status === "All" ? projects.length : projects.filter((p) => p.status === status).length);

  return (
    <>
      {/* redesign-data: design statuses Ongoing/Approved/Completed/Under review with 12 grants (data.ts:70-91); repo has 5 projects, Ongoing/Completed. Kept repo; "All" tab keeps today's default view. */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project status">
        {statuses.map((status) => (
          <button
            key={status}
            type="button"
            role="tab"
            id={`tab-${status}`}
            data-tab={status}
            aria-selected={active === status}
            aria-controls="project-panel"
            tabIndex={active === status ? 0 : -1}
            onClick={() => setActive(status)}
            onKeyDown={(e) => onTabKeyDown(e, statuses, active, setActive)}
            className={buttonClasses({ variant: active === status ? "default" : "outline" })}
          >
            {status} <span className="ml-1 opacity-65">{count(status)}</span>
          </button>
        ))}
      </div>

      <div
        id="project-panel"
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        className="mt-8 grid gap-5 md:grid-cols-2"
      >
        {shown.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
