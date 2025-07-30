<script lang="ts">
    import { Slider as SliderPrimitive } from "bits-ui";
    import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";

    let {
        ref = $bindable(null),
        value = $bindable(),
        orientation = "horizontal",
        class: className,
        ...restProps
    }: WithoutChildrenOrChild<SliderPrimitive.RootProps> = $props();
</script>

<!--
Discriminated Unions + Destructing (required for bindable) do not
get along, so we shut typescript up by casting `value` to `never`.
-->
<SliderPrimitive.Root
    bind:ref
    bind:value={value as never}
    data-slot="slider"
    {orientation}
    class={cn(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        "[data-disabled]:pointer-events-none aria-disabled:cursor-not-allowed [data-disabled]:opacity-50 [data-disabled]:cursor-not-allowed aria-disabled:pointer-events-none aria-disabled:opacity-50",
        className,
    )}
    {...restProps}
>
    {#snippet children({ thumbs })}
        <span
            data-orientation={orientation}
            data-slot="slider-track"
            class={cn(
                "bg-text/25 relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-1",
            )}
        >
            <SliderPrimitive.Range
                data-slot="slider-range"
                class={cn(
                    "bg-text absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
                )}
            />
        </span>
        {#each thumbs as thumb (thumb)}
            <SliderPrimitive.Thumb
                data-slot="slider-thumb"
                index={thumb}
                class="border-stroke bg-text ring-stroke focus-visible:outline-hidden block size-4 shrink-0 rounded-full border shadow-skeuo hover:ring-4 focus-visible:ring-4 hover:ring-text/40 focus-visible:ring-text/40 cursor-pointer"
            />
        {/each}
    {/snippet}
</SliderPrimitive.Root>
