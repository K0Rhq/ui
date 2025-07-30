<script lang="ts">
    import { Switch as SwitchPrimitive } from "bits-ui";
    import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";

    let {
        ref = $bindable(null),
        class: className,
        checked = $bindable(false),
        ...restProps
    }: WithoutChildrenOrChild<SwitchPrimitive.RootProps> = $props();
</script>

<SwitchPrimitive.Root
    bind:ref
    bind:checked
    data-slot="switch"
    class={cn(
        "bg-surface-primary border border-stroke shadow-glass peer inline-flex h-7 w-12.5 shrink-0 items-center rounded-full outline-none transition-all",
        "focus-visible:border-text/25 focus-visible:ring-text/15 focus-visible:ring-[2px] ring-offset-background outline-none",
        "aria-invalid:ring-text-danger/20 dark:aria-invalid:ring-text-danger/40 aria-invalid:border-text-danger group",
        "disabled:pointer-events-none aria-disabled:cursor-not-allowed disabled:opacity-50 disabled:cursor-not-allowed aria-disabled:pointer-events-none aria-disabled:opacity-50",
        className,
    )}
    {...restProps}
>
    <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        class={cn(
            "data-[state=unchecked]:bg-text/35 data-[state=checked]:bg-text shadow-skeuo pointer-events-none block size-5.5 rounded-full ring-0 transition-[translate,background-color] duration-200 ease-in-out data-[state=checked]:translate-x-[calc(100%+2px)] data-[state=unchecked]:translate-x-0.5",
        )}
    />
</SwitchPrimitive.Root>
