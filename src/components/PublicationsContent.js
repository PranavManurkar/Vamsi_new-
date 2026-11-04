"use client";

import { useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import PublicationRows from "@/components/site/PublicationRows";
import { buttonClasses } from "@/lib/ui";
import {
  journalPublications,
  conferenceProceedings,
  talks,
} from "@/data/publicationsData";

const CATEGORY_TABS = [
  { id: "publications", label: "Publications", count: journalPublications.length },
  { id: "proceedings", label: "Conference Proceedings", count: conferenceProceedings.length },
  { id: "talks", label: "Talks", count: talks.length },
];

const PERIOD_TABS = [
  { id: "all", label: "All" },
  { id: "2024-26", label: "2024–26" },
  { id: "2020-23", label: "2020–23" },
  { id: "earlier", label: "Earlier" },
];

const SCHOLAR_URL = "https://scholar.google.com/citations?user=ducGUjAAAAAJ&hl=en";

export default function PublicationsContent() {
  const [activeCategory, setActiveCategory] = useState("publications");
  const [activePeriod, setActivePeriod] = useState("all");

  const filteredJournalPublications = journalPublications.filter((pub) => {
    const year = parseInt(pub.year, 10);
    if (activePeriod === "2024-26") return year >= 2024 && year <= 2026;
    if (activePeriod === "2020-23") return year >= 2020 && year <= 2023;
    if (activePeriod === "earlier") return year < 2020;
    return true;
  });

  return (
    <>
      <PageHeader
        eyebrow="PUBLICATIONS"
        title="Academic bibliography"
        intro="Peer-reviewed journal publications, conference proceedings, and invited talks from Dr. Venkata Vamsi and the VAMSI Research Group."
      />

      <section id="publications" className="px-5 pt-8 pb-16 md:px-8 md:pt-10 md:pb-20">
        <div className="mx-auto max-w-7xl">
          {/* Main category pills (Publications | Conference Proceedings | Talks) */}
          <nav aria-label="Publication category tabs" className="mb-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(tab.id);
                    setActivePeriod("all");
                  }}
                  aria-pressed={isActive}
                  className={`rounded-lg px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-border/80 bg-card/60 text-primary hover:bg-secondary hover:border-terracotta/40"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Sub-filters for Journal Publications period */}
          {activeCategory === "publications" && (
            <div className="mb-6 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold uppercase tracking-wider text-muted-foreground mr-1">Period:</span>
              {PERIOD_TABS.map((tab) => {
                const isPeriodActive = activePeriod === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActivePeriod(tab.id)}
                    aria-pressed={isPeriodActive}
                    className={`rounded-md px-3 py-1 font-medium transition-colors ${
                      isPeriodActive
                        ? "bg-terracotta text-white shadow-xs"
                        : "border border-border bg-card text-muted-foreground hover:text-primary hover:bg-secondary"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Render category content */}
          {activeCategory === "publications" && (
            <PublicationRows items={filteredJournalPublications} />
          )}

          {activeCategory === "proceedings" && (
            <PublicationRows items={conferenceProceedings} />
          )}

          {activeCategory === "talks" && (
            <PublicationRows items={talks} />
          )}

          {/* Google Scholar CTA Banner */}
          <div className="mt-14 flex justify-center border-t border-border pt-12">
            <a
              href={SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses({ size: "lg", className: "inline-flex items-center gap-2" })}
            >
              <Search className="size-4" />
              View full profile on Google Scholar
              <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
