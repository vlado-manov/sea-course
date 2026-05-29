import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["bg", "en"],
  defaultLocale: "bg",
  pathnames: {
    "/": "/",
    "/tutorials": {
      bg: "/urotsi",
      en: "/tutorials",
    },
    "/tutorials/[slug]": {
      bg: "/urotsi/[slug]",
      en: "/tutorials/[slug]",
    },
    "/tools": {
      bg: "/instrumenti",
      en: "/tools",
    },
    "/tools/[slug]": {
      bg: "/instrumenti/[slug]",
      en: "/tools/[slug]",
    },
    "/glossary": {
      bg: "/rechnik",
      en: "/glossary",
    },
    "/guides": {
      bg: "/rakovodstva",
      en: "/guides",
    },
    "/guides/[slug]": {
      bg: "/rakovodstva/[slug]",
      en: "/guides/[slug]",
    },
    "/resources": {
      bg: "/resursi",
      en: "/resources",
    },
    "/prompts": {
      bg: "/prompti",
      en: "/prompts",
    },
    "/case-studies": {
      bg: "/kazusi",
      en: "/case-studies",
    },
    "/templates": {
      bg: "/shabloni",
      en: "/templates",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
