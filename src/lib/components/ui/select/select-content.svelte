<script lang="ts">
    import { Select as SelectPrimitive } from "bits-ui";
    import SelectScrollUpButton from "./select-scroll-up-button.svelte";
    import SelectScrollDownButton from "./select-scroll-down-button.svelte";
    import { cn, type WithoutChild } from "~/lib/utils.js";

    let {
        ref = $bindable(null),
        class: className,
        sideOffset = 4,
        portalProps,
        children,
        ...restProps
    }: WithoutChild<SelectPrimitive.ContentProps> & {
        portalProps?: SelectPrimitive.PortalProps;
    } = $props();
</script>

<SelectPrimitive.Portal {...portalProps}>
    <SelectPrimitive.Content
        bind:ref
        {sideOffset}
        data-slot="select-content"
        class={cn(
            "bg-surface-primary rounded-12 border border-stroke shadow-glass backdrop-blur-raised-2 motion-duration-200",
            "max-h-(--bits-select-content-available-height) origin-(--bits-select-content-transform-origin) relative z-50 min-w-[8rem] overflow-y-auto overflow-x-hidden",
            "data-[side=bottom]:motion-preset-slide-down-sm data-[side=left]:motion-preset-slide-left-sm data-[side=right]:motion-preset-slide-right-sm data-[side=top]:motion-preset-slide-up-sm",
            "data-[state=open]:motion-preset-fade-sm",
            className,
        )}
        {...restProps}
    >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
            class={cn(
                "h-(--bits-select-anchor-height) min-w-(--bits-select-anchor-width) w-full scroll-my-1 p-1 flex flex-col gap-0",
            )}
        >
            {@render children?.()}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
    </SelectPrimitive.Content>
</SelectPrimitive.Portal>
