
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-[#FAFAF8]">
        
        {/* Decorative background */}
        <div className="pointer-events-none absolute right-[-10%] top-10 h-[500px] w-[500px] rounded-full bg-red-100/50 blur-[120px]" />

        <div className="container-main relative grid items-center gap-12 py-20 lg:grid-cols-2">

          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-bold tracking-wide text-brand">
              <Sparkles size={14} />
              KRIVA · MACHINE LEARNING SOCIETY
            </div>

            <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.08] tracking-tight text-[#171717] md:text-7xl">
              Create.
              <br />
              Learn.
              <br />
              <span className="text-brand">Evolve.</span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-neutral-500 md:text-lg">
              A community of innovators, developers and researchers
              exploring the possibilities of Artificial Intelligence
              and Machine Learning.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-full bg-[#D92327] px-7 py-4 font-bold text-white transition hover:bg-[#B91C22]"
              >
                Explore KRIVA
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/events"
                className="rounded-full border border-neutral-300 bg-white px-7 py-4 font-bold text-neutral-800 transition hover:border-black"
              >
                Explore Events
              </Link>
            </div>
          </div>

          {/* Brand visual */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-[350px] w-[350px] rounded-full border border-red-200 md:h-[450px] md:w-[450px]" />

            <div className="absolute h-[280px] w-[280px] rounded-full border border-dashed border-neutral-300 md:h-[370px] md:w-[370px]" />

            <div className="animate-float relative z-10 rounded-3xl border border-neutral-200 bg-white p-5 shadow-2xl shadow-neutral-300/40 md:p-8">
              <Image
                src="/brand/kml-logo.png"
                alt="KRIVA Machine Learning Society official logo"
                width={440}
                height={440}
                priority
                className="h-auto w-[240px] object-contain md:w-[330px]"
              />
            </div>

            <div className="absolute right-0 top-10 h-5 w-5 rounded-full bg-brand shadow-lg shadow-red-500/40" />
            <div className="absolute bottom-10 left-0 h-3 w-3 rounded-full bg-neutral-900" />
          </div>
        </div>
      </section>

      <section className="container-main py-20">
        <p className="text-sm font-bold tracking-[0.3em] text-brand">
          THE KRIVA PHILOSOPHY
        </p>

        <h2 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
          Building a community that turns ideas into innovation.
        </h2>
      </section>
    </main>
  );
}
