"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "People", href: "/people" },
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Contributions", href: "/publications", isDropdown: true },
  { label: "Resources", href: "/resources" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];

const CONTRIBUTIONS_ITEMS = [
  { label: "Publications", href: "/publications?tab=publications" },
  { label: "Conference Proceedings", href: "/publications?tab=proceedings" },
  { label: "Talks", href: "/publications?tab=talks" },
];

export default function Header() {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContributionsOpen, setIsContributionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("?")[0]);
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full  transition-all duration-300 ease-out ${
        hasScrolled
          ? " bg-white/80 backdrop-blur-[50px] shadow-[0_10px_32px_rgba(15,23,43,0.08)]"
          : " bg-white"
      }`}
      animate={{
        boxShadow: hasScrolled
          ? "0 10px 32px rgba(15, 23, 43, 0.08)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-[68px] w-full max-w-[1320px] items-center justify-between px-5 md:px-10 xl:px-14">

        {/* ── Logo ── */}
        <Link href="/" className="flex shrink-0 items-center gap-4 py-1">
          <Image
            src="/Vamsi_iiti_informal.png"
            alt="VAMSI Research Group"
            width={200}
            height={80}
            priority
            className="h-[48px] w-auto md:h-[52px]"
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="relative">
                {item.isDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsContributionsOpen(true)}
                    onMouseLeave={() => setIsContributionsOpen(false)}
                  >
                    <motion.button
                      whileHover={{ y: -1 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className={`group relative inline-flex items-center text-[12.5px] font-medium tracking-[0.01em] transition-colors duration-300 ${
                        isActive(item.href)
                          ? "text-[#0f172b]"
                          : "text-black hover:text-[#0f172b]"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`pointer-events-none absolute -bottom-[5px] left-0 h-[1.5px] origin-left bg-[#0f172b] transition-transform duration-300 ease-out ${
                          isActive(item.href)
                            ? "w-full scale-x-100"
                            : "w-full scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </motion.button>

                    <AnimatePresence>
                      {isContributionsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.22 }}
                          className="absolute right-0 top-full mt-2 w-56 rounded-lg bg-white shadow-[0_10px_32px_rgba(15,23,43,0.1)] backdrop-blur-md"
                        >
                          <ul className="space-y-1 p-2">
                            {CONTRIBUTIONS_ITEMS.map((subItem) => (
                              <li key={subItem.label}>
                                <Link
                                  href={subItem.href}
                                  className="block rounded-md px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#f1f5f9] hover:text-[#0f172b]"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    {item.href.startsWith("#") ? (
                      <a
                        href={item.href}
                        className={`group relative inline-flex text-[12.5px] font-medium tracking-[0.01em] transition-colors duration-300 ${
                          isActive(item.href)
                            ? "text-[#0f172b]"
                            : "text-black hover:text-[#0f172b]"
                        }`}
                      >
                        {item.label}
                        <span
                          className={`pointer-events-none absolute -bottom-[5px] left-0 h-[1.5px] origin-left bg-[#0f172b] transition-transform duration-300 ease-out ${
                            isActive(item.href)
                              ? "w-full scale-x-100"
                              : "w-full scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={`group relative inline-flex text-[12.5px] font-medium tracking-[0.01em] transition-colors duration-300 ${
                          isActive(item.href)
                            ? "text-[#0f172b]"
                            : "text-black hover:text-[#0f172b]"
                        }`}
                      >
                        {item.label}
                        <span
                          className={`pointer-events-none absolute -bottom-[5px] left-0 h-[1.5px] origin-left bg-[#0f172b] transition-transform duration-300 ease-out ${
                            isActive(item.href)
                              ? "w-full scale-x-100"
                              : "w-full scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </Link>
                    )}
                  </motion.div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Hamburger ── */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#0f172b] transition-colors hover:bg-[#f1f5f9] lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((p) => !p)}
        >
          <span className="relative block h-[14px] w-[18px]">
            <span className={`absolute left-0 top-0 block h-[2px] w-full bg-[#0f172b] transition-all duration-300 ${isMobileMenuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[6px] block h-[2px] w-full bg-[#0f172b] transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 top-[12px] block h-[2px] w-full bg-[#0f172b] transition-all duration-300 ${isMobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.nav
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="relative z-40 border-t border-[#cbd5e1]/20 bg-[#f1f5f9] px-6 pb-6 pt-4 lg:hidden"
            >
            <ul className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.isDropdown ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => setIsContributionsOpen(!isContributionsOpen)}
                        className={`flex w-full items-center text-sm font-medium tracking-[0.01em] transition-colors ${
                          isActive(item.href)
                            ? "text-[#0f172b]"
                            : "text-black hover:text-[#0f172b]"
                        }`}
                      >
                        {item.label}
                      </button>
                      <AnimatePresence>
                        {isContributionsOpen && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-2 pl-4"
                          >
                            {CONTRIBUTIONS_ITEMS.map((subItem) => (
                              <li key={subItem.label}>
                                <Link
                                  href={subItem.href}
                                  className="block text-sm font-medium text-black transition-colors hover:text-[#0f172b]"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <>
                      {item.href.startsWith("#") ? (
                        <a
                          href={item.href}
                          className={`block text-sm font-medium tracking-[0.01em] transition-colors ${
                            isActive(item.href)
                              ? "text-[#0f172b]"
                              : "text-black hover:text-[#0f172b]"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className={`block text-sm font-medium tracking-[0.01em] transition-colors ${
                            isActive(item.href)
                              ? "text-[#0f172b]"
                              : "text-black hover:text-[#0f172b]"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </motion.nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-30 bg-black/20 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}