import "./preview.css";
import type { Preview } from "@storybook/svelte-vite";
import CenterDecorator from "./CenterDecorator.svelte";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true, // Disable default backgrounds since we're using dark mode
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", icon: "circlehollow", title: "Light" },
          { value: "dark", icon: "circle", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    // Center content decorator
    () => CenterDecorator,
    // Dark mode decorator
    (story, context) => {
      const theme = context.globals.theme || "light";

      // Apply theme to the document body and Storybook containers
      if (typeof document !== "undefined") {
        const applyTheme = () => {
          const body = document.body;
          const html = document.documentElement;
          const storybookRoot = document.getElementById("storybook-root");
          const storybookPreview = document.querySelector(".sb-story");
          const mainContainer = document.querySelector(".sb-show-main");
          const paddedContainer = document.querySelector(".sb-main-padded");
          const docsWrapper = document.querySelector(".sbdocs-wrapper");

          const elements = [
            body,
            html,
            storybookRoot,
            storybookPreview,
            mainContainer,
            paddedContainer,
            docsWrapper,
          ].filter(Boolean);

          for (const el of elements) {
            el?.classList.add("h-full");
          }
          if (theme === "dark") {
            for (const el of elements) {
              el?.classList.add("dark");
            }
          } else {
            for (const el of elements) {
              el?.classList.remove("dark");
            }
          }
        };

        // Apply immediately
        applyTheme();

        // Apply again after a short delay to catch dynamically created elements
        setTimeout(applyTheme, 50);
      }

      return story();
    },
  ],
};

export default preview;
