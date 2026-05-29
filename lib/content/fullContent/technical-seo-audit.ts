export const technicalSeoAuditContent = {
  slug: "technical-seo-audit",
  toc: [
    { id: "what-is-technical-seo-audit", text: "Какво е технически SEO одит?", level: 2 },
    { id: "crawling-indexing", text: "Как Google обхожда сайта ти — и защо може да пропуска страниции?", level: 2 },
    { id: "robots-txt-sitemap", text: "Как казваш на Google кое да индексира и кое да игнорира?", level: 2 },
    { id: "canonical-urls", text: "Самоконкурираш ли се? Дублирано съдържание и как да го решиш", level: 2 },
    { id: "redirects", text: "Кога трябва редирект — и кой от трите вида да избереш?", level: 2 },
    { id: "core-web-vitals", text: "Защо Google измерва усещането за бързина — и как да се справиш?", level: 2 },
    { id: "mobile-first", text: "Защо мобилната версия е по-важна от десктоп за Google?", level: 2 },
    { id: "site-structure", text: "Как структурата на сайта влияе на класирането?", level: 2 },
    { id: "https-security", text: "Защо HTTPS е задължително — и какво се случва без него?", level: 2 },
    { id: "page-speed", text: "Как да ускориш сайта стъпка по стъпка?", level: 2 },
    { id: "ai-technical-seo", text: "Какво трябва да промениш технически, за да те виждат AI системите?", level: 2 },
    { id: "audit-tools", text: "Кои инструменти да използваш — и с кой да започнеш?", level: 2 },
    { id: "audit-process", text: "Как провеждаш реален одит — в каква последователност?", level: 2 },
    { id: "technical-checklist", text: "Пълен технически чеклист (122 точки)", level: 2 },
  ],
  content: {
    bg: `## Какво е технически SEO одит? {#what-is-technical-seo-audit}

**Техническият SEO одит** е систематична проверка на всички технически аспекти на уебсайта, които влияят върху способността на Google (и другите търсачки) да открие, обходи, разбере и класира страниците му.

Аналогията е точна: представи си **годишен медицински преглед за сайт**. При медицинския преглед лекарят проверява кръвно налягане, кръвна картина, функция на органите — не защото всичко боли, а за да открие проблеми преди да са станали сериозни. Точно така техническият SEO одит проверява "здравето" на сайта — преди проблемите да са унищожили органичния трафик.

### Защо е критично

Можеш да имаш отлично съдържание, перфектни ключови думи и стотици backlinks — ако сайтът има технически проблеми, Google не може да го индексира правилно и всичко останало е безсмислено.

**Трите нива на технически проблеми:**

\`\`\`
КРИТИЧНО (блокира индексирането)
├── robots.txt блокира Googlebot
├── noindex на важни страници
├── счупени вътрешни линкове
└── сайтът не се зарежда (5xx грешки)

ВАЖНО (вреди на класирането)
├── бавно зареждане (Core Web Vitals провал)
├── дублирано съдържание без canonical
├── липса на HTTPS
└── нефункциониращи редиректи

ОПТИМИЗАЦИЯ (подобрява резултатите)
├── оптимизирана структура на URL
├── вътрешно линкване
├── подобрен sitemap
└── structured data
\`\`\`

### Какво включва пълен технически одит

| Категория | Какво се проверява |
|-----------|-------------------|
| Crawlability | Може ли Google да достигне страниците? |
| Indexability | Разрешено ли е индексирането? |
| Site Architecture | Логична ли е структурата? |
| Page Speed | Бързо ли се зарежда? |
| Mobile | Работи ли на телефон? |
| Security | HTTPS ли е? Има ли уязвимости? |
| Duplicate Content | Има ли дублирани URL? |
| Structured Data | Schema маркап правилен ли е? |

> **Ключов факт:** Изследване на Ahrefs от 2024 г. установи, че 68% от уебсайтовете имат критични технически SEO проблеми, за чието съществуване собствениците не знаят. Средно голям сайт има 15-30 технически грешки.

---

## Как Google обхожда сайта ти — и защо може да пропуска страниции? {#crawling-indexing}

**Crawling** е процесът, при който Google изпраща своя робот (Googlebot) да посети страниците на сайта и да прочете съдържанието им. **Indexing** е записването на тези страници в базата данни на Google — "каталога", от който излизат резултатите при търсене.

Аналогията: представи си **библиотекар и каталог**. Библиотекарят (Googlebot) обикаля рафтовете (уебсайта), чете книгите (страниците), и записва информацията в каталога (Google Index). Ако библиотекарят не може да стигне до рафта (блокиран от robots.txt), книгата не влиза в каталога. Ако книгата е там, но с надпис "не каталогизирай" (noindex), тя също не влиза.

### Как работи Googlebot стъпка по стъпка

\`\`\`
Стъпка 1: DISCOVERY (ОткрИване)
Googlebot открива нов URL от:
  ├── Sitemap.xml
  ├── Вътрешни линкове от вече познати страници
  ├── Backlinks от външни сайтове
  └── Ръчно подадени URL в Search Console

Стъпка 2: CRAWL QUEUE (Опашка за обхождане)
URL влиза в опашката. Google решава:
  ├── Кога да го посети (prioritization)
  └── Колко ресурси да отдели (crawl budget)

Стъпка 3: FETCHING (Изтегляне)
Googlebot изтегля HTML на страницата
  ├── Проверява robots.txt ПРЕДИ посещение
  └── Изпълнява JavaScript (ако е необходимо)

Стъпка 4: PROCESSING (Обработка)
Google анализира HTML:
  ├── Открива нови линкове за обхождане
  ├── Чете текста и metadata
  └── Обработва structured data

Стъпка 5: INDEXING (Индексиране)
Google решава дали да индексира:
  ├── Проверява noindex таг
  ├── Оценява качеството на съдържанието
  └── Записва в индекса (или отхвърля)
\`\`\`

### Crawl Budget — какво е и защо има значение

**Crawl budget** е броят страници, които Google е готов да обходи на сайта за определен период. Малките сайтове (под 1000 страницИ) рядко имат проблем с crawl budget. За по-големи сайтове той е критичен.

**Какво "изяжда" crawl budget напразно:**
- URL параметри (\`?sort=price&color=red\`) — генерират хиляди варианти на една страница
- Безкрайно пагинирани архиви
- URL с идентично съдържание (дублирани)
- 404 и 5xx грешки — Googlebot губи ресурс за несъществуващи страници

**Проверка в Search Console:**
Settings → Crawl Stats → виждаш колко страници Googlebot обхожда дневно и с какъв HTTP статус ги получава.

### Разлика между Crawling и Indexing

Много хора бъркат двете понятия:

| Crawling | Indexing |
|----------|----------|
| Googlebot посещава страницата | Google записва страницата в базата данни |
| Може да е crawled, но не indexed | Ако е indexed, значи е и crawled |
| Контролира се с robots.txt | Контролира се с noindex |
| Блокирането в robots.txt = невидим за Google | noindex = видим за Google, но не се показва при търсене |

> **Важно:** Ако блокираш страница в robots.txt, Google не може да провери дали има noindex таг — страницата може да влезе в индекса от backlink, но без съдържание. По-добре: позволи crawling, добави noindex.

### Как да проверим дали страниците са индексирани

**Метод 1 — Search Console:**
Coverage → Indexed → виждаш всички индексирани URL

**Метод 2 — site: оператор:**
В Google търси: \`site:tvoysajt.bg\`
Резултатът показва приблизителния брой индексирани страници.

**Метод 3 — URL Inspection в Search Console:**
Въведи конкретен URL → виждаш пълния статус: дали е crawled, indexed, и последния път кога е посетен от Googlebot.

---

## Как казваш на Google кое да индексира и кое да игнорира? {#robots-txt-sitemap}

**robots.txt** е текстов файл в корена на сайта, който казва на всички роботи (Googlebot, Bingbot, AI ботове) кои части на сайта могат и не могат да посещават. **Sitemap.xml** е XML файл, който изрично показва на Google кои URL съществуват и кога последно са обновени.

Аналогията: **robots.txt е охраната на входа** (казва кой може да влезе и накъде), а **Sitemap е картата на сградата** (показва всички стаи и какво има в тях).

### robots.txt — пълно ръководство

**Местоположение:** Задължително на \`https://tvoysajt.bg/robots.txt\`

**Основна структура:**

\`\`\`
User-agent: *
Disallow: /admin/
Disallow: /private/
Allow: /

Sitemap: https://tvoysajt.bg/sitemap.xml
\`\`\`

**Разбивка на синтаксиса:**

| Директива | Значение | Пример |
|-----------|----------|--------|
| \`User-agent: *\` | Важи за всички ботове | \`User-agent: Googlebot\` за само Google |
| \`Disallow: /path/\` | Забранява достъп до папка | \`Disallow: /wp-admin/\` |
| \`Allow: /path/\` | Разрешава изрично (overrides Disallow) | \`Allow: /wp-admin/admin-ajax.php\` |
| \`Sitemap:\` | Посочва sitemap URL | \`Sitemap: https://site.bg/sitemap.xml\` |
| \`Crawl-delay:\` | Пауза между заявки (секунди) | \`Crawl-delay: 1\` |

**Пример: правилен robots.txt за WordPress сайт:**

\`\`\`
User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php
Disallow: /wp-includes/
Disallow: /?s=
Disallow: /tag/
Disallow: /author/
Disallow: /cart/
Disallow: /checkout/
Disallow: /my-account/

Sitemap: https://tvoysajt.bg/sitemap.xml
Sitemap: https://tvoysajt.bg/sitemap-news.xml
\`\`\`

**Пример: robots.txt за AI ботове (ново от 2024 г.):**

\`\`\`
# Разрешаване на стандартни търсачки
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Блокиране на AI training ботове (по избор)
User-agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

# Разрешаване на AI search (препоръчително за видимост)
User-agent: PerplexityBot
Allow: /

Sitemap: https://tvoysajt.bg/sitemap.xml
\`\`\`

> **Ключово решение:** Блокирането на GPTBot и Google-Extended спира AI training върху твоето съдържание, но НЕ спира цитирането в AI резултати. Ако искаш да се появяваш в Perplexity и ChatGPT Browse, НЕ блокирай техните ботове.

**Чести грешки в robots.txt:**

\`\`\`
ГРЕШНО — блокира целия сайт:
User-agent: *
Disallow: /

ГРЕШНО — блокира CSS/JS (счупва rendering):
User-agent: *
Disallow: /wp-content/themes/
Disallow: /wp-content/plugins/

ГРЕШНО — синтактична грешка (интервал преди:):
User-agent : *
Disallow : /admin/
\`\`\`

### Sitemap.xml — пълно ръководство

**Sitemap** казва на Google кои URL съществуват, кога са обновени и колко са важни. Без sitemap Google открива страниците само чрез linкове — бавно и непълно.

**Базов XML sitemap:**

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tvoysajt.bg/</loc>
    <lastmod>2025-05-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tvoysajt.bg/uslugi/seo/</loc>
    <lastmod>2025-04-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
\`\`\`

**Sitemap Index (за сайтове с много страници):**

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://tvoysajt.bg/sitemap-pages.xml</loc>
    <lastmod>2025-05-01</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://tvoysajt.bg/sitemap-posts.xml</loc>
    <lastmod>2025-05-01</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://tvoysajt.bg/sitemap-products.xml</loc>
    <lastmod>2025-05-01</lastmod>
  </sitemap>
</sitemapindex>
\`\`\`

**Какво НЕ трябва да е в sitemap:**
- 301/302 редиректи (само финалния URL)
- noindex страници
- 404 и 5xx грешки
- Дублирани URL
- URL с ?parameters (ако не са канонични)

**Подаване на sitemap в Google Search Console:**
Sitemaps → Add a new sitemap → въведи URL → Submit

---

## Самоконкурираш ли се? Дублирано съдържание и как да го решиш {#canonical-urls}

**Canonical URL** е HTML таг, който казва на Google: "Тази страница има дублати — но ЕТО тази е оригиналът, нея индексирай и предавай авторитета." **Дублираното съдържание** е когато едно и също (или много подобно) съдържание е достъпно на множество URL адреси.

### Защо дублираното съдържание е проблем

Представи си, че написваш отличен доклад и го разпращаш на 5 адреса. Учителят получава едно и също писмо от 5 места — объркан е кого да похвали. Google е в същата ситуация: ако едно съдържание е достъпно на 3 URL, Google не знае кой да класира и "разделя" силата между тях.

**Как се получава дублирано съдържание:**

\`\`\`
Един и същ текст на различни URL:
├── https://site.bg/produkt/             (канонична)
├── https://site.bg/produkt/?color=red   (параметър)
├── https://site.bg/produkt/?sort=price  (параметър)
├── https://www.site.bg/produkt/         (www vs non-www)
├── https://site.bg/Produkt/             (главна буква)
└── http://site.bg/produkt/              (HTTP vs HTTPS)
\`\`\`

### rel="canonical" таг — синтаксис

**В HTML <head>:**

\`\`\`html
<link rel="canonical" href="https://tvoysajt.bg/original-stranica/" />
\`\`\`

**Правила:**
- Използвай **абсолютни URL** (с https://, не /relative/)
- Canonical трябва да сочи към реално съществуваща (200 OK) страница
- Canonical не трябва да сочи към noindex страница
- Самоканонична (страница сочи към себе си) е добра практика

**Пример: Правилно vs. Грешно:**

\`\`\`html
ПРАВИЛНО — самоканоничен на оригиналната страница:
<link rel="canonical" href="https://site.bg/produkt/iphone-15/" />

ПРАВИЛНО — вариантът сочи към оригинала:
<!-- На: https://site.bg/produkt/iphone-15/?color=red -->
<link rel="canonical" href="https://site.bg/produkt/iphone-15/" />

ГРЕШНО — canonical сочи към редирект:
<link rel="canonical" href="https://site.bg/old-produkt/" />
(ако /old-produkt/ прави 301 към /produkt/iphone-15/)

ГРЕШНО — relative URL:
<link rel="canonical" href="/produkt/iphone-15/" />
\`\`\`

### Canonical в HTTP Header (за PDF и не-HTML файлове)

Когато страницата не е HTML (PDF, CSV), canonical се добавя в HTTP header:

\`\`\`
Link: <https://site.bg/katalog.pdf>; rel="canonical"
\`\`\`

### www vs. non-www дублиране

**Проблем:** Сайтът е достъпен и на \`https://site.bg\` и на \`https://www.site.bg\` — 100% дублирано съдържание.

**Решение 1 — Редирект (препоръчително):**

\`\`\`apache
# .htaccess — пренасочи всичко от www към non-www
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
\`\`\`

**Решение 2 — Canonical:**
На всяка страница добави canonical само към предпочитаната версия.

**Решение 3 — Search Console:**
Settings → Change of address — посочи предпочитаната версия.

### HTTP vs. HTTPS дублиране

**Проблем:** Сайтът се зарежда и на http:// и на https:// — дублирано съдържание + сигурностен проблем.

**Решение — задължителен HTTPS редирект:**

\`\`\`apache
# .htaccess
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
\`\`\`

### Кога да използваш Canonical vs. 301 Redirect

| Ситуация | Препоръка |
|----------|-----------|
| Две URL с еднакво съдържание, двете остават активни | Canonical |
| Стара страница, заменена изцяло от нова | 301 Redirect |
| URL параметри (\`?color=red\`) — страницата остава | Canonical |
| Преместване на цял домейн | 301 Redirect |
| Продукт недостъпен временно | 302 Redirect |
| Сезонна страница, ще се върне | Canonical към главна категория |

---

## Кога трябва редирект — и кой от трите вида да избереш? {#redirects}

**Редиректът** е инструкция към браузъра и Googlebot: "Страницата, която търсиш, вече е на друго място — иди там." Различните типове редиректи носят различни сигнали за Googlebot.

### Типовете редиректи

| HTTP код | Тип | Значение за Google | Прехвърля link equity? |
|----------|-----|-------------------|----------------------|
| 301 | Moved Permanently | "Страницата е трайно преместена" | Да (~99%) |
| 302 | Found (Temporary) | "Временно преместване" | Не (официално) |
| 307 | Temporary Redirect | HTTP/1.1 версия на 302 | Не |
| 308 | Permanent Redirect | HTTP/1.1 версия на 301 | Да |
| 303 | See Other | След POST заявка → GET | Не |
| 410 | Gone | "Страницата е изтрита завинаги" | N/A |

### 301 Redirect — трайно преместване

**Използвай когато:** Старата страница е заменена от нова за постоянно.

**Имплементация в .htaccess (Apache):**

\`\`\`apache
# Единична страница
Redirect 301 /stara-stranica/ https://site.bg/nova-stranica/

# Папка (всички URL в /blog/ → /statii/)
RedirectMatch 301 ^/blog/(.*)$ https://site.bg/statii/$1

# HTTP → HTTPS (задължителен)
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]

# www → non-www
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\\.(.+)$ [NC]
RewriteRule ^ https://%1%{REQUEST_URI} [R=301,L]
\`\`\`

**Имплементация в Nginx:**

\`\`\`nginx
# HTTP → HTTPS
server {
    listen 80;
    server_name site.bg www.site.bg;
    return 301 https://site.bg$request_uri;
}

# www → non-www
server {
    listen 443 ssl;
    server_name www.site.bg;
    return 301 https://site.bg$request_uri;
}

# Единична страница
location = /stara-stranica/ {
    return 301 https://site.bg/nova-stranica/;
}
\`\`\`

**Имплементация в Next.js (next.config.js):**

\`\`\`js
module.exports = {
  async redirects() {
    return [
      {
        source: '/stara-stranica',
        destination: '/nova-stranica',
        permanent: true, // 301
      },
      {
        source: '/blog/:slug',
        destination: '/statii/:slug',
        permanent: true,
      },
    ];
  },
};
\`\`\`

### Redirect Chains — скрит проблем

**Redirect chain** е когато URL А → URL Б → URL В (верига от редиректи). Всеки допълнителен hop:
- Забавя зареждането
- Губи малко link equity
- Дразни Googlebot

**Проверка и решение:**

\`\`\`
ПРОБЛЕМ (верига):
/stara-url/ → /sredna-url/ → /nova-url/

РЕШЕНИЕ (директен редирект):
/stara-url/ → /nova-url/
/sredna-url/ → /nova-url/
\`\`\`

Инструменти за проверка: Screaming Frog → Response Codes → Redirects → виждаш всички вериги.

### Redirect Loops — фатален проблем

**Redirect loop** е когато А → Б → А (безкраен цикъл). Браузърът и Googlebot спират след определен брой опити и страницата е недостъпна.

**Типични причини:**
- HTTPS редиректът е написан грешно и се самоотнася
- www редиректът конфликтира с HTTPS редиректа
- Плъгин/CMS прави автоматичен редирект, конфликтиращ с .htaccess

**Диагностика:** Отвори Chrome DevTools → Network tab → виждаш безкрайните 301 стрелки.

---

## Защо Google измерва усещането за бързина — и как да се справиш? {#core-web-vitals}

**Core Web Vitals** са три метрики, с които Google измерва реалното потребителско изживяване при зареждане на страница. От май 2021 г. те са официален ranking фактор — лошите резултати директно вредят на класирането.

Аналогията: представи си **UX доктор**, който измерва "жизнените показатели" на страницата — пулс (скорост), дишане (отзивчивост), стабилност (без изненади). Ако показателите са извън нормата, пациентът (сайтът) получава по-ниско класиране.

### LCP — Largest Contentful Paint

**LCP** измерва колко бързо се зарежда най-голямото видимо съдържание на страницата (обикновено главното изображение или заглавие).

**Прагове:**
\`\`\`
Добро:    ≤ 2.5 секунди   ✓
Нуждае се от подобрение: 2.5–4.0 сек   ⚠
Лошо:     > 4.0 секунди   ✗
\`\`\`

**Какво е LCP елемент (в ред на приоритет):**
1. \`<img>\` изображение
2. \`<image>\` в SVG
3. \`<video>\` poster изображение
4. Елемент с CSS background-image
5. Блок с текст (h1, p)

**Основни причини за бавен LCP:**
- Голямо, неоптимизирано изображение (PNG вместо WebP)
- Render-blocking CSS/JavaScript
- Бавен сървърен response (TTFB над 600ms)
- Изображение зарежда мързеливо (lazy load на LCP елемента — грешка!)

**Решения за LCP:**

\`\`\`html
<!-- ГРЕШНО: lazy load на главното изображение -->
<img src="hero.jpg" loading="lazy" alt="Hero">

<!-- ПРАВИЛНО: eager load + preload -->
<link rel="preload" as="image" href="hero.webp">
<img src="hero.webp" loading="eager" fetchpriority="high" alt="Hero">
\`\`\`

### INP — Interaction to Next Paint

**INP** (замени CLS като метрика от март 2024 г.) измерва колко бързо страницата реагира на потребителски действия (кликване, докосване, натискане на клавиш).

**Прагове:**
\`\`\`
Добро:    ≤ 200 милисекунди   ✓
Нуждае се от подобрение: 200–500 ms    ⚠
Лошо:     > 500 милисекунди   ✗
\`\`\`

**Основни причини за лош INP:**
- Тежък JavaScript блокира main thread
- Неоптимизирани event handlers
- Прекалено много third-party скриптове (чат ботове, analytics, ads)
- DOM мутации при взаимодействие

**Решение — разтоварване на main thread:**

\`\`\`js
// ГРЕШНО: синхронна тежка операция при клик
button.addEventListener('click', () => {
  heavyComputation(); // блокира за 500ms
  updateUI();
});

// ПРАВИЛНО: defer тежката работа
button.addEventListener('click', () => {
  updateUI(); // незабавна UI реакция
  setTimeout(() => heavyComputation(), 0); // defer
});
\`\`\`

### CLS — Cumulative Layout Shift

**CLS** измерва колко много елементи на страницата "скачат" и изместват съдържанието по време на зареждане. Познато усещане: четеш текст, изображение се зарежда и всичко пада надолу — точно това измерва CLS.

**Прагове:**
\`\`\`
Добро:    ≤ 0.1    ✓
Нуждае се от подобрение: 0.1–0.25  ⚠
Лошо:     > 0.25   ✗
\`\`\`

**Основни причини за лош CLS:**
- Изображения без width/height атрибути
- Реклами без запазено място (reserved space)
- Шрифтове, заместващи системен шрифт с различни размери (FOUT)
- Динамично добавено съдържание над съществуващо

**Решения за CLS:**

\`\`\`html
<!-- ГРЕШНО: без размери -->
<img src="product.webp" alt="Продукт">

<!-- ПРАВИЛНО: с ширина и височина -->
<img src="product.webp" alt="Продукт" width="800" height="600">
\`\`\`

\`\`\`css
/* ПРАВИЛНО: aspect-ratio за responsive изображения */
img {
  aspect-ratio: 4/3;
  width: 100%;
  height: auto;
}

/* ПРАВИЛНО: font-display за намаляване на FOUT */
@font-face {
  font-family: 'MyFont';
  font-display: swap; /* или optional за нулев CLS */
}
\`\`\`

### Как да проверим Core Web Vitals

**Инструмент 1 — PageSpeed Insights (задължителен):**
\`https://pagespeed.web.dev\` → въведи URL → виждаш Field Data (реални потребители) и Lab Data (симулация)

**Инструмент 2 — Search Console:**
Core Web Vitals → виждаш реалните данни за целия сайт по устройство

**Инструмент 3 — Chrome DevTools:**
Performance tab → запис → виждаш LCP, CLS маркери

**Field vs. Lab данни:**
\`\`\`
Field Data = реални потребители (28-дневен прозорец)
  → Това класира Google. По-важно.

Lab Data = симулация на PageSpeed Insights
  → Полезно за debugging, но не директен ranking фактор
\`\`\`

> **Ключов факт:** Google използва Field Data (Chrome User Experience Report) за класиране, не Lab Data. Сайт с отличен PageSpeed score, но лоши реални данни — все пак се наказва.

---

## Защо мобилната версия е по-важна от десктоп за Google? {#mobile-first}

**Mobile-First индексирането** означава, че Google използва мобилната версия на сайта като основа за индексиране и класиране. Не desktop версията. Ако мобилната версия е лоша или различна от desktop — класирането страда.

Google обяви пълен преход към Mobile-First индексиране от юли 2024 г. — всички нови и стари сайтове са вече изцяло под Mobile-First режим.

### Какво означава на практика

\`\`\`
Преди Mobile-First (до 2018 г.):
Google crawlва desktop → индексира desktop → класира desktop

След Mobile-First (от 2024 г.):
Google crawlва mobile → индексира mobile → класира mobile
(desktop версията не се взима предвид за индексирането)
\`\`\`

### Основни изисквания за Mobile-First

**1. Responsive дизайн (задължителен)**

\`\`\`html
<!-- Задължителен viewport meta таг -->
<meta name="viewport" content="width=device-width, initial-scale=1">
\`\`\`

**2. Еднакво съдържание на mobile и desktop**

\`\`\`
ПРОБЛЕМ: Скриваш съдържание на мобилна версия
<div class="desktop-only">
  Пълното описание на продукта...
</div>

РЕШЕНИЕ: Еднакво съдържание, различно представяне
<!-- Всичко е в HTML, само CSS го скрива/показва -->
\`\`\`

Google чете скритото с CSS съдържание (display:none), но то получава по-малка тежест. По-добре: accordion/tabs вместо скриване.

**3. Достатъчен размер на елементи за докосване**

\`\`\`css
/* Минимален размер на бутони/линкове */
button, a {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 16px;
}
\`\`\`

**4. Без хоризонтален scroll**

\`\`\`css
/* Предотвратяване на overflow */
body {
  overflow-x: hidden;
  max-width: 100vw;
}

img, video, iframe {
  max-width: 100%;
  height: auto;
}
\`\`\`

**5. Четим шрифт без zoom**

\`\`\`css
/* Минимален размер за мобилни */
body {
  font-size: 16px; /* никога под 16px за основен текст */
  line-height: 1.6;
}
\`\`\`

### Mobile-First одит стъпка по стъпка

**Стъпка 1:** Google Search Console → Mobile Usability → провери за грешки

**Стъпка 2:** Chrome DevTools → Toggle device toolbar (Ctrl+Shift+M) → симулирай различни устройства

**Стъпка 3:** PageSpeed Insights → провери Mobile score отделно от Desktop

**Стъпка 4:** Google Mobile-Friendly Test (вече интегриран в Rich Results Test) → провери конкретен URL

**Типични мобилни грешки:**

| Грешка | Последствие | Решение |
|--------|-------------|---------|
| Текст прекалено малък | Потребителят зумира | min 16px font-size |
| Clickable елементи твърде близо | Грешни кликове | min 8px разстояние |
| Съдържание по-широко от екрана | Хоризонтален скрол | max-width: 100% |
| Viewport не е настроен | Мащабиране проблеми | \`<meta viewport>\` |
| Interstitials (попъпи) блокират | Manual penalty риск | Избягвай на мобилно |

---

## Как структурата на сайта влияе на класирането? {#site-structure}

**Структурата на сайта** определя как страниците са организирани и свързани помежду си. **Вътрешното линкване** е системата от хипервръзки между страниците на един и същи сайт. Заедно те определят как Google разпределя "авторитета" (link equity) между страниците и колко лесно може да открива ново съдържание.

### Идеалната структура: плоска йерархия

\`\`\`
ДОБРА структура (плоска — до 3 клика от главницата):

Главница (/)
├── Категория (/uslugi/)
│   ├── Услуга 1 (/uslugi/seo/)
│   ├── Услуга 2 (/uslugi/ppc/)
│   └── Услуга 3 (/uslugi/smm/)
├── Блог (/blog/)
│   ├── Статия 1 (/blog/statia-1/)
│   └── Статия 2 (/blog/statia-2/)
└── Контакти (/kontakti/)

ЛОША структура (дълбока — 5+ клика):

Главница (/)
└── Секция (/sekcia/)
    └── Подсекция (/sekcia/podsekcia/)
        └── Категория (/sekcia/podsekcia/kategoriya/)
            └── Продукт (/sekcia/podsekcia/kategoriya/produkt/)
                └── Вариант (5 клика от главницата!)
\`\`\`

**Правилото:** Нито една важна страница не трябва да е на повече от 3 клика от главницата.

### URL структура — добри практики

\`\`\`
ДОБРО:
https://site.bg/uslugi/seo-optimizaciya/
https://site.bg/blog/kak-da-podobrim-seo/

ЛОШО:
https://site.bg/index.php?page=12&cat=3&sub=7
https://site.bg/uslugi/SEOOPT/stranica-1
https://site.bg/2023/11/21/post-title-with-many-words-that-are-too-long
\`\`\`

**Правила за URL:**
- Само малки букви
- Тирета (не долни черти) за разделяне на думи
- Без специални символи (само a-z, 0-9, тире)
- Кратко и описателно (3-5 думи)
- Включи главната ключова дума

### Вътрешно линкване — стратегия

Вътрешните линкове правят три неща:
1. **Помагат на Googlebot да открива страниците** — по-малко зависимост от sitemap
2. **Прехвърлят авторитет** (PageRank) от авторитетни към по-малко посещавани страницИ
3. **Помагат на потребителите** да намерят свързано съдържание

**Pillar-Cluster модел:**

\`\`\`
PILLAR страница (главна тема):
/blog/seo-ръководство/ (обширна страница за SEO)
  └── Cluster 1: /blog/tehnicheski-seo/
  └── Cluster 2: /blog/on-page-seo/
  └── Cluster 3: /blog/link-building/
  └── Cluster 4: /blog/local-seo/

Pillar → линкова към всяка Cluster
Всяка Cluster → линкова обратно към Pillar
Clusters → линкуват помежду си (релевантни)
\`\`\`

**Правила за вътрешни линкове:**

| Добра практика | Лоша практика |
|---------------|---------------|
| Описателен anchor text ("SEO одит стъпки") | Генеричен anchor ("Кликни тук", "Прочети") |
| Линк от релевантен контекст | Линк в footer без контекст |
| 5-10 вътрешни линка на страница | 100+ линка на страница |
| DoFollow вътрешни линкове | Nofollow на вътрешни без причина |
| Линк към най-важните страници | Линкване само към главница |

**Orphan pages (осиротели страницИ):**

Страница без нито един вътрешен линк към нея. Googlebot трудно я открива и тя получава нулев авторитет от вътрешното линкване.

**Проверка за orphan pages:** Screaming Frog → виж кои URL са в sitemap, но нямат вътрешни линкове.

---

## Защо HTTPS е задължително — и какво се случва без него? {#https-security}

**HTTPS** (HyperText Transfer Protocol Secure) е шифрованата версия на HTTP. Данните между браузъра и сървъра са криптирани. Google официално използва HTTPS като ranking фактор от 2014 г. — без HTTPS: предупреждение "Not Secure" в Chrome и потенциален penalty.

### Как работи HTTPS (опростено)

\`\`\`
HTTP (незащитено):
Браузър ←——————— plaintext ———————→ Сървър
         "Парола: 123456" се вижда от всеки

HTTPS (защитено):
Браузър ←——— SSL/TLS шифрование ——→ Сървър
         "xK9#mP2$qR..." не може да се разчете
\`\`\`

### SSL сертификат — как да получиш

**Безплатен (препоръчително за повечето сайтове):**
- **Let's Encrypt** — безплатен, автоматично обновяван, поддържан от всички хостинги
- Инсталация: повечето хостинги имат "Let's Encrypt" бутон в контролния панел

**Платен (за e-commerce и корпоративни):**
- **OV (Organization Validated)** — верифицира фирмата, ~50-150$/год
- **EV (Extended Validation)** — зелен бар с фирменото Ime, ~200-500$/год

**Проверка дали SSL е правилно инсталиран:**
- Посети \`https://www.ssllabs.com/ssltest/\` → въведи домейна → трябва да получиш A или A+
- Виж дали има mixed content предупреждения

### Mixed Content — скрит проблем след HTTPS миграция

**Mixed content** е когато HTTPS страницата зарежда HTTP ресурси (изображения, скриптове, CSS). Браузърът блокира HTTP ресурсите и показва предупреждение.

\`\`\`html
ПРОБЛЕМ (mixed content):
<!-- Страницата е https://, но изображението е http:// -->
<img src="http://site.bg/logo.png" alt="Logo">
<script src="http://cdn.example.com/jquery.js"></script>

РЕШЕНИЕ:
<img src="https://site.bg/logo.png" alt="Logo">
<script src="https://cdn.example.com/jquery.js"></script>
\`\`\`

**Масово намиране на mixed content:**
- Screaming Frog → Configuration → Spider → Check Mixed Content
- Chrome DevTools → Console tab → виждаш mixed content предупреждения

### HSTS — принудителен HTTPS

**HTTP Strict Transport Security (HSTS)** казва на браузъра: "Никога не се свързвай с този сайт по HTTP — винаги използвай HTTPS." Дори потребителят да напише http://, браузърът автоматично го превключва.

\`\`\`apache
# .htaccess — добавяне на HSTS header
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
\`\`\`

\`\`\`nginx
# Nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
\`\`\`

### Security Headers за SEO и сигурност

\`\`\`apache
# .htaccess — препоръчани security headers
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
\`\`\`

**Проверка:** \`https://securityheaders.com\` → въведи домейна → виж кои headers липсват.

---

## Как да ускориш сайта стъпка по стъпка? {#page-speed}

**Page Speed** е колко бързо се зарежда страницата. Всяка секунда забавяне намалява конверсиите с ~7% (Google/SOASTA изследване). Бавните сайтове се класират по-ниско — особено след Core Web Vitals update.

### Стъпка 1: Измерване на baseline

Преди да оптимизираш, измери:

1. **PageSpeed Insights** (\`pagespeed.web.dev\`) → запази scores
2. **GTmetrix** (\`gtmetrix.com\`) → подробен waterfall chart
3. **WebPageTest** (\`webpagetest.org\`) → тест от реални устройства и локации

Записвай **Field Data**, не само Lab Data.

### Стъпка 2: Оптимизация на изображения

Изображенията са причина №1 за бавни сайтове — обикновено 60-80% от размера на страницата.

**Правилен формат:**
\`\`\`
PNG → WebP: ~30% по-малък при същото качество
JPEG → WebP: ~25% по-малък
GIF (анимации) → WebP или AVIF
PNG/JPEG → AVIF: ~50% по-малък (но по-бавна енкодировка)
\`\`\`

**Правилни размери:**
\`\`\`html
<!-- ГРЕШНО: 2000px изображение в 400px контейнер -->
<img src="hero-2000px.jpg" style="width:400px">

<!-- ПРАВИЛНО: srcset за различни размери -->
<img
  src="hero-800.webp"
  srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1200.webp 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
  alt="Hero image"
  width="800"
  height="450"
>
\`\`\`

**Lazy loading за изображения под fold:**
\`\`\`html
<!-- Изображения под fold (не главния) -->
<img src="product.webp" loading="lazy" alt="Продукт" width="400" height="300">

<!-- НИКОГА lazy на LCP елемента (главното изображение) -->
<img src="hero.webp" loading="eager" fetchpriority="high" alt="Hero">
\`\`\`

### Стъпка 3: Оптимизация на CSS и JavaScript

**Render-blocking ресурси** са CSS и JS файлове, които спират браузъра да рендерира страницата докато не се заредят.

\`\`\`html
<!-- ГРЕШНО: render-blocking JS в <head> -->
<head>
  <script src="app.js"></script>
</head>

<!-- ПРАВИЛНО: defer или async -->
<head>
  <!-- defer: изпълнява се след парсване на HTML, запазва реда -->
  <script src="app.js" defer></script>

  <!-- async: зарежда паралелно, изпълнява веднага (за независими скриптове) -->
  <script src="analytics.js" async></script>
</head>
\`\`\`

**CSS минификация:**
\`\`\`css
/* ПРЕДИ минификация: 2.3KB */
.header {
  background-color: #ffffff;
  padding: 20px 40px;
  margin-bottom: 10px;
}

/* СЛЕД минификация: 1.1KB */
.header{background-color:#fff;padding:20px 40px;margin-bottom:10px}
\`\`\`

**Инструменти за минификация:**
- Build tools: Webpack, Vite, Parcel (автоматично)
- WordPress: WP Rocket, LiteSpeed Cache, Autoptimize
- Ръчно: cssnano (CSS), Terser (JS)

### Стъпка 4: Server-side оптимизации

**Compression (Gzip/Brotli):**

\`\`\`apache
# .htaccess — Gzip компресия
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/json
  AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>
\`\`\`

\`\`\`nginx
# Nginx — Brotli (по-добро от Gzip)
brotli on;
brotli_comp_level 6;
brotli_types text/html text/css application/javascript application/json;
\`\`\`

**Browser Caching:**

\`\`\`apache
# .htaccess — Cache-Control headers
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 1 hour"
</IfModule>
\`\`\`

### Стъпка 5: CDN и хостинг

**CDN (Content Delivery Network)** разпределя статичните файлове на сървъри по света — потребителят получава файловете от най-близкия сървър.

\`\`\`
БЕЗ CDN:
Потребител в Пловдив → Сървър в Ню Йорк (200ms latency)

С CDN:
Потребител в Пловдив → CDN node в Франкфурт (15ms latency)
\`\`\`

**Популярни CDN:** Cloudflare (безплатен tier), BunnyCDN, AWS CloudFront, Fastly

**Приоритет на оптимизацията (от най-важно):**
\`\`\`
1. Оптимизирай изображения (biggest win)
2. Enable compression (Gzip/Brotli)
3. Browser caching
4. Remove render-blocking resources
5. Minimize CSS/JS
6. CDN
7. HTTP/2 или HTTP/3
8. Database query optimization
\`\`\`

---

## Какво трябва да промениш технически, за да те виждат AI системите? {#ai-technical-seo}

**Техническият SEO за AI видимост** е новото измерение на техническия одит — освен класическите Google изисквания, трябва да се уверим, че AI ботовете (Perplexity, ChatGPT Browse, Gemini) могат да обхождат, разбират и цитират сайта.

### robots.txt за AI ботове

От 2023-2024 г. появата на AI търсачки създаде нови User-agent имена, за които трябва изрично да решиш политика.

**Пълен списък на AI ботове (2024-2025 г.):**

\`\`\`
# AI SEARCH (искаш да ги пуснеш за видимост)
User-agent: PerplexityBot         # Perplexity.ai
User-agent: YouBot                # You.com
User-agent: Diffbot               # Diffbot AI
User-agent: Applebot-Extended     # Apple Intelligence

# AI TRAINING (зависи от теб дали блокираш)
User-agent: GPTBot                # OpenAI training
User-agent: Google-Extended       # Google Gemini training
User-agent: CCBot                 # Common Crawl (база за много AI)
User-agent: anthropic-ai          # Anthropic Claude training
User-agent: cohere-ai             # Cohere training
User-agent: FacebookBot           # Meta AI training

# AI BROWSING (за реално-времеви AI отговори - пусни ги)
User-agent: ChatGPT-User          # ChatGPT Browse (реално-времево)
User-agent: OAI-SearchBot         # OpenAI search
\`\`\`

**Препоръчана политика:**

\`\`\`
Ако искаш максимална AI видимост:
→ Allow всичко (или не пиши нищо за тях)

Ако искаш да контролираш AI training, но искаш AI цитиране:
→ Disallow: GPTBot, CCBot, anthropic-ai (training ботове)
→ Allow: PerplexityBot, ChatGPT-User, OAI-SearchBot (search ботове)

Ако не искаш никакъв AI:
→ Disallow всичко (губиш AI видимост)
\`\`\`

### Crawl Budget за AI ботове

AI ботовете са агресивни crawlери — могат да претоварят сървъра. Контролирай честотата:

\`\`\`
User-agent: PerplexityBot
Crawl-delay: 1

User-agent: GPTBot
Crawl-delay: 2
\`\`\`

### Structured Data за AI видимост

AI системите четат Schema.org маркапа за по-добро разбиране. Задължителни типове:

**1. Article Schema — за всяко съдържание:**
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Заглавие",
  "author": {
    "@type": "Person",
    "name": "Иван Петров",
    "url": "https://site.bg/autor/ivan/"
  },
  "datePublished": "2025-05-01",
  "dateModified": "2025-05-15",
  "publisher": {
    "@type": "Organization",
    "name": "Site BG"
  }
}
\`\`\`

**2. FAQPage Schema — за AI Overviews:**
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Какво е технически SEO одит?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Технически SEO одит е систематична проверка..."
      }
    }
  ]
}
\`\`\`

**3. Speakable Schema — за AI гласови асистенти:**
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".article-summary", ".key-points"]
  }
}
\`\`\`

### llms.txt — новият стандарт за AI

**llms.txt** е нов (2024 г.) файл, подобен на robots.txt, но специално за Large Language Models. Поставя се на \`/llms.txt\` и предоставя структурирана информация за AI системите.

\`\`\`
# My Site
> Кратко описание на сайта и неговата цел

## About
Основна информация за сайта

## Key Pages
- [Главна страница](https://site.bg/)
- [Услуги](https://site.bg/uslugi/)
- [Блог](https://site.bg/blog/)

## Content Guidelines
Сайтът съдържа специализирано съдържание за SEO и дигитален маркетинг.
Всички статии са проверени от експерти.
\`\`\`

Не всички AI системи четат llms.txt, но Perplexity и някои Claude инструменти го правят.

### Технически изисквания за AI цитиране

\`\`\`
Чеклист за AI видимост:
□ Сайтът е достъпен за AI ботове в robots.txt
□ Страниците се зареждат под 3 секунди (бавните се прескачат)
□ HTML е семантичен (h1, h2, p — не само div)
□ FAQPage Schema на всяка информационна страница
□ Article Schema с author и datePublished
□ Canonical URL е настроен правилно
□ HTTPS (AI ботове не посещават HTTP)
□ Sitemap подаден и актуален
□ llms.txt файл (по избор, но препоръчително)
\`\`\`

---

## Кои инструменти да използваш — и с кой да започнеш? {#audit-tools}

**Правилните инструменти в правилната последователност** спестяват часове работа. Грешката е да започнеш с платен инструмент, когато безплатните Google инструменти дават 80% от информацията.

### Ниво 1 — Безплатни Google инструменти (Задължителни)

**1. Google Search Console**
\`https://search.google.com/search-console\`

Какво показва:
- Coverage → кои страници са индексирани, кои са с грешки
- Core Web Vitals → реални данни по устройство
- Mobile Usability → мобилни проблеми
- Sitemaps → статус на подадени sitemaps
- URL Inspection → статус на конкретен URL
- Manual Actions → ако има наказания от Google

**2. PageSpeed Insights**
\`https://pagespeed.web.dev\`

Какво показва:
- Core Web Vitals (Field + Lab данни)
- Конкретни препоръки с оценка на влиянието
- Сравнение mobile vs. desktop

**3. Rich Results Test**
\`https://search.google.com/test/rich-results\`

Какво показва:
- Валидност на Schema маркапа
- Preview на Rich Results
- Конкретни грешки и предупреждения

### Ниво 2 — Специализирани одит инструменти

**4. Screaming Frog SEO Spider (безплатен до 500 URL)**
\`https://www.screamingfrog.co.uk/seo-spider/\`

Как се използва:
\`\`\`
1. Enter Start URL → Start
2. Изчакай да обходи сайта
3. Response Codes → виж 404, 301, 5xx
4. Page Titles → виж дублирани, твърде дълги
5. Meta Description → виж липсващи
6. H1 → виж дублирани, липсващи
7. Images → виж без alt text, твърде тежки
8. Canonical → виж конфликти
9. Directives → виж noindex, nofollow
\`\`\`

**5. Ahrefs Webmaster Tools (безплатен за собствения сайт)**
\`https://ahrefs.com/webmaster-tools\`

Какво показва:
- Site Audit → пълен технически одит с приоритизиране
- Orphan pages
- Broken backlinks
- Crawl depth

**6. GTmetrix**
\`https://gtmetrix.com\`

Какво показва:
- Waterfall chart → виждаш точно кой ресурс е бавен
- Filmmstrip → визуализация на зареждането
- Сравнение с конкуренти

### Ниво 3 — Специфични инструменти

**7. Google Mobile-Friendly Test**
Вграден в Rich Results Test — проверява мобилна съвместимост

**8. SSL Labs Server Test**
\`https://www.ssllabs.com/ssltest/\`
Оценка на SSL конфигурацията (A до F)

**9. Security Headers**
\`https://securityheaders.com\`
Проверка на HTTP security headers

**10. Google Search Console Coverage Report**
Задълбочен анализ: кои URL са excluded и защо

### Последователност на одита

\`\`\`
ДЕН 1 — Сканиране и събиране на данни:
  Morning:
    1. Search Console Coverage Report → запис на грешки
    2. Search Console Core Web Vitals → запис на проблеми
    3. Search Console Mobile Usability → запис
    4. PageSpeed Insights (3-5 ключови страницИ) → запис

  Afternoon:
    5. Screaming Frog пълно сканиране → export в CSV
    6. GTmetrix за ключовите страницИ

ДЕН 2 — Анализ и приоритизиране:
    7. Обработка на Screaming Frog данни
    8. Ahrefs Site Audit (ако е налице)
    9. SSL и Security Headers проверка
    10. Manual проверка на robots.txt и sitemap

ДЕН 3 — Изготвяне на план за действие
    11. Приоритизиране: Критично → Важно → Оптимизация
    12. Разпределяне на задачи
\`\`\`

---

## Как провеждаш реален одит — в каква последователност? {#audit-process}

Пълният процес на технически SEO одит, приоритизиран по важност.

### Фаза 1 — Crawlability и Indexability (Критично)

**Проверка 1.1 — robots.txt**
\`\`\`
□ Достъпен на /robots.txt
□ Не блокира важни страницИ
□ Не блокира CSS/JS
□ Съдържа Sitemap: директива
□ Синтаксисът е правилен
\`\`\`

**Проверка 1.2 — Индексиране**
\`\`\`
□ Search Console Coverage: грешките са < 5% от общите URL
□ Няма noindex на важни страниции (с Screaming Frog)
□ Главницата е индексирана (site: search в Google)
□ Няма "Crawled - currently not indexed" за ключови страниции
\`\`\`

**Проверка 1.3 — Sitemap**
\`\`\`
□ Sitemap.xml съществува и е достъпен
□ Подаден в Search Console
□ Не съдържа noindex URL
□ Не съдържа 301/404 URL
□ lastmod дати са актуални
\`\`\`

### Фаза 2 — Technical Errors (Критично)

**Проверка 2.1 — HTTP статус кодове**
\`\`\`
□ Няма 404 грешки за важни страниции
□ Няма 5xx сървърни грешки
□ Redirect chains не надвишават 2 hop-а
□ Няма redirect loops
□ Всички важни 404 → 301 редирект към подходяща страница
\`\`\`

**Проверка 2.2 — HTTPS**
\`\`\`
□ SSL сертификатът е валиден
□ HTTP → HTTPS редирект работи
□ www/non-www е стандартизиран
□ Няма mixed content (HTTP ресурси на HTTPS страница)
□ HSTS header е настроен
\`\`\`

### Фаза 3 — Core Web Vitals (Важно)

\`\`\`
□ LCP ≤ 2.5s (Field Data в Search Console)
□ INP ≤ 200ms
□ CLS ≤ 0.1
□ PageSpeed Mobile score ≥ 70
□ PageSpeed Desktop score ≥ 85
□ TTFB ≤ 600ms
\`\`\`

### Фаза 4 — Duplicate Content (Важно)

\`\`\`
□ Canonical tag на всяка страница (самоканоничен или към оригинал)
□ www vs non-www стандартизиран с редирект
□ URL параметри не генерират индексирани дубликати
□ Pagination правилно обработена
□ Printer-friendly версии с noindex или canonical
\`\`\`

### Фаза 5 — Site Structure (Важно)

\`\`\`
□ Нито една важна страница не е на > 3 клика от главницата
□ Няма orphan pages (страниции без вътрешни линкове)
□ URL структурата е логична и описателна
□ Навигацията е консистентна на всички страниции
□ Breadcrumbs са имплементирани
□ BreadcrumbList Schema е добавена
\`\`\`

### Фаза 6 — Mobile (Важно)

\`\`\`
□ Viewport meta таг е присъстващ
□ Search Console Mobile Usability: 0 грешки
□ Шрифтовете са ≥ 16px
□ Touch targets са ≥ 44px
□ Без хоризонтален scroll
□ Interstitial попъпи не блокират съдържанието
\`\`\`

### Фаза 7 — Structured Data (Оптимизация)

\`\`\`
□ Organization Schema на главницата
□ Article Schema на всяка статия
□ FAQPage Schema на информационни страниции
□ BreadcrumbList Schema
□ Специфични типове (Product, LocalBusiness, HowTo) където е приложимо
□ Валидирано в Rich Results Test — 0 грешки
\`\`\`

### Фаза 8 — AI Visibility (Оптимизация)

\`\`\`
□ robots.txt политика за AI ботове е дефинирана
□ AI search ботове (PerplexityBot, ChatGPT-User) са разрешени
□ llms.txt файл е създаден (по избор)
□ Семантичен HTML (правилни heading структури)
□ Страниците се зареждат под 3 секунди
\`\`\`

---

## Пълен технически чеклист (122 точки) {#technical-checklist}

Използвай тозС чеклист при всеки технически одит. Маркирай статуса: ✓ Добро / ⚠ Нуждае се от подобрение / ✗ Проблем

### Crawling & Indexing
- [ ] robots.txt е достъпен и без критични грешки
- [ ] Sitemap.xml е достъпен и подаден в Search Console
- [ ] Sitemap не съдържа noindex/404 URL
- [ ] Search Console Coverage грешки < 5%
- [ ] Основните страниции са индексирани
- [ ] Crawl budget не се губи за параметърни дубликати
- [ ] AI ботове имат дефинирана политика в robots.txt

### HTTPS & Security
- [ ] SSL сертификат е валиден (не изтича скоро)
- [ ] HTTP → HTTPS редирект работи
- [ ] Mixed content грешки = 0
- [ ] HSTS header е настроен
- [ ] Security headers присъстват
- [ ] SSL Labs оценка: A или A+

### Redirects & URLs
- [ ] Няма redirect chains (> 2 хопа)
- [ ] Няма redirect loops
- [ ] www/non-www е стандартизиран
- [ ] 404 грешки за важни URL са решени
- [ ] URL структурата е логична (без параметри, без главни букви)

### Duplicate Content
- [ ] Canonical tag на всяка страница
- [ ] Параметърни URL не се индексират дублирано
- [ ] HTTP vs. HTTPS — само HTTPS е достъпно
- [ ] www vs. non-www — само едната версия е достъпна

### Core Web Vitals
- [ ] LCP ≤ 2.5s (Field Data)
- [ ] INP ≤ 200ms
- [ ] CLS ≤ 0.1
- [ ] TTFB ≤ 600ms
- [ ] PageSpeed Mobile ≥ 70
- [ ] Главното изображение е eager + preload (не lazy)
- [ ] Изображенията имат width и height атрибути

### Images & Media
- [ ] Изображенията са в WebP или AVIF формат
- [ ] Всяко изображение има alt текст
- [ ] Изображенията под fold имат loading="lazy"
- [ ] LCP изображението има fetchpriority="high"
- [ ] Изображенията имат правилни размери (не по-големи от нужното)

### Mobile
- [ ] Viewport meta таг присъства
- [ ] Mobile Usability грешки в Search Console = 0
- [ ] Шрифтовете са ≥ 16px
- [ ] Touch targets са ≥ 44px
- [ ] Без хоризонтален scroll
- [ ] Еднакво съдържание на mobile и desktop

### Site Structure
- [ ] Всяка важна страница е на ≤ 3 клика от главницата
- [ ] Няма orphan pages
- [ ] Breadcrumbs са имплементирани
- [ ] Вътрешните линкове имат описателен anchor text
- [ ] Навигацията е консистентна

### Page Speed
- [ ] Gzip или Brotli компресия е активна
- [ ] Browser caching е настроен
- [ ] CSS и JS са минифицирани
- [ ] Render-blocking ресурси са елиминирани (defer/async)
- [ ] CDN е използван за статични ресурси

### Structured Data
- [ ] Organization Schema на главницата
- [ ] Article Schema на статиите
- [ ] FAQPage Schema на информационните страниции
- [ ] BreadcrumbList Schema
- [ ] 0 грешки в Rich Results Test
- [ ] Schema отразява реалното видимо съдържание

### AI Visibility
- [ ] AI search ботове са разрешени в robots.txt
- [ ] FAQPage Schema е имплементирана
- [ ] Семантичен HTML (h1→h2→h3 йерархия)
- [ ] Зареждане под 3 секунди
- [ ] llms.txt файл (по избор)
`,
    en: `## What Is a Technical SEO Audit? {#what-is-technical-seo-audit}

A **technical SEO audit** is a systematic check of all the technical aspects of a website that affect Google's ability to discover, crawl, understand, and rank its pages.

The analogy is apt: think of it as an **annual medical check-up for your site**. At a check-up the doctor measures blood pressure, runs blood work, checks organ function — not because anything hurts, but to catch problems before they become serious. A technical SEO audit does exactly the same: it examines the site's "health" before problems destroy organic traffic.

### Why It Matters

You can have excellent content, perfect keywords, and hundreds of backlinks — if the site has technical problems, Google can't index it properly and everything else is wasted effort.

**Three levels of technical problems:**

\`\`\`
CRITICAL (blocks indexing)
├── robots.txt blocks Googlebot
├── noindex on important pages
├── broken internal links
└── site won't load (5xx errors)

IMPORTANT (hurts rankings)
├── slow loading (Core Web Vitals failure)
├── duplicate content without canonical
├── missing HTTPS
└── broken redirects

OPTIMIZATION (improves results)
├── optimized URL structure
├── internal linking
├── improved sitemap
└── structured data
\`\`\`

### What a Full Technical Audit Covers

| Category | What Is Checked |
|----------|----------------|
| Crawlability | Can Google reach the pages? |
| Indexability | Is indexing permitted? |
| Site Architecture | Is the structure logical? |
| Page Speed | Does it load quickly? |
| Mobile | Does it work on phones? |
| Security | Is it HTTPS? Any vulnerabilities? |
| Duplicate Content | Are there duplicate URLs? |
| Structured Data | Is Schema markup correct? |

> **Key fact:** A 2024 Ahrefs study found that 68% of websites have critical technical SEO problems their owners don't know about. The average mid-sized site has 15–30 technical errors.

---

## How Does Google Crawl Your Site — and Why Might It Miss Pages? {#crawling-indexing}

**Crawling** is the process by which Google sends its robot (Googlebot) to visit a site's pages and read their content. **Indexing** is recording those pages in Google's database — the "catalog" from which search results are served.

The analogy: imagine a **librarian and a catalog**. The librarian (Googlebot) walks the shelves (website), reads the books (pages), and records information in the catalog (Google Index). If the librarian can't reach a shelf (blocked by robots.txt), the book never enters the catalog. If the book is there but stamped "do not catalog" (noindex), it stays out too.

### How Googlebot Works Step by Step

\`\`\`
Step 1: DISCOVERY
Googlebot discovers new URLs from:
  ├── Sitemap.xml
  ├── Internal links from already-known pages
  ├── Backlinks from external sites
  └── Manually submitted URLs in Search Console

Step 2: CRAWL QUEUE
URL enters the queue. Google decides:
  ├── When to visit it (prioritization)
  └── How many resources to allocate (crawl budget)

Step 3: FETCHING
Googlebot downloads the page's HTML
  ├── Checks robots.txt BEFORE visiting
  └── Executes JavaScript (if necessary)

Step 4: PROCESSING
Google analyzes the HTML:
  ├── Discovers new links to crawl
  ├── Reads text and metadata
  └── Processes structured data

Step 5: INDEXING
Google decides whether to index:
  ├── Checks for noindex tag
  ├── Evaluates content quality
  └── Records in the index (or discards)
\`\`\`

### Crawl Budget — What It Is and Why It Matters

**Crawl budget** is the number of pages Google is willing to crawl on a site within a given period. Small sites (under 1,000 pages) rarely face crawl budget issues. For larger sites it's critical.

**What wastes crawl budget:**
- URL parameters (\`?sort=price&color=red\`) — generate thousands of variants of one page
- Endlessly paginated archives
- URLs with identical content (duplicates)
- 404 and 5xx errors — Googlebot wastes resources on non-existent pages

**Check in Search Console:**
Settings → Crawl Stats → see how many pages Googlebot crawls daily and with what HTTP status.

### Difference Between Crawling and Indexing

| Crawling | Indexing |
|----------|----------|
| Googlebot visits the page | Google records the page in its database |
| Can be crawled but not indexed | If indexed, it has also been crawled |
| Controlled by robots.txt | Controlled by noindex |
| robots.txt block = invisible to Google | noindex = visible to Google, but not shown in search |

> **Important:** If you block a page in robots.txt, Google can't check for a noindex tag — the page may enter the index via a backlink, but without content. Better approach: allow crawling, add noindex.

---

## How Do You Tell Google What to Index and What to Skip? {#robots-txt-sitemap}

**robots.txt** is a text file at the root of the site that tells all robots (Googlebot, Bingbot, AI bots) which parts of the site they can and cannot visit. **Sitemap.xml** is an XML file that explicitly shows Google which URLs exist and when they were last updated.

The analogy: **robots.txt is the security guard at the entrance** (says who can enter and where), while the **Sitemap is the building's floor plan** (shows all rooms and what's in them).

### robots.txt — Complete Guide

**Location:** Must be at \`https://yoursite.com/robots.txt\`

**Basic structure:**

\`\`\`
User-agent: *
Disallow: /admin/
Disallow: /private/
Allow: /

Sitemap: https://yoursite.com/sitemap.xml
\`\`\`

**Syntax breakdown:**

| Directive | Meaning | Example |
|-----------|---------|---------|
| \`User-agent: *\` | Applies to all bots | \`User-agent: Googlebot\` for Google only |
| \`Disallow: /path/\` | Blocks access to folder | \`Disallow: /wp-admin/\` |
| \`Allow: /path/\` | Explicitly permits (overrides Disallow) | \`Allow: /wp-admin/admin-ajax.php\` |
| \`Sitemap:\` | Points to sitemap URL | \`Sitemap: https://site.com/sitemap.xml\` |
| \`Crawl-delay:\` | Pause between requests (seconds) | \`Crawl-delay: 1\` |

**AI bots robots.txt (new from 2024):**

\`\`\`
# Allow standard search engines
User-agent: Googlebot
Allow: /

# Block AI training bots (optional)
User-agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /

# Allow AI search (recommended for visibility)
User-agent: PerplexityBot
Allow: /

Sitemap: https://yoursite.com/sitemap.xml
\`\`\`

> **Key decision:** Blocking GPTBot and Google-Extended stops AI training on your content, but does NOT stop citations in AI results. If you want to appear in Perplexity and ChatGPT, do NOT block their bots.

### Sitemap.xml — Complete Guide

**Basic XML sitemap:**

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2025-05-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yoursite.com/services/seo/</loc>
    <lastmod>2025-04-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
\`\`\`

**What should NOT be in your sitemap:**
- 301/302 redirects (only the final URL)
- noindex pages
- 404 and 5xx errors
- Duplicate URLs
- ?parameter URLs (unless canonical)

---

## Are You Competing Against Yourself? Duplicate Content and How to Fix It {#canonical-urls}

A **canonical URL** is an HTML tag that tells Google: "This page has duplicates — but THIS one is the original; index it and pass authority to it." **Duplicate content** is when the same (or very similar) content is accessible at multiple URLs.

### Why Duplicate Content Is a Problem

Imagine writing an excellent report and sending it to 5 addresses. The teacher receives the same letter from 5 places — confused about who to credit. Google faces the same situation: if content is accessible at 3 URLs, Google doesn't know which to rank and "splits" authority among them.

**How duplicate content happens:**

\`\`\`
Same text at different URLs:
├── https://site.com/product/             (canonical)
├── https://site.com/product/?color=red   (parameter)
├── https://site.com/product/?sort=price  (parameter)
├── https://www.site.com/product/         (www vs non-www)
├── https://site.com/Product/             (capital letter)
└── http://site.com/product/              (HTTP vs HTTPS)
\`\`\`

### rel="canonical" Tag — Syntax

**In HTML \`<head>\`:**

\`\`\`html
<link rel="canonical" href="https://yoursite.com/original-page/" />
\`\`\`

**Rules:**
- Use **absolute URLs** (with https://, not /relative/)
- Canonical must point to a real (200 OK) page
- Canonical must not point to a noindex page
- Self-canonical (page pointing to itself) is good practice

### When to Use Canonical vs. 301 Redirect

| Situation | Recommendation |
|-----------|---------------|
| Two URLs with same content, both stay active | Canonical |
| Old page fully replaced by new one | 301 Redirect |
| URL parameters (\`?color=red\`) — page stays | Canonical |
| Moving an entire domain | 301 Redirect |
| Product temporarily unavailable | 302 Redirect |
| Seasonal page, will return | Canonical to main category |

---

## When Do You Need a Redirect — and Which Type Should You Choose? {#redirects}

A **redirect** is an instruction to the browser and Googlebot: "The page you're looking for has moved — go there." Different redirect types send different signals to Googlebot.

### Redirect Types

| HTTP Code | Type | Meaning for Google | Passes link equity? |
|-----------|------|-------------------|---------------------|
| 301 | Moved Permanently | "Page permanently moved" | Yes (~99%) |
| 302 | Found (Temporary) | "Temporary move" | No (officially) |
| 307 | Temporary Redirect | HTTP/1.1 version of 302 | No |
| 308 | Permanent Redirect | HTTP/1.1 version of 301 | Yes |
| 410 | Gone | "Page deleted forever" | N/A |

### 301 Redirect Implementation

**In .htaccess (Apache):**

\`\`\`apache
# Single page
Redirect 301 /old-page/ https://site.com/new-page/

# Entire folder
RedirectMatch 301 ^/blog/(.*)$ https://site.com/articles/$1

# HTTP → HTTPS (mandatory)
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
\`\`\`

**In Next.js (next.config.js):**

\`\`\`js
module.exports = {
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true, // 301
      },
    ];
  },
};
\`\`\`

### Redirect Chains — Hidden Problem

A redirect chain is when URL A → URL B → URL C. Every additional hop slows loading and loses some link equity.

\`\`\`
PROBLEM (chain):
/old-url/ → /middle-url/ → /new-url/

SOLUTION (direct):
/old-url/ → /new-url/
/middle-url/ → /new-url/
\`\`\`

---

## Защо Google измерва усещането за бързина — и как да се справиш? {#core-web-vitals}

**Core Web Vitals** are three metrics Google uses to measure real user experience when loading a page. Since May 2021 they are an official ranking factor — poor scores directly hurt rankings.

The analogy: a **UX doctor** measuring the page's "vital signs" — pulse (speed), breathing (responsiveness), stability (no surprises). If readings are out of range, the patient (site) gets a lower ranking.

### LCP — Largest Contentful Paint

**LCP** measures how quickly the largest visible content element loads (usually the main image or headline).

\`\`\`
Good:     ≤ 2.5 seconds   ✓
Needs improvement: 2.5–4.0 sec   ⚠
Poor:     > 4.0 seconds   ✗
\`\`\`

**Top causes of slow LCP:**
- Large, unoptimized image (PNG instead of WebP)
- Render-blocking CSS/JavaScript
- Slow server response (TTFB over 600ms)
- Lazy loading the LCP element — a mistake!

**Fix for LCP:**

\`\`\`html
<!-- WRONG: lazy load on the main image -->
<img src="hero.jpg" loading="lazy" alt="Hero">

<!-- RIGHT: eager load + preload -->
<link rel="preload" as="image" href="hero.webp">
<img src="hero.webp" loading="eager" fetchpriority="high" alt="Hero">
\`\`\`

### INP — Interaction to Next Paint

**INP** measures how quickly the page responds to user actions (clicks, taps, key presses).

\`\`\`
Good:     ≤ 200 milliseconds   ✓
Needs improvement: 200–500 ms  ⚠
Poor:     > 500 milliseconds   ✗
\`\`\`

### CLS — Cumulative Layout Shift

**CLS** measures how much page elements jump and displace content during loading. You know the feeling: you're reading text, an image loads and pushes everything down — that's exactly what CLS measures.

\`\`\`
Good:     ≤ 0.1   ✓
Needs improvement: 0.1–0.25 ⚠
Poor:     > 0.25  ✗
\`\`\`

**Fix for CLS:**

\`\`\`html
<!-- WRONG: no dimensions -->
<img src="product.webp" alt="Product">

<!-- RIGHT: with width and height -->
<img src="product.webp" alt="Product" width="800" height="600">
\`\`\`

> **Key fact:** Google uses Field Data (Chrome User Experience Report) for ranking, not Lab Data. A site with an excellent PageSpeed score but poor real-world data is still penalized.

---

## Why Is the Mobile Version of Your Site More Important Than Desktop? {#mobile-first}

**Mobile-First Indexing** means Google uses the mobile version of the site as the basis for indexing and ranking. Not the desktop version. If the mobile version is poor or different from desktop — rankings suffer.

Google completed the full transition to Mobile-First Indexing in July 2024 — all sites are now under Mobile-First mode.

### Core Mobile-First Requirements

**1. Responsive design (mandatory)**

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1">
\`\`\`

**2. Same content on mobile and desktop**

Content hidden on mobile with CSS gets less weight from Google.

**3. Adequate touch target size**

\`\`\`css
button, a {
  min-height: 44px;
  min-width: 44px;
}
\`\`\`

**4. No horizontal scroll**

\`\`\`css
body { overflow-x: hidden; }
img, video, iframe { max-width: 100%; height: auto; }
\`\`\`

**5. Readable font without zooming**

\`\`\`css
body { font-size: 16px; line-height: 1.6; }
\`\`\`

### Common Mobile Errors

| Error | Consequence | Fix |
|-------|-------------|-----|
| Text too small | User zooms | min 16px font-size |
| Clickable elements too close | Wrong taps | min 8px gap |
| Content wider than screen | Horizontal scroll | max-width: 100% |
| Viewport not set | Scaling issues | \`<meta viewport>\` |

---

## How Does Your Site Structure Affect Rankings? {#site-structure}

**Site structure** determines how pages are organized and connected. **Internal linking** is the system of hyperlinks between pages on the same site. Together they determine how Google distributes authority (link equity) and how easily it can discover new content.

### Ideal Structure: Flat Hierarchy

\`\`\`
GOOD structure (flat — max 3 clicks from homepage):

Homepage (/)
├── Category (/services/)
│   ├── Service 1 (/services/seo/)
│   ├── Service 2 (/services/ppc/)
│   └── Service 3 (/services/smm/)
├── Blog (/blog/)
│   ├── Article 1 (/blog/article-1/)
│   └── Article 2 (/blog/article-2/)
└── Contact (/contact/)

BAD structure (deep — 5+ clicks):
Homepage → Section → Subsection → Category → Product → Variant (5 clicks!)
\`\`\`

**The rule:** No important page should be more than 3 clicks from the homepage.

### Pillar-Cluster Model

\`\`\`
PILLAR page (main topic):
/blog/seo-guide/ (comprehensive SEO page)
  └── Cluster 1: /blog/technical-seo/
  └── Cluster 2: /blog/on-page-seo/
  └── Cluster 3: /blog/link-building/

Pillar → links to every Cluster
Every Cluster → links back to Pillar
Clusters → link to each other (relevant ones)
\`\`\`

### Internal Linking Rules

| Good Practice | Bad Practice |
|--------------|-------------|
| Descriptive anchor text ("SEO audit steps") | Generic anchor ("Click here", "Read more") |
| Link from relevant context | Link in footer without context |
| 5–10 internal links per page | 100+ links per page |
| DoFollow internal links | Nofollow on internal links without reason |

---

## Why Is HTTPS Mandatory — and What Happens Without It? {#https-security}

**HTTPS** (HyperText Transfer Protocol Secure) is the encrypted version of HTTP. Data between browser and server is encrypted. Google officially uses HTTPS as a ranking factor since 2014 — without HTTPS: "Not Secure" warning in Chrome and potential ranking penalty.

### Getting an SSL Certificate

**Free (recommended for most sites):**
- **Let's Encrypt** — free, auto-renewed, supported by all hosts
- Installation: most hosts have a "Let's Encrypt" button in the control panel

**Check SSL installation:**
Visit \`https://www.ssllabs.com/ssltest/\` → enter domain → should get A or A+

### Mixed Content — Hidden Problem After HTTPS Migration

\`\`\`html
PROBLEM (mixed content):
<!-- Page is https://, but image is http:// -->
<img src="http://site.com/logo.png" alt="Logo">

FIX:
<img src="https://site.com/logo.png" alt="Logo">
\`\`\`

### HSTS — Forced HTTPS

\`\`\`apache
# .htaccess
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
\`\`\`

---

## How to Speed Up Your Site Step by Step {#page-speed}

**Page Speed** is how quickly a page loads. Every second of delay reduces conversions by ~7% (Google/SOASTA research). Slow sites rank lower — especially after Core Web Vitals updates.

### Step 1: Measure Baseline

1. **PageSpeed Insights** (\`pagespeed.web.dev\`) → save scores
2. **GTmetrix** (\`gtmetrix.com\`) → detailed waterfall chart
3. **WebPageTest** (\`webpagetest.org\`) → test from real devices and locations

### Step 2: Image Optimization

Images are the #1 cause of slow sites — typically 60–80% of page size.

\`\`\`html
<!-- RIGHT: srcset for responsive images -->
<img
  src="hero-800.webp"
  srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1200.webp 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
  alt="Hero image"
  width="800"
  height="450"
>
\`\`\`

### Step 3: CSS and JavaScript Optimization

\`\`\`html
<!-- RIGHT: defer JS -->
<script src="app.js" defer></script>
<script src="analytics.js" async></script>
\`\`\`

### Step 4: Server-Side Optimizations

\`\`\`apache
# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
\`\`\`

### Optimization Priority

\`\`\`
1. Optimize images (biggest win)
2. Enable compression (Gzip/Brotli)
3. Browser caching
4. Remove render-blocking resources
5. Minimize CSS/JS
6. CDN
7. HTTP/2 or HTTP/3
\`\`\`

---

## What Do You Need to Change Technically for AI Systems to See You? {#ai-technical-seo}

**Technical SEO for AI visibility** is the new dimension of the technical audit — beyond classic Google requirements, we must ensure that AI bots (Perplexity, ChatGPT Browse, Gemini) can crawl, understand, and cite the site.

### robots.txt for AI Bots

\`\`\`
# AI SEARCH (allow for visibility)
User-agent: PerplexityBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

# AI TRAINING (your choice)
User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /
\`\`\`

### llms.txt — New Standard for AI

\`\`\`
# My Site
> Brief description of the site and its purpose

## Key Pages
- [Homepage](https://site.com/)
- [Services](https://site.com/services/)
- [Blog](https://site.com/blog/)
\`\`\`

### Technical Requirements for AI Citation

\`\`\`
AI Visibility Checklist:
□ Site accessible to AI bots in robots.txt
□ Pages load under 3 seconds
□ Semantic HTML (h1, h2, p — not just divs)
□ FAQPage Schema on every informational page
□ Article Schema with author and datePublished
□ Canonical URL correctly set
□ HTTPS (AI bots don't visit HTTP)
□ Sitemap submitted and up to date
□ llms.txt file (optional but recommended)
\`\`\`

---

## Which Tools Should You Use — and Where to Start? {#audit-tools}

### Level 1 — Free Google Tools (Mandatory)

**1. Google Search Console** (\`search.google.com/search-console\`)
- Coverage → indexed pages vs. errors
- Core Web Vitals → real device data
- Mobile Usability → mobile issues
- URL Inspection → individual URL status

**2. PageSpeed Insights** (\`pagespeed.web.dev\`)
- Core Web Vitals (Field + Lab data)
- Specific recommendations with impact estimates
- Mobile vs. desktop comparison

**3. Rich Results Test** (\`search.google.com/test/rich-results\`)
- Schema markup validity
- Rich Results preview
- Specific errors and warnings

### Level 2 — Specialized Audit Tools

**4. Screaming Frog SEO Spider** (free up to 500 URLs)
\`screamingfrog.co.uk/seo-spider/\`
- HTTP status codes (404, 301, 5xx)
- Duplicate titles and meta descriptions
- Missing H1s and alt texts
- Canonical conflicts
- Redirect chains

**5. Ahrefs Webmaster Tools** (free for own site)
- Full site audit with prioritization
- Orphan pages
- Broken backlinks

**6. GTmetrix** (\`gtmetrix.com\`)
- Waterfall chart (see exactly which resource is slow)
- Filmstrip visualization of loading
- Competitor comparison

### Audit Sequence

\`\`\`
DAY 1 — Scanning and data collection:
  1. Search Console Coverage Report → record errors
  2. Search Console Core Web Vitals → record issues
  3. PageSpeed Insights (3-5 key pages) → record
  4. Screaming Frog full scan → export to CSV
  5. GTmetrix for key pages

DAY 2 — Analysis and prioritization:
  6. Process Screaming Frog data
  7. Ahrefs Site Audit (if available)
  8. SSL and Security Headers check
  9. Manual check of robots.txt and sitemap

DAY 3 — Action plan:
  10. Prioritize: Critical → Important → Optimization
  11. Assign tasks
\`\`\`

---

## How Do You Run a Real Audit — in What Order? {#audit-process}

### Phase 1 — Crawlability and Indexability (Critical)

\`\`\`
□ robots.txt accessible and without critical errors
□ Sitemap.xml accessible and submitted to Search Console
□ Sitemap doesn't contain noindex/404 URLs
□ Search Console Coverage errors < 5%
□ Main pages are indexed
□ Crawl budget not wasted on parameter duplicates
□ AI bots have a defined policy in robots.txt
\`\`\`

### Phase 2 — Technical Errors (Critical)

\`\`\`
□ No 404 errors for important pages
□ No 5xx server errors
□ Redirect chains don't exceed 2 hops
□ No redirect loops
□ All important 404s → 301 redirect to appropriate page
□ SSL certificate valid
□ HTTP → HTTPS redirect works
□ No mixed content
\`\`\`

### Phase 3 — Core Web Vitals (Important)

\`\`\`
□ LCP ≤ 2.5s (Field Data)
□ INP ≤ 200ms
□ CLS ≤ 0.1
□ TTFB ≤ 600ms
□ PageSpeed Mobile ≥ 70
□ LCP image has eager + preload (not lazy)
□ Images have width and height attributes
\`\`\`

### Phase 4 — Duplicate Content (Important)

\`\`\`
□ Canonical tag on every page
□ URL parameters don't generate indexed duplicates
□ www/non-www standardized with redirect
□ Pagination correctly handled
\`\`\`

### Phase 5 — Site Structure (Important)

\`\`\`
□ No important page more than 3 clicks from homepage
□ No orphan pages
□ URL structure is logical and descriptive
□ Navigation is consistent across all pages
□ Breadcrumbs implemented
□ BreadcrumbList Schema added
\`\`\`

---

## Full Technical Checklist (122 Items) {#technical-checklist}

Use this checklist for every technical audit. Mark status: ✓ Good / ⚠ Needs improvement / ✗ Problem

### Crawling & Indexing
- [ ] robots.txt accessible and without critical errors
- [ ] Sitemap.xml accessible and submitted to Search Console
- [ ] Sitemap doesn't contain noindex/404 URLs
- [ ] Search Console Coverage errors < 5%
- [ ] Main pages are indexed
- [ ] Crawl budget not wasted on parameter duplicates
- [ ] AI bots have a defined policy in robots.txt

### HTTPS & Security
- [ ] SSL certificate valid (not expiring soon)
- [ ] HTTP → HTTPS redirect works
- [ ] Mixed content errors = 0
- [ ] HSTS header configured
- [ ] Security headers present
- [ ] SSL Labs rating: A or A+

### Redirects & URLs
- [ ] No redirect chains (> 2 hops)
- [ ] No redirect loops
- [ ] www/non-www standardized
- [ ] 404 errors for important URLs resolved
- [ ] URL structure is logical (no parameters, no capitals)

### Duplicate Content
- [ ] Canonical tag on every page
- [ ] Parameter URLs don't generate duplicate indexing
- [ ] Only HTTPS accessible (HTTP redirects)
- [ ] Only one of www/non-www accessible

### Core Web Vitals
- [ ] LCP ≤ 2.5s (Field Data)
- [ ] INP ≤ 200ms
- [ ] CLS ≤ 0.1
- [ ] TTFB ≤ 600ms
- [ ] PageSpeed Mobile ≥ 70
- [ ] Main image is eager + preload (not lazy)
- [ ] Images have width and height attributes

### Images & Media
- [ ] Images in WebP or AVIF format
- [ ] Every image has alt text
- [ ] Below-fold images have loading="lazy"
- [ ] LCP image has fetchpriority="high"
- [ ] Images sized correctly (not larger than needed)

### Mobile
- [ ] Viewport meta tag present
- [ ] Mobile Usability errors in Search Console = 0
- [ ] Font size ≥ 16px
- [ ] Touch targets ≥ 44px
- [ ] No horizontal scroll
- [ ] Same content on mobile and desktop

### Site Structure
- [ ] Every important page ≤ 3 clicks from homepage
- [ ] No orphan pages
- [ ] Breadcrumbs implemented
- [ ] Internal links have descriptive anchor text
- [ ] Navigation is consistent

### Page Speed
- [ ] Gzip or Brotli compression active
- [ ] Browser caching configured
- [ ] CSS and JS minified
- [ ] Render-blocking resources eliminated (defer/async)
- [ ] CDN used for static assets

### Structured Data
- [ ] Organization Schema on homepage
- [ ] Article Schema on articles
- [ ] FAQPage Schema on informational pages
- [ ] BreadcrumbList Schema
- [ ] 0 errors in Rich Results Test
- [ ] Schema reflects actual visible content

### AI Visibility
- [ ] AI search bots allowed in robots.txt
- [ ] FAQPage Schema implemented
- [ ] Semantic HTML (h1→h2→h3 hierarchy)
- [ ] Loading under 3 seconds
- [ ] llms.txt file (optional)
`,
  },
  faq: [
    {
      question: {
        bg: "Колко бързо трябва да е сайтът ми?",
        en: "How fast should my site be?",
      },
      answer: {
        bg: "Целта са следните прагове по Core Web Vitals: LCP ≤ 2.5 секунди, INP ≤ 200 милисекунди, CLS ≤ 0.1. За PageSpeed Insights score: над 70 на мобилен е добро, над 90 е отлично. Важното е Field Data в Search Console — реалните потребителски данни, не лабораторното тестване. Дори PageSpeed score от 60 може да е приемлив ако Field Data показва добри Core Web Vitals. Приоритет: зареди главното изображение бързо (LCP), не допускай layout shifts (CLS), реагирай бързо на кликове (INP).",
        en: "Target these Core Web Vitals thresholds: LCP ≤ 2.5 seconds, INP ≤ 200 milliseconds, CLS ≤ 0.1. For PageSpeed Insights score: above 70 on mobile is good, above 90 is excellent. What matters is Field Data in Search Console — real user data, not lab testing. Even a PageSpeed score of 60 may be acceptable if Field Data shows good Core Web Vitals. Priority: load the main image quickly (LCP), avoid layout shifts (CLS), respond quickly to clicks (INP).",
      },
    },
    {
      question: {
        bg: "Canonical URL или 301 редирект — кое да изберем?",
        en: "Canonical URL or 301 redirect — which to choose?",
      },
      answer: {
        bg: "Правилото е просто: ако страницата може да изчезне (редиректна към нова), използвай 301 редирект. Ако страницата остава активна, но има дублати (параметри, www, http), използвай canonical. Конкретни случаи: преместваш стара страница към нова → 301 редирект. Имаш /produkt/?color=red и /produkt/ с еднакво съдържание → canonical на варианта към оригинала. Преминаваш от HTTP към HTTPS → 301 редирект (не canonical). Canonical е по-слаб сигнал от 301 — Google може да го игнорира. 301 е по-силен и гарантиран.",
        en: "The rule is simple: if the page will disappear (redirected to a new one), use a 301 redirect. If the page stays active but has duplicates (parameters, www, http), use canonical. Specific cases: moving an old page to a new one → 301 redirect. You have /product/?color=red and /product/ with identical content → canonical the variant to the original. Migrating from HTTP to HTTPS → 301 redirect (not canonical). Canonical is a weaker signal than 301 — Google may ignore it. 301 is stronger and guaranteed.",
      },
    },
    {
      question: {
        bg: "Кое е по-важно: скорост или съдържание?",
        en: "What's more important: speed or content?",
      },
      answer: {
        bg: "Не е или/или — и двете са задължителни, но на различни нива. Съдържанието е основата: без качествено, релевантно съдържание, никаква техническа оптимизация не помага. Скоростта е усилвател: ако съдържанието е добро, но сайтът е бавен — губиш позиции пред конкуренти с подобно съдържание, но по-бърз сайт. Практическото правило: Ако PageSpeed Mobile е под 50 → фокусирай се на скоростта. Ако PageSpeed е над 70 → фокусирай се на съдържанието. Никога не жертвай съдържание за скорост (премахване на важна информация).",
        en: "It's not either/or — both are mandatory, but at different levels. Content is the foundation: without quality, relevant content, no technical optimization helps. Speed is the amplifier: if content is good but the site is slow — you lose positions to competitors with similar content but a faster site. The practical rule: If PageSpeed Mobile is below 50 → focus on speed. If PageSpeed is above 70 → focus on content. Never sacrifice content for speed (removing important information).",
      },
    },
    {
      question: {
        bg: "Трябва ли ми HTTPS ако не продавам нищо?",
        en: "Do I need HTTPS if I'm not selling anything?",
      },
      answer: {
        bg: "Да — задължително. HTTPS вече не е само за e-commerce. Chrome показва 'Not Secure' предупреждение на всички HTTP сайтове от 2018 г. — потребителите виждат предупреждение и много напускат. Google официално използва HTTPS като ranking фактор. Let's Encrypt предоставя безплатни SSL сертификати — всеки хостинг ги поддържа. Няма причина да нямаш HTTPS. Дори статичен блог трябва да е HTTPS.",
        en: "Yes — it's mandatory. HTTPS is no longer just for e-commerce. Chrome has shown a 'Not Secure' warning on all HTTP sites since 2018 — users see the warning and many leave. Google officially uses HTTPS as a ranking factor. Let's Encrypt provides free SSL certificates — every host supports them. There's no reason not to have HTTPS. Even a static blog should be HTTPS.",
      },
    },
    {
      question: {
        bg: "Как да разбера дали сайтът ми е правилно индексиран?",
        en: "How do I know if my site is correctly indexed?",
      },
      answer: {
        bg: "Три метода: 1) Google Search Console → Coverage → Indexed — виждаш точния брой индексирани URL и кои са с грешки. 2) Търси в Google: site:tvoysajt.bg — приблизителен брой индексирани страниции. 3) URL Inspection в Search Console → въведи конкретен URL → виждаш дали е индексиран, кога последно е crawled и какъв е статусът. Нормален показател: 80-95% от подадените в sitemap URL трябва да са индексирани. Ако под 70% са индексирани → проблем с качеството или технически блокирания.",
        en: "Three methods: 1) Google Search Console → Coverage → Indexed — see the exact number of indexed URLs and which have errors. 2) Search in Google: site:yoursite.com — approximate number of indexed pages. 3) URL Inspection in Search Console → enter a specific URL → see if it's indexed, when last crawled, and its status. Normal benchmark: 80-95% of URLs submitted in sitemap should be indexed. If below 70% are indexed → quality problem or technical blocking.",
      },
    },
    {
      question: {
        bg: "Колко често трябва да правя технически SEO одит?",
        en: "How often should I do a technical SEO audit?",
      },
      answer: {
        bg: "Препоръчителна честота: Пълен одит — веднъж на 6 месеца (всяко полугодие). Частичен мониторинг — всеки месец (Search Console грешки, Core Web Vitals). При промени — след всяко голямо обновяване на сайта (нов дизайн, нова CMS версия, добавяне на нова секция). Автоматизирани проверки — настрой alert в Search Console за нови грешки. Search Console изпраща имейл при рязко покачване на грешките. Ahrefs Webmaster Tools прави автоматичен crawl всяка седмица и ти изпраща доклад.",
        en: "Recommended frequency: Full audit — once every 6 months. Partial monitoring — every month (Search Console errors, Core Web Vitals). After changes — after every major site update (new design, new CMS version, adding a new section). Automated checks — set up alerts in Search Console for new errors. Search Console sends email when errors spike. Ahrefs Webmaster Tools automatically crawls weekly and sends you a report.",
      },
    },
    {
      question: {
        bg: "Трябва ли да блокирам AI ботовете в robots.txt?",
        en: "Should I block AI bots in robots.txt?",
      },
      answer: {
        bg: "Зависи от целта ти. Има два типа AI ботове: Training ботове (GPTBot, CCBot, anthropic-ai) — събират твоето съдържание за обучение на AI модели. Блокирането им спира използването на съдържанието ти за training, но НЕ спира цитирането в AI отговори. Search ботове (PerplexityBot, ChatGPT-User, OAI-SearchBot) — търсят реално-времево за AI отговори. Блокирането им = не се появяваш в Perplexity, ChatGPT Search и т.н. Препоръката: Блокирай training ботове ако не искаш съдържанието ти за AI training. НЕ блокирай search ботове ако искаш AI видимост.",
        en: "It depends on your goal. There are two types of AI bots: Training bots (GPTBot, CCBot, anthropic-ai) — collect your content to train AI models. Blocking them stops your content from being used for training, but does NOT stop citations in AI responses. Search bots (PerplexityBot, ChatGPT-User, OAI-SearchBot) — search in real-time for AI answers. Blocking them = you don't appear in Perplexity, ChatGPT Search, etc. Recommendation: Block training bots if you don't want your content used for AI training. Do NOT block search bots if you want AI visibility.",
      },
    },
  ],
  officialLinks: [
    {
      label: "Google Search Console",
      url: "https://search.google.com/search-console",
      desc: {
        bg: "Мониторинг на индексирането, Core Web Vitals, Mobile Usability и технически грешки",
        en: "Monitor indexing, Core Web Vitals, Mobile Usability, and technical errors",
      },
    },
    {
      label: "PageSpeed Insights",
      url: "https://pagespeed.web.dev",
      desc: {
        bg: "Измерване на Core Web Vitals и конкретни препоръки за подобрение",
        en: "Measure Core Web Vitals and get specific improvement recommendations",
      },
    },
    {
      label: "Rich Results Test",
      url: "https://search.google.com/test/rich-results",
      desc: {
        bg: "Валидиране на Schema маркап и проверка за Rich Results eligibility",
        en: "Validate Schema markup and check Rich Results eligibility",
      },
    },
    {
      label: "Google — How Google Crawls the Web",
      url: "https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers",
      desc: {
        bg: "Официална документация как работи Googlebot и crawling процесът",
        en: "Official documentation on how Googlebot and the crawling process work",
      },
    },
    {
      label: "web.dev — Core Web Vitals",
      url: "https://web.dev/explore/learn-core-web-vitals",
      desc: {
        bg: "Подробни ръководства за LCP, INP, CLS с код примери от Google",
        en: "Detailed guides for LCP, INP, CLS with code examples from Google",
      },
    },
    {
      label: "Google — robots.txt Specification",
      url: "https://developers.google.com/search/docs/crawling-indexing/robots/intro",
      desc: {
        bg: "Официалната спецификация за robots.txt от Google",
        en: "Official robots.txt specification from Google",
      },
    },
    {
      label: "SSL Labs Server Test",
      url: "https://www.ssllabs.com/ssltest/",
      desc: {
        bg: "Оценка на SSL/TLS конфигурацията на сървъра",
        en: "Evaluate your server's SSL/TLS configuration",
      },
    },
  ],
  relatedSlugs: ["structured-data", "geo-optimization", "entity-seo", "google-ai-overviews"],
};

