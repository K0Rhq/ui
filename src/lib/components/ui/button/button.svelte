<script lang="ts" module>
    import { cn, type WithElementRef } from "$lib/utils.js";
    import type {
        HTMLAnchorAttributes,
        HTMLButtonAttributes,
    } from "svelte/elements";
    import { type VariantProps, tv } from "tailwind-variants";

    export const buttonVariants = tv({
        base: [
            "inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full outline-none body transition-all serif:pt-1",
            "hover:brightness-110 active:brightness-95 active:pt-1 serif:active:pt-2 duration-200 transform-[filter]",
            "aria-invalid:ring-[2px] aria-invalid:ring-text-danger/30 aria-invalid:border aria-invalid:border-text-danger",
            "disabled:pointer-events-none aria-disabled:cursor-not-allowed disabled:opacity-35 disabled:cursor-not-allowed aria-disabled:pointer-events-none aria-disabled:opacity-35",
            "[&_svg:not([class*='size-'])]:size-4.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 serif:[&_svg]:mb-1",
        ],
        variants: {
            variant: {
                primary: [""],
                success: [""],
                warning: [""],
                danger: [""],
            },
            appearance: {
                solid: [""],
                soft: [""],
                ghost: [""],
            },
            size: {
                default: "h-10 px-3.5",
                sm: "h-7 px-2.5",
                icon: "size-10 [&_svg:not([class*='size-'])]:size-5.5",
                "icon-sm": "size-7 [&_svg:not([class*='size-'])]:size-4.5",
            },
        },
        compoundVariants: [
            // Solid
            {
                variant: "primary",
                appearance: "solid",
                class: "bg-surface-component text-text-invert shadow-skeuo focus-ring-solid",
            },
            {
                variant: "success",
                appearance: "solid",
                class: "bg-surface-component-success text-text-success-invert shadow-skeuo focus-ring-solid-success",
            },
            {
                variant: "warning",
                appearance: "solid",
                class: "bg-surface-component-warning text-text-warning-invert shadow-skeuo focus-ring-solid-warning",
            },
            {
                variant: "danger",
                appearance: "solid",
                class: "bg-surface-component-danger text-text-danger-invert shadow-skeuo focus-ring-solid-danger",
            },
            // Soft
            {
                variant: "primary",
                appearance: "soft",
                class: "bg-surface-primary text-text shadow-glass border border-stroke focus-visible:ring-[2px] focus-visible:ring-text/50",
            },
            {
                variant: "success",
                appearance: "soft",
                class: "bg-surface-primary-success text-text-success shadow-glass border border-stroke focus-visible:ring-[2px] focus-visible:ring-text-success/50",
            },
            {
                variant: "warning",
                appearance: "soft",
                class: "bg-surface-primary-warning text-text-warning shadow-glass border border-stroke focus-visible:ring-[2px] focus-visible:ring-text-warning/50",
            },
            {
                variant: "danger",
                appearance: "soft",
                class: "bg-surface-primary-danger text-text-danger shadow-glass border border-stroke focus-visible:ring-[2px] focus-visible:ring-text-danger/50",
            },
            // Ghost
            {
                variant: "primary",
                appearance: "ghost",
                class: "bg-transparent hover:bg-surface-primary text-text hover:shadow-glass focus-visible:ring-[2px] focus-visible:ring-text/25",
            },
            {
                variant: "success",
                appearance: "ghost",
                class: "bg-transparent hover:bg-surface-primary-success text-text-success hover:shadow-glass focus-visible:ring-[2px] focus-visible:ring-text-success/25",
            },
            {
                variant: "warning",
                appearance: "ghost",
                class: "bg-transparent hover:bg-surface-primary-warning text-text-warning hover:shadow-glass focus-visible:ring-[2px] focus-visible:ring-text-warning/25",
            },
            {
                variant: "danger",
                appearance: "ghost",
                class: "bg-transparent hover:bg-surface-primary-danger text-text-danger hover:shadow-glass focus-visible:ring-[2px] focus-visible:ring-text-danger/25",
            },
        ],
        defaultVariants: {
            variant: "primary",
            appearance: "solid",
            size: "default",
        },
    });

    export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
    export type ButtonSize = VariantProps<typeof buttonVariants>["size"];
    export type ButtonAppearance = VariantProps<
        typeof buttonVariants
    >["appearance"];

    export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
        WithElementRef<HTMLAnchorAttributes> & {
            variant?: ButtonVariant;
            size?: ButtonSize;
            appearance?: ButtonAppearance;
        };
</script>

<script lang="ts">
    let {
        class: className,
        variant = "primary",
        appearance = "solid",
        size = "default",
        ref = $bindable(null),
        href = undefined,
        type = "button",
        disabled,
        children,
        ...restProps
    }: ButtonProps = $props();
</script>

{#if href}
    <a
        bind:this={ref}
        data-slot="button"
        class={cn(buttonVariants({ variant, size, appearance }), className)}
        href={disabled ? undefined : href}
        aria-disabled={disabled}
        role={disabled ? "link" : undefined}
        tabindex={disabled ? -1 : undefined}
        {...restProps}
    >
        {@render children?.()}
    </a>
{:else}
    <button
        bind:this={ref}
        data-slot="button"
        class={cn(buttonVariants({ variant, size, appearance }), className)}
        {type}
        {disabled}
        {...restProps}
    >
        {@render children?.()}
    </button>
{/if}
