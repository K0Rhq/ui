<script lang="ts">
    import IconCheck from "phosphor-icons-svelte/IconCheckRegular.svelte";
    import { Select as SelectPrimitive } from "bits-ui";
    import { cn, type WithoutChild } from "~/lib/utils.js";

    let {
        ref = $bindable(null),
        class: className,
        value,
        label,
        children: childrenProp,
        ...restProps
    }: WithoutChild<SelectPrimitive.ItemProps> = $props();
</script>

<SelectPrimitive.Item
    bind:ref
    {value}
    data-slot="select-item"
    class={cn(
        "data-[highlighted]:bg-text/5 px-2 py-0.5 data-[highlighted]:cursor-pointer data-[selected]:bg-text/[7%] rounded-8 text-text/80 outline-hidden relative flex w-full cursor-default select-none duration-150",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-40 data-[disabled]:cursor-not-allowed",
        "focus:outline-none focus-visible:outline-",
        "*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
    )}
    {...restProps}
>
    {#snippet children({ selected, highlighted })}
        <span
            class="absolute right-2 flex size-3.5 self-center items-center justify-center"
        >
            {#if selected}
                <IconCheck class="size-4" />
            {/if}
        </span>
        <span class="body">
            {#if childrenProp}
                {@render childrenProp({ selected, highlighted })}
            {:else}
                {label || value}
            {/if}</span
        >
    {/snippet}
</SelectPrimitive.Item>
