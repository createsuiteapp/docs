import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.createsuite.app",
  integrations: [
    starlight({
      title: "CreateSuite Docs",
      description: "Documentação e ajuda da plataforma CreateSuite",
      defaultLocale: "root",
      locales: {
        root: { label: "Português", lang: "pt-BR" },
      },
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: false,
      },
      social: {
        github: "https://github.com/createsuiteapp",
      },
      sidebar: [
        {
          label: "Primeiros Passos",
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "Landing Pages",
          autogenerate: { directory: "landing-pages" },
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
