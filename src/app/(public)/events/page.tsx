
import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import PageHero from "@/components/ui/page-hero";
import JoinCTA from "@/components/sections/join-cta";

export const metadata: Metadata = {
  title: "Events",
  description: "Explore events, workshops and hackathons by KRIVA.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        label="EVENTS & EXPERIENCES"
        title="Learn together. Build together."
        description="Discover workshops, hackathons, competitions and experiences organized by KRIVA."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">

          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-extrabold">
              Discover Events
            </h2>

            <span className="rounded-full bg-red-50 px-4 py-2 text-xs font-bold text-[#D92327]">
              Official KML Events
            </span>
          </div>

          <div className="mt-12 rounded-3xl border border-dashed border-neutral-300 bg-[#FAFAF8] px-6 py-20 text-center">

            <CalendarDays
              size={42}
              className="mx-auto text-[#D92327]"
            />

            <h3 className="mt-6 text-2xl font-extrabold">
              Something exciting is coming.
            </h3>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-neutral-500">
              Upcoming events, workshops and competitions
              will be published here.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex rounded-full bg-[#171717] px-6 py-3 text-sm font-bold text-white hover:bg-[#D92327]"
            >
              Back to Home
            </Link>

          </div>
        </div>
      </section>

      <JoinCTA />
    </>
  );
}
