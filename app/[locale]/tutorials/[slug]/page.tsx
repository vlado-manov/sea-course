import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import {
  Clock, Calendar, ArrowLeft, ArrowRight, ExternalLink,
  BookOpen, Share2, Bookmark, ChevronRight, Lightbulb,
  CheckCircle2, Map,
} from "lucide-react";
import { tutorials, difficultyLabels, difficultyColors, categoryLabels } from "@/lib/content/tutorials";
import { tutorialContents } from "@/lib/content/tutorialContent";
import { TableOfContents } from "@/components/tutorial/TableOfContents";
import { ReadingProgress } from "@/components/tutorial/ReadingProgress";
import { TutorialCard } from "@/components/tutorial/TutorialCard";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schemas";
import { SITE_URL } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

interface TutorialPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return tutorials.flatMap((t) =>
    ["bg", "en"].map((locale) => ({ locale, slug: t.slug }))
  );
}

export async function generateMetadata({ params }: TutorialPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const tutorial = tutorials.find((t) => t.slug === slug);
  if (!tutorial) return {};

  return {
    title: tutorial.title[locale as "bg" | "en"],
    description: tutorial.description[locale as "bg" | "en"],
    openGraph: {
      title: tutorial.title[locale as "bg" | "en"],
      description: tutorial.description[locale as "bg" | "en"],
      type: "article",
      publishedTime: tutorial.publishedAt,
      modifiedTime: tutorial.updatedAt,
      tags: tutorial.tags,
    },
    alternates: {
      canonical: `/${locale}/tutorials/${slug}`,
    },
  };
}

export default async function TutorialPage({ params }: TutorialPageProps) {
  const { locale, slug } = await params;
  const tutorial = tutorials.find((t) => t.slug === slug);
  if (!tutorial) notFound();

  const content = tutorialContents[slug];
  const isBg = locale === "bg";

  const diffLabel = difficultyLabels[locale as "bg" | "en"][tutorial.difficulty];
  const diffColor = difficultyColors[tutorial.difficulty];
  const catLabel = categoryLabels[locale as "bg" | "en"][tutorial.category];

  const related = tutorial.relatedSlugs
    ? tutorials.filter((t) => tutorial.relatedSlugs?.includes(t.slug)).slice(0, 3)
    : tutorials.filter((t) => t.category === tutorial.category && t.slug !== slug).slice(0, 3);

  const toc = content?.toc || [];

  const articleJson = articleSchema({
    title: tutorial.title[locale as "bg" | "en"],
    description: tutorial.description[locale as "bg" | "en"],
    url: `${SITE_URL}/${locale}/tutorials/${slug}`,
    datePublished: tutorial.publishedAt,
    dateModified: tutorial.updatedAt,
  });

  const breadcrumbJson = breadcrumbSchema([
    { name: isBg ? "Начало" : "Home", url: `${SITE_URL}/${locale}` },
    { name: isBg ? "Уроци" : "Tutorials", url: `${SITE_URL}/${locale}/tutorials` },
    { name: tutorial.title[locale as "bg" | "en"], url: `${SITE_URL}/${locale}/tutorials/${slug}` },
  ]);

  const faqJson = content?.faq
    ? faqSchema(
        content.faq.map((f) => ({
          question: f.question[locale as "bg" | "en"],
          answer: f.answer[locale as "bg" | "en"],
        }))
      )
    : null;

  return (
    <>
      <ReadingProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} />
      {faqJson && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />}

      <div className="page-transition">
        {/* Breadcrumb */}
        <div className="border-b border-border/40 bg-muted/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Link href={`/${locale}`} className="hover:text-foreground transition-colors">
                {isBg ? "Начало" : "Home"}
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link href={`/${locale}/tutorials`} className="hover:text-foreground transition-colors">
                {isBg ? "Уроци" : "Tutorials"}
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground font-medium truncate max-w-xs">
                {tutorial.title[locale as "bg" | "en"]}
              </span>
            </nav>
          </div>
        </div>

        {/* Article header */}
        <div className="border-b border-border/40 py-10 sm:py-16 bg-gradient-to-b from-muted/20 to-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Meta badges */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full", diffColor)}>
                  {diffLabel}
                </span>
                <span className="text-xs font-medium bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
                  {catLabel}
                </span>
                {tutorial.new && (
                  <span className="text-xs font-bold bg-teal-500/15 text-teal-500 px-2.5 py-1 rounded-full">
                    {isBg ? "НОВО" : "NEW"}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                {tutorial.title[locale as "bg" | "en"]}
              </h1>

              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {tutorial.description[locale as "bg" | "en"]}
              </p>

              {/* Meta info */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {tutorial.readTime} {isBg ? "минути четене" : "min read"}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {tutorial.updatedAt
                    ? (isBg ? "Актуализирано: " : "Updated: ") + tutorial.updatedAt
                    : tutorial.publishedAt}
                </span>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {tutorial.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-muted/60 text-muted-foreground px-2.5 py-1 rounded-full border border-border/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main content layout */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

          {/* Learning header: station + mental model + analogy */}
          {tutorial.learningMeta && (
            <div className="mb-10 max-w-3xl">
              {tutorial.learningMeta.stationNumber && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <Map className="h-3 w-3" />
                    {isBg
                      ? `Станция ${tutorial.learningMeta.stationNumber} от 5`
                      : `Station ${tutorial.learningMeta.stationNumber} of 5`}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {isBg ? "от учебния маршрут" : "of the learning path"}
                  </span>
                </div>
              )}
              <div className="rounded-xl border border-border bg-muted/20 p-4 mb-4">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                  {isBg ? "Ментален модел, който ще изградиш" : "Mental model you'll build"}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {tutorial.learningMeta.mentalModel[locale as "bg" | "en"]}
                </p>
              </div>
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-amber-500 uppercase tracking-wider mb-1.5">
                      {isBg ? "Ключова аналогия" : "Key analogy"}
                    </p>
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      {tutorial.learningMeta.keyAnalogy[locale as "bg" | "en"]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-10">
            {/* Article content */}
            <article className="flex-1 min-w-0">
              {content ? (
                <>
                  <ClientProseContent
                    content={content.content[locale as "bg" | "en"]}
                  />

                  {/* FAQ Section */}
                  {content.faq && content.faq.length > 0 && (
                    <div className="mt-12 rounded-2xl border border-border bg-muted/20 p-6 sm:p-8">
                      <h2 className="text-xl font-bold mb-6">
                        {isBg ? "Често задавани въпроси" : "Frequently Asked Questions"}
                      </h2>
                      <div className="space-y-6">
                        {content.faq.map((item, i) => (
                          <div key={i} className="border-b border-border/40 pb-6 last:border-0 last:pb-0">
                            <h3 className="font-semibold text-foreground mb-2">
                              {item.question[locale as "bg" | "en"]}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {item.answer[locale as "bg" | "en"]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Official links */}
                  {content.officialLinks && content.officialLinks.length > 0 && (
                    <div className="mt-8 rounded-2xl border border-teal-500/20 bg-teal-500/5 p-6">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-teal-500" />
                        {isBg ? "Официални ресурси" : "Official Resources"}
                      </h3>
                      <div className="space-y-3">
                        {content.officialLinks.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 group"
                          >
                            <ExternalLink className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                {link.label}
                              </p>
                              {link.desc && (
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  {link.desc[locale as "bg" | "en"]}
                                </p>
                              )}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="py-16 text-center text-muted-foreground">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-30" />
                  <p>{isBg ? "Съдържанието скоро ще бъде публикувано." : "Content coming soon."}</p>
                </div>
              )}

              {/* Understanding check */}
              {tutorial.learningMeta?.understandingCheck && (
                <div className="mt-12 rounded-2xl border border-border bg-muted/20 p-6 sm:p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h2 className="text-lg font-bold text-foreground">
                        {isBg ? "Провери разбирането си" : "Check your understanding"}
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        {isBg
                          ? "Преди да продължиш към следващата станция — отговори мислено на тези въпроси."
                          : "Before moving to the next station — answer these questions mentally."}
                      </p>
                    </div>
                  </div>
                  <ol className="space-y-3">
                    {tutorial.learningMeta.understandingCheck[locale as "bg" | "en"].map((q, i) => (
                      <li key={i} className="flex items-start gap-3 rounded-xl bg-card border border-border/60 p-4">
                        <span className="font-bold text-primary shrink-0 text-sm">{i + 1}.</span>
                        <p className="text-sm text-foreground leading-relaxed">{q}</p>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-4 text-xs text-muted-foreground text-center">
                    {isBg
                      ? "Ако не можеш да отговориш на някой въпрос — върни се и прочети съответната секция отново."
                      : "If you can't answer a question — go back and re-read the relevant section."}
                  </p>
                </div>
              )}

              {/* Next station */}
              {tutorial.learningMeta?.nextSlug && (() => {
                const nextTutorial = tutorials.find((t) => t.slug === tutorial.learningMeta!.nextSlug);
                return nextTutorial ? (
                  <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-6">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                      {isBg
                        ? `Следваща станция: ${tutorial.learningMeta.stationNumber ? tutorial.learningMeta.stationNumber + 1 : ""} от 5`
                        : `Next station: ${tutorial.learningMeta.stationNumber ? tutorial.learningMeta.stationNumber + 1 : ""} of 5`}
                    </p>
                    <Link
                      href={`/${locale}/tutorials/${nextTutorial.slug}`}
                      className="group flex items-center justify-between rounded-xl bg-card border border-border p-4 hover:border-primary/40 hover:shadow-md transition-all"
                    >
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {nextTutorial.title[locale as "bg" | "en"]}
                        </p>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {nextTutorial.description[locale as "bg" | "en"]}
                        </p>
                        {nextTutorial.learningMeta?.mentalModel && (
                          <p className="text-xs text-primary mt-2">
                            {isBg ? "Ментален модел: " : "Mental model: "}
                            {nextTutorial.learningMeta.mentalModel[locale as "bg" | "en"]}
                          </p>
                        )}
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 ml-4" />
                    </Link>
                  </div>
                ) : null;
              })()}

              {/* Related tutorials (only for non-learning-path tutorials) */}
              {!tutorial.learningMeta && related.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-xl font-bold mb-6">
                    {isBg ? "Свързани уроци" : "Related Tutorials"}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {related.map((t, i) => (
                      <TutorialCard key={t.slug} tutorial={t} locale={locale} index={i} />
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="mt-10 pt-6 border-t border-border/40 flex items-center justify-between">
                <Link
                  href={`/${locale}/tutorials`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {isBg ? "Обратно към уроците" : "Back to tutorials"}
                </Link>
              </div>
            </article>

            {/* Sidebar ToC */}
            {toc.length > 0 && (
              <aside className="hidden xl:block w-60 shrink-0">
                <TableOfContents
                  items={toc.map((item) => ({
                    ...item,
                    text: isBg ? item.text : item.text,
                  }))}
                  locale={locale}
                />
              </aside>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// Client component wrapper for ProseContent (needs dynamic import for SSR)
import { ProseContent as ProseContentComp } from "@/components/tutorial/ProseContent";

function ClientProseContent({ content }: { content: string }) {
  return <ProseContentComp content={content} />;
}
