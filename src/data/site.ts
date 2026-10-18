// Central place for company details. Edit here and the whole site updates.

export const site = {
  brand: "Coolbond",
  company: "NextGEN RAC Limited",
  fullName: "Coolbond Refrigeration & Air Conditioning",
  tagline: "Cooling Today. NextGEN Tomorrow.",
  description:
    "Coolbond (NextGEN RAC Limited) designs, supplies, installs and services air conditioning, cold storage and commercial refrigeration systems across Bangladesh.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.coolbond.com.bd",
  phone: "01977550022",
  phoneIntl: "+8801977550022",
  whatsapp: "8801977550022",
  email: "info@coolbond.com.bd",
  hours: "Saturday – Thursday, 9:00 AM – 7:00 PM",
  emergency: "Emergency breakdown support available on call",
  offices: [
    {
      label: "Corporate Office",
      lines: ["134, Gulshan Avenue", "Dhaka, Bangladesh"],
      mapQuery: "134 Gulshan Avenue, Dhaka, Bangladesh",
    },
    {
      label: "Factory (Unit-1)",
      lines: ["Suvadda, South Keranigonj", "Dhaka, Bangladesh"],
      mapQuery: "Suvadda, South Keraniganj, Dhaka, Bangladesh",
    },
  ],
  social: {
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
  },
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "AC Installation", href: "/services/ac-installation" },
      { label: "AC Repair & Maintenance", href: "/services/ac-repair-maintenance" },
      { label: "Cold Storage Turnkey Projects", href: "/services/cold-storage-projects" },
      { label: "Commercial Refrigeration", href: "/services/commercial-refrigeration" },
      { label: "Annual Maintenance Contract", href: "/services/annual-maintenance-contract" },
      { label: "All Services", href: "/services" },
    ],
  },
  { label: "Cold Storage", href: "/solutions/cold-storage" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];
