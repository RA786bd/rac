import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Target, CheckCircle2 } from "lucide-react";
import Icon from "@/components/Icon";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { whyUs } from "@/data/catalog";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.brand} is the refrigeration and air conditioning brand of ${site.company}, Dhaka, Bangladesh.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Coolbond" text={`The refrigeration & air conditioning brand of ${site.company}.`} crumbs={[{ label: "About" }]} />

      <section className="container-x grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow="Who we are" title="A Bangladeshi cooling company built for the next generation" />
          <div className="mt-6 space-y-4 leading-relaxed text-mist">
            <p>
              Coolbond is the brand of {site.company}, a Dhaka-based engineering company focused on air conditioning, cold storage and commercial refrigeration. Our corporate office is on Gulshan Avenue and our factory unit is in Suvadda, South Keraniganj.
            </p>
            <p>
              We combine engineering design, equipment supply, installation and after-sales service in one team. That means customers get systems sized correctly, installed properly and supported for their whole working life — whether it is a single office AC or a cold storage facility for an exporter.
            </p>
            <p>
              Our name says what we stand for: <strong className="text-navy-900">a lasting bond</strong> with every customer, built on cooling that simply works.
            </p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Residential & commercial AC", "Cold storage turnkey projects", "Commercial refrigeration", "Parts, gas & AMC"].map((t) => (
              <li key={t} className="flex items-center gap-2 font-medium text-navy-800"><CheckCircle2 className="h-5 w-5 text-ocean" /> {t}</li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-3xl bg-ice p-10">
          <Image src="/brand/coolbond-logo.png" alt={site.fullName} width={900} height={240} className="mx-auto w-full max-w-md" />
          <p className="mt-6 text-center font-display text-sm font-bold tracking-[0.2em] text-navy">{site.tagline.toUpperCase()}</p>
        </div>
      </section>

      <section className="bg-ice-50">
        <div className="container-x grid gap-6 py-20 md:grid-cols-2">
          <div className="rounded-3xl bg-navy p-8 text-white">
            <Target className="h-10 w-10 text-sky-400" />
            <h2 className="mt-4 text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 leading-relaxed text-white/80">
              To deliver reliable, energy-efficient cooling and cold chain solutions through sound engineering, genuine equipment and responsive after-sales service — helping homes and businesses in Bangladesh stay comfortable, productive and protected.
            </p>
          </div>
          <div className="rounded-3xl border border-navy/10 bg-white p-8">
            <Eye className="h-10 w-10 text-ember" />
            <h2 className="mt-4 text-2xl font-bold text-navy-900">Our Vision</h2>
            <p className="mt-3 leading-relaxed text-mist">
              To be Bangladesh&apos;s most trusted next-generation refrigeration and air conditioning company — known for smart, sustainable systems and long-term customer relationships.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeading center eyebrow="Our strengths" title="What makes Coolbond different" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w) => (
            <div key={w.title} className="card">
              <Icon name={w.icon} className="h-8 w-8 text-ocean" />
              <h3 className="mt-4 text-lg font-bold text-navy-900">{w.title}</h3>
              <p className="mt-2 text-sm text-mist">{w.text}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
