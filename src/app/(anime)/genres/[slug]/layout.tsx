import { Metadata } from "next/types";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const formattedTitle = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${formattedTitle} Anime | Kuru Kuru`,
    description: `Anime Genre Page for ${formattedTitle} | Kuru Kuru. Build by Lann Zephry`,
  };
}

export default function GenreSlugLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
