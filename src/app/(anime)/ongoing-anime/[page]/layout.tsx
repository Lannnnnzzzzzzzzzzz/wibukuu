import BaseLayout from "@/components/layout/base-layout";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "On Going Anime | Kuru Kuru",
  description: "Ongoing Anime Page Kuru Kuru. Build by Lann Zephry",
};

export default function OngoingAnimeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <BaseLayout>{children}</BaseLayout>;
}
