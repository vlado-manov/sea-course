"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FeaturesProps {
  locale: string;
}

const shiftStyles = [
  {
    number: "01",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
    beforeBg: "bg-muted/30 border-border/60",
    afterBg: "bg-indigo-500/8 border-indigo-500/20",
    afterText: "text-indigo-400",
    analogyBorder: "border-l-indigo-500",
    arrowColor: "text-indigo-400",
  },
  {
    number: "02",
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/20",
    beforeBg: "bg-muted/30 border-border/60",
    afterBg: "bg-teal-500/8 border-teal-500/20",
    afterText: "text-teal-400",
    analogyBorder: "border-l-teal-500",
    arrowColor: "text-teal-400",
  },
  {
    number: "03",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    beforeBg: "bg-muted/30 border-border/60",
    afterBg: "bg-purple-500/8 border-purple-500/20",
    afterText: "text-purple-400",
    analogyBorder: "border-l-purple-500",
    arrowColor: "text-purple-400",
  },
];

const shiftContent = {
  bg: [
    {
      question: "Какво точно се промени в начина на търсене?",
      shift: "Потребителите вече не избират между 10 сини връзки. AI избира вместо тях — и дава един отговор.",
      beforeLabel: "Преди (2020)",
      before: "Ти се класираш на #1 → клиентът те вижда → кликва.",
      afterLabel: "Сега (2025)",
      after: "AI синтезира отговор от 200+ сайта → клиентът вижда само него → не е нужно да кликва.",
      analogy: "Представи си разликата между хартиена карта и GPS навигация. Картата ти показва всички пътища — ти избираш. GPS ти казва само накъде да завиеш — не виждаш алтернативите. Търсенето стана GPS. Ако AI не те включи в маршрута — не съществуваш за клиента.",
      insight: "Проблемът не е, че позицията ти е паднала. Проблемът е, че играта се е променила изцяло.",
    },
    {
      question: "Как AI системите решават кого да цитират?",
      shift: "AI системите не търсят 'ключовата дума' — търсят авторитетния отговор по темата.",
      beforeLabel: "Класическо SEO",
      before: "Повтаряш ключовата дума → качваш в рейтинга. Обем и честота на думата.",
      afterLabel: "AI SEO",
      after: "Изграждаш авторитет по темата → AI те разпознава като надежден източник. Дълбочина и структура.",
      analogy: "Представи си стая с 50 консултанти. Някой задава въпрос. Кого питат? Не най-гласовития — а онзи, за когото всички знаят, че е експертът. GEO е да станеш 'онзи' за AI системата. Entity SEO е да изградиш дигиталната визитка, паспорта и препоръчателното писмо едновременно.",
      insight: "Ключовата дума е входният билет. Авторитетът е това, което те кара да останеш в стаята.",
    },
    {
      question: "С кого реално се конкурираш в AI ерата?",
      shift: "Конкуренцията вече не е с 5-те ти преки конкурента. Тя е с всеки авторитетен сайт по темата — в целия интернет.",
      beforeLabel: "Преди",
      before: "Оптимизираш срещу 5–10 конкурента по ключовите си думи. Локален турнир.",
      afterLabel: "Сега",
      after: "AI сравнява теб с всеки авторитетен сайт по темата — независимо от размера и региона.",
      analogy: "Преди беше локален турнир — биеш местните и печелиш. Сега е директно световно първенство без квалификации. Добрата новина: по-малките, но авторитетни сайтове побеждават по-лесно в AI, отколкото в класическото Google класиране — защото авторитетът замества рекламния бюджет.",
      insight: "По-важен е авторитетът по конкретната тема, отколкото общата авторитетност на домейна.",
    },
  ],
  en: [
    {
      question: "What exactly changed about how people search?",
      shift: "Users no longer choose between 10 blue links. AI chooses for them — and gives one answer.",
      beforeLabel: "Before (2020)",
      before: "You rank #1 → client sees you → clicks.",
      afterLabel: "Now (2025)",
      after: "AI synthesizes an answer from 200+ sites → client sees only that → no need to click.",
      analogy: "Think of the difference between a paper map and GPS navigation. The map shows all roads — you choose. GPS only tells you where to turn — you don't see alternatives. Search became GPS. If AI doesn't include you in the route — you don't exist for the client.",
      insight: "The problem isn't that your rankings dropped. The problem is that the game changed entirely.",
    },
    {
      question: "How do AI systems decide who to cite?",
      shift: "AI systems don't look for 'the keyword' — they look for the authoritative answer on the topic.",
      beforeLabel: "Classic SEO",
      before: "Repeat the keyword → climb the rankings. Volume and keyword frequency.",
      afterLabel: "AI SEO",
      after: "Build topical authority → AI recognizes you as a reliable source. Depth and structure.",
      analogy: "Imagine a room with 50 consultants. Someone asks a question. Who do they ask? Not the loudest — the one everyone knows is the expert on that topic. GEO is becoming 'that person' for AI systems. Entity SEO is building the digital business card, passport, and reference letter all at once.",
      insight: "The keyword is the entry ticket. Authority is what keeps you in the room.",
    },
    {
      question: "Who are you actually competing with in the AI era?",
      shift: "Competition is no longer just your 5 direct competitors. It's every authoritative site on the topic — across the entire internet.",
      beforeLabel: "Before",
      before: "You optimize against 5–10 competitors for your keywords. Local tournament.",
      afterLabel: "Now",
      after: "AI compares you to every authoritative site on the topic — regardless of size or region.",
      analogy: "Before it was a local tournament — beat the locals and win. Now it's a direct world championship with no qualifiers. The good news: smaller but authoritative sites win more easily in AI than in classic Google rankings — because authority replaces ad budgets.",
      insight: "Topical authority on a specific subject matters more than overall domain authority.",
    },
  ],
};

export function Features({ locale }: FeaturesProps) {
  const isBg = locale === "bg";
  const content = shiftContent[locale as "bg" | "en"];

  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {isBg
              ? "Три промени, които трябва да разбереш"
              : "Three shifts you need to understand"}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            {isBg
              ? "Не 50 нови тактики. Три фундаментални промени, от които произтича всичко останало."
              : "Not 50 new tactics. Three fundamental shifts that everything else follows from."}
          </p>
        </motion.div>

        <div className="space-y-6">
          {content.map((item, i) => {
            const style = shiftStyles[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 sm:p-8"
              >
                <div className="flex items-start gap-5">
                  {/* Number badge */}
                  <div className={`shrink-0 rounded-xl border px-3 py-2 ${style.bg}`}>
                    <span className={`font-mono font-bold text-base ${style.color}`}>
                      {style.number}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Question heading */}
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2 leading-snug">
                      {item.question}
                    </h3>

                    {/* Core statement */}
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {item.shift}
                    </p>

                    {/* Before / After */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                      <div className={`rounded-xl border p-4 ${style.beforeBg}`}>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
                          {item.beforeLabel}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.before}
                        </p>
                      </div>
                      <div className={`rounded-xl border p-4 ${style.afterBg}`}>
                        <p className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${style.afterText}`}>
                          {item.afterLabel}
                        </p>
                        <p className="text-sm text-foreground leading-relaxed">
                          {item.after}
                        </p>
                      </div>
                    </div>

                    {/* Analogy */}
                    <div className={`border-l-4 ${style.analogyBorder} pl-4 py-1 mb-4`}>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                        {isBg ? "Аналогия" : "Analogy"}
                      </p>
                      <p className="text-sm text-muted-foreground italic leading-relaxed">
                        {item.analogy}
                      </p>
                    </div>

                    {/* Key insight */}
                    <div className="flex items-start gap-2">
                      <ArrowRight className={`h-4 w-4 mt-0.5 shrink-0 ${style.arrowColor}`} />
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {item.insight}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
