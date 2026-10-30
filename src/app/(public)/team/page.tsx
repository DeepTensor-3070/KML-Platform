
import type { Metadata } from "next";
import { Users, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/page-hero";
import JoinCTA from "@/components/sections/join-cta";
import { teamStructure } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the people behind KRIVA.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        label="THE PEOPLE BEHIND KRIVA"
        title="Driven by people. Powered by ideas."
        description="A collaborative community of faculty, coordinators, domain leads and passionate learners."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[1320px] gap-5 px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-10">

          {teamStructure.map((role, index) => (
            <article
              key={role}
              className="group rounded-2xl border border-neutral-200 p-8 transition hover:-translate-y-2 hover:border-[#D92327]"
            >
              <div className="flex justify-between">
                <Users size={28} className="text-[#D92327]" />
                <span className="text-sm font-bold text-neutral-400">
                  0{index + 1}
                </span>
              </div>

              <h2 className="mt-12 text-xl font-extrabold">
                {role}
              </h2>

              <p className="mt-4 text-sm leading-7 text-neutral-500">
                Discover the people and responsibilities
                that make our community grow.
              </p>

              <ArrowUpRight
                size={20}
                className="mt-7 text-[#D92327]"
              />
            </article>
          ))}

        </div>
      </section>

      <JoinCTA />
    </>
  );
}
