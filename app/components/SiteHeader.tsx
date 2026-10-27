"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "@/app/components/Arrow";
import { Stripe } from "@/app/components/Stripe";
import { BRAND, NAV } from "@/app/lib/content";
import { PHOTOS } from "@/app/lib/photos";
import { SERVICES } from "@/app/lib/services";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Lock page scroll behind the mobile menu.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };
  const openServices = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const feature = PHOTOS.m3Front;

  return (
    <header className="sticky top-0 z-50 bg-ink text-paper">
      <div className="wrap flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <Link href="/" className="flex items-center gap-3" onClick={closeAll}>
          <Stripe className="h-4 w-6 -skew-x-12" />
          <span className="wordmark text-[0.95rem]">{BRAND.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden h-full lg:block">
          <ul className="flex h-full items-center gap-8 text-sm">
            {NAV.map((item) =>
              item.href === "/services" ? (
                <li
                  key={item.href}
                  className="flex h-full items-center"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-controls="services-menu"
                    onClick={() => setServicesOpen((v) => !v)}
                    className={`flex items-center gap-1.5 transition-colors hover:text-paper ${
                      isActive(pathname, item.href) || servicesOpen
                        ? "text-paper"
                        : "text-paper/70"
                    }`}
                  >
                    {item.label}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      aria-hidden
                      className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </button>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className={`transition-colors hover:text-paper ${
                      isActive(pathname, item.href) ? "text-paper" : "text-paper/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href={BRAND.phoneHref}
            className="font-mono text-sm tracking-tight text-paper/85 hover:text-paper"
          >
            {BRAND.phone}
          </a>
          <Link href="/book" onClick={closeAll} className="btn btn-light py-2.5">
            Book a service
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 p-2 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.75" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop services menu */}
      <div
        id="services-menu"
        onMouseEnter={openServices}
        onMouseLeave={scheduleClose}
        className={`absolute inset-x-0 top-full hidden border-t border-ink-line bg-ink shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] transition-[opacity,visibility] duration-150 lg:block ${
          servicesOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="wrap grid grid-cols-12 gap-10 py-10">
          <ul className="col-span-8 grid grid-cols-3 gap-x-8 gap-y-1">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  onClick={closeAll}
                  className="block -mx-3 px-3 py-3 transition-colors hover:bg-ink-2"
                >
                  <span className="block font-semibold">{s.shortName}</span>
                  <span className="mt-1 block text-sm leading-snug text-ink-muted">
                    {s.navBlurb}
                  </span>
                </Link>
              </li>
            ))}
            <li className="col-span-3 mt-4 flex gap-8 border-t border-ink-line pt-5 text-sm">
              <Link href="/services" onClick={closeAll} className="group inline-flex items-center gap-2 font-semibold">
                All services <Arrow className="group-hover:translate-x-1" />
              </Link>
              <Link href="/pricing" onClick={closeAll} className="group inline-flex items-center gap-2 font-semibold">
                Posted prices <Arrow className="group-hover:translate-x-1" />
              </Link>
            </li>
          </ul>
          <Link
            href="/bmw-repair"
            onClick={closeAll}
            className="group relative col-span-4 block overflow-hidden"
          >
            <Image
              src={feature.src}
              alt={feature.alt}
              width={feature.width}
              height={feature.height}
              sizes="400px"
              loading="eager"
              className="aspect-[4/3] h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
            />
            <span className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
            <span className="absolute inset-x-0 bottom-0 p-6">
              <span className="kicker text-paper/70">The specialty</span>
              <span className="display mt-2 block text-4xl">BMW repair</span>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold">
                Every series, every generation
                <Arrow className="group-hover:translate-x-1" />
              </span>
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto border-t border-ink-line bg-ink pb-24 lg:hidden"
        >
          <ul className="wrap py-2">
            {NAV.map((item) =>
              item.href === "/services" ? (
                <li key={item.href} className="border-b border-ink-line">
                  <button
                    type="button"
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="display flex w-full items-center justify-between py-4 text-3xl"
                  >
                    {item.label}
                    <span aria-hidden className="font-sans text-2xl font-normal">
                      {mobileServicesOpen ? "−" : "+"}
                    </span>
                  </button>
                  {mobileServicesOpen && (
                    <ul className="pb-4">
                      <li>
                        <Link
                          href="/services"
                          onClick={closeAll}
                          className="block py-2.5 font-semibold"
                        >
                          All services
                        </Link>
                      </li>
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            onClick={closeAll}
                            className="block py-2.5 text-paper/80"
                          >
                            {s.shortName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.href} className="border-b border-ink-line">
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    className="display block py-4 text-3xl"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <div className="wrap mt-4 space-y-2 text-sm text-ink-muted">
            <p>
              <a href={BRAND.phoneHref} className="font-mono text-lg text-paper">
                {BRAND.phone}
              </a>
            </p>
            <p>
              {BRAND.address.street}, {BRAND.address.unit}
              <br />
              {BRAND.address.city}, {BRAND.address.region} {BRAND.address.zip}
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}
