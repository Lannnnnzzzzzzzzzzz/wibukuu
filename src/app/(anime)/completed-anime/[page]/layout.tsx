import BaseLayout from "@/components/layout/base-layout";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Completed Anime | Kuru Kuru",
  description: "Completed Anime Page Kuru Kuru. Build by Lann Zephry",
};

export default function CompletedAnimeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <BaseLayout>{children}</BaseLayout>;
}
