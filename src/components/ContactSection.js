"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const columnMotion = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function IconMap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <path d="M12 22s7-5.6 7-12a7 7 0 1 0-14 0c0 6.4 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

function IconOffice() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <path d="m3 10 9-5 9 5-9 5-9-5Z" />
      <path d="M7 12v4c0 1.1 2.2 2 5 2s5-.9 5-2v-4" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M6.9 8.5a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM5.5 10h2.8v8.5H5.5V10Zm4.4 0h2.7v1.2h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.5 1.9 3.5 4.4v4.4h-2.8v-3.9c0-.9 0-2.1-1.3-2.1-1.3 0-1.5 1-1.5 2v4h-2.8V10Z" />
    </svg>
  );
}

function IconScholar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <path d="m3 10 9-5 9 5-9 5-9-5Z" />
      <path d="M7 12v4c0 1.1 2.2 2 5 2s5-.9 5-2v-4" />
    </svg>
  );
}

function IconTwitter() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <path d="M22 5.8a8.8 8.8 0 0 1-2.5.7 4.2 4.2 0 0 0 1.8-2.4c-.9.6-2 .9-3 .1a4.3 4.3 0 0 0-7.4 4A12.1 12.1 0 0 1 3 4.9a4.3 4.3 0 0 0 1.3 5.8 4.2 4.2 0 0 1-1.9-.5v.1a4.3 4.3 0 0 0 3.4 4.2c-.4.1-.8.1-1.2 0a4.3 4.3 0 0 0 4 3 8.6 8.6 0 0 1-5.3 1.8c-.3 0-.7 0-1-.1A12.2 12.2 0 0 0 9 21c8 0 12.5-6.8 12.2-12.8A8.8 8.8 0 0 0 22 5.8Z" />
    </svg>
  );
}

function IconGoogleScholar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
      <path d="M12 4 3 9l9 5 9-5-9-5Z" />
      <path d="M6 11v4.2c0 1.9 2.7 3.8 6 3.8s6-1.9 6-3.8V11" />
      <path d="M12 14V9" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white px-6 py-8 md:px-10 md:py-8 lg:px-16">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#0f172b] md:text-4xl">Get in Touch</h2>
          {/* <p className="mt-3 text-base font-medium leading-relaxed text-black md:text-lg">
            Interested in joining our research group or collaborating? We&apos;d love to hear from you.
          </p> */}
        </div>

        <div className="mt-12 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-16 items-start">
          <motion.div {...columnMotion}>
            <h3 className="text-[1.95rem] font-semibold ">Contact Information</h3>

            <div className="mt-7 space-y-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1f5f9] text-[#0f172b] transition-colors  ">
                  <IconMail />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#0f172b]">Email</p>
                  <p className="mt-1 text-base text-gray-600 ">kvamsi@iiti.ac.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1f5f9] text-[#0f172b] transition-colors ">
                  <IconMap />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#0f172b]">Office Address</p>
                  <p className="mt-1 text-base text-gray-600 leading-relaxed ">
                    FC-504, 4th Floor<br />
                    Learning Resource Centre<br />
                    IIT Indore, Simrol-453552<br />
                    Indore, Madhya Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1f5f9] text-[#0f172b] transition-colors  ">
                  <IconOffice />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#0f172b]">Department Office</p>
                  <p className="mt-1 text-base text-gray-600 leading-relaxed">
                    Metallurgical Engineering and Materials Science<br />
                    Indian Institute of Technology Indore<br />
                    Khandwa Road, Simrol-453552<br />
                    Indore, Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-[#d2d3d8] pt-7">
              <h4 className="text-[1.1rem] font-semibold text-[#0f172b]">Connect With Us</h4>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <motion.a
                  href="https://www.linkedin.com/in/kvvamsi/"
                  target="_blank"
                  rel="noreferrer noopener"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f1f5f9] text-[#0f172b] transition-colors hover:bg-[#0f172b] hover:text-white"
                >
                  <IconLinkedIn />
                </motion.a>
                <motion.a
                  href="https://x.com/kvvamsi"
                  target="_blank"
                  rel="noreferrer noopener"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  aria-label="Twitter"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f1f5f9] text-[#0f172b] transition-colors hover:bg-[#0f172b] hover:text-white"
                >
                  <IconTwitter />
                </motion.a>
                <motion.a
                  href="https://www.researchgate.net/profile/K-V-Vamsi"
                  target="_blank"
                  rel="noreferrer noopener"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  aria-label="ResearchGate"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f1f5f9] text-[#0f172b] transition-colors hover:bg-[#0f172b] hover:text-white"
                >
                  <Image
                    src="/Researchgate--Streamline-Simple-Icons.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="h-4 w-4 brightness-0 group-hover:invert"
                  />
                </motion.a>
                <motion.a
                  href="https://scholar.google.co.in/citations?user=ducGUjAAAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer noopener"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  aria-label="Google Scholar"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f1f5f9] text-[#0f172b] transition-colors hover:bg-[#0f172b] hover:text-white"
                >
                  <IconGoogleScholar />
                </motion.a>
              </div>
            </div>
            
          </motion.div>

          <motion.div {...columnMotion} transition={{ ...columnMotion.transition, delay: 0.08 }}>
            <div
              className="rounded-3xl  bg-[#f1f5f9] overflow-hidden  md:p-0"
            >
              <h3 className="text-[1.95rem] font-semibold   ml-2 pl-4 pb-4">Location</h3>

              {/* Map */}
              <div className="w-full h-80">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                  allow="unload"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.454568700153!2d75.92313709999999!3d22.524638500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIndian%20Institute%20of%20Technology%20Indore!5e0!3m2!1sen!2sin!4v1777623614680!5m2!1sen!2sin"
                  title="IIT Indore Location"
                />
              </div>

              {/* Gallery Link */}
              <div className="p-6 md:p-8">
                <motion.a
                  href="/gallery"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex items-center justify-between rounded-xl border border-[#E4B5C0] bg-[#0f172b] px-4 py-3 text-center font-semibold text-white transition-all hover:-translate-y-1 hover:scale-102"
                >
                  <span className="flex-1">Explore Our Gallery</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 ml-2">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
