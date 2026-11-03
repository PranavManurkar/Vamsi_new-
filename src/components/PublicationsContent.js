"use client";

import { useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import PublicationRows from "@/components/site/PublicationRows";
import { buttonClasses } from "@/lib/ui";

// Full journal publication bibliography from supplied CV (Pages 3–4)
const publications = [
  {
    year: "2026",
    title: "Creep-Driven Solute Segregation to Planar Faults in Ni-Base Single-Crystal Superalloys",
    authors: "Z. Long, D. Bürger, Lukas Grünewald, Vamshi Krishna Rao, K. V. Vamsi, Y. M. Eggeler",
    journal: "Metallurgical and Materials Transactions A 57, (2026) 1813",
    doi: "10.1007/s11661-026-08173-4",
    scholarUrl: "https://doi.org/10.1007/s11661-026-08173-4",
  },
  {
    year: "2024",
    title: "Segregation to Creep-induced Planar Faults in Ni-base Single Crystal Superalloys",
    authors: "Z. Long, D. Bürger, C. Dolle, Y. Dai, K. V. Vamsi, Y. M. Eggeler",
    journal: "Microscopy and Microanalysis 30, Issue Supplement_1 (2024) ozae044.625",
    doi: "10.1093/mam/ozae044.625",
    scholarUrl: "https://doi.org/10.1093/mam/ozae044.625",
  },
  {
    year: "2024",
    title: "Development of Process-Structure Linkage Using Conditional Generative Adversarial Networks",
    authors: "A. Sardeshmukh, G. Jain, S. Reddy, B. P. Gautham, K. V. Vamsi, P. Bhattacharyya, U. Tewary",
    journal: "Metallurgical and Materials Transactions A 55 (2024) 2213–2229",
    doi: "10.1007/s11661-024-07361-w",
    scholarUrl: "https://doi.org/10.1007/s11661-024-07361-w",
  },
  {
    year: "2024",
    title: "Antiphase boundaries in B2 intermetallics: Proximate structures, formation energies, and chemical stability",
    authors: "J. A. Mayer, T. M. Pollock, K. V. Vamsi, R. Seshadri",
    journal: "Physical Review Materials 8 (2024) 013610",
    doi: "10.1103/PhysRevMaterials.8.013610",
    scholarUrl: "https://doi.org/10.1103/PhysRevMaterials.8.013610",
  },
  {
    year: "2023",
    title: "Tensile behavior of single crystal nickel-based superalloys at 650°C",
    authors: "B. Mansoz, L. M. B. Ormastroni, J. Rame, C. Schwalbe, K. V. Vamsi, P. Caron, J. Cormier, F. Pettinari-Sturmel",
    journal: "Intermetallics 161 (2023) 107976",
    doi: "10.1016/j.intermet.2023.107976",
    scholarUrl: "https://doi.org/10.1016/j.intermet.2023.107976",
  },
  {
    year: "2022",
    title: "Phase Transformation Temperatures, γ–γ′ Lattice Parameter Misfit, and γ′ Precipitate Morphology in Co–Ti–V Alloys",
    authors: "S. K. Verma, A. Pramanik, K. Jyothsna, K. V. Vamsi, S. Karthikeyan",
    journal: "Metallurgical and Materials Transactions A 53 (2022) 4011",
    doi: "10.1007/s11661-022-06798-7",
    scholarUrl: "https://doi.org/10.1007/s11661-022-06798-7",
  },
  {
    year: "2021",
    title: "High-throughput approach for estimation of intrinsic barriers in FCC structures for alloy design",
    authors: "K. V. Vamsi, M. A. Charpagne, T. M. Pollock",
    journal: "Scripta Materialia 204 (2021) 114126",
    doi: "10.1016/j.scriptamat.2021.114126",
    scholarUrl: "https://doi.org/10.1016/j.scriptamat.2021.114126",
  },
  {
    year: "2021",
    title: "Precipitate shearing, fault energies and solute segregation to planar faults in Ni-, CoNi- and Co-base superalloys",
    authors: "Y. M. Eggeler, K. V. Vamsi, T. M. Pollock",
    journal: "Annual Review of Materials Research 51 (2021) 209–240",
    doi: "10.1146/annurev-matsci-102419-011433",
    scholarUrl: "https://doi.org/10.1146/annurev-matsci-102419-011433",
  },
  {
    year: "2021",
    title: "Modeling APB energies in multicomponent Ni-base superalloys",
    authors: "K. V. Vamsi, S. Karthikeyan",
    journal: "Intermetallics 132 (2021) 107124",
    doi: "10.1016/j.intermet.2020.107124",
    scholarUrl: "https://doi.org/10.1016/j.intermet.2020.107124",
  },
  {
    year: "2021",
    title: "Deformation modes and yield strength anomaly in L12 compounds",
    authors: "K. V. Vamsi, S. Karthikeyan",
    journal: "Journal of Alloys and Compounds 860 (2021) 158411",
    doi: "10.1016/j.jallcom.2021.158411",
    scholarUrl: "https://doi.org/10.1016/j.jallcom.2021.158411",
  },
  {
    year: "2021",
    title: "Deformation behavior of Al/Cu in-situ metal-intermetallic laminates at low and high strain rates",
    authors: "K. S. M. Sonti, B. Dash, K. V. Vamsi, H. Bandyopadhyay, B. Ravisankar, K. Sivaprasad, S. Karthikeyan",
    journal: "Journal of Alloys and Compounds 873 (2021) 159767",
    doi: "10.1016/j.jallcom.2021.159767",
    scholarUrl: "https://doi.org/10.1016/j.jallcom.2021.159767",
  },
  {
    year: "2020",
    title: "Design of Nickel-Cobalt-Ruthenium Multi-Principal Element Alloy",
    authors: "M. A. Charpagne, K. V. Vamsi, Y. M. Eggeler, S. P. Murray, C. Frey, S. K. Kolli, T. M. Pollock",
    journal: "Acta Materialia 194 (2020) 224–235",
    doi: "10.1016/j.actamat.2020.04.040",
    scholarUrl: "https://doi.org/10.1016/j.actamat.2020.04.040",
  },
  {
    year: "2020",
    title: "A new proximate structure for the APB(111) in L12 compounds",
    authors: "K. V. Vamsi, T. M. Pollock",
    journal: "Scripta Materialia 182 (2020) 38–42",
    doi: "10.1016/j.scriptamat.2020.02.021",
    scholarUrl: "https://doi.org/10.1016/j.scriptamat.2020.02.021",
  },
  {
    year: "2020",
    title: "Modelling of Ni3(Ti,V) system through first-principle calculations",
    authors: "K. Santhy, K. V. Vamsi, S. Karthikeyan",
    journal: "Materials Today: Proceedings 26 (2020) 278–281",
    doi: "10.1016/j.matpr.2019.11.238",
    scholarUrl: "https://doi.org/10.1016/j.matpr.2019.11.238",
  },
  {
    year: "2018",
    title: "High-throughput estimation of planar fault energies in A3B compounds with L12 structure",
    authors: "K. V. Vamsi, S. Karthikeyan",
    journal: "Acta Materialia 145 (2018) 532–542",
    doi: "10.1016/j.actamat.2017.11.051",
    scholarUrl: "https://doi.org/10.1016/j.actamat.2017.11.051",
  },
  {
    year: "2018",
    title: "On the formation and stability of precipitate phases in a near lamellar γ-TiAl based alloy during creep",
    authors: "R. Prasath Babu, K. V. Vamsi, S. Karthikeyan",
    journal: "Intermetallics 98 (2018) 115–125",
    doi: "10.1016/j.intermet.2018.04.017",
    scholarUrl: "https://doi.org/10.1016/j.intermet.2018.04.017",
  },
  {
    year: "2017",
    title: "Yield anomaly in L12 Co3AlxW1−x vis-à-vis Ni3Al",
    authors: "K. V. Vamsi, S. Karthikeyan",
    journal: "Scripta Materialia 130 (2017) 269–273",
    doi: "10.1016/j.scriptamat.2016.11.019",
    scholarUrl: "https://doi.org/10.1016/j.scriptamat.2016.11.019",
  },
  {
    year: "2014",
    title: "Microstructural and nanoindentation studies across diffusion-bonded interfaces in Al/Cu metal intermetallic laminates",
    authors: "S. S. M. Kartheek, K. V. Vamsi, B. Ravisankar, K. Sivaprasad, S. Karthikeyan",
    journal: "Procedia Materials Science 6 (2014) 709",
    doi: "10.1016/j.mspro.2014.07.087",
    scholarUrl: "https://doi.org/10.1016/j.mspro.2014.07.087",
  },
];

const proceedings = [
  {
    year: "2026",
    title: "Modelling elastic moduli in γ′-Ni3(Al, X) via a CALPHAD approach",
    authors: "Arham Aneeq and K. V. Vamsi",
    venue: "Proceedings of the ASME 2026 International Mechanical Engineering Congress and Exposition (ASME IMECE 2026)",
    doi: "ASME IMECE 2026",
    url: "https://asme.pinetec.com/imece-india2026/data/pdfs/trk-3/IMECE-INDIA2026-188347.pdf",
    linkLabel: "Download PDF",
  },
  {
    year: "2020",
    title: "The yield strength anomaly in Co-Ni design space",
    authors: "K. V. Vamsi, S. P. Murray, T. M. Pollock",
    venue: "Superalloys 2020: 14th International Symposium on Superalloys, TMS, pp. 948–958",
    doi: "10.1007/978-3-030-51834-9_93",
    url: "https://doi.org/10.1007/978-3-030-51834-9_93",
    linkLabel: "View Paper",
  },
  {
    year: "2014",
    title: "Modelling ternary effects on antiphase boundary energy of Ni3Al",
    authors: "K. V. Vamsi, S. Karthikeyan",
    venue: "MATEC Web of Conferences 14 (2014) 11005",
    doi: "10.1051/matecconf/20141411005",
    url: "https://doi.org/10.1051/matecconf/20141411005",
    linkLabel: "View Paper",
  },
  {
    year: "2014",
    title: "Computational design of model Re/Ru bearing Ni-base superalloys",
    authors: "K. V. Vamsi, K. N. Goswami, K. S. Vinay, S. K. Verma, R. Balamuralikrishnan, N. Das, D. Banerjee, S. Karthikeyan",
    venue: "MATEC Web of Conferences 14 (2014) 17007",
    doi: "10.1051/matecconf/20141417007",
    url: "https://doi.org/10.1051/matecconf/20141417007",
    linkLabel: "View Paper",
  },
  {
    year: "2014",
    title: "First principles study of structural stability and site preference in Co3(W,X)",
    authors: "S. R. Joshi, K. V. Vamsi, S. Karthikeyan",
    venue: "MATEC Web of Conferences 14 (2014) 18001",
    doi: "10.1051/matecconf/20141418001",
    url: "https://doi.org/10.1051/matecconf/20141418001",
    linkLabel: "View Paper",
  },
  {
    year: "2014",
    title: "Multi-scale modelling of Suzuki segregation in γ′ precipitates in Ni and Co-base superalloys",
    authors: "P. Srimannarayana, K. V. Vamsi, S. Karthikeyan",
    venue: "MATEC Web of Conferences 14 (2014) 15003",
    doi: "10.1051/matecconf/20141415003",
    url: "https://doi.org/10.1051/matecconf/20141415003",
    linkLabel: "View Paper",
  },
  {
    year: "2012",
    title: "Effect of off-stoichiometry and ternary additions on planar fault energies in Ni3Al",
    authors: "K. V. Vamsi, S. Karthikeyan",
    venue: "Superalloys 2012: 12th International Symposium on Superalloys, TMS, pp. 521–530",
    doi: "10.7449/2012/superalloys_2012_521_530",
    url: "https://doi.org/10.7449/2012/superalloys_2012_521_530",
    linkLabel: "View Paper",
  },
];

const FILTER_TABS = [
  { id: "all", label: "All" },
  { id: "2024-26", label: "2024–26" },
  { id: "2020-23", label: "2020–23" },
  { id: "earlier", label: "Earlier" },
];

const SCHOLAR_URL = "https://scholar.google.com/citations?user=ducGUjAAAAAJ&hl=en";

export default function PublicationsContent() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPublications = publications.filter((pub) => {
    const year = parseInt(pub.year, 10);
    if (activeFilter === "2024-26") return year >= 2024 && year <= 2026;
    if (activeFilter === "2020-23") return year >= 2020 && year <= 2023;
    if (activeFilter === "earlier") return year < 2020;
    return true;
  });

  return (
    <>
      {/* Figma design PageHeader */}
      <PageHeader
        eyebrow="PUBLICATIONS"
        title="Academic bibliography"
        intro="Chronological journal records from the supplied CV. DOI links are shown only where independently verified."
      />

      <section id="publications" className="px-5 pt-8 pb-16 md:px-8 md:pt-10 md:pb-20">
        <div className="mx-auto max-w-7xl">
          {/* Figma design filter buttons */}
          <nav aria-label="Filter publications by period" className="mb-8 flex flex-wrap items-center gap-2.5">
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  aria-pressed={isActive}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-border bg-card text-primary hover:bg-secondary hover:border-terracotta/40"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Filtered Publication Rows in Figma format */}
          <PublicationRows items={filteredPublications} />

          {/* Conference Proceedings Section */}
          <div className="mt-16">
            <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Proceedings</p>
                <h3 className="text-2xl font-semibold text-primary">Conference Proceedings</h3>
              </div>
              <p className="text-sm text-muted-foreground">From supplied CV</p>
            </div>
            <PublicationRows items={proceedings} />
          </div>

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
