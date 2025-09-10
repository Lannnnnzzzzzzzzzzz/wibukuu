import BaseLayout from "@/components/layout/base-layout";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Genres | Kuru Kuru",
  description: "Genres Page Kuru Kuru. Build by Lann Zephry",
};

export default function GenreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <BaseLayout>{children}</BaseLayout>;
}
