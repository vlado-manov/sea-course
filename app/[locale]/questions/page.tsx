"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  HelpCircle, Trash2, Clock, BookOpen, ArrowRight, StickyNote,
  AlertCircle, MessageSquare, Send, X, CheckCircle2, CornerDownLeft,
} from "lucide-react";
import {
  loadUnclearItems, deleteUnclearItem, saveReply, deleteReply, type UnclearItem,
} from "@/components/tutorial/UnclearSection";
import { cn } from "@/lib/utils";

function formatDate(iso: string, locale: string): string {
  return new Date(iso).toLocaleString(locale === "bg" ? "bg-BG" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function groupByTutorial(items: UnclearItem[]): Map<string, UnclearItem[]> {
  const map = new Map<string, UnclearItem[]>();
  for (const item of items) {
    const key = item.tutorialSlug;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(item);
  }
  return map;
}

export default function QuestionsPage() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "bg";
  const isBg = locale === "bg";

  const [items, setItems] = useState<UnclearItem[]>([]);
  const [mounted, setMounted] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [replyingId, setReplyingId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  useEffect(() => {
    setItems(loadUnclearItems().sort((a, b) =>
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    ));
    setMounted(true);
  }, []);

  function handleDelete(id: string) {
    setDeletingId(id);
    setTimeout(() => {
      deleteUnclearItem(id);
      setItems((prev) => prev.filter((i) => i.id !== id));
      setDeletingId(null);
    }, 300);
  }

  function handleStartReply(id: string, existing?: string) {
    setReplyingId(id);
    setReplyText(existing ?? "");
  }

  function handleCancelReply() {
    setReplyingId(null);
    setReplyText("");
  }

  function handleSubmitReply(id: string) {
    if (!replyText.trim()) return;
    const updated = saveReply(id, replyText);
    setItems(updated.sort((a, b) =>
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    ));
    setReplyingId(null);
    setReplyText("");
  }

  function handleDeleteReply(id: string) {
    const updated = deleteReply(id);
    setItems(updated.sort((a, b) =>
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    ));
  }

  const grouped = groupByTutorial(items);

  return (
    <div className="page-transition">
      {/* Header */}
      <section className="border-b border-border/40 bg-gradient-to-b from-muted/30 to-transparent py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-500 mb-5">
            <HelpCircle className="h-3.5 w-3.5" />
            {isBg ? "Моите бележки" : "My notes"}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            {isBg ? "Неясноти и въпроси" : "Unclear items and questions"}
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            {isBg
              ? "Всичко, което си записал по време на обучението. Прегледай, отговори си и продължи напред."
              : "Everything you noted during learning. Review, reply to yourself, and move forward."}
          </p>
          {mounted && items.length > 0 && (
            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1">
                <StickyNote className="h-3.5 w-3.5" />
                {items.length} {isBg ? (items.length === 1 ? "бележка" : "бележки") : (items.length === 1 ? "note" : "notes")}
              </span>
              <span>·</span>
              <span>
                {grouped.size} {isBg ? (grouped.size === 1 ? "урок" : "урока") : (grouped.size === 1 ? "tutorial" : "tutorials")}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        {!mounted ? (
          <div className="flex items-center gap-3 text-muted-foreground py-16 justify-center">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            {isBg ? "Зарежда..." : "Loading..."}
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-muted/40 border border-border flex items-center justify-center mb-5">
              <StickyNote className="h-7 w-7 text-muted-foreground/50" />
            </div>
            <h2 className="font-semibold text-foreground text-lg mb-2">
              {isBg ? "Все още няма записани бележки" : "No notes yet"}
            </h2>
            <p className="text-muted-foreground text-sm max-w-sm">
              {isBg
                ? "Докато четеш уроците, записвай неясните места с бутона в края на всеки урок."
                : "While reading tutorials, note unclear parts with the button at the end of each lesson."}
            </p>
            <Link
              href={`/${locale}/tutorials/ai-seo-basics`}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors group"
            >
              <BookOpen className="h-4 w-4" />
              {isBg ? "Започни от Станция 1" : "Start at Station 1"}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {Array.from(grouped.entries()).map(([slug, groupItems]) => {
              const title = groupItems[0].tutorialTitle;
              return (
                <div key={slug}>
                  {/* Tutorial group header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <BookOpen className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/${locale}/tutorials/${slug}`}
                        className="font-semibold text-foreground hover:text-primary transition-colors text-sm line-clamp-1"
                      >
                        {title}
                      </Link>
                      <p className="text-xs text-muted-foreground">
                        {groupItems.length} {isBg ? (groupItems.length === 1 ? "бележка" : "бележки") : (groupItems.length === 1 ? "note" : "notes")}
                      </p>
                    </div>
                    <Link
                      href={`/${locale}/tutorials/${slug}`}
                      className="shrink-0 text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {isBg ? "Към урока" : "Go to tutorial"}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>

                  {/* Items in this tutorial */}
                  <div className="space-y-3 ml-11">
                    {groupItems.map((item) => (
                      <div
                        key={item.id}
                        className={cn(
                          "group rounded-xl border border-border bg-card transition-all duration-300",
                          deletingId === item.id && "opacity-0 scale-95"
                        )}
                      >
                        {/* Note body */}
                        <div className="p-4">
                          <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap mb-3">
                            {item.text}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {formatDate(item.submittedAt, locale)}
                            </div>
                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={() => handleStartReply(item.id, item.reply)}
                                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                              >
                                <MessageSquare className="h-3.5 w-3.5" />
                                {item.reply
                                  ? (isBg ? "Редактирай отговора" : "Edit reply")
                                  : (isBg ? "Отговори" : "Reply")}
                              </button>
                              <span className="text-muted-foreground/30">·</span>
                              <button
                                onClick={() => handleDelete(item.id)}
                                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-rose-500 transition-colors"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                                {isBg ? "Изтрий" : "Delete"}
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Existing reply */}
                        {item.reply && replyingId !== item.id && (
                          <div className="border-t border-border/40 bg-primary/5 rounded-b-xl px-4 py-3">
                            <div className="flex items-start gap-2">
                              <CornerDownLeft className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-semibold text-primary mb-1">
                                  {isBg ? "Моят отговор" : "My reply"}
                                </p>
                                <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                                  {item.reply}
                                </p>
                                {item.repliedAt && (
                                  <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-1">
                                    <Clock className="h-2.5 w-2.5" />
                                    {formatDate(item.repliedAt, locale)}
                                  </p>
                                )}
                              </div>
                              <button
                                onClick={() => handleDeleteReply(item.id)}
                                className="shrink-0 text-muted-foreground/50 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100"
                                title={isBg ? "Изтрий отговора" : "Delete reply"}
                              >
                                <X className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Reply form */}
                        {replyingId === item.id && (
                          <div className="border-t border-border/40 bg-primary/5 rounded-b-xl px-4 py-3">
                            <div className="flex items-center gap-2 mb-2">
                              <CornerDownLeft className="h-3.5 w-3.5 text-primary" />
                              <p className="text-xs font-semibold text-primary">
                                {isBg ? "Напиши отговор" : "Write a reply"}
                              </p>
                            </div>
                            <textarea
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                              placeholder={isBg
                                ? "Сега, след като прочетох/научих повече, разбирам, че…"
                                : "Now that I've read/learned more, I understand that…"}
                              rows={3}
                              autoFocus
                              className="w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors"
                            />
                            <div className="flex items-center justify-end gap-2 mt-2">
                              <button
                                onClick={handleCancelReply}
                                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-muted/40"
                              >
                                <X className="h-3.5 w-3.5" />
                                {isBg ? "Откажи" : "Cancel"}
                              </button>
                              <button
                                onClick={() => handleSubmitReply(item.id)}
                                disabled={!replyText.trim()}
                                className="flex items-center gap-1.5 text-xs font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-colors px-3 py-1.5 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
                              >
                                <Send className="h-3.5 w-3.5" />
                                {isBg ? "Запиши отговора" : "Save reply"}
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Clear all */}
            <div className="pt-4 border-t border-border/40 flex items-center justify-between">
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <AlertCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                {isBg
                  ? "Бележките се съхраняват само в браузъра. При изчистване на данните ще изчезнат."
                  : "Notes are stored in the browser only. Clearing browser data will remove them."}
              </div>
              <button
                onClick={() => {
                  if (confirm(isBg ? "Изтриване на всички бележки?" : "Delete all notes?")) {
                    localStorage.removeItem("seo_academy_unclear_items");
                    setItems([]);
                  }
                }}
                className="shrink-0 text-xs text-muted-foreground hover:text-rose-500 transition-colors ml-4"
              >
                {isBg ? "Изтрий всички" : "Delete all"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
