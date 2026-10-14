"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS_DATA } from "@/lib/projectsData";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Projects() {
  const featured = PROJECTS_DATA.slice(0, 3);

  return (
    <section id="projects" className="scroll-mt-24 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px]">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-[2rem] font-bold leading-tight tracking-tight text-black sm:text-[2.5rem]">
              Projects
            </h2>
            <p className={`${inter.className} mt-3 max-w-3xl text-base text-black sm:text-[1.05rem]`}>
              Ongoing and completed research projects with focus on superalloys, computational materials science,
              and heritage materials characterization.
            </p>
          </div>
          <Link
            href="/projects"
            className={`${inter.className} inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#0f172b] bg-white px-5 py-2.5 text-sm font-semibold text-[#800020] transition-all hover:border-[#800020] hover:shadow-sm`}
          >
            View All Projects
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div className="mt-8 space-y-5">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col items-start justify-between gap-3 rounded-2xl border border-[#0f172b]/20 bg-white px-6 py-5 sm:flex-row sm:items-center"
        >
          <p className={`${inter.className} text-sm text-black`}>
            <span className="font-semibold text-black">{PROJECTS_DATA.length - 3} more projects</span> are available with full funding, duration, and role details.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#800020] px-4 py-2 text-xs font-semibold text-white transition-all hover:scale-[1.02] hover:bg-[#5F0017]"
          >
            Explore Projects
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}