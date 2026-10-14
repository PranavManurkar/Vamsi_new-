import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import ResourceCard from "@/components/ResourceCard";
import Teaching from "@/components/Teaching";
import { buttonClasses } from "@/lib/ui";

const softwareTools = [
  {
    title: "Density Functional Theory",
    description: "Electronic-structure tools used for first-principles simulations.",
    items: [
      { label: "VASP", href: "https://www.vasp.at/" },
      { label: "Quantum Espresso", href: "https://www.quantum-espresso.org/" },
      { label: "ABINIT", href: "https://www.abinit.org/" },
    ],
  },
  {
    title: "Cluster Expansion",
    description: "Software for first-principles statistical mechanical alloy modelling.",
    items: [
      {
        label: "CASM",
        href: "https://prisms-center.github.io/CASMcode_docs/",
      },
      {
        label: "ICET",
        href: "https://icet.materialsmodeling.org/index.html",
      },
      {
        label: "ATAT",
        href: "https://www.brown.edu/Departments/Engineering/Labs/avdw/atat/",
      },
    ],
  },
  {
    title: "Molecular Dynamics",
    description: "Tools for atomistic dynamics and thermodynamic studies.",
    items: [
      { label: "LAMMPS", href: "https://www.lammps.org/#gsc.tab=0" },
    ],
  },
  {
    title: "Processing Tools",
    description: "Utilities for structure building, conversion, and atomistic workflows.",
    items: [
      { label: "Atomsk", href: "https://atomsk.univ-lille.fr/links.php" },
      { label: "ASE", href: "https://wiki.fysik.dtu.dk/ase/" },
      { label: "Multishifter", href: "https://github.com/goirijo/multishifter" },
    ],
  },
  {
    title: "Materials Databases & Repositories",
    description: "Reference databases used for screening, comparison, and validation.",
    items: [
      { label: "Materials Project", href: "https://materialsproject.org/" },
      { label: "AFLOW", href: "http://www.aflow.org/" },
      {
        label: "Crystalium",
        href: "http://crystalium.materialsvirtuallab.org/",
      },
      { label: "NIST GitHub Repository", href: "https://github.com/usnistgov" },
      {
        label: "Interatomic Potentials Repository",
        href: "https://www.ctcms.nist.gov/potentials/",
      },
    ],
  },
  {
    title: "Visualization Tools",
    description: "Applications for crystal structure and atomistic simulation visualization.",
    items: [
      { label: "OVITO", href: "https://www.ovito.org/about/" },
      { label: "VESTA", href: "https://jp-minerals.org/vesta/en/" },
      { label: "XcrySDen", href: "http://www.xcrysden.org/" },
      { label: "VMD", href: "http://www.ks.uiuc.edu/Research/vmd/" },
    ],
  },
];

const templates = [
  {
    title: "Project Reporting Template",
    description: "Template for periodic project summaries and technical deliverables.",
    href: "#",
    actionLabel: "Preview",
  },
  {
    title: "Group Handbook",
    description: "Guide for lab processes, documentation standards, and onboarding.",
    href: "#",
    actionLabel: "Preview",
  },
  {
    title: "Seminar Slide Format",
    description: "Slide deck format for research group talks and conference updates.",
    href: "#",
    actionLabel: "Preview",
  },
];

function SectionHeader({ title, subtitle }) {
  return (
    <header>
      <h2 className="text-3xl font-semibold text-primary">{title}</h2>
      <p className="mt-2 max-w-3xl leading-7 text-muted-foreground">{subtitle}</p>
    </header>
  );
}

function SectionBlock({ title, subtitle, items }) {
  return (
    <section>
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="rounded-xl border border-border bg-card p-6">
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">Software</span>
            <h3 className="mt-4 text-xl font-semibold text-primary">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {item.items.map((linkItem) => (
                <li key={linkItem.label}>
                  <a
                    href={linkItem.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={buttonClasses({ variant: "outline", size: "sm" })}
                  >
                    {linkItem.label}
                    <ArrowUpRight />
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function TemplateSection({ title, subtitle, items }) {
  return (
    <section>
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <ResourceCard
            key={item.title}
            title={item.title}
            description={item.description}
            href={item.href}
            actionLabel={item.actionLabel}
          />
        ))}
      </div>
    </section>
  );
}

export default function ResourcesPage() {
  return (
    <>
      {/* Page header text from the design (pages.tsx L265 — Teaching page). */}
      <PageHeader
        eyebrow="Teaching"
        title="Courses & academic training"
        intro="Undergraduate and postgraduate teaching in metallurgy, computational methods, materials informatics, deformation, and ICME."
      />
      <div className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl space-y-20">
          <Teaching />

          <SectionBlock
            title="Software / Tools"
            subtitle="Selected software and toolsets used across simulation, processing, databases, and visualization."
            items={softwareTools}
          />

          {/* <TemplateSection
            title="Templates"
            subtitle="Reference files and documents for presentations, reporting, and internal workflows."
            items={templates}
          /> */}
        </div>
      </div>
    </>
  );
}
