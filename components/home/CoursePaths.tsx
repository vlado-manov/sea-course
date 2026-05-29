"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface CoursePathsProps {
  locale: string;
}

const stations = [
  {
    number: 1,
    slug: "ai-seo-basics",
    bgColor: "bg-indigo-500",
    borderColor: "border-indigo-500/30 hover:border-indigo-500/60",
    isStart: true,
    timeMin: 15,
  },
  {
    number: 2,
    slug: "llm-optimization",
    bgColor: "bg-teal-500",
    borderColor: "border-teal-500/30 hover:border-teal-500/60",
    timeMin: 20,
  },
  {
    number: 3,
    slug: "geo-optimization",
    bgColor: "bg-purple-500",
    borderColor: "border-purple-500/30 hover:border-purple-500/60",
    timeMin: 20,
  },
  {
    number: 4,
    slug: "entity-seo",
    bgColor: "bg-amber-500",
    borderColor: "border-amber-500/30 hover:border-amber-500/60",
    timeMin: 23,
  },
  {
    number: 5,
    slug: "ai-visibility-strategy",
    bgColor: "bg-rose-500",
    borderColor: "border-rose-500/30 hover:border-rose-500/60",
    timeMin: 25,
  },
];

const stationContent = {
  bg: [
    {
      question: "Защо AI промени търсенето завинаги?",
      understand: "Как AI търсачките работят фундаментално по-различно от класическото Google",
      mentalModel: "GPS vs Хартиена карта",
      remember: "40% от търсенията вече имат AI отговор без кликове към сайтове",
      analogy: "Преминаване от хартиена карта към GPS навигация",
    },
    {
      question: "Как AI системите избират кого да цитират?",
      understand: "Критериите, по които ChatGPT, Gemini и Perplexity избират и цитират източници",
      mentalModel: "Редакторът, който не спи",
      remember: "Авторитет + структура + факти — не ключови думи + обем",
      analogy: "Как журналист решава кого да цитира в статия",
    },
    {
      question: "Какво е GEO и как да стана видим в AI отговорите?",
      understand: "Generative Engine Optimization — оптимизация специфично за AI-генерирани отговори",
      mentalModel: "Консултантът в стаята",
      remember: "GEO е да станеш препоръчваният експерт, не просто видимият",
      analogy: "Разликата между да си в телефонния указател и да те препоръча приятел",
    },
    {
      question: "Какво е Entity SEO и как да изградя дигитален паспорт?",
      understand: "Как AI системите 'разпознават' и класифицират бизнеса — и как да помогнеш на процеса",
      mentalModel: "Дигитален паспорт за бизнеса",
      remember: "Без ясна дигитална идентичност — AI не те познава и не те препоръчва",
      analogy: "Разликата между безименен гост и спикер с бейдж, биография и препоръки",
    },
    {
      question: "Как да изградя цялостна AI Visibility стратегия?",
      understand: "Как да измериш AI видимостта, какво да приоритизираш и как да следиш напредъка",
      mentalModel: "Измеримо присъствие в AI",
      remember: "AI Visibility = авторитет + структура + дигитална идентичност, измерени заедно",
      analogy: "Разликата между да имаш GPS координати и да си маркиран на всяка карта",
    },
  ],
  en: [
    {
      question: "Why did AI change search forever?",
      understand: "How AI search engines work fundamentally differently from classic Google",
      mentalModel: "GPS vs Paper map",
      remember: "40% of searches now have AI answers with no clicks to websites",
      analogy: "The shift from a paper map to GPS navigation",
    },
    {
      question: "How do AI systems decide who to cite?",
      understand: "The criteria by which ChatGPT, Gemini, and Perplexity select and cite sources",
      mentalModel: "The editor who never sleeps",
      remember: "Authority + structure + facts — not keywords + volume",
      analogy: "How a journalist decides who to quote in an article",
    },
    {
      question: "What is GEO and how do I become visible in AI answers?",
      understand: "Generative Engine Optimization — optimization specifically for AI-generated answers",
      mentalModel: "The consultant in the room",
      remember: "GEO is becoming the recommended expert, not just the visible one",
      analogy: "The difference between being in the phone book and being recommended by a friend",
    },
    {
      question: "What is Entity SEO and how do I build a digital passport?",
      understand: "How AI systems 'recognize' and classify a business — and how to help the process",
      mentalModel: "Digital passport for your business",
      remember: "Without a clear digital identity — AI doesn't know you and won't recommend you",
      analogy: "The difference between an unnamed event guest and a speaker with a badge, bio, and references",
    },
    {
      question: "How do I build a complete AI Visibility strategy?",
      understand: "How to measure AI visibility, what to prioritize, and how to track progress",
      mentalModel: "Measurable AI presence",
      remember: "AI Visibility = authority + structure + digital identity, measured together",
      analogy: "The difference between having GPS coordinates and being marked on every map",
    },
  ],
};

export function CoursePaths({ locale }: CoursePathsProps) {
  const isBg = locale === "bg";
  const content = stationContent[locale as "bg" | "en"];

  return (
    <section className="py-24 bg-muted/20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {isBg ? "Учебният маршрут: 5 станции" : "The Learning Path: 5 Stations"}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            {isBg
              ? "Не 50 урока наведнъж. Пет стъпки — всяка изгражда следващата. Всяка станция добавя едно ново ниво към менталния модел."
              : "Not 50 lessons at once. Five steps — each builds the next. Each station adds one new level to your mental model."}
          </p>
        </motion.div>

        {/* Learning path */}
        <div className="relative">
          {/* Vertical connector */}
          <div className="absolute left-[23px] top-12 bottom-12 w-0.5 bg-gradient-to-b from-indigo-500/50 via-purple-500/40 to-rose-500/50 hidden sm:block" />

          <div className="space-y-4">
            {stations.map((station, i) => {
              const c = content[i];
              return (
                <motion.div
                  key={station.number}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    href={`/${locale}/tutorials/${station.slug}`}
                    className={cn(
                      "group flex items-start gap-5 rounded-2xl border bg-card p-5 sm:p-6",
                      "hover:shadow-lg hover:shadow-black/5 transition-all duration-300",
                      station.borderColor
                    )}
                  >
                    {/* Station number with start badge */}
                    <div className="relative shrink-0">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg text-white shrink-0",
                        station.bgColor
                      )}>
                        {station.number}
                      </div>
                      {station.isStart && (
                        <div className="absolute -top-2 -right-2 text-[9px] font-bold bg-teal-500 text-white px-1.5 py-0.5 rounded-full leading-tight">
                          {isBg ? "Старт" : "Start"}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-bold text-foreground text-base sm:text-lg leading-snug mb-1 group-hover:text-primary transition-colors">
                          {c.question}
                        </h3>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {c.understand}
                      </p>

                      {/* 3 info chips */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div className="rounded-lg bg-muted/40 px-3 py-2">
                          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                            {isBg ? "Ментален модел" : "Mental model"}
                          </p>
                          <p className="text-xs text-foreground font-medium">{c.mentalModel}</p>
                        </div>
                        <div className="rounded-lg bg-muted/40 px-3 py-2">
                          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                            {isBg ? "Ще запомниш" : "You'll remember"}
                          </p>
                          <p className="text-xs text-foreground">{c.remember}</p>
                        </div>
                        <div className="rounded-lg bg-muted/40 px-3 py-2">
                          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                            {isBg ? "Аналогия" : "Analogy"}
                          </p>
                          <p className="text-xs text-muted-foreground italic">{c.analogy}</p>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {station.timeMin} {isBg ? "мин. четене" : "min read"}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Progressive disclosure: what comes after */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-2xl border border-dashed border-border bg-card/40 p-6 text-center"
        >
          <p className="text-sm font-medium text-foreground mb-1">
            {isBg
              ? "След като завършиш маршрута — напредналите теми:"
              : "After completing the path — advanced topics:"}
          </p>
          <p className="text-xs text-muted-foreground mb-4">
            {isBg
              ? "Тези теми имат смисъл само след като имаш ясния фундамент от 5-те станции."
              : "These topics only make sense after you have the clear foundation from the 5 stations."}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {(isBg
              ? ["Структурирани данни & Schema.org", "Технически SEO одит", "Ecommerce AI", "AI Агенти", "Core Web Vitals"]
              : ["Structured Data & Schema.org", "Technical SEO Audit", "Ecommerce AI", "AI Agents", "Core Web Vitals"]
            ).map((topic) => (
              <span
                key={topic}
                className="text-xs bg-muted/50 text-muted-foreground px-3 py-1.5 rounded-full border border-border/40"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
