
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function JoinCTA() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[#171717] px-8 py-16 text-white md:px-16 md:py-20">

          <div className="pointer-events-none absolute -right-20 -top-40 h-96 w-96 rounded-full border border-red-500/30" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-bold tracking-[0.3em] text-[#F04449]">
              BE PART OF KRIVA
            </p>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Your next idea could change everything.
            </h2>

            <p className="mt-6 leading-8 text-neutral-400">
              Connect with curious minds, explore emerging technologies
              and build something meaningful.
            </p>

            <Link
              href="/join"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D92327] px-7 py-4 font-bold text-white hover:bg-[#B91C22]"
            >
              Join KML <ArrowUpRight size={18} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
