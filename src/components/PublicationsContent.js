"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ExternalLink, Search } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import PublicationRows from "@/components/site/PublicationRows";
import { buttonClasses } from "@/lib/ui";

const publications = [
  {
    year: "2021",
    title: "Precipitate shearing, fault energies, and solute segregation to planar faults in Ni-, CoNi-, and Co-base superalloys",
    authors: "Y.M. Eggeler, K.V. Vamsi, T.M. Pollock",
    doi: "10.1146/annurev-matsci-102419-011433",
    scholarUrl: "https://doi.org/10.1146/annurev-matsci-102419-011433",
  },
  {
    year: "2021",
    title: "Modeling APB energies in multicomponent Ni-base superalloys",
    authors: "K.V. Vamsi, S. Karthikeyan",
    doi: "10.1016/j.intermet.2020.107124",
    scholarUrl: "https://doi.org/10.1016/j.intermet.2020.107124",
  },
  {
    year: "2017",
    title: "Yield anomaly in L12 Co3AlxW1− x vis-à-vis Ni3Al",
    authors: "K.V. Vamsi, S. Karthikeyan",
    doi: "10.1016/j.scriptamat.2016.11.019",
    scholarUrl: "https://doi.org/10.1016/j.scriptamat.2016.11.019",
  },
  {
    year: "2012",
    title: "Effect of off-stoichiometry and ternary additions on planar fault energies in Ni3Al",
    authors: "K.V. Vamsi, S. Karthikeyan",
    doi: "10.7449/2012/superalloys_2012_521_530",
    scholarUrl: "https://doi.org/10.7449/2012/superalloys_2012_521_530",
  },
  {
    year: "2018",
    title: "High-throughput estimation of planar fault energies in A3B compounds with L12 structure",
    authors: "K.V. Vamsi, S. Karthikeyan",
    doi: "10.1016/j.actamat.2017.11.051",
    scholarUrl: "https://doi.org/10.1016/j.actamat.2017.11.051",
  },
  {
    year: "2023",
    title: "Tensile behavior of single crystal nickel-based superalloys at 650° C",
    authors: "B. Mansoz, L.M.B. Ormastroni, J. Rame, C. Schwalbe, K.V. Vamsi, P. Caron, ...",
    doi: "10.1016/j.intermet.2023.107976",
    scholarUrl: "https://doi.org/10.1016/j.intermet.2023.107976",
  },
  {
    year: "2021",
    title: "Deformation modes and yield strength anomaly in L12 compounds",
    authors: "K.V. Vamsi, S. Karthikeyan",
    doi: "10.1016/j.jallcom.2021.158411",
    scholarUrl: "https://doi.org/10.1016/j.jallcom.2021.158411",
  },
  {
    year: "2020",
    title: "A new proximate structure for the APB (111) in L12 compounds",
    authors: "K.V. Vamsi, T.M. Pollock",
    doi: "10.1016/j.scriptamat.2020.02.021",
    scholarUrl: "https://doi.org/10.1016/j.scriptamat.2020.02.021",
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
  // Derived from the URL during render (replaces the old setState-in-effect; same fallback to "publications").
  const tabParam = searchParams?.get("tab");
  const activeTab = TABS.some((t) => t.id === tabParam) ? tabParam : "publications";
  const activeLabel = TABS.find((t) => t.id === activeTab).label;

  return (
    <>
      {/* redesign-data: design eyebrow "Publications", title "Academic bibliography" and intro (pages.tsx L256); repo title follows the active tab. Kept repo. */}
      <PageHeader title={activeLabel} />

      <section id="contributions" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* redesign-data: design filters by year (All/2024–26/2020–23/Earlier, pages.tsx L257); repo switches by type tab. Kept repo tabs, styled as the design filter buttons. */}
          <nav aria-label="Contribution type" className="mb-7 flex flex-wrap gap-2">
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
              <PublicationRows items={publications.slice(-8)} />

              {publications.length > 8 && (
                <div className="mt-8 flex justify-center">
                  <a
                    href={SCHOLAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses({ variant: "outline", size: "lg" })}
                  >
                    View All Publications
                    <ExternalLink />
                  </a>
                </div>
              )}

              <div className="mt-12 flex justify-center border-t border-border pt-12">
                <a
                  href={SCHOLAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClasses({ size: "lg" })}
                >
                  <Search />
                  View on Google Scholar
                </a>
              </div>
            </>
          )}

          {activeTab === "proceedings" && (
            <p className="rounded-xl bg-secondary p-6 text-center text-muted-foreground">
              Conference proceedings data coming soon. <br />
              <a
                href={SCHOLAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline underline-offset-4 hover:text-terracotta"
              >
                View full list on Google Scholar
              </a>
            </p>
          )}

          {activeTab === "talks" && (
            <p className="rounded-xl bg-secondary p-6 text-center text-muted-foreground">
              Talks data coming soon. Please provide the list.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
