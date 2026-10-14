import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Microscope, Users } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import PersonCard from "@/components/site/PersonCard";
import { buttonClasses } from "@/lib/ui";

const currentMembers = [
  {
    name: "Burra Vijayusha",
    role: "Undergraduate Student",
    summary: "Computational modeling of alloy properties and phase stability",
    image: "/vijusha.jpeg",
  },
  {
    name: "Pohrselvan",
    role: "Undergraduate Student",
    summary: "Atomistic simulations and material deformation mechanisms",
    // redesign-data: repo pointed to /pohrselvan.svg (missing); public/pohrselvan.jpg is an SVG "Photo Coming Soon" placeholder
    // misnamed as .jpg, which browsers will not render. No photo available, so the card uses the design initials avatar (pages.tsx L55).
    image: null,
  },
  {
    name: "Keerthan",
    role: "Undergraduate Student",
    summary: "High-throughput screening and machine learning for materials",
    image: "/kirtan.jpeg",
  },
  {
    name: "Arham Aneeq",
    role: "Undergraduate Student",
    summary: "Thermodynamic modeling of multi-component alloy systems",
    image: "/arham.jpg",
  },
];

const alumniMembers = [
  {
    name: "Amirthan",
    role: "Undergraduate Student",
    batch: "Class of 2025",
    image: "/Amirthan.avif",
  },
  {
    name: "Nitheesvar",
    role: "Undergraduate Student",
    batch: "Class of 2025",
    image: "/Nitheesvar.avif",
  },
  {
    name: "Vamshi Krishna Rao",
    role: "Undergraduate Student",
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
  },
  {
    title: "Postdoctoral Fellows",
    description: "Coming soon",
    icon: "microscope",
  },
  {
    title: "JRF",
    description: "Junior Research Fellowship for motivated graduates to contribute to cutting-edge atomistic simulations and alloy design projects",
    icon: "jrf",
    href: "/projects",
  },
];

const roleIcons = { cap: GraduationCap, microscope: Microscope, jrf: Users };

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-semibold text-primary">{title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}

export default function PeoplePage() {
  return (
    <>
      {/* Page header text from the design (pages.tsx L236). */}
      <PageHeader
        eyebrow="People"
        title="The VAMSI group"
        intro="Principal investigator, current undergraduate researchers, and alumni listed in the supplied CV."
      />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-primary">Group Leader</h2>
              <p className="mt-1 text-sm text-muted-foreground">Dr. Vamsi</p>
            </div>
            <Link href="/faculty" className={buttonClasses({ variant: "outline" })}>
              View full profile
            </Link>
          </div>

          <article className="grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-[0.6fr_1.4fr]">
            <div className="relative min-h-[260px] lg:max-h-[34rem]">
              <Image
                src="/vamsi_pfp.jpeg"
                alt="Dr. K. V. Vamsi"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-7 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">Principal Investigator</p>
              <h3 className="mt-3 text-3xl font-semibold text-primary">Dr. K. V. Vamsi</h3>
              <p className="mt-2 text-muted-foreground">
                Assistant Professor, Department of Metallurgical Engineering and Materials Science, IIT Indore
              </p>
              <p className="mt-6 leading-8 text-muted-foreground">
                Leading the VAMSI Research Group with expertise in computational materials science,
                high-temperature alloys, and ICME frameworks.
              </p>
            </div>
          </article>

          {/* redesign-data: design uses initials avatars, 3 current students (no Arham Aneeq) and alumni "2024" (data.ts:1-11); repo: photos, 4 members, "Class of 2025". Kept repo. */}
          <div className="mt-14">
            <SectionHeading title="Current Team Members" subtitle="Active students and researchers in the group." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {currentMembers.map((member, index) => (
                <PersonCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  detail={member.summary}
                  image={member.image}
                  objectPosition={`${35 + index * 10}% 35%`}
                />
              ))}
            </div>
          </div>

          <div className="mt-14">
            <SectionHeading title="Alumni" subtitle="Former members of the group." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {alumniMembers.map((member, index) => (
                <PersonCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  detail={member.batch}
                  image={member.image}
                  objectPosition={`${35 + index * 10}% 35%`}
                />
              ))}
            </div>
          </div>

          <div className="mt-14 border-t border-border pt-12">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              <span className="size-2 rounded-full bg-terracotta" aria-hidden="true" />
              Open Roles
            </p>

            {/* redesign: role cards left-aligned per the design (repo centred them). */}
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {opportunities.map((item) => {
                const Icon = roleIcons[item.icon];
                const external = item.href && !item.href.startsWith("/");
                return (
                  <a
                    href={item.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    key={item.title}
                    className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-terracotta/40"
                  >
                    <Icon className="size-6 text-terracotta" aria-hidden="true" />
                    <h3 className="mt-4 text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
