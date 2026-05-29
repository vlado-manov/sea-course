"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Hash } from "lucide-react";
import { cn } from "@/lib/utils";

interface GlossaryPreviewProps {
  locale: string;
}

const terms = [
  {
    term: "GEO",
    full: "Generative Engine Optimization",
    def: {
      bg: "Практиката за оптимизиране на съдържание за да се появява в AI-генерирани отговори от ChatGPT, Gemini, Perplexity и Claude.",
      en: "The practice of optimizing content to appear in AI-generated answers from ChatGPT, Gemini, Perplexity, and Claude.",
    },
    color: "text-teal-500 bg-teal-500/10 border-teal-500/20",
  },
  {
    term: "AI Overview",
    full: "Google AI-Generated Overview",
    def: {
      bg: "Функция на Google Search, която показва AI-генерирано резюме в горната част на резултатите от търсенето.",
      en: "A Google Search feature that displays an AI-generated summary at the top of search results.",
    },
    color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    term: "E-E-A-T",
    full: "Experience, Expertise, Authoritativeness, Trustworthiness",
    def: {
      bg: "Рамката на Google за оценка на качеството на съдържанието въз основа на опит, експертиза, авторитет и доверие.",
      en: "Google's framework for evaluating content quality based on Experience, Expertise, Authoritativeness, and Trustworthiness.",
    },
    color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
  },
  {
    term: "Entity SEO",
    full: "Entity-Based SEO Optimization",
    def: {
      bg: "SEO подход, фокусиран върху изграждане на семантичен авторитет чрез обекти (entities) и Knowledge Graph вместо само ключови думи.",
      en: "SEO approach focused on building semantic authority through entities and Knowledge Graph rather than just keywords.",
    },
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
  },
  {
    term: "JSON-LD",
    full: "JavaScript Object Notation for Linked Data",
    def: {
      bg: "Метод за имплементация на структурирани данни, препоръчан от Google за Schema.org маркап в уеб страниците.",
      en: "A method of implementing structured data, recommended by Google for Schema.org markup on web pages.",
    },
    color: "text-rose-500 bg-rose-500/10 border-rose-500/20",
  },
  {
    term: "Core Web Vitals",
    full: "Google Core Web Vitals Metrics",
    def: {
      bg: "Набор от метрики за измерване на потребителското изживяване: LCP (зареждане), INP (интерактивност), CLS (стабилност).",
      en: "A set of metrics for measuring user experience: LCP (loading), INP (interactivity), CLS (visual stability).",
    },
    color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    term: "Knowledge Graph",
    full: "Google Knowledge Graph",
    def: {
      bg: "База данни на Google с факти за хора, места и неща, използвана за семантично разбиране и Knowledge Panels.",
      en: "Google's database of facts about people, places, and things, used for semantic understanding and Knowledge Panels.",
    },
    color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
  },
  {
    term: "Agentic Commerce",
    full: "AI Agent-Driven Commerce",
    def: {
      bg: "Нова форма на електронна търговия, при която AI агенти автономно търсят, сравняват и купуват продукти от името на потребителите.",
      en: "An emerging form of e-commerce where AI agents autonomously search, compare, and purchase products on behalf of users.",
    },
    color: "text-violet-500 bg-violet-500/10 border-violet-500/20",
  },
];

export function GlossaryPreview({ locale }: GlossaryPreviewProps) {
  const isBg = locale === "bg";

  return (
    <section className="py-24 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {isBg ? "SEO & AI Речник" : "SEO & AI Glossary"}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              {isBg
                ? "Разбери всички ключови термини от AI SEO, GEO и съвременния дигитален маркетинг"
                : "Understand all key terms from AI SEO, GEO, and modern digital marketing"}
            </p>
          </div>
          <Link
            href={`/${locale}/glossary`}
            className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted/50 transition-colors"
          >
            {isBg ? "Пълен речник" : "Full glossary"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {terms.map((item, i) => (
            <motion.div
              key={item.term}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                href={`/${locale}/glossary#${item.term.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex flex-col h-full rounded-2xl border border-border bg-card p-5 hover:shadow-md hover:shadow-black/5 hover:border-border/80 transition-all duration-200"
              >
                <div className={cn(
                  "inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg border w-fit mb-3",
                  item.color
                )}>
                  <Hash className="h-3 w-3" />
                  {item.term}
                </div>
                <p className="text-[11px] font-medium text-muted-foreground mb-2">
                  {item.full}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                  {item.def[locale as "bg" | "en"]}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  {isBg ? "Прочети повече" : "Read more"}
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
