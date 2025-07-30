<script lang="ts">
    import { Separator as SeparatorPrimitive } from "bits-ui";
    import { cn } from "~/lib/utils.js";

    let {
        ref = $bindable(null),
        class: className,
        emphasis = "default",
        ...restProps
    }: SeparatorPrimitive.RootProps & {
        emphasis?: "subtle" | "default" | "bold";
    } = $props();
</script>

<SeparatorPrimitive.Root
    bind:ref
    data-slot="separator"
    class={cn(
        "shrink-0 rounded-full data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px",
        {
            "bg-text/10": emphasis === "subtle",
            "bg-text/20": emphasis === "default",
            "bg-text/30": emphasis === "bold",
        },
        className,
    )}
    {...restProps}
/>
