import { Download } from "lucide-react";
import { buttonClasses } from "@/lib/ui";

const pill = "rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary";

export default function ProjectCard({ project }) {
  const isOngoing = project.status === "Ongoing";
  const hasPositions = project.positions && project.positions.toLowerCase() === "available";

  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-6">
      {/* redesign-data: design card leads with a grant reference number (pages.tsx L227); repo has none. Status/positions shown as design pills instead of the repo's labelled side panel. */}
      <div className="flex flex-wrap items-center gap-2">
        <span className={pill} aria-label={`Project status: ${project.status}`}>
          {project.status}
        </span>
        {hasPositions && (
          <span
            className="rounded-full bg-terracotta px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
            aria-label="Positions available"
          >
            Available
          </span>
        )}
      </div>

      <h2 className="mt-4 text-xl font-semibold leading-7 text-primary">{project.title}</h2>

      <dl className="mt-5 grid grid-cols-[6rem_1fr] gap-y-2 text-sm">
        <dt className="text-muted-foreground">Funding</dt>
        <dd className="font-medium text-primary">{project.funding}</dd>
        <dt className="text-muted-foreground">Duration</dt>
        <dd className="font-medium text-primary">{project.duration}</dd>
        <dt className="text-muted-foreground">Role</dt>
        <dd className="font-medium text-primary">{project.role}</dd>
        {hasPositions && (
          <>
            <dt className="text-muted-foreground">Positions</dt>
            <dd className="font-medium text-primary">Available</dd>
          </>
        )}
      </dl>

      {hasPositions && (
        <a
          href="/Vamsi_iit_indore_JRF_advertisement.pdf"
          download="advertisement.pdf"
          className={buttonClasses({ variant: "outline", size: "sm", className: "mt-5 self-start" })}
        >
          <Download />
          Download Advertisement
        </a>
      )}
      {isOngoing && !hasPositions && (
        <div className="mt-auto pt-5">
          <p className="border-t border-border pt-4 text-xs text-muted-foreground">Active project in progress</p>
        </div>
      )}
    </article>
  );
}
