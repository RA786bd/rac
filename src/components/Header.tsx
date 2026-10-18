"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Mail, Menu, Phone, X, Clock } from "lucide-react";
import { nav, site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-navy-950 text-xs text-white/80 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`tel:${site.phoneIntl}`} className="flex items-center gap-1.5 hover:text-white">
              <Phone className="h-3.5 w-3.5 text-sky-400" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-white">
              <Mail className="h-3.5 w-3.5 text-sky-400" /> {site.email}
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-sky-400" /> {site.hours}
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className={`border-b bg-white/95 backdrop-blur transition-shadow ${scrolled ? "border-navy/10 shadow-md shadow-navy/5" : "border-transparent"}`}>
        <div className="container-x flex h-[76px] items-center justify-between gap-4">
          <Link href="/" className="shrink-0" aria-label={`${site.fullName} home`}>
            <Image src="/brand/coolbond-logo.png" alt={site.fullName} width={900} height={240} priority className="h-12 w-auto sm:h-14" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) =>
              item.children ? (
                <div key={item.href} className="group relative">
                  <Link href={item.href} className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${isActive(item.href) ? "text-ocean" : "text-navy-800 hover:text-ocean"}`}>
                    {item.label} <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-0 top-full w-72 translate-y-2 pt-3 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white p-2 shadow-2xl shadow-navy/10">
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href} className="block rounded-xl px-4 py-2.5 text-sm font-medium text-navy-800 hover:bg-ice hover:text-ocean">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${isActive(item.href) ? "text-ocean" : "text-navy-800 hover:text-ocean"}`}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/book-service" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
              Book a Service
            </Link>
            <button onClick={() => setOpen((v) => !v)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy lg:hidden" aria-label="Toggle menu" aria-expanded={open}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-navy/10 bg-white lg:hidden">
            <nav className="container-x flex max-h-[75vh] flex-col overflow-y-auto py-4" aria-label="Mobile">
              {nav.map((item) => (
                <div key={item.href}>
                  <Link href={item.href} className={`block rounded-xl px-3 py-3 font-semibold ${isActive(item.href) ? "bg-ice text-ocean" : "text-navy-800"}`}>
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mb-2 ml-3 border-l-2 border-ice pl-3">
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href} className="block px-3 py-2 text-sm text-mist">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/book-service" className="btn-primary mt-3">Book a Service</Link>
              <a href={`tel:${site.phoneIntl}`} className="btn-outline mt-2"><Phone className="h-4 w-4" /> {site.phone}</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
