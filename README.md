![Banner](/.github/assets/github.png)

# KOR UI

KOR UI is a smart, modern, not-boring new design system and UI kit, built for Svelte 5.

### Design language

This design language builds on the traditional semantic and flat color token design systems, by adding glass and skeuomorphism effects on components and materials via shadows and color blend modes.

> [!NOTE]
> For older systems, rendering the shadows might be resource intensive, or maybe the user prefers a flatter interface. So there is a Tailwind variant `flat` that you would apply just like dark mode to change the style.

#### Font styles

Our main font style will stay as `sans`, which uses Outfit. But we also have a `serif` font style using Wittgenstein, primarily for reading focused apps.

### Components & Development

This component package is build with [`shadcn/svelte`](https://www.shadcn-svelte.com), which itself is mainly built on [Bits UI](https://bits-ui.com) and other various component primitives. Then the components are packaged up again and distributed via npm.

You would think packaging it again would defeat the point of shadcn but we're really just using shadcn/svelte as a starter template for the components, we would like to own the components of our design system, thanks.

#### Developing

To develop components, start the Storybook server: `pnpm storybook`.

To preview the various variants and styles we have, we have switchers in the toolbar for you: `Dark/Light`, `Sans/Serif`, `Rich/Flat`.
