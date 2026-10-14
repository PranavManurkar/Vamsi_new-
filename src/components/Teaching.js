"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Inter, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const autumnCourses = [
  {
    code: "MM 203",
    title: "Physical Metallurgy 1",
    credits: "2-1-0-3",
    level: "UG",
    since: "July 2023",
    description:
      "Covers fundamental principles of physical metallurgy including phase diagrams, nucleation and growth, precipitation strengthening, and microstructural evolution. Emphasizes relationships between processing, microstructure, and mechanical properties in metallic systems.",
    topics: ["Phase Diagrams", "Nucleation & Growth", "Precipitation Hardening", "Microstructure"],
    color: "from-[#0f172b] to-[#475569]",
    bg: "bg-[#f1f5f9]",
    accent: "text-[#0f172b]",
    chip: "bg-[#e0e7ff] text-[#0f172b]",
  },
  {
    code: "MM 226",
    title: "Material Informatics",
    credits: "2-1-0-1.5",
    level: "UG",
    since: "July 2023",
    description:
      "Introduces data-driven approaches and machine learning techniques applied to materials science. Covers data collection, feature engineering, predictive modeling, and optimization algorithms for accelerating materials discovery and design.",
    topics: ["Machine Learning", "Data Analysis", "Materials Discovery", "Python / R"],
    color: "from-[#0f172b] to-[#475569]",
    bg: "bg-[#f1f5f9]",
    accent: "text-[#0f172b]",
    chip: "bg-[#e0e7ff] text-[#0f172b]",
  },
  {
    code: "MM 353",
    title: "Computational Methods for Materials Lab",
    credits: "0-0-2-1",
    level: "UG",
    since: "July 2023",
    description:
      "Hands-on laboratory course exploring computational techniques for materials analysis and simulation. Students implement finite element methods, molecular dynamics simulations, phase-field modeling, and visualization of computational results.",
    topics: ["FEM", "Molecular Dynamics", "Phase-field Modeling", "Computational Tools"],
    color: "from-[#0f172b] to-[#475569]",
    bg: "bg-[#f1f5f9]",
    accent: "text-[#0f172b]",
    chip: "bg-[#e0e7ff] text-[#0f172b]",
  },
  {
    code: "MM 309N",
    title: "Computational Methods for Materials",
    credits: "2-1-0-3",
    level: "UG",
    since: "July 2023",
    description:
      "Introduces numerical methods and computational techniques applied to materials science problems. Topics include finite difference methods, molecular dynamics fundamentals, Monte Carlo simulations, and data analysis using Python/MATLAB.",
    topics: ["Numerical Methods", "Molecular Dynamics", "Monte Carlo", "Python / MATLAB"],
    color: "from-[#0f172b] to-[#475569]",
    bg: "bg-[#f1f5f9]",
    accent: "text-[#0f172b]",
    chip: "bg-[#e0e7ff] text-[#0f172b]",
  },
];

const springCourses = [
  {
    code: "MM 477 / MM 677",
    title: "High Temperature Deformation of Materials",
    credits: "3-0-0",
    level: "UG / PG",
    since: "Jan 2024",
    description:
      "Covers mechanisms governing plastic deformation at elevated temperatures in metals and alloys. Focuses on creep, dislocation dynamics, planar fault energies, and deformation pathways in superalloys and intermetallics.",
    topics: ["Creep Mechanisms", "Dislocation Dynamics", "Planar Fault Energies", "Superalloys"],
    color: "from-[#0f172b] to-[#475569]",
    bg: "bg-[#f1f5f9]",
    accent: "text-[#0f172b]",
    chip: "bg-[#e0e7ff] text-[#0f172b]",
  },
  {
    code: "MM 644",
    title: "Integrated Computational Materials Engineering",
    credits: "3-0-0",
    level: "PG",
    since: "Jan 2024",
    description:
      "Explores the ICME paradigm for accelerated alloy design. Integrates DFT, CALPHAD thermodynamics, phase-field modelling, and data-driven methods to link processing–structure–property–performance relationships.",
    topics: ["DFT", "CALPHAD", "Phase-field Modelling", "Materials Informatics"],
    color: "from-[#0f172b] to-[#475569]",
    bg: "bg-[#f1f5f9]",
    accent: "text-[#0f172b]",
    chip: "bg-[#e0e7ff] text-[#0f172b]",
  },
];

const prevTeaching = [
  {
    role: "Lab Instructor",
    items: [
      "Structure and Characterization Lab (UG) — 2013, IISc",
      "Mechanical Behavior Lab (Masters) — 2010 & 2011, IISc",
    ],
  },
  {
    role: "Instructor",
    items: [
      "TEM Training for PhD students — 2013 & 2014, IISc",
      "NRCM Workshop on Molecular Dynamics & Monte Carlo Methods — 2014, IISc",
    ],
  },
];

function LevelBadge({ level }) {
  const map = {
    UG: "bg-[#e0e7ff] text-[#0f172b] border-[#bfdbfe]",
    PG: "bg-[#e0e7ff] text-[#0f172b] border-[#bfdbfe]",
    "UG / PG": "bg-[#e0e7ff] text-[#0f172b] border-[#bfdbfe]",
  };
  return (
    <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${map[level] || map["UG / PG"]}`}>
      {level}
    </span>
  );
}

function CourseCard({ course, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#0f172b]/30 bg-white shadow-[0_2px_14px_rgba(15,23,43,0.08)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(15,23,43,0.15)] hover:-translate-y-0.5"
    >
      {/* Gradient top bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${course.color}`} />

      <div className="flex flex-1 flex-col p-6">
        {/* Top meta */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <LevelBadge level={course.level} />
            <span className="text-[11px] text-black">Since {course.since}</span>
            {course.credits && (
              <span className="text-[11px] text-black">· {course.credits} credits</span>
            )}
          </div>
          {/* Watermark number */}
          <span className={`${playfair.className} select-none text-[2.4rem] font-bold leading-none text-[#E8D5E0]/60`}>
            {course.code.replace(/\s/g, "").replace(/MM/g, "").split("/")[0]}
          </span>
        </div>

        {/* Course code */}
        <p className={`${inter.className} mt-3 text-[11px] font-bold uppercase tracking-[0.12em] text-black`}>
          {course.code}
        </p>

        {/* Title */}
        <h3 className={`${playfair.className} mt-1 text-[1.22rem] font-semibold leading-snug text-[#0f172b] sm:text-[1.3rem]`}>
          {course.title}
        </h3>

        {/* Description */}
        <p className={`${inter.className} mt-3 flex-1 text-[0.88rem] leading-relaxed text-black`}>
          {course.description}
        </p>

        {/* Topic chips */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {course.topics.map((t) => (
            <span key={t} className={`rounded-md px-2.5 py-1 text-[11px] font-medium ${course.chip}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Teaching() {
  const [active, setActive] = useState("autumn");

  const courses = active === "autumn" ? autumnCourses : springCourses;

  return (
    <section id="teaching" className="scroll-mt-24 py-4 sm:py-8 lg:py-4">
      <div className="mx-auto max-w-[1280px]">

        {/* ── Section header ── */}
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-[1.9rem]">
            Teaching
          </h2>
          <p className={`${inter.className} mt-2 max-w-3xl text-sm text-black sm:text-base`}>
            Courses offered at IIT Indore — Department of Metallurgical Engineering &amp; Materials Science
          </p>
        </div>

        {/* ── Semester Toggle ── */}
        <div className="mt-10 flex justify-center">
            <div className="relative flex rounded-2xl border border-[#cbd5e1] bg-[#f1f5f9] p-1.5 shadow-inner">
            {/* Sliding pill */}
            <motion.div
              className="absolute inset-y-1.5 rounded-xl bg-white shadow-[0_2px_8px_rgba(128,0,32,0.12)]"
              animate={{
                x: active === "autumn" ? 0 : "100%",
                width: "50%",
              }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
            />

            {[
              {
                id: "autumn",
                label: "Autumn Semester",
                sub: "Jul – Nov",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                ),
                activeColor: "text-[#0f172b]",
                count: autumnCourses.length,
              },
              {
                id: "spring",
                label: "Spring Semester",
                sub: "Jan – May",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4">
                    <path d="M12 22V12M12 12C12 7 7 4 2 6M12 12C12 7 17 4 22 6M12 12C9 10 6 11 4 14M12 12C15 10 18 11 20 14" />
                  </svg>
                ),
                activeColor: "text-[#0f172b]",
                count: springCourses.length,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`relative z-10 flex min-w-[160px] items-center justify-center gap-2.5 rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-200 sm:min-w-[200px] ${
                  active === tab.id ? tab.activeColor : "text-[#0f172b] hover:text-[#1e293b]"
                }`}
              >
                <span className={active === tab.id ? tab.activeColor : "text-[#0f172b]"}>
                  {tab.icon}
                </span>
                <span className="flex flex-col items-start leading-none">
                  <span className="text-[13px]">{tab.label}</span>
                  <span className={`mt-0.5 text-[10px] font-normal ${active === tab.id ? "opacity-70" : "text-[#0f172b]/60"}`}>
                    {tab.sub} · {tab.count} {tab.count === 1 ? "course" : "courses"}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Course Cards (animated swap) ── */}
        <div className="mt-8 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: active === "spring" ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: active === "spring" ? -30 : 30 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className={`grid gap-5 ${courses.length === 1 ? "max-w-[520px]" : "sm:grid-cols-2"}`}
            >
              {courses.map((course, i) => (
                <CourseCard key={course.code} course={course} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Previous Teaching Experience ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 rounded-2xl border border-[#cbd5e1] bg-[#f1f5f9] px-6 py-6 sm:px-8"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#e0e7ff] text-[#0f172b]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4">
                <path d="m3 10 9-5 9 5-9 5-9-5Z"/>
                <path d="M7 12v4c0 1.1 2.2 2 5 2s5-.9 5-2v-4"/>
              </svg>
            </div>
            <div>
              <h3 className={`${playfair.className} text-lg font-semibold text-[#0f172b]`}>
                Previous Teaching Experience
              </h3>
              <p className={`${inter.className} text-xs text-black`}>@ Indian Institute of Science, Bangalore</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {prevTeaching.map((group) => (
              <div key={group.role}>
                <p className={`${inter.className} mb-3 text-[11px] font-bold uppercase tracking-widest text-[#800020]`}>
                  {group.role}
                </p>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#800020]" />
                      <span className={`${inter.className} text-[0.875rem] leading-snug text-black`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}