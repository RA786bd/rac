import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Icon from "@/components/Icon";
import { CtaBand, PageHero } from "@/components/ui";
import { brands, productCategories } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Products",
  description: "Air conditioners, cold room equipment, compressors, commercial refrigeration, refrigerant gas and spare parts from Coolbond.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero title="Products" text="Equipment, compressors, refrigerants and spare parts for projects and service." crumbs={[{ label: "Products" }]} />
      <section className="container-x py-20">
        <div className="mb-10 flex flex-wrap gap-2">
          {productCategories.map((p) => (
            <a key={p.slug} href={`#${p.slug}`} className="rounded-full border border-navy/15 px-4 py-2 text-sm font-semibold text-navy-800 hover:border-ocean hover:text-ocean">{p.title}</a>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {productCategories.map((p) => (
            <article key={p.slug} id={p.slug} className="card scroll-mt-32">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white"><Icon name={p.icon} className="h-7 w-7" /></span>
                <div>
                  <h2 className="text-xl font-bold text-navy-900">{p.title}</h2>
                  <p className="text-sm text-mist">{p.summary}</p>
                </div>
              </div>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {p.items.map((i) => (
                  <li key={i} className="flex gap-2 text-sm text-navy-800"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ocean" /> {i}</li>
                ))}
              </ul>
              <Link href={`/contact`} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ocean">Ask for price & availability <ArrowRight className="h-4 w-4" /></Link>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-ice-50 p-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-mist">Brands we supply & service</p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {brands.map((b) => <span key={b} className="font-display text-lg font-bold text-navy/40">{b}</span>)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
