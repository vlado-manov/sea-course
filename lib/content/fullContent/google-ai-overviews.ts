export const googleAiOverviewsContent = {
  slug: "google-ai-overviews",
  toc: [
    { id: "what-is-aio", text: "Какво е AI Overview и как работи?", level: 2 },
    { id: "analogy", text: "Аналогията: Рецензентът, не авторът", level: 2 },
    { id: "how-aio-selects", text: "Как AI Overview избира какво да включи", level: 2 },
    { id: "triggers", text: "Какво задейства AI Overview?", level: 2 },
    { id: "optimization", text: "Как да оптимизираш за AI Overview", level: 2 },
    { id: "paradox", text: "Парадоксът: AI Overview може да намали трафика", level: 2 },
    { id: "tracking", text: "Как да следим AI Overview появяванията", level: 2 },
    { id: "by-business-type", text: "Стратегии по тип бизнес", level: 2 },
    { id: "tools", text: "Инструменти", level: 2 },
    { id: "checklist", text: "Пълен чеклист", level: 2 },
  ],
  content: {
    bg: `## Какво е AI Overview и как работи? {#what-is-aio}

**Google AI Overview** (преди познато като SGE — Search Generative Experience) е функция на Google Search, която показва AI-генерирано резюме в горната част на страницата с резултати — над класическите органични резултати.

AI Overview се появи масово в Google Search от май 2024 г. Към 2025 г. **40-50% от информационните заявки** в Google задействат AI Overview.

**Как изглежда:**

Когато потърсиш "Как работи GEO оптимизацията?", вместо само 10 сини връзки, виждаш:
1. **AI Overview кутия** (горна, синьо-лилава рамка) — AI-генериран отговор от 150-400 думи
2. **Source бубъли** — малки иконки на сайтовете, от които е синтезиран отговорът (обикновено 3-8 сайта)
3. Под AI Overview — стандартните органични резултати

**Ключово:** Потребителят получава отговора директно. Може да не кликне никъде.

---

## Аналогията: Рецензентът, не авторът {#analogy}

### Класическото Google търсене: Книжарницата

Влизаш в книжарница. Питаш: "Имате ли книги за AI маркетинг?" Продавачът ти показва рафта. Виждаш 10 книги. Ти избираш коя да вземеш. Може да вземеш всяка — или никоя.

**Ти (потребителят) избираш.**

### Google AI Overview: Рецензентът

Влизаш. Питаш. Рецензентът казва: "Прочетох 200 книги по темата. Ето резюмето на 5-те най-важни: [резюме от 300 думи]." После добавя: "Тези 5 книги ги препоръчвам" (source бубъли).

**Рецензентът избира вместо теб.**

> Целта вече не е само да бъдеш "на рафта" (добра SEO позиция). Целта е да бъдеш сред книгите, от които рецензентът е заимствал.

### Какво означава това за твоя сайт

Преди: 10 резултата → потребителят кликва на #1, понякога #2-3.

Сега: AI Overview → потребителят може изобщо да не кликне (zero-click). Но ако бъдеш цитиран в AI Overview → brand recognition + авторитет дори без клик.

---

## Как AI Overview избира какво да включи {#how-aio-selects}

### Процесът на синтез (опростено)

\`\`\`
Потребителска заявка
        ↓
Google анализира заявката: Информационна ли е? Заслужава ли AI Overview?
        ↓
Ако да: Търси в Search индекса за релевантни, авторитетни страници
        ↓
Чете и синтезира топ 20-50 резултата
        ↓
Генерира обобщен отговор с inline citations
        ↓
Показва AI Overview + source бубъли (3-8 сайта)
\`\`\`

### Факторите за включване

Google не е официално описал точния алгоритъм, но изследванията показват тези ключови фактори:

**1. Класиране в Top 20 органично (почти задължително)**
Overwhelmingly, сайтовете в AI Overview са и в top 20 органичните резултати. Ако не класираш, трудно ще си в AI Overview.

**2. E-E-A-T авторитет по темата**
Сайтът трябва да е разпознат за авторитетен по конкретната тема. Не е достатъчно общ авторитет.

**3. Директни, структурирани отговори**
AI Overview предпочита съдържание, което директно отговаря на въпроса — не разказва история, не слага увод. Answer-First формат.

**4. FAQPage Schema**
Страниците с FAQPage Schema са значително по-склонни да се включат в AI Overview за въпросите от FAQ секцията.

**5. Factual Density (фактологична плътност)**
Конкретни числа, дати, изследвания, специфични твърдения.

---

## Какво задейства AI Overview? {#triggers}

AI Overview НЕ се появява при всяка заявка. Задейства се при:

### Заявки, склонни да задействат AI Overview

| Тип заявка | Пример | Вероятност |
|-----------|--------|-----------|
| Информационни (Какво е...) | "Какво е GEO оптимизация?" | Много висока |
| Как-да (How-to) | "Как да добавя Schema маркап?" | Много висока |
| Сравнителни (X vs Y) | "SEO vs GEO — разлики" | Висока |
| Дефиниционни | "Определение на Entity SEO" | Висока |
| Изследователски | "Кои са стратегиите за AI видимост?" | Средна |
| Препоръчващи | "Кой е добър SEO специалист?" | Средна |

### Заявки, НЕСКЛО нни да задействат AI Overview

| Тип заявка | Пример | Защо не |
|-----------|--------|---------|
| Навигационни | "Facebook login" | Потребителят иска конкретен сайт |
| Транзакционни (покупка) | "Купи iPhone 16" | Google пренасочва към Shopping |
| Местни | "Пицария до мен" | Google показва Local Pack |
| Много конкурентни комерсиални | "Застраховка кола цени" | Реклами преобладават |
| Новини | "Изборни резултати" | Свежи, динамични данни |

### Важно наблюдение

AI Overview е **по-скоро информационен инструмент**. Ако бизнесът ти е силно транзакционен (e-commerce, SaaS), AI Overview е по-малко релевантен от GEO и LLM оптимизацията. Ако производството на ценно информационно съдържание е ключово за маркетинга ти — AI Overview е много важен.

---

## Как да оптимизираш за AI Overview {#optimization}

### Принцип 1: Answer-First структура (задължителен)

AI Overview взима "direct answer" сегменти — обикновено първите 2-4 изречения на статия или секция.

\`\`\`
❌ Традиционен подход:
"В тази изчерпателна статия ще разгледаме темата за GEO оптимизацията.
GEO е сравнително нова дисциплина, която придоби популярност след
появата на ChatGPT. В следващите секции ще покрием..."

✅ Answer-First подход:
"GEO (Generative Engine Optimization) е практиката за оптимизиране
на уеб съдържание за да се цитира от AI системи. Различава се от SEO
по това, че оптимизира за AI отговори, не за Search позиция."
\`\`\`

Правило: **Директният отговор трябва да е в първите 150 думи.**

### Принцип 2: H2/H3 заглавия като въпроси

AI Overview търси структурирани отговори. Когато H2 е формулиран като въпрос, AI може директно да "свърже" потребителска заявка с твоята секция:

\`\`\`
❌ Слабо: "Предимства на Schema маркапа"
✅ Силно: "Как Schema маркапът помага на AI системите?"

❌ Слабо: "GEO техники"
✅ Силно: "Кои са най-ефективните GEO техники за 2025?"
\`\`\`

### Принцип 3: Concise, цитируеми параграфи

AI Overview цитира конкретни параграфи, не цели статии. Всеки параграф трябва да е:
- Самостоятелен (разбираем без контекст)
- Кратък (3-5 изречения)
- Фактически богат (с числа, дати, конкретика)

### Принцип 4: FAQPage Schema (задължителна)

Виж урока за Structured Data за детайли. FAQPage Schema директно увеличава вероятността за включване в AI Overview при FAQ въпросите.

### Принцип 5: Comprehensive coverage (Пълно тематично покритие)

AI Overview предпочита сайтове, покриващи темата изчерпателно. Статия от 3000 думи с 15 FAQ въпроса > статия от 500 думи.

Обаче: информационна плътност > обем. По-добре 1500 думи с висока плътност, отколкото 3000 думи с "fluffy" съдържание.

### Принцип 6: Актуалност на съдържанието

  AI Overview за time-sensitive теми (технологии, AI, здраве) предпочита ново съдържание. Актуализирай ключовите статии на 6-месечна база и обновявай \`dateModified\` в Schema.

## Парадоксът: AI Overview може да намали трафика {#paradox}

### Проблемът с Zero-Click

Ако AI Overview отговаря на въпроса напълно — потребителят няма причина да кликне към твоя сайт. Той получи отговора. Задоволен е.

Данните показват: при заявки с AI Overview, CTR (Click-Through Rate) към органичните резултати спада средно с **25-35%**.

### Три сценария

**Сценарий А: Ти си в AI Overview, но малко кликания**
- Плюс: Brand recognition, авторитет, сигнал за AI системите
- Минус: По-малко директен трафик
- Нетен ефект: Положителен дългосрочно (brand), отрицателен краткосрочно (трафик)

**Сценарий Б: Не си в AI Overview, конкурентите са**
- Клиентите получават отговорите от конкурентите
- Без brand recognition за теб
- Нетен ефект: Отрицателен и дългосрочно

**Сценарий В: AI Overview не се задейства за твоите заявки**
- Транзакционни заявки → по-рядко AI Overview
- За тях стандартното SEO остава критично
- Нетен ефект: Стандартна SEO стратегия е достатъчна

### Препоръката

За **информационни/образователни сайтове**: оптимизирай агресивно за AI Overview — brand building е важен.

За **e-commerce/транзакционни сайтове**: фокусирай се повече на Shopping AI (виж AI Commerce урока) и заявки без AI Overview.

За **услуги/B2B сайтове**: оптимизирай за AI Overview на информационните теми (блог, ресурси), но основните приходни заявки ("счетоводни услуги Sofia") рядко задействат AI Overview.

---

## Как да следим AI Overview появяванията {#tracking}

### Метод 1: Google Search Console (Безплатен)

1. Влез в [Search Console](https://search.google.com/search-console)
2. Performance → Search Results
3. Filter: Search type = "Web"
4. Провери дали виждаш "AI Overviews" като Feature колона

**Важно:** Google Search Console показва impressions и clicks само за AI Overview, когато твоят сайт е цитиран в него.

### Метод 2: Ръчно тестване (Безплатен)

1. Отвори Google (в incognito за да избегнеш персонализацията)
2. Потърси 10-15 ключови заявки за твоя бизнес
3. Провери дали AI Overview се появява
4. Ако да — твоят сайт ли е в source бубълите?
5. Запиши в Google Sheets: заявка / AI Overview (Да/Не) / Ти цитиран (Да/Не)

### Метод 3: SE Ranking (Платен, ~$55/мес)

SE Ranking проследява AI Overview позиции за конкретни ключови думи. Показва кога AI Overview се появява и кой е цитиран.

### Метод 4: Semrush AI Overview Tracking (~$130/мес)

Semrush добави AI Overview tracking. По-скъп, но по-комплексен.

### Месечен мониторинг протокол

Всеки месец: ръчно тествай 15-20 ключови заявки. Запиши:
- AI Overview появи ли се?
- Ти ли си в Source бубълите?
- Кои конкуренти са?
- Какъв процент от AI Overview отговора покрива твоя тема?

---

## Стратегии по тип бизнес {#by-business-type}

### За локален бизнес (услуги в конкретен град)

**Реалност:** "Зъболекар Пловдив" рядко задейства AI Overview (Google показва Local Pack вместо това).

**Стратегия:** Фокус върху Google Business Profile + Local SEO. AI Overview е по-важен за общи информационни въпроси ("Как се лекува кариес?") — там може да демонстрираш авторитет.

### За B2B услуги (консултанти, агенции)

**Реалност:** "AI SEO консултант" може да задейства AI Overview, особено при информационни варианти ("Какво прави AI SEO консултант?").

**Стратегия:** Богато информационно съдържание по темите на услугите. Всяка статия = потенциална AI Overview inclusion. Демонстрира авторитет пред потенциални клиенти дори без клик.

### За e-commerce

**Реалност:** "Купи маратонки Nike" не задейства AI Overview. Но "Как да изберем правилния размер маратонки?" — задейства.

**Стратегия:** Информационни "buyer's guide" статии за AI Overview, Product Schema за Google Shopping AI. Двустранна стратегия.

### За образователни платформи (като тази)

**Реалност:** Огромен потенциал. "Какво е GEO?", "Как работи AI SEO?" — всички са Information queries с висока AI Overview честота.

**Стратегия:** Всяка страница/урок = потенциален AI Overview source. Answer-First структура, FAQPage Schema, и изчерпателно покритие са ключови.

---

## Инструменти {#tools}

| Инструмент | Употреба | Цена |
|-----------|---------|------|
| Google Search Console | AI Overview tracking (безплатен) | Безплатен |
| Google Search (incognito) | Ръчно тестване | Безплатен |
| SE Ranking | Автоматичен AI Overview tracking | ~$55/мес |
| Semrush | Комплексен AI tracking | ~$130/мес |
| Ahrefs | SERP features tracking | ~$99/мес |
| BrightEdge | Enterprise AI tracking | Enterprise |

---

## Пълен чеклист {#checklist}

### Съдържание
- [ ] Директен отговор в първите 150 думи на всяка ключова страница
- [ ] H2/H3 заглавия формулирани като въпроси
- [ ] Всеки параграф е самостоятелен и цитируем (3-5 изречения)
- [ ] Минимум 2 конкретни статистики с посочен извор
- [ ] Пълно тематично покритие (>1500 думи за важни теми)

### Schema
- [ ] FAQPage Schema с минимум 5 въпроса
- [ ] Article Schema с актуален dateModified
- [ ] Author Schema с реален профил

### Технически
- [ ] Страницата се класира в Top 20 органично за заявката
- [ ] robots.txt позволява GoogleExtendedBot
- [ ] Страницата се зарежда под 3 секунди

### Мониторинг
- [ ] Google Search Console — AI Overview appearing настроен
- [ ] Месечен ръчен тест на 15-20 заявки`,

    en: `## What Is AI Overview and How Does It Work? {#what-is-aio}

**Google AI Overview** (previously known as SGE — Search Generative Experience) is a Google Search feature showing an AI-generated summary at the top of results — above classic organic results.

AI Overview rolled out widely in May 2024. By 2025, **40-50% of informational queries** in Google trigger AI Overview.

**What it looks like:** When you search "How does GEO optimization work?", instead of just 10 blue links, you see:
1. **AI Overview box** (top, blue-purple border) — AI-generated answer of 150-400 words
2. **Source bubbles** — small site icons the answer was synthesized from (usually 3-8 sites)
3. Below AI Overview — standard organic results

**Key:** The user gets the answer directly. They may not click anywhere.

---

## The Analogy: The Reviewer, Not the Author {#analogy}

### Classic Google search: The bookstore

You walk in. You ask: "Do you have books on AI marketing?" The clerk shows you the shelf. You see 10 books. You choose which to take.

**You (the user) choose.**

### Google AI Overview: The reviewer

You walk in. You ask. The reviewer says: "I read 200 books on the topic. Here's the summary of the 5 most important: [300-word summary]." Then adds: "I recommend these 5" (source bubbles).

**The reviewer chooses instead of you.**

> The goal is no longer just to be "on the shelf" (good SEO position). The goal is to be among the books the reviewer borrowed from.

---

## How AI Overview Selects What to Include {#how-aio-selects}

Key inclusion factors (from research, not officially confirmed by Google):

1. **Ranking in Top 20 organically (nearly mandatory)** — Overwhelmingly, sites in AI Overview also rank in top 20 organically
2. **E-E-A-T authority on the topic** — must be recognized as authoritative on this specific topic
3. **Direct, structured answers** — Answer-First format; no story-telling, no lengthy intros
4. **FAQPage Schema** — pages with FAQPage Schema are significantly more likely to appear in AI Overview
5. **Factual density** — specific numbers, dates, research, concrete claims

---

## What Triggers AI Overview? {#triggers}

AI Overview does NOT appear for every query. It triggers for:

**High likelihood:** Informational ("What is GEO?"), How-to ("How do I add Schema?"), Comparative ("SEO vs GEO differences"), Definitional ("Definition of Entity SEO")

**Low likelihood:** Navigational ("Facebook login"), Transactional ("Buy iPhone 16"), Local ("Pizza near me"), Breaking news

**Key insight:** AI Overview is primarily an **informational tool**. If your business is highly transactional (e-commerce, SaaS), AI Overview matters less than GEO and LLM optimization. If informational content production is key to your marketing — AI Overview is very important.

---

## How to Optimize for AI Overview {#optimization}

**Principle 1: Answer-First structure (mandatory)**
Direct answer must be in the first 150 words. AI Overview takes "direct answer" segments — usually the first 2-4 sentences of an article or section.

**Principle 2: H2/H3 headings as questions**
When H2 is formulated as a question, AI can directly match a user query to your section.

**Principle 3: Concise, citable paragraphs**
Each paragraph: self-contained, 3-5 sentences, factually rich. AI Overview cites specific paragraphs, not whole articles.

**Principle 4: FAQPage Schema (mandatory)**
See the Structured Data tutorial for details. FAQPage Schema directly increases AI Overview inclusion likelihood.

**Principle 5: Comprehensive topic coverage**
AI Overview prefers sites with exhaustive coverage. But: information density > volume.

**Principle 6: Content freshness**
For time-sensitive topics, update key articles every 6 months and update \`dateModified\` in Schema.

---

## The Paradox: AI Overview Can Reduce Traffic {#paradox}

If AI Overview fully answers the question — the user has no reason to click to your site.

Data shows: for queries with AI Overview, CTR to organic results drops by **25-35% on average**.

**Three scenarios:**
- **In AI Overview:** Brand recognition + authority, but less direct traffic. Net: positive long-term, negative short-term
- **Not in AI Overview, competitors are:** Clients get answers from competitors, no brand recognition for you. Net: negative long-term
- **AI Overview doesn't trigger for your queries:** Transactional queries rarely get AI Overview. Standard SEO remains sufficient

**Recommendation by business type:**
- Informational/educational sites: optimize aggressively for AI Overview — brand building matters
- E-commerce/transactional: focus more on Shopping AI and non-AI-Overview queries
- Services/B2B: optimize informational content for AI Overview, core revenue queries rarely trigger it

---

## How to Track AI Overview Appearances {#tracking}

1. **Google Search Console** (free) — Performance → Search Results → check for AI Overviews feature column
2. **Manual testing** (free) — incognito Google search, test 10-15 key queries monthly, record in Google Sheets
3. **SE Ranking** (~$55/mo) — automated AI Overview tracking per keyword
4. **Semrush** (~$130/mo) — comprehensive AI tracking

---

## Tools {#tools}

| Tool | Use | Price |
|------|-----|-------|
| Google Search Console | AI Overview tracking | Free |
| Google Search (incognito) | Manual testing | Free |
| SE Ranking | Automated AI Overview tracking | ~$55/mo |
| Semrush | Comprehensive AI tracking | ~$130/mo |

---

## Complete Checklist {#checklist}

### Content
- [ ] Direct answer in first 150 words of every key page
- [ ] H2/H3 headings as questions
- [ ] Every paragraph self-contained and citable (3-5 sentences)
- [ ] Minimum 2 specific statistics with cited source

### Schema
- [ ] FAQPage Schema with minimum 5 Q&As
- [ ] Article Schema with current dateModified
- [ ] Author Schema with real profile

### Technical
- [ ] Page ranks in Top 20 organically for the target query
- [ ] robots.txt allows GoogleExtendedBot
- [ ] Page loads under 3 seconds

### Monitoring
- [ ] Google Search Console — AI Overview tracking set up
- [ ] Monthly manual test of 15-20 queries`,
  },
  faq: [
    {
      question: {
        bg: "Мога ли да поискам сайтът ми да НЕ се появява в AI Overview?",
        en: "Can I request my site NOT appear in AI Overview?",
      },
      answer: {
        bg: "Да. Google предоставя механизъм за opt-out: можеш да добавиш meta tag <meta name='robots' content='nosnippet'> или <meta name='googlebot' content='nosnippet'> за конкретни страници. Обаче: nosnippet блокира и Featured Snippets и обикновените SERP описания. По-прецизен контрол: robots.txt директива Disallow за Google-Extended бот, блокирайки само AI Overview без да пречиш на стандартното индексиране.",
        en: "Yes. Google provides an opt-out mechanism: add <meta name='robots' content='nosnippet'> or <meta name='googlebot' content='nosnippet'> for specific pages. However: nosnippet also blocks Featured Snippets and regular SERP descriptions. More precise control: robots.txt Disallow for Google-Extended bot, blocking only AI Overview without interfering with standard indexing.",
      },
    },
    {
      question: {
        bg: "AI Overview взима ли трафик от сайта ми?",
        en: "Does AI Overview take traffic from my site?",
      },
      answer: {
        bg: "Отчасти. При заявки с AI Overview CTR към органичните резултати намалява средно с 25-35%. Но ако ТИ си цитиран в AI Overview — получаваш brand recognition и доверие, което може да доведе до директни branded търсения по-късно. Компаниите, НЕ цитирани в AI Overview докато конкурентите са, губят и трафик, И brand visibility. По-добре да бъдеш в AI Overview (с по-малко кликания) отколкото изобщо да не те виждат.",
        en: "Partly. For queries with AI Overview, CTR to organic results decreases by 25-35% on average. But if YOU are cited in AI Overview — you get brand recognition and trust, which can lead to direct branded searches later. Companies NOT cited in AI Overview while competitors are, lose both traffic AND brand visibility. Better to be in AI Overview (with fewer clicks) than not be seen at all.",
      },
    },
    {
      question: {
        bg: "Трябва ли да имам позиция #1 в Google за да бъда в AI Overview?",
        en: "Do I need position #1 in Google to be in AI Overview?",
      },
      answer: {
        bg: "Не задължително #1, но трябва да класираш в топ 10-20. Изследванията показват, че ~80% от сайтовете в AI Overview са и в органичните топ 10. Останалите 20% са в позиции 11-20. Сайт на позиция #25 почти никога не се появява в AI Overview. Важно изключение: ако сайтът е с изключително висок авторитет по темата (Wikipedia, официални gov.bg сайтове), може да се включи дори без добра позиция за конкретната заявка.",
        en: "Not necessarily #1, but you need to rank in top 10-20. Research shows ~80% of sites in AI Overview also rank in organic top 10. The other 20% are in positions 11-20. A site at position #25 almost never appears in AI Overview. Important exception: if the site has exceptionally high authority on the topic (Wikipedia, official government sites), it may be included even without a good position for the specific query.",
      },
    },
    {
      question: {
        bg: "AI Overview различен ли е за различните страни и езици?",
        en: "Is AI Overview different for different countries and languages?",
      },
      answer: {
        bg: "Да. AI Overview е наличен в повечето страни, но не универсално. За България: AI Overview е активен, но покритието е по-ниско от US/UK (по-малко заявки задействат AI Overview на български). Оптимизацията е валидна за двата езика — ако имаш двуезичен сайт (BG + EN), English съдържанието ти има значително по-висок AI Overview потенциал поради размера на English LLM обучителните данни.",
        en: "Yes. AI Overview is available in most countries but not universally. For the US/UK market: very high coverage (40-50%+ of informational queries). Optimization is valid for both languages — if you have a bilingual site (BG + EN), English content has significantly higher AI Overview potential due to the size of English LLM training data.",
      },
    },
  ],
  officialLinks: [
    {
      label: "Google AI Overviews — помощна документация",
      url: "https://support.google.com/websearch/answer/14901683",
      desc: {
        bg: "Официалното Google обяснение на AI Overviews",
        en: "Official Google explanation of AI Overviews",
      },
    },
    {
      label: "Google Search Central — AI Overviews за SEO",
      url: "https://developers.google.com/search/docs/appearance/ai-overviews",
      desc: {
        bg: "Официалните препоръки за оптимизация за AI Overviews",
        en: "Official optimization recommendations for AI Overviews",
      },
    },
    {
      label: "Google Search Console",
      url: "https://search.google.com/search-console",
      desc: {
        bg: "Следене на AI Overview appearances",
        en: "Track AI Overview appearances",
      },
    },
  ],
  relatedSlugs: ["geo-optimization", "llm-optimization", "structured-data", "technical-seo-audit"],
};
