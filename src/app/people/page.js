"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const currentMembers = [
  {
    name: "Burra Vijayusha",
    role: "Undergraduate Student",
    summary: "Computational modeling of alloy properties and phase stability",
    image: "/vijusha.jpeg",
  },
  {
    name: "Pohrselvan",
    role: "Undergraduate Student",
    summary: "Atomistic simulations and material deformation mechanisms",
    image: "/pohrselvan.svg",
  },
  {
    name: "Keerthan",
    role: "Undergraduate Student",
    summary: "High-throughput screening and machine learning for materials",
    image: "/kirtan.jpeg",
  },
  {
    name: "Arham Aneeq",
    role: "Undergraduate Student",
    summary: "Thermodynamic modeling of multi-component alloy systems",
    image: "/arham.jpg",
  },
];

const alumniMembers = [
  {
    name: "Amirthan",
    role: "Undergraduate Student",
    batch: "Class of 2025",
    image: "/Amirthan.avif",
  },
  {
    name: "Nitheesvar",
    role: "Undergraduate Student",
    batch: "Class of 2025",
    image: "/Nitheesvar.avif",
  },
  {
    name: "Vamshi Krishna Rao",
    role: "Undergraduate Student",
    batch: "Class of 2025",
    image: "/Vamshi Krishna Rao.avif",
  },
];

const opportunities = [
  {
    title: "PhD Positions",
    description: "Full funding available for computational materials science research. Teaching Assistantship positions are available.",
    icon: "cap",
    href: "https://academic.iiti.ac.in/phdadvt.php",
  },
  {
    title: "Postdoctoral Fellows",
    description: "Coming soon",
    icon: "microscope",
  },
  {
    title: "JRF",
    description: "Junior Research Fellowship for motivated graduates to contribute to cutting-edge atomistic simulations and alloy design projects",
    icon: "jrf",
    href: "/projects",
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

export default function PeoplePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-black mb-2 pb-2">
      <Header />
      <main className="mx-auto w-full max-w-[1240px] px-4 pt-8 sm:px-6 md:px-8 lg:px-10">
        <section className="my-4 py-2 ">
          <h1 className="text-5xl font-bold tracking-tight text-[#0f172b] sm:text-4xl">People</h1>
        </section>

        <section className="mt-8">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-[#0f172b] sm:text-[1.8rem]">Group Leader</h2>
              <p className="mt-1 text-sm text-black">Dr. Vamsi</p>
            </div>
            <Link
              href="/faculty"
              className="inline-flex cursor-pointer items-center rounded-full border border-[#0f172b] bg-white px-4 py-2 text-sm font-medium text-[#0f172b] transition-colors hover:border-[#0f172b] hover:bg-[#0f172b] hover:text-white"
            >
              View full profile
            </Link>
          </div>

          <Link href="/faculty" className="group block cursor-pointer">
            <article className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(15,23,43,0.08)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(15,23,43,0.12)]">
              <div className="grid gap-0 lg:grid-cols-[280px_1fr]">
                <div className="relative min-h-[260px] bg-[#f1f5f9]">
                  <Image
                    src="/vamsi_pfp.jpeg"
                    alt="Dr. K. V. Vamsi"
                    fill
                    sizes="(max-width: 1024px) 100vw, 280px"
                    className="object-cover"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <span className="inline-flex rounded-full bg-[#f1f5f9] px-3 py-1 text-xs font-semibold text-[#0f172b]">
                    Principal Investigator
                  </span>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#0f172b] sm:text-[2.25rem]">
                    Dr. K. V. Vamsi
                  </h3>
                  <p className="mt-2 text-sm font-medium text-black">
                    Assistant Professor, Department of Metallurgical Engineering and Materials Science, IIT Indore
                  </p>
                  <p className="mt-4 max-w-3xl text-[0.98rem] leading-relaxed text-black">
                    Leading the VAMSI Research Group with expertise in computational materials science,
                    high-temperature alloys, and ICME frameworks.
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </section>

        <section className="mt-10">
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-[#0f172b] sm:text-[1.8rem]">Current Team Members</h2>
            <p className="mt-1 text-sm text-black">Active students and researchers in the group.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {currentMembers.map((member, index) => (
              <article
                key={member.name}
                className="rounded-2xl bg-white px-5 py-6 text-center shadow-[0_6px_18px_rgba(15,23,43,0.05)]"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="mx-auto h-[92px] w-[92px] rounded-full object-cover"
                  style={{ objectPosition: `${35 + index * 10}% 35%` }}
                />
                <h3 className="mt-5 text-[1.35rem] font-semibold leading-tight text-[#0f172b]">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-black">{member.role}</p>
                <p className="mt-3 min-h-[56px] text-[0.98rem] leading-relaxed text-black">
                  {member.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 pb-6">
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-[#0f172b] sm:text-[1.8rem]">Alumni</h2>
            <p className="mt-1 text-sm text-black">Former members of the group.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {alumniMembers.map((member, index) => (
              <article
                key={member.name}
                className="rounded-2xl bg-white px-5 py-6 text-center shadow-[0_6px_18px_rgba(15,23,43,0.05)]"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="mx-auto h-[92px] w-[92px] rounded-full object-cover"
                  style={{ objectPosition: `${35 + index * 10}% 35%` }}
                />
                <h3 className="mt-5 text-[1.35rem] font-semibold leading-tight text-[#0f172b]">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-black">{member.role}</p>
                <p className="mt-1 text-[0.92rem] text-black">{member.batch}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-12">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0f172b]/20 bg-white px-5 py-2 text-sm font-semibold text-[#0f172b]">
              <span className="h-2 w-2 rounded-full bg-[#0f172b]" />
              Open Roles
            </span>
            {/* <h2 id="available-positions" className="mt-6 text-2xl font-bold tracking-[-0.02em] text-[#800020] sm:text-3xl">Available Positions</h2> */}
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {opportunities.map((item, index) => (
              <motion.a
                href={item.href}
                target={item.href && !item.href.startsWith("/") ? "_blank" : undefined}
                rel={item.href && !item.href.startsWith("/") ? "noopener noreferrer" : undefined}
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.38, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                className="cursor-pointer rounded-2xl bg-white px-6 py-8 text-center shadow-[0_8px_24px_rgba(15,23,43,0.08)] transition-colors hover:shadow-[0_8px_24px_rgba(15,23,43,0.12)]"
              >
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center text-[#0f172b]">
                  <Icon type={item.icon} />
                </div>
                <h3 className="text-xl font-semibold text-[#0f172b]">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-black">{item.description}</p>
              </motion.a>
            ))}
          </div>

          <div className="mb-8">
            {/* <motion.a
              href="/#contact"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#800020] px-8 text-lg font-semibold text-white shadow-[0_6px_24px_rgba(128,0,32,0.3)]"
            >
              Apply Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </motion.a> */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
