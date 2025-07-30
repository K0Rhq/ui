<script lang="ts">
    import { Checkbox as CheckboxPrimitive } from "bits-ui";
    import IconCheck from "phosphor-icons-svelte/IconCheckRegular.svelte";
    import IconMinus from "phosphor-icons-svelte/IconMinusRegular.svelte";
    import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";

    let {
        ref = $bindable(null),
        checked = $bindable(false),
        indeterminate = $bindable(false),
        class: className,
        ...restProps
    }: WithoutChildrenOrChild<CheckboxPrimitive.RootProps> = $props();
</script>

<CheckboxPrimitive.Root
    bind:ref
    data-slot="checkbox"
    class={cn(
        "border-stroke bg-surface-primary shadow-glass text-text-60 data-[state=checked]:text-text data-[state=indeterminate]:text-text peer flex size-7 shrink-0 items-center justify-center rounded-8 border outline-none",
        "transition-[border-color] duration-200 ease-out",
        "focus-visible:border-text/25 focus-visible:ring-text/15 focus-visible:ring-[2px] ring-offset-background outline-none",
        "aria-invalid:ring-text-danger/20 dark:aria-invalid:ring-text-danger/40 aria-invalid:border-text-danger",
        "disabled:pointer-events-none aria-disabled:cursor-not-allowed disabled:opacity-50 disabled:cursor-not-allowed aria-disabled:pointer-events-none aria-disabled:opacity-50",
        className,
    )}
    bind:checked
    bind:indeterminate
    {...restProps}
>
    {#snippet children({ checked, indeterminate })}
        <div
            data-slot="checkbox-indicator"
            class="text-current transition-none"
        >
            {#if indeterminate}
                <IconMinus
                    class="size-5 motion-preset-fade-md motion-duration-200"
                />
            {:else if checked}
                <IconCheck
                    class="size-5 motion-preset-fade-md motion-duration-200"
                />
            {/if}
        </div>
    {/snippet}
</CheckboxPrimitive.Root>
