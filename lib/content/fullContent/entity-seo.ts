export const entitySeoContent = {
  slug: "entity-seo",
  toc: [
    { id: "what-is-entity", text: "Какво е Entity SEO?", level: 2 },
    { id: "entity-analogy", text: "Аналогията: Дигиталният паспорт", level: 2 },
    { id: "how-google-knows", text: "Как Google и AI 'познават' бизнеса?", level: 2 },
    { id: "knowledge-graph", text: "Knowledge Graph — що е то?", level: 2 },
    { id: "entity-signals", text: "Осемте сигнала за entity", level: 2 },
    { id: "sameas-schema", text: "sameAs линкове и Organization Schema", level: 2 },
    { id: "author-entity", text: "Author Entity — дигиталната личност на автора", level: 2 },
    { id: "check-entity", text: "Как да проверим нашето Entity SEO сега", level: 2 },
    { id: "tools", text: "Инструменти", level: 2 },
    { id: "checklist", text: "Пълен чеклист", level: 2 },
  ],
  content: {
    bg: `## Какво е Entity SEO? {#what-is-entity}

**Entity SEO** е практиката за изграждане на ясна дигитална идентичност за бизнес, марка или автор — така че Google, ChatGPT, Gemini и Perplexity да "познават" кой е той, какво прави и защо заслужава доверие.

Докато класическото SEO оптимизира за **ключови думи** ("счетоводни услуги Sofia"), Entity SEO оптимизира за **обекти** ("Фирма X е счетоводна компания в София, специализирана в данъчно консултиране за малки бизнеси").

Разликата е фундаментална:

| Класическо SEO | Entity SEO |
|---------------|-----------|
| Оптимизира за заявка | Оптимизира за разпознаване |
| Ключова дума = вход | Идентичност = основа |
| Google класира страницата | Google "познава" обекта |
| Резултат: позиция | Резултат: Knowledge Panel + AI цитиране |
| Работи за конкретна страница | Работи за целия бранд |

**Защо е критично за AI видимост:**

AI системите не търсят "ключова дума в текста". Те питат: "Знаем ли кой е този бизнес? Авторитетен ли е по темата? Доверяват ли му се другите?" Ако отговорът е "не знаем" — не го препоръчват, независимо колко добро е SEO-то.

---

## Аналогията: Дигиталният паспорт {#entity-analogy}

### Сравнение 1: Безименен гост vs. Спикер с бейдж

Представи си голяма бизнес конференция. Два типа участника:

**Тип А — Безименният гост:**
Влиза в залата. Знае много. Готов е да помогне. Но никой не знае кой е. Няма бейдж, няма биография в програмата, никой не го е представял. Когато CEO зададе въпрос — не го питат него, дори отговорът му да е най-добрият.

**Тип Б — Спикерът с пълна самоличност:**
Името му е на бейджа. Биографията му е в програмата. LinkedIn профилът му е верифициран. Говорил е на 5 конференции. Написал е книга. Хората около него знаят кой е — и го питат.

**Entity SEO е да си Тип Б.** Не е достатъчно да знаеш отговора. Трябва Google и AI да знаят КОЙ ТИ СИ.

### Сравнение 2: Дигиталният паспорт

Паспортът съдържа:
- Пълно Ime и снимка
- Дата и място на раждане
- Гражданство
- Уникален идентификатор (номер)
- Верификационни елементи (печати, подписи)

**Entity за бизнес съдържа:**
- Официално наименование (Name)
- Точен адрес (Address)
- Телефон и контакти (Phone)
- Описание на дейността (Description)
- Уникален идентификатор (Wikidata ID или Google Knowledge Graph ID)
- Верификационни сигнали (Wikipedia, медии, официални регистри)

Без паспорт — не можеш да пресичаш граници. Без дигитален паспорт (entity) — AI системата не може да те "идентифицира" и не те препоръчва.

### Сравнение 3: От анонимност към публична личност

Помисли за разликата между:

- **Анонимен блогър:** пише умни статии, но с псевдоним, без биография, без публично присъствие
- **Публична личност:** Ime, снимка, история, цитирания в медии, Wikipedia страница, верифициран профил

AI системите "познават" публичните личности — защото за тях има множество кръстосани сигнали от различни авторитетни източници. За анонимния блогър — нямат информация.

> **Ключов извод:** Entity SEO е процесът на превръщане на бизнеса от "анонимен" в "публично познат" в очите на AI системите.

---

## Как Google и AI "познават" бизнеса? {#how-google-knows}

### Процесът на разпознаване

Когато Google или AI система "среща" споменаване на твоя бизнес, тя задава следните въпроси:

\`\`\`
"ПетровСчетоводство ЕООД" се споменава в статия
        ↓
Знаем ли кой е "ПетровСчетоводство ЕООД"?
        ↓
Проверка в Knowledge Graph: Да / Не
        ↓
Ако Не → Търсене на допълнителни сигнали:
  - Има ли уебсайт с Organization Schema?
  - Има ли Google Business Profile?
  - Споменава ли се в авторитетни сайтове?
  - Има ли профили в LinkedIn, Facebook, Wikidata?
        ↓
Ако достатъчно сигнали → Изгражда entity запис
Ако не → Остава "неизвестен"
\`\`\`

### Три нива на познаваемост

**Ниво 0 — Невидим:**
Google и AI системите нямат информация. Споменаванията на бизнеса не се "свързват" с конкретен обект. Всяко споменаване се третира изолирано.

**Ниво 1 — Разпознат:**
Google знае, че бизнесът съществува. Може да показва основна информация. AI системите могат да го споменат, но с ниска увереност.

**Ниво 2 — Knowledge Graph запис:**
Бизнесът има запис в Google Knowledge Graph. Показва се Knowledge Panel при директно търсене. AI системите го познават и могат да дадат информация за него с висока увереност.

**Ниво 3 — Тематичен авторитет:**
Бизнесът е разпознат не само като обект, но и като **авторитет по конкретна тема**. AI системите го препоръчват при въпроси в тази тема.

---

## Knowledge Graph — що е то? {#knowledge-graph}

### Аналогията: "Кой кой е" в интернет

Представи си, че Google поддържа огромна база данни, подобна на "Кой кой е" — книга с кратки биографии на всички значими хора, фирми и места. За всеки обект има:

- Основна информация (Ime, адрес, категория)
- Връзки с други обекти ("работи за", "основана от", "специализира в")
- Сигнали за авторитет (споменавания в медии, Wikipedia, официални документи)

Тази база данни е **Google Knowledge Graph** — и тя е директно използвана от AI системите.

### Как изглежда Knowledge Graph запис?

Когато потърсиш "Apple Inc" в Google и видиш панела вдясно с логото, основателите, финансовата информация и свързани хора — това е Knowledge Graph записът.

За малки и средни бизнеси Knowledge Panel може да изглежда по-скромно, но принципът е същият:
- Официално Ime
- Адрес и карта
- Уебсайт
- Телефон
- Категория/Описание
- Снимки
- Свързани ентити

### Защо Knowledge Graph е критичен за AI?

Gemini, Google AI Overviews и всички Google AI продукти директно ползват Knowledge Graph данните. Когато потребителят пита "Кои са добри счетоводители в София?", Gemini проверява Knowledge Graph за entity-та от тип "AccountingService" в "Sofia" с висок авторитет.

ChatGPT и Claude не ползват Knowledge Graph директно, но са обучени на уеб данни, в които Knowledge Panel информацията е широко представена.

---

## Осемте сигнала за entity {#entity-signals}

Тези сигнали са "доказателства", които помагат на Google и AI да изградят твоя entity запис.

### Сигнал 1: NAP Consistency (Name, Address, Phone)

Най-фундаменталното изискване. Твоето официално наименование, адрес и телефон трябва да са **идентични** навсякъде в интернет.

\`\`\`
❌ Проблем (несъответствие):
  Уебсайт: "ПетровСчетоводство ЕООД"
  Google Профил: "Петров Счетоводство"
  Registar.bg: "Петров Счетоводство ООД"
  Facebook: "Счетоводство Петров"

✅ Правилно (пълно съответствие):
  Навсякъде: "Петров Счетоводство ЕООД"
  Адрес: "ул. Раковски 15, ет. 3, офис 301, София 1000"
  Телефон: "+359 2 123 4567"
\`\`\`

Дори малки разлики ("ЕООД" vs "ООД", "ул." vs "улица") объркват алгоритмите.

### Сигнал 2: Google Business Profile

Ако бизнесът ти обслужва местни клиенти — **Google Business Profile е задължителен**. Той е директен pipeline към Knowledge Graph.

Оптимизирано GBP съдържа:
- Пълно и точно наименование (без ключови думи!)
- Точна категория (Primary category + Secondary)
- Пълно описание (750 знака, с естествено вградени термини)
- Снимки (exterior, interior, продукти, екип)
- Редовни Google Posts
- Отговори на всички отзиви

### Сигнал 3: Organization Schema на уебсайта

JSON-LD маркап, добавен към главницата на сайта. Директно обяснява на Google кой е бизнесът:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Петров Счетоводство ЕООД",
  "description": "Счетоводни и данъчни услуги за малки и средни предприятия в София",
  "url": "https://petrov-accountancy.bg",
  "telephone": "+359 2 123 4567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. Раковски 15, ет. 3",
    "addressLocality": "София",
    "postalCode": "1000",
    "addressCountry": "BG"
  },
  "sameAs": [
    "https://www.linkedin.com/company/petrov-accountancy",
    "https://www.facebook.com/petrovaccountancy",
    "https://www.wikidata.org/wiki/Q12345678"
  ],
  "foundingDate": "2012",
  "numberOfEmployees": "5"
}
\`\`\`

### Сигнал 4: sameAs линкове (Профили в авторитетни платформи)

\`sameAs\` линковете казват на Google: "Ето ни и на тези места — всички сме едно и също." Приоритет:

| Платформа | Важност | Защо |
|-----------|---------|------|
| LinkedIn Company Page | Много висока | Авторитетна бизнес платформа |
| Facebook Business Page | Висока | Широко покритие |
| Wikidata запис | Много висока | Директна KG интеграция |
| Wikipedia статия | Изключително висока | Основен LLM обучителен материал |
| Crunchbase | Средна | За B2B и tech компании |
| Businessportal.bg / Registar.bg | Висока (за BG) | Официален бизнес регистър |
| YouTube Channel | Средна | Ако има видео съдържание |

### Сигнал 5: Wikipedia / Wikidata

**Wikipedia** е масово включена в обучителните данни на всички LLM системи. Ако бизнесът или неговите ключови хора имат Wikipedia статия — AI системите ги "познават" с много висока увереност.

**Wikidata** е структурираната, машинно-четима версия на Wikipedia. Дори без Wikipedia статия, Wikidata запис помага.

За повечето малки бизнеси Wikipedia не е реалистична цел (изисква нотабилност). Но за ключовите хора зад бизнеса — написването на статия за значими постижения е дългосрочна инвестиция.

### Сигнал 6: Споменавания в авторитетни медии

Всяко споменаване на бизнеса в авторитетни онлайн медии е "гласуване за доверие":
- Интервюта, коментари, цитирания
- Публикации в индустриални издания
- Участия в подкасти (с линк към уебсайта)
- Гост публикации (guest posts) в авторитетни блогове

Дори споменаване без линк е ценно за entity building.

### Сигнал 7: Reviews и Social Proof

Google третира отзивите (Google Business Profile, Trustpilot, Facebook) като сигнал за реалност:
- Бизнесът съществува (хора са го ползвали)
- Работи в посочената категория
- Има реални клиенти

Минимум 10–15 автентични отзива в GBP е добра база.

### Сигнал 8: Anchor Text в backlinks

Когато авторитетни сайтове линкват към теб с anchor text "Петров Счетоводство" или "счетоводни услуги Sofia" — Google свързва тези ключови думи с твоята entity.

---

## sameAs линкове и Organization Schema {#sameas-schema}

### Стъпка по стъпка: Изграждане на sameAs мрежа

**Стъпка 1: Регистрирай Wikidata запис**

1. Отиди на [wikidata.org](https://www.wikidata.org)
2. Влез/регистрирай се
3. "Create a new item"
4. Попълни: Label (официалното Ime), Description (1 изречение), Statements (instance of: business enterprise, country: Bulgaria, official website, LinkedIn URL и т.н.)
5. Запази Wikidata ID (Q-номер) — добави го в Schema

**Стъпка 2: Оптимизирай LinkedIn Company Page**

- Пълно описание (2000 знака)
- Точна специализация
- Уебсайт URL
- Официален лого и снимки
- Регулярни публикации (минимум 1/седмица)

**Стъпка 3: Google Business Profile верификация**

Ако все още нямаш — направи го сега. Ако имаш — провери за:
- Непотвърдени или неотговорени отзиви
- Липсващи снимки
- Остаряла информация

**Стъпка 4: Добави Organization Schema на главницата**

Виж примера от Сигнал 3 по-горе. Добавяй към \`<head>\` на index страницата.

**Стъпка 5: NAP одит**

Потърси наименованието на бизнеса в Google. Провери дали NAP данните са консистентни в:
- Уебсайта
- GBP
- LinkedIn
- Facebook
- Бизнес регистри ( търговски регистър, registar.bg)

Коригирай всяко несъответствие.

---

## Author Entity — дигиталната личност на автора {#author-entity}

### Защо авторът има значение

AI системите оценяват не само бизнеса, но и хората зад него. Когато статия е подписана с реален автор с верифицирано дигитално присъствие — тежи повече от анонимна статия.

E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) е рамката на Google, и Expertise + Authoritativeness се измерват значително чрез **author entity**.

### Person Schema за автор

На всяка страница/статия добавяй:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Владимир Манов",
  "url": "https://твоятсайт.bg/за-мен",
  "jobTitle": "AI SEO Специалист",
  "worksFor": {
    "@type": "Organization",
    "name": "Твоята Фирма"
  },
  "sameAs": [
    "https://linkedin.com/in/твоят-профил",
    "https://twitter.com/твоят-профил",
    "https://www.wikidata.org/wiki/Q_твоят_запис"
  ],
  "knowsAbout": [
    "AI SEO",
    "Generative Engine Optimization",
    "Entity SEO",
    "AI Visibility"
  ]
}
\`\`\`

### Изграждане на author entity

1. **Страница "За мен"** с пълна биография — реална снимка, специализация, опит, образование
2. **LinkedIn профил** — максимално попълнен, с регулярни публикации
3. **Публикации в медии** — дори 2–3 статии в индустриални издания значително повишават авторитета
4. **Последователност** — едно и също Ime навсякъде (не Владо Манов на едно място и Владимир Манов на друго)
5. **Wikidata запис** — ако имаш достатъчно нотабилност

---

## Как да проверим нашето Entity SEO сега {#check-entity}

### Протокол за Entity одит (15 минути)

**Тест 1: Knowledge Panel тест (3 минути)**

1. Отвори Google
2. Потърси точното официално наименование на бизнеса
3. Появява ли се Knowledge Panel вдясно?
   - ✓ Да → Имаш базова entity в KG
   - ✗ Не → Нямаш или е слабо изградена

Ако Google Panel не се появява → Повтори с Bing → Ако и там не е → Entity почти липсва.

**Тест 2: AI познаваемост тест (5 минути)**

1. Отвори ChatGPT
2. Питай: *"Разкажи ми за [официалното наименование на бизнеса]"*
3. Оцени отговора:
   - Знае ли бизнеса? (Да/Не)
   - Правилно ли го описва? (Да/Частично/Не)
   - Споменава ли правилните продукти/услуги?
   - Дава ли правилен уебсайт?

4. Повтори в Perplexity

**Тест 3: NAP consistency тест (4 минути)**

Потърси бизнеса в Google. Намери 5+ споменавания в различни сайтове. Провери дали Name, Address, Phone са идентични навсякъде.

**Тест 4: sameAs coverage тест (3 минути)**

Провери дали имаш профили в: LinkedIn, Facebook, Wikidata, Google Business Profile. Броят профили = "ширина" на entity мрежата.

### Интерпретация на резултатите

**Слаба entity (Score 0–2):**
- Няма Knowledge Panel
- ChatGPT не познава бизнеса
- NAP несъответствия
- 0–2 sameAs профила
- Действие: Фокус върху GBP верификация, NAP корекции, Organization Schema

**Средна entity (Score 3–4):**
- Knowledge Panel появява се понякога
- ChatGPT знае бизнеса, но описва неточно
- Частично NAP consistency
- 3–4 sameAs профила
- Действие: Wikidata запис, медийни споменавания, Author Schema

**Добра entity (Score 5+):**
- Knowledge Panel се появява при директно търсене
- ChatGPT и Perplexity описват правилно бизнеса
- Пълна NAP consistency
- 5+ sameAs профила + Wikidata
- Действие: Поддръжка и разширяване на тематичния авторитет

---

## Инструменти {#tools}

### Безплатни инструменти

| Инструмент | Употреба | Линк |
|-----------|---------|------|
| Google Knowledge Panel | Директно търси за да проверим | [google.com](https://www.google.com) |
| Wikidata | Създаване на entity запис | [wikidata.org](https://www.wikidata.org) |
| Google Business Profile | Верификация и управление | [business.google.com](https://business.google.com) |
| Schema Markup Validator | Проверка на JSON-LD | [validator.schema.org](https://validator.schema.org) |
| Google Rich Results Test | Rich results проверка | [search.google.com/test/rich-results](https://search.google.com/test/rich-results) |
| ChatGPT | Entity познаваемост тест | [chat.openai.com](https://chat.openai.com) |
| Perplexity | Entity видимост тест | [perplexity.ai](https://www.perplexity.ai) |

### Платени / Pro инструменти

| Инструмент | Специфика | Цена |
|-----------|----------|------|
| [Kalicube Pro](https://kalicube.com) | Специализиран entity management | ~$99/мес |
| [Semrush Brand Monitoring](https://www.semrush.com) | Следене на споменавания | ~$130/мес |
| [Moz Local](https://moz.com/products/local) | NAP consistency мениджмънт | ~$14/мес |

### Schema.org референции

- [Organization Schema](https://schema.org/Organization) — основния тип за бизнес entity
- [LocalBusiness Schema](https://schema.org/LocalBusiness) — за местни бизнеси
- [Person Schema](https://schema.org/Person) — за author entity
- [sameAs Property](https://schema.org/sameAs) — за свързване на профили

---

## Пълен чеклист {#checklist}

### Задължителни стъпки (Основа)
- [ ] Google Business Profile верифициран и напълно попълнен
- [ ] Organization Schema (JSON-LD) добавен на главницата
- [ ] NAP данни идентични навсякъде (сайт, GBP, регистри)
- [ ] LinkedIn Company Page пълна и активна

### Важни стъпки (Разширяване)
- [ ] Wikidata запис създаден с пълни данни
- [ ] sameAs масив в Schema съдържа всички профили
- [ ] Facebook Business Page верифицирана
- [ ] Author Schema на всяка статия/страница с автор
- [ ] "За нас" страница с пълна информация за екипа

### Напреднали стъпки (Авторитет)
- [ ] Минимум 1 публикация в авторитетна медия с линк
- [ ] Поне 10 верифицирани Google отзива
- [ ] Участие в индустриални директории с консистентни данни
- [ ] Вътрешни линкове свързват "За нас", продуктови и блог страници
- [ ] Редовни Google Posts (поне 1/2 седмици)`,

    en: `## What is Entity SEO? {#what-is-entity}

**Entity SEO** is the practice of building a clear digital identity for a business, brand, or author — so Google, ChatGPT, Gemini, and Perplexity "know" who they are, what they do, and why they deserve trust.

While classic SEO optimizes for **keywords** ("accounting services Sofia"), Entity SEO optimizes for **entities** ("Company X is an accounting firm in Sofia, specializing in tax consulting for small businesses").

The difference is fundamental:

| Classic SEO | Entity SEO |
|-------------|------------|
| Optimizes for queries | Optimizes for recognition |
| Keyword = entry point | Identity = foundation |
| Google ranks the page | Google "knows" the entity |
| Result: position | Result: Knowledge Panel + AI citation |
| Works for specific page | Works for entire brand |

**Why it's critical for AI visibility:**

AI systems don't look for "keywords in text." They ask: "Do we know who this business is? Is it authoritative on the topic? Do others trust it?" If the answer is "we don't know" — they don't recommend it, regardless of how good the SEO is.

---

## The Analogy: The Digital Passport {#entity-analogy}

### Comparison 1: Unnamed Guest vs. Speaker with Badge

Imagine a large business conference. Two types of attendees:

**Type A — The unnamed guest:** Enters the room. Knows a lot. Ready to help. But nobody knows who they are. No badge, no bio in the program, nobody introduced them. When the CEO asks a question — they're not asked, even if their answer is the best.

**Type B — The speaker with full identity:** Their name is on the badge. Their bio is in the program. LinkedIn verified. They've spoken at 5 conferences. Written a book. People around them know who they are — and ask them.

**Entity SEO is becoming Type B.** It's not enough to know the answer. Google and AI need to know WHO YOU ARE.

### Comparison 2: The Digital Passport

A passport contains: Full name and photo, Date and place of birth, Nationality, Unique identifier, Verification elements.

**Entity for a business contains:**
- Official name (Name)
- Exact address (Address)
- Phone and contacts (Phone)
- Description of activities (Description)
- Unique identifier (Wikidata ID or Google Knowledge Graph ID)
- Verification signals (Wikipedia, media, official registries)

Without a passport — you can't cross borders. Without a digital passport (entity) — AI systems can't "identify" you and don't recommend you.

> **Key conclusion:** Entity SEO is the process of transforming a business from "anonymous" to "publicly known" in the eyes of AI systems.

---

## How Google and AI "Know" a Business? {#how-google-knows}

### Three Levels of Recognizability

**Level 0 — Invisible:** Google and AI systems have no information. Mentions of the business don't "connect" to a specific entity. Each mention is treated in isolation.

**Level 1 — Recognized:** Google knows the business exists. May show basic information. AI systems can mention it but with low confidence.

**Level 2 — Knowledge Graph Record:** The business has a record in Google Knowledge Graph. Knowledge Panel shows up on direct search. AI systems know it and can provide information with high confidence.

**Level 3 — Topical Authority:** Business is recognized not just as an entity, but as an **authority on a specific topic**. AI systems recommend it for questions in that topic.

---

## Knowledge Graph — What Is It? {#knowledge-graph}

The Knowledge Graph is Google's massive database of entities and their relationships — like a giant "Who's Who" for the internet. For each entity:
- Basic info (Name, address, category)
- Relationships ("works for," "founded by," "specializes in")
- Authority signals (media mentions, Wikipedia, official documents)

This database is **directly used by AI systems.** Gemini and Google AI Overviews use Knowledge Graph data. When a user asks "Who are good accountants in Sofia?", Gemini checks the Knowledge Graph for entities of type "AccountingService" in "Sofia" with high authority.

---

## The Eight Entity Signals {#entity-signals}

### Signal 1: NAP Consistency (Name, Address, Phone)

Your official name, address, and phone must be **identical** everywhere on the internet. Even small differences ("Ltd" vs "Limited") confuse the algorithms.

### Signal 2: Google Business Profile

If your business serves local clients — **Google Business Profile is mandatory**. It's a direct pipeline to the Knowledge Graph.

### Signal 3: Organization Schema on the Website

JSON-LD markup added to the site's homepage. Directly explains to Google who the business is — see the code example in the Bulgarian version.

### Signal 4: sameAs Links (Profiles on Authoritative Platforms)

| Platform | Importance | Why |
|----------|-----------|-----|
| LinkedIn Company Page | Very high | Authoritative business platform |
| Facebook Business Page | High | Broad coverage |
| Wikidata entry | Very high | Direct KG integration |
| Wikipedia article | Exceptionally high | Primary LLM training material |
| Crunchbase | Medium | For B2B and tech companies |

### Signal 5: Wikipedia / Wikidata

Wikipedia is massively included in training data for all LLM systems. If the business or its key people have a Wikipedia article — AI systems "know" them with very high confidence.

### Signals 6–8: Media Mentions, Reviews, Backlink Anchor Text

Every mention in authoritative online media, genuine customer reviews, and anchor text in backlinks all contribute to building a strong entity.

---

## sameAs Links and Organization Schema {#sameas-schema}

### Step by Step: Building a sameAs Network

1. **Register a Wikidata entry** — create at [wikidata.org](https://www.wikidata.org) with full data
2. **Optimize LinkedIn Company Page** — full description, specialization, website URL, regular posts
3. **Verify Google Business Profile** — if not done, do it now
4. **Add Organization Schema to homepage** — with sameAs array linking all profiles
5. **NAP Audit** — search the business name in Google, verify consistency across all mentions

---

## Author Entity — The Author's Digital Personality {#author-entity}

AI systems evaluate not just the business, but the people behind it. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is significantly measured through **author entity**.

Add Person Schema on every page/article with a real author:
- Name, URL, jobTitle
- worksFor (linking to the organization)
- sameAs (LinkedIn, Twitter/X, Wikidata)
- knowsAbout (list of expertise topics)

Build author entity with: full "About" page with bio, active LinkedIn, publications in industry media, consistent name everywhere.

---

## How to Check Our Entity SEO Now {#check-entity}

### Entity Audit Protocol (15 minutes)

**Test 1: Knowledge Panel test** — Search exact business name in Google. Does a Knowledge Panel appear?

**Test 2: AI awareness test** — Ask ChatGPT: "Tell me about [business name]." Does it know? Is the description accurate?

**Test 3: NAP consistency test** — Find 5+ mentions of the business online. Is Name/Address/Phone identical everywhere?

**Test 4: sameAs coverage test** — Check for profiles on: LinkedIn, Facebook, Wikidata, Google Business Profile.

### Score Interpretation

- **0–2 signals:** Weak entity → Focus on GBP verification, NAP fixes, Organization Schema
- **3–4 signals:** Average entity → Add Wikidata entry, media mentions, Author Schema
- **5+ signals:** Good entity → Maintain and expand topical authority

---

## Tools {#tools}

| Tool | Use | Link |
|------|-----|------|
| Google Knowledge Panel | Check current entity status | [google.com](https://www.google.com) |
| Wikidata | Create entity record | [wikidata.org](https://www.wikidata.org) |
| Google Business Profile | Verification and management | [business.google.com](https://business.google.com) |
| Schema Markup Validator | JSON-LD validation | [validator.schema.org](https://validator.schema.org) |
| Rich Results Test | Rich results check | [search.google.com/test/rich-results](https://search.google.com/test/rich-results) |
| ChatGPT | Entity awareness test | [chat.openai.com](https://chat.openai.com) |
| Perplexity | Entity visibility test | [perplexity.ai](https://www.perplexity.ai) |

---

## Complete Checklist {#checklist}

### Mandatory (Foundation)
- [ ] Google Business Profile verified and fully completed
- [ ] Organization Schema (JSON-LD) added to homepage
- [ ] NAP data identical everywhere (site, GBP, registries)
- [ ] LinkedIn Company Page complete and active

### Important (Expansion)
- [ ] Wikidata entry created with full data
- [ ] sameAs array in Schema contains all profiles
- [ ] Facebook Business Page verified
- [ ] Author Schema on every article/page with an author

### Advanced (Authority)
- [ ] At least 1 publication in authoritative media with link
- [ ] At least 10 verified Google reviews
- [ ] Regular Google Posts (at least 1 every 2 weeks)`,
  },
  faq: [
    {
      question: {
        bg: "Трябва ли Wikipedia страница за да имам Knowledge Panel?",
        en: "Do I need a Wikipedia page to have a Knowledge Panel?",
      },
      answer: {
        bg: "Не — Wikipedia не е задължителна, но силно помага. Knowledge Panel може да се появи и само с Google Business Profile + Organization Schema + consistentни NAP данни + достатъчно споменавания. Wikipedia (и Wikidata) ускоряват процеса и увеличават увереността на AI системите.",
        en: "No — Wikipedia is not mandatory, but it greatly helps. A Knowledge Panel can appear with just Google Business Profile + Organization Schema + consistent NAP data + enough mentions. Wikipedia (and Wikidata) accelerate the process and increase AI systems' confidence.",
      },
    },
    {
      question: {
        bg: "Колко дълго отнема да се появи Knowledge Panel?",
        en: "How long does it take for a Knowledge Panel to appear?",
      },
      answer: {
        bg: "При нов бизнес с пълна Entity SEO оптимизация — обикновено 2–6 месеца. При бизнес с вече съществуващо онлайн присъствие — може да е по-бързо (4–8 седмици) след добавяне на Organization Schema и Wikidata запис. Ускорява се при повече медийни споменавания.",
        en: "For a new business with complete Entity SEO optimization — typically 2–6 months. For a business with existing online presence — may be faster (4–8 weeks) after adding Organization Schema and Wikidata entry. Accelerated by more media mentions.",
      },
    },
    {
      question: {
        bg: "NAP данните ми са различни на различни места. Как да ги поправя?",
        en: "My NAP data differs across places. How do I fix it?",
      },
      answer: {
        bg: "Систематично: 1) Реши кой е официалният формат на Ime/Адрес/Телефон (използвай търговски регистър за справка); 2) Направи списък на всички места, където се споменаваш; 3) Актуализирай едно по едно — започни от най-авторитетните (GBP, LinkedIn, сайт); 4) За директории, в които нямаш достъп — потърси Claim или Contact формата. Процесът може да отнеме 1–2 месеца.",
        en: "Systematically: 1) Decide on the official format of Name/Address/Phone; 2) Make a list of all places where you're mentioned; 3) Update one by one — start with the most authoritative (GBP, LinkedIn, site); 4) For directories where you don't have access — look for Claim or Contact form. The process may take 1–2 months.",
      },
    },
    {
      question: {
        bg: "Entity SEO важи ли и за личен бранд (фрийлансър, консултант)?",
        en: "Does Entity SEO apply to personal brands (freelancers, consultants)?",
      },
      answer: {
        bg: "Да — и е дори по-важно. За консултанти и специалисти, Author Entity е еквивалентна на Organization Entity. Фокусът е върху Person Schema, LinkedIn профил, публикации в медии, Wikidata запис за лицето, и консистентно Ime навсякъде. ChatGPT и Gemini 'познават' индивидуалните специалисти по същия начин като компаниите.",
        en: "Yes — and it's even more important. For consultants and specialists, Author Entity is equivalent to Organization Entity. Focus on Person Schema, LinkedIn profile, media publications, Wikidata entry for the individual, and consistent name everywhere. ChatGPT and Gemini 'know' individual specialists the same way they know companies.",
      },
    },
  ],
  officialLinks: [
    {
      label: "Google Knowledge Graph Search API",
      url: "https://developers.google.com/knowledge-graph",
      desc: {
        bg: "Официалната документация за Knowledge Graph",
        en: "Official Knowledge Graph documentation",
      },
    },
    {
      label: "Schema.org — Organization",
      url: "https://schema.org/Organization",
      desc: {
        bg: "Пълна документация за Organization Schema",
        en: "Complete Organization Schema documentation",
      },
    },
    {
      label: "Wikidata",
      url: "https://www.wikidata.org",
      desc: {
        bg: "Създаване на entity запис за бизнес или лице",
        en: "Create entity record for business or person",
      },
    },
    {
      label: "Google Business Profile помощ",
      url: "https://support.google.com/business",
      desc: {
        bg: "Официалната документация за GBP",
        en: "Official GBP documentation",
      },
    },
    {
      label: "Google Rich Results Test",
      url: "https://search.google.com/test/rich-results",
      desc: {
        bg: "Проверка на Schema маркап за Rich Results",
        en: "Test Schema markup for Rich Results",
      },
    },
  ],
  relatedSlugs: ["llm-optimization", "geo-optimization", "ai-visibility-strategy", "structured-data"],
};
