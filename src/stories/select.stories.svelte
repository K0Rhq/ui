<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import * as Select from "$lib/components/ui/select/index.ts";
    import { Root } from "$lib/components/ui/select/index.ts";
    import { fn } from "storybook/test";

    const sampleItems = [
        {
            heading: "Fruits",
            items: [
                { value: "apple", label: "Apple" },
                { value: "banana", label: "Banana" },
                { value: "cherry", label: "Cherry" },
                { value: "orange", label: "Orange" },
                { value: "grape", label: "Grape" },
            ],
        },
        {
            heading: "Vegetables",
            items: [
                { value: "carrot", label: "Carrot" },
                { value: "broccoli", label: "Broccoli" },
                { value: "spinach", label: "Spinach" },
                { value: "potato", label: "Potato", disabled: true },
                { value: "onion", label: "Onion" },
            ],
        },
        {
            heading: "Grains",
            items: [
                { value: "rice", label: "Rice" },
                { value: "wheat", label: "Wheat" },
                { value: "oats", label: "Oats" },
                { value: "quinoa", label: "Quinoa" },
                { value: "barley", label: "Barley" },
            ],
        },
        {
            heading: "Proteins",
            items: [
                { value: "chicken", label: "Chicken" },
                { value: "beef", label: "Beef" },
                { value: "fish", label: "Fish" },
                { value: "tofu", label: "Tofu" },
                { value: "eggs", label: "Eggs" },
            ],
        },
    ];

    const { Story } = defineMeta({
        title: "Components/Select",
        tags: ["autodocs"],
        component: Root,
        argTypes: {
            items: { control: "object" },
            placeholder: { control: "text" },
            value: { control: "text" },
            disabled: { control: "boolean" },
            type: {
                control: { type: "select" },
                options: ["single", "multiple"],
            },
            size: {
                control: { type: "select" },
                options: ["sm", "default"],
            },
            side: {
                control: { type: "select" },
                options: ["top", "bottom", "left", "right"],
            },
            onValueChange: { action: "valueChanged" },
        },
        args: {
            items: sampleItems,
            placeholder: "Select food",
            disabled: false,
            type: "single",
            size: "default",
            side: "bottom",
            value: "",
            onValueChange: fn(),
        },
    });
</script>

{#snippet template(args)}
    <Select.Root
        bind:value={args.value}
        type={args.type}
        disabled={args.disabled}
        onValueChange={args.onValueChange}
    >
        <Select.Trigger class="w-32" size={args.size}>
            {#if args.value}
                {@const allItems = args.items.flatMap((group) => group.items)}
                {@const selectedItems = Array.isArray(args.value)
                    ? allItems.filter((item) => args.value.includes(item.value))
                    : allItems.filter((item) => item.value === args.value)}
                {@const selectedLabels = selectedItems.map(
                    (item) => item.label,
                )}
                {#if selectedLabels.length > 3}
                    {selectedLabels.length} selected
                {:else}
                    {selectedLabels.join(", ")}
                {/if}
            {:else}
                {args.placeholder}
            {/if}
        </Select.Trigger>

        <Select.Content side={args.side}>
            {#each args.items as group, groupIndex}
                <Select.Group>
                    <Select.GroupHeading>{group.heading}</Select.GroupHeading>
                    {#each group.items as item}
                        <Select.Item
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {item.label}
                        </Select.Item>
                    {/each}
                </Select.Group>
                {#if groupIndex < args.items.length - 1}
                    <Select.Separator />
                {/if}
            {/each}
        </Select.Content>
    </Select.Root>
{/snippet}

<Story name="Select" let:args {template} />
