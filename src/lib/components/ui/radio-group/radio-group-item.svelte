<script lang="ts">
    import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
    import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";

    let {
        ref = $bindable(null),
        class: className,
        ...restProps
    }: WithoutChildrenOrChild<RadioGroupPrimitive.ItemProps> = $props();
</script>

<RadioGroupPrimitive.Item
    bind:ref
    data-slot="radio-group-item"
    class={cn(
        "border-stroke bg-surface-primary shadow-glass aspect-square size-7 shrink-0 rounded-full border outline-none",
        "transition-[border-color] duration-200 ease-out",
        "focus-visible:border-text/25 focus-visible:ring-text/15 focus-visible:ring-[2px] ring-offset-background outline-none",
        "aria-invalid:ring-text-danger/20 dark:aria-invalid:ring-text-danger/40 aria-invalid:border-text-danger group",
        "disabled:pointer-events-none aria-disabled:cursor-not-allowed disabled:opacity-50 disabled:cursor-not-allowed aria-disabled:pointer-events-none aria-disabled:opacity-50",
        className,
    )}
    {...restProps}
>
    {#snippet children({ checked })}
        <div
            data-slot="radio-group-indicator"
            class="relative flex items-center justify-center"
        >
            {#if checked}
                <div
                    class="rounded-full motion-preset-fade-sm motion-duration-200 absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2"
                ></div>
            {/if}
        </div>
    {/snippet}
</RadioGroupPrimitive.Item>
