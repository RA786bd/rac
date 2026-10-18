import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact Coolbond — call ${site.phone} or email ${site.email}. Corporate office: 134 Gulshan Avenue, Dhaka.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" text="Tell us what you need — we usually respond within one working day." crumbs={[{ label: "Contact" }]} />
      <section className="container-x grid gap-10 py-20 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          {[
            { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phoneIntl}` },
            { icon: MessageCircle, label: "WhatsApp", value: site.phone, href: `https://wa.me/${site.whatsapp}` },
            { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
            { icon: Clock, label: "Office hours", value: site.hours },
          ].map(({ icon: I, label, value, href }) => {
            const inner = (
              <>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white"><I className="h-5 w-5" /></span>
                <span><span className="block text-xs text-mist">{label}</span><span className="font-bold text-navy-900">{value}</span></span>
              </>
            );
            return href ? (
              <a key={label} href={href} className="card flex items-center gap-4 !p-4">{inner}</a>
            ) : (
              <div key={label} className="card flex items-center gap-4 !p-4">{inner}</div>
            );
          })}
          {site.offices.map((o) => (
            <div key={o.label} className="card flex items-start gap-4 !p-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky text-white"><MapPin className="h-5 w-5" /></span>
              <span><span className="block text-xs text-mist">{o.label}</span><span className="font-bold text-navy-900">{o.lines.join(", ")}</span></span>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-xl shadow-navy/5 sm:p-8">
          <h2 className="text-2xl font-bold text-navy-900">Send us a message</h2>
          <p className="mb-6 mt-1 text-sm text-mist">Fields marked * are required.</p>
          <ContactForm />
        </div>
      </section>
      <section className="container-x pb-20">
        <div className="overflow-hidden rounded-3xl border border-navy/10">
          <iframe
            title="Coolbond corporate office map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.offices[0].mapQuery)}&output=embed`}
            className="h-[400px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
