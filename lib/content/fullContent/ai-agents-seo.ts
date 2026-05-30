export const aiAgentsSeoContent = {
  slug: "ai-agents-seo",
  toc: [
    { id: "what-is-ai-agent", text: "Какво е AI агент — и как се различава от обикновена автоматизация?", level: 2 },
    { id: "why-agents-for-seo", text: "Защо AI агентите са революционни за SEO работа?", level: 2 },
    { id: "tool-comparison", text: "n8n, Make.com, Zapier или Python — кое да избереш?", level: 2 },
    { id: "n8n-setup", text: "Как да настроиш n8n за SEO агенти стъпка по стъпка?", level: 2 },
    { id: "seo-audit-agent", text: "Как да изградиш агент, който прави технически SEO одит автоматично?", level: 2 },
    { id: "content-gap-agent", text: "Как да намираш автоматично теми, за които конкурентите класират, а ти не?", level: 2 },
    { id: "competitor-monitor-agent", text: "Как да следиш конкурентите автоматично 24/7?", level: 2 },
    { id: "content-brief-agent", text: "Как да генерираш SEO brief за ново съдържание с AI агент?", level: 2 },
    { id: "rank-tracking-agent", text: "Как да следиш позициите си и да получаваш автоматични доклади?", level: 2 },
    { id: "api-connections", text: "Кои API-та са задължителни за SEO агенти?", level: 2 },
    { id: "when-not-to-automate", text: "Кои SEO задачи НЕ трябва да автоматизираш?", level: 2 },
    { id: "agent-checklist", text: "Готов ли си да пуснеш първия си SEO агент? Пълен чеклист", level: 2 },
  ],
  content: {
    bg: `## Какво е AI агент — и как се различава от обикновена автоматизация? {#what-is-ai-agent}

**AI агентът** е софтуерна система, която възприема средата си, взема решения и предприема действия, за да постигне дадена цел — без човек да одобрява всяка стъпка. Дай му задача, а той сам разбира как да я изпълни, използва инструменти, проверява резултатите и се адаптира при проблеми.

Най-добрата аналогия: представи си **виртуален служител, който следва чеклист 24/7 и никога не забравя стъпка**. Ако го помолиш "направи ми SEO одит на сайта всеки понеделник", той ще го прави всеки понеделник — в 9:00 сутринта, без напомняне, без грешки от разсеяност, без да ти изпраща имейл "как се прави отново?".

### Чатбот vs Агент vs Автоматизация — ключовата разлика

Много хора бъркат тези три неща. Ето точното разграничение:

**Чатбот (напр. ChatGPT в прозорец):**
- Ти задаваш въпрос → получаваш отговор → край
- Един вход → един изход
- Не предприема действия в реалния свят
- Не помни предишни разговори (без Memory)
- Пример: "Какво е Core Web Vitals?" → обяснение

**Проста автоматизация (if X, then Y):**
- Правило: "Ако получа имейл с тема 'SEO доклад', запази файла в Drive"
- Фиксирана логика — не може да мисли
- Не може да реши какво да направи в нова ситуация
- Пример: Zapier trigger → действие

**AI Агент:**
- Ти даваш цел: "Намери топ 10 ключови думи, за които конкурентите ни изпреварват"
- Агентът сам решава: (1) Кои конкуренти да гледа, (2) Кой API да използва, (3) Как да сравни данните, (4) Как да форматира резултата
- Може да се справи с неочаквани ситуации (API връща грешка → опитва алтернативен метод)
- Предприема реални действия: изпраща имейли, записва в Google Sheet, публикува в Slack

### Как "мисли" AI агентът

Под капака агентът следва цикъл, известен като **ReAct (Reason + Act)**:

\`\`\`
1. PERCEIVE — получава информация (задача, данни от API, резултат от предишна стъпка)
2. THINK — решава какво да направи следващото (с помощта на LLM като GPT-4 или Claude)
3. ACT — извиква инструмент (HTTP заявка, Google Sheet, Slack съобщение)
4. OBSERVE — чете резултата от действието
5. REPEAT — ако целта не е постигната, се върши нова итерация
\`\`\`

Разлика от проста автоматизация: стъпка 2 ("THINK") я няма при Zapier или Make.com. Там просто се изпълнява предварително дефинирана логика. При агента — AI решава какво да направи следващото, базирано на контекста.

> **Ключово:** AI агентът не е просто "по-умен Zapier". Той може да разсъждава, да се адаптира и да взема решения в реално време — нещо, което обикновената автоматизация принципно не може.

---

## Защо AI агентите са революционни за SEO работа? {#why-agents-for-seo}

AI агентите са революционни за SEO, защото **80% от SEO работата е повтаряема и базирана на данни** — точно такива задачи, при които агентите блестят. Проверка на счупени линкове, мониторинг на позиции, анализ на meta тагове, намиране на content gaps — всичко това може да се автоматизира.

Реалният проблем: средностатистическият SEO специалист прекарва **60-70% от работното си време** в събиране и обработка на данни, вместо в стратегическо мислене. Агентите обръщат тази пропорция.

### Колко реално спестяват агентите?

| SEO задача | Ръчно (часове/седмица) | С агент (минути) | Спестяване |
|------------|------------------------|------------------|------------|
| Технически SEO одит (100 URL) | 4 часа | 15 минути | 93% |
| Проверка на позиции за 50 ключови думи | 2 часа | 5 минути | 96% |
| Намиране на content gaps спрямо 3 конкурента | 6 часа | 20 минути | 94% |
| Мониторинг на промени при конкуренти | 3 часа/седмица | Автоматично 24/7 | 100% |
| Генериране на content briefs (5 бр.) | 5 часа | 30 минути | 90% |
| Седмичен доклад за мениджмент | 2 часа | Автоматично | 100% |

**Обща седмична спестяване: ~22 часа → под 1 час**

### Реален пример: Автоматизиран технически одит

Ето как изглежда реалният преход за SEO агенция с 15 клиента:

**Преди (ръчно):**
- Всеки понеделник: влизане в Screaming Frog, пускане на crawl за всеки клиент
- Изчакване по 30-45 минути за сайт
- Ексклузиране на данните, форматиране в Excel
- Писане на имейл доклад
- Общо: 4 часа × 15 клиента = 60 часа/месец само за одити

**След (с агент):**
- n8n агент стартира всеки понеделник в 9:00
- Проверява всички 15 сайта паралелно чрез PageSpeed Insights API и HTTP заявки
- AI анализира данните и пише препоръки
- Автоматично изпраща доклад на всеки клиент
- Общо: 15 минути за настройка → 0 часа седмична работа

> **Ключово:** Агентите не заместват SEO специалиста — те му дават суперсили. Той вече може да насочи тези 60 часа към стратегия, клиентски срещи и творческа работа.

### Кои SEO задачи са идеални за автоматизация?

- Задачи, които се повтарят по едни и същи правила
- Задачи, при които данните идват от API (GSC, PageSpeed, Ahrefs)
- Задачи, при които резултатът е текст или числа (не дизайн, не стратегия)
- Задачи, при които "достатъчно добро" е наистина достатъчно

---

## n8n, Make.com, Zapier или Python — кое да избереш? {#tool-comparison}

Изборът на инструмент е критичен — грешният избор означава, че след 2 месеца ще трябва да го смениш и да преправиш всичко. Ето пълното сравнение:

### Пълна таблица за сравнение

| Критерий | n8n | Make.com | Zapier | LangChain/Python | Директни API заявки |
|----------|-----|----------|--------|-----------------|---------------------|
| **Цена** | Безплатно (self-hosted) / €20/м (cloud) | Безплатно (1000 оп.) / €9/м | Безплатно (100 задачи) / $20/м | Безплатно (open source) | Безплатно (само сървър) |
| **Сложност** | Средна | Ниска-средна | Ниска | Висока | Много висока |
| **AI поддръжка** | Отлична (вграден AI агент нод) | Добра (HTTP към OpenAI) | Средна (чрез OpenAI app) | Отлична (native) | Пълна свобода |
| **Self-hosted?** | Да (Docker) | Не | Не | Да | Да |
| **Визуален интерфейс** | Да | Да | Да | Не | Не |
| **Нужно ли е кодиране** | Не (за основни) | Не | Не | Да | Да |
| **Подходящо за** | SEO агенции, freelancers, малки екипи | Бизнес потребители | Нетехнически потребители | Разработчици | Senior инженери |
| **Ограничения** | Крива на учене, документация | Скъпо при мащаб | Много скъпо при мащаб | Много код | Всичко от нулата |

### Детайлно обяснение на всеки инструмент

**n8n** (препоръчителен за повечето SEO специалисти)

n8n е **open-source инструмент за автоматизация** с визуален интерфейс. Работи като Zapier, но е безплатен при self-hosted инсталация и има вграден AI агент нод, който може да разсъждава и взема решения.

Защо n8n за SEO:
- Вграден "AI Agent" нод, базиран на GPT-4 или Claude
- Директни интеграции с Google Search Console, Google Sheets, Slack, Notion
- HTTP Request нод за всеки API без интеграция
- Напълно безплатен при Docker инсталация
- Можеш да пишеш JavaScript в нодовете при нужда

**Make.com (бивш Integromat)**

Make.com е визуален инструмент с много интеграции. Подходящ за по-прости автоматизации без AI разсъждение. При сложни AI агенти ограниченията стават видими.

**Zapier**

Zapier е най-простият, но и най-скъпият. При 1000 задачи на месец цената скача бързо. Препоръчваме само ако вече го ползваш и плащаш.

**LangChain/Python**

Ако си разработчик, LangChain дава пълна свобода. Можеш да създадеш агент с дълга памет, сложна логика, custom инструменти. Препоръчваме при специфични изисквания, за които n8n е недостатъчен.

**Директни API заявки**

За senior разработчици, които искат пълен контрол. Ти пишеш всичко — от нулата, в Python или Node.js.

> **Ключово:** За 90% от SEO специалистите препоръчваме **n8n self-hosted**. Безплатно, мощно, с вграден AI, без да изискваш да пишеш код за базови автоматизации. Стартирай с него.

---

## Как да настроиш n8n за SEO агенти стъпка по стъпка? {#n8n-setup}

Настройката на n8n отнема под 30 минути. Ето точните стъпки:

### Стъпка 1: Избор на инсталационен метод

**Опция А: n8n Cloud (препоръчително за начинаещи)**
- Отиди на n8n.io → "Get Started for Free"
- Регистрирай акаунт
- Цена: €20/месец за 5000 изпълнения
- Предимство: Нищо не инсталираш, достъпно отвсякъде
- Недостатък: Цена, данните минават през техните сървъри

**Опция Б: Docker self-hosted (препоръчително за напредналите)**
- Нужен е сървър или локален компютър с Docker
- Напълно безплатно
- Данните остават при теб

За Docker инсталация изпълни тази команда в терминала:

\`\`\`bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  docker.n8n.io/n8nio/n8n
\`\`\`

След това отвори браузъра на \`http://localhost:5678\` и ще видиш n8n интерфейса.

За постоянна инсталация (работи дори след рестарт) използвай:

\`\`\`bash
docker run -d \
  --name n8n \
  --restart unless-stopped \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  docker.n8n.io/n8nio/n8n
\`\`\`

### Стъпка 2: Свързване с OpenAI API

1. Отиди на platform.openai.com → "API Keys" → "Create new secret key"
2. Копирай ключа (показва се само веднъж!)
3. В n8n: Settings → Credentials → "Add Credential" → "OpenAI"
4. Постави API ключа → Save
5. Тествай: създай нов Workflow → добави "OpenAI" нод → изпрати тест съобщение

Цени за OpenAI (GPT-4o-mini е достатъчен за SEO агенти):
- GPT-4o-mini: $0.15 / 1M input tokens, $0.60 / 1M output tokens
- Среден SEO workflow: ~0.02-0.05 лева на изпълнение

### Стъпка 3: Свързване с Google Search Console API

1. Отиди на Google Cloud Console (console.cloud.google.com)
2. Създай нов проект: "SEO Agents"
3. Активирай "Google Search Console API" → Enable
4. Създай OAuth 2.0 credentials: Credentials → "Create Credentials" → "OAuth client ID"
5. Избери "Web application" → добави \`http://localhost:5678/rest/oauth2-credential/callback\` като Authorized redirect URI
6. Копирай Client ID и Client Secret
7. В n8n: Settings → Credentials → "Add Credential" → "Google Search Console OAuth2 API"
8. Постави Client ID и Client Secret → авторизирай

### Стъпка 4: Първи тестови workflow

Създай прост workflow за проверка, че всичко работи:

\`\`\`
Нод 1: Manual Trigger (стартира ръчно)
Нод 2: HTTP Request (GET https://httpbin.org/json)
Нод 3: OpenAI (изпрати данните и поискай кратко резюме)
Нод 4: Gmail / Send Email (изпрати резюмето на имейл)
\`\`\`

Ако получиш имейл с AI-генерирано резюме — всичко е настроено правилно.

> **Ключово:** Не пропускай тестването на всеки нод поотделно преди да свържеш целия workflow. Открий грешките рано — ще спестиш часове по-късно.

---

## Как да изградиш агент, който прави технически SEO одит автоматично? {#seo-audit-agent}

Техническият SEO одит агент е най-ценният агент за повечето SEO специалисти — той замества задача, която ръчно отнема часове, и я прави автоматично всяка седмица.

### Архитектура на агента

\`\`\`
[Schedule Trigger: всеки понеделник в 9:00]
         |
         v
[HTTP Request: изтегли sitemap.xml]
         |
         v
[XML Parser: извлечи списък с URL адреси]
         |
         v
[Split In Batches: обработвай по 10 URL наведнъж]
         |
         v
[HTTP Request: проверка на статус код за всеки URL]
         |
         v
[HTTP Request: PageSpeed Insights API за всеки URL]
         |
         v
[HTML Extract: извлечи H1, meta title, meta description]
         |
         v
[Code нод: провери дали полетата са попълнени и в рамките]
         |
         v
[AI нод (GPT-4o-mini): анализирай проблемите и напиши препоръки]
         |
         v
[Markdown формат: структурирай доклада]
         |
         v
[Slack нод: изпрати в канал #seo-reports]
\`\`\`

### Настройка нод по нод

**Нод 1: Schedule Trigger**
- Тип: Cron
- Настройка: \`0 9 * * 1\` (всеки понеделник в 9:00)
- В n8n: добави "Schedule Trigger" нод → Cron expression → \`0 9 * * 1\`

**Нод 2: HTTP Request за sitemap**
- Method: GET
- URL: \`https://твоя-сайт.com/sitemap.xml\`
- Response format: Text (получаваш XML)

**Нод 3: XML Parser**
- Парсира XML sitemap и извлича всички \`<loc>\` елементи
- Резултат: масив от URL адреси

**Нод 4: Split In Batches**
- Batch size: 10 (за да не претоварваш API-тата)
- Обработва URL-ите групово

**Нод 5: HTTP Request за статус код**
- Method: HEAD (по-бърз от GET)
- URL: \`{{ $json.url }}\`
- Записва статус кода (200, 301, 404, 500...)

**Нод 6: PageSpeed Insights API**
- URL: \`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url={{ $json.url }}&key=ТВОЯ_API_КЛЮЧ\`
- Извлечи: LCP, FID, CLS, Performance Score

**Нод 7: HTML Extract**
- Свали HTML на страницата
- CSS Selector за H1: \`h1\`
- CSS Selector за meta title: \`title\`
- CSS Selector за meta description: \`meta[name="description"]\`

**Нод 8: AI анализ**

Промпт шаблон за AI нода:

\`\`\`
Ти си SEO одитор. Анализирай следните данни за уебстраница и напиши кратки, конкретни препоръки:

URL: {{ $json.url }}
Статус код: {{ $json.statusCode }}
H1: {{ $json.h1 }}
Meta Title: {{ $json.title }} ({{ $json.titleLength }} символа)
Meta Description: {{ $json.description }} ({{ $json.descriptionLength }} символа)
PageSpeed Score: {{ $json.performanceScore }}/100
LCP: {{ $json.lcp }}s
CLS: {{ $json.cls }}

Провери:
- Дали H1 е наличен и описателен
- Дали meta title е между 50-60 символа
- Дали meta description е между 150-160 символа
- Дали PageSpeed Score е над 70
- Дали LCP е под 2.5s
- Дали CLS е под 0.1

Формат: Bullet list с намерени проблеми. Само проблеми — ако всичко е наред, напиши "✓ Без проблеми".
\`\`\`

> **Ключово:** Добави error handling при всеки HTTP нод. Ако URL върне грешка или API fail-не, агентът трябва да продължи с останалите URL-и, а не да спре целия процес.

---

## Как да намираш автоматично теми, за които конкурентите класират, а ти не? {#content-gap-agent}

**Content gap анализът** е процесът на намиране на ключови думи, по които конкурентите ти имат трафик, а ти нямаш. Ръчно отнема часове, с агент — под 20 минути.

### Архитектура на Content Gap агента

\`\`\`
[Trigger: ръчно или всяка седмица]
         |
         v
[Google Search Console API: вземи топ 20 твои страници с трафик]
         |
         v
[Code нод: подготви списък с конкурентни URL-и (ръчно въведен)]
         |
         v
[HTTP Request: Semrush API или Ahrefs API за всеки конкурент]
         (алтернатива: ръчно вземи CSV от Ahrefs → качи в Google Sheet)
         |
         v
[Google Sheets нод: вземи данните от Sheet-а]
         |
         v
[AI нод: сравни темите и идентифицирай gap-ове]
         |
         v
[AI нод: генерирай списък с липсващи теми + search intent]
         |
         v
[Google Sheets нод: запиши новите теми в Sheet "Content Calendar"]
         |
         v
[Gmail нод: изпрати резюме на имейл]
\`\`\`

### Алтернативен подход без платени API

Ако нямаш достъп до Ahrefs или Semrush API (скъпи са), ето безплатна алтернатива:

1. Ръчно изтегли "Top Pages" CSV от Semrush free account (10 резултата) за всеки конкурент
2. Качи CSV-тата в Google Sheets — един tab за всеки конкурент
3. n8n агентът чете данните от Sheets (вместо от API)
4. AI сравнява темите и намира пропуските

### Промпт за AI анализа

\`\`\`
Ти си SEO стратег. Имаш:

МОИ ТЕМИ (топ страници):
{{ $json.myTopPages }}

КОНКУРЕНТ 1 ({{ $json.competitor1Name }}) топ теми:
{{ $json.competitor1Topics }}

КОНКУРЕНТ 2 ({{ $json.competitor2Name }}) топ теми:
{{ $json.competitor2Topics }}

Задача:
1. Намери теми, по които КОНКУРЕНТИТЕ имат трафик, но АЗ нямам съдържание
2. За всяка тема оцени: Search Intent (информационен/транзакционен/навигационен), трудност (лесна/средна/трудна), приоритет (висок/среден/нисък)
3. Препоръчай топ 10 теми, с които да започна

Формат: таблица с колони: Тема | Intent | Трудност | Приоритет | Защо важно
\`\`\`

> **Ключово:** Content gap агентът не е еднократен — пускай го всеки месец. Конкурентите добавят ново съдържание постоянно. Автоматичният мониторинг те държи в крак.

---

## Как да следиш конкурентите автоматично 24/7? {#competitor-monitor-agent}

Конкурентният мониторинг е задача, която никога не спира — конкурентите публикуват ново съдържание, сменят цени, лансират нови продукти. С агент получаваш известие веднага щом се случи нещо важно.

### Архитектура на Competitor Monitor агента

\`\`\`
[Schedule Trigger: всеки ден в 8:00]
         |
         v
[Code нод: зареди списък с конкурентни URL-и]
(съхранен в Google Sheet или JSON файл)
         |
         v
[HTTP Request: изтегли HTML на всяка конкурентна страница]
         |
         v
[HTML Extract: извлечи основно съдържание, заглавия, нови статии]
         |
         v
[AI нод: идентифицирай ключови теми, нови продукти, промени в цени]
         |
         v
[Database нод (Airtable/Notion/Sheet): сравни с вчерашна версия]
         |
         v
[IF нод: открити ли са промени?]
    НЕ: [End — няма известие]
    ДА:
         |
         v
[AI нод: напиши кратко резюме на промените]
         |
         v
[Slack нод: изпрати в #competitor-alerts]
\`\`\`

### Какво да следиш при конкурентите

Не следи всичко — ще се удавиш в нотификации. Избери конкретни сигнали:

**Ново съдържание:**
- Нови статии в блога (следи RSS feed ако има)
- Нови landing pages (следи sitemap)
- Промени в съществуващи ключови страници

**SEO промени:**
- Промени в meta title/description на важни странии
- Нови ключови думи, за които започват да класират
- Промени в site structure

**Бизнес сигнали:**
- Промени в цени
- Нови продукти или услуги
- Промени в "About" страницата (нови партньорства, сертификати)

### Как да съхраниш "снимка" на конкурентите

Нуждаеш се от база данни, в която пазиш вчерашната версия за сравнение. Най-просто: Google Sheets.

Структура на Sheet "Competitor Snapshots":
\`\`\`
| Date | Competitor URL | H1 | Meta Title | Main Content Hash | New Articles |
|------|---------------|-----|------------|-------------------|--------------|
| 2026-05-29 | competitor.com/blog | ... | ... | abc123 | [list] |
| 2026-05-28 | competitor.com/blog | ... | ... | xyz789 | [list] |
\`\`\`

Агентът сравнява "Content Hash" — ако се е сменил, има промени.

> **Ключово:** Не добавяй повече от 10-15 конкурентни URL-и за мониторинг. Повече означава повече false positives, повече Slack шум, по-малко действителна стойност.

---

## Как да генерираш SEO brief за ново съдържание с AI агент? {#content-brief-agent}

**Content brief** е документ, който описва всичко, което авторът трябва да знае, преди да напише статия — цел, ключови думи, структура, конкурентен анализ, FAQ. Ръчно отнема 2-3 часа, с агент — 10 минути.

### Архитектура на Content Brief агента

\`\`\`
[Trigger: получена ключова дума от Slack команда или Google Form]
         |
         v
[GSC API: провери дали вече класираш по тази дума]
(и на каква позиция, колко clicks/impressions)
         |
         v
[HTTP Request: вземи топ 5 резултата от SERP]
(чрез SerpAPI или DataForSEO)
         |
         v
[HTTP Request: изтегли HTML на всяка от топ 5 страниции]
         |
         v
[AI нод: анализирай структурата, headings, дължина, FAQ секции]
         |
         v
[AI нод: генерирай content brief]
         |
         v
[Notion нод или Google Docs нод: запиши brief]
         |
         v
[Slack нод: изпрати линк към brief]
\`\`\`

### Промпт за генериране на content brief

\`\`\`
Ти си старши SEO стратег. Генерирай детайлен content brief на база следния анализ:

КЛЮЧОВА ДУМА: {{ $json.keyword }}
ТЕКУЩА ПОЗИЦИЯ: {{ $json.currentPosition }} ({{ $json.currentClicks }} clicks/месец)

АНАЛИЗ НА ТОП 5 КОНКУРЕНТНИ СТАТИИ:
{{ $json.competitorAnalysis }}

Структура на brief:
1. МЕТА ИНФОРМАЦИЯ
   - Препоръчан meta title (50-60 символа)
   - Препоръчана meta description (150-160 символа)
   - Target ключова дума + 3-5 LSI варианта

2. СТРУКТУРА НА СТАТИЯТА
   - Препоръчано H1
   - H2 секции (минимум 6) с кратко описание какво да покрие всяка
   - Препоръчана дължина: X думи (базирано на конкурентите)

3. УНИКАЛЕН ЪГЪЛ
   - Какво липсва в конкурентните статии?
   - Какво ще направи тази статия по-добра?

4. FAQ СЕКЦИЯ
   - 5 въпроса, базирани на "People Also Ask" и темата

5. ВЪТРЕШНИ ЛИНКОВЕ
   - Препоръки за 3-5 вътрешни линка

6. ИЗИСКВАНИЯ ЗА E-E-A-T
   - Трябват ли реални примери, статистики, автор с credentials?

Бъди конкретен и action-oriented. Авторът трябва да може да започне веднага.
\`\`\`

> **Ключово:** Content brief агентът е може би с най-висок ROI от всички SEO агенти. Намалява времето за подготовка от часове до минути, без да компрометира качеството.

---

## Как да следиш позициите си и да получаваш автоматични доклади? {#rank-tracking-agent}

Следенето на позиции е задача, която всеки SEO специалист прави — и всеки я мрази, защото е бавна и скучна. Агентът я прави автоматично и те изпраща директно доклада.

### Архитектура на Rank Tracking агента

\`\`\`
[Schedule Trigger: всяка неделя в 8:00]
         |
         v
[Google Sheets нод: вземи списък с target ключови думи]
         |
         v
[За всяка ключова дума: GSC API заявка]
  - impressions тази седмица
  - clicks тази седмица
  - average position тази седмица
         |
         v
[Google Sheets нод: вземи данните от миналата седмица]
         |
         v
[Code нод: изчисли week-over-week промяна]
  - позиция: +2 (подобрение) или -3 (спад)
  - clicks: +15% или -8%
         |
         v
[AI нод: напиши наративно резюме на доклада]
         |
         v
[Google Sheets нод: запиши данните (за исторически анализ)]
         |
         v
[Gmail нод: изпрати PDF доклад]
\`\`\`

### Промпт за наративния доклад

\`\`\`
Ти си SEO аналитик. Напиши кратък, ясен седмичен доклад на база тези данни:

ОБОБЩЕНИЕ (тази седмица):
- Общо ключови думи следени: {{ $json.totalKeywords }}
- Подобрили се: {{ $json.improved }} думи
- Влошили се: {{ $json.declined }} думи
- Без промяна: {{ $json.unchanged }} думи

ТОП ДВИЖЕЩИ СЕ (нагоре):
{{ $json.topMoversUp }}

ТОП ДВИЖЕЩИ СЕ (надолу):
{{ $json.topMoversDown }}

НОВИ В ТОП 10:
{{ $json.newInTop10 }}

ИЗПАДНАЛИ ОТ ТОП 10:
{{ $json.droppedFromTop10 }}

Напиши:
1. Executive summary (2-3 изречения) — общата картина
2. Топ победа на седмицата (специфична ключова дума и защо е важна)
3. Топ тревога (ако има значително влошаване)
4. Препоръчано действие (1 конкретно нещо за тази седмица)

Тон: professional, data-driven, конкретен. Без маркетингов жаргон.
\`\`\`

> **Ключово:** GSC API дава позиции с 3-дневно закъснение. Не паникувай ако "тазседмичните" данни изглеждат странни в понеделник — те може да включват данни само до четвъртък.

---

## Кои API-та са задължителни за SEO агенти? {#api-connections}

API-тата са "вратите", чрез които агентите получават данни и извършват действия. Ето кои са задължителни и кои опционални.

### Таблица на задължителните API

| API | Какво прави | Free tier | Приблизителна цена | Документация |
|-----|-------------|-----------|---------------------|--------------|
| **Google Search Console API** | Позиции, clicks, impressions за твоите URL-и | Безплатно, 50 000 заявки/ден | Безплатно | search.google.com/search-console/about |
| **PageSpeed Insights API** | Core Web Vitals, performance score | Безплатно, 25 000 заявки/ден | Безплатно | developers.google.com/speed/docs/insights |
| **OpenAI API** | GPT-4o за AI анализ и генерация | $5 безплатен кредит | $0.15-$15 / 1M tokens | platform.openai.com/docs |
| **Anthropic Claude API** | Claude за AI анализ (алтернатива на OpenAI) | $5 безплатен кредит | $0.25-$15 / 1M tokens | docs.anthropic.com |
| **Ahrefs API** | Backlinks, keyword difficulty, competitor data | Няма | $500+/месец | ahrefs.com/api |
| **Semrush API** | Keywords, site audit, competitor research | Ограничен | $100+/месец | developer.semrush.com |
| **DataForSEO API** | SERP данни, keyword research | 100 заявки безплатно | $50-200/месец | docs.dataforseo.com |
| **Screaming Frog API** | Пълен site crawl | Само с лиценз | £209/годишно | screaming frog.co.uk |

### Как да стартираш без платени API

За начало имаш нужда само от **безплатните** API:
1. Google Search Console API (безплатно)
2. PageSpeed Insights API (безплатно)
3. OpenAI API (~$5/месец при умерена употреба)

С тези три можеш да изградиш:
- Технически SEO одит агент
- Rank tracking агент (за твоите собствени думи)
- Content analysis агент
- Седмичен доклад агент

### Сигурност при API ключове

Никога не слагай API ключове директно в n8n workflow кода. Винаги използвай:
- **n8n Credentials** (Settings → Credentials) — те са криптирани
- За self-hosted: environment variables в Docker
- Никога не commit-вай API ключове в Git

---

## Кои SEO задачи НЕ трябва да автоматизираш? {#when-not-to-automate}

Агентите са мощни, но не са подходящи за всичко. Ето задачите, при които хора-специалистът е незаменим — и защо.

### 1. Творческа стратегия и позициониране

**Какво е:** Решения като "Коя аудитория да таргетираме?", "Каква да е тоналността на бранда?", "Трябва ли да влезем в нова категория?"

**Защо не може агент:** Стратегическите решения изискват разбиране на бизнес контекста, индустриалните тенденции, конкурентната динамика и бизнес целите. AI може да предложи опции, но изборът изисква judgment.

### 2. Клиентска комуникация, изискваща емпатия

**Какво е:** Обаждания с клиенти, при които те са притеснени, разочаровани или объркани от резултатите.

**Защо не може агент:** Доверието в клиентската връзка се гради чрез истинска свързаност. Клиент, който получава автоматичен имейл в момент на криза, губи доверие в теб.

### 3. Първоначална архитектура на сайта

**Какво е:** Решения за URL структура, категоризация на съдържанието, вътрешно свързване на ниво проект.

**Защо не може агент:** Грешките в архитектурата са трудни и скъпи за поправяне. Изискват дълбоко разбиране на бизнеса, потребителите и SEO стратегията — едновременно.

### 4. Съдържание, изискващо реална експертиза (E-E-A-T)

**Какво е:** Статии по медицински, финансови, правни или силно специализирани технически теми.

**Защо не може агент:** Google (и потребителите) разпознават AI-генерирано съдържание, което липсва на реален опит. За YMYL (Your Money Your Life) теми, слабото E-E-A-T може да навреди на класирането или, по-лошо — да навреди на читателите.

### 5. Link outreach и изграждане на връзки

**Какво е:** Писане до собственици на сайтове, предлагане на guest posts, изграждане на партньорства.

**Защо не може агент:** Качественият link building е изграждане на бизнес взаимоотношения. Автоматизираните outreach имейли се разпознават мигновено и се изтриват. По-лошо — могат да навредят на репутацията ти.

> **Ключово:** Правилото е просто: автоматизирай **данните и анализа**, но запази **решенията и взаимоотношенията** за хора. Агентите са инструменти за усилване на способностите ти — не заместители на твоя judgment.

---

## Готов ли си да пуснеш първия си SEO агент? Пълен чеклист {#agent-checklist}

Преди да пуснеш агент в продукция, провери всяка точка. Пропуснат детайл може да означава агент, който изпраща 500 грешни имейла или трупа API разходи без полезен резултат.

### Технически чеклист

**Инфраструктура:**
- [ ] n8n е инсталиран и достъпен (Cloud или Docker)
- [ ] n8n е с актуална версия
- [ ] Docker container е настроен с \`--restart unless-stopped\`
- [ ] Имаш backup на n8n данните (volume mount)
- [ ] n8n е достъпен само по HTTPS (за cloud/production)

**API ключове:**
- [ ] OpenAI API ключ е добавен в n8n Credentials
- [ ] Google Search Console OAuth е настроен и тестван
- [ ] PageSpeed Insights API ключ е добавен
- [ ] Всички API ключове са в n8n Credentials (не в workflow кода)
- [ ] Имаш budget alert за OpenAI (не харчи неочаквано)

**Workflow настройка:**
- [ ] Всеки нод е тестван поотделно с реални данни
- [ ] Error handling е добавен при всеки HTTP Request нод
- [ ] Workflow не спира при единична грешка (Continue on Fail)
- [ ] Logs са включени (Settings → Log Level)
- [ ] Test run е направен с 5 URL преди пълния crawl

### Функционален чеклист

**Данни:**
- [ ] Google Search Console е свързан с правилния имот (property)
- [ ] Имаш поне 3 месеца данни в GSC за смислен анализ
- [ ] Списъкът с ключови думи е в Google Sheet (и агентът може да го чете)
- [ ] Sitemap.xml е валиден и достъпен
- [ ] Конкурентните URL-и са верифицирани ръчно преди автоматизация

**AI промпти:**
- [ ] Промптите са тествани ръчно в ChatGPT/Claude преди да ги вкараш в агент
- [ ] Промптите дават конкретен, структуриран изход (не есе)
- [ ] Изходният формат е съвместим с следващия нод (JSON, Markdown, и т.н.)
- [ ] Промптите имат fallback ("ако няма данни, напиши 'N/A'")

**Нотификации:**
- [ ] Slack интеграцията е тествана (изпраща в правилния канал)
- [ ] Email изпращането е тествано с реален имейл
- [ ] Форматът на доклада е четим и полезен
- [ ] Не изпращаш нотификации при "без промени" (само при реални проблеми)

### Операционален чеклист (след пускане)

- [ ] Провери агента ръчно след първото автоматично изпълнение
- [ ] Настрои alert ако агентът не се е изпълнил (Execution failed notification)
- [ ] Документирай workflow-а (кратка бележка в Google Doc — "Какво прави, кога, как да го спреш")
- [ ] Имаш начин бързо да спреш агента при проблем (Disable в n8n)
- [ ] Планираш преглед след 2 седмици: работи ли? Полезен ли е докладът?

> **Ключово:** Пускай агентите постепенно. Започни с 1 агент, дай му 2 седмици, след това добави следващия. По-добре 1 агент, който работи перфектно, от 5 агента, за които не знаеш дали данните са верни.
`,
    en: `## What is an AI agent — and how is it different from regular automation? {#what-is-ai-agent}

**An AI agent** is a software system that perceives its environment, makes decisions, and takes actions to achieve a goal — without a human needing to approve each step. Give it a task, and it figures out how to complete it, uses tools, checks the results, and adapts when something goes wrong.

The best analogy: think of it as a **virtual employee who follows a checklist 24/7 and never forgets a step**. If you tell it "run an SEO audit on my site every Monday", it will do exactly that — at 9am, without reminders, without distraction errors, without emailing you "how do I do this again?".

### Chatbot vs Agent vs Automation — the key distinction

Many people confuse these three things. Here is the precise breakdown:

**Chatbot (e.g. ChatGPT in a browser window):**
- You ask a question → you get an answer → done
- One input → one output
- Takes no actions in the real world
- Does not remember previous conversations (without Memory)
- Example: "What is Core Web Vitals?" → explanation

**Simple automation (if X, then Y):**
- Rule: "If I receive an email with subject 'SEO Report', save the file to Drive"
- Fixed logic — cannot think
- Cannot decide what to do in a new situation
- Example: Zapier trigger → action

**AI Agent:**
- You give a goal: "Find the top 10 keywords where our competitors outrank us"
- The agent decides on its own: (1) which competitors to check, (2) which API to use, (3) how to compare the data, (4) how to format the result
- Can handle unexpected situations (API returns an error → tries an alternative method)
- Takes real actions: sends emails, saves to Google Sheet, posts to Slack

### How an AI agent "thinks"

Under the hood, the agent follows a loop known as **ReAct (Reason + Act)**:

\`\`\`
1. PERCEIVE — receives information (task, API data, result from previous step)
2. THINK — decides what to do next (using an LLM like GPT-4 or Claude)
3. ACT — calls a tool (HTTP request, Google Sheet, Slack message)
4. OBSERVE — reads the result of the action
5. REPEAT — if the goal is not achieved, starts another iteration
\`\`\`

The difference from simple automation: step 2 ("THINK") does not exist in Zapier or Make.com. There, a predefined logic is simply executed. With an agent — AI decides what to do next, based on context.

> **Key insight:** An AI agent is not just "a smarter Zapier". It can reason, adapt, and make decisions in real time — something that regular automation fundamentally cannot do.

---

## Why are AI agents revolutionary for SEO work? {#why-agents-for-seo}

AI agents are revolutionary for SEO because **80% of SEO work is repetitive and data-driven** — exactly the kind of tasks where agents excel. Checking broken links, monitoring rankings, analyzing meta tags, finding content gaps — all of this can be automated.

The real problem: the average SEO professional spends **60-70% of their working time** collecting and processing data, instead of doing strategic thinking. Agents flip this proportion.

### How much do agents actually save?

| SEO task | Manual (hours/week) | With agent (minutes) | Saving |
|----------|---------------------|----------------------|--------|
| Technical SEO audit (100 URLs) | 4 hours | 15 minutes | 93% |
| Checking rankings for 50 keywords | 2 hours | 5 minutes | 96% |
| Finding content gaps vs 3 competitors | 6 hours | 20 minutes | 94% |
| Monitoring competitor changes | 3 hours/week | Automated 24/7 | 100% |
| Generating content briefs (5 pieces) | 5 hours | 30 minutes | 90% |
| Weekly management report | 2 hours | Automated | 100% |

**Total weekly savings: ~22 hours → under 1 hour**

### Real example: Automated technical audit

Here is how the real transition looks for an SEO agency with 15 clients:

**Before (manual):**
- Every Monday: logging into Screaming Frog, starting a crawl for each client
- Waiting 30-45 minutes per site
- Exporting data, formatting in Excel
- Writing an email report
- Total: 4 hours × 15 clients = 60 hours/month just for audits

**After (with agent):**
- n8n agent starts every Monday at 9:00
- Checks all 15 sites in parallel via PageSpeed Insights API and HTTP requests
- AI analyzes the data and writes recommendations
- Automatically sends a report to each client
- Total: 15 minutes to set up → 0 hours of weekly work

> **Key insight:** Agents do not replace the SEO specialist — they give them superpowers. They can now redirect those 60 hours toward strategy, client meetings, and creative work.

### Which SEO tasks are ideal for automation?

- Tasks that repeat following the same rules
- Tasks where data comes from an API (GSC, PageSpeed, Ahrefs)
- Tasks where the output is text or numbers (not design, not strategy)
- Tasks where "good enough" is genuinely good enough

---

## n8n, Make.com, Zapier, or Python — which should you choose? {#tool-comparison}

The choice of tool is critical — the wrong choice means you will need to switch after two months and rebuild everything. Here is the full comparison:

### Full comparison table

| Criterion | n8n | Make.com | Zapier | LangChain/Python | Direct API calls |
|-----------|-----|----------|--------|-----------------|------------------|
| **Price** | Free (self-hosted) / €20/mo (cloud) | Free (1000 ops) / €9/mo | Free (100 tasks) / $20/mo | Free (open source) | Free (server only) |
| **Complexity** | Medium | Low-medium | Low | High | Very high |
| **AI support** | Excellent (built-in AI agent node) | Good (HTTP to OpenAI) | Moderate (via OpenAI app) | Excellent (native) | Full freedom |
| **Self-hosted?** | Yes (Docker) | No | No | Yes | Yes |
| **Visual interface** | Yes | Yes | Yes | No | No |
| **Requires coding** | No (for basics) | No | No | Yes | Yes |
| **Best for** | SEO agencies, freelancers, small teams | Business users | Non-technical users | Developers | Senior engineers |
| **Limitations** | Learning curve, documentation | Expensive at scale | Very expensive at scale | Lots of code | Everything from scratch |

### Detailed explanation of each tool

**n8n** (recommended for most SEO professionals)

n8n is an **open-source automation tool** with a visual interface. It works like Zapier, but is free when self-hosted and has a built-in AI agent node that can reason and make decisions.

Why n8n for SEO:
- Built-in "AI Agent" node, powered by GPT-4 or Claude
- Direct integrations with Google Search Console, Google Sheets, Slack, Notion
- HTTP Request node for any API without a native integration
- Completely free with Docker installation
- You can write JavaScript in nodes when needed

**Make.com (formerly Integromat)**

Make.com is a visual tool with many integrations. Suitable for simpler automations without AI reasoning. With complex AI agents, its limitations become apparent.

**Zapier**

Zapier is the simplest, but also the most expensive. Once you hit 1000 tasks per month, costs escalate quickly. We recommend it only if you are already using and paying for it.

**LangChain/Python**

If you are a developer, LangChain gives full freedom. You can build an agent with long memory, complex logic, and custom tools. Recommended for specific requirements where n8n is insufficient.

**Direct API calls**

For senior developers who want complete control. You write everything — from scratch, in Python or Node.js.

> **Key insight:** For 90% of SEO professionals, we recommend **n8n self-hosted**. Free, powerful, with built-in AI, without requiring you to write code for basic automations. Start with it.

---

## How to set up n8n for SEO agents step by step? {#n8n-setup}

Setting up n8n takes under 30 minutes. Here are the exact steps:

### Step 1: Choose your installation method

**Option A: n8n Cloud (recommended for beginners)**
- Go to n8n.io → "Get Started for Free"
- Register an account
- Price: €20/month for 5000 executions
- Advantage: Nothing to install, accessible from anywhere
- Disadvantage: Cost, data passes through their servers

**Option B: Docker self-hosted (recommended for advanced users)**
- Requires a server or local computer with Docker
- Completely free
- Data stays with you

For a Docker installation, run this command in your terminal:

\`\`\`bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  docker.n8n.io/n8nio/n8n
\`\`\`

Then open your browser at \`http://localhost:5678\` and you will see the n8n interface.

For a permanent installation (runs even after restart):

\`\`\`bash
docker run -d \
  --name n8n \
  --restart unless-stopped \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  docker.n8n.io/n8nio/n8n
\`\`\`

### Step 2: Connect to OpenAI API

1. Go to platform.openai.com → "API Keys" → "Create new secret key"
2. Copy the key (it is only shown once!)
3. In n8n: Settings → Credentials → "Add Credential" → "OpenAI"
4. Paste the API key → Save
5. Test: create a new Workflow → add an "OpenAI" node → send a test message

OpenAI pricing (GPT-4o-mini is sufficient for SEO agents):
- GPT-4o-mini: $0.15 / 1M input tokens, $0.60 / 1M output tokens
- Average SEO workflow: ~$0.02-0.05 per execution

### Step 3: Connect to Google Search Console API

1. Go to Google Cloud Console (console.cloud.google.com)
2. Create a new project: "SEO Agents"
3. Enable "Google Search Console API" → Enable
4. Create OAuth 2.0 credentials: Credentials → "Create Credentials" → "OAuth client ID"
5. Select "Web application" → add \`http://localhost:5678/rest/oauth2-credential/callback\` as Authorized redirect URI
6. Copy Client ID and Client Secret
7. In n8n: Settings → Credentials → "Add Credential" → "Google Search Console OAuth2 API"
8. Paste Client ID and Client Secret → authorize

### Step 4: First test workflow

Build a simple workflow to verify everything works:

\`\`\`
Node 1: Manual Trigger (starts manually)
Node 2: HTTP Request (GET https://httpbin.org/json)
Node 3: OpenAI (send the data and ask for a brief summary)
Node 4: Gmail / Send Email (send the summary to an email address)
\`\`\`

If you receive an email with an AI-generated summary — everything is configured correctly.

> **Key insight:** Do not skip testing each node individually before connecting the full workflow. Find errors early — it will save you hours later.

---

## How to build an agent that runs a technical SEO audit automatically? {#seo-audit-agent}

The technical SEO audit agent is the most valuable agent for most SEO professionals — it replaces a task that manually takes hours, and runs it automatically every week.

### Agent architecture

\`\`\`
[Schedule Trigger: every Monday at 9:00]
         |
         v
[HTTP Request: download sitemap.xml]
         |
         v
[XML Parser: extract list of URLs]
         |
         v
[Split In Batches: process 10 URLs at a time]
         |
         v
[HTTP Request: check status code for each URL]
         |
         v
[HTTP Request: PageSpeed Insights API for each URL]
         |
         v
[HTML Extract: pull H1, meta title, meta description]
         |
         v
[Code node: check if fields are present and within limits]
         |
         v
[AI node (GPT-4o-mini): analyze issues and write recommendations]
         |
         v
[Markdown formatter: structure the report]
         |
         v
[Slack node: send to #seo-reports channel]
\`\`\`

### Node-by-node setup

**Node 1: Schedule Trigger**
- Type: Cron
- Setting: \`0 9 * * 1\` (every Monday at 9:00)
- In n8n: add "Schedule Trigger" node → Cron expression → \`0 9 * * 1\`

**Node 2: HTTP Request for sitemap**
- Method: GET
- URL: \`https://your-site.com/sitemap.xml\`
- Response format: Text (returns XML)

**Node 3: XML Parser**
- Parses XML sitemap and extracts all \`<loc>\` elements
- Output: array of URLs

**Node 4: Split In Batches**
- Batch size: 10 (to avoid overloading APIs)
- Processes URLs in groups

**Node 5: HTTP Request for status code**
- Method: HEAD (faster than GET)
- URL: \`{{ $json.url }}\`
- Records the status code (200, 301, 404, 500...)

**Node 6: PageSpeed Insights API**
- URL: \`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url={{ $json.url }}&key=YOUR_API_KEY\`
- Extract: LCP, FID, CLS, Performance Score

**Node 7: HTML Extract**
- Download the page HTML
- CSS Selector for H1: \`h1\`
- CSS Selector for meta title: \`title\`
- CSS Selector for meta description: \`meta[name="description"]\`

**Node 8: AI analysis**

Prompt template for the AI node:

\`\`\`
You are an SEO auditor. Analyze the following data for a web page and write short, specific recommendations:

URL: {{ $json.url }}
Status code: {{ $json.statusCode }}
H1: {{ $json.h1 }}
Meta Title: {{ $json.title }} ({{ $json.titleLength }} characters)
Meta Description: {{ $json.description }} ({{ $json.descriptionLength }} characters)
PageSpeed Score: {{ $json.performanceScore }}/100
LCP: {{ $json.lcp }}s
CLS: {{ $json.cls }}

Check:
- Is H1 present and descriptive?
- Is meta title between 50-60 characters?
- Is meta description between 150-160 characters?
- Is PageSpeed Score above 70?
- Is LCP below 2.5s?
- Is CLS below 0.1?

Format: Bullet list of found issues. Issues only — if everything is fine, write "✓ No issues".
\`\`\`

> **Key insight:** Add error handling at every HTTP node. If a URL returns an error or an API fails, the agent should continue with the remaining URLs, not stop the entire process.

---

## How to automatically find topics your competitors rank for but you don't? {#content-gap-agent}

**Content gap analysis** is the process of finding keywords where your competitors have traffic but you have no content. Manually it takes hours; with an agent — under 20 minutes.

### Content Gap agent architecture

\`\`\`
[Trigger: manually or every week]
         |
         v
[Google Search Console API: get your top 20 pages with traffic]
         |
         v
[Code node: prepare list of competitor URLs (manually entered)]
         |
         v
[HTTP Request: Semrush API or Ahrefs API for each competitor]
(alternative: manually export CSV from Ahrefs → upload to Google Sheet)
         |
         v
[Google Sheets node: read data from the sheet]
         |
         v
[AI node: compare topics and identify gaps]
         |
         v
[AI node: generate list of missing topics + search intent]
         |
         v
[Google Sheets node: save new topics to sheet "Content Calendar"]
         |
         v
[Gmail node: send summary by email]
\`\`\`

### Alternative approach without paid APIs

If you do not have access to Ahrefs or Semrush API (they are expensive), here is a free alternative:

1. Manually export "Top Pages" CSV from a Semrush free account (10 results) for each competitor
2. Upload CSVs to Google Sheets — one tab per competitor
3. The n8n agent reads data from Sheets (instead of from the API)
4. AI compares topics and finds the gaps

### Prompt for the AI analysis

\`\`\`
You are an SEO strategist. You have:

MY TOPICS (top pages):
{{ $json.myTopPages }}

COMPETITOR 1 ({{ $json.competitor1Name }}) top topics:
{{ $json.competitor1Topics }}

COMPETITOR 2 ({{ $json.competitor2Name }}) top topics:
{{ $json.competitor2Topics }}

Task:
1. Find topics where COMPETITORS have traffic but I have NO content
2. For each topic assess: Search Intent (informational/transactional/navigational), difficulty (easy/medium/hard), priority (high/medium/low)
3. Recommend the top 10 topics to start with

Format: table with columns: Topic | Intent | Difficulty | Priority | Why it matters
\`\`\`

> **Key insight:** The content gap agent is not a one-time run — schedule it every month. Competitors add new content constantly. Automated monitoring keeps you ahead.

---

## How to monitor competitors automatically 24/7? {#competitor-monitor-agent}

Competitor monitoring is a task that never stops — competitors publish new content, change prices, launch new products. With an agent, you get a notification the moment something important happens.

### Competitor Monitor agent architecture

\`\`\`
[Schedule Trigger: every day at 8:00]
         |
         v
[Code node: load list of competitor URLs]
(stored in Google Sheet or JSON file)
         |
         v
[HTTP Request: download HTML from each competitor page]
         |
         v
[HTML Extract: pull main content, headings, new articles]
         |
         v
[AI node: identify key topics, new products, price changes]
         |
         v
[Database node (Airtable/Notion/Sheet): compare to yesterday's version]
         |
         v
[IF node: were changes detected?]
    NO: [End — no notification]
    YES:
         |
         v
[AI node: write brief summary of changes]
         |
         v
[Slack node: send to #competitor-alerts]
\`\`\`

### What to monitor at competitors

Do not monitor everything — you will drown in notifications. Choose specific signals:

**New content:**
- New blog articles (follow RSS feed if available)
- New landing pages (follow sitemap)
- Changes to existing key pages

**SEO changes:**
- Changes to meta title/description of important pages
- New keywords they start ranking for
- Changes in site structure

**Business signals:**
- Price changes
- New products or services
- Changes to "About" page (new partnerships, certifications)

### How to store a "snapshot" of competitors

You need a database where you save yesterday's version for comparison. The simplest: Google Sheets.

Structure of the "Competitor Snapshots" sheet:
\`\`\`
| Date | Competitor URL | H1 | Meta Title | Main Content Hash | New Articles |
|------|---------------|-----|------------|-------------------|--------------|
| 2026-05-29 | competitor.com/blog | ... | ... | abc123 | [list] |
| 2026-05-28 | competitor.com/blog | ... | ... | xyz789 | [list] |
\`\`\`

The agent compares the "Content Hash" — if it has changed, there are changes.

> **Key insight:** Do not add more than 10-15 competitor URLs to monitor. More means more false positives, more Slack noise, and less actual value.

---

## How to generate an SEO brief for new content with an AI agent? {#content-brief-agent}

A **content brief** is a document that describes everything an author needs to know before writing an article — goal, keywords, structure, competitive analysis, FAQ. Manually it takes 2-3 hours; with an agent — 10 minutes.

### Content Brief agent architecture

\`\`\`
[Trigger: keyword received from Slack command or Google Form]
         |
         v
[GSC API: check if you already rank for this keyword]
(and at what position, how many clicks/impressions)
         |
         v
[HTTP Request: get top 5 SERP results]
(via SerpAPI or DataForSEO)
         |
         v
[HTTP Request: download HTML from each of the top 5 pages]
         |
         v
[AI node: analyze structure, headings, word count, FAQ sections]
         |
         v
[AI node: generate content brief]
         |
         v
[Notion node or Google Docs node: save brief]
         |
         v
[Slack node: send link to brief]
\`\`\`

### Prompt for generating a content brief

\`\`\`
You are a senior SEO strategist. Generate a detailed content brief based on the following analysis:

KEYWORD: {{ $json.keyword }}
CURRENT POSITION: {{ $json.currentPosition }} ({{ $json.currentClicks }} clicks/month)

ANALYSIS OF TOP 5 COMPETITOR ARTICLES:
{{ $json.competitorAnalysis }}

Brief structure:
1. META INFORMATION
   - Recommended meta title (50-60 characters)
   - Recommended meta description (150-160 characters)
   - Target keyword + 3-5 LSI variants

2. ARTICLE STRUCTURE
   - Recommended H1
   - H2 sections (minimum 6) with brief description of what each should cover
   - Recommended length: X words (based on competitors)

3. UNIQUE ANGLE
   - What is missing from competitor articles?
   - What will make this article better?

4. FAQ SECTION
   - 5 questions based on "People Also Ask" and the topic

5. INTERNAL LINKS
   - Recommendations for 3-5 internal links

6. E-E-A-T REQUIREMENTS
   - Are real examples, statistics, and credentialed author needed?

Be specific and action-oriented. The author should be able to start immediately.
\`\`\`

> **Key insight:** The content brief agent probably has the highest ROI of all SEO agents. It reduces preparation time from hours to minutes, without compromising quality.

---

## How to track your rankings and receive automatic reports? {#rank-tracking-agent}

Rank tracking is a task every SEO professional does — and everyone hates, because it is slow and tedious. The agent does it automatically and sends you the report directly.

### Rank Tracking agent architecture

\`\`\`
[Schedule Trigger: every Sunday at 8:00]
         |
         v
[Google Sheets node: get list of target keywords]
         |
         v
[For each keyword: GSC API query]
  - impressions this week
  - clicks this week
  - average position this week
         |
         v
[Google Sheets node: get last week's data]
         |
         v
[Code node: calculate week-over-week change]
  - position: +2 (improvement) or -3 (decline)
  - clicks: +15% or -8%
         |
         v
[AI node: write narrative report summary]
         |
         v
[Google Sheets node: save data (for historical analysis)]
         |
         v
[Gmail node: send PDF report]
\`\`\`

### Prompt for the narrative report

\`\`\`
You are an SEO analyst. Write a brief, clear weekly report based on this data:

SUMMARY (this week):
- Total keywords tracked: {{ $json.totalKeywords }}
- Improved: {{ $json.improved }} keywords
- Declined: {{ $json.declined }} keywords
- Unchanged: {{ $json.unchanged }} keywords

TOP MOVERS (up):
{{ $json.topMoversUp }}

TOP MOVERS (down):
{{ $json.topMoversDown }}

NEW IN TOP 10:
{{ $json.newInTop10 }}

DROPPED FROM TOP 10:
{{ $json.droppedFromTop10 }}

Write:
1. Executive summary (2-3 sentences) — the overall picture
2. Top win of the week (specific keyword and why it matters)
3. Top concern (if there is significant decline)
4. Recommended action (1 specific thing to do this week)

Tone: professional, data-driven, specific. No marketing jargon.
\`\`\`

> **Key insight:** GSC API delivers position data with a 3-day delay. Do not panic if "this week's" data looks odd on Monday — it may only include data through Thursday.

---

## Which APIs are essential for SEO agents? {#api-connections}

APIs are the "doors" through which agents receive data and perform actions. Here are the essential ones and the optional ones.

### Table of essential APIs

| API | What it does | Free tier | Approximate cost | Documentation |
|-----|-------------|-----------|-----------------|---------------|
| **Google Search Console API** | Positions, clicks, impressions for your URLs | Free, 50,000 queries/day | Free | search.google.com/search-console/about |
| **PageSpeed Insights API** | Core Web Vitals, performance score | Free, 25,000 requests/day | Free | developers.google.com/speed/docs/insights |
| **OpenAI API** | GPT-4o for AI analysis and generation | $5 free credit | $0.15-$15 / 1M tokens | platform.openai.com/docs |
| **Anthropic Claude API** | Claude for AI analysis (OpenAI alternative) | $5 free credit | $0.25-$15 / 1M tokens | docs.anthropic.com |
| **Ahrefs API** | Backlinks, keyword difficulty, competitor data | None | $500+/month | ahrefs.com/api |
| **Semrush API** | Keywords, site audit, competitor research | Limited | $100+/month | developer.semrush.com |
| **DataForSEO API** | SERP data, keyword research | 100 requests free | $50-200/month | docs.dataforseo.com |
| **Screaming Frog API** | Full site crawl | License required | £209/year | screamingfrog.co.uk |

### How to start without paid APIs

To begin, you only need the **free** APIs:
1. Google Search Console API (free)
2. PageSpeed Insights API (free)
3. OpenAI API (~$5/month with moderate usage)

With these three you can build:
- Technical SEO audit agent
- Rank tracking agent (for your own keywords)
- Content analysis agent
- Weekly report agent

### API key security

Never put API keys directly in n8n workflow code. Always use:
- **n8n Credentials** (Settings → Credentials) — they are encrypted
- For self-hosted: environment variables in Docker
- Never commit API keys to Git

---

## Which SEO tasks should you NOT automate? {#when-not-to-automate}

Agents are powerful, but they are not right for everything. Here are the tasks where the human specialist is irreplaceable — and why.

### 1. Creative strategy and positioning

**What it is:** Decisions like "Which audience should we target?", "What should our brand tone be?", "Should we enter a new category?"

**Why agents cannot do it:** Strategic decisions require understanding business context, industry trends, competitive dynamics, and business goals. AI can suggest options, but the choice requires judgment.

### 2. Client communication requiring empathy

**What it is:** Client calls where they are worried, disappointed, or confused about results.

**Why agents cannot do it:** Trust in the client relationship is built through genuine connection. A client who receives an automated email during a moment of crisis loses trust in you.

### 3. Initial site architecture

**What it is:** Decisions about URL structure, content categorization, internal linking at the project level.

**Why agents cannot do it:** Architecture mistakes are difficult and costly to fix. They require deep simultaneous understanding of the business, the users, and the SEO strategy.

### 4. Content requiring real expertise (E-E-A-T)

**What it is:** Articles on medical, financial, legal, or highly specialized technical topics.

**Why agents cannot do it:** Google (and users) recognize AI-generated content that lacks real experience. For YMYL (Your Money Your Life) topics, weak E-E-A-T can hurt rankings or, worse — harm readers.

### 5. Link outreach and relationship building

**What it is:** Writing to site owners, proposing guest posts, building partnerships.

**Why agents cannot do it:** Quality link building is building business relationships. Automated outreach emails are recognized instantly and deleted. Worse — they can damage your reputation.

> **Key insight:** The rule is simple: automate **data and analysis**, but keep **decisions and relationships** for humans. Agents are tools for amplifying your capabilities — not replacements for your judgment.

---

## Are you ready to launch your first SEO agent? Full checklist {#agent-checklist}

Before launching an agent in production, check every item. A missed detail can mean an agent that sends 500 wrong emails or accumulates API costs without useful output.

### Technical checklist

**Infrastructure:**
- [ ] n8n is installed and accessible (Cloud or Docker)
- [ ] n8n is on the latest version
- [ ] Docker container is configured with \`--restart unless-stopped\`
- [ ] You have a backup of n8n data (volume mount)
- [ ] n8n is accessible only over HTTPS (for cloud/production)

**API keys:**
- [ ] OpenAI API key is added in n8n Credentials
- [ ] Google Search Console OAuth is configured and tested
- [ ] PageSpeed Insights API key is added
- [ ] All API keys are in n8n Credentials (not in workflow code)
- [ ] You have a budget alert for OpenAI (no unexpected spending)

**Workflow setup:**
- [ ] Each node has been tested individually with real data
- [ ] Error handling is added at every HTTP Request node
- [ ] Workflow does not stop on a single error (Continue on Fail)
- [ ] Logs are enabled (Settings → Log Level)
- [ ] A test run with 5 URLs has been done before the full crawl

### Functional checklist

**Data:**
- [ ] Google Search Console is connected to the correct property
- [ ] You have at least 3 months of data in GSC for meaningful analysis
- [ ] The keyword list is in Google Sheet (and the agent can read it)
- [ ] sitemap.xml is valid and accessible
- [ ] Competitor URLs have been manually verified before automation

**AI prompts:**
- [ ] Prompts have been manually tested in ChatGPT/Claude before adding to the agent
- [ ] Prompts produce specific, structured output (not an essay)
- [ ] Output format is compatible with the next node (JSON, Markdown, etc.)
- [ ] Prompts have a fallback ("if no data is available, write 'N/A'")

**Notifications:**
- [ ] Slack integration has been tested (sends to the correct channel)
- [ ] Email sending has been tested with a real email
- [ ] Report format is readable and useful
- [ ] You are not sending notifications for "no changes" (only for real issues)

### Operational checklist (after launch)

- [ ] Manually check the agent after its first automatic execution
- [ ] Set up an alert if the agent did not run (Execution failed notification)
- [ ] Document the workflow (brief note in a Google Doc — "What it does, when, how to stop it")
- [ ] You have a way to quickly stop the agent in case of a problem (Disable in n8n)
- [ ] Plan a review after 2 weeks: is it working? Is the report useful?

> **Key insight:** Launch agents gradually. Start with 1 agent, give it 2 weeks, then add the next one. Better to have 1 agent working perfectly than 5 agents where you are unsure if the data is accurate.
`,
  },
  faq: [
    {
      question: {
        bg: "Трябва ли ми да умея да програмирам за n8n?",
        en: "Do I need to know how to code to use n8n?",
      },
      answer: {
        bg: "За базови SEO агенти — не. n8n има визуален интерфейс, в който свързваш нодове с мишка. Можеш да изградиш rank tracking агент, audit агент и competitor monitor без да пишеш код. За по-напреднали функции (custom logic, сложни трансформации на данни) е полезно да знаеш малко JavaScript — но дори и тогава AI асистенти като Claude или ChatGPT могат да пишат кода вместо теб.",
        en: "For basic SEO agents — no. n8n has a visual interface where you connect nodes with your mouse. You can build a rank tracking agent, audit agent, and competitor monitor without writing any code. For more advanced features (custom logic, complex data transformations) it is helpful to know a little JavaScript — but even then, AI assistants like Claude or ChatGPT can write the code for you.",
      },
    },
    {
      question: {
        bg: "Колко струва да пуснеш SEO агент на месец?",
        en: "How much does it cost to run an SEO agent per month?",
      },
      answer: {
        bg: "При self-hosted n8n с Docker: практически нищо за платформата. Основните разходи са: OpenAI API (~$5-15/месец при умерена употреба), сървър за Docker (€5-10/месец за малък VPS), опционално PageSpeed Insights API (безплатно до 25K заявки/ден). За повечето freelancer SEO специалисти: $10-20/месец общо. За агенции с 15+ клиента: $30-50/месец — многократно по-малко от спестеното работно време.",
        en: "With self-hosted n8n via Docker: practically nothing for the platform. Main costs are: OpenAI API (~$5-15/month with moderate usage), server for Docker (€5-10/month for a small VPS), optional PageSpeed Insights API (free up to 25K requests/day). For most freelance SEO professionals: $10-20/month total. For agencies with 15+ clients: $30-50/month — far less than the working hours saved.",
      },
    },
    {
      question: {
        bg: "Безопасно ли е да давам достъп до GSC на AI агент?",
        en: "Is it safe to give GSC access to an AI agent?",
      },
      answer: {
        bg: "Да, при правилна настройка. Google Search Console API поддържа OAuth 2.0 с минимални права (read-only достъп). Агентът може само да чете данни — не може да прави промени в сайта ти. При n8n credentials се криптират. Допълнително: използвай отделен Google Cloud проект само за агента, ограничи quota, и редовно преглеждай API access в Google Cloud Console.",
        en: "Yes, when configured correctly. Google Search Console API supports OAuth 2.0 with minimal permissions (read-only access). The agent can only read data — it cannot make changes to your site. In n8n, credentials are encrypted. Additionally: use a separate Google Cloud project just for the agent, limit the quota, and regularly review API access in Google Cloud Console.",
      },
    },
    {
      question: {
        bg: "Кои SEO задачи НЕ могат да се автоматизират с агенти?",
        en: "Which SEO tasks cannot be automated with agents?",
      },
      answer: {
        bg: "Задачите, изискващи реален human judgment: стратегически решения (коя аудитория, какво позициониране), клиентски комуникации при кризи, начална архитектура на сайта, съдържание изискващо реален опит (медицина, финанси, право), и link building outreach. Автоматизирай данните и анализа — запази решенията и взаимоотношенията за хора.",
        en: "Tasks requiring genuine human judgment: strategic decisions (which audience, what positioning), client communications in crisis situations, initial site architecture, content requiring real expertise (medicine, finance, law), and link building outreach. Automate the data and analysis — keep the decisions and relationships for humans.",
      },
    },
    {
      question: {
        bg: "Колко бързо се амортизира инвестицията в SEO агенти?",
        en: "How quickly does the investment in SEO agents pay off?",
      },
      answer: {
        bg: "Обикновено за 1-2 седмици. Настройката на n8n и първите 2-3 агента отнема 8-12 часа. Ако агентите спестяват само 5 часа/седмица (много консервативна оценка), при ставка от €50/час = €250/седмица спестено. ROI е постигнат след първата седмица. При SEO агенции с много клиенти, спестяването е значително по-голямо.",
        en: "Typically within 1-2 weeks. Setting up n8n and the first 2-3 agents takes 8-12 hours. If the agents save only 5 hours/week (a very conservative estimate), at a rate of €50/hour = €250/week saved. ROI is achieved after the first week. For SEO agencies with many clients, the savings are considerably greater.",
      },
    },
    {
      question: {
        bg: "Може ли агент да публикува съдържание автоматично?",
        en: "Can an agent publish content automatically?",
      },
      answer: {
        bg: "Технически — да. n8n може да се свърже с WordPress REST API, Webflow CMS API, или Contentful и да публикува статии. Но препоръчваме против напълно автоматично публикуване без човешки преглед. По-добрият workflow: агентът генерира draft и го запазва като 'Pending Review' — човек прегледа и одобрява. Изключение: автоматично публикуване на силно структурирано съдържание (ценови сравнения, продуктови листи), което следва шаблон.",
        en: "Technically — yes. n8n can connect to WordPress REST API, Webflow CMS API, or Contentful and publish articles. But we recommend against fully automatic publishing without human review. A better workflow: the agent generates a draft and saves it as 'Pending Review' — a human reviews and approves. Exception: automatic publishing of highly structured content (price comparisons, product listings) that follows a template.",
      },
    },
    {
      question: {
        bg: "Каква е разликата между n8n агент и ChatGPT Custom GPT?",
        en: "What is the difference between an n8n agent and a ChatGPT Custom GPT?",
      },
      answer: {
        bg: "Custom GPT е chatbot с персонализирани инструкции и знания — но ти трябва ръчно да го питаш всеки път. n8n агентът работи автоматично по разписание, без ти да правиш нищо. Custom GPT не може да изпраща имейли, не може да записва в Google Sheets, не може да проверява URL-и. n8n агентът прави всичко това — и работи 24/7 без твоето участие. Custom GPT е инструмент за разговор; n8n агентът е автономен работен процес.",
        en: "A Custom GPT is a chatbot with custom instructions and knowledge — but you need to manually ask it each time. An n8n agent runs automatically on a schedule, without you doing anything. A Custom GPT cannot send emails, cannot write to Google Sheets, cannot check URLs. An n8n agent does all of this — and works 24/7 without your involvement. A Custom GPT is a conversation tool; an n8n agent is an autonomous workflow.",
      },
    },
  ],
  officialLinks: [
    {
      label: "n8n Documentation",
      url: "https://docs.n8n.io",
      desc: {
        bg: "Официална документация за n8n — инсталация, нодове, AI агенти",
        en: "Official n8n documentation — installation, nodes, AI agents",
      },
    },
    {
      label: "Make.com",
      url: "https://www.make.com",
      desc: {
        bg: "Визуален инструмент за автоматизация — алтернатива на n8n",
        en: "Visual automation tool — alternative to n8n",
      },
    },
    {
      label: "Google Search Console API Documentation",
      url: "https://developers.google.com/webmaster-tools/v1/api_reference_index",
      desc: {
        bg: "Официална документация за GSC API — заявки, автентикация, квоти",
        en: "Official GSC API documentation — queries, authentication, quotas",
      },
    },
    {
      label: "OpenAI API Documentation",
      url: "https://platform.openai.com/docs",
      desc: {
        bg: "Документация за OpenAI API — модели, цени, употреба",
        en: "OpenAI API documentation — models, pricing, usage",
      },
    },
    {
      label: "Anthropic Claude API Documentation",
      url: "https://docs.anthropic.com",
      desc: {
        bg: "Документация за Claude API — Messages API, модели, prompt caching",
        en: "Claude API documentation — Messages API, models, prompt caching",
      },
    },
    {
      label: "PageSpeed Insights API",
      url: "https://developers.google.com/speed/docs/insights/v5/get-started",
      desc: {
        bg: "Документация за PageSpeed Insights API — Core Web Vitals автоматизация",
        en: "PageSpeed Insights API documentation — Core Web Vitals automation",
      },
    },
  ],
  relatedSlugs: ["technical-seo-audit", "geo-optimization", "structured-data", "ai-visibility-strategy"],
};
