<script lang="ts">
    import { Select as SelectPrimitive } from "bits-ui";
    import IconCaretUpDown from "phosphor-icons-svelte/IconCaretUpDownRegular.svelte";
    import { cn, type WithoutChild } from "~/lib/utils.js";
    import { cva } from "class-variance-authority";

    let {
        ref = $bindable(null),
        class: className,
        children,
        size = "default",
        ...restProps
    }: WithoutChild<SelectPrimitive.TriggerProps> & {
        size?: "sm" | "default";
    } = $props();

    const triggerVariants = cva(
        [
            "bg-surface-primary border border-stroke text-text flex items-center gap-2 justify-between shadow-glass",
            "hover:brightness-110 active:brightness-95 duration-200 transform-[filter]",
            "focus-visible:border-text/25 focus-visible:ring-text/15 focus-visible:ring-[2px] ring-offset-background outline-none",
            "disabled:pointer-events-none aria-disabled:cursor-not-allowed disabled:opacity-50 disabled:cursor-not-allowed aria-disabled:pointer-events-none aria-disabled:opacity-50",
            "aria-invalid:ring-text-danger/20 dark:aria-invalid:ring-text-danger/40 aria-invalid:border-text-danger",
        ],
        {
            variants: {
                size: {
                    default: "h-10 px-3 rounded-2xl",
                    sm: "h-7 px-2 rounded-8",
                },
            },
            defaultVariants: {
                size: "default",
            },
        },
    );
</script>

<SelectPrimitive.Trigger
    bind:ref
    data-slot="select-trigger"
    data-size={size}
    class={cn(triggerVariants({ size }), className)}
    {...restProps}
>
    <span
        class="body truncate flex-1 serif:pt-3 min-w-0 leading-none py-2 text-left"
    >
        {@render children?.()}
    </span>
    <IconCaretUpDown class="size-4 min-w-4 min-h-4" />
</SelectPrimitive.Trigger>
