
import {
  Brain,
  Sparkles,
  Eye,
  Bot,
  Code2,
  Binary,
  ArrowUpRight,
} from "lucide-react";

import { domains } from "@/data/site";

const iconMap = {
  brain: Brain,
  code: Code2,
  binary: Binary,
  sparkles: Sparkles,
  eye: Eye,
  bot: Bot,
};

export default function Domains() {
  return (
    <section className="bg-[#FAFAF8] py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <p className="text-xs font-extrabold tracking-[0.3em] text-[#D92327]">
          AREAS OF EXPLORATION
        </p>

        <h2 className="mt-6 max-w-3xl text-4xl font-extrabold md:text-5xl">
          Exploring the technologies shaping tomorrow.
        </h2>

        <p className="mt-5 max-w-xl leading-8 text-neutral-500">
          Discover the fields where creativity, engineering
          and intelligence come together.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain) => {
            const Icon = iconMap[domain.icon as keyof typeof iconMap];

            return (
              <div
                key={domain.number}
                className="group rounded-2xl border border-neutral-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-[#D92327] hover:shadow-xl hover:shadow-neutral-200/50"
              >
                <div className="flex justify-between">
                  <span className="text-xs font-bold text-neutral-400">
                    {domain.number}
                  </span>
                  <Icon size={27} className="text-[#D92327]" />
                </div>

                <h3 className="mt-12 text-xl font-extrabold">
                  {domain.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-500">
                  {domain.description}
                </p>

                <ArrowUpRight
                  size={20}
                  className="mt-8 text-neutral-400 transition group-hover:text-[#D92327]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
