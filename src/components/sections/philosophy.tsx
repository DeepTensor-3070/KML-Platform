
import { ArrowUpRight } from "lucide-react";

const values = [
  {
    number: "01",
    title: "Create.",
    description: "Transform ideas into practical projects and innovative solutions.",
  },
  {
    number: "02",
    title: "Learn.",
    description: "Develop skills through workshops, research and collaboration.",
  },
  {
    number: "03",
    title: "Evolve.",
    description: "Grow together by exploring emerging technologies.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">

        <p className="text-xs font-extrabold tracking-[0.3em] text-[#D92327]">
          THE KRIVA PHILOSOPHY
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Ideas become innovation when{" "}
            <span className="text-[#D92327]">
              curiosity meets action.
            </span>
          </h2>

          <div>
            <p className="text-lg leading-9 text-neutral-500">
              KRIVA brings together curious minds who believe in
              learning by building, exploring new technologies and
              creating meaningful solutions.
            </p>

            <p className="mt-5 text-lg leading-9 text-neutral-500">
              We encourage experimentation, collaboration and
              continuous growth across Artificial Intelligence
              and Machine Learning.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.number}
              className="group rounded-2xl border border-neutral-200 p-8 transition duration-300 hover:-translate-y-2 hover:border-[#D92327]"
            >
              <p className="text-sm font-bold text-[#D92327]">
                {item.number}
              </p>

              <h3 className="mt-10 text-3xl font-extrabold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-500">
                {item.description}
              </p>

              <ArrowUpRight
                size={20}
                className="mt-7 text-[#D92327]"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
