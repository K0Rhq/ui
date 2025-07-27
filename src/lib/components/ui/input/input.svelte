<script lang="ts">
    import type {
        HTMLInputAttributes,
        HTMLInputTypeAttribute,
    } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";
    import { tv } from "tailwind-variants";

    type InputType = Exclude<HTMLInputTypeAttribute, "file">;

    type Props = WithElementRef<
        Omit<HTMLInputAttributes, "type"> & {
            size?: "default" | "sm";
            type?: "file" | InputType;
            files?: FileList;
        }
    >;

    let {
        ref = $bindable(null),
        value = $bindable(),
        type,
        files = $bindable(),
        size,
        class: className,
        ...restProps
    }: Props = $props();

    const inputSize: "default" | "sm" = size ?? "default";

    const inputVariants = tv({
        base: [
            "bg-surface-primary body placeholder:text-text/50 text-text shadow-glass border-stroke ring-offset-background flex w-full min-w-0 border outline-none transition-colors",
            "focus-visible:border-text/25 focus-visible:ring-text/15 focus-visible:ring-[2px]",
            "aria-invalid:ring-text-danger/20 dark:aria-invalid:ring-text-danger/40 aria-invalid:border-text-danger",
            "disabled:cursor-not-allowed disabled:opacity-50",
        ],
        variants: {
            size: {
                default: "h-10 px-3 rounded-12",
                sm: "h-7 px-2.5 rounded-8",
            },
        },
        defaultVariants: {
            size: "default",
        },
    });

    const padding = size === "sm" ? "pt-0.5" : "pt-2";
    const radii = size === "sm" ? "rounded-8" : "rounded-12";
</script>

{#if type === "file"}
    <input
        bind:this={ref}
        data-slot="input"
        class={cn(
            inputVariants({ size: inputSize }),
            padding,
            "cursor-pointer",
            className,
        )}
        type="file"
        bind:files
        bind:value
        {...restProps}
    />
{:else}
    <span class={cn("shadow-glass", radii)}>
        <input
            bind:this={ref}
            data-slot="input"
            class={cn(inputVariants({ size: inputSize }), className)}
            {type}
            bind:value
            {...restProps}
        />
    </span>
{/if}
