import BaseLayout from "@/components/layout/base-layout";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Schedules | Kuru Kuru",
  description: "Schedules Page Kuru Kuru. Build by Lann Zephry",
};

export default function SchedulesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BaseLayout>{children}</BaseLayout>;
}