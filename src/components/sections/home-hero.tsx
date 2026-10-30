
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import NeuralNetworkLoader from "./neural-network-loader";

export default function HomeHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative bg-[#FAFAF8]">
      <div className="relative mx-auto grid min-h-[720px] max-w-[1320px] items-center gap-8 px-6 py-20 lg:grid-cols-2 lg:px-10">

        {/* LEFT: HERO CONTENT */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-bold text-[#D92327]">
            <Sparkles size={14} />
            KRIVA · MACHINE LEARNING SOCIETY
          </div>

          <h1 className="text-6xl font-extrabold leading-[1.08] tracking-tight text-[#171717] sm:text-7xl lg:text-[86px]">
            Create.
            <br />
            Learn.
            <br />
            <span className="text-[#D92327]">Evolve.</span>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-8 text-neutral-500 md:text-lg">
            A community of innovators, developers and researchers
            exploring the possibilities of Artificial Intelligence
            and Machine Learning.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-full bg-[#D92327] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#B91C22]"
            >
              Explore KRIVA
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/events"
              className="rounded-full border border-neutral-300 bg-white px-7 py-4 font-bold text-neutral-800 transition hover:border-[#D92327] hover:text-[#D92327]"
            >
              Explore Events
            </Link>
          </div>

          <p className="mt-12 text-sm font-semibold tracking-wide text-neutral-400">
            CREATE · LEARN · EVOLVE
          </p>
        </motion.div>

        {/* RIGHT: KRIVA NEURAL EMBLEM */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative isolate mx-auto flex h-[440px] w-full max-w-[560px] items-center justify-center overflow-visible md:h-[560px]"
        >
          {/* Background rings */}
          <div className="pointer-events-none absolute z-0 h-[350px] w-[350px] rounded-full border border-red-200 md:h-[470px] md:w-[470px]" />

          <div className="pointer-events-none absolute z-0 h-[275px] w-[275px] rounded-full border border-dashed border-neutral-300 md:h-[375px] md:w-[375px]" />

          {/* 3D Canvas */}
          <div className="pointer-events-auto absolute inset-0 z-10">
            <NeuralNetworkLoader />
          </div>

          {/* Intelligence card */}
          <div className="pointer-events-none absolute left-0 top-16 z-30 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-xl">
            <p className="text-[10px] font-bold tracking-widest text-neutral-400">
              INTELLIGENCE
            </p>

            <p className="whitespace-nowrap text-sm font-bold text-neutral-900">
              Connected Ideas
            </p>
          </div>

          {/* Innovation card */}
          <div className="pointer-events-none absolute bottom-5 right-0 z-30 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-xl">
            <p className="text-[10px] font-bold tracking-widest text-[#D92327]">
              INNOVATION
            </p>

            <p className="whitespace-nowrap text-sm font-bold text-neutral-900">
              Beyond Possibilities
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
