import Link from "next/link";
import { ArrowRight, ChevronRight, MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";

export function SectionHeading({ eyebrow, title, text, center = false, light = false }: { eyebrow?: string; title: string; text?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className={`eyebrow ${light ? "!text-sky-400" : ""}`}>
          <span className="h-0.5 w-6 rounded bg-ember" /> {eyebrow}
        </span>
      )}
      <h2 className={`mt-3 text-3xl font-extrabold leading-tight sm:text-4xl ${light ? "text-white" : "text-navy-900"}`}>{title}</h2>
      {text && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/75" : "text-mist"}`}>{text}</p>}
    </div>
  );
}

export function PageHero({ title, text, crumbs }: { title: string; text?: string; crumbs: { label: string; href?: string }[] }) {
  return (
    <section className="bg-hero relative overflow-hidden text-white">
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div className="container-x relative py-16 sm:py-20">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-sm text-white/70">
          <Link href="/" className="hover:text-white">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1">
              <ChevronRight className="h-4 w-4" />
              {c.href ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : <span className="text-white">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        {text && <p className="mt-4 max-w-2xl text-lg text-white/80">{text}</p>}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="container-x py-16">
      <div className="bg-hero relative overflow-hidden rounded-3xl px-6 py-12 text-white sm:px-12">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Planning a cooling or cold storage project?</h2>
            <p className="mt-3 max-w-xl text-white/80">Talk to a Coolbond engineer for a free site survey and an itemised, no-obligation quotation.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">Get a Free Quote <ArrowRight className="h-4 w-4" /></Link>
            <a href={`tel:${site.phoneIntl}`} className="btn-ghost"><Phone className="h-4 w-4" /> {site.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Coolbond, I need help with ")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
