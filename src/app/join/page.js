"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

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

function Icon({ type }) {
  if (type === "cap") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-9 w-9">
        <path d="m3 10 9-5 9 5-9 5-9-5Z" />
        <path d="M7 12v4c0 1.1 2.2 2 5 2s5-.9 5-2v-4" />
      </svg>
    );
  }

  if (type === "microscope") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-9 w-9">
        <path d="M6 21h12" />
        <path d="M8 21a4 4 0 0 0 4-4v-1" />
        <path d="M9 3h4v4H9z" />
        <path d="M13 5l3 3" />
        <path d="M11 7l-2 2v3" />
        <path d="M9 12h5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-9 w-9">
      <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3Z" />
      <path d="M8 11c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3Z" />
      <path d="M8 13c-2.8 0-5 2.2-5 5v1h10v-1c0-2.8-2.2-5-5-5Z" />
      <path d="M16 13c-1 0-2 .3-2.8.8A6.9 6.9 0 0 1 15 19v1h6v-1c0-3.3-2.7-6-6-6Z" />
    </svg>
  );
}

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-black">
      <Header />
      <main className="mx-auto w-full max-w-[1240px] px-4 pt-8 sm:px-6 md:px-8 lg:px-10">
        <section className="relative left-1/2 w-screen -translate-x-1/2 py-14 sm:py-16 lg:py-20">
          <div className="relative overflow-hidden bg-[#f8fafc] py-14 sm:py-16 lg:py-20">
            <Image
              src="/hero-placeholder.svg"
              alt="Laboratory background"
              fill
              priority={false}
              className="object-cover opacity-8"
            />

            <div className="absolute inset-0 bg-[#f8fafc]/80 backdrop-blur-[2px]" />

            <div className="relative mx-auto max-w-[1180px] px-6 md:px-10 lg:px-16">
              <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-[#f1f5f9] px-5 py-2 text-sm font-semibold text-[#0f172b]">
                  <span className="h-2 w-2 rounded-full bg-[#0f172b]" />
                  Open Roles
                </span>
              </div>

              <div className="mx-auto mt-10 grid max-w-[1020px] gap-4 md:mt-12 md:grid-cols-3">
                {opportunities.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.38, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -3 }}
                    className="rounded-2xl border border-[#cbd5e1] bg-white px-5 py-6 text-center shadow-[0_8px_24px_rgba(15,23,43,0.08)] backdrop-blur-md"
                  >
                    <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center text-[#0f172b]">
                      <Icon type={item.icon} />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0f172b]">{item.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-black">{item.description}</p>
                  </motion.article>
                ))}
              </div>

              <div className="mt-10 flex justify-center md:mt-12">
                <motion.a
                  href="/#contact"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#0f172b] px-8 text-lg font-semibold text-white shadow-[0_6px_24px_rgba(15,23,43,0.3)]"
                >
                  Apply Now
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
