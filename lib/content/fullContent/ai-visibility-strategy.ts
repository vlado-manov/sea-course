export const aiVisibilityStrategyContent = {
  slug: "ai-visibility-strategy",
  toc: [
    { id: "what-is-ai-visibility", text: "Какво е AI Visibility?", level: 2 },
    { id: "visibility-analogy", text: "Аналогията: GPS координати vs всяка карта", level: 2 },
    { id: "five-dimensions", text: "Петте измерения на AI Visibility", level: 2 },
    { id: "measure-now", text: "Как да измерим AI Visibility сега", level: 2 },
    { id: "visibility-score", text: "AI Visibility Score — как да изчислим", level: 2 },
    { id: "priority-framework", text: "Стратегията: кое да оправим първо", level: 2 },
    { id: "monitoring-tools", text: "Инструменти за мониторинг", level: 2 },
    { id: "timeline", text: "Реалистична времева линия", level: 2 },
    { id: "checklist", text: "Пълен чеклист", level: 2 },
  ],
  content: {
    bg: `## Какво е AI Visibility? {#what-is-ai-visibility}

**AI Visibility** е степента, до която бизнес, марка или специалист е разпознаван, цитиран и препоръчван от AI системи при релевантни запитвания.

Това е различно от SEO видимостта по фундаментален начин:

| SEO видимост | AI Visibility |
|-------------|--------------|
| Позиция в Google резултатите | Познаваемост в AI отговорите |
| Измерва се с ranking | Измерва се с citation rate |
| Зависи от PageRank + сигнали | Зависи от авторитет + структура + entity |
| Резултат: потребителят кликва | Резултат: AI те споменава (с или без клик) |
| Работи за конкретни ключови думи | Работи за теми и категории |
| Бърз ефект (дни–седмици) | По-бавен ефект (месеци) |

**Защо е важна различно:**

SEO видимостта казва: "Имам добра позиция". AI Visibility казва: "AI системата ме познава и ме препоръчва на хора, търсещи моята услуга — дори ако те никога не правят традиционно Google търсене."

С нарастването на AI-базираното търсене (40%+ от заявките в Google вече включват AI Overview), AI Visibility се превръща в **паралелен и все по-важен канал** за видимост.

---

## Аналогията: GPS координати vs маркиран на всяка карта {#visibility-analogy}

### Проблемът с "GPS координатите"

Представи си малък ресторант в центъра на Sofia. Той съществува. Има адрес. GPS координатите му са точни. Ако потърсиш точния му адрес в Google Maps — ще го намериш.

Но ако питаш GPS навигацията "заведи ме до добър ресторант за бизнес обяд наблизо" — ресторантът не се появява. Защото:
- Не е маркиран в Google Maps с правилната категория
- Няма отзиви
- Снимките липсват
- Описанието е непълно

**GPS координатите (=уебсайт с добро SEO) са необходими, но не достатъчни.** Трябва да си "маркиран на всяка карта" — Google Maps, Apple Maps, Yelp, и всяка AI платформа.

### Три нива на присъствие

**Ниво 1 — GPS координати (Съществуваш, но не те намират):**
- Имаш уебсайт
- Класираш се за някои ключови думи
- Но AI системите не те "познават" като entity
- Резултат: традиционен SEO трафик, нулева AI видимост

**Ниво 2 — Маркиран на основните карти (Намират те при конкретно търсене):**
- Google Business Profile верифициран
- Organization Schema на сайта
- Perplexity те цитира при директни заявки за твоята услуга
- Резултат: локална AI видимост, основни цитирания

**Ниво 3 — Маркиран навсякъде (Препоръчват те проактивно):**
- Пълна entity мрежа (Wikidata, медии, авторитетни профили)
- Тематичен авторитет по ключовите теми
- ChatGPT и Gemini те познават и препоръчват
- Резултат: пълна AI Visibility — цитиран при информационни, съветни И препоръчващи заявки

> **Целта на AI Visibility Strategy:** да те придвижи от Ниво 1 към Ниво 3 систематично и измеримо.

---

## Петте измерения на AI Visibility {#five-dimensions}

AI Visibility не е единичен показател — тя е съставна от пет различни измерения, всяко от които може да е силно или слабо независимо от останалите.

### Измерение 1: Познаваемост (Awareness)

**Въпрос:** "AI системите знаят ли кой си?"

**Как се измерва:** Питай ChatGPT "Разкажи ми за [бранд]" — получаваш ли смислен отговор?

**Зависи от:** Entity SEO (станция 4) — Knowledge Graph, sameAs мрежа, Organization Schema

**Пример:**
- Слабо: ChatGPT отговаря "Нямам информация за тази компания"
- Добро: ChatGPT дава точно описание, правилен уебсайт, правилни услуги

### Измерение 2: Цитируемост (Citability)

**Въпрос:** "AI системите цитират ли те при тематични заявки?"

**Как се измерва:** Тествай 10 нишови заявки в Perplexity — колко пъти се появяваш в Sources?

**Зависи от:** GEO оптимизация (станция 3) — структура, FAQ, статистики, свежест

**Пример:**
- Слабо: 0 от 10 заявки
- Добро: 4–6 от 10 заявки

### Измерение 3: Препоръчваемост (Recommendability)

**Въпрос:** "AI системите препоръчват ли те при директни препоръчващи заявки?"

**Как се измерва:** Питай ChatGPT "Кой е добър [твоята специализация] в [твоят град]?" — появяваш ли се?

**Зависи от:** Комбинация от entity авторитет + GEO + LLM оптимизация

**Пример:**
- Слабо: ChatGPT изброява конкуренти, не те включва
- Добро: ChatGPT те споменава сред препоръките

### Измерение 4: Точност (Accuracy)

**Въпрос:** "AI системите описват ли те правилно?"

**Как се измерва:** Провери дали AI отговорите за теб са верни — правилни услуги, правилен адрес, правилна специализация

**Зависи от:** NAP consistency, Organization Schema, ясно съдържание на "За нас" страницата

**Пример:**
- Слабо: AI казва, че работиш в грешна категория или дава стар адрес
- Добро: Всички AI описания са точни и актуални

### Измерение 5: Последователност (Consistency)

**Въпрос:** "Появяваш ли се постоянно или само при определени заявки?"

**Как се измерва:** Повтарящо се тестване за 3+ месеца — stable ли е присъствието?

**Зависи от:** Редовно актуализиране на съдържанието, поддържане на entity сигналите

**Пример:**
- Слабо: Появяваш се при някои заявки случайно, при повтаряне изчезваш
- Добро: Постоянно присъствие при релевантните категории заявки

---

## Как да измерим AI Visibility сега {#measure-now}

### Пълен протокол за AI Visibility одит (45 минути)

Подготовка: Подготви Google Sheet с 4 таблици (по една за всяка платформа).

**Блок 1: Платформа Perplexity (15 минути)**

Тествай 15 заявки, разпределени в:
- 5 информационни: "Какво е [основна тема]?"
- 5 практически: "Как да направя [процес от нишата]?"
- 5 препоръчващи: "[Тип специалист/услуга] в [твоят град]"

За всяка заявка запиши:
- Цитиран ли си в Sources? (Да/Не)
- Позиция (1-ва / 2-ра / 3-та / по-надолу)
- Цитат в текста? (Да/Не)

**Блок 2: ChatGPT (10 минути)**

5 заявки:
1. "Разкажи ми за [бранд]" — Познаваемост
2. "Кой е добър [твоята специализация] в [твоят град]?" — Препоръчваемост
3. "Как да направя [основен процес от нишата]?" — Цитируемост
4. "Кои са водещите специалисти по [твоята тема] в България?" — Authority
5. "Препоръчай ми [твоята услуга]" — Препоръчваемост 2

**Блок 3: Google AI Overview (15 минути)**

10 информационни заявки от нишата. За всяка:
- Появява ли се AI Overview?
- Твоят сайт в source бубълите?
- Директно цитиране в текста?

**Блок 4: Точност тест (5 минути)**

Провери 3 AI описания на бизнеса. Са ли точни?
- Правилни услуги?
- Правилен адрес?
- Правилна специализация?
- Актуален уебсайт?

---

## AI Visibility Score — как да изчислим {#visibility-score}

### Скоринг система (100 точки)

**Познаваемост (20 точки)**

| Критерий | Точки |
|----------|-------|
| ChatGPT познава бизнеса и описва точно | 10 |
| Knowledge Panel в Google | 5 |
| Perplexity познава при директно питане | 5 |

**Цитируемост (30 точки)**

| Критерий | Точки |
|----------|-------|
| Perplexity: 5–7 от 15 заявки | 15 |
| Perplexity: 8–10 от 15 заявки | 25 |
| Perplexity: 11+ от 15 заявки | 30 |
| Google AI Overview: 1–3 теми | 5 (бонус) |
| Google AI Overview: 4+ теми | 10 (бонус) |

**Препоръчваемост (25 точки)**

| Критерий | Точки |
|----------|-------|
| ChatGPT те включва при препоръки (с prompt) | 15 |
| ChatGPT те включва без специфичен prompt | 25 |

**Точност (15 точки)**

| Критерий | Точки |
|----------|-------|
| Всички AI описания са точни | 15 |
| Частично точни (1–2 грешки) | 8 |
| Неточни или противоречиви | 0 |

**Последователност (10 точки)**

| Критерий | Точки |
|----------|-------|
| Стабилно присъствие при повторно тестване | 10 |
| Непостоянно присъствие | 5 |

### Интерпретация на Score-а

| Score | Оценка | Следваща стъпка |
|-------|--------|-----------------|
| 0–25 | Невидим | Фокус: Entity SEO + основна GEO структура |
| 26–50 | Начинаещ | Фокус: LLM оптимизация + свежест на съдържанието |
| 51–70 | Видим | Фокус: Разширяване на тематичния авторитет |
| 71–85 | Добре видим | Фокус: Препоръчваемост + конкурентен анализ |
| 86–100 | Отличен | Поддържане + разширяване в нови теми |

---

## Стратегията: кое да оправим първо {#priority-framework}

### Принципът на слабото звено

Представи си верига от 5 звена. Якостта на веригата = якостта на най-слабото звено. Не помага да засилиш звено, което вече е яко — трябва да намериш и поправиш слабото.

Петте станции от учебния маршрут са именно тези звена:

\`\`\`
Станция 1: Основи (AI SEO Basics)
    ↓
Станция 2: LLM Оптимизация (Критерии за цитиране)
    ↓
Станция 3: GEO (Структура за AI отговори)
    ↓
Станция 4: Entity SEO (Дигитален паспорт)
    ↓
Станция 5: AI Visibility Strategy (Стратегия и измерване)
\`\`\`

Ако Станция 4 (Entity SEO) е слабото звено — подобряването на GEO (Станция 3) ще даде ограничени резултати. AI системата не може да препоръча бизнес, когото не "познава".

### Диагностика: Намери слабото звено

\`\`\`
Тест А: Знае ли ChatGPT бизнеса ти?
  Не → Слабо звено: Entity SEO (Станция 4)
  Да ↓

Тест Б: Цитира ли те Perplexity при нишови заявки?
  Не → Слабо звено: GEO / LLM Оптимизация (Станции 2–3)
  Да ↓

Тест В: Препоръчва ли те ChatGPT при директни въпроси?
  Не → Слабо звено: Тематичен авторитет + Медийно присъствие
  Да ↓

Тест Г: Точни ли са AI описанията?
  Не → Слабо звено: NAP consistency + Schema точност
  Да → Фокус: Разширяване и поддръжка
\`\`\`

### Приоритизирана Action Plan

**Ако Score-ът е 0–25 (Невидим):**
1. Google Business Profile верификация (1 ден)
2. Organization Schema на главницата (2 часа)
3. NAP корекция навсякъде (1–2 седмици)
4. Wikidata запис (1 час)
5. sameAs в Schema (1 час)

**Ако Score-ът е 26–50 (Начинаещ):**
1. Преписване на топ 5 страниции в Answer-First формат (1 седмица)
2. FAQ секции с FAQPage Schema навсякъде (3 дни)
3. robots.txt проверка за AI ботове (30 минути)
4. Bing Webmaster Tools регистрация (30 минути)
5. Author Schema на всяка статия (2 часа)

**Ако Score-ът е 51–70 (Видим):**
1. Медийна PR кампания — 3–5 публикации с линк (1–2 месеца)
2. Разширяване на тематичното покритие (нови статии, FAQ)
3. Конкурентен GEO анализ — кои конкуренти те изпреварват?
4. Редовен мониторинг (месечен отчет)

---

## Инструменти за мониторинг {#monitoring-tools}

### Безплатният мониторинг стек

| Инструмент | Какво следи | Честота |
|-----------|------------|---------|
| [Perplexity](https://www.perplexity.ai) | Цитируемост | Месечно |
| [ChatGPT](https://chat.openai.com) | Познаваемост + препоръчваемост | Месечно |
| [Google Search Console](https://search.google.com/search-console) | AI Overview appearances | Седмично |
| [Bing Webmaster Tools](https://www.bing.com/webmasters) | Bing/ChatGPT Browse visibility | Месечно |
| Google Search (Knowledge Panel) | Entity status | Месечно |
| Google Sheets | Tracking и тренд анализ | Постоянно |

### Платените инструменти (при нужда от scale)

| Инструмент | Специфика | Цена |
|-----------|----------|------|
| [SE Ranking](https://seranking.com) | AI Overview tracking + rank | ~$55/мес |
| [Semrush](https://www.semrush.com) | Комплексен мониторинг | ~$130/мес |
| [Kalicube Pro](https://kalicube.com) | Entity + Knowledge Panel | ~$99/мес |
| [Mention.com](https://mention.com) | Brand mentions включително в AI | ~$41/мес |

### Безплатният DIY мониторинг шаблон

Направи Google Sheet с тези листи:

**Лист 1: Monthly Scores**
- Дата, Perplexity Score, ChatGPT Score, AI Overview Score, Accuracy, Общ Score

**Лист 2: Perplexity Tracker**
- Заявка, Месец 1, Месец 2, Месец 3... (✓ = цитиран, ✗ = не)

**Лист 3: ChatGPT Awareness Log**
- Дата, Заявка, Отговор (кратко), Точност (1–5)

**Лист 4: AI Overview Log**
- Заявка, AI Overview? (Да/Не), Твоят сайт? (Да/Не), Позиция

6 месеца данни = ясен тренд на прогрес или застой.

---

## Реалистична времева линия {#timeline}

### Фаза 1: Основи (Месеци 1–2)

**Фокус:** Entity SEO + Техническа оптимизация

**Действия:**
- Google Business Profile верификация и оптимизация
- Organization Schema + sameAs мрежа
- NAP одит и корекции
- robots.txt разрешение за AI ботове
- Bing Webmaster Tools

**Очаквани резултати:**
- Knowledge Panel може да се появи
- Perplexity: 1–3 цитирания при директни заявки за бранда
- ChatGPT: може да познава при директно питане

**AI Visibility Score прогрес:** от 0–15 → 20–35

---

### Фаза 2: Съдържание (Месеци 3–4)

**Фокус:** GEO + LLM оптимизация

**Действия:**
- Answer-First преписване на топ 5 страници
- FAQ секции с FAQPage Schema на всяка страница
- Author Schema и биографии
- Актуализиране на датите на ключови статии
- "Цитируеми факти" блокове в топ съдържанието

**Очаквани резултати:**
- Perplexity: 3–6 цитирания
- Google AI Overview: появяване при 2–4 теми
- ChatGPT: по-точни описания

**AI Visibility Score прогрес:** от 20–35 → 40–55

---

### Фаза 3: Авторитет (Месеци 5–8)

**Фокус:** Медийно присъствие + Тематичен авторитет

**Действия:**
- 3–5 публикации в авторитетни медии с линк
- Участия в подкасти, интервюта
- Разширяване на тематичното покритие (нови статии по свързани теми)
- Изграждане на вътрешно свързване (семантична мрежа)
- Редовен мониторинг и корекции

**Очаквани резултати:**
- Perplexity: 5–9 цитирания
- ChatGPT: споменава при препоръчващи заявки
- AI Overview: стабилно присъствие

**AI Visibility Score прогрес:** от 40–55 → 60–75

---

### Фаза 4: Поддръжка и разширяване (Месец 9+)

**Фокус:** Консистентност + Разширяване в нови теми

**Действия:**
- Месечен AI Visibility одит
- Актуализиране на статиите на 6-месечна база
- Разширяване в свързани теми
- Конкурентен анализ — следене на промени
- Нови медийни публикации

**Очаквани резултати:**
- AI Visibility Score: 75–90+
- ChatGPT препоръчва при директни въпроси
- Perplexity: постоянно присъствие при релевантните теми

---

## Пълен чеклист {#checklist}

### Фаза 1: Измерване (Преди всичко)
- [ ] Проведен AI Visibility одит (45-минутен протокол)
- [ ] Изчислен AI Visibility Score (100-точкова скала)
- [ ] Идентифицирано слабото звено (Тест А–Г)
- [ ] Google Sheets трекер настроен

### Фаза 2: Entity (Ако Score е под 35)
- [ ] Google Business Profile верифициран и пълен
- [ ] Organization Schema на главницата
- [ ] NAP одит и корекции извършени
- [ ] Wikidata запис създаден
- [ ] sameAs мрежа (LinkedIn, Facebook, Wikidata) в Schema
- [ ] robots.txt разрешава AI ботове

### Фаза 3: Съдържание (Ако Score е 35–60)
- [ ] Топ 5 страниции преписани в Answer-First формат
- [ ] FAQ секции с FAQPage Schema на всяка страница
- [ ] Author Schema + биографии на авторите
- [ ] "Цитируеми факти" блокове добавени
- [ ] Bing Webmaster Tools регистрация и верификация

### Фаза 4: Авторитет (Ако Score е 60+)
- [ ] Минимум 3 медийни публикации с линк
- [ ] Редовно актуализиране на ключови статии
- [ ] Месечен мониторинг отчет
- [ ] Конкурентен AI Visibility сравнителен анализ`,

    en: `## What is AI Visibility? {#what-is-ai-visibility}

**AI Visibility** is the degree to which a business, brand, or specialist is recognized, cited, and recommended by AI systems for relevant queries.

This differs from SEO visibility in a fundamental way:

| SEO Visibility | AI Visibility |
|---------------|--------------|
| Position in Google results | Recognition in AI answers |
| Measured by ranking | Measured by citation rate |
| Depends on PageRank + signals | Depends on authority + structure + entity |
| Result: user clicks | Result: AI mentions you (with or without click) |

With AI-based search growing (40%+ of Google queries now include AI Overview), AI Visibility is becoming a **parallel and increasingly important channel** for visibility.

---

## The Analogy: GPS Coordinates vs. On Every Map {#visibility-analogy}

**GPS Coordinates (=website with good SEO):** You exist. Your address is there. If someone searches your exact address — they find you. But if they ask "navigate me to a good nearby restaurant" — you don't appear. GPS coordinates are necessary but not sufficient.

**Three levels:**
- **Level 1:** You exist but AI doesn't find you
- **Level 2:** Found for direct specific searches
- **Level 3:** Recommended proactively — full AI Visibility

> **Goal of AI Visibility Strategy:** Systematically move from Level 1 to Level 3.

---

## The Five Dimensions of AI Visibility {#five-dimensions}

### Dimension 1: Awareness
Can AI systems tell you who the business is? Test: Ask ChatGPT "Tell me about [brand]."

### Dimension 2: Citability
Do AI systems cite you for topical queries? Test: 15 niche queries in Perplexity — how many times in Sources?

### Dimension 3: Recommendability
Do AI systems recommend you for direct recommendation queries? Test: Ask ChatGPT "Who is a good [your specialization] in [your city]?"

### Dimension 4: Accuracy
Do AI systems describe you correctly? Test: Are services, address, specialization accurate in AI answers?

### Dimension 5: Consistency
Do you appear consistently or only occasionally? Test: Repeat testing over 3+ months — is presence stable?

---

## How to Measure AI Visibility Now {#measure-now}

### Full AI Visibility Audit Protocol (45 minutes)

**Block 1: Perplexity (15 minutes)**
Test 15 queries: 5 informational, 5 practical, 5 recommendation. Record: cited in Sources? Position? Cited in text?

**Block 2: ChatGPT (10 minutes)**
5 queries: brand awareness, recommendation, topical question, authority, recommendation 2.

**Block 3: Google AI Overview (15 minutes)**
10 niche informational queries. AI Overview appears? Site in source bubbles?

**Block 4: Accuracy test (5 minutes)**
Check 3 AI descriptions of the business. Are services, address, specialization correct?

---

## AI Visibility Score — How to Calculate {#visibility-score}

**100-point scoring system:**

| Dimension | Max Points | Criteria |
|-----------|-----------|----------|
| Awareness | 20 | ChatGPT knows + describes accurately (10), Knowledge Panel (5), Perplexity awareness (5) |
| Citability | 30 | Perplexity: 5–7/15 queries (15), 8–10 (25), 11+ (30); +5/10 bonus for AI Overview |
| Recommendability | 25 | ChatGPT recommends with prompt (15), without prompt (25) |
| Accuracy | 15 | All accurate (15), partially (8), inaccurate (0) |
| Consistency | 10 | Stable on re-testing (10), inconsistent (5) |

**Score interpretation:**
- 0–25: Invisible → Focus: Entity SEO + basic GEO structure
- 26–50: Beginner → Focus: LLM optimization + content freshness
- 51–70: Visible → Focus: Expand topical authority
- 71–85: Well visible → Focus: Recommendability + competitive analysis
- 86–100: Excellent → Maintain + expand to new topics

---

## Strategy: What to Fix First {#priority-framework}

### The Weakest Link Principle

Imagine a chain of 5 links. The chain's strength = the weakest link's strength. It doesn't help to strengthen a link that's already strong — find and fix the weak one.

The five stations in the learning path are exactly those links. If Entity SEO (Station 4) is the weak link — improving GEO (Station 3) will give limited results. AI can't recommend a business it doesn't "know."

### Diagnostic: Find the Weak Link

\`\`\`
Test A: Does ChatGPT know your business?
  No → Weak link: Entity SEO (Station 4)
  Yes ↓

Test B: Does Perplexity cite you for niche queries?
  No → Weak link: GEO / LLM Optimization (Stations 2–3)
  Yes ↓

Test C: Does ChatGPT recommend you for direct questions?
  No → Weak link: Topical authority + Media presence
  Yes ↓

Test D: Are AI descriptions accurate?
  No → Weak link: NAP consistency + Schema accuracy
  Yes → Focus: Expansion and maintenance
\`\`\`

---

## Monitoring Tools {#monitoring-tools}

### Free Monitoring Stack

| Tool | What it tracks | Frequency |
|------|--------------|-----------|
| [Perplexity](https://www.perplexity.ai) | Citability | Monthly |
| [ChatGPT](https://chat.openai.com) | Awareness + recommendability | Monthly |
| [Google Search Console](https://search.google.com/search-console) | AI Overview appearances | Weekly |
| [Bing Webmaster Tools](https://www.bing.com/webmasters) | Bing/ChatGPT Browse visibility | Monthly |
| Google Search | Knowledge Panel status | Monthly |
| Google Sheets | Tracking and trend analysis | Ongoing |

### Free DIY Monitoring Template

Build a Google Sheet with 4 tabs: Monthly Scores, Perplexity Tracker, ChatGPT Awareness Log, AI Overview Log. 6 months of data = clear progress trend.

---

## Realistic Timeline {#timeline}

**Phase 1 (Months 1–2): Foundation**
Entity SEO + technical optimization. Expected: Knowledge Panel may appear, Perplexity: 1–3 citations. Score: 0–15 → 20–35.

**Phase 2 (Months 3–4): Content**
GEO + LLM optimization. Answer-first rewrites, FAQ sections, Author Schema. Expected: Perplexity 3–6 citations, AI Overview appearances. Score: 20–35 → 40–55.

**Phase 3 (Months 5–8): Authority**
Media presence + topical authority. 3–5 media publications, expanded topic coverage. Expected: Perplexity 5–9 citations, ChatGPT recommends. Score: 40–55 → 60–75.

**Phase 4 (Month 9+): Maintenance**
Consistency + expansion. Monthly audits, content updates, competitive analysis. Expected: Score 75–90+.

---

## Complete Checklist {#checklist}

### Phase 1: Measurement (First)
- [ ] AI Visibility audit completed (45-minute protocol)
- [ ] AI Visibility Score calculated (100-point scale)
- [ ] Weak link identified (Tests A–D)
- [ ] Google Sheets tracker set up

### Phase 2: Entity (If Score < 35)
- [ ] Google Business Profile verified and complete
- [ ] Organization Schema on homepage
- [ ] NAP audit and corrections done
- [ ] Wikidata entry created
- [ ] sameAs network in Schema
- [ ] robots.txt allows AI bots

### Phase 3: Content (If Score 35–60)
- [ ] Top 5 pages rewritten in Answer-First format
- [ ] FAQ sections with FAQPage Schema on every page
- [ ] Author Schema + author bios
- [ ] "Citable facts" blocks added
- [ ] Bing Webmaster Tools registered

### Phase 4: Authority (If Score 60+)
- [ ] At least 3 media publications with link
- [ ] Regular key article updates
- [ ] Monthly monitoring report
- [ ] Competitive AI Visibility comparison analysis`,
  },
  faq: [
    {
      question: {
        bg: "Каква е разликата между AI Visibility Score и SEO ranking?",
        en: "What's the difference between AI Visibility Score and SEO ranking?",
      },
      answer: {
        bg: "SEO ranking е позицията на страницата в Google резултатите — мерим се с конкурентите по конкретна ключова дума. AI Visibility Score е комплексен показател, измерващ колко добре AI системите познават, цитират и препоръчват бизнеса — независимо от позицията. Може да имаш висок SEO rank и нисък AI Visibility Score (ако сайтът е добре оптимизиран за ключови думи, но липсва entity и структура за AI). Или обратното.",
        en: "SEO ranking is the page's position in Google results — we compete against competitors for specific keywords. AI Visibility Score is a composite metric measuring how well AI systems know, cite, and recommend the business — regardless of position. You can have a high SEO rank but low AI Visibility Score (if the site is well keyword-optimized but lacks entity and AI structure), or vice versa.",
      },
    },
    {
      question: {
        bg: "Трябва ли да имам висок AI Visibility Score за всяка заявка или само за ключовите?",
        en: "Do I need a high AI Visibility Score for every query or just key ones?",
      },
      answer: {
        bg: "Само за релевантните. Определи 15–20 '核心' заявки (core queries) — тези, при които твоят идеален клиент ще търси и ще вземе решение. Фокусирай се да се появяваш консистентно при тях. Не се опитвай да покриеш всичко — задълбочеността при ключовите теми е по-ценна от повърхностното присъствие при много теми.",
        en: "Only for relevant ones. Define 15–20 'core queries' — those where your ideal client will search and make a decision. Focus on appearing consistently for these. Don't try to cover everything — depth at key topics is more valuable than shallow presence across many topics.",
      },
    },
    {
      question: {
        bg: "Ако конкурентите ми имат по-висок AI Visibility Score — как да ги настигна?",
        en: "If competitors have higher AI Visibility Score — how do I catch up?",
      },
      answer: {
        bg: "Прегледай кои измерения са им по-силни. Обикновено конкурентите с висока AI Visibility имат: по-стара и авторитетна entity (трудно се настига бързо), по-добро структурирано съдържание (може да се надмине за 2–3 месеца), или повече медийни споменавания (може да се работи активно). Намери измерението, в което конкурентът е само малко по-добър — и изпревари там. Не се опитвай да настигаш всички измерения едновременно.",
        en: "Review which dimensions they're stronger in. Competitors with high AI Visibility typically have: older and more authoritative entity (hard to catch up quickly), better structured content (can be surpassed in 2–3 months), or more media mentions (can be actively worked on). Find the dimension where the competitor is only slightly better — and surpass them there. Don't try to catch up on all dimensions simultaneously.",
      },
    },
    {
      question: {
        bg: "AI Visibility Strategy трябва ли се прилага отново при нови AI системи?",
        en: "Does AI Visibility Strategy need to be reapplied for new AI systems?",
      },
      answer: {
        bg: "Частично. Основните принципи (entity, структура, авторитет) са валидни за всяка AI система — те следват сходна логика. Но специфичните тактики може да се различават. При поява на нова значима AI система (например нов AI Search engine): 1) Провери дали блокираш нейния бот в robots.txt; 2) Тествай текущата видимост; 3) Следи специфичните фактори за тази платформа. Общата стратегия е устойчива; специфичните тактики се адаптират.",
        en: "Partially. The core principles (entity, structure, authority) are valid for any AI system — they follow similar logic. But specific tactics may differ. When a new significant AI system appears: 1) Check if you're blocking its bot in robots.txt; 2) Test current visibility; 3) Follow that platform's specific factors. The overall strategy is durable; specific tactics adapt.",
      },
    },
  ],
  officialLinks: [
    {
      label: "Google Search Console",
      url: "https://search.google.com/search-console",
      desc: {
        bg: "Основен инструмент за следене на AI Overview appearances",
        en: "Primary tool for tracking AI Overview appearances",
      },
    },
    {
      label: "Bing Webmaster Tools",
      url: "https://www.bing.com/webmasters",
      desc: {
        bg: "Критично за ChatGPT Browse видимост",
        en: "Critical for ChatGPT Browse visibility",
      },
    },
    {
      label: "Perplexity AI",
      url: "https://www.perplexity.ai",
      desc: {
        bg: "Основен инструмент за AI Visibility тестване",
        en: "Primary AI Visibility testing tool",
      },
    },
    {
      label: "Google Business Profile",
      url: "https://business.google.com",
      desc: {
        bg: "Управление на GBP — основата на entity",
        en: "GBP management — the foundation of entity",
      },
    },
    {
      label: "Schema.org — Organization",
      url: "https://schema.org/Organization",
      desc: {
        bg: "Schema документация за Organization entity",
        en: "Schema documentation for Organization entity",
      },
    },
  ],
  relatedSlugs: ["entity-seo", "geo-optimization", "llm-optimization", "structured-data"],
};
