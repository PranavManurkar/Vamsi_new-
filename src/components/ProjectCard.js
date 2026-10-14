"use client";

import { motion } from "framer-motion";

const statusClasses = {
  Ongoing: "border-[#0f172b] bg-white text-[#0f172b]",
  Completed: "border-[#0f172b] bg-white text-black",
};

export default function ProjectCard({ project, index = 0 }) {
  const isOngoing = project.status === "Ongoing";
  const hasPositions = project.positions && project.positions.toLowerCase() === "available";

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="rounded-2xl border border-[#0f172b]/20 bg-white p-5 shadow-[0_6px_16px_rgba(15,23,43,0.08)] transition-shadow duration-300 hover:shadow-[0_14px_24px_rgba(15,23,43,0.12)] sm:p-6"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1 lg:max-w-[68%]">
          <h3 className="text-xl font-bold leading-snug text-[#0f172b] sm:text-2xl">{project.title}</h3>

          <dl className="mt-4 grid gap-3 text-sm text-black sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-[#0f172b]">Funding</dt>
              <dd className="mt-0.5">{project.funding}</dd>
            </div>
            <div>
              <dt className="font-semibold text-[#0f172b]">Duration</dt>
              <dd className="mt-0.5">{project.duration}</dd>
            </div>
          </dl>
        </div>

        <aside className="w-full rounded-xl border border-[#0f172b]/10 bg-white p-4 lg:w-[30%]" aria-label="Project metadata">
          <dl className="space-y-3 text-sm text-black">
            <div className="flex items-center justify-between gap-3">
              <dt className="font-semibold text-[#0f172b]">Role</dt>
              <dd className="font-medium">{project.role}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="font-semibold text-[#0f172b]">Status</dt>
              <dd>
                <span
                  className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClasses[project.status] || "border-slate-300 bg-slate-100 text-slate-700"}`}
                  aria-label={`Project status: ${project.status}`}
                >
                  {project.status}
                </span>
              </dd>
            </div>
            {hasPositions && (
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#0f172b]">Positions</dt>
                  <dd>
                    <span
                      className="inline-flex items-center rounded-full bg-[#0f172b] px-2.5 py-1 text-xs font-semibold text-white"
                      aria-label="Positions available"
                    >
                      Available
                    </span>
                  </dd>
                </div>
                <div className="space-y-2">
                  <a
                    href="/Vamsi_iit_indore_JRF_advertisement.pdf"
                    download="advertisement.pdf"
                    className="block w-full rounded-lg bg-[#0f172b] px-3 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-[#1e293b]"
                  >
                    Download Advertisement
                  </a>
                </div>
              </div>
            )}
            {isOngoing && !hasPositions && (
              <div className="rounded-lg border border-[#0f172b]/20 bg-white px-3 py-2 text-xs font-medium text-[#0f172b]">
                Active project in progress
              </div>
            )}
          </dl>
        </aside>
      </div>
    </motion.article>
  );
}
