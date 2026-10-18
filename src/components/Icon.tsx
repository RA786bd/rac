import {
  AirVent, Wrench, Warehouse, Refrigerator, Factory, CalendarCheck, Cog, Truck, Snowflake, Flame,
  SlidersHorizontal, Fish, Apple, Sprout, Pill, IceCreamCone, ShoppingCart, UtensilsCrossed, Building2,
  ShieldCheck, Zap, HardHat, Headset, Receipt, type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  AirVent, Wrench, Warehouse, Refrigerator, Factory, CalendarCheck, Cog, Truck, Snowflake, Flame,
  SlidersHorizontal, Fish, Apple, Sprout, Pill, IceCreamCone, ShoppingCart, UtensilsCrossed, Building2,
  ShieldCheck, Zap, HardHat, Headset, Receipt,
};

export default function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? Snowflake;
  return <Cmp className={className} aria-hidden="true" />;
}
