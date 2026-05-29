import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { CoursePaths } from "@/components/home/CoursePaths";
import { CTASection } from "@/components/home/CTASection";
import type { Metadata } from "next";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("siteTitle"),
    description: t("siteDescription"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `/${locale}`,
      type: "website",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: { bg: "/bg", en: "/en" },
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  return (
    <div className="page-transition">
      <Hero locale={locale} />
      <Features locale={locale} />
      <CoursePaths locale={locale} />
      <CTASection locale={locale} />
    </div>
  );
}
