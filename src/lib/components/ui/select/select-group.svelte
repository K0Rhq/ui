<script lang="ts">
    import { Select as SelectPrimitive } from "bits-ui";

    let { ref = $bindable(null), ...restProps }: SelectPrimitive.GroupProps =
        $props();
</script>

<SelectPrimitive.Group
    data-slot="select-group"
    class="flex flex-col gap-1"
    {...restProps}
/>
