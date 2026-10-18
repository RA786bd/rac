// Product categories, cold-storage types, industries, process and brands.

export type ProductCategory = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  items: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "air-conditioners",
    title: "Air Conditioners",
    icon: "AirVent",
    summary: "Residential and commercial AC systems for every space and budget.",
    items: ["Wall-mounted split AC (inverter & non-inverter)", "Ceiling cassette AC", "Ducted & ceiling-concealed units", "Floor-standing / package AC", "VRF / VRV systems", "Precision AC for server rooms"],
  },
  {
    slug: "cold-room-equipment",
    title: "Cold Room Equipment",
    icon: "Snowflake",
    summary: "Everything needed to build a chiller, freezer or blast freezer room.",
    items: ["PUF / PIR insulated sandwich panels", "Hinged & sliding cold room doors", "Condensing units", "Unit coolers / evaporators", "Strip curtains & air curtains", "Pressure relief valves & door heaters"],
  },
  {
    slug: "compressors",
    title: "Compressors",
    icon: "Cog",
    summary: "Replacement and project compressors for AC and refrigeration.",
    items: ["Rotary AC compressors", "Scroll compressors", "Semi-hermetic reciprocating compressors", "Refrigerator & freezer compressors", "Screw compressors (project basis)"],
  },
  {
    slug: "commercial-refrigeration",
    title: "Commercial Refrigeration",
    icon: "Refrigerator",
    summary: "Display and storage refrigeration for retail and food service.",
    items: ["Display chillers & multideck units", "Island & chest freezers", "Under-counter refrigerators", "Ice machines", "Instant quick freezers"],
  },
  {
    slug: "refrigerant-gas",
    title: "Refrigerant Gas",
    icon: "Flame",
    summary: "Common refrigerants in cylinders for service and projects.",
    items: ["R-32", "R-410A", "R-22", "R-134a", "R-404A", "R-600a"],
  },
  {
    slug: "spare-parts-controls",
    title: "Spare Parts & Controls",
    icon: "SlidersHorizontal",
    summary: "Valves, controls and consumables for installation and service work.",
    items: ["Expansion & solenoid valves", "Filter driers & sight glasses", "Digital temperature controllers", "Pressure switches & gauges", "Copper pipe & insulation", "Compressor oil & brazing materials"],
  },
];

export const coldStorageTypes = [
  { title: "Chiller Room", temp: "+0°C to +10°C", text: "For fruits, vegetables, dairy, beverages and pharmaceuticals that need cool but not frozen storage." },
  { title: "Freezer Room", temp: "−18°C to −25°C", text: "Long-term storage for frozen fish, meat, poultry, ice cream and ready-to-cook foods." },
  { title: "Blast Freezer", temp: "down to −40°C", text: "Rapid freezing that locks in quality and texture before products move to frozen storage." },
  { title: "Ante Room", temp: "+5°C to +12°C", text: "A buffer zone in front of cold rooms that reduces heat entry and saves energy." },
  { title: "Processing Hall", temp: "+10°C to +15°C", text: "Temperature-controlled areas for cutting, grading, sorting and packing." },
  { title: "Loading Bay", temp: "Controlled", text: "Insulated docks with dock shelters to protect the cold chain during loading." },
];

export const industries = [
  { title: "Fish & Shrimp", icon: "Fish", text: "Processing halls, blast freezers and export-grade frozen storage." },
  { title: "Fruits & Vegetables", icon: "Apple", text: "Humidity-controlled chiller rooms that extend shelf life." },
  { title: "Potato & Seed Storage", icon: "Sprout", text: "Large-capacity storage with precise temperature and humidity." },
  { title: "Pharma & Hospitals", icon: "Pill", text: "Vaccine and medicine storage with temperature logging." },
  { title: "Dairy & Ice Cream", icon: "IceCreamCone", text: "Hardening rooms, chillers and reefer transport." },
  { title: "Supermarkets", icon: "ShoppingCart", text: "Display refrigeration, walk-in coolers and store AC." },
  { title: "Hotels & Restaurants", icon: "UtensilsCrossed", text: "Kitchen refrigeration and guest-area air conditioning." },
  { title: "Factories & Offices", icon: "Building2", text: "Central HVAC, VRF and ventilation systems." },
];

export const process = [
  { step: "01", title: "Consultation & Survey", text: "We visit the site, understand your product, space and budget, and record every requirement." },
  { step: "02", title: "Engineering Design", text: "Load calculation, equipment selection and drawings — optimised for energy efficiency." },
  { step: "03", title: "Supply & Installation", text: "Our own team installs panels, plant, piping, electrical and controls to standard." },
  { step: "04", title: "Testing & Commissioning", text: "Pressure tests, pull-down tests and performance checks before handover and training." },
  { step: "05", title: "After-Sales & AMC", text: "Preventive maintenance, spare parts and fast breakdown support for the life of the system." },
];

export const whyUs = [
  { icon: "ShieldCheck", title: "Genuine Equipment", text: "We supply only genuine, traceable equipment and parts with valid warranties." },
  { icon: "Zap", title: "Energy-Efficient Design", text: "Systems sized correctly and specified to cut your monthly power costs." },
  { icon: "HardHat", title: "In-House Engineers", text: "Our own trained engineers and technicians — not unknown sub-contractors." },
  { icon: "Factory", title: "Own Factory Support", text: "Fabrication support from our factory unit in South Keraniganj, Dhaka." },
  { icon: "Headset", title: "Responsive After-Sales", text: "One call reaches a team that knows your system and its service history." },
  { icon: "Receipt", title: "Transparent Pricing", text: "Clear, itemised quotations — no hidden charges after the job starts." },
];

// Brands commonly supplied / serviced in the market. Confirm the list with management before launch.
export const brands = ["Danfoss", "Bitzer", "Copeland", "Tecumseh", "Embraco", "Secop", "GMCC", "Panasonic", "LG", "Daikin", "Gree", "Carrier"];
