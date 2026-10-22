import { Download, ExternalLink } from "lucide-react";
import { buttonClasses } from "@/lib/ui";

const pill = "rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary";

export default function ProjectCard({ project }) {
  const isOngoing = project.status === "Ongoing";
  const hasPositions = project.positions && project.positions.toLowerCase() === "available";

  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-terracotta/40">
      <div className="flex flex-wrap items-center gap-2">
        <span className={pill} aria-label={`Project status: ${project.status}`}>
          {project.status}
        </span>
        {hasPositions && (
          <span
            className="rounded-full bg-terracotta px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
            aria-label="Positions available"
          >
            Positions Available
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
            <dd className="font-medium text-terracotta">1 JRF (PhD Opportunity)</dd>
          </>
        )}
      </dl>

      {hasPositions && (
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-4">
          <a
            href="https://www.iiti.ac.in/careers/jrf_srf_positions?tab=jrf"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses({ size: "sm" })}
          >
            Apply on Institute Site
            <ExternalLink className="ml-1 size-3.5" />
          </a>
          <a
            href="/Vamsi_iit_indore_JRF_advertisement.pdf"
            download="Vamsi_iit_indore_JRF_advertisement.pdf"
            className={buttonClasses({ variant: "outline", size: "sm" })}
          >
            <Download className="mr-1 size-3.5" />
            Download Advertisement
          </a>
        </div>
      )}

      {isOngoing && !hasPositions && (
        <div className="mt-auto pt-5">
          <p className="border-t border-border pt-4 text-xs text-muted-foreground">Active project in progress</p>
        </div>
      )}
    </article>
  );
}
