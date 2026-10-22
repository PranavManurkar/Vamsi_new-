import { RESEARCH_THEMES } from "./researchData";

// Featured research 4 themes on home page
export const featuredResearch = RESEARCH_THEMES.map((theme) => ({
  slug: theme.slug,
  title: theme.title,
  shortTitle: theme.shortTitle,
  summary: theme.summary,
  image: theme.image,
}));

export const news = [
  ["2026", "New journal article", "Creep-driven solute segregation to planar faults published in Metallurgical and Materials Transactions A."],
  ["2026", "Conference proceeding published", "Arham Aneeq and K. V. Vamsi: Modelling Elastic Moduli in γ′-Ni₃(Al,X) via a CALPHAD Approach, ASME IMECE India 2026."],
  ["2025", "ANRF project underway", "Computational exploration and design of BCC+B2 superalloys begins as an ongoing three-year project."],
];

export const selectedPublications = [
  {
    year: "2026",
    title: "Creep-Driven Solute Segregation to Planar Faults in Ni-Base Single-Crystal Superalloys",
    authors: "Z. Long, D. Bürger, L. Grünewald, V. K. Rao, K. V. Vamsi, Y. M. Eggeler",
    journal: "Metallurgical and Materials Transactions A",
    doi: "https://doi.org/10.1007/s11661-026-08173-4",
  },
  {
    year: "2026",
    title: "Modelling Elastic Moduli in γ′-Ni₃(Al,X) via a CALPHAD Approach",
    authors: "Arham Aneeq and K. V. Vamsi",
    journal: "Proceedings of the ASME 2026 International Mechanical Engineering Congress and Exposition India, IMECE-INDIA2026",
    url: "https://asme.pinetec.com/imece-india2026/data/pdfs/trk-3/IMECE-INDIA2026-188347.pdf",
    linkLabel: "Proceeding",
  },
  {
    year: "2024",
    title: "Antiphase boundaries in B2 intermetallics: Proximate structures, formation energies, and chemical stability",
    authors: "Justin A. Mayer, Tresa M. Pollock, K. V. Vamsi, Ram Seshadri",
    journal: "Physical Review Materials 8, 013605",
    doi: "https://doi.org/10.1103/PhysRevMaterials.8.013605",
  },
];
