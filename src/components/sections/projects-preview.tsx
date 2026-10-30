
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import { featuredProjects } from "@/data/site";

export default function ProjectsPreview() {
  return (
    <section className="bg-[#FAFAF8] py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">

        <p className="text-xs font-extrabold tracking-[0.3em] text-[#D92327]">
          BUILT BY THE COMMUNITY
        </p>

        <div className="mt-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
            Ideas engineered into reality.
          </h2>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#D92327]"
          >
            Explore Projects <ArrowUpRight size={17} />
          </Link>
        </div>

        {featuredProjects.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-neutral-200 bg-white p-16 text-center">
            <Code2 size={38} className="mx-auto text-[#D92327]" />

            <h3 className="mt-5 text-xl font-bold">
              The next big idea starts here.
            </h3>

            <p className="mt-3 text-sm text-neutral-500">
              Community projects will be showcased here.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-neutral-200 bg-white p-7"
              >
                <p className="text-xs font-bold text-[#D92327]">
                  {project.category}
                </p>
                <h3 className="mt-4 text-xl font-extrabold">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-neutral-100 px-3 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#D92327]"
                  >
                    GitHub <ArrowUpRight size={15} />
                  </a>
                )}
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
