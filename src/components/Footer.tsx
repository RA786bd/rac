import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white/75">
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="inline-block rounded-2xl bg-white p-3">
            <Image src="/brand/coolbond-logo.png" alt={site.fullName} width={900} height={240} className="h-12 w-auto" />
          </div>
          <p className="mt-5 text-sm leading-relaxed">{site.description}</p>
          <p className="mt-4 font-display text-sm font-bold tracking-wide text-sky-400">{site.tagline.toUpperCase()}</p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Services</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-sky-400">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Company</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[
              ["About Us", "/about"],
              ["Cold Storage Solutions", "/solutions/cold-storage"],
              ["Products", "/products"],
              ["Industries", "/industries"],
              ["Book a Service", "/book-service"],
              ["Contact", "/contact"],
            ].map(([l, h]) => (
              <li key={h}><Link href={h} className="hover:text-sky-400">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Get in touch</h3>
          <ul className="mt-5 space-y-4 text-sm">
            {site.offices.map((o) => (
              <li key={o.label} className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <span><strong className="block text-white">{o.label}</strong>{o.lines.join(", ")}</span>
              </li>
            ))}
            <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-sky-400" /><a href={`tel:${site.phoneIntl}`} className="hover:text-white">{site.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-sky-400" /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} {site.company}. All rights reserved.</p>
          <p>Coolbond is a brand of {site.company}.</p>
        </div>
      </div>
    </footer>
  );
}
