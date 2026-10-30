
import type { Metadata } from "next";
import Link from "next/link";
import { Users, Lightbulb, Code2, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Join KML",
  description: "Become a part of the KRIVA community.",
};

const benefits = [
  {
    icon: Users,
    title: "Community",
    description: "Connect with people who share your curiosity.",
  },
  {
    icon: Lightbulb,
    title: "Learning",
    description: "Explore technologies through practical experiences.",
  },
  {
    icon: Code2,
    title: "Building",
    description: "Collaborate on projects and innovative ideas.",
  },
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        label="JOIN THE COMMUNITY"
        title="Your journey of innovation starts here."
        description="Be part of a community that believes in creating, learning and evolving together."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border p-8">
                <Icon size={30} className="text-[#D92327]" />

                <h2 className="mt-8 text-xl font-bold">
                  {title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  {description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-[#171717] p-10 text-center text-white md:p-16">
            <h2 className="text-3xl font-extrabold md:text-5xl">
              Ready to create something meaningful?
            </h2>

            <p className="mt-5 text-sm leading-7 text-neutral-400">
              Recruitment and membership applications will
              be published through the official KML portal.
            </p>

            <Link
              href="/register"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D92327] px-7 py-4 font-bold text-white"
            >
              Create Account <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
