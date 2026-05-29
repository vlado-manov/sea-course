import { getTranslations } from "next-intl/server";
import { tutorials } from "@/lib/content/tutorials";
import { TutorialFilters } from "@/components/tutorial/TutorialFilters";
import { Sparkles } from "lucide-react";
import type { Metadata } from "next";

interface TutorialsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: TutorialsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isBg = locale === "bg";
  return {
    title: isBg ? "Всички уроци по AI SEO, GEO и Structured Data" : "All AI SEO, GEO and Structured Data Tutorials",
    description: isBg
      ? "Над 50 подробни урока за AI SEO, GEO оптимизация, Google AI Overviews, Merchant Center и Structured Data."
      : "50+ in-depth tutorials on AI SEO, GEO optimization, Google AI Overviews, Merchant Center, and Structured Data.",
  };
}

export default async function TutorialsPage({ params }: TutorialsPageProps) {
  const { locale } = await params;
  const isBg = locale === "bg";

  const featured = tutorials.filter((t) => t.featured);

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-16 pb-12 border-b border-border/60">
        <div className="absolute inset-0 grid-background opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span>/</span>
            <span>{isBg ? "Уроци" : "Tutorials"}</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
              <Sparkles className="h-3 w-3" />
              {tutorials.length}+ {isBg ? "урока" : "tutorials"}
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            {isBg ? "Всички уроци" : "All Tutorials"}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {isBg
              ? "Пълни уроци за AI SEO, GEO, Structured Data, AI Commerce и всичко, което трябва да знаеш за AI оптимизацията."
              : "Complete tutorials on AI SEO, GEO, Structured Data, AI Commerce, and everything you need to know about AI optimization."}
          </p>
        </div>
      </section>

      {/* Featured tutorials */}
      {featured.length > 0 && (
        <section className="py-12 border-b border-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2 text-foreground">
              <Sparkles className="h-4 w-4 text-amber-500" />
              {isBg ? "Препоръчани уроци" : "Featured tutorials"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {featured.map((t, i) => (
                <a
                  key={t.slug}
                  href={`/${locale}/tutorials/${t.slug}`}
                  className="group rounded-xl border border-border bg-gradient-to-br from-muted/30 to-muted/10 p-4 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      {isBg ? "Препоръчан" : "Featured"}
                    </span>
                    {t.new && (
                      <span className="text-[10px] font-bold bg-teal-500/10 text-teal-500 px-1.5 py-0.5 rounded-full">
                        {isBg ? "НОВО" : "NEW"}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors mt-2 line-clamp-2">
                    {t.title[locale as "bg" | "en"]}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {t.description[locale as "bg" | "en"]}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TutorialFilters tutorials={tutorials} locale={locale} />
        </div>
      </section>
    </div>
  );
}
