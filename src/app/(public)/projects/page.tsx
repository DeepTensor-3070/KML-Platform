
import type { Metadata } from "next";
import Link from "next/link";
import { Code2 } from "lucide-react";
import PageHero from "@/components/ui/page-hero";
import JoinCTA from "@/components/sections/join-cta";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore projects developed by the KRIVA community.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="PROJECT SHOWCASE"
        title="From imagination to implementation."
        description="Explore technical experiments, collaborative projects and innovative solutions developed by the KRIVA community."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">

          <div className="rounded-3xl border border-neutral-200 bg-[#FAFAF8] px-6 py-20 text-center">

            <Code2
              size={42}
              className="mx-auto text-[#D92327]"
            />

            <h2 className="mt-6 text-2xl font-extrabold">
              Projects are coming soon.
            </h2>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-neutral-500">
              Discover the work, technologies and contributors
              behind community innovations.
            </p>

            <Link
              href="/join"
              className="mt-8 inline-flex rounded-full bg-[#D92327] px-6 py-3 text-sm font-bold text-white"
            >
              Build With Us
            </Link>

          </div>
        </div>
      </section>

      <JoinCTA />
    </>
  );
}
