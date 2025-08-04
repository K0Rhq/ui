![Banner](/.github/assets/github.png)

# KOR UI

KOR UI is a smart, modern, not-boring new design system and UI kit, built for Svelte 5.

## Installation

Run `npm install @korhq/ui`.

Add `@import "@korhq/ui/tailwind.css` to your main Tailwind config file.

## Design language

This design language builds on the traditional semantic and flat color token design systems, by adding glass and skeuomorphism effects on components and materials via shadows and color blend modes.

> [!NOTE]
> For older systems, rendering the shadows might be resource intensive, or maybe the user prefers a flatter interface. So there is a Tailwind variant `flat` that you would apply just like dark mode to change the style.

Figma file: https://www.figma.com/community/file/1532866693398685159/kor-ui

### Font styles

Our main font style will stay as `sans`, which uses Outfit. But we also have a `serif` font style using Wittgenstein, primarily for reading focused apps.

## Components & Development

This component package is build with [`shadcn/svelte`](https://www.shadcn-svelte.com), which itself is mainly built on [Bits UI](https://bits-ui.com) and other various component primitives. Then the components are packaged up again and distributed via npm.

You would think packaging it again would defeat the point of shadcn but we're really just using shadcn/svelte as a starter template for the components, we would like to own the components of our design system, thanks.

### Developing

To develop components, start the Storybook server: `pnpm storybook`.

To preview the various variants and styles we have, we have switchers in the toolbar for you: `Dark/Light`, `Sans/Serif`, `Rich/Flat`.

### Building & publishing

To run a test build, run:

```bash
pnpm build:ui
```

This uses `svelte-package` to compile components and types into `dist/`, and runs a script to update the `package.json` `exports` map.

To test the package locally:

```bash
# In this repo package (korui)
pnpm link --global

# In your app
pnpm link --global @korhq/ui
```

To remove the link and go back to the npm version:

```bash
pnpm unlink --global @korhq/ui
pnpm install
```

To publish to npm, file a pull request into the `main` branch, and we'll review it, once merged into main it will publish.

## License & Contributing

Contributions and fixes are welcome! If you're adding a new component, we can make the UI (fix styles, etc) during the PR review. Check with the [Figma file](https://www.figma.com/community/file/1532866693398685159/kor-ui) to see if the UI is already designed.

Licensed `Apache-2.0`
