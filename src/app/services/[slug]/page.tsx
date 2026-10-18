import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Phone, Sparkles } from "lucide-react";
import Icon from "@/components/Icon";
import { CtaBand, PageHero } from "@/components/ui";
import { getService, services } from "@/data/services";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return { title: s.title, description: s.short };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const others = services.filter((o) => o.slug !== s.slug).slice(0, 4);

  return (
    <>
      <PageHero title={s.title} text={s.short} crumbs={[{ label: "Services", href: "/services" }, { label: s.title }]} />
      <section className="container-x grid gap-12 py-20 lg:grid-cols-[1fr_340px]">
        <div>
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ice text-ocean"><Icon name={s.icon} className="h-7 w-7" /></span>
          <p className="mt-6 text-lg leading-relaxed text-navy-800">{s.intro}</p>

          <h2 className="mt-12 text-2xl font-bold text-navy-900">What&apos;s included</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {s.includes.map((i) => (
              <li key={i} className="flex gap-3 rounded-xl border border-navy/10 p-4 text-sm text-navy-800"><CheckCircle2 className="h-5 w-5 shrink-0 text-ocean" /> {i}</li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-bold text-navy-900">Benefits</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {s.benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 rounded-xl bg-ice-50 p-4 font-semibold text-navy-900"><Sparkles className="h-5 w-5 text-ember" /> {b}</div>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-bold text-navy-900">Ideal for</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {s.idealFor.map((t) => (
              <li key={t} className="rounded-full bg-navy px-4 py-2 text-sm font-medium text-white">{t}</li>
            ))}
          </ul>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
          <div className="rounded-3xl bg-hero p-6 text-white">
            <h3 className="text-xl font-bold">Need this service?</h3>
            <p className="mt-2 text-sm text-white/80">Get a free consultation and quotation from our engineers.</p>
            <Link href={`/book-service?service=${encodeURIComponent(s.title)}`} className="btn-primary mt-5 w-full">Book now <ArrowRight className="h-4 w-4" /></Link>
            <a href={`tel:${site.phoneIntl}`} className="btn-ghost mt-3 w-full"><Phone className="h-4 w-4" /> {site.phone}</a>
          </div>
          <div className="rounded-3xl border border-navy/10 p-6">
            <h3 className="font-bold text-navy-900">Other services</h3>
            <ul className="mt-4 space-y-1">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/services/${o.slug}`} className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-navy-800 hover:bg-ice hover:text-ocean">
                    {o.title} <ArrowRight className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
      <CtaBand />
    </>
  );
}
