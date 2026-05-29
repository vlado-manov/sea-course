import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, CheckCircle2, XCircle, ChevronRight, ArrowLeft } from "lucide-react";
import { tools, toolCategoryLabels, pricingLabels, pricingColors } from "@/lib/content/tools";
import { tutorials } from "@/lib/content/tutorials";
import { TutorialCard } from "@/components/tutorial/TutorialCard";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

interface ToolPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return tools.flatMap((t) =>
    ["bg", "en"].map((locale) => ({ locale, slug: t.slug }))
  );
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return {};
  return {
    title: `${tool.name} — ${locale === "bg" ? "Пълно ръководство" : "Complete Guide"}`,
    description: tool.description[locale as "bg" | "en"],
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { locale, slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) notFound();
  const isBg = locale === "bg";

  const relatedTutorials = tutorials
    .filter((t) =>
      t.tags.some((tag) =>
        tool.tags.some(
          (tt) => tt.toLowerCase() === tag.toLowerCase()
        )
      )
    )
    .slice(0, 3);

  return (
    <div className="page-transition">
      {/* Breadcrumb */}
      <div className="border-b border-border/40 bg-muted/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link href={`/${locale}`} className="hover:text-foreground">{isBg ? "Начало" : "Home"}</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href={`/${locale}/tools`} className="hover:text-foreground">{isBg ? "Инструменти" : "Tools"}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{tool.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="flex items-start gap-6">
              <div className="text-5xl w-16 h-16 rounded-2xl border border-border bg-muted/30 flex items-center justify-center shrink-0">
                {tool.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={cn("text-xs font-bold px-2.5 py-1 rounded-full", pricingColors[tool.pricing])}>
                    {pricingLabels[locale as "bg" | "en"][tool.pricing].toUpperCase()}
                  </span>
                  <span className="text-xs font-medium bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
                    {toolCategoryLabels[locale as "bg" | "en"][tool.category]}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{tool.name}</h1>
                <p className="text-muted-foreground mt-1">{tool.tagline[locale as "bg" | "en"]}</p>
              </div>
            </div>

            {/* Description */}
            <div className="rounded-2xl border border-border bg-muted/20 p-6">
              <h2 className="font-semibold text-foreground mb-3">
                {isBg ? "За инструмента" : "About the tool"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {tool.description[locale as "bg" | "en"]}
              </p>
            </div>

            {/* Use cases */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-semibold text-foreground mb-4">
                {isBg ? "Основни случаи на употреба" : "Main Use Cases"}
              </h2>
              <ul className="space-y-3">
                {tool.useCases.map((uc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{uc[locale as "bg" | "en"]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-5">
                <h3 className="font-semibold text-teal-500 mb-3">
                  {isBg ? "Предимства" : "Pros"}
                </h3>
                <ul className="space-y-2">
                  {tool.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{pro[locale as "bg" | "en"]}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-5">
                <h3 className="font-semibold text-rose-500 mb-3">
                  {isBg ? "Недостатъци" : "Cons"}
                </h3>
                <ul className="space-y-2">
                  {tool.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-rose-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{con[locale as "bg" | "en"]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tool.tags.map((tag) => (
                <span key={tag} className="text-xs bg-muted/60 text-muted-foreground px-3 py-1.5 rounded-full border border-border/40">
                  {tag}
                </span>
              ))}
            </div>

            {/* Related tutorials */}
            {relatedTutorials.length > 0 && (
              <div>
                <h2 className="font-semibold text-foreground mb-5">
                  {isBg ? "Свързани уроци" : "Related Tutorials"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {relatedTutorials.map((t, i) => (
                    <TutorialCard key={t.slug} tutorial={t} locale={locale} index={i} />
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-border/40">
              <Link
                href={`/${locale}/tools`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                <ArrowLeft className="h-4 w-4" />
                {isBg ? "Обратно към инструментите" : "Back to tools"}
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Quick links */}
            <div className="rounded-2xl border border-border bg-card p-5 sticky top-24">
              <h3 className="font-semibold text-foreground mb-4">
                {isBg ? "Бързи връзки" : "Quick Links"}
              </h3>
              <div className="space-y-3">
                <a
                  href={tool.official}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 p-3 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors group"
                >
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {isBg ? "Официален сайт" : "Official Website"}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate max-w-[160px]">
                      {tool.official.replace("https://", "")}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-primary shrink-0" />
                </a>

                {tool.docs && (
                  <a
                    href={tool.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 p-3 rounded-xl border border-border hover:border-border/80 hover:bg-muted/30 transition-colors group"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {isBg ? "Документация" : "Documentation"}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 truncate max-w-[160px]">
                        {tool.docs.replace("https://", "")}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
                  </a>
                )}
              </div>

              {/* Pricing badge */}
              <div className="mt-5 pt-5 border-t border-border/40">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  {isBg ? "Цена" : "Pricing"}
                </p>
                <span className={cn("inline-flex text-sm font-bold px-3 py-1.5 rounded-xl", pricingColors[tool.pricing])}>
                  {pricingLabels[locale as "bg" | "en"][tool.pricing]}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
