import Link from "next/link";
import { ArrowRight, Download, ExternalLink, GraduationCap, Microscope, Users } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import { buttonClasses } from "@/lib/ui";

const opportunities = [
  {
    title: "PhD Positions",
    description: "Full funding available for computational materials science research. Teaching Assistantship and institute fellowship positions are open.",
    icon: "cap",
    primaryLink: {
      label: "IIT Indore PhD Portal",
      href: "https://academic.iiti.ac.in/phdadvt.php",
      external: true,
    },
  },
  {
    title: "Postdoctoral Fellows",
    description: "Advanced research opportunities in MPEAs and superalloys. Candidates with strong DFT, CALPHAD or molecular dynamics skills are welcome to contact.",
    icon: "microscope",
    primaryLink: {
      label: "Contact PI",
      href: "/contact",
      external: false,
    },
  },
  {
    title: "Junior Research Fellow (JRF)",
    description: "Recruiting a Junior Research Fellow under the ANRF-ARG project with a potential pathway to a PhD at IIT Indore.",
    icon: "jrf",
    badge: "Actively Hiring",
    primaryLink: {
      label: "View Institute Listing",
      href: "https://www.iiti.ac.in/careers/jrf_srf_positions?tab=jrf",
      external: true,
    },
    secondaryLink: {
      label: "Download PDF",
      href: "/Vamsi_iit_indore_JRF_advertisement.pdf",
      download: true,
    },
  },
];

const roleIcons = { cap: GraduationCap, microscope: Microscope, jrf: Users };

export default function JoinPage() {
  return (
    <>
      <PageHeader
        eyebrow="Openings · Applications welcome"
        title="Join the research group"
        intro="The VAMSI Research Group is actively seeking a Junior Research Fellow (JRF), PhD students, and motivated postdoctoral researchers."
      />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3">
            {opportunities.map((item) => {
              const Icon = roleIcons[item.icon];
              return (
                <article
                  key={item.title}
                  className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-terracotta/40"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <Icon className="size-6 text-terracotta" aria-hidden="true" />
                      {item.badge && (
                        <span className="rounded-full bg-terracotta px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-primary">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </div>

                  <div className="mt-6 flex flex-col gap-2 border-t border-border pt-4">
                    {item.primaryLink && (
                      <a
                        href={item.primaryLink.href}
                        target={item.primaryLink.external ? "_blank" : undefined}
                        rel={item.primaryLink.external ? "noopener noreferrer" : undefined}
                        className={buttonClasses({
                          variant: item.badge ? "default" : "outline",
                          size: "sm",
                          className: "w-full justify-between",
                        })}
                      >
                        <span>{item.primaryLink.label}</span>
                        {item.primaryLink.external ? <ExternalLink className="size-3.5" /> : <ArrowRight className="size-3.5" />}
                      </a>
                    )}

                    {item.secondaryLink && (
                      <a
                        href={item.secondaryLink.href}
                        download="Vamsi_iit_indore_JRF_advertisement.pdf"
                        className={buttonClasses({
                          variant: "outline",
                          size: "sm",
                          className: "w-full justify-between",
                        })}
                      >
                        <span>{item.secondaryLink.label}</span>
                        <Download className="size-3.5" />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Apply Now Banner */}
          <div className="mt-10 flex flex-col items-start gap-4 rounded-xl bg-primary p-7 text-primary-foreground sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Interested in joining our team?</h2>
              <p className="mt-1 text-sm text-primary-foreground/80">
                Email your CV, statement of purpose, and transcripts directly to Dr. Vamsi or visit our contact page.
              </p>
            </div>
            <Link href="/contact" className={buttonClasses({ variant: "terracotta", size: "lg", className: "shrink-0" })}>
              Apply / Get in Touch
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
