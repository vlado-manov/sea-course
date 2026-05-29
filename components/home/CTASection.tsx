"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, MessageSquare, CheckCircle2, Users } from "lucide-react";

interface CTASectionProps {
  locale: string;
}

export function CTASection({ locale }: CTASectionProps) {
  const isBg = locale === "bg";

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-purple-600/5 to-teal-600/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {isBg
              ? "Какво правиш след като разбереш?"
              : "What do you do after you understand?"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            {isBg
              ? "Два пътя от тук нататък. Изборът е твой."
              : "Two paths from here. The choice is yours."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Path A: Learn */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
              <BookOpen className="h-5 w-5 text-indigo-500" />
            </div>
            <h3 className="font-bold text-xl text-foreground mb-3">
              {isBg ? "Искам да разбера сам" : "I want to understand myself"}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              {isBg
                ? "Следвай учебния маршрут — 5 последователни урока, всеки изграждащ следващия. Безплатно, без регистрация, в твоето темпо."
                : "Follow the learning path — 5 sequential lessons, each building the next. Free, no registration, at your own pace."}
            </p>
            <ul className="space-y-2.5 mb-7">
              {(isBg ? [
                "5 структурирани урока с аналогии и примери",
                "Въпроси за проверка на разбирането след всяка секция",
                "Конкретна следваща стъпка в края на всеки урок",
              ] : [
                "5 structured lessons with analogies and examples",
                "Understanding check questions after each section",
                "Concrete next step at the end of each lesson",
              ]).map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={`/${locale}/tutorials/ai-seo-basics`}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-600 transition-colors group"
            >
              {isBg ? "Започни от Станция 1" : "Start at Station 1"}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Path B: Work together */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/5 to-indigo-500/5 p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5">
              <MessageSquare className="h-5 w-5 text-teal-500" />
            </div>
            <h3 className="font-bold text-xl text-foreground mb-3">
              {isBg ? "Искам анализ на моя бизнес" : "I want my business analyzed"}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              {isBg
                ? "Вместо да учиш теорията сам — анализираме конкретно твоя сайт. Какво работи, какво не, и какво трябва да се промени с ясни приоритети."
                : "Instead of learning theory alone — we analyze your specific site. What works, what doesn't, and what needs to change with clear priorities."}
            </p>
            <ul className="space-y-2.5 mb-7">
              {(isBg ? [
                "Анализ на AI видимостта на конкретния ти сайт",
                "Конкретен план с приоритизирани стъпки",
                "Обяснение защо — не само какво",
              ] : [
                "AI visibility analysis of your specific site",
                "Concrete plan with prioritized steps",
                "Explanation of why — not just what",
              ]).map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={`/${locale}/tutorials/ai-visibility-strategy`}
              className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-600 transition-colors group"
            >
              {isBg ? "Виж как работим заедно" : "See how we work together"}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Path C: For consultants */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/5 to-purple-500/5 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
              <Users className="h-4 w-4 text-violet-500" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">
                {isBg ? "Искам да продавам AI SEO услуги на клиенти" : "I want to sell AI SEO services to clients"}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {isBg
                  ? "Как да говориш с клиенти, как да ги убедиш, речник за убеждаване, изграждане на портфолио."
                  : "How to talk to clients, how to convince them, persuasion vocabulary, portfolio building."}
              </p>
            </div>
          </div>
          <Link
            href={`/${locale}/clients`}
            className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-violet-500/40 bg-violet-500/10 px-4 py-2.5 text-sm font-semibold text-violet-500 hover:bg-violet-500/20 transition-colors group"
          >
            {isBg ? "Раздел за консултанти" : "Consultant section"}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Understanding check */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl border border-border bg-muted/20 p-6"
        >
          <p className="text-sm font-semibold text-foreground text-center mb-4">
            {isBg
              ? "Провери разбирането си преди да продължиш:"
              : "Check your understanding before continuing:"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {(isBg ? [
              "Можеш ли да обясниш разликата между класическо SEO и GEO с едно изречение?",
              "Знаеш ли каква е разликата между GPS навигация и хартиена карта при търсенето?",
              "Знаеш ли защо ключовите думи вече не са единственият критерий за AI видимост?",
              "Можеш ли да дадеш конкретен пример за Entity SEO от твоя бранш?",
            ] : [
              "Can you explain the difference between classic SEO and GEO in one sentence?",
              "Do you know the difference between GPS navigation and a paper map in search?",
              "Do you know why keywords are no longer the only criterion for AI visibility?",
              "Can you give a concrete example of Entity SEO from your industry?",
            ]).map((q, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground bg-card rounded-xl p-3.5 border border-border/40"
              >
                <span className="text-primary font-bold shrink-0">{i + 1}.</span>
                <span>{q}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-center text-muted-foreground">
            {isBg
              ? "Ако отговорът на повечето е 'не' — Станция 1 е правилното начало. Ако отговорът е 'да' — провери Станция 4 и 5."
              : "If most answers are 'no' — Station 1 is the right start. If 'yes' — check Stations 4 and 5."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
