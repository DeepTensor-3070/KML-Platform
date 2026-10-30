import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KML | Kriva Machine Learning Society",
  description:
    "Create, Learn, Evolve. Explore AI, machine learning and innovation with KML.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
