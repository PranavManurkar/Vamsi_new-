"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ResourceCard({ title, description, href, actionLabel = "Open Resource" }) {
  const isExternal = href.startsWith("http");

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="rounded-xl border border-[#0f172b] bg-white p-5 shadow-[0_6px_18px_rgba(15,23,43,0.06)] transition-all duration-300 hover:shadow-[0_14px_24px_rgba(15,23,43,0.12)]"
    >
      <h3 className="text-lg font-semibold text-[#0f172b]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-black">{description}</p>

      <div className="mt-5">
        <Link
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer noopener" : undefined}
          className="inline-flex items-center gap-2 rounded-lg border border-[#0f172b] bg-white px-3 py-2 text-sm font-medium text-[#0f172b] transition-all hover:bg-[#0f172b] hover:text-white"
        >
          <span>{actionLabel}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M7 17L17 7" />
            <path d="M8 7h9v9" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}
