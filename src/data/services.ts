export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string; // lucide icon name, mapped in components/Icon.tsx
  intro: string;
  includes: string[];
  benefits: string[];
  idealFor: string[];
};

export const services: Service[] = [
  {
    slug: "ac-installation",
    title: "AC Installation",
    short: "Split, cassette, ducted, package and VRF/VRV systems sized and installed correctly the first time.",
    icon: "AirVent",
    intro:
      "A good air conditioner installed badly will cost you more in power bills and repairs than a modest unit installed well. Our engineers survey the space, calculate the real cooling load and install to manufacturer standards — piping, vacuuming, charging and commissioning included.",
    includes: [
      "Site survey and heat-load calculation",
      "Unit selection advice (tonnage, inverter vs. non-inverter)",
      "Copper piping, insulation, drain line and electrical work",
      "Nitrogen pressure test and deep vacuum before charging",
      "Commissioning, performance check and handover",
      "Shifting and re-installation of existing units",
    ],
    benefits: ["Lower electricity bills", "Longer compressor life", "Quieter, even cooling", "Warranty-safe installation"],
    idealFor: ["Homes & apartments", "Offices", "Showrooms", "Hotels & restaurants"],
  },
  {
    slug: "ac-repair-maintenance",
    title: "AC Repair & Maintenance",
    short: "Fast diagnosis and repair for no-cooling, leaks, noise, error codes, PCB and compressor faults.",
    icon: "Wrench",
    intro:
      "When your AC stops cooling, you need it fixed quickly and correctly. Our technicians carry common spares, diagnose the root cause instead of simply topping up gas, and explain the fix before starting work.",
    includes: [
      "General servicing — filter, coil and drain cleaning",
      "Gas leak detection, repair and refrigerant recharge",
      "Compressor, capacitor, fan motor and PCB replacement",
      "Inverter AC error-code diagnosis",
      "Water leakage and bad-odour fixes",
      "Chemical / jet wash deep cleaning",
    ],
    benefits: ["Transparent quotation before work", "Genuine spare parts", "Service warranty on repairs", "Doorstep service in Dhaka"],
    idealFor: ["Residential customers", "Corporate offices", "Retail outlets", "Banks & ATM booths"],
  },
  {
    slug: "cold-storage-projects",
    title: "Cold Storage Turnkey Projects",
    short: "Design-to-handover cold rooms, freezer rooms and blast freezers — from 1-ton rooms to large warehouses.",
    icon: "Warehouse",
    intro:
      "We deliver complete cold chain facilities under one contract: engineering design, insulated panel supply, refrigeration plant, electrical and control panels, installation, testing and after-sales service. Every system is designed around the product you store, your throughput and your power costs.",
    includes: [
      "Product, capacity and temperature requirement study",
      "Refrigeration load calculation and equipment selection",
      "PUF/PIR insulated panels, cold room doors and flooring",
      "Condensing units, evaporators, valves and controls",
      "PLC/SCADA or simple digital controller options",
      "Testing, commissioning, operator training and AMC",
    ],
    benefits: ["Single point of responsibility", "Energy-efficient design", "Scalable for future expansion", "Temperature logging for compliance"],
    idealFor: ["Fish & shrimp processors", "Fruit, vegetable & potato storage", "Pharma & hospitals", "Frozen food & ice cream"],
  },
  {
    slug: "commercial-refrigeration",
    title: "Commercial Refrigeration",
    short: "Display chillers, deep freezers, walk-in coolers and refrigeration racks for retail and food businesses.",
    icon: "Refrigerator",
    intro:
      "Supermarkets, restaurants and food outlets depend on refrigeration that runs all day without failure. We supply, install and maintain commercial refrigeration equipment so your products stay fresh and your shelves stay full.",
    includes: [
      "Supermarket display chillers and island freezers",
      "Walk-in coolers and freezers",
      "Kitchen refrigeration for hotels & restaurants",
      "Remote condensing units and multi-compressor racks",
      "Preventive maintenance and emergency breakdown repair",
    ],
    benefits: ["Reduced product loss", "Lower running costs", "Fast breakdown response", "Spare-parts availability"],
    idealFor: ["Super shops", "Restaurants & hotels", "Bakeries & dairies", "Convenience stores"],
  },
  {
    slug: "industrial-hvac",
    title: "Industrial & Central HVAC",
    short: "Chillers, AHUs, ducting, ventilation and precision cooling for factories, data rooms and large buildings.",
    icon: "Factory",
    intro:
      "Large buildings need engineered HVAC systems — not just more split units. We design, install and maintain central air conditioning and ventilation systems for factories, commercial buildings and critical spaces.",
    includes: [
      "VRF/VRV system design and installation",
      "Air- and water-cooled chiller plants",
      "AHU, FCU and GI ducting works",
      "Ventilation, exhaust and fresh-air systems",
      "Precision air conditioning for server and data rooms",
    ],
    benefits: ["Engineered for your building", "Better indoor air quality", "Centralised control", "Lower lifetime cost"],
    idealFor: ["Garment & textile factories", "Commercial towers", "Hospitals", "Data centres & server rooms"],
  },
  {
    slug: "annual-maintenance-contract",
    title: "Annual Maintenance Contract (AMC)",
    short: "Scheduled servicing with priority breakdown support — keep every unit running all year.",
    icon: "CalendarCheck",
    intro:
      "An AMC turns surprise breakdowns into planned maintenance. We service your AC and refrigeration equipment on a fixed schedule, keep service records for every unit and give AMC customers priority when something goes wrong.",
    includes: [
      "Scheduled preventive servicing (quarterly / bi-monthly)",
      "Priority emergency call-out",
      "Unit-wise service log and health report",
      "Discounted rates on spare parts",
      "Dedicated account coordinator",
    ],
    benefits: ["Predictable yearly cost", "Fewer breakdowns", "Longer equipment life", "Priority response"],
    idealFor: ["Corporate offices", "Banks & branches", "Factories", "Cold storage operators"],
  },
  {
    slug: "spare-parts-supply",
    title: "Compressors, Gas & Spare Parts",
    short: "AC and refrigeration compressors, refrigerant gas, valves, controls and consumables.",
    icon: "Cog",
    intro:
      "We supply the components technicians and facility teams need — compressors, refrigerant gases, valves, controls, copper pipe and consumables — with technical guidance on choosing the right replacement.",
    includes: [
      "AC compressors (rotary & scroll)",
      "Refrigerator and freezer compressors",
      "Refrigerant gases (R-22, R-32, R-410A, R-134a, R-404A, R-600a)",
      "Expansion valves, solenoid valves, filter driers, controllers",
      "Copper pipe, insulation, brazing rods and compressor oil",
    ],
    benefits: ["Genuine, traceable stock", "Technical selection support", "Bulk pricing for contractors", "Delivery across Bangladesh"],
    idealFor: ["Service technicians", "Contractors", "Facility managers", "Manufacturers"],
  },
  {
    slug: "refrigerated-transport",
    title: "Refrigerated Van & Transport Units",
    short: "Reefer box building and transport refrigeration units for chilled and frozen delivery.",
    icon: "Truck",
    intro:
      "Cold chain doesn't stop at the warehouse door. We build insulated reefer boxes and fit transport refrigeration units so your products arrive at the right temperature.",
    includes: [
      "Insulated reefer box fabrication",
      "Transport refrigeration unit supply & fitting",
      "Temperature monitoring options",
      "Servicing and repair of reefer units",
    ],
    benefits: ["Unbroken cold chain", "Lower spoilage", "Durable insulated bodies", "Service support"],
    idealFor: ["Frozen food distributors", "Dairy & ice cream", "Pharma distribution", "Fish & meat suppliers"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
