
import Link from "next/link";
import Image from "next/image";
import {
  Camera,
  BriefcaseBusiness,
  Code2,
  ArrowUpRight,
} from "lucide-react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Team", "/team"],
  ["Events", "/events"],
  ["Projects", "/projects"],
];

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div className="lg:col-span-2">
            <Image
              src="/brand/kml-logo.png"
              alt="KRIVA ML Society"
              width={130}
              height={130}
              className="h-24 w-24 rounded-xl bg-white object-contain"
            />

            <h2 className="mt-6 text-3xl font-extrabold">
              Create. Learn. <span className="text-[#D92327]">Evolve.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-neutral-400">
              A community of innovators exploring Artificial Intelligence,
              Machine Learning and emerging technologies.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Explore</h3>
            <div className="mt-6 flex flex-col gap-4">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-neutral-400 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold">Connect with us</h3>

            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Instagram"
                className="rounded-full border border-neutral-700 p-3 hover:bg-[#D92327]">
                <Camera size={18} />
              </a>
              <a href="#" aria-label="LinkedIn"
                className="rounded-full border border-neutral-700 p-3 hover:bg-[#D92327]">
                <BriefcaseBusiness size={18} />

              </a>
              <a href="#" aria-label="GitHub"
                className="rounded-full border border-neutral-700 p-3 hover:bg-[#D92327]">
                <Code2 size={18} />
              </a>
            </div>

            <Link
              href="/join"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#F04449]"
            >
              Join KML <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-neutral-800 pt-7 text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} KRIVA - ML Society.</p>
          <p>CREATE • LEARN • EVOLVE</p>
        </div>
      </div>
    </footer>
  );
}
