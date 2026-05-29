export type Difficulty = "beginner" | "intermediate" | "advanced" | "expert";
export type Category =
  | "ai-seo"
  | "geo"
  | "technical-seo"
  | "structured-data"
  | "ai-commerce"
  | "llm-optimization"
  | "entity-seo"
  | "ai-visibility"
  | "ecommerce-seo"
  | "ai-agents"
  | "client-acquisition";

export interface LearningMeta {
  stationNumber?: number;
  nextSlug?: string;
  mentalModel: { bg: string; en: string };
  keyAnalogy: { bg: string; en: string };
  understandingCheck: { bg: string[]; en: string[] };
}

export interface Tutorial {
  slug: string;
  title: { bg: string; en: string };
  description: { bg: string; en: string };
  category: Category;
  difficulty: Difficulty;
  readTime: number;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured?: boolean;
  new?: boolean;
  image?: string;
  relatedSlugs?: string[];
  learningMeta?: LearningMeta;
}

export const tutorials: Tutorial[] = [
  {
    slug: "ai-seo-basics",
    title: {
      bg: "AI SEO Основи: Пълен наръчник за 2025",
      en: "AI SEO Basics: Complete Guide for 2025",
    },
    description: {
      bg: "Разбери как работи AI търсенето, какво е GEO и как да подготвиш сайта си за AI ерата на Google.",
      en: "Understand how AI search works, what GEO is, and how to prepare your site for Google's AI era.",
    },
    category: "ai-seo",
    difficulty: "beginner",
    readTime: 15,
    publishedAt: "2025-01-15",
    updatedAt: "2025-06-01",
    tags: ["AI SEO", "GEO", "Beginner", "Google AI"],
    featured: true,
    new: true,
    learningMeta: {
      stationNumber: 1,
      nextSlug: "llm-optimization",
      mentalModel: {
        bg: "GPS vs Хартиена карта — как AI промени навигацията в информацията",
        en: "GPS vs Paper map — how AI changed navigation through information",
      },
      keyAnalogy: {
        bg: "Преди търсенето беше хартиена карта — виждаш всички пътища и сам избираш. Сега е GPS — дава ти само крайния отговор, без да виждаш алтернативите. Ако AI не те включи в маршрута — не съществуваш за клиента.",
        en: "Search used to be a paper map — you see all roads and choose. Now it's GPS — it gives you only the final answer, without seeing alternatives. If AI doesn't include you in the route — you don't exist for the client.",
      },
      understandingCheck: {
        bg: [
          "Можеш ли да обясниш с едно изречение каква е разликата между класическото Google търсене и AI Overview?",
          "Защо е недостатъчно само да се класираш добре в Google — какво може да липсва?",
          "Какво означава, че 40% от търсенията вече имат AI отговор — за твоя бизнес конкретно?",
          "Какъв е следващият въпрос, на който трябва да намериш отговор след тази станция?",
        ],
        en: [
          "Can you explain in one sentence the difference between classic Google search and AI Overview?",
          "Why is it not enough to just rank well in Google — what might be missing?",
          "What does it mean that 40% of searches now have AI answers — specifically for your business?",
          "What is the next question you need to answer after this station?",
        ],
      },
    },
  },
  {
    slug: "geo-optimization",
    title: {
      bg: "GEO Оптимизация: Генеративна Оптимизация на Двигатели",
      en: "GEO Optimization: Generative Engine Optimization",
    },
    description: {
      bg: "Пълно ръководство за оптимизиране на съдържанието за AI-генерирани отговори в ChatGPT, Gemini и Perplexity.",
      en: "Complete guide to optimizing content for AI-generated answers in ChatGPT, Gemini, and Perplexity.",
    },
    category: "geo",
    difficulty: "intermediate",
    readTime: 20,
    publishedAt: "2025-02-01",
    updatedAt: "2025-06-01",
    tags: ["GEO", "ChatGPT", "Gemini", "Perplexity", "LLM"],
    featured: true,
    new: true,
    learningMeta: {
      stationNumber: 3,
      nextSlug: "entity-seo",
      mentalModel: {
        bg: "Консултантът в стаята — как да станеш препоръчван, не само видим",
        en: "The consultant in the room — how to become recommended, not just visible",
      },
      keyAnalogy: {
        bg: "Представи си стая с 50 консултанти. Клиент задава въпрос. Кого питат? Не най-шумния — а онзи, за когото всички знаят, че е специалистът по темата. GEO е процесът да станеш 'онзи' за AI системата. Разликата между да си в телефонния указател и да те препоръча приятел.",
        en: "Imagine a room with 50 consultants. A client asks a question. Who do they ask? Not the loudest — the one everyone knows is the specialist on the topic. GEO is the process of becoming 'that person' for AI systems. The difference between being in the phone book and being recommended by a friend.",
      },
      understandingCheck: {
        bg: [
          "Каква е разликата между класическото SEO и GEO — дай конкретен пример?",
          "Защо е важно съдържанието да е структурирано като директни отговори за GEO?",
          "Как GEO се свързва с Entity SEO — кое трябва да е на място първо?",
          "Какво конкретно ще промениш в съдържанието на твоя сайт след тази станция?",
        ],
        en: [
          "What is the difference between classic SEO and GEO — give a specific example?",
          "Why is it important for content to be structured as direct answers for GEO?",
          "How does GEO connect to Entity SEO — which needs to be in place first?",
          "What specifically will you change in your site's content after this station?",
        ],
      },
    },
  },
  {
    slug: "google-ai-overviews",
    title: {
      bg: "Google AI Overviews: Как да се появиш в AI резюметата",
      en: "Google AI Overviews: How to Appear in AI Summaries",
    },
    description: {
      bg: "Стратегии и тактики за видимост в Google AI Overview (SGE). Как да структурираш съдържанието си за AI.",
      en: "Strategies and tactics for visibility in Google AI Overview (SGE). How to structure your content for AI.",
    },
    category: "ai-seo",
    difficulty: "intermediate",
    readTime: 18,
    publishedAt: "2025-02-15",
    tags: ["Google AI", "AI Overview", "SGE", "Featured Snippets"],
    featured: true,
  },
  {
    slug: "structured-data",
    title: {
      bg: "Структурирани Данни: Пълен курс по Schema.org и JSON-LD",
      en: "Structured Data: Complete Course on Schema.org and JSON-LD",
    },
    description: {
      bg: "Имплементация на Schema.org маркап с JSON-LD за Rich Results, AI разбиране и по-добра видимост.",
      en: "Implementing Schema.org markup with JSON-LD for Rich Results, AI understanding, and better visibility.",
    },
    category: "structured-data",
    difficulty: "intermediate",
    readTime: 25,
    publishedAt: "2025-03-01",
    tags: ["Schema.org", "JSON-LD", "Rich Results", "Structured Data"],
    featured: true,
  },
  {
    slug: "ai-commerce",
    title: {
      bg: "AI Commerce: Оптимизация за AI пазаруване",
      en: "AI Commerce: Optimization for AI Shopping",
    },
    description: {
      bg: "Как да оптимизираш продуктите си за AI-базирано пазаруване, Google Shopping AI и Agentic Commerce.",
      en: "How to optimize your products for AI-based shopping, Google Shopping AI, and Agentic Commerce.",
    },
    category: "ai-commerce",
    difficulty: "advanced",
    readTime: 22,
    publishedAt: "2025-03-15",
    tags: ["AI Commerce", "Google Shopping", "Merchant Center", "Agentic Commerce"],
  },
  {
    slug: "llm-optimization",
    title: {
      bg: "LLM Оптимизация: Как да бъдеш цитиран от AI",
      en: "LLM Optimization: How to Be Cited by AI",
    },
    description: {
      bg: "Стратегии за оптимизиране на съдържанието за ChatGPT, Claude, Gemini и Perplexity. Как AI системите избират източници.",
      en: "Strategies for optimizing content for ChatGPT, Claude, Gemini, and Perplexity. How AI systems choose sources.",
    },
    category: "llm-optimization",
    difficulty: "advanced",
    readTime: 20,
    publishedAt: "2025-04-01",
    tags: ["LLM", "ChatGPT", "Claude", "Gemini", "Citations"],
    new: true,
    learningMeta: {
      stationNumber: 2,
      nextSlug: "geo-optimization",
      mentalModel: {
        bg: "Редакторът, който не спи — как AI 'чете' и решава кого да цитира",
        en: "The editor who never sleeps — how AI 'reads' and decides who to cite",
      },
      keyAnalogy: {
        bg: "Представи си, че AI системата е журналист, пишещ статия по твоята тема. Той прочита 200 сайта и трябва да цитира 3–5 от тях. Кои избира? Тези с най-ясните факти, най-добрата структура и най-убедителния авторитет по темата — не тези с най-много повторения на ключовата дума.",
        en: "Imagine the AI system is a journalist writing an article on your topic. It reads 200 sites and needs to cite 3–5 of them. Which does it choose? Those with the clearest facts, best structure, and most convincing authority on the topic — not those with the most keyword repetitions.",
      },
      understandingCheck: {
        bg: [
          "Назови три критерия, по които AI системите избират кого да цитират.",
          "Защо 'ключовата дума' не е достатъчна — какво я замества в AI SEO?",
          "Как структурата на съдържанието влияе върху вероятността да бъдеш цитиран?",
          "Провери: ChatGPT отговаря ли на въпрос от твоя бранш — и кого цитира?",
        ],
        en: [
          "Name three criteria by which AI systems choose who to cite.",
          "Why is 'the keyword' not enough — what replaces it in AI SEO?",
          "How does content structure affect the likelihood of being cited?",
          "Check: Does ChatGPT answer a question from your industry — and who does it cite?",
        ],
      },
    },
  },
  {
    slug: "entity-seo",
    title: {
      bg: "Entity SEO: Семантичен Авторитет и Knowledge Graph",
      en: "Entity SEO: Semantic Authority and Knowledge Graph",
    },
    description: {
      bg: "Изграждане на entity-based SEO стратегия с Knowledge Graph, семантични обекти и тематичен авторитет.",
      en: "Building an entity-based SEO strategy with Knowledge Graph, semantic entities, and topical authority.",
    },
    category: "entity-seo",
    difficulty: "advanced",
    readTime: 23,
    publishedAt: "2025-04-15",
    tags: ["Entity SEO", "Knowledge Graph", "Semantic SEO", "Topical Authority"],
    learningMeta: {
      stationNumber: 4,
      nextSlug: "ai-visibility-strategy",
      mentalModel: {
        bg: "Дигитален паспорт — как AI 'разпознава' и класифицира твоя бизнес",
        en: "Digital passport — how AI 'recognizes' and classifies your business",
      },
      keyAnalogy: {
        bg: "Представи си голямо събитие. Има двама консултанта. Единият е безименен гост — никой не знае кой е, откъде е, какво прави. Другият е спикер с бейдж, биография, референции и препоръки от познати хора. Кой получава запитвания? Entity SEO е изграждането на 'бейджа' — Name, Address, Phone, описание, специализация, препоръки — така че AI системата да те разпознае и класифицира правилно.",
        en: "Imagine a large event. There are two consultants. One is an unnamed guest — nobody knows who he is, where he's from, what he does. The other is a speaker with a badge, bio, references, and recommendations from known people. Who gets inquiries? Entity SEO is building the 'badge' — Name, Address, Phone, description, specialization, references — so AI systems recognize and classify you correctly.",
      },
      understandingCheck: {
        bg: [
          "Какво е 'entity' в контекста на SEO — обясни с твои думи?",
          "Какви са основните сигнали, от които AI разбира кой е твоят бизнес?",
          "Провери: Как Google Knowledge Panel описва твоя бизнес — правилно ли е?",
          "Какъв е следващият конкретен стъпка за подобряване на Entity сигналите на твоя сайт?",
        ],
        en: [
          "What is an 'entity' in the context of SEO — explain in your own words?",
          "What are the key signals from which AI understands who your business is?",
          "Check: How does Google Knowledge Panel describe your business — is it correct?",
          "What is the next concrete step for improving the Entity signals of your site?",
        ],
      },
    },
  },
  {
    slug: "technical-seo-audit",
    title: {
      bg: "Технически SEO Одит: Пълен Framework 2025",
      en: "Technical SEO Audit: Complete Framework 2025",
    },
    description: {
      bg: "Как да направиш цялостен технически SEO одит: crawling, indexing, Core Web Vitals, структура и AI-оптимизация.",
      en: "How to conduct a comprehensive technical SEO audit: crawling, indexing, Core Web Vitals, structure, and AI optimization.",
    },
    category: "technical-seo",
    difficulty: "intermediate",
    readTime: 30,
    publishedAt: "2025-05-01",
    tags: ["Technical SEO", "Audit", "Core Web Vitals", "Crawling"],
  },
  {
    slug: "ecommerce-seo",
    title: {
      bg: "Ecommerce SEO 2025: Пълна стратегия за онлайн магазини",
      en: "Ecommerce SEO 2025: Complete Strategy for Online Stores",
    },
    description: {
      bg: "Пълна SEO стратегия за ecommerce: продуктови страници, категории, схема маркап и AI пазаруване.",
      en: "Complete SEO strategy for ecommerce: product pages, categories, schema markup, and AI shopping.",
    },
    category: "ecommerce-seo",
    difficulty: "intermediate",
    readTime: 28,
    publishedAt: "2025-05-15",
    tags: ["Ecommerce SEO", "Product Pages", "Category SEO", "Shopping"],
  },
  {
    slug: "ai-agents-seo",
    title: {
      bg: "AI Агенти за SEO: Автоматизирани SEO работни потоци",
      en: "AI Agents for SEO: Automated SEO Workflows",
    },
    description: {
      bg: "Изграждане на AI агенти за SEO задачи: одит, анализ на конкуренти, съдържание и техническа оптимизация.",
      en: "Building AI agents for SEO tasks: audit, competitor analysis, content, and technical optimization.",
    },
    category: "ai-agents",
    difficulty: "expert",
    readTime: 35,
    publishedAt: "2025-06-01",
    tags: ["AI Agents", "Automation", "n8n", "Make.com", "SEO Automation"],
    new: true,
  },
  {
    slug: "core-web-vitals",
    title: {
      bg: "Core Web Vitals 2025: Оптимизация за LCP, INP, CLS",
      en: "Core Web Vitals 2025: Optimization for LCP, INP, CLS",
    },
    description: {
      bg: "Пълно ръководство за подобряване на Core Web Vitals: LCP под 2.5s, INP под 200ms, CLS под 0.1.",
      en: "Complete guide to improving Core Web Vitals: LCP under 2.5s, INP under 200ms, CLS under 0.1.",
    },
    category: "technical-seo",
    difficulty: "intermediate",
    readTime: 22,
    publishedAt: "2025-05-20",
    tags: ["Core Web Vitals", "LCP", "INP", "CLS", "Page Speed"],
  },
  {
    slug: "ai-visibility-strategy",
    title: {
      bg: "AI Visibility Strategy: Видимост в AI системите",
      en: "AI Visibility Strategy: Visibility in AI Systems",
    },
    description: {
      bg: "Как да изградиш стратегия за видимост в AI системи: от Google AI до ChatGPT, Gemini и бъдещите AI търсачки.",
      en: "How to build a visibility strategy in AI systems: from Google AI to ChatGPT, Gemini, and future AI search engines.",
    },
    category: "ai-visibility",
    difficulty: "advanced",
    readTime: 25,
    publishedAt: "2025-06-01",
    tags: ["AI Visibility", "AI Strategy", "GEO", "LLM Optimization"],
    new: true,
    featured: true,
    learningMeta: {
      stationNumber: 5,
      mentalModel: {
        bg: "Измеримо присъствие в AI — от невидим към цитиран",
        en: "Measurable AI presence — from invisible to cited",
      },
      keyAnalogy: {
        bg: "Разликата между да имаш GPS координати и да си маркиран на всяка карта. GPS координатите съществуват — но ако не си маркиран на картите, навигациите не те показват. AI Visibility стратегията е да се уверим, че всички 'карти' — Google, ChatGPT, Gemini, Perplexity — те познават, класифицират правилно и те препоръчват.",
        en: "The difference between having GPS coordinates and being marked on every map. GPS coordinates exist — but if you're not marked on the maps, navigations don't show you. An AI Visibility strategy is ensuring all 'maps' — Google, ChatGPT, Gemini, Perplexity — know you, classify you correctly, and recommend you.",
      },
      understandingCheck: {
        bg: [
          "Как измерваш AI видимостта на твоя сайт — какви конкретни метрики следиш?",
          "Кои от петте станции в маршрута са най-слабото звено за твоя бизнес?",
          "Каква е разликата между 'да се класираш в Google' и 'да си видим в AI'?",
          "Какво е следващото конкретно действие, което ще предприемеш тази седмица?",
        ],
        en: [
          "How do you measure the AI visibility of your site — what specific metrics do you track?",
          "Which of the five stations in the path is the weakest link for your business?",
          "What is the difference between 'ranking in Google' and 'being visible in AI'?",
          "What is the next concrete action you will take this week?",
        ],
      },
    },
  },
  {
    slug: "client-acquisition-ai-seo",
    title: {
      bg: "Как да продадеш AI SEO на клиенти: Пълен наръчник за консултанти",
      en: "How to Sell AI SEO to Clients: Complete Consultant Playbook",
    },
    description: {
      bg: "Как да намираш, убеждаваш и затваряш клиенти за AI SEO услуги. Скриптове, ROI калкулации, презентационни рамки и как да покажеш резултати бързо.",
      en: "How to find, persuade, and close clients for AI SEO services. Scripts, ROI calculations, presentation frameworks, and how to show results fast.",
    },
    category: "client-acquisition",
    difficulty: "intermediate",
    readTime: 40,
    publishedAt: "2025-06-01",
    tags: ["Client Acquisition", "Sales", "ROI", "Consulting", "AI SEO Business"],
    new: true,
    featured: true,
  },
];

export const categoryLabels = {
  bg: {
    "ai-seo": "AI SEO",
    "geo": "GEO",
    "technical-seo": "Технически SEO",
    "structured-data": "Структурирани Данни",
    "ai-commerce": "AI Commerce",
    "llm-optimization": "LLM Оптимизация",
    "entity-seo": "Entity SEO",
    "ai-visibility": "AI Видимост",
    "ecommerce-seo": "Ecommerce SEO",
    "ai-agents": "AI Агенти",
    "client-acquisition": "Клиентска Работа",
  },
  en: {
    "ai-seo": "AI SEO",
    "geo": "GEO",
    "technical-seo": "Technical SEO",
    "structured-data": "Structured Data",
    "ai-commerce": "AI Commerce",
    "llm-optimization": "LLM Optimization",
    "entity-seo": "Entity SEO",
    "ai-visibility": "AI Visibility",
    "ecommerce-seo": "Ecommerce SEO",
    "ai-agents": "AI Agents",
    "client-acquisition": "Client Acquisition",
  },
};

export const difficultyLabels = {
  bg: {
    beginner: "Начинаещ",
    intermediate: "Среден",
    advanced: "Напреднал",
    expert: "Експерт",
  },
  en: {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    expert: "Expert",
  },
};

export const difficultyColors = {
  beginner: "text-teal-500 bg-teal-500/10",
  intermediate: "text-indigo-500 bg-indigo-500/10",
  advanced: "text-amber-500 bg-amber-500/10",
  expert: "text-rose-500 bg-rose-500/10",
};
