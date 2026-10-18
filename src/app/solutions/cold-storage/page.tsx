import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, Gauge, Layers, Leaf, Ruler, Wrench } from "lucide-react";
import Icon from "@/components/Icon";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { coldStorageTypes, industries, process } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Cold Storage Solutions",
  description: "Turnkey cold storage, freezer rooms and blast freezers in Bangladesh — design, insulation, refrigeration, installation, commissioning and after-sales service.",
};

const scope = [
  { icon: Ruler, title: "Engineering Design", text: "Layout, load calculation and equipment selection based on your product, volume and daily throughput." },
  { icon: Layers, title: "Insulation", text: "Imported PUF/PIR sandwich panels or on-site spray insulation, with insulated flooring and cold room doors." },
  { icon: Gauge, title: "Refrigeration Plant", text: "Condensing units, compressor racks, evaporators, valves and piping matched to the room temperature." },
  { icon: Cpu, title: "Controls & Automation", text: "From simple digital controllers to PLC / SCADA systems with remote monitoring and temperature logs." },
  { icon: Wrench, title: "Installation & Commissioning", text: "Erection by our own team, followed by pressure, pull-down and performance tests before handover." },
  { icon: Leaf, title: "Energy Efficiency", text: "Right-sized equipment, efficient compressors and good insulation to keep electricity costs under control." },
];

export default function ColdStoragePage() {
  return (
    <>
      <PageHero title="Cold Storage Solutions" text="Complete cold chain facilities — from a small chiller room to a large refrigerated warehouse." crumbs={[{ label: "Solutions" }, { label: "Cold Storage" }]} />

      <section className="container-x grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
        <SectionHeading eyebrow="Turnkey projects" title="One partner from design to after-sales" text="Each cold storage we build is customised to the industry and the product it serves. We look at what you store, how much moves in and out each day, the temperature and humidity it needs, and your future expansion plans — then design the most efficient system for the job." />
        <div className="rounded-3xl bg-ice p-8">
          <h3 className="font-bold text-navy-900">We handle the complete scope</h3>
          <ul className="mt-5 space-y-3">
            {["Requirement study & design", "Equipment & panel supply", "Insulation (panel or spray)", "Installation & erection", "Testing & commissioning", "After-sales service & AMC", "Spare parts & consumables"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-navy-800"><CheckCircle2 className="h-5 w-5 text-ocean" /> {t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ice-50">
        <div className="container-x py-20">
          <SectionHeading center eyebrow="Storage types" title="Rooms for every temperature range" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coldStorageTypes.map((c) => (
              <div key={c.title} className="card">
                <span className="inline-block rounded-full bg-navy px-3 py-1 text-xs font-bold text-white">{c.temp}</span>
                <h3 className="mt-4 text-xl font-bold text-navy-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeading eyebrow="Scope of work" title="Engineered in every detail" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {scope.map(({ icon: I, title, text }) => (
            <div key={title} className="card">
              <I className="h-8 w-8 text-ocean" />
              <h3 className="mt-4 text-lg font-bold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-hero relative overflow-hidden text-white">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="container-x relative py-20">
          <SectionHeading light eyebrow="Project process" title="How a Coolbond cold storage project runs" />
          <ol className="mt-12 grid gap-5 md:grid-cols-5">
            {process.map((p) => (
              <li key={p.step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="font-display text-3xl font-extrabold text-sky-400">{p.step}</span>
                <h3 className="mt-2 font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Applications" title="Cold storage for every industry" />
          <Link href="/contact" className="btn-primary shrink-0">Discuss your project <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {industries.slice(0, 5).concat(industries.slice(6, 7)).map((i) => (
            <div key={i.title} className="flex items-center gap-3 rounded-2xl border border-navy/10 p-4">
              <Icon name={i.icon} className="h-6 w-6 shrink-0 text-ember" />
              <span className="font-semibold text-navy-900">{i.title}</span>
            </div>
          ))}
          {["Multipurpose Warehouses", "Marine & Ice Plants"].map((t) => (
            <div key={t} className="flex items-center gap-3 rounded-2xl border border-navy/10 p-4">
              <Icon name="Warehouse" className="h-6 w-6 shrink-0 text-ember" />
              <span className="font-semibold text-navy-900">{t}</span>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
