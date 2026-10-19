"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ExternalLink, Mic, Presentation, Search } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import PublicationRows from "@/components/site/PublicationRows";
import { buttonClasses } from "@/lib/ui";

const publications = [
  {
    year: "2026",
    title: "Creep-Driven Solute Segregation to Planar Faults in Ni-Base Single-Crystal Superalloys",
    authors: "Z. Long, D. Bürger, L. Grünewald, V. K. Rao, K. V. Vamsi, Y. M. Eggeler",
    doi: "10.1007/s11661-026-08173-4",
    scholarUrl: "https://doi.org/10.1007/s11661-026-08173-4",
  },
  {
    year: "2024",
    title: "Antiphase boundaries in B2 intermetallics: Proximate structures, formation energies, and chemical stability",
    authors: "Justin A. Mayer, Tresa M. Pollock, K. V. Vamsi, Ram Seshadri",
    doi: "10.1103/PhysRevMaterials.8.013605",
    scholarUrl: "https://doi.org/10.1103/PhysRevMaterials.8.013605",
  },
  {
    year: "2024",
    title: "Segregation to Creep-induced Planar Faults in Ni-base Single Crystal Superalloys",
    authors: "Z. Long, D. Bürger, C. Dolle, Y. Dai, K. V. Vamsi, Y. M. Eggeler",
    doi: "10.1093/mam/ozae044.625",
    scholarUrl: "https://doi.org/10.1093/mam/ozae044.625",
  },
  {
    year: "2023",
    title: "Tensile behavior of single crystal nickel-based superalloys at 650° C",
    authors: "B. Mansoz, L. M. B. Ormastroni, J. Rame, C. Schwalbe, K. V. Vamsi, P. Caron, et al.",
    doi: "10.1016/j.intermet.2023.107976",
    scholarUrl: "https://doi.org/10.1016/j.intermet.2023.107976",
  },
  {
    year: "2021",
    title: "Precipitate shearing, fault energies, and solute segregation to planar faults in Ni-, CoNi-, and Co-base superalloys",
    authors: "Y. M. Eggeler, K. V. Vamsi, T. M. Pollock",
    doi: "10.1146/annurev-matsci-102419-011433",
    scholarUrl: "https://doi.org/10.1146/annurev-matsci-102419-011433",
  },
  {
    year: "2021",
    title: "High-throughput approach for estimation of intrinsic barriers in FCC structures for alloy design",
    authors: "K. V. Vamsi, M. A. Charpagne, T. M. Pollock",
    doi: "10.1016/j.scriptamat.2021.114126",
    scholarUrl: "https://doi.org/10.1016/j.scriptamat.2021.114126",
  },
  {
    year: "2021",
    title: "Modeling APB energies in multicomponent Ni-base superalloys",
    authors: "K. V. Vamsi, S. Karthikeyan",
    doi: "10.1016/j.intermet.2020.107124",
    scholarUrl: "https://doi.org/10.1016/j.intermet.2020.107124",
  },
  {
    year: "2021",
    title: "Deformation modes and yield strength anomaly in L12 compounds",
    authors: "K. V. Vamsi, S. Karthikeyan",
    doi: "10.1016/j.jallcom.2021.158411",
    scholarUrl: "https://doi.org/10.1016/j.jallcom.2021.158411",
  },
  {
    year: "2020",
    title: "Design of Nickel-Cobalt-Ruthenium multi-principal element alloys",
    authors: "Marie-Agathe Charpagne, K. V. Vamsi, Yolita M. Eggeler, Sean P. Murray, et al.",
    doi: "10.1016/j.actamat.2020.04.040",
    scholarUrl: "https://doi.org/10.1016/j.actamat.2020.04.040",
  },
  {
    year: "2020",
    title: "A new proximate structure for the APB(111) in L12 compounds",
    authors: "K. V. Vamsi, T. M. Pollock",
    doi: "10.1016/j.scriptamat.2020.02.021",
    scholarUrl: "https://doi.org/10.1016/j.scriptamat.2020.02.021",
  },
  {
    year: "2018",
    title: "High-throughput estimation of planar fault energies in A3B compounds with L12 structure",
    authors: "K. V. Vamsi, S. Karthikeyan",
    doi: "10.1016/j.actamat.2017.11.051",
    scholarUrl: "https://doi.org/10.1016/j.actamat.2017.11.051",
  },
  {
    year: "2017",
    title: "Yield anomaly in L12 Co3AlxW1−x vis-à-vis Ni3Al",
    authors: "K. V. Vamsi, S. Karthikeyan",
    doi: "10.1016/j.scriptamat.2016.11.019",
    scholarUrl: "https://doi.org/10.1016/j.scriptamat.2016.11.019",
  },
];

const proceedings = [
  {
    year: "2026",
    title: "Modelling Elastic Moduli in γ′-Ni₃(Al,X) via a CALPHAD Approach",
    authors: "Arham Aneeq and K. V. Vamsi",
    venue: "Proceedings of the ASME 2026 International Mechanical Engineering Congress and Exposition India (IMECE-INDIA2026), September 3–5, 2026, Chennai, India",
    url: "https://asme.pinetec.com/imece-india2026/data/pdfs/trk-3/IMECE-INDIA2026-188347.pdf",
    linkLabel: "Download PDF",
  },
  {
    year: "2012",
    title: "Effect of off-stoichiometry and ternary additions on planar fault energies in Ni3Al",
    authors: "K. V. Vamsi and S. Karthikeyan",
    venue: "Superalloys 2012: 12th International Symposium on Superalloys, TMS, Champion, Pennsylvania, USA, pp. 521–530",
    doi: "10.7449/2012/superalloys_2012_521_530",
    url: "https://doi.org/10.7449/2012/superalloys_2012_521_530",
    linkLabel: "View Paper",
  },
];

const talks = [
  {
    year: "2024",
    title: "Mechanisms-First Computational Design of High-Temperature Structural Alloys",
    event: "Materials Science Colloquium",
    location: "Department of MEMS, IIT Indore",
    type: "Invited Talk",
  },
  {
    year: "2022",
    title: "Planar Fault Energetics and Dislocation Mechanisms in Multi-Principal Element Alloys and Superalloys",
    event: "TMS 2022 151st Annual Meeting & Exhibition",
    location: "Anaheim, California, USA",
    type: "Conference Presentation",
  },
  {
    year: "2021",
    title: "High-Throughput Approaches to Planar Fault Energy Mapping in Ordered Intermetallics",
    event: "Materials Science & Technology (MS&T) Conference",
    location: "Columbus, Ohio, USA",
    type: "Conference Presentation",
  },
  {
    year: "2019",
    title: "Proximate Structures and Stacking Fault Energetics in Complex Alloys",
    event: "Pollock Group Seminar, Materials Department",
    location: "University of California, Santa Barbara (UCSB), USA",
    type: "Invited Presentation",
  },
  {
    year: "2018",
    title: "Computational Modeling of Planar Fault Energies and Yield Anomaly in L12 Alloys",
    event: "Department of Materials Engineering Seminar",
    location: "Indian Institute of Science (IISc), Bangalore, India",
    type: "Research Seminar",
  },
];

const TABS = [
  { id: "publications", label: "Publications" },
  { id: "proceedings", label: "Conference Proceedings" },
  { id: "talks", label: "Talks" },
];

const SCHOLAR_URL = "https://scholar.google.com/citations?user=ducGUjAAAAAJ&hl=en";

export default function PublicationsContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams?.get("tab");
  const activeTab = TABS.some((t) => t.id === tabParam) ? tabParam : "publications";

  return (
    <>
      <PageHeader
        eyebrow="Contributions"
        title="Academic bibliography &amp; talks"
        intro="Chronological journal records, conference proceedings, and invited talks from the supplied CV."
      />

      <section id="contributions" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Contribution type" className="mb-8 flex flex-wrap gap-2">
            {TABS.map((tab) => (
              <Link
                key={tab.id}
                href={`/publications?tab=${tab.id}`}
                scroll={false}
                aria-current={activeTab === tab.id ? "page" : undefined}
                className={buttonClasses({ variant: activeTab === tab.id ? "default" : "outline" })}
              >
                {tab.label}
              </Link>
            ))}
          </nav>

          {activeTab === "publications" && (
            <>
              <PublicationRows items={publications} />

              <div className="mt-12 flex justify-center border-t border-border pt-12">
                <a
                  href={SCHOLAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClasses({ size: "lg" })}
                >
                  <Search className="mr-2 size-4" />
                  View All on Google Scholar
                  <ExternalLink className="ml-2 size-4" />
                </a>
              </div>
            </>
          )}

          {activeTab === "proceedings" && (
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              {proceedings.map((item) => (
                <article
                  key={item.title}
                  className="grid gap-4 border-b border-border p-6 last:border-0 md:grid-cols-[5rem_1fr_auto] md:items-center"
                >
                  <p className="font-semibold text-terracotta">{item.year}</p>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-primary">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary/80">{item.authors}</p>
                    <p className="mt-1.5 text-xs italic text-muted-foreground">{item.venue}</p>
                  </div>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClasses({ variant: "outline", size: "sm", className: "self-start shrink-0" })}
                    >
                      {item.linkLabel || "View"}
                      <ExternalLink className="ml-1.5 size-3.5" />
                    </a>
                  )}
                </article>
              ))}
            </div>
          )}

          {activeTab === "talks" && (
            <div className="space-y-4">
              {talks.map((talk) => (
                <article
                  key={`${talk.year}-${talk.title}`}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-terracotta/40"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-terracotta">
                      {talk.year} · {talk.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{talk.location}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-primary">{talk.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{talk.event}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
