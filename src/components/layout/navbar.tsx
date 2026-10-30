
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[82px] max-w-[1320px] items-center justify-between px-6 lg:px-10">

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/kml-logo.png"
            alt="KRIVA Logo"
            width={64}
            height={64}
            priority
            className="h-14 w-14 object-contain"
          />
          <div>
            <p className="text-xl font-extrabold tracking-tight">
              KRIVA<span className="text-[#D92327]">.</span>
            </p>
            <p className="text-[9px] font-bold tracking-[0.25em] text-neutral-500">
              ML SOCIETY
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-neutral-600 transition hover:text-[#D92327]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/join"
          className="hidden items-center gap-2 rounded-full bg-[#D92327] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#B91C22] md:flex"
        >
          Join KML
          <ArrowUpRight size={16} />
        </Link>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-lg border p-2 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t bg-white p-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-semibold text-neutral-700"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/join"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[#D92327] px-5 py-3 text-center font-bold text-white"
            >
              Join KML
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
