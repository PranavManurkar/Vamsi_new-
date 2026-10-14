"use client";

import { useState } from "react";
import { buttonClasses } from "@/lib/ui";
import { onTabKeyDown } from "@/lib/tabs";

// Education / Appointments / Distinctions & service — content and layout verbatim from the design
// AboutPage (pages.tsx L149-172, data.ts education + experience).
const education = [
  ["2010–2018", "Ph.D. in Materials Engineering", "Indian Institute of Science, Bangalore", "Planar Fault Energies in L1₂ Compounds · Advisor: Prof. S. Karthikeyan"],
  ["2007–2009", "M.E. in Materials Engineering", "Indian Institute of Science, Bangalore", "Stability of Ni₃(Al,Ti) · Best Thesis Nomination"],
  ["2002–2006", "B.E. in Metallurgical Engineering", "Andhra University College of Engineering, Visakhapatnam", "Effect of cold upsetting on Al–4Cu"],
];

const experience = [
  ["2023–Present", "Assistant Professor", "IIT Indore", "Leads the VAMSI Research Group in deformation mechanisms, MPEAs, high-throughput methods, and ICME."],
  ["2022–2023", "Consultant, ICME Group", "TCS Research", "Developed coarsening and strength-prediction workflow modules for superalloys."],
  ["2018–2022", "Postdoctoral Researcher", "UC Santa Barbara · Prof. Tresa M. Pollock", "Studied competing deformation mechanisms, descriptors, and short-range order in MPEAs and superalloys."],
  ["2017–2018", "Research Associate", "Indian Institute of Science, Bangalore", "Worked on B2 aluminides and structural instabilities in β-Ti alloys."],
  ["2010–2017", "Ph.D. Student", "Indian Institute of Science, Bangalore", "Modelled composition- and temperature-dependent deformation modes in ordered alloys."],
  ["2009–2010", "Researcher", "TATA Steel R&D, Jamshedpur", "DFT studies of particle–surfactant and nanoparticle–substrate interactions."],
  ["2006–2007", "Senior Engineer", "ISPAT Industries, Dolvi", ""],
];

const TABS = ["Education", "Appointments", "Distinctions & service"];
const rowClass = "grid gap-2 border-b border-border pb-5 last:border-0 last:pb-0 md:grid-cols-[8rem_1fr]";

export default function AcademicTabs() {
  const [tab, setTab] = useState("Education");

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Academic profile sections">
        {TABS.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            id={`academic-tab-${TABS.indexOf(item)}`}
            data-tab={item}
            aria-selected={tab === item}
            aria-controls="academic-panel"
            tabIndex={tab === item ? 0 : -1}
            onClick={() => setTab(item)}
            onKeyDown={(e) => onTabKeyDown(e, TABS, tab, setTab)}
            className={buttonClasses({ variant: tab === item ? "default" : "outline" })}
          >
            {item}
          </button>
        ))}
      </div>

      <div
        id="academic-panel"
        role="tabpanel"
        aria-labelledby={`academic-tab-${TABS.indexOf(tab)}`}
        className="mt-6 rounded-2xl border border-border bg-card p-6 md:p-8"
      >
        {tab === "Education" && (
          <div className="space-y-6">
            {education.map(([period, degree, institution, detail]) => (
              <article className={rowClass} key={degree}>
                <p className="font-semibold text-terracotta">{period}</p>
                <div>
                  <h3 className="font-semibold text-primary">{degree}</h3>
                  <p className="text-muted-foreground">{institution}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
                </div>
              </article>
            ))}
          </div>
        )}
        {tab === "Appointments" && (
          <div className="space-y-6">
            {experience.map(([period, role, institution, detail]) => (
              <article className={rowClass} key={`${period}-${role}`}>
                <p className="font-semibold text-terracotta">{period}</p>
                <div>
                  <h3 className="font-semibold text-primary">{role}</h3>
                  <p className="text-muted-foreground">{institution}</p>
                  {detail && <p className="mt-1 text-sm leading-6 text-muted-foreground">{detail}</p>}
                </div>
              </article>
            ))}
          </div>
        )}
        {tab === "Distinctions & service" && (
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-primary">Selected distinctions</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                <li>Best Thesis Nomination, M.E., IISc Bangalore</li>
                <li>First Prize, IISc Annual Student Symposium posters, 2012 and 2014</li>
                <li>Second Prize, 16th ICSMA poster, 2012</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary">Current institute service</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                <li>Convenor, Tinkerer’s Laboratory, IIT Indore</li>
                <li>Member, PhD Search Committee</li>
                <li>Member, Centre for Translational Research</li>
                <li>Reviewer for major materials-science journals</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
