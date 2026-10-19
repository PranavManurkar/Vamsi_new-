import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Microscope, Users } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import PersonCard from "@/components/site/PersonCard";
import { buttonClasses } from "@/lib/ui";

const currentMembers = [
  {
    name: "Burra Vijyusha",
    role: "Undergraduate Student",
    project: "Design of model Ni-Co-X for strength",
    image: "/vijusha.jpeg",
  },
  {
    name: "Pohrselvan",
    role: "Undergraduate Student",
    project: "Understanding segregation behavior to antiphase boundaries",
    image: null,
  },
  {
    name: "Keerthan",
    role: "Undergraduate Student",
    project: "Mechanical properties of In-Sn system",
    image: "/kirtan.jpeg",
  },
  {
    name: "Arham Aneeq",
    role: "Undergraduate Student",
    project: "Modelling strength in FCC solid solutions and precipitate strengthened systems",
    image: "/arham.jpg",
  },
  {
    name: "Kartik Buddhani",
    role: "Undergraduate Student",
    project: "Computational alloy design of Ferritic superalloys",
    image: null,
  },
  {
    name: "Krushna Satish More",
    role: "Undergraduate Student",
    project: "Computational alloy design of Ferritic superalloys",
    image: null,
  },
];

const alumniMembers = [
  {
    name: "Amirthan",
    role: "Alumni · Undergraduate",
    batch: "Class of 2025",
    image: "/Amirthan.avif",
  },
  {
    name: "Nitheesvar",
    role: "Alumni · Undergraduate",
    batch: "Class of 2025",
    image: "/Nitheesvar.avif",
  },
  {
    name: "Vamshi Krishna Rao",
    role: "Alumni · Undergraduate",
    batch: "Class of 2025",
    image: "/Vamshi Krishna Rao.avif",
  },
];

const opportunities = [
  {
    title: "PhD Positions",
    description: "Full funding available for computational materials science research. Teaching Assistantship positions are available.",
    icon: "cap",
    href: "https://academic.iiti.ac.in/phdadvt.php",
    linkLabel: "Institute PhD Portal",
  },
  {
    title: "Postdoctoral Fellows",
    description: "Advanced research opportunities in MPEAs and superalloys. Motivated candidates with strong DFT or atomistic background are encouraged to contact.",
    icon: "microscope",
    href: "/contact",
    linkLabel: "Get in Touch",
  },
  {
    title: "JRF",
    description: "Junior Research Fellowship (ANRF-ARG Project) for motivated graduates to contribute to cutting-edge atomistic simulations and alloy design projects.",
    icon: "jrf",
    href: "https://www.iiti.ac.in/careers/jrf_srf_positions?tab=jrf",
    linkLabel: "View Institute Advertisement",
  },
];

const roleIcons = { cap: GraduationCap, microscope: Microscope, jrf: Users };

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-primary md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export default function PeoplePage() {
  return (
    <>
      <PageHeader
        eyebrow="People"
        title="The VAMSI group"
        intro="Principal investigator, current undergraduate researchers, and alumni."
      />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Principal Investigator Section */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Group Leadership</p>
              <h2 className="text-2xl font-semibold text-primary">Principal Investigator</h2>
            </div>
            <Link href="/faculty" className={buttonClasses({ variant: "outline" })}>
              View Full profile →
            </Link>
          </div>

          {/* PI Card with 1:1 Aspect Ratio Picture */}
          <article className="overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="grid items-center gap-8 md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr]">
              {/* Picture adjusted to 1:1 aspect ratio */}
              <div className="relative aspect-square w-full max-w-[340px] overflow-hidden rounded-xl border border-border bg-secondary shadow-sm">
                <Image
                  src="/vamsi_pfp.jpeg"
                  alt="Dr. Venkata Vamsi Koruprolu"
                  fill
                  priority
                  sizes="(min-width: 1024px) 340px, 300px"
                  className="object-cover object-top"
                />
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                  PRINCIPAL INVESTIGATOR
                </p>
                <h3 className="mt-2 text-3xl font-semibold text-primary md:text-4xl">
                  Dr. Venkata Vamsi Koruprolu
                </h3>
                <p className="mt-2 text-base font-medium text-primary/80">
                  Assistant Professor, Department of Metallurgical Engineering &amp; Materials Science
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  Computational materials scientist working on defect energetics, deformation mechanisms,
                  mechanical behaviour, superalloys, multi-principal element alloys and physics-guided alloy design.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/faculty" className={buttonClasses({ size: "lg" })}>
                    View Full profile →
                  </Link>
                  <Link href="/contact" className={buttonClasses({ variant: "outline", size: "lg" })}>
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Current Team Members */}
          <div className="mt-16">
            <SectionHeading
              title="Current Team Members"
              subtitle="Active students and researchers in the group. Click the LinkedIn icon to view profiles."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {currentMembers.map((member, index) => (
                <PersonCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  detail={member.project}
                  image={member.image}
                  objectPosition={`${35 + index * 10}% 35%`}
                  showLinkedIn={true}
                />
              ))}
            </div>
          </div>

          {/* Alumni */}
          <div className="mt-16">
            <SectionHeading title="Alumni" subtitle="Former members of the research group." />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {alumniMembers.map((member, index) => (
                <PersonCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  detail={member.batch}
                  image={member.image}
                  objectPosition={`${35 + index * 10}% 35%`}
                  showLinkedIn={false}
                />
              ))}
            </div>
          </div>

          {/* Open Roles */}
          <div className="mt-16 border-t border-border pt-14">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              <span className="size-2 rounded-full bg-terracotta" aria-hidden="true" />
              Open Roles · Join Us
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-primary md:text-3xl">Open Positions</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {opportunities.map((item) => {
                const Icon = roleIcons[item.icon];
                const isExternal = item.href && !item.href.startsWith("/");
                return (
                  <div
                    key={item.title}
                    className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-terracotta/40"
                  >
                    <div>
                      <Icon className="size-6 text-terracotta" aria-hidden="true" />
                      <h3 className="mt-4 text-xl font-semibold text-primary">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border">
                      <a
                        href={item.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className={buttonClasses({
                          variant: item.icon === "jrf" ? "default" : "outline",
                          size: "sm",
                          className: "w-full justify-between",
                        })}
                      >
                        <span>{item.linkLabel}</span>
                        <ArrowRight className="size-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
