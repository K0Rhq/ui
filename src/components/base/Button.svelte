<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";
    import { cva, type VariantProps } from "class-variance-authority";

    const button = cva(
        "border border-stroke-2 rounded-full px-16 py-8 hover:scale-105 duration-150 ease-out active:scale-95",
        {
            variants: {
                variant: {
                    primary: "bg-accent text-text-reversed-solid",
                    secondary: "bg-fg-2 text-text-solid",
                    success: "bg-green text-text-reversed-solid",
                    warning: "bg-yellow text-text-reversed-solid",
                    danger: "bg-red text-text-reversed-solid",
                },
            },
        },
    );

    interface $$Props
        extends HTMLButtonAttributes,
            VariantProps<typeof button> {}

    // default variants
    export const variant: $$Props["variant"] = "primary";

    console.log("PROPS", variant);
</script>

<button {...$$props} class={button({ variant })}>
    <slot />
</button>
