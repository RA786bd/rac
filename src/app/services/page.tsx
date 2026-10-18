import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "@/components/Icon";
import { CtaBand, PageHero } from "@/components/ui";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "AC installation, AC repair, cold storage projects, commercial refrigeration, central HVAC, AMC and spare parts supply in Bangladesh.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" text="Design, supply, installation and maintenance for every kind of cooling system." crumbs={[{ label: "Services" }]} />
      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card group flex gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ice text-ocean transition-colors group-hover:bg-navy group-hover:text-white">
                <Icon name={s.icon} className="h-7 w-7" />
              </span>
              <div>
                <h2 className="text-xl font-bold text-navy-900">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.short}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.idealFor.slice(0, 3).map((t) => (
                    <li key={t} className="rounded-full bg-ice-50 px-3 py-1 text-xs font-medium text-navy-600">{t}</li>
                  ))}
                </ul>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ocean">View details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
