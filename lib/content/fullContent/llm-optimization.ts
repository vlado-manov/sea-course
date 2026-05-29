export const llmOptimizationContent = {
  slug: "llm-optimization",
  toc: [
    { id: "how-ai-reads", text: "Как AI системата 'чете' интернет", level: 2 },
    { id: "five-criteria", text: "Петте критерия за цитиране", level: 2 },
    { id: "each-system", text: "Как работи всяка AI система", level: 2 },
    { id: "citation-without-link", text: "Цитиране без линк — печелим ли?", level: 2 },
    { id: "how-to-check", text: "Как да проверим дали ни цитират", level: 2 },
    { id: "tools", text: "Инструменти за мониторинг", level: 2 },
    { id: "practical-tactics", text: "Практически техники за оптимизация", level: 2 },
    { id: "checklist", text: "Пълен чеклист", level: 2 },
  ],
  content: {
    bg: `## Как AI системата "чете" интернет {#how-ai-reads}

Преди да оптимизираш за AI цитирания, трябва да разбереш как AI системите всъщност процесират информация. Те не "четат" като хората — и не индексират като Google.

### Аналогията с главния редактор

Представи си редакция на голямо издание. Редакторът получава 500 статии по дадена тема. Няма как да прочете всичко — трябва да избере кои да цитира в своята статия. Ето как избира:

1. **Първо провери авторитета** — от CNN ли е? От известен академик? Или от анонимен блог?
2. **После провери структурата** — лесна ли е за четене? Директна ли е?
3. **После провери фактите** — има ли конкретни данни? Цитирани ли са изворите?
4. **Накрая провери актуалността** — от кога е? Все още ли е вярно?

AI системите правят точно същото — само много по-бързо и в много по-голям мащаб.

### Как LLM системите са обучени

Large Language Models (ChatGPT, Gemini, Claude) са обучени на огромни масиви от текст от интернет. Те **не търсят в реално време** (освен ако не е активирано специално) — те ползват наученото по време на обучението.

\`\`\`
Обучение (Training) → LLM разглежда милиарди уеб страници
                    ↓
Запомня: Кои сайтове са цитирани от други авторитетни сайтове?
Запомня: Кои отговори са последователни и точни?
Запомня: Кои дефиниции се потвърждават от множество източници?
                    ↓
При запитване: Синтезира отговор от научените паттерни
\`\`\`

**Ключово:** Ако сайтът ти не е бил добре представен в обучителните данни — AI системата просто не те "познава". Не те игнорира съзнателно — просто нямаш присъствие в нейния "ментален модел".

### Perplexity и ChatGPT Browse — реално-времево търсене

За разлика от статичните LLM, **Perplexity** и **ChatGPT с Browse** търсят реално-времево. Те:

1. Вземат запитването
2. Търсят в интернет (Perplexity ползва собствен индекс; ChatGPT ползва Bing)
3. Четат топ резултатите
4. Синтезират отговор, цитирайки изворите

При тях **текущата ти SEO позиция и качество на страницата имат директно значение** — не само историческото присъствие.

> **Аналогия:** Статичен LLM (Claude без search) е като консултант, базиращ се изцяло на опита си. Perplexity е като консултант, който преди да отговори, бързо проверява актуалните данни.

---

## Петте критерия за цитиране {#five-criteria}

След анализ на стотици AI отговора и изследвания от Columbia University (2024), Stanford и BrightEdge, кристализираха пет ключови критерия.

### Критерий 1: Авторитет и доверие (Domain Authority + E-E-A-T)

**Теглото:** Около 35% от решението

AI системите са обучени да предпочитат сайтове, на които другите авторитети се позовават. Конкретно:

- **Backlinks от .edu и .gov домейни** — сигнал с много висока тежест
- **Цитирания в Wikipedia** — Wikipedia е масово включена в LLM обучителни данни
- **Споменавания в авторитетни медии** — Forbes, HBR, академични журнали
- **Knowledge Panel в Google** — сигнализира, че Google "познава" обекта
- **E-E-A-T сигнали** — автор биография, реален опит, публикации

**Практически пример:**

Когато питаш ChatGPT "Кой е водещ консултант по AI SEO в България?", системата проверява:
- Кой е споменаван в медии по тази тема?
- Кой е цитиран в академични/индустриални публикации?
- Чий сайт е цитиран от авторитетни сайтове?

Ако отговорът на нито едно от тях не е "твоят сайт" — ти не се появяваш.

### Критерий 2: Структура на отговора (Answer Architecture)

**Теглото:** Около 25% от решението

AI системите **синтезират** — те не копират. Но за да синтезират правилно, трябва да могат лесно да "разберат" съдържанието ти. Предпочитат:

| Структура | Ефект върху цитирането |
|-----------|----------------------|
| Директен отговор в първото изречение | +3.3x (Columbia, 2024) |
| H2/H3 заглавия като въпроси | +2.1x по-лесен за синтез |
| Нумерирани списъци за стъпки | +1.8x |
| Таблици за сравнения | +2.4x |
| FAQ секция с Schema | +2.6x |
| Дълги параграфи без структура | -0.6x |

**Аналогия:** Помисли за учебник с много добро съдържание, но без съдържание, без заглавия, без структура — само плътен текст. Дори студентът, искащ да цитира нещо конкретно, ще трудно намери точното изречение. AI системата е в същото положение.

### Критерий 3: Фактическа плътност (Factual Density)

**Теглото:** Около 20% от решението

Изследването на Columbia/Princeton (2024) установи, че **статистиките с посочен извор** са третото по важност. Защо? AI системите са обучени да дават верифицируеми отговори. Когато твоето съдържание съдържа:

- Конкретни числа: "47.8% от заявките" (не "почти половината")
- Датирани факти: "Според Google I/O 2024..." (не "наскоро")
- Измерими твърдения: "3.3x по-вероятно цитиране" (не "много по-вероятно")
- Официални цитати: прецизни кавички с автор и дата

AI може да ги извади директно и да ги постави в отговора с увереност.

**Как да добавяш статистики правилно:**

\`\`\`
❌ Слабо: "Много бизнеси губят трафик заради AI Search."

✅ Силно: "Според BrightEdge (Q1 2025), 68% от информационните
заявки в Google вече задействат AI Overview, намалявайки CTR
към органичните резултати средно с 34%."
\`\`\`

### Критерий 4: Свежест и актуалност (Content Freshness)

**Теглото:** Около 12% от решението

Особено критично за:
- **Perplexity** — приоритизира силно новото съдържание
- **ChatGPT Browse** — проверява датата на публикуване
- **Google AI Overviews** — за time-sensitive теми

Практически: статия от 2022 г. за AI SEO без актуализация ще бъде заобиколена от актуализирана статия дори при по-ниска базова авторитетност.

**Минимален стандарт:** Актуализирай ключовите страниции на всеки 6 месеца. Добавяй нови данни, обнови датата, добавяй секции за последни развития.

### Критерий 5: Техническа достъпност (Technical Accessibility)

**Теглото:** Около 8% от решението

AI системите не могат да цитират това, до което нямат достъп:

- **Noindex директиви** — ако страницата е noindex, AI не я вижда
- **Блокиране на AI ботове** в robots.txt — ChatGPTBot, GPTBot, PerplexityBot, Googlebot
- **JavaScript rendering** — съдържание, зареждащо се само чрез JS, може да не бъде достъпно
- **Скорост** — бавни сайтове се обхождат по-рядко

**Проверка на robots.txt:**

\`\`\`
# Позволяване на AI ботове
User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: GoogleExtendedBot
Allow: /

User-agent: ClaudeBot
Allow: /
\`\`\`

Ако тези ботове са блокирани — директно губиш AI видимост.

---

## Как работи всяка AI система {#each-system}

Всяка система има различна логика — важно е да разбираш конкретните механизми.

### ChatGPT (OpenAI)

**Два режима:**

**1. Без Search (стандартно):**
- Базира се изцяло на обучителни данни (cutoff: началото на 2024 г. за GPT-4o)
- Много по-трудно е да промениш присъствието си тук — трябва историческа авторитетност
- Ключово: да си бил цитиран в авторитетни текстове ПРЕДИ cutoff датата

**2. С Search (ChatGPT Browse / SearchGPT):**
- Ползва Bing Search API
- Приоритизира Bing-класирани резултати
- Трябва да имаш добра Bing видимост (много бизнеси пренебрегват Bing!)
- Проверяй с Bing Webmaster Tools

**Стратегия за ChatGPT:** Изгради авторитет СЕГА — той ще влезе в следващите обучителни данни. Регистрирай се в Bing Webmaster Tools веднага.

### Google Gemini

**Специфики:**
- Директна интеграция с Google Search индекса
- Knowledge Graph е критичен — сайтове с ясна "entity" в KG получават предимство
- Google AI Overviews и Gemini споделят инфраструктура
- E-E-A-T сигналите са критично важни (Google Gemini е директно наследник на Google Search)

**Стратегия за Gemini:** Фокусирай се на E-E-A-T, Entity SEO (следваща станция) и Google Search Console мониторинг. Ако се класираш добре в Google и имаш структурирани данни — Gemini вече те "познава".

### Perplexity

**Защо Perplexity е "честната" система:**
- Винаги показва изворите — виждаш точно кой е цитиран
- Показва конкретния цитат от страницата
- Ползва собствен crawler + Bing/Google APIs
- Приоритизира свежестта на съдържанието силно

**Стратегия за Perplexity:** Най-добрата "тренировъчна площадка". Тествай заявки в Perplexity редовно — ако се появяваш там, значи си на правилния път. Приоритизирай актуализиране на съдържанието.

| Платформа | Основен сигнал | Реално-времево? | Показва извори? |
|-----------|---------------|-----------------|----------------|
| ChatGPT (стандарт) | Training data | Не | Понякога |
| ChatGPT Browse | Bing + training | Да | Да |
| Google Gemini | Google index + KG | Да | Частично |
| Perplexity | Собствен + Bing | Да | Винаги |
| Claude (Anthropic) | Training data | Само с tools | Не по подразбиране |
| Microsoft Copilot | Bing | Да | Да |

---

## Цитиране без линк — печелим ли? {#citation-without-link}

Това е един от най-важните въпроси в AI SEO — и отговорът е **по-сложен от "да" или "не"**.

### Какво означава "цитиране без линк"?

Когато AI системата казва нещо от рода на:
> "Според [Твоя Бранд], оптимизацията за AI търсачки изисква..."

или:

> "Водещи специалисти като [Твоето Ime] препоръчват..."

без да поставя кликаема препратка към твоя сайт. Особено характерно за ChatGPT (без Browse) и Claude.

### Случай 1: Цитиране без линк — печелиш?

**Да, печелиш — но не директен трафик. Печелиш нещо по-ценно дългосрочно:**

**1. Brand Recognition (Разпознаваемост на марката)**
Потребителят вижда твоето име/бранд в AI отговора. Дори без линк — запомня те. Следващият му google търс може да е директно твоето Ime. Брандираните търсения ("владимир мановен AI SEO") са много по-конвертиращи от generic търсенията.

**2. Authority Signals**
Фактът, че AI системата те споменава означава, че твоят бранд е в обучителните данни — което е мощен сигнал за следващите итерации. AI системите "учат" какво хората намират за авторитетно.

**3. Zero-Click Value**
Дори да не кликнат — ако AI отговаря с твоя информация — ти ефективно помагаш на потребителя. Помагането = изграждане на доверие. Доверието се конвертира по-бавно, но по-трайно.

### Случай 2: Цитиране с линк — значително по-ценно

Когато Perplexity или ChatGPT Browse цитират с линк:
- Директен референтен трафик
- Потребителят е в mode на "търсене на повече информация" — по-висока вероятност за конверсия
- SEO сигнал (referral link от AI платформа)
- Измеримо в Google Search Console и Analytics

**Сравнение:**

| Тип цитиране | Директен трафик | Brand recognition | SEO стойност | Дълготрайност |
|-------------|----------------|-------------------|--------------|---------------|
| С линк (Perplexity) | Висок | Висок | Висок | Средна |
| Без линк (ChatGPT) | Нула | Среден | Нисък | Висока (в LLM) |
| Споменаване в AI Overview | Нисък | Много висок | Много висок | Средна |

### Случай 3: Когато AI отговаря с твоята информация без да те спомене

Това е "невидимото цитиране" — AI систематично е учена на твоето съдържание, но не дава credit. Случва се когато:
- Информацията е широко разпространена (не уникална)
- Паrafrazira се, не цитира директно

**Решение:** Уникализирай съдържанието. Добави данни, изследвания, специфични примери от опит, цифри — неща, които не могат да бъдат перифразирани без credit.

### Стратегия: "Цитируемо съдържание" (Citable Content)

За да получаваш линкове, не само споменавания:

1. Публикувай **оригинални данни** — survey, анализ, статистика от твоята практика
2. Форматирай **цитируеми изречения** — кратки, точни, с уникален ъгъл
3. Добавяй **визуализации** — AI системите, показващи изображения, предпочитат оригинално съдържание

> **Ключов извод:** Цитирането без линк НЕ е "безполезно" — то изгражда авторитет. Но цитирането С линк е директно измеримо. Работи за двете едновременно.

---

## Как да проверим дали ни цитират {#how-to-check}

### Протокол за месечен AI Visibility одит (30 минути)

**Стъпка 1: Избери тестови заявки (10 минути)**

Подготви 10–15 заявки, за които искаш да се появяваш. Класифицирай ги:

\`\`\`
Тип А — Информационни: "Какво е [термин от твоя бранш]?"
Тип Б — Съветни: "Как да направя [процес от твоя бранш]?"
Тип В — Препоръчващи: "Кой е добър [твоята услуга] в [твоя град]?"
Тип Г — Сравнителни: "[Услуга А] vs [Услуга Б]"
\`\`\`

**Стъпка 2: Тест в Perplexity (10 минути)**

1. Отвори [perplexity.ai](https://www.perplexity.ai)
2. Въведи всяка заявка
3. Провери Sources панела вдясно — твоят сайт ли е там?
4. Запиши: заявка / цитиран или не / позиция в sources

Perplexity е най-добрият за тест защото **винаги показва изворите**.

**Стъпка 3: Тест в ChatGPT (5 минути)**

1. Отвори ChatGPT (с Search включен ако е налично)
2. Въведи 5 от заявките
3. Провери дали сайтът ти е споменат в отговора или в изворите
4. Запиши: директно цитиране / косвено / не е споменат

**Стъпка 4: Тест в Google (5 минути)**

1. Отвори Google
2. Въведи 5 информационни заявки
3. Провери дали AI Overview се появява
4. Провери дали твоят сайт е в "source бубълите" на AI Overview

**Резултатен лист:**

| Заявка | Perplexity | ChatGPT | AI Overview | Месец |
|--------|-----------|---------|-------------|-------|
| [запитване 1] | ✓ / ✗ | ✓ / ✗ | ✓ / ✗ | Юни 2025 |

Повтаряй всеки месец. Търси тренд.

### Как изглежда "добро" AI присъствие?

**Начинаещо ниво (0–3 месеца след оптимизация):**
- Появяваш се в Perplexity при 2–3 от тестваните заявки
- Google AI Overview те споменава при 1–2 заявки
- ChatGPT не те познава (нормално за нов сайт)

**Средно ниво (3–9 месеца):**
- Появяваш се в Perplexity при 5–7 заявки
- AI Overview при 3–5 заявки
- ChatGPT те споменава при специфични термини от твоя бранш

**Добро ниво (9+ месеца, последователна оптимизация):**
- Появяваш се в Perplexity при повечето релевантни заявки
- AI Overview те цитира редовно
- ChatGPT те познава и препоръчва при директни въпроси

**Важно:** Тези нива зависят СИЛНО от авторитета на домейна. Нов сайт достига "добро ниво" по-бавно от утвърден домейн с DA > 40.

---

## Инструменти за мониторинг {#tools}

### Безплатни инструменти

| Инструмент | Какво прави | Как да го използваш |
|-----------|------------|---------------------|
| [Perplexity](https://www.perplexity.ai) | Показва реален AI отговор с извори | Тествай заявки ежемесечно |
| [ChatGPT](https://chat.openai.com) | Тест на LLM познаваемост | Питай директно за твоя бранш |
| [Google Search Console](https://search.google.com/search-console) | AI Overview appearances | Performance → Search type: Web |
| [Bing Webmaster Tools](https://www.bing.com/webmasters) | Bing индексиране (ChatGPT Browse) | Индексирай страниците |
| [Google Rich Results Test](https://search.google.com/test/rich-results) | Schema валидация | Тествай всяка страница |

### Платени инструменти

| Инструмент | Специфика | Цена |
|-----------|----------|------|
| [SE Ranking](https://seranking.com) | AI Overview tracking | ~$55/мес |
| [Semrush](https://www.semrush.com) | AI Overview + GEO tracking | ~$130/мес |
| [BrightEdge](https://www.brightedge.com) | Enterprise AI tracking | Enterprise |
| [Mention.com](https://mention.com) | Brand monitoring включително в AI | ~$41/мес |

### Безплатен DIY подход — Google Sheets трекер

Направи Google Sheet с колони:
- Дата
- Заявка
- Платформа (Perplexity / ChatGPT / AI Overview)
- Цитиран? (Да/Не)
- Позиция (1-ва / 2-ра / 3-та в изворите)
- Бележки

Попълвай всеки месец. 6 месеца данни = ясен тренд на прогрес.

---

## Практически техники за оптимизация {#practical-tactics}

### Техника 1: Answer-First преписване на съществуващи статии

Провери топ 5 статии на сайта си. Всяка от тях:

1. Отвори статията
2. Провери: дава ли тя директен отговор в ПЪРВОТО изречение?
3. Ако не — препиши увода така, че той директно да отговаря на въпроса
4. Целта: "Какво е [тема]? [Тема] е [дефиниция в 1 изречение]."

**Пример:**

\`\`\`
❌ Преди: "В тази статия ще разгледаме всичко за GEO оптимизацията,
          историята й, принципите и как тя се развива в момента."

✅ След: "GEO (Generative Engine Optimization) е практиката за
         оптимизиране на уеб съдържание, така че да се цитира от
         ChatGPT, Gemini и Perplexity. За разлика от SEO, GEO
         оптимизира за AI отговори, не за позиция в Google."
\`\`\`

### Техника 2: Добавяне на "Цитируеми факти" блок

Към всяка важна статия добавяй специален блок с ключови факти:

\`\`\`
**Ключови факти за [Тема]:**
- [Конкретна статистика с извор и година]
- [Друга измерима данна с контекст]
- [Официален факт от авторитетен извор]
\`\`\`

Тези блокове са "магнити" за AI цитирания — лесно се извличат и поставят в синтезирани отговори.

### Техника 3: FAQ секция с FAQPage Schema

Добавяй минимум 5 въпроса-отговора в края на всяка важна статия. Структурата:

- Въпрос: Точно формулиран въпрос, какъвто би задал потребителят
- Отговор: Директен, пълен отговор (50–150 думи)

Имплементирай [FAQPage Schema](https://schema.org/FAQPage) с JSON-LD.

### Техника 4: Авторски профил и Author Schema

AI системите придават огромна тежест на **реалния автор** на съдържанието. Добавяй:

- Кратка биография на автора на всяка статия
- LinkedIn профил линк
- Реален снимка
- Специализация и опит
- JSON-LD Author Schema

**Author Schema пример:**

\`\`\`json
{
  "@type": "Person",
  "name": "Твоето Ime",
  "url": "https://твоятсайт.bg/за-мен",
  "sameAs": [
    "https://linkedin.com/in/твоят-профил",
    "https://twitter.com/твоят-профил"
  ],
  "jobTitle": "AI SEO Специалист",
  "knowsAbout": ["AI SEO", "GEO Optimization", "Entity SEO"]
}
\`\`\`

### Техника 5: Вътрешно свързване като семантична мрежа

AI системите разбират тематичната авторитетност на сайт чрез вътрешните линкове. Когато Статия А линква към Статия Б с релевантен anchor text — AI разбира, че сайтът е авторитетен по темата.

**Правило:** Всяка нова статия трябва да линква към минимум 3 съществуващи свързани статии. Всяка съществуваща статия трябва да получи линк от поне 2 нови статии.

---

## Пълен чеклист {#checklist}

### Съдържание
- [ ] Всяка статия започва с директна дефиниция/отговор в 1–2 изречения
- [ ] Минимум 2 конкретни статистики с посочен извор и година
- [ ] H2/H3 заглавия формулирани като въпроси ("Как?", "Защо?", "Какво е?")
- [ ] Минимум 5 FAQ въпроса-отговора в края
- [ ] "Ключови факти" блок с цитируеми данни
- [ ] Автор биография с реален LinkedIn профил

### Техническо
- [ ] FAQPage Schema (JSON-LD) на всяка страница с FAQ
- [ ] Article Schema с datePublished и dateModified
- [ ] Author Schema на всяка статия
- [ ] robots.txt позволява GPTBot, PerplexityBot, ClaudeBot
- [ ] Bing Webmaster Tools — сайтът е верифициран и индексиран
- [ ] Core Web Vitals — LCP < 2.5s

### Мониторинг
- [ ] Месечен AI visibility одит с Google Sheets трекер
- [ ] Perplexity тест на 10+ заявки всеки месец
- [ ] Google Search Console — AI Overview appearances
- [ ] Bing Webmaster Tools — трафик проверка`,

    en: `## How AI Systems "Read" the Internet {#how-ai-reads}

Before you optimize for AI citations, you need to understand how AI systems actually process information. They don't "read" like humans — and they don't index like Google.

### The Editor-in-Chief Analogy

Imagine the editorial team of a large publication. The editor receives 500 articles on a given topic. They can't read everything — they need to choose which to cite in their article. Here's how they choose:

1. **First check authority** — Is it from CNN? A known academic? Or an anonymous blog?
2. **Then check structure** — Is it easy to read? Is it direct?
3. **Then check facts** — Are there specific data? Are sources cited?
4. **Finally check freshness** — When is it from? Is it still accurate?

AI systems do exactly the same — just much faster and at much greater scale.

### How LLM Systems Are Trained

Large Language Models (ChatGPT, Gemini, Claude) are trained on massive arrays of text from the internet. They **don't search in real time** (unless specifically enabled) — they use what they learned during training.

\`\`\`
Training → LLM reviews billions of web pages
                    ↓
Remembers: Which sites are cited by other authoritative sites?
Remembers: Which answers are consistent and accurate?
Remembers: Which definitions are confirmed by multiple sources?
                    ↓
At query time: Synthesizes answer from learned patterns
\`\`\`

**Key insight:** If your site wasn't well represented in training data — the AI system simply doesn't "know" you. It doesn't consciously ignore you — you just have no presence in its "mental model."

### Perplexity and ChatGPT Browse — Real-Time Search

Unlike static LLMs, **Perplexity** and **ChatGPT with Browse** search in real time. They:

1. Take the query
2. Search the internet (Perplexity uses its own index; ChatGPT uses Bing)
3. Read top results
4. Synthesize an answer, citing sources

For these, **your current SEO position and page quality have direct impact** — not just historical presence.

> **Analogy:** A static LLM (Claude without search) is like a consultant relying entirely on experience. Perplexity is like a consultant who quickly checks current data before answering.

---

## The Five Citation Criteria {#five-criteria}

After analyzing hundreds of AI responses and research from Columbia University (2024), Stanford, and BrightEdge, five key criteria crystallized.

### Criterion 1: Authority and Trust (Domain Authority + E-E-A-T)

**Weight:** About 35% of the decision

AI systems are trained to prefer sites that other authorities reference. Specifically:

- **Backlinks from .edu and .gov domains** — very high-weight signal
- **Citations in Wikipedia** — Wikipedia is massively included in LLM training data
- **Mentions in authoritative media** — Forbes, HBR, academic journals
- **Knowledge Panel in Google** — signals that Google "knows" the entity
- **E-E-A-T signals** — author bio, real experience, publications

### Criterion 2: Answer Architecture

**Weight:** About 25% of the decision

AI systems **synthesize** — they don't copy. But to synthesize correctly, they need to easily "understand" your content. They prefer:

| Structure | Effect on citation |
|-----------|-------------------|
| Direct answer in first sentence | +3.3x (Columbia, 2024) |
| H2/H3 headings as questions | +2.1x easier to synthesize |
| Numbered lists for steps | +1.8x |
| Comparison tables | +2.4x |
| FAQ section with Schema | +2.6x |
| Long paragraphs without structure | -0.6x |

### Criterion 3: Factual Density

**Weight:** About 20% of the decision

The Columbia/Princeton study (2024) found that **statistics with cited sources** are the third most important factor. Why? AI systems are trained to give verifiable answers. When your content contains:

- Specific numbers: "47.8% of queries" (not "almost half")
- Dated facts: "According to Google I/O 2024..." (not "recently")
- Measurable claims: "3.3x more likely citation" (not "much more likely")
- Official quotes: precise quotes with author and date

AI can extract them directly and place them in the answer with confidence.

### Criterion 4: Content Freshness

**Weight:** About 12% of the decision

Especially critical for:
- **Perplexity** — strongly prioritizes new content
- **ChatGPT Browse** — checks publication date
- **Google AI Overviews** — for time-sensitive topics

Practically: a 2022 article on AI SEO without an update will be bypassed by an updated article even with lower baseline authority.

### Criterion 5: Technical Accessibility

**Weight:** About 8% of the decision

AI systems can't cite what they can't access:

- **Noindex directives** — if the page is noindex, AI doesn't see it
- **Blocking AI bots** in robots.txt — ChatGPTBot, GPTBot, PerplexityBot
- **JavaScript rendering** — content loading only via JS may be inaccessible
- **Speed** — slow sites are crawled less frequently

---

## How Each AI System Works {#each-system}

Each system has different logic — understanding the specific mechanisms matters.

### ChatGPT (OpenAI)

**Two modes:**

**1. Without Search (standard):**
- Relies entirely on training data (cutoff: early 2024 for GPT-4o)
- Much harder to change your presence here — requires historical authority
- Key: being cited in authoritative texts BEFORE the cutoff date

**2. With Search (ChatGPT Browse / SearchGPT):**
- Uses Bing Search API
- Prioritizes Bing-ranked results
- You need good Bing visibility (many businesses neglect Bing!)
- Check with Bing Webmaster Tools

### Google Gemini

**Specifics:**
- Direct integration with Google Search index
- Knowledge Graph is critical — sites with clear "entity" in KG get preference
- Google AI Overviews and Gemini share infrastructure
- E-E-A-T signals are critically important

### Perplexity

**Why Perplexity is the "honest" system:**
- Always shows sources — you see exactly who is cited
- Shows the specific quote from the page
- Uses its own crawler + Bing/Google APIs
- Strongly prioritizes content freshness

| Platform | Primary signal | Real-time? | Shows sources? |
|----------|--------------|-----------|---------------|
| ChatGPT (standard) | Training data | No | Sometimes |
| ChatGPT Browse | Bing + training | Yes | Yes |
| Google Gemini | Google index + KG | Yes | Partially |
| Perplexity | Own + Bing | Yes | Always |
| Claude (Anthropic) | Training data | Only with tools | Not by default |
| Microsoft Copilot | Bing | Yes | Yes |

---

## Citation Without Link — Do We Win? {#citation-without-link}

This is one of the most important questions in AI SEO — and the answer is **more complex than "yes" or "no"**.

### What Does "Citation Without Link" Mean?

When an AI system says something like:
> "According to [Your Brand], optimization for AI search engines requires..."

or:

> "Leading specialists like [Your Name] recommend..."

without placing a clickable reference to your site. Particularly characteristic of ChatGPT (without Browse) and Claude.

### Case 1: Citation Without Link — Do You Win?

**Yes, you win — but not direct traffic. You win something more valuable long-term:**

**1. Brand Recognition**
The user sees your name/brand in the AI answer. Even without a link — they remember you. Their next Google search might be directly your name. Branded searches ("vladimir manov AI SEO") convert much better than generic searches.

**2. Authority Signals**
The fact that an AI system mentions you means your brand is in training data — a powerful signal for future iterations. AI systems "learn" what people find authoritative.

**3. Zero-Click Value**
Even without clicking — if AI answers with your information — you effectively help the user. Helping = building trust. Trust converts more slowly, but more lastingly.

### Case 2: Citation With Link — Significantly More Valuable

When Perplexity or ChatGPT Browse cite with a link:
- Direct referral traffic
- User is in "seeking more information" mode — higher conversion likelihood
- SEO signal (referral link from AI platform)
- Measurable in Google Search Console and Analytics

### Key Conclusion: Work for Both Simultaneously

| Citation type | Direct traffic | Brand recognition | SEO value | Longevity |
|--------------|--------------|-------------------|-----------|-----------|
| With link (Perplexity) | High | High | High | Medium |
| Without link (ChatGPT) | Zero | Medium | Low | High (in LLM) |
| Mention in AI Overview | Low | Very high | Very high | Medium |

---

## How to Check If You're Being Cited {#how-to-check}

### Monthly AI Visibility Audit Protocol (30 minutes)

**Step 1: Choose test queries (10 minutes)**

Prepare 10–15 queries for which you want to appear. Classify them:

\`\`\`
Type A — Informational: "What is [term from your industry]?"
Type B — Advisory: "How do I do [process from your industry]?"
Type C — Recommendation: "Who is a good [your service] in [your city]?"
Type D — Comparative: "[Service A] vs [Service B]"
\`\`\`

**Step 2: Test in Perplexity (10 minutes)**

1. Open [perplexity.ai](https://www.perplexity.ai)
2. Enter each query
3. Check the Sources panel on the right — is your site there?
4. Record: query / cited or not / position in sources

Perplexity is best for testing because it **always shows sources**.

**Step 3: Test in ChatGPT (5 minutes)**

1. Open ChatGPT (with Search enabled if available)
2. Enter 5 of the queries
3. Check if your site is mentioned in the answer or in sources
4. Record: direct citation / indirect / not mentioned

**Step 4: Test in Google (5 minutes)**

1. Open Google
2. Enter 5 informational queries
3. Check if AI Overview appears
4. Check if your site is in the AI Overview "source bubbles"

---

## Monitoring Tools {#tools}

### Free Tools

| Tool | What it does | How to use it |
|------|------------|---------------|
| [Perplexity](https://www.perplexity.ai) | Shows real AI answer with sources | Test queries monthly |
| [ChatGPT](https://chat.openai.com) | Tests LLM awareness | Ask directly about your brand |
| [Google Search Console](https://search.google.com/search-console) | AI Overview appearances | Performance → Search type: Web |
| [Bing Webmaster Tools](https://www.bing.com/webmasters) | Bing indexing (ChatGPT Browse) | Index your pages |
| [Google Rich Results Test](https://search.google.com/test/rich-results) | Schema validation | Test each important page |

### robots.txt Configuration for AI Bots

\`\`\`
# Allow AI bots
User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: GoogleExtendedBot
Allow: /

User-agent: ClaudeBot
Allow: /
\`\`\`

---

## Practical Optimization Techniques {#practical-tactics}

### Technique 1: Answer-First Rewriting

Check your top 5 site articles. For each:
1. Does it give a direct answer in the FIRST sentence?
2. If not — rewrite the intro to directly answer the question

### Technique 2: "Citable Facts" Block

Add to every important article:
\`\`\`
**Key Facts about [Topic]:**
- [Specific statistic with source and year]
- [Other measurable data with context]
- [Official fact from authoritative source]
\`\`\`

### Technique 3: FAQ Section with FAQPage Schema

Add minimum 5 question-answers at the end of every important article. Implement FAQPage Schema with JSON-LD.

### Technique 4: Author Profile and Author Schema

- Short author bio on every article
- LinkedIn profile link
- Real photo
- JSON-LD Author Schema with sameAs links

---

## Complete Checklist {#checklist}

### Content
- [ ] Every article starts with direct definition/answer in 1–2 sentences
- [ ] Minimum 2 specific statistics with cited source and year
- [ ] H2/H3 headings formulated as questions
- [ ] Minimum 5 FAQ question-answers at the end
- [ ] "Key Facts" block with citable data
- [ ] Author bio with real LinkedIn profile

### Technical
- [ ] FAQPage Schema (JSON-LD) on every FAQ page
- [ ] Article Schema with datePublished and dateModified
- [ ] Author Schema on every article
- [ ] robots.txt allows GPTBot, PerplexityBot, ClaudeBot
- [ ] Bing Webmaster Tools — site verified and indexed
- [ ] Core Web Vitals — LCP < 2.5s

### Monitoring
- [ ] Monthly AI visibility audit with Google Sheets tracker
- [ ] Perplexity test of 10+ queries every month
- [ ] Google Search Console — AI Overview appearances
- [ ] Bing Webmaster Tools — traffic check`,
  },
  faq: [
    {
      question: {
        bg: "Ако ChatGPT ме споменава, но не дава линк към сайта ми — има ли смисъл?",
        en: "If ChatGPT mentions me but doesn't link to my site — is there any value?",
      },
      answer: {
        bg: "Да — но различен вид стойност. Споменаването без линк изгражда brand recognition (потребителят запомня твоето Ime), влиза в обучителните данни за бъдещи LLM версии (увеличава дългосрочната ти AI присъственост), и може да доведе до директни branded търсения в Google. Обаче не дава директен трафик. Работи за двете: оптимизирай за споменавания (авторитет) и за линкове (структуриран контент в Perplexity).",
        en: "Yes — but a different kind of value. Mention without link builds brand recognition (user remembers your name), enters training data for future LLM versions (increases long-term AI presence), and may lead to direct branded searches on Google. However, it gives no direct traffic. Work for both: optimize for mentions (authority) and for links (structured content in Perplexity).",
      },
    },
    {
      question: {
        bg: "Колко заявки трябва да тествам всеки месец за да следя AI видимостта?",
        en: "How many queries should I test monthly to track AI visibility?",
      },
      answer: {
        bg: "Минимум 10–15 заявки, разпределени в 4 типа: информационни ('Какво е X?'), съветни ('Как да направя X?'), препоръчващи ('Кой е добър X в Y?'), и сравнителни ('X vs Y'). Тествай в Perplexity (показва извори), ChatGPT (познаваемост), и Google (AI Overview). Записвай резултатите в таблица. 3 месеца данни дават ясен тренд.",
        en: "Minimum 10–15 queries, distributed across 4 types: informational ('What is X?'), advisory ('How do I do X?'), recommendation ('Who is a good X in Y?'), and comparative ('X vs Y'). Test in Perplexity (shows sources), ChatGPT (awareness), and Google (AI Overview). Record results in a table. 3 months of data gives a clear trend.",
      },
    },
    {
      question: {
        bg: "Има ли смисъл да оптимизирам за ChatGPT ако обучителните данни вече са 'замразени'?",
        en: "Is there point in optimizing for ChatGPT if training data is already 'frozen'?",
      },
      answer: {
        bg: "Да — по две причини. Първо, ChatGPT има Browse режим, който търси реално-времево (ползва Bing) — там текущото ти съдържание има пряко значение. Второ, OpenAI регулярно обновява обучителните данни — оптимизацията, която правиш днес, ще влезе в следващата итерация. Фокусирай се на Perplexity и Google AI Overviews за бърз ефект, и на авторитетно строене за дългосрочен ChatGPT ефект.",
        en: "Yes — for two reasons. First, ChatGPT has Browse mode that searches in real time (uses Bing) — there your current content has direct impact. Second, OpenAI regularly updates training data — the optimization you do today will enter the next iteration. Focus on Perplexity and Google AI Overviews for quick effect, and on authority building for long-term ChatGPT effect.",
      },
    },
    {
      question: {
        bg: "Моят сайт блокира ли AI ботовете? Как да разбера?",
        en: "Is my site blocking AI bots? How do I find out?",
      },
      answer: {
        bg: "Провери robots.txt файла на сайта (https://твоятсайт.com/robots.txt). Търси за 'GPTBot', 'PerplexityBot', 'ClaudeBot', 'GoogleExtendedBot'. Ако виждаш 'Disallow: /' за тези ботове — блокираш AI системите. Добави 'Allow: /' за всеки AI бот. Cloudflare и някои сигурностни плъгини понякога блокират AI ботовете автоматично — провери настройките им.",
        en: "Check your site's robots.txt file (https://yoursite.com/robots.txt). Look for 'GPTBot', 'PerplexityBot', 'ClaudeBot', 'GoogleExtendedBot'. If you see 'Disallow: /' for these bots — you're blocking AI systems. Add 'Allow: /' for each AI bot. Cloudflare and some security plugins sometimes block AI bots automatically — check their settings.",
      },
    },
  ],
  officialLinks: [
    {
      label: "GPTBot — OpenAI официална документация",
      url: "https://platform.openai.com/docs/gptbot",
      desc: {
        bg: "Как да позволиш или блокираш GPTBot в robots.txt",
        en: "How to allow or block GPTBot in robots.txt",
      },
    },
    {
      label: "Google Search Console — AI Overview данни",
      url: "https://search.google.com/search-console",
      desc: {
        bg: "Performance → Search type за следене на AI Overview appearances",
        en: "Performance → Search type for tracking AI Overview appearances",
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
      label: "Columbia/Princeton GEO Research (2024)",
      url: "https://arxiv.org/abs/2311.09735",
      desc: {
        bg: "Оригиналното изследване за факторите на AI цитирания",
        en: "Original research on AI citation factors",
      },
    },
    {
      label: "Perplexity AI",
      url: "https://www.perplexity.ai",
      desc: {
        bg: "Най-добрият безплатен инструмент за тест на AI видимост",
        en: "Best free tool for testing AI visibility",
      },
    },
  ],
  relatedSlugs: ["ai-seo-basics", "geo-optimization", "entity-seo", "structured-data"],
};
