import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { industries } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Industries",
  description: "Coolbond serves fish & shrimp, agro, pharma, dairy, supermarkets, hospitality and industrial customers across Bangladesh.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero title="Industries We Serve" text="Specialised cooling for businesses where temperature control protects product, people and profit." crumbs={[{ label: "Industries" }]} />
      <section className="container-x py-20">
        <SectionHeading center title="Solutions shaped around your sector" text="Every industry has different temperature, hygiene and uptime requirements. We design for yours." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <div key={i.title} className="card text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-ice text-ocean"><Icon name={i.icon} className="h-8 w-8" /></span>
              <h2 className="mt-5 text-lg font-bold text-navy-900">{i.title}</h2>
              <p className="mt-2 text-sm text-mist">{i.text}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
