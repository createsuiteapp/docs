import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.createsuite.app",
  integrations: [
    starlight({
      title: "CreateSuite Docs",
      description: "Documentação e ajuda da plataforma CreateSuite",
      defaultLocale: "pt-BR",
      locales: {
        root: { label: "Português", lang: "pt-BR" },
      },
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: false,
      },
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/createsuiteapp" },
      ],
      sidebar: [
        {
          label: "Primeiros Passos",
          items: [
            { label: "Introdução", slug: "intro" },
            { label: "Criando sua conta", slug: "getting-started/account" },
          ],
        },
        {
          label: "Landing Pages",
          items: [
            { label: "Visão geral", slug: "landing-pages/overview" },
            { label: "Editor", slug: "landing-pages/editor" },
            { label: "Publicando", slug: "landing-pages/publishing" },
          ],
        },
        {
          label: "FAQ",
          autogenerate: { directory: "faq" },
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
