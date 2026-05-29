"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, MapPin, Navigation } from "lucide-react";

interface HeroProps {
  locale: string;
}

export function Hero({ locale }: HeroProps) {
  const isBg = locale === "bg";

  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-32">
      <div className="absolute inset-0 grid-background opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-indigo-600/15 blur-3xl" />
      <div className="absolute top-1/3 -right-40 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">

          {/* Urgency signal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-500 mb-8">
              <Zap className="h-3.5 w-3.5" />
              {isBg
                ? "40% от Google търсенията вече показват AI отговор — не 10 сини връзки"
                : "40% of Google searches now show an AI answer — not 10 blue links"}
            </div>
          </motion.div>

          {/* Problem-first headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] max-w-4xl text-foreground"
          >
            {isBg ? (
              <>
                Твоите клиенти вече търсят с AI.{" "}
                <span className="bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
                  Намират ли те теб?
                </span>
              </>
            ) : (
              <>
                Your clients are now searching with AI.{" "}
                <span className="bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
                  Do they find you?
                </span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
          >
            {isBg
              ? "Добрата позиция в Google вече не е достатъчна. AI прочита 200 сайта и дава един синтезиран отговор. Кои сайтове влизат в него — и как да бъдеш един от тях — е новото умение."
              : "Good Google rankings are no longer enough. AI reads 200 sites and gives one synthesized answer. Which sites make it in — and how to be one of them — is the new skill."}
          </motion.p>

          {/* GPS vs Map visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-left"
          >
            {/* Before: Map */}
            <div className="rounded-2xl border border-border bg-card/60 p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {isBg ? "Преди: Хартиена карта" : "Before: Paper map"}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-4 italic">
                {isBg
                  ? "Потребителят вижда всички пътища и сам избира."
                  : "User sees all roads and chooses themselves."}
              </p>
              <div className="space-y-2">
                {(isBg
                  ? ["1. Твоят сайт ✓", "2. Конкурент", "3. Конкурент", "4. Конкурент", "5. Конкурент"]
                  : ["1. Your site ✓", "2. Competitor", "3. Competitor", "4. Competitor", "5. Competitor"]
                ).map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-lg px-3 py-2 text-sm ${
                      i === 0
                        ? "bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 font-semibold"
                        : "bg-muted/30 text-muted-foreground"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-teal-600 dark:text-teal-400 font-medium">
                {isBg ? "Добра позиция = видимост." : "Good position = visibility."}
              </p>
            </div>

            {/* After: GPS */}
            <div className="rounded-2xl border border-indigo-500/30 bg-card/60 p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Navigation className="h-4 w-4 text-indigo-400" />
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                    {isBg ? "Сега: GPS навигация" : "Now: GPS navigation"}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-4 italic">
                  {isBg
                    ? "AI избира маршрута. Показва само крайния отговор."
                    : "AI chooses the route. Shows only the final answer."}
                </p>
                <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/8 p-4">
                  <p className="text-xs font-semibold text-indigo-400 mb-2">
                    {isBg ? "AI Overview:" : "AI Overview:"}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {isBg
                      ? '"Ето директния отговор на въпроса ти, синтезиран от 200+ сайта..."'
                      : '"Here\'s the direct answer to your question, synthesized from 200+ sites..."'}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-muted-foreground/60">
                      {isBg ? "Цитирани: 3–5 сайта" : "Cited: 3–5 sites"}
                    </span>
                    <span className="text-muted-foreground/40">·</span>
                    <span className="text-rose-400 font-medium">
                      {isBg ? "Ти включен ли си?" : "Are you included?"}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-rose-400 font-medium">
                  {isBg
                    ? "Добра позиция ≠ цитиране в AI отговора."
                    : "Good position ≠ citation in AI answer."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Single CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href={`/${locale}/tutorials/ai-seo-basics`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 transition-all duration-200 group"
            >
              {isBg ? "Разбери какво се промени" : "Understand what changed"}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href={`/${locale}/tutorials`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {isBg ? "или виж целия учебен маршрут →" : "or see the full learning path →"}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
