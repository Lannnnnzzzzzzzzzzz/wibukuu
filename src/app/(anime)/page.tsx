import BaseLayout from "@/components/layout/base-layout";
import HomeLayout from "@/app/(anime)/_components/home-layout";
import GreetingLayout from "@/app/(anime)/_components/greeting-layout";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Home | Kuru Kuru",
  description: "Home Page Kuru Kuru. Build by Lann Zephry",
};

export default function Home() {
  return (
    <BaseLayout>
      <GreetingLayout />
      <HomeLayout />
    </BaseLayout>
  );
}
