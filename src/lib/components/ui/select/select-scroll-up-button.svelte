<script lang="ts">
    import IconCaretUp from "phosphor-icons-svelte/IconCaretUpRegular.svelte";
    import { Select as SelectPrimitive } from "bits-ui";
    import { cn, type WithoutChildrenOrChild } from "~/lib/utils.js";

    let {
        ref = $bindable(null),
        class: className,
        ...restProps
    }: WithoutChildrenOrChild<SelectPrimitive.ScrollUpButtonProps> = $props();
</script>

<SelectPrimitive.ScrollUpButton
    bind:ref
    data-slot="select-scroll-up-button"
    class={cn(
        "flex cursor-default items-center justify-center py-1 text-text",
        className,
    )}
    {...restProps}
>
    <IconCaretUp class="size-4" />
</SelectPrimitive.ScrollUpButton>
