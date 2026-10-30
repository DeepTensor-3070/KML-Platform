
"use client";

import dynamic from "next/dynamic";

const NeuralNetwork = dynamic(
  () => import("./neural-network"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center">
        <div className="h-3 w-3 animate-pulse rounded-full bg-[#D92327]" />
      </div>
    ),
  }
);

export default function NeuralNetworkLoader() {
  return <NeuralNetwork />;
}
