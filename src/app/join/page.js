import Link from "next/link";
import { ArrowRight, GraduationCap, Microscope, Users } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import { buttonClasses } from "@/lib/ui";

const opportunities = [
  {
    title: "PhD Positions",
    description: "Full funding available for computational materials science research",
    icon: "cap",
  },
  {
    title: "Postdoctoral Fellows",
    description: "Advanced research opportunities in MPEAs and superalloys",
    icon: "microscope",
  },
  {
    title: "JRF",
    description: "Junior Research Fellowship for motivated graduates to contribute to cutting-edge atomistic simulations and alloy design projects",
    icon: "jrf",
  },
];

const roleIcons = { cap: GraduationCap, microscope: Microscope, jrf: Users };

export default function JoinPage() {
  return (
    <>
      {/* redesign-data: design title "Join the research group" + intro (pages.tsx L274); repo page only has the "Open Roles" pill. Title reuses the repo's "Join Our Team" heading. */}
      {/* redesign: repo hero-placeholder.svg background + blur replaced by the design dot-field texture. */}
      <PageHeader eyebrow="Open Roles" title="Join Our Team" />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          {/* redesign-data: design role texts and "Applications welcome" label (pages.tsx L281-284); repo texts kept. */}
          <div className="grid gap-5 md:grid-cols-3">
            {opportunities.map((item) => {
              const Icon = roleIcons[item.icon];
              return (
                <article key={item.title} className="rounded-xl border border-border bg-card p-6">
                  <Icon className="size-6 text-terracotta" aria-hidden="true" />
                  <h2 className="mt-4 text-xl font-semibold text-primary">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>

          {/* redesign-data: design has a "How to apply" list + mailto button (pages.tsx L285); repo has a single Apply Now CTA to /#contact. Kept repo. */}
          <div className="mt-8 flex flex-col items-start gap-4 rounded-xl bg-primary p-7 text-primary-foreground sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold">Apply Now</h2>
            <Link href="/#contact" className={buttonClasses({ variant: "terracotta", size: "lg" })}>
              Apply Now
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
