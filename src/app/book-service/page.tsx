import type { Metadata } from "next";
import { CalendarCheck, PhoneCall, Wrench } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Book a Service",
  description: "Book AC servicing, repair, installation or refrigeration maintenance with Coolbond.",
};

type Props = { searchParams: Promise<{ service?: string }> };

export default async function BookServicePage({ searchParams }: Props) {
  const { service = "" } = await searchParams;
  return (
    <>
      <PageHero title="Book a Service" text="Fill in the details and our service desk will call you to confirm a time." crumbs={[{ label: "Book a Service" }]} />
      <section className="container-x grid gap-10 py-20 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-xl shadow-navy/5 sm:p-8">
          <ContactForm variant="booking" defaultService={service} />
        </div>
        <div className="space-y-5">
          {[
            { icon: CalendarCheck, title: "1. Submit your request", text: "Tell us the equipment, problem and preferred date." },
            { icon: PhoneCall, title: "2. We call to confirm", text: "Our service desk confirms the time and gives an estimate." },
            { icon: Wrench, title: "3. Technician visits", text: "A trained technician diagnoses and fixes the problem on site." },
          ].map(({ icon: I, title, text }) => (
            <div key={title} className="flex gap-4 rounded-2xl bg-ice-50 p-5">
              <I className="h-7 w-7 shrink-0 text-ocean" />
              <div><h3 className="font-bold text-navy-900">{title}</h3><p className="mt-1 text-sm text-mist">{text}</p></div>
            </div>
          ))}
          <div className="rounded-2xl bg-ember p-6 text-white">
            <p className="text-sm text-white/85">Urgent breakdown?</p>
            <a href={`tel:${site.phoneIntl}`} className="mt-1 block font-display text-2xl font-bold">{site.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
