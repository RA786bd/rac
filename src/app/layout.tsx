import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WhatsAppFab } from "@/components/ui";
import { site } from "@/data/site";

const heading = Outfit({ subsets: ["latin"], variable: "--font-heading", weight: ["500", "600", "700", "800"] });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} | ${site.company}`,
    template: `%s | Coolbond`,
  },
  description: site.description,
  keywords: [
    "AC installation Dhaka", "AC repair Bangladesh", "cold storage Bangladesh", "cold room", "blast freezer",
    "commercial refrigeration", "VRF", "HVAC Bangladesh", "refrigeration company Dhaka", "Coolbond", "NextGEN RAC",
  ],
  openGraph: {
    type: "website",
    siteName: site.fullName,
    title: site.fullName,
    description: site.description,
    url: site.url,
    images: [{ url: "/brand/coolbond-logo-hd.png", width: 1600, height: 427, alt: site.fullName }],
    locale: "en_BD",
  },
  twitter: { card: "summary_large_image", title: site.fullName, description: site.description },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: site.fullName,
  legalName: site.company,
  slogan: site.tagline,
  url: site.url,
  logo: `${site.url}/brand/coolbond-logo-hd.png`,
  telephone: site.phoneIntl,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "134, Gulshan Avenue",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  areaServed: "Bangladesh",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
