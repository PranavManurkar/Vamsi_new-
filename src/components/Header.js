"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { buttonClasses } from "@/lib/ui";

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

const desktopLink = (active) =>
  `py-4 text-sm font-medium transition-colors ${active ? "text-terracotta" : "text-primary/75 hover:text-terracotta"}`;
const mobileLink = (active) => `font-medium ${active ? "text-terracotta" : "text-primary"}`;

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContributionsOpen, setIsContributionsOpen] = useState(false);

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

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsContributionsOpen(false);
  };

  const navItems = NAV_ITEMS.filter((item) => item.label !== "Contact");
  const contact = NAV_ITEMS.find((item) => item.label === "Contact");

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 py-2 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 md:px-8">
          {/* redesign: design uses text wordmark "VAMSI" + "Research Group / IIT Indore" (Navbar.tsx:36-39); kept repo logo per D8 */}
          <Link href="/" className="flex shrink-0 items-center" onClick={closeMenus}>
            <Image
              src="/Vamsi_iiti_informal.png"
              alt="VAMSI Research Group"
              width={200}
              height={80}
              priority
              className="h-10 w-auto md:h-12"
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) =>
              item.isDropdown ? (
                <div key={item.label} className="group relative">
                  <Link href={item.href} className={`flex items-center gap-1 ${desktopLink(isActive(item.href))}`}>
                    {item.label}
                    <ChevronDown className="size-3" />
                  </Link>
                  <div className="invisible absolute left-0 top-full w-72 translate-y-2 rounded-xl border border-border bg-card p-2 opacity-0 shadow-xl transition-all group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {CONTRIBUTIONS_ITEMS.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block rounded-lg px-4 py-3 text-sm text-primary hover:bg-secondary"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.label} href={item.href} className={desktopLink(isActive(item.href))}>
                  {item.label}
                </Link>
              )
            )}
            <Link href={contact.href} className={buttonClasses({ size: "sm" })}>
              {contact.label}
            </Link>
          </nav>

          <button
            type="button"
            className={buttonClasses({ variant: "ghost", size: "icon", className: "lg:hidden" })}
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((p) => !p)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background px-5 py-4 lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col">
              {NAV_ITEMS.map((item) =>
                item.isDropdown ? (
                  <li key={item.label} className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className={`flex-1 py-3 ${mobileLink(isActive(item.href))}`}
                        onClick={closeMenus}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        className={buttonClasses({ variant: "ghost", size: "icon" })}
                        aria-label={`${isContributionsOpen ? "Close" : "Open"} contributions submenu`}
                        aria-expanded={isContributionsOpen}
                        onClick={() => setIsContributionsOpen((p) => !p)}
                      >
                        <ChevronDown className={`transition-transform ${isContributionsOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    {isContributionsOpen && (
                      <ul className="mb-3 ml-3 border-l border-terracotta/40 pl-4">
                        {CONTRIBUTIONS_ITEMS.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              className="block py-2 text-sm text-muted-foreground hover:text-terracotta"
                              onClick={closeMenus}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.label} className="border-b border-border last:border-0">
                    <Link
                      href={item.href}
                      className={`block py-3 ${mobileLink(isActive(item.href))}`}
                      onClick={closeMenus}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        )}
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-primary/20 lg:hidden" aria-hidden="true" onClick={closeMenus} />
      )}
    </>
  );
}
