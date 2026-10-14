"use client";

import { useState } from "react";
import { Sprout, Sun } from "lucide-react";
import { buttonClasses } from "@/lib/ui";
import { onTabKeyDown } from "@/lib/tabs";

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

const pill = "rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary";

const SEMESTERS = [
  { id: "autumn", label: "Autumn Semester", sub: "Jul – Nov", icon: Sun, courses: autumnCourses },
  { id: "spring", label: "Spring Semester", sub: "Jan – May", icon: Sprout, courses: springCourses },
];

// redesign: gradient top bar and watermark course number dropped (not in the design palette); design course card (pages.tsx L266).
function CourseCard({ course }) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-semibold text-terracotta">{course.code}</p>
        <div className="flex flex-wrap items-center gap-2">
          <span className={pill}>{course.level}</span>
          <span className="text-xs text-muted-foreground">
            Since {course.since}
            {course.credits && ` · ${course.credits} credits`}
          </span>
        </div>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-primary">{course.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{course.description}</p>
      <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
        {course.topics.map((t) => (
          <span key={t} className={pill}>
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Teaching() {
  const [active, setActive] = useState("autumn");
  const courses = SEMESTERS.find((s) => s.id === active).courses;
  const ids = SEMESTERS.map((s) => s.id);

  return (
    <section id="teaching" className="scroll-mt-28">
      {/* redesign-data: design Teaching page header "Courses & academic training" + intro (pages.tsx L265); repo heading "Teaching". Kept repo. */}
      <h2 className="text-3xl font-semibold text-primary">Teaching</h2>
      <p className="mt-2 max-w-3xl leading-7 text-muted-foreground">
        Courses offered at IIT Indore — Department of Metallurgical Engineering &amp; Materials Science
      </p>

      {/* redesign: spring-animated sliding pill replaced by the design's plain tab buttons. */}
      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Semester">
        {SEMESTERS.map((tab) => {
          const Icon = tab.icon;
          const count = tab.courses.length;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              data-tab={tab.id}
              aria-selected={active === tab.id}
              aria-controls="course-panel"
              tabIndex={active === tab.id ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={(e) => onTabKeyDown(e, ids, active, setActive)}
              className={buttonClasses({ variant: active === tab.id ? "default" : "outline", className: "min-w-0" })}
            >
              <Icon />
              {tab.label}
              <span className="ml-1 text-xs opacity-65">
                {tab.sub} · {count} {count === 1 ? "course" : "courses"}
              </span>
            </button>
          );
        })}
      </div>

      <div id="course-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-8 grid gap-5 md:grid-cols-2">
        {courses.map((course) => (
          <CourseCard key={course.code} course={course} />
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold text-primary">Previous Teaching Experience</h3>
        <p className="mt-1 text-sm text-muted-foreground">@ Indian Institute of Science, Bangalore</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {prevTeaching.map((group) => (
            <div key={group.role} className="rounded-xl bg-primary p-6 text-primary-foreground">
              <h4 className="font-semibold">{group.role}</h4>
              <ul className="mt-3 space-y-2 leading-7 text-primary-foreground/70">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
