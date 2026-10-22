"use client";

import { useState } from "react";
import { BookOpen, GraduationCap, Sprout, Sun } from "lucide-react";
import { buttonClasses } from "@/lib/ui";
import { onTabKeyDown } from "@/lib/tabs";

const autumnCourses = [
  {
    code: "MM 203",
    title: "Physical Metallurgy 1",
    credits: "2-1-0-3",
    level: "UG",
    since: "July 2023",
  },
  {
    code: "MM 226",
    title: "Material Informatics",
    credits: "2-1-0-1.5",
    level: "UG",
    since: "July 2023",
  },
  {
    code: "MM 353",
    title: "Computational Methods for Materials Lab",
    credits: "0-0-2-1",
    level: "UG",
    since: "July 2023",
  },
  {
    code: "MM 309N",
    title: "Computational Methods for Materials",
    credits: "2-1-0-3",
    level: "UG",
    since: "July 2023",
  },
];

const springCourses = [
  {
    code: "MM 477 / MM 677",
    title: "High Temperature Deformation of Materials",
    credits: "3-0-0",
    level: "UG / PG",
    since: "Jan 2024",
  },
  {
    code: "MM 644",
    title: "Integrated Computational Materials Engineering",
    credits: "3-0-0",
    level: "PG",
    since: "Jan 2024",
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

// Display courses as clean cards (similar to publications), without explanations or keywords
function CourseCard({ course }) {
  return (
    <article className="grid gap-3 border-b border-border p-5 last:border-0 md:grid-cols-[6.5rem_1fr_auto] md:items-center">
      <div>
        <p className="font-semibold text-terracotta">{course.code}</p>
        <span className="mt-1 inline-block text-xs text-muted-foreground">Since {course.since}</span>
      </div>

      <div className="min-w-0">
        <h3 className="text-lg font-semibold leading-snug text-primary">{course.title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          Credits: {course.credits}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span className={pill}>{course.level}</span>
      </div>
    </article>
  );
}

export default function Teaching() {
  const [active, setActive] = useState("autumn");
  const currentSemester = SEMESTERS.find((s) => s.id === active) || SEMESTERS[0];
  const courses = currentSemester.courses;
  const ids = SEMESTERS.map((s) => s.id);

  return (
    <section id="teaching" className="scroll-mt-28">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-3xl font-semibold text-primary">Courses Offered</h2>
          <p className="mt-2 max-w-3xl leading-7 text-muted-foreground">
            Academic courses at IIT Indore — Department of Metallurgical Engineering &amp; Materials Science
          </p>
        </div>
      </div>

      {/* Semester filter tabs */}
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
              <Icon className="mr-1.5 size-4" />
              {tab.label}
              <span className="ml-1 text-xs opacity-65">
                ({count} {count === 1 ? "course" : "courses"})
              </span>
            </button>
          );
        })}
      </div>

      {/* Courses displayed as card container similar to publications */}
      <div
        id="course-panel"
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        className="mt-6 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
      >
        {courses.map((course) => (
          <CourseCard key={course.code} course={course} />
        ))}
      </div>

      {/* Previous Teaching Experience */}
      <div className="mt-14">
        <h3 className="text-xl font-semibold text-primary">Previous Teaching Experience</h3>
        <p className="mt-1 text-sm text-muted-foreground">@ Indian Institute of Science (IISc), Bangalore</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {prevTeaching.map((group) => (
            <div key={group.role} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 text-terracotta">
                <GraduationCap className="size-5" />
                <h4 className="font-semibold text-primary">{group.role}</h4>
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-terracotta" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
