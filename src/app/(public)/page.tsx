
import type { Metadata } from "next";

import HomeHero from "@/components/sections/home-hero";
import Philosophy from "@/components/sections/philosophy";
import Domains from "@/components/sections/domains";
import EventsPreview from "@/components/sections/events-preview";
import ProjectsPreview from "@/components/sections/projects-preview";
import JoinCTA from "@/components/sections/join-cta";

export const metadata: Metadata = {
  title: "Home",
  description:
    "KRIVA - The Machine Learning Society. Create. Learn. Evolve.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Philosophy />
      <Domains />
      <EventsPreview />
      <ProjectsPreview />
      <JoinCTA />
    </>
  );
}
