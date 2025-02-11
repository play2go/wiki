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
    { path: "vds", title: "VDS/Dedicated" },
    { path: "vpn", title: "VPN" }
  ].map((entry) => generateSidebarEntry(entry.path, entry.title))
);

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ["vitepress"],
    },
    plugins: [UnoCSS()],

    // SCSS deprecation warning fix
    css: { preprocessorOptions: { scss: { api: 'modern-compiler' } } }
  },
  markdown: {
    config: md => {
      // @ts-ignore
      md.use(tabsMarkdownPlugin);

      // ![]() -> AImg
      md.renderer.rules.image = (tokens, idx) => {
        const token = tokens[idx];
        const src = token.attrGet('src') || '';
        const alt = token.content;
        const title = token.attrGet('title') || '';

        // Используем наш компонент AImg
        return `<AImg src="${src}" alt="${alt}" />`;
      };
    },
  },

  head: [["link", { rel: "icon", href: "/assets/p2g-wiki-logo.svg" }]],

  lang: "ru-RU",
  title: "База знаний Play2GO",
  description:
    "Вики с большим количеством полезной информации для пользователей play2go.cloud",

  srcDir: "src",
  cleanUrls: true,
  lastUpdated: false,
  appearance: "force-dark",
  sitemap: {
    hostname: "https://wiki.play2go.cloud",
  },

  ignoreDeadLinks: [
    /^https?:\/\/localhost/,
    /^https?:\/\/ваш-домен/
  ],

  themeConfig: {
    footer: {
      message:
        'Выпущено под <a href="https://github.com/play2go/wiki/blob/main/LICENSE.md">лицензией CC BY-NC-SA 4.0</a>.',
      copyright:
        "&copy; 2023 - " +
        new Date().getFullYear() +
        '. <a href="https://play2go.cloud">PLAY2GO LLC</a>',
    },

    notFound: {
      code: "Ошибка 404",
      title: "Страница не найдена",
      quote: "Возможно, она была удалена, либо же переименована без перенаправления. Если вы думаете, что здесь не должно быть этой ошибки, сообщите о ней в Discord сервере/отправьте исправление на GitHub.",
      linkText: "Вернуться на главную",
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Поиск",
            buttonAriaLabel: "Поиск страницы",
          },
          modal: {
            noResultsText: "Результатов не найдено по запросу",
            resetButtonTitle: "Очистить",
            footer: {
              selectText: "- выбрать",
              navigateText: "- переключение между результатами",
              closeText: "- закрыть",
            },
          },
        },
      },
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
      text: "Править",
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
      { text: "VDS/Dedicated", link: "/vds/", activeMatch: "vds/*" },
      { text: "VPN", link: "/vpn/", activeMatch: "vpn/*" },
    ],

    sidebar,

    socialLinks: [
      { icon: "discord", link: "https://discord.gg/play2go" },
      { icon: "github", link: "https://github.com/play2go/wiki" },
    ],
  },
});
