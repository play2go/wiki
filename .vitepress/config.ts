import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";
import { generateSidebar } from "vitepress-sidebar";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

function generateSidebarEntry(path: string, title: string) {
  return {
    documentRootPath: "src",
    scanStartPath: path,
    resolvePath: `/${path}/`,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    collapsed: true,
    rootGroupText: title,
    rootGroupLink: "/",
    sortMenusByFrontmatterOrder: true,
  };
}

const sidebar = generateSidebar(
  [
    { path: "host", title: "Хостинг" },
    { path: "minecraft", title: "Minecraft" },
  ].map((entry) => generateSidebarEntry(entry.path, entry.title))
);

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ["vitepress"],
    },
    plugins: [UnoCSS()],
  },
  markdown: {
    config(md) {
      // @ts-ignore
      md.use(tabsMarkdownPlugin);
    },
  },

  head: [["link", { rel: "icon", href: "/assets/p2g-wiki-logo.svg" }]],

  lang: "ru-RU",
  title: "База знаний play2go",
  description:
    "Вики с большим количеством полезной информации для пользователей Play2GO.cloud",

  srcDir: "src",
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: "https://wiki.play2go.cloud",
  },

  themeConfig: {
    footer: {
      message:
        'Выпущено под <a href="https://github.com/play2go/wiki/blob/main/LICENSE.md">лицензией CC BY-NC-SA 4.0</a>.',
      copyright:
        "Copyright © 2023 - " +
        new Date().getFullYear() +
        '. <a href="https://play2go.cloud">PLAY2GO LTD</a>',
    },

    notFound: {
      code: "Ошибка 404",
      title: "Страница не найдена",
      quote: "Возможно, она была удалена, либо же переименована без перенаправления. Может быть, вы отправите исправление на GitHub? (а кто это сделает, если не вы? ;) )",
      linkText: "Вернуться на главную",
    },

    sidebarMenuLabel: "Меню",
    darkModeSwitchLabel: "Режим",
    returnToTopLabel: "Наверх",
    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница",
    },
    outline: {
      label: "Содержание",
      level: [2, 3],
    },

    editLink: {
      pattern: "https://github.com/play2go/wiki/edit/main/src/:path",
      text: "Отредактировать на GitHub и отправить на проверку",
    },

    lastUpdated: {
      text: "Обновлено",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "medium",
      },
    },

    logo: {
      dark: "/assets/p2g-wiki-logo.svg",
      light: "/assets/light/p2g-wiki-logo.svg",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Главная", link: "/" },
      { text: "Хостинг", link: "/host/", activeMatch: "host/*" },
      { text: "Minecraft", link: "/minecraft/", activeMatch: "minecraft/*" },
    ],

    sidebar,

    socialLinks: [
      { icon: "discord", link: "https://discord.gg/play2go" },
      { icon: "github", link: "https://github.com/play2go" },
    ],
  },
});
