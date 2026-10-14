"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v6H5V5h6" />
    </svg>
  );
}

export default function PublicationsContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("publications");

  useEffect(() => {
    const tabParam = searchParams?.get("tab");
    if (tabParam && ["publications", "proceedings", "talks"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  return (
    <section
      id="contributions"
      className={`${inter.className} bg-white px-6 py-16 md:px-10 md:py-20 lg:px-16`}
    >
      <div className="mx-auto w-full max-w-[1160px]">
        <div>
          <h2 className="text-4xl font-bold tracking-[-0.02em] text-[#0f172b] md:text-5xl">
            {activeTab === "publications" && "Publications"}
            {activeTab === "proceedings" && "Conference Proceedings"}
            {activeTab === "talks" && "Talks"}
          </h2>
          <p className="mt-3 text-base font-medium text-black md:text-lg">
            {activeTab === "publications" }
            {activeTab === "proceedings" }
            {activeTab === "talks" }
          </p>
        </div>

        {/* Publications Tab */}
        {activeTab === "publications" && (
          <div className="mt-12 space-y-6 md:mt-16 md:space-y-7">
            {publications.slice(-8).map((item, index) => (
              <motion.article
                key={`${item.doi}`}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.22 }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="rounded-2xl border border-[#0f172b] bg-white px-5 py-6 shadow-[0_2px_14px_rgba(15,23,43,0.06)] hover:shadow-[0_8px_28px_rgba(15,23,43,0.08)] md:px-6"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[1.1rem] font-semibold leading-snug text-[#0f172b] md:text-[1.25rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-black md:text-[0.95rem]">{item.authors}</p>
                    <a
                      href={item.scholarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-[0.79rem] font-medium text-[#0f172b] transition-colors hover:text-[#1e293b]"
                    >
                      <ExternalLinkIcon />
                      <span>DOI: {item.doi}</span>
                    </a>
                  </div>
                  <motion.a
                    href={item.scholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="inline-flex h-10 items-center justify-center rounded-xl bg-[#0f172b] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1e293b] md:min-w-[120px]"
                  >
                    View Paper
                  </motion.a>
                </div>
              </motion.article>
            ))}

            {publications.length > 8 && (
              <div className="mt-8 flex justify-center">
                <a
                  href="https://scholar.google.com/citations?user=ducGUjAAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#0f172b] px-6 py-3 text-base font-semibold text-[#0f172b] transition-colors hover:bg-[#0f172b] hover:text-white"
                >
                  View All Publications
                  <ExternalLinkIcon />
                </a>
              </div>
            )}

            <div className="mt-12 flex justify-center border-t border-[#0f172b]/10 pt-12">
              <motion.a
                href="https://scholar.google.com/citations?user=ducGUjAAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="inline-flex items-center gap-2 rounded-full bg-[#0f172b] px-8 py-3 text-base font-semibold text-white shadow-[0_4px_12px_rgba(15,23,43,0.2)] transition-all hover:bg-[#1e293b] hover:shadow-[0_8px_20px_rgba(15,23,43,0.3)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <span>View on Google Scholar</span>
              </motion.a>
            </div>
          </div>
        )}

        {/* Conference Proceedings Tab */}
        {activeTab === "proceedings" && (
          <div className="mt-12">
            <p className="text-center text-black">
              Conference proceedings data coming soon. <br />
              <a
                href="https://scholar.google.com/citations?user=ducGUjAAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0f172b] hover:text-[#1e293b] underline"
              >
                View full list on Google Scholar
              </a>
            </p>
          </div>
        )}

        {/* Talks Tab */}
        {activeTab === "talks" && (
          <div className="mt-12">
            <p className="text-center text-black">
              Talks data coming soon. Please provide the list.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
