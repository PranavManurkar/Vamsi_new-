import Image from "next/image";
import { ArrowUpRight, GraduationCap, Mail, Phone } from "lucide-react";
import AcademicTabs from "@/components/site/AcademicTabs";
import PageHeader from "@/components/site/PageHeader";
import { buttonClasses } from "@/lib/ui";

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M6.9 8.5a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM5.5 10h2.8v8.5H5.5V10Zm4.4 0h2.7v1.2h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.5 1.9 3.5 4.4v4.4h-2.8v-3.9c0-.9 0-2.1-1.3-2.1-1.3 0-1.5 1-1.5 2v4h-2.8V10Z" />
    </svg>
  );
}

function IconScholar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <path d="m3 10 9-5 9 5-9 5-9-5Z" />
      <path d="M7 12v4c0 1.1 2.2 2 5 2s5-.9 5-2v-4" />
    </svg>
  );
}

function IconTwitter() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <path d="M22 5.8a8.8 8.8 0 0 1-2.5.7 4.2 4.2 0 0 0 1.8-2.4c-.9.6-2 .9-3 .1a4.3 4.3 0 0 0-7.4 4A12.1 12.1 0 0 1 3 4.9a4.3 4.3 0 0 0 1.3 5.8 4.2 4.2 0 0 1-1.9-.5v.1a4.3 4.3 0 0 0 3.4 4.2c-.4.1-.8.1-1.2 0a4.3 4.3 0 0 0 4 3 8.6 8.6 0 0 1-5.3 1.8c-.3 0-.7 0-1-.1A12.2 12.2 0 0 0 9 21c8 0 12.5-6.8 12.2-12.8A8.8 8.8 0 0 0 22 5.8Z" />
    </svg>
  );
}

const socialClass =
  "inline-flex size-11 items-center justify-center rounded-lg border border-border bg-card text-primary transition-colors hover:bg-primary hover:text-primary-foreground";
const sectionCard = "rounded-2xl border border-border bg-card p-6 md:p-8";
const sideCard = "rounded-xl border border-border bg-card p-6";
const pill = "rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary";

const researchInterests = [
  "DFT",
  "ICME",
  "Computational thermodynamics",
  "Materials informatics",
  "Cluster expansion",
  "Machine-learning interatomic potentials",
  "Crystal defects",
  "Planar-fault energies",
  "Deformation pathways",
  "High-temperature deformation",
  "Superalloys",
  "MPEAs",
];

const externalProfiles = [
  { label: "Google Scholar", href: "https://scholar.google.co.in/citations?user=ducGUjAAAAAJ&hl=en", icon: <IconScholar /> },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/K-V-Vamsi",
    icon: (
      <Image
        src="/Researchgate--Streamline-Simple-Icons.svg"
        alt=""
        width={16}
        height={16}
        aria-hidden="true"
        className="h-4 w-4"
      />
    ),
  },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kvvamsi/", icon: <IconLinkedIn /> },
  { label: "IIT Indore – MEMS Dept.", href: "http://mems.iiti.ac.in/", icon: <GraduationCap className="size-4" /> },
];

export default function FacultyPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Professor & principal investigator"
        intro="Academic profile, research interests, appointments, and selected distinctions."
      />

      <div className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Profile header with 1:1 aspect ratio picture */}
          <div className="grid overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8 lg:grid-cols-[340px_1fr] items-center gap-8">
            <div className="relative aspect-square w-full max-w-[340px] overflow-hidden rounded-xl border border-border bg-secondary shadow-sm">
              <Image
                src="/vamsi_pfp.jpeg"
                alt="Dr. Venkata Vamsi Koruprolu"
                fill
                priority
                sizes="(min-width: 1024px) 340px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div>
              <span className={pill}>Principal Investigator</span>
              <h2 className="mt-3 text-3xl font-semibold text-primary md:text-4xl">
                Dr. Venkata Vamsi Koruprolu
              </h2>
              <p className="mt-2 text-base font-medium text-muted-foreground">
                Assistant Professor · Department of Metallurgical Engineering and Materials Science
              </p>
              <p className="text-muted-foreground">Indian Institute of Technology Indore</p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary">
                <a href="mailto:kvvamsi@iiti.ac.in" className="flex items-center gap-1.5 hover:text-terracotta">
                  <Mail className="size-4 text-terracotta" aria-hidden="true" /> kvvamsi@iiti.ac.in
                </a>
                <span className="flex items-center gap-1.5">
                  <Phone className="size-4 text-terracotta" aria-hidden="true" /> +91-731-660-3333 ext. 5568
                </span>
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.linkedin.com/in/kvvamsi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={socialClass}
                >
                  <IconLinkedIn />
                </a>
                <a
                  href="https://scholar.google.co.in/citations?user=ducGUjAAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Scholar"
                  className={socialClass}
                >
                  <IconScholar />
                </a>
                <a
                  href="https://www.researchgate.net/profile/K-V-Vamsi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ResearchGate"
                  className={`group ${socialClass}`}
                >
                  <Image
                    src="/Researchgate--Streamline-Simple-Icons.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="h-4 w-4 brightness-0 group-hover:invert"
                  />
                </a>
                <a
                  href="https://twitter.com/kvvamsi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className={socialClass}
                >
                  <IconTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
            <div className="space-y-8">
              <section className={sectionCard}>
                <h2 className="text-2xl font-semibold text-primary">About</h2>
                <div className="mt-4 space-y-4 leading-8 text-muted-foreground">
                  <p>
                    Welcome to my profile! I am Dr. K. V. Vamsi, an Assistant Professor in the Department of
                    Metallurgical Engineering and Materials Science at the Indian Institute of Technology Indore,
                    India.
                  </p>
                  <p>
                    A deep fascination with high-temperature structural alloys has driven my research journey.
                    Specifically, my expertise lies in superalloys — a field that has been a central focus since my PhD
                    studies. I have dedicated my career to unravelling the intricacies of these exceptional materials,
                    exploring alloy design principles and deformation pathways crucial for high-temperature applications.
                  </p>
                  <p>
                    In addition to my work on superalloys, I have also ventured into the exciting domain of
                    Multi-Principal Element Alloys (MPEAs) during my Postdoctoral research. This exploration has
                    broadened my perspective, allowing me to draw insights from diverse alloy systems and apply them to
                    the challenges of high-temperature structural materials.
                  </p>
                  <p>
                    I lead the VAMSI Research Group, connecting first-principles calculations, defect energetics and
                    computational thermodynamics to deformation mechanisms, mechanical properties and physics-guided
                    alloy design. Machine learning and surrogate models complement this physical-metallurgy foundation.
                  </p>
                </div>
              </section>

              {/* Education, Appointments, Distinctions & Service */}
              <AcademicTabs />
            </div>

            <div className="space-y-6">
              <aside className={sideCard}>
                <h2 className="text-lg font-semibold text-primary">Research Interests</h2>
                <ul className="mt-4 space-y-2.5">
                  {researchInterests.map((interest) => (
                    <li key={interest} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
                      <span>{interest}</span>
                    </li>
                  ))}
                </ul>
              </aside>

              <aside className={sideCard}>
                <h2 className="text-lg font-semibold text-primary">External Profiles</h2>
                <div className="mt-4 space-y-2.5">
                  {externalProfiles.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClasses({ variant: "outline", className: "w-full justify-start" })}
                    >
                      {link.icon}
                      {link.label}
                      <ArrowUpRight className="ml-auto" />
                    </a>
                  ))}
                </div>
              </aside>

              <aside className="rounded-xl bg-secondary p-6">
                <h2 className="text-lg font-semibold text-primary">Interested in joining?</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  We are actively looking for a JRF, PhD students, and postdoctoral researchers in computational materials science.
                </p>
                <div className="mt-4 space-y-2">
                  <a
                    href="https://www.iiti.ac.in/careers/jrf_srf_positions?tab=jrf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses({ variant: "terracotta", className: "w-full justify-between" })}
                  >
                    <span>View JRF Hiring</span>
                    <ArrowUpRight className="size-4" />
                  </a>
                  <a href="/contact" className={buttonClasses({ variant: "outline", className: "w-full" })}>
                    Get in Touch
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
