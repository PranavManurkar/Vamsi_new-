// Home page content, verbatim from the Figma Make design (app/data.ts and app/pages.tsx researchThemes).

export const featuredResearch = [
  {
    slug: "computational-alloy-design",
    title: "Computational alloy design",
    summary: "Closed-loop design linking composition, phase stability, microstructure, properties, validation, and optimisation.",
    diagram: "alloy",
  },
  {
    slug: "bcc-b2-superalloys",
    title: "BCC+B2 superalloys",
    summary: "Coherent disordered BCC matrices and chemically ordered B2 precipitates for high-temperature strength.",
    diagram: "lattice",
  },
  {
    slug: "planar-faults",
    title: "Planar faults & antiphase boundaries",
    summary: "Fault energetics as quantitative descriptors of dislocation pathways and precipitate shearing.",
    diagram: "fault",
  },
];

export const news = [
  ["2026", "New journal article", "Creep-driven solute segregation to planar faults published in Metallurgical and Materials Transactions A."],
  ["2026", "Conference proceeding published", "Arham Aneeq and K. V. Vamsi: Modelling Elastic Moduli in γ′-Ni₃(Al,X) via a CALPHAD Approach, ASME IMECE India 2026."],
  ["2025", "ANRF project underway", "Computational exploration and design of BCC+B2 superalloys begins as an ongoing three-year project."],
];

export const selectedPublications = [
  { year: "2026", title: "Creep-Driven Solute Segregation to Planar Faults in Ni-Base Single-Crystal Superalloys", authors: "Z. Long, D. Bürger, L. Grünewald, V. K. Rao, K. V. Vamsi, Y. M. Eggeler", journal: "Metallurgical and Materials Transactions A 57, 1813", doi: "https://doi.org/10.1007/s11661-026-08173-4" },
  { year: "2026", title: "Modelling Elastic Moduli in γ′-Ni₃(Al,X) via a CALPHAD Approach", authors: "Arham Aneeq and K. V. Vamsi", journal: "Proceedings of the ASME 2026 International Mechanical Engineering Congress and Exposition India, IMECE-INDIA2026, September 3–5, 2026, Chennai, India", url: "https://asme.pinetec.com/imece-india2026/data/pdfs/trk-3/IMECE-INDIA2026-188347.pdf", linkLabel: "Proceeding" },
  { year: "2024", title: "Segregation to Creep-induced Planar Faults in Ni-base Single Crystal Superalloys", authors: "Z. Long, D. Bürger, C. Dolle, Y. Dai, K. V. Vamsi, Y. M. Eggeler", journal: "Microscopy and Microanalysis 30, Supplement 1, ozae044.625" },
];
