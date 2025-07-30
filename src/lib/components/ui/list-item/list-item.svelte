<script lang="ts" module>
    import { cva, type VariantProps } from "class-variance-authority";

    export const listItemVariants = cva(
        [
            "text-text flex items-center body pt-1 serif:pt-2",
            "hover:brightness-110 active:brightness-95 duration-200 transform-[filter]",
            "[&_svg]:pointer-events-none [&_svg]:shrink-0 serif:[&_svg]:mb-1",
        ],
        {
            variants: {
                size: {
                    default:
                        "h-10 px-3 rounded-12 gap-1.5 [&_svg:not([class*='size-'])]:size-5",
                    sm: "h-7 px-2 rounded-8 gap-0.75 [&_svg:not([class*='size-'])]:size-4",
                },
            },
            defaultVariants: {
                size: "default",
            },
        },
    );
    export type ListItemVariant = VariantProps<typeof listItemVariants>["size"];
</script>

<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";

    type ElementMap = {
        li: HTMLLIElement;
        div: HTMLDivElement;
        button: HTMLButtonElement;
        span: HTMLSpanElement;
        a: HTMLAnchorElement;
    };

    type ListItemProps = WithElementRef<HTMLAttributes<HTMLElement>> & {
        as?: keyof ElementMap;
        selected?: boolean;
        size?: ListItemVariant;
    };

    let {
        ref = $bindable(null),
        class: className,
        as = "li" as keyof ElementMap,
        selected = false,
        size = "default",
        children,
        ...restProps
    }: ListItemProps = $props();
</script>

<svelte:element
    this={as}
    bind:this={ref}
    data-slot="list-item"
    class={cn(
        listItemVariants({ size }),
        { "bg-surface-primary border border-stroke shadow-glass": selected },
        className,
    )}
    {...restProps}
>
    {@render children?.()}
</svelte:element>
