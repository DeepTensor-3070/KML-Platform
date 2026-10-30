
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { featuredEvents } from "@/data/site";

export default function EventsPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-extrabold tracking-[0.3em] text-[#D92327]">
              WHAT'S HAPPENING
            </p>

            <h2 className="mt-5 text-4xl font-extrabold md:text-5xl">
              Events & Experiences.
            </h2>

            <p className="mt-4 text-neutral-500">
              Learn, compete, collaborate and build.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#D92327]"
          >
            View all events <ArrowRight size={17} />
          </Link>
        </div>

        {featuredEvents.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-neutral-300 bg-[#FAFAF8] px-6 py-16 text-center">
            <CalendarDays size={38} className="mx-auto text-[#D92327]" />

            <h3 className="mt-5 text-xl font-bold">
              Something exciting is coming.
            </h3>

            <p className="mt-3 text-sm text-neutral-500">
              Upcoming KML events will appear here.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredEvents.map((event) => (
              <article
                key={event.title}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
              >
                <div className="h-2 bg-[#D92327]" />
                <div className="p-7">
                  <p className="text-xs font-bold text-[#D92327]">
                    {event.category}
                  </p>
                  <h3 className="mt-4 text-xl font-extrabold">
                    {event.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-500">
                    {event.description}
                  </p>
                  <p className="mt-5 text-xs font-bold text-neutral-500">
                    {event.dateLabel}
                  </p>
                  <Link
                    href={event.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#D92327]"
                  >
                    View event <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
