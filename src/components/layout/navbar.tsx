
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Events", href: "/events" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <nav className="container-main flex h-20 items-center justify-between">

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/kml-logo.png"
            alt="KRIVA ML Society"
            width={100}
            height={100}
            priority
            className="h-[68px] w-[68px] object-contain"
          />
          <div className="leading-tight">
            <span className="block text-xl font-extrabold tracking-tight">
              KRIVA<span className="text-brand">.</span>
            </span>
            <span className="text-[9px] font-semibold tracking-[0.28em] text-neutral-500">
              ML SOCIETY
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-neutral-600 transition-colors hover:text-brand"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/join"
            className="inline-flex items-center gap-2 rounded-full bg-[#D92327] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#B91C22] hover:shadow-lg hover:shadow-red-500/20"
          >
            Join KML
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-neutral-200 p-2 md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-neutral-100 bg-white p-5 md:hidden">
          <div className="container-main flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-neutral-700 hover:text-brand"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/join"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-brand px-5 py-3 text-center font-semibold text-white"
            >
              Join KML
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
