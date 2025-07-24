import "./preview.css";
import "@fontsource/outfit/300.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/900.css";
import "@fontsource/chivo-mono";
import "@fontsource/wittgenstein/400.css";
import "@fontsource/wittgenstein/600.css";
import "@fontsource/wittgenstein/700.css";
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
    font: {
      description: "Global font family for components",
      defaultValue: "sans",
      toolbar: {
        title: "Font",
        icon: "typography",
        items: [
          { value: "sans", title: "Sans Serif" },
          { value: "serif", title: "Serif" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    // Center content decorator
    () => CenterDecorator,
    // Theme and font decorator
    (story, context) => {
      const theme = context.globals.theme || "light";
      const font = context.globals.font || "sans";

      // Apply theme and font to the document body and Storybook containers
      if (typeof document !== "undefined") {
        const applyStyles = () => {
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

          // Apply theme classes
          if (theme === "dark") {
            for (const el of elements) {
              el?.classList.add("dark");
            }
          } else {
            for (const el of elements) {
              el?.classList.remove("dark");
            }
          }

          // Apply font classes
          for (const el of elements) {
            el?.classList.remove("font-sans", "font-serif");
            el?.classList.add(`font-${font}`);
          }
        };

        // Apply immediately
        applyStyles();

        // Apply again after a short delay to catch dynamically created elements
        setTimeout(applyStyles, 50);
      }

      return story();
    },
  ],
};

export default preview;
