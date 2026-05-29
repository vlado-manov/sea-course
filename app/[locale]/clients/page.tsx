"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, MessageSquare, TrendingUp, Award, BookOpen,
  ChevronDown, ChevronUp, AlertTriangle, CheckCircle2, Lightbulb,
  Users, Target, Shield, Zap, BarChart3, Quote,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

/* ── Vocabulary data ──────────────────────────────────────────── */

const jargonToHuman = [
  {
    jargon: "AI Visibility",
    human: { bg: "Дали те намират потребителите, когато търсят с AI?", en: "Do users find you when searching with AI?" },
    example: { bg: "Клиентът: 'Какви услуги предлагате?' — Ти: 'Проверихте ли дали ChatGPT ви препоръчва, когато потребителят попита?'", en: "Client: 'What services do you offer?' — You: 'Have you checked if ChatGPT recommends you when a user asks?'" },
    color: "border-indigo-500/30 bg-indigo-500/5 text-indigo-400",
  },
  {
    jargon: "GEO (Generative Engine Optimization)",
    human: { bg: "Оптимизация на сайта, така че AI търсачките да те цитират в отговорите си", en: "Optimization so AI search engines cite you in their answers" },
    example: { bg: "Вместо: 'Правим GEO'. Кажи: 'Настройваме сайта ти, така че когато ChatGPT отговаря на въпрос от твоя бранш, да те споменава.'", en: "Instead of: 'We do GEO'. Say: 'We configure your site so when ChatGPT answers a question from your industry, it mentions you.'" },
    color: "border-teal-500/30 bg-teal-500/5 text-teal-400",
  },
  {
    jargon: "Entity SEO",
    human: { bg: "Изграждане на дигитална идентичност — Google и AI да знаят точно кой е твоят бизнес", en: "Building a digital identity — Google and AI know exactly who your business is" },
    example: { bg: "Вместо: 'Правим entity optimization'. Кажи: 'Изграждаме дигиталния паспорт на бизнеса ти, така че Google и ChatGPT да те разпознават автоматично.'", en: "Instead of: 'We do entity optimization'. Say: 'We build your business's digital passport so Google and ChatGPT recognize you automatically.'" },
    color: "border-amber-500/30 bg-amber-500/5 text-amber-400",
  },
  {
    jargon: "AI Overview",
    human: { bg: "Резюмето, което Google показва отгоре — над всички сайтове", en: "The summary Google shows at the top — above all websites" },
    example: { bg: "Кажи: 'Виждаш ли кутийката с AI отговор в горната част на Google? Твоят конкурент е там. Ти не си.'", en: "Say: 'Do you see the AI answer box at the top of Google? Your competitor is there. You're not.'" },
    color: "border-rose-500/30 bg-rose-500/5 text-rose-400",
  },
  {
    jargon: "E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)",
    human: { bg: "Сигналите, по които Google и AI преценяват дали да ти вярват", en: "The signals Google and AI use to decide whether to trust you" },
    example: { bg: "Кажи: 'Google проверява дали си истински специалист — има ли биография, реални клиенти, публикации? Без тези сигнали — AI не те цитира.'", en: "Say: 'Google checks if you're a real specialist — is there a bio, real clients, publications? Without these signals — AI won't cite you.'" },
    color: "border-purple-500/30 bg-purple-500/5 text-purple-400",
  },
  {
    jargon: "LLM Citation / AI Citation",
    human: { bg: "Когато ChatGPT или Gemini препоръчва твоя сайт в отговора", en: "When ChatGPT or Gemini recommends your site in a response" },
    example: { bg: "Кажи: 'Целта е, когато потенциален клиент пита ChatGPT за твоята услуга, ChatGPT да посочи теб.'", en: "Say: 'The goal is that when a potential client asks ChatGPT about your service, ChatGPT points to you.'" },
    color: "border-cyan-500/30 bg-cyan-500/5 text-cyan-400",
  },
  {
    jargon: "Zero-click Results",
    human: { bg: "Когато Google дава отговора директно — без потребителят да кликва към сайт", en: "When Google gives the answer directly — without the user clicking to a site" },
    example: { bg: "Кажи: 'Ако клиентът получи отговора директно от Google без да влезе в сайта ти — не го виждаш в трафика. Ако пък не те цитира — изобщо не съществуваш.'", en: "Say: 'If the client gets the answer directly from Google without entering your site — you don't see them in traffic. If you're not cited at all — you simply don't exist.'" },
    color: "border-orange-500/30 bg-orange-500/5 text-orange-400",
  },
  {
    jargon: "Topical Authority",
    human: { bg: "Когато сайтът ти е разпознат като авторитетен за конкретна тема — не само за ключова дума", en: "When your site is recognized as authoritative for a specific topic — not just a keyword" },
    example: { bg: "Кажи: 'Целта е Google и ChatGPT да те смятат за водещ специалист по [тема], не само за [ключова дума].'", en: "Say: 'The goal is for Google and ChatGPT to consider you the leading specialist on [topic], not just for [keyword].'" },
    color: "border-violet-500/30 bg-violet-500/5 text-violet-400",
  },
];

const objectionMap = [
  {
    they_say: { bg: "\"Имаме вече SEO.\"", en: "\"We already have SEO.\"" },
    they_mean: { bg: "Плащаме и не знаем дали работи, или — харесва ни статуквото.", en: "We pay for it but don't know if it works, or — we like the status quo." },
    you_say: { bg: "\"Добре. Нека проверим заедно — дали сайтът ви се появява когато клиент пита ChatGPT или Gemini за вашата услуга. Ще отнеме 2 минути.\"", en: "\"Great. Let's check together — does your site appear when a client asks ChatGPT or Gemini about your service. It'll take 2 minutes.\"" },
    color: "border-indigo-500/20",
  },
  {
    they_say: { bg: "\"Нямаме нужда от това.\"", en: "\"We don't need this.\"" },
    they_mean: { bg: "Не разбирам какво се е променило и защо е важно.", en: "I don't understand what changed and why it matters." },
    you_say: { bg: "\"Разбирам. Може ли да ви покажа нещо бързо? Потърсете [услугата им] в Google и погледнете дали AI-ят горе ви споменава.\" — Те търсят. Не ги намират. Продаден.", en: "\"I understand. Can I show you something quick? Search for [their service] in Google and see if the AI at the top mentions you.\" — They search. They're not there. Sold." },
    color: "border-rose-500/20",
  },
  {
    they_say: { bg: "\"Колко струва?\" (твърде рано)", en: "\"How much does it cost?\" (too early)" },
    they_mean: { bg: "Не съм убеден в нуждата — питам за цената, за да намеря причина да откажа.", en: "I'm not convinced I need this — I'm asking about price to find a reason to decline." },
    you_say: { bg: "\"Преди да говорим за цени, нека разберем имате ли проблем, който трябва да решаваме. Може би изобщо нямате нужда от мен.\" — Обезоръжва и изгражда доверие едновременно.", en: "\"Before we talk prices, let's see if you have a problem worth solving. Maybe you don't need me at all.\" — Disarms and builds trust simultaneously." },
    color: "border-amber-500/20",
  },
  {
    they_say: { bg: "\"Имаме вътрешен маркетолог.\"", en: "\"We have an internal marketer.\"" },
    they_mean: { bg: "Защо ти, а не той?", en: "Why you and not them?" },
    you_say: { bg: "\"Отлично. AI SEO е нова дисциплина — дори опитни маркетолози я научават сега. Вашият маркетолог и аз можем да работим заедно — той познава бизнеса, аз познавам AI системите.\"", en: "\"Excellent. AI SEO is a new discipline — even experienced marketers are learning it now. Your marketer and I can work together — they know the business, I know AI systems.\"" },
    color: "border-teal-500/20",
  },
  {
    they_say: { bg: "\"Дайте ми да помисля.\"", en: "\"Let me think about it.\"" },
    they_mean: { bg: "Не ме убедихте достатъчно — или нещо не е ясно.", en: "You haven't convinced me enough — or something is unclear." },
    you_say: { bg: "\"Разбира се. Докато мислите — ще ви изпратя малък безплатен одит на сайта ви: как изглежда в ChatGPT и Gemini в момента. Така ще имате конкретни данни за решението.\"", en: "\"Of course. While you think — I'll send you a small free audit of your site: how it looks in ChatGPT and Gemini right now. That way you'll have concrete data for your decision.\"" },
    color: "border-purple-500/20",
  },
];

const portfolioSteps = {
  bg: [
    {
      step: "01",
      title: "Оптимизирай собствения си сайт — той е портфолиото",
      desc: "Преди да имаш клиенти, имаш себе си. Документирай как оптимизираш собствения си сайт за AI видимост. Покажи screenshots от ChatGPT и Gemini преди и след. Това е Case Study #1.",
      action: "Направи AI Visibility одит на собствения си сайт. Заснеми 'преди'. Направи промените. Заснеми 'след'. Напиши резултата.",
      icon: "🏠",
    },
    {
      step: "02",
      title: "Направи 2–3 безплатни одита — срещу testimonial",
      desc: "Предложи безплатен 30-минутен AI Visibility одит на познат бизнес. Искаш само едно нещо: ако намерят стойност — да дадат писмено мнение. Тяхното мнение = твоят авторитет.",
      action: "Намери 3 бизнеса от различни браншове. Направи одита. Изпрати кратък доклад (PDF). Поискай feedback за публикуване.",
      icon: "🎯",
    },
    {
      step: "03",
      title: "Lighthouse проект — 1 клиент, пълна документация",
      desc: "Намери 1 клиент на 50% цена (или Pro-Bono за NGO/малък бизнес). Документирай всичко: проблем, стратегия, промени, резултати. 3 месеца документация = 5 години доверие.",
      action: "Дефинирай ясни метрики предварително. Прави месечни screenshots. Пиши кратък progress report всеки месец. Финалния report е портфолиото ти.",
      icon: "💡",
    },
    {
      step: "04",
      title: "Документирай данни, не само думи",
      desc: "Клиентите не купуват истории — купуват числа с контекст. 'Трафикът се увеличи' не продава. '23 нови запитвания от AI Overview за 6 седмици' продава. Всяко число трябва да има: преди, след, период, контекст.",
      action: "Шаблон: '[Метрика] се промени от [X] на [Y] за [период] след [конкретна промяна].' Приложи за всеки резултат.",
      icon: "📊",
    },
    {
      step: "05",
      title: "Видимо присъствие — ти също трябва да се намираш",
      desc: "Ако продаваш AI видимост и ChatGPT не те познава — проблемът е очевиден. Оптимизирай се за 'AI SEO консултант България'. Когато клиент провери — те намерива. Това е най-убедителното портфолио.",
      action: "Потърси в ChatGPT и Perplexity: 'AI SEO специалист [твоят град]'. Ако не се появяваш — промяна в Entity SEO, GEO и авторски профил.",
      icon: "🔍",
    },
  ],
  en: [
    {
      step: "01",
      title: "Optimize your own site — it is the portfolio",
      desc: "Before you have clients, you have yourself. Document how you optimize your own site for AI visibility. Show ChatGPT and Gemini screenshots before and after. This is Case Study #1.",
      action: "Do an AI Visibility audit of your own site. Capture 'before'. Make the changes. Capture 'after'. Write the result.",
      icon: "🏠",
    },
    {
      step: "02",
      title: "Do 2–3 free audits — in exchange for a testimonial",
      desc: "Offer a free 30-minute AI Visibility audit to a business you know. You want one thing: if they find value — a written opinion. Their opinion = your authority.",
      action: "Find 3 businesses from different industries. Do the audit. Send a short report (PDF). Ask for feedback to publish.",
      icon: "🎯",
    },
    {
      step: "03",
      title: "Lighthouse project — 1 client, full documentation",
      desc: "Find 1 client at 50% price (or Pro-Bono for NGO/small business). Document everything: problem, strategy, changes, results. 3 months documentation = 5 years of trust.",
      action: "Define clear metrics upfront. Take monthly screenshots. Write a short progress report each month. The final report is your portfolio.",
      icon: "💡",
    },
    {
      step: "04",
      title: "Document data, not just words",
      desc: "Clients don't buy stories — they buy numbers with context. 'Traffic increased' doesn't sell. '23 new inquiries from AI Overview in 6 weeks' sells. Every number needs: before, after, period, context.",
      action: "Template: '[Metric] changed from [X] to [Y] in [period] after [specific change].' Apply to every result.",
      icon: "📊",
    },
    {
      step: "05",
      title: "Visible presence — you also need to be found",
      desc: "If you sell AI visibility and ChatGPT doesn't know you — the problem is obvious. Optimize for 'AI SEO consultant Bulgaria'. When a client checks — they find you. This is the most convincing portfolio.",
      action: "Search in ChatGPT and Perplexity: 'AI SEO specialist [your city]'. If you don't appear — changes in Entity SEO, GEO and author profile.",
      icon: "🔍",
    },
  ],
};

const urgencyArguments = {
  bg: [
    {
      icon: "📉",
      title: "Показвай загубата, не печалбата",
      desc: "Мозъкът реагира по-силно на загуба, отколкото на печалба. Не казвай 'ще спечелите клиенти'. Кажи: 'Всеки месец без AI видимост пропускате клиенти, които вашият конкурент вече печели.'",
      script: "\"Нека изчислим: ако 100 души месечно търсят [вашата услуга] с AI и вие не сте там — колко от тях биха станали ваши клиенти? Дори 3–5% означава [X] пропуснати продажби месечно.\"",
    },
    {
      icon: "⏰",
      title: "Ефектът 'тихо, после внезапно'",
      desc: "Промяната в AI търсенето идва бавно — после много бързо. Като Hemingway за банкрута: 'Постепенно, после веднъж.' Бизнесите, които чакат да 'видят как се развива', ще се окажат 2–3 години назад.",
      script: "\"В момента 40% от търсенията в Google имат AI Overview. Преди 18 месеца беше 5%. Каква мислите ще бъде цифрата след 18 месеца? Бизнесите, оптимизирани сега, ще имат 2-годишна преднина.\"",
    },
    {
      icon: "🔍",
      title: "Живото демо — най-убедителното оръжие",
      desc: "Не разказвай — покажи. По-убедително от всяка презентация е когато клиентът сам търси услугата си в ChatGPT и не се намери. Думите убеждават. Реалността продава.",
      script: "\"Мога ли да ви покажа нещо? Отворете ChatGPT и напишете: '[Услугата им] в [техния град]'. Вижте кого препоръчва... Вашият сайт там ли е?\" — Изчакай. Нека видят сами.",
    },
    {
      icon: "🏆",
      title: "Конкурентът вече го прави",
      desc: "FOMO работи. Покажи конкретен конкурент, цитиран от AI, докато клиентът не е. Не го кажи абстрактно — покажи скрийншот. Конкретното побеждава общото.",
      script: "\"Проверих [конкурент X] преди тази среща. Те се появяват в ChatGPT при поне 4 от 6-те заявки, които тествах. Вие — при нито една. Не е въпрос дали имате нужда, а колко бързо ще действате.\"",
    },
  ],
  en: [
    {
      icon: "📉",
      title: "Show the loss, not the gain",
      desc: "The brain reacts more strongly to loss than gain. Don't say 'you'll gain clients'. Say: 'Every month without AI visibility you miss clients your competitor is already winning.'",
      script: "\"Let's calculate: if 100 people monthly search for [your service] with AI and you're not there — how many would become your clients? Even 3–5% means [X] missed sales per month.\"",
    },
    {
      icon: "⏰",
      title: "The 'quietly, then suddenly' effect",
      desc: "The change in AI search comes slowly — then very quickly. Like Hemingway on bankruptcy: 'Gradually, then suddenly.' Businesses that wait to 'see how it develops' will find themselves 2–3 years behind.",
      script: "\"Currently 40% of Google searches have AI Overview. 18 months ago it was 5%. What do you think it will be in 18 months? Businesses optimized now will have a 2-year head start.\"",
    },
    {
      icon: "🔍",
      title: "The live demo — the most convincing weapon",
      desc: "Don't tell — show. More convincing than any presentation is when the client searches for their own service in ChatGPT and doesn't find themselves. Words convince. Reality sells.",
      script: "\"Can I show you something? Open ChatGPT and type: '[Their service] in [their city]'. See who it recommends... Is your site there?\" — Wait. Let them see for themselves.",
    },
    {
      icon: "🏆",
      title: "The competitor is already doing it",
      desc: "FOMO works. Show a specific competitor cited by AI while the client isn't. Don't say it abstractly — show a screenshot. Concrete beats abstract.",
      script: "\"I checked [competitor X] before this meeting. They appear in ChatGPT for at least 4 of the 6 queries I tested. You — for none. It's not a question of whether you need this, but how fast you'll act.\"",
    },
  ],
};

const technicalTerms = {
  bg: [
    {
      term: "GEO",
      full: "Generative Engine Optimization",
      simple: "Оптимизация на сайта, така че AI системите (ChatGPT, Gemini, Perplexity) да го цитират в отговорите си.",
      wrong: "\"Правим GEO за по-добро SEO.\" (объркващо)",
      right: "\"Оптимизираме съдържанието ти, така че когато ChatGPT отговаря на въпрос от твоя бранш, твоят сайт да е сред цитираните.\"",
      color: "text-teal-400",
    },
    {
      term: "Entity SEO",
      full: "Entity-Based SEO / Knowledge Graph Optimization",
      simple: "Изграждане на ясна дигитална идентичност — Google и AI знаят кой е бизнесът, какво прави, и защо е авторитетен.",
      wrong: "\"Добавяме обекти в Knowledge Graph.\" (жаргон без смисъл за клиента)",
      right: "\"Правим така, че Google и ChatGPT да 'познават' бизнеса ти — като личен профил, но за компания.\"",
      color: "text-amber-400",
    },
    {
      term: "AI Overview",
      full: "Google AI-Generated Overview (бивш SGE)",
      simple: "Кутийката с AI-генериран отговор, която Google показва в горната част на резултатите.",
      wrong: "\"Трябва да се класирате в SGE.\" (остаряло + технически)",
      right: "\"Виждате ли кутийката с AI отговор горе в Google? Целта е вашият бизнес да е там.\"",
      color: "text-indigo-400",
    },
    {
      term: "E-E-A-T",
      full: "Experience, Expertise, Authoritativeness, Trustworthiness",
      simple: "Четирите критерия, по които Google и AI преценяват дали един сайт заслужава доверие.",
      wrong: "\"Трябва да подобрим E-E-A-T сигналите.\" (абревиатура без обяснение)",
      right: "\"Google проверява: има ли реален опит зад съдържанието? Има ли авторитет по темата? Доверяват ли му се другите? Работим по тези четири сигнала.\"",
      color: "text-purple-400",
    },
    {
      term: "Structured Data / Schema",
      full: "Schema.org Structured Data Markup",
      simple: "Код, добавен към сайта, който обяснява на Google и AI точно какво прави бизнесът, кой е собственикът, какви са продуктите.",
      wrong: "\"Имплементираме JSON-LD Schema markup.\" (без контекст)",
      right: "\"Добавяме 'превод' за Google — вместо Google да гадае какво прави бизнесът ти, му казваме директно чрез код.\"",
      color: "text-rose-400",
    },
    {
      term: "Topical Authority",
      full: "Topical Authority / Semantic Authority",
      simple: "Когато сайтът е разпознат за водещ авторитет по конкретна тема — не само за ключова дума.",
      wrong: "\"Трябва topical authority building.\" (жаргон)",
      right: "\"Целта е Google и ChatGPT да те виждат като THE специалист по [тема] — не само сайт с тази ключова дума.\"",
      color: "text-cyan-400",
    },
  ],
  en: [
    {
      term: "GEO",
      full: "Generative Engine Optimization",
      simple: "Optimization of a site so AI systems (ChatGPT, Gemini, Perplexity) cite it in their responses.",
      wrong: "\"We do GEO for better SEO.\" (confusing)",
      right: "\"We optimize your content so when ChatGPT answers a question from your industry, your site is among those cited.\"",
      color: "text-teal-400",
    },
    {
      term: "Entity SEO",
      full: "Entity-Based SEO / Knowledge Graph Optimization",
      simple: "Building a clear digital identity — Google and AI know who the business is, what it does, and why it's authoritative.",
      wrong: "\"We add entities to the Knowledge Graph.\" (jargon without meaning for client)",
      right: "\"We make it so Google and ChatGPT 'know' your business — like a personal profile, but for a company.\"",
      color: "text-amber-400",
    },
    {
      term: "AI Overview",
      full: "Google AI-Generated Overview (formerly SGE)",
      simple: "The box with an AI-generated answer that Google shows at the top of results.",
      wrong: "\"You need to rank in SGE.\" (outdated + technical)",
      right: "\"Do you see the AI answer box at the top of Google? The goal is for your business to be there.\"",
      color: "text-indigo-400",
    },
    {
      term: "E-E-A-T",
      full: "Experience, Expertise, Authoritativeness, Trustworthiness",
      simple: "The four criteria by which Google and AI determine whether a site deserves trust.",
      wrong: "\"We need to improve E-E-A-T signals.\" (acronym without explanation)",
      right: "\"Google checks: is there real experience behind the content? Is there authority on the topic? Do others trust it? We work on these four signals.\"",
      color: "text-purple-400",
    },
    {
      term: "Structured Data / Schema",
      full: "Schema.org Structured Data Markup",
      simple: "Code added to a site that tells Google and AI exactly what the business does, who the owner is, what the products are.",
      wrong: "\"We implement JSON-LD Schema markup.\" (without context)",
      right: "\"We add a 'translation' for Google — instead of Google guessing what your business does, we tell it directly through code.\"",
      color: "text-rose-400",
    },
    {
      term: "Topical Authority",
      full: "Topical Authority / Semantic Authority",
      simple: "When a site is recognized as the leading authority on a specific topic — not just a keyword.",
      wrong: "\"We need topical authority building.\" (jargon)",
      right: "\"The goal is for Google and ChatGPT to see you as THE specialist on [topic] — not just a site with that keyword.\"",
      color: "text-cyan-400",
    },
  ],
};

/* ── Accordion helper ───────────────────────────────────────────── */
function AccordionSection({
  id, icon, title, subtitle, children, defaultOpen = false,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 p-6 text-left hover:bg-muted/30 transition-colors"
      >
        <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-lg">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-foreground text-base sm:text-lg">{title}</p>
          <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
        </div>
        <div className="shrink-0 text-muted-foreground mt-1">
          {open ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
      </button>
      {open && (
        <div className="px-6 pb-6 border-t border-border/40 pt-5">
          {children}
        </div>
      )}
    </div>
  );
}

/* ── Main page ──────────────────────────────────────────────────── */
export default function ClientsPage() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "bg";
  const isBg = locale === "bg";

  const content = {
    hero: {
      badge: isBg ? "За AI SEO консултанти" : "For AI SEO consultants",
      title: isBg ? "Как се печели клиент за AI SEO?" : "How do you win an AI SEO client?",
      subtitle: isBg
        ? "Знаеш какво е GEO, Entity SEO и AI Visibility. Но знаеш ли как да обясниш това на човек, чийто единствен въпрос е: 'Защо ми трябва и колко струва?'"
        : "You know what GEO, Entity SEO, and AI Visibility are. But do you know how to explain this to someone whose only question is: 'Why do I need it and how much does it cost?'",
      learns: isBg
        ? ["Как да водиш разговор с клиент стъпка по стъпка", "Как да докажеш нуждата с живо демо", "Как да изградиш портфолио от нулата", "Кои думи продават и кои объркват", "Технически термини, обяснени правилно"]
        : ["How to lead a client conversation step by step", "How to prove the need with a live demo", "How to build a portfolio from scratch", "Which words sell and which confuse", "Technical terms explained correctly"],
    },
    sections: {
      conversation: {
        title: isBg ? "Какво казва клиентът — и какво всъщност иска?" : "What does the client say — and what do they actually want?",
        subtitle: isBg ? "Речник на възраженията и как да отговориш" : "Dictionary of objections and how to respond",
      },
      urgency: {
        title: isBg ? "Как да покажеш, че губят пари без AI SEO?" : "How to show they're losing money without AI SEO?",
        subtitle: isBg ? "Четири техники за изграждане на спешност" : "Four techniques for building urgency",
      },
      portfolio: {
        title: isBg ? "Как да изградиш портфолио от нулата?" : "How to build a portfolio from scratch?",
        subtitle: isBg ? "Пет стъпки без нито един платен клиент" : "Five steps without a single paying client",
      },
      vocabulary: {
        title: isBg ? "Кои думи продават — и кои объркват?" : "Which words sell — and which confuse?",
        subtitle: isBg ? "Технически жаргон → Езикът на клиента" : "Technical jargon → Client language",
      },
      terms: {
        title: isBg ? "Термините, които трябва да знаеш наизуст" : "The terms you need to know by heart",
        subtitle: isBg ? "Правилно vs. грешно използване на всеки термин" : "Correct vs. incorrect usage of each term",
      },
    },
  };

  return (
    <div className="page-transition">
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative border-b border-border/40 bg-gradient-to-b from-muted/30 to-transparent py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-6">
            <Users className="h-3.5 w-3.5" />
            {content.hero.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5">
            {content.hero.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
            {content.hero.subtitle}
          </p>

          {/* What you'll learn */}
          <div className="rounded-2xl border border-border bg-card/60 p-5 sm:p-6">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">
              {isBg ? "В този раздел ще научиш:" : "In this section you'll learn:"}
            </p>
            <ul className="space-y-2.5">
              {content.hero.learns.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Main sections ───────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 space-y-5">

        {/* ── 1. Conversation / Objections ────────────────────── */}
        <AccordionSection
          id="conversation"
          icon={<MessageSquare className="h-5 w-5 text-primary" />}
          title={content.sections.conversation.title}
          subtitle={content.sections.conversation.subtitle}
          defaultOpen
        >
          {/* Conversation framework */}
          <div className="mb-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-5">
            <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-3">
              {isBg ? "Рамка на разговора (4 стъпки)" : "Conversation framework (4 steps)"}
            </p>
            <div className="space-y-2">
              {(isBg ? [
                "1. Диагноза преди рецепта — задавай въпроси, не предлагай решения",
                "2. Покажи проблема с ТЕХНИТЕ данни, не с твоите аргументи",
                "3. Свържи с бизнес резултат — не с трафик, а с клиенти и пари",
                "4. Следваща стъпка е малка — одит, не договор",
              ] : [
                "1. Diagnosis before prescription — ask questions, don't offer solutions",
                "2. Show the problem with THEIR data, not your arguments",
                "3. Connect to a business result — not traffic, but clients and money",
                "4. Next step is small — audit, not a contract",
              ]).map((step, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-indigo-400 font-bold shrink-0">→</span>
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Objection map */}
          <p className="text-sm font-semibold text-foreground mb-3">
            {isBg ? "Речник на възраженията:" : "Objection dictionary:"}
          </p>
          <div className="space-y-3">
            {objectionMap.map((obj, i) => (
              <div key={i} className={`rounded-xl border ${obj.color} bg-card p-4`}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      {isBg ? "Клиентът казва" : "Client says"}
                    </p>
                    <p className="text-sm font-semibold text-foreground italic">
                      {obj.they_say[locale as "bg" | "en"]}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      {isBg ? "Всъщност иска" : "Actually means"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {obj.they_mean[locale as "bg" | "en"]}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      {isBg ? "Ти казваш" : "You say"}
                    </p>
                    <p className="text-sm text-foreground italic">
                      {obj.you_say[locale as "bg" | "en"]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Analogy */}
          <div className="mt-5 border-l-4 border-l-indigo-500 pl-4">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
              {isBg ? "Аналогия" : "Analogy"}
            </p>
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              {isBg
                ? "Разговорът с клиент е като медицинска консултация. Лекарят не влиза и не казва: 'Имам хапче за вас.' Първо задава въпроси, изследва, диагностицира — и ПОСЛЕ предлага лечение. Консултантът, който веднага предлага решение, звучи като продавач. Консултантът, който задава правилните въпроси, звучи като специалист."
                : "A client conversation is like a medical consultation. The doctor doesn't walk in and say: 'I have a pill for you.' First they ask questions, examine, diagnose — and THEN offer treatment. The consultant who immediately offers a solution sounds like a salesperson. The consultant who asks the right questions sounds like a specialist."}
            </p>
          </div>
        </AccordionSection>

        {/* ── 2. Urgency / Proof of need ──────────────────────── */}
        <AccordionSection
          id="urgency"
          icon={<AlertTriangle className="h-5 w-5 text-amber-500" />}
          title={content.sections.urgency.title}
          subtitle={content.sections.urgency.subtitle}
        >
          <div className="space-y-4">
            {urgencyArguments[locale as "bg" | "en"].map((arg, i) => (
              <div key={i} className="rounded-xl border border-border bg-muted/20 p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl shrink-0">{arg.icon}</span>
                  <div>
                    <p className="font-semibold text-foreground">{arg.title}</p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{arg.desc}</p>
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-card px-4 py-3">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1.5">
                    {isBg ? "Скрипт:" : "Script:"}
                  </p>
                  <p className="text-sm text-foreground italic leading-relaxed">{arg.script}</p>
                </div>
              </div>
            ))}
          </div>

          {/* The live demo checklist */}
          <div className="mt-5 rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
            <p className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-3">
              {isBg ? "Живото демо — стъпка по стъпка" : "The live demo — step by step"}
            </p>
            <ol className="space-y-2">
              {(isBg ? [
                "Отвори ChatGPT пред клиента (или сподели екрана)",
                "Потърси: '[Услуга на клиента] в [техния град]'",
                "Покажи дали клиентът е цитиран",
                "Потърси конкурент — покажи дали е цитиран",
                "Повтори с Perplexity (показва изворите по-видимо)",
                "Повтори с Google (AI Overview горе)",
                "Изчакай. Нека клиентът сам реши.",
              ] : [
                "Open ChatGPT in front of the client (or share screen)",
                "Search: '[Client's service] in [their city]'",
                "Show whether the client is cited",
                "Search a competitor — show if they're cited",
                "Repeat with Perplexity (shows sources more visibly)",
                "Repeat with Google (AI Overview at top)",
                "Wait. Let the client decide for themselves.",
              ]).map((step, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="font-bold text-amber-500 shrink-0 w-4">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </AccordionSection>

        {/* ── 3. Portfolio ─────────────────────────────────────── */}
        <AccordionSection
          id="portfolio"
          icon={<Award className="h-5 w-5 text-teal-500" />}
          title={content.sections.portfolio.title}
          subtitle={content.sections.portfolio.subtitle}
        >
          {/* Analogy first */}
          <div className="mb-5 border-l-4 border-l-teal-500 pl-4">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
              {isBg ? "Аналогия" : "Analogy"}
            </p>
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              {isBg
                ? "Портфолиото е като светофар в тъмна нощ. Клиентът не знае накъде да тръгне — светофарът му казва кога е безопасно да продължи. Твоето портфолио казва: 'Работя. Резултатите са реални. Ето доказателствата.' Без светофар — клиентът спира и не тръгва."
                : "A portfolio is like a traffic light on a dark night. The client doesn't know which way to go — the traffic light tells them when it's safe to proceed. Your portfolio says: 'I work. Results are real. Here's the proof.' Without a traffic light — the client stops and doesn't move."}
            </p>
          </div>

          <div className="space-y-4">
            {portfolioSteps[locale as "bg" | "en"].map((step, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-xl">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-teal-400">{step.step}</span>
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.desc}</p>
                    <div className="rounded-lg bg-muted/40 px-3 py-2.5">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                        {isBg ? "Конкретно действие:" : "Concrete action:"}
                      </p>
                      <p className="text-xs text-foreground leading-relaxed">{step.action}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* What to include in a case study */}
          <div className="mt-5 rounded-xl border border-teal-500/20 bg-teal-500/5 p-5">
            <p className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-3">
              {isBg ? "Шаблон за Case Study (минимален)" : "Case Study template (minimum)"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {(isBg ? [
                "🔴 Проблем: Какво не работеше",
                "🔵 Анализ: Какво открихме",
                "🟡 Решение: Какво направихме",
                "🟢 Резултат: Числа с контекст",
                "📸 Доказателство: Screenshots",
                "💬 Цитат: Мнение на клиента",
              ] : [
                "🔴 Problem: What wasn't working",
                "🔵 Analysis: What we found",
                "🟡 Solution: What we did",
                "🟢 Result: Numbers with context",
                "📸 Proof: Screenshots",
                "💬 Quote: Client opinion",
              ]).map((item, i) => (
                <div key={i} className="text-sm text-foreground">{item}</div>
              ))}
            </div>
          </div>
        </AccordionSection>

        {/* ── 4. Vocabulary ────────────────────────────────────── */}
        <AccordionSection
          id="vocabulary"
          icon={<Quote className="h-5 w-5 text-purple-500" />}
          title={content.sections.vocabulary.title}
          subtitle={content.sections.vocabulary.subtitle}
        >
          <div className="mb-4 rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
            <p className="text-sm text-muted-foreground italic">
              {isBg
                ? "Правило #1: Говори с клиента на неговия език, не на твоя. Жаргонът показва знание. Ясният език показва уважение. Клиентите купуват от хора, които разбират проблема им — не от хора, които звучат интелигентно."
                : "Rule #1: Talk to the client in their language, not yours. Jargon shows knowledge. Clear language shows respect. Clients buy from people who understand their problem — not from people who sound intelligent."}
            </p>
          </div>

          <div className="space-y-3">
            {jargonToHuman.map((item, i) => (
              <div key={i} className={`rounded-xl border ${item.color.split(" ")[0]} bg-card p-4`}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className={`text-xs font-bold px-2 py-1 rounded-full border ${item.color}`}>
                    {item.jargon}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      {isBg ? "Език на клиента" : "Client language"}
                    </p>
                    <p className="text-sm text-foreground font-medium">
                      {item.human[locale as "bg" | "en"]}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      {isBg ? "Как да го използваш" : "How to use it"}
                    </p>
                    <p className="text-xs text-muted-foreground italic leading-relaxed">
                      {item.example[locale as "bg" | "en"]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AccordionSection>

        {/* ── 5. Technical terms ───────────────────────────────── */}
        <AccordionSection
          id="terms"
          icon={<BookOpen className="h-5 w-5 text-indigo-500" />}
          title={content.sections.terms.title}
          subtitle={content.sections.terms.subtitle}
        >
          <div className="space-y-4">
            {technicalTerms[locale as "bg" | "en"].map((term, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`text-xs font-bold px-2.5 py-1 rounded-full bg-muted/60 ${term.color}`}>
                    {term.term}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{term.full}</p>
                </div>

                <p className="text-sm text-foreground mb-4 leading-relaxed font-medium">
                  {term.simple}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-lg border border-rose-500/20 bg-rose-500/5 px-3 py-2.5">
                    <p className="text-[10px] font-bold text-rose-400 uppercase tracking-wider mb-1">
                      {isBg ? "Грешно (объркващо)" : "Wrong (confusing)"}
                    </p>
                    <p className="text-xs text-muted-foreground italic">{term.wrong}</p>
                  </div>
                  <div className="rounded-lg border border-teal-500/20 bg-teal-500/5 px-3 py-2.5">
                    <p className="text-[10px] font-bold text-teal-400 uppercase tracking-wider mb-1">
                      {isBg ? "Правилно (убедително)" : "Correct (convincing)"}
                    </p>
                    <p className="text-xs text-foreground italic">{term.right}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AccordionSection>

        {/* ── Understanding check ──────────────────────────────── */}
        <div className="rounded-2xl border border-border bg-muted/20 p-6 sm:p-8">
          <div className="flex items-start gap-3 mb-6">
            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-foreground text-lg">
                {isBg ? "Провери разбирането си" : "Check your understanding"}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {isBg
                  ? "Ако можеш да отговориш на тези въпроси — готов си за първата среща с клиент."
                  : "If you can answer these questions — you're ready for the first client meeting."}
              </p>
            </div>
          </div>
          <ol className="space-y-3">
            {(isBg ? [
              "Клиентът казва: 'Имаме SEO.' Какво е следващото ти изречение?",
              "Как ще покажеш нагледно, че клиентът е невидим за AI — без PowerPoint?",
              "Опиши GEO на клиент, използвайки само думи, които той разбира. (Без жаргон.)",
              "Какво е минималното, което трябва да имаш в портфолиото си преди първата платена среща?",
              "Клиентът пита: 'Колко ще трае да видим резултати?' — Какво казваш?",
            ] : [
              "The client says: 'We have SEO.' What is your next sentence?",
              "How will you show concretely that the client is invisible to AI — without PowerPoint?",
              "Describe GEO to a client using only words they understand. (No jargon.)",
              "What is the minimum you need in your portfolio before the first paid meeting?",
              "The client asks: 'How long until we see results?' — What do you say?",
            ]).map((q, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl bg-card border border-border/60 p-4">
                <span className="font-bold text-primary shrink-0 text-sm">{i + 1}.</span>
                <p className="text-sm text-foreground leading-relaxed">{q}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* ── Back to learning path ────────────────────────────── */}
        <div className="text-center pt-4">
          <Link
            href={`/${locale}/tutorials`}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted/50 transition-colors"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            {isBg ? "Обратно към учебния маршрут" : "Back to the learning path"}
          </Link>
        </div>
      </div>
    </div>
  );
}
