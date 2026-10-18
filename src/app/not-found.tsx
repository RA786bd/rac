import Link from "next/link";
import { Snowflake } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <Snowflake className="h-16 w-16 text-sky" />
      <h1 className="mt-6 text-5xl font-extrabold text-navy-900">404</h1>
      <p className="mt-3 text-lg text-mist">This page has frozen over. Let&apos;s get you somewhere warmer.</p>
      <Link href="/" className="btn-blue mt-8">Back to home</Link>
    </section>
  );
}
