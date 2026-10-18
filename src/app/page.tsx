import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Thermometer, Wrench, ShieldCheck, Snowflake } from "lucide-react";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { SectionHeading } from "@/components/ui";
import { services } from "@/data/services";
import { brands, coldStorageTypes, industries, process, productCategories, whyUs } from "@/data/catalog";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero relative overflow-hidden text-white">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide backdrop-blur">
              <Snowflake className="h-3.5 w-3.5 text-sky-400" /> Refrigeration & Air Conditioning Experts
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              Cooling today. <span className="text-gradient">NextGEN</span> tomorrow.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Coolbond designs, supplies, installs and maintains air conditioning, cold storage and commercial refrigeration systems — for homes, offices, factories and the food & pharma cold chain across Bangladesh.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book-service" className="btn-primary">Book a Service <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/contact" className="btn-ghost">Request a Project Quote</Link>
            </div>
            <ul className="mt-10 grid max-w-lg grid-cols-2 gap-3 text-sm text-white/85">
              {["Free site survey", "In-house engineers", "Genuine parts & gas", "After-sales & AMC"].map((t) => (
                <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-400" /> {t}</li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative mx-auto aspect-square w-full max-w-[18rem] sm:max-w-md">
            <div className="absolute inset-0 rounded-full bg-sky/20 blur-3xl" />
            <div className="absolute inset-6 animate-spin-slow rounded-full border-2 border-dashed border-white/15" />
            <div className="absolute inset-10 flex sm:inset-16 items-center justify-center rounded-full bg-white shadow-2xl shadow-black/30">
              <Image src="/brand/coolbond-icon.png" alt="" width={512} height={512} priority className="h-3/4 w-3/4 animate-float object-contain" />
            </div>
            <div className="absolute -left-2 top-10 hidden rounded-2xl sm:block bg-white/95 p-3 pr-5 text-navy-900 shadow-xl sm:left-0">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ice text-ocean"><Thermometer className="h-5 w-5" /></span>
                <div><p className="text-xs text-mist">Freezer room</p><p className="font-display text-lg font-bold">−25°C</p></div>
              </div>
            </div>
            <div className="absolute -right-2 top-1/2 hidden rounded-2xl sm:block bg-white/95 p-3 pr-5 text-navy-900 shadow-xl sm:right-0">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ember/10 text-ember"><Wrench className="h-5 w-5" /></span>
                <div><p className="text-xs text-mist">AC service</p><p className="font-display text-sm font-bold">Doorstep in Dhaka</p></div>
              </div>
            </div>
            <div className="absolute bottom-6 left-8 hidden rounded-2xl sm:block bg-white/95 p-3 pr-5 text-navy-900 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/10 text-navy"><ShieldCheck className="h-5 w-5" /></span>
                <div><p className="text-xs text-mist">Turnkey projects</p><p className="font-display text-sm font-bold">Design → Handover</p></div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="relative border-t border-white/10 bg-navy-950/40 backdrop-blur">
          <div className="container-x grid grid-cols-2 divide-white/10 py-6 md:grid-cols-4 md:divide-x">
            {[
              ["Design", "Load calculation & engineering"],
              ["Supply", "Equipment, parts & refrigerant"],
              ["Install", "By our own trained team"],
              ["Maintain", "Service, repair & AMC"],
            ].map(([t, d]) => (
              <div key={t} className="px-4 py-3 md:px-6">
                <p className="font-display text-xl font-bold">{t}</p>
                <p className="text-sm text-white/65">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="What we do" title="Complete cooling solutions under one roof" text="From a single split AC to a multi-chamber cold storage facility, our team handles the full job — so you deal with one accountable partner." />
          <Link href="/services" className="btn-outline shrink-0">All services <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card group flex flex-col">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ice text-ocean transition-colors group-hover:bg-navy group-hover:text-white">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy-900">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ocean">Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* COLD STORAGE */}
      <section className="bg-ice-50">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Cold storage solutions" title="Cold rooms built around what you store" text="Every product has its own temperature, humidity and handling needs. We engineer each cold storage to match — from a compact 1-ton chiller room to a multi-thousand-ton refrigerated warehouse — with energy use designed down from day one." />
            <ul className="mt-8 space-y-3">
              {["Design, insulation, refrigeration plant, electrical & controls — one contract", "Manual controls or PLC / SCADA automation with temperature logging", "Expansion and upgrade of existing cold storages", "Testing, commissioning, operator training and after-sales"].map((t) => (
                <li key={t} className="flex gap-3 text-navy-800"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ocean" /> {t}</li>
              ))}
            </ul>
            <Link href="/solutions/cold-storage" className="btn-blue mt-8">Explore cold storage <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {coldStorageTypes.map((c, i) => (
              <div key={c.title} className={`rounded-2xl p-5 ${i === 1 ? "bg-navy text-white" : "border border-navy/10 bg-white"}`}>
                <div className="flex items-center justify-between">
                  <h3 className={`font-bold ${i === 1 ? "text-white" : "text-navy-900"}`}>{c.title}</h3>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${i === 1 ? "bg-white/15 text-sky-400" : "bg-ice text-ocean"}`}>{c.temp}</span>
                </div>
                <p className={`mt-2 text-sm leading-relaxed ${i === 1 ? "text-white/75" : "text-mist"}`}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x py-20">
        <SectionHeading center eyebrow="How we work" title="A clear process from survey to service" />
        <ol className="mt-14 grid gap-6 md:grid-cols-5">
          {process.map((p, i) => (
            <li key={p.step} className="relative">
              {i < process.length - 1 && <span className="absolute left-14 top-7 hidden h-0.5 w-[calc(100%-2rem)] bg-gradient-to-r from-sky/60 to-transparent md:block" aria-hidden />}
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy font-display text-lg font-bold text-white shadow-lg shadow-navy/20">{p.step}</span>
              <h3 className="mt-5 font-bold text-navy-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* WHY US */}
      <section className="bg-hero relative overflow-hidden text-white">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="container-x relative py-20">
          <SectionHeading light eyebrow="Why Coolbond" title="Engineering you can rely on, service you can reach" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => (
              <div key={w.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10">
                <Icon name={w.icon} className="h-8 w-8 text-sky-400" />
                <h3 className="mt-4 text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="container-x py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Industries we serve" title="Trusted where temperature matters" />
          <Link href="/industries" className="btn-outline shrink-0">View industries <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {industries.map((ind) => (
            <div key={ind.title} className="card !p-5">
              <Icon name={ind.icon} className="h-7 w-7 text-ember" />
              <h3 className="mt-3 font-bold text-navy-900">{ind.title}</h3>
              <p className="mt-1 text-sm text-mist">{ind.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-ice-50">
        <div className="container-x py-20">
          <SectionHeading center eyebrow="Products" title="Equipment, parts and refrigerants" text="Project equipment and service spares, with engineering advice on choosing the right model." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((p) => (
              <Link key={p.slug} href={`/products#${p.slug}`} className="card group">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white"><Icon name={p.icon} className="h-6 w-6" /></span>
                  <h3 className="text-lg font-bold text-navy-900">{p.title}</h3>
                </div>
                <p className="mt-4 text-sm text-mist">{p.summary}</p>
                <p className="mt-3 text-xs font-medium text-navy-600">{p.items.slice(0, 3).join(" · ")}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="container-x py-14">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-mist">Brands we supply & service</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {brands.map((b) => (
            <span key={b} className="font-display text-xl font-bold text-navy/35 transition-colors hover:text-navy">{b}</span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-ice-50" id="contact">
        <div className="container-x grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Contact us" title="Let's talk about your cooling needs" text="Call, WhatsApp or send a message — an engineer will get back to you with advice and a quotation." />
            <div className="mt-8 space-y-4">
              <a href={`tel:${site.phoneIntl}`} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ember text-white"><Phone className="h-5 w-5" /></span><span><span className="block text-xs text-mist">Call us</span><span className="font-bold text-navy-900">{site.phone}</span></span></a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white"><Mail className="h-5 w-5" /></span><span><span className="block text-xs text-mist">Email</span><span className="font-bold text-navy-900">{site.email}</span></span></a>
              {site.offices.map((o) => (
                <div key={o.label} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky text-white"><MapPin className="h-5 w-5" /></span><span><span className="block text-xs text-mist">{o.label}</span><span className="font-bold text-navy-900">{o.lines.join(", ")}</span></span></div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-xl shadow-navy/5 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
