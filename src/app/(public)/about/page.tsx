
import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Philosophy from "@/components/sections/philosophy";
import Domains from "@/components/sections/domains";
import JoinCTA from "@/components/sections/join-cta";

export const metadata: Metadata = {
  title: "About KRIVA",
  description: "Discover the vision and philosophy of KRIVA.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="ABOUT KRIVA"
        title="A community driven by curiosity and innovation."
        description="Kriva - Machine Learning Society brings together passionate minds to explore, learn and build with emerging technologies."
      />

      <Philosophy />
      <Domains />
      <JoinCTA />
    </>
  );
}
