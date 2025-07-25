<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import * as Select from "$lib/components/ui/select/index.js";
    import { Root } from "$lib/components/ui/select/index.js";
    import { fn } from "storybook/test";

    const sampleItems = [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "cherry", label: "Cherry" },
        { value: "date", label: "Date" },
        { value: "elderberry", label: "Elderberry", disabled: true },
        { value: "fig", label: "Fig" },
        { value: "grape", label: "Grape" },
        { value: "honeydew", label: "Honeydew" },
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
                options: ["small", "medium", "large"],
            },
            onValueChange: { action: "valueChanged" },
        },
        args: {
            items: sampleItems,
            placeholder: "Select a fruit...",
            disabled: false,
            type: "single",
            size: "medium",
            value: "",
            onValueChange: fn(),
        },
    });
</script>

{#snippet template(args)}
    <Select.Root bind:value={args.value} type={args.type}>
        <Select.Trigger class="w-[180px]" disabled={args.disabled}>
            {args.value
                ? args.items.find((item) => item.value === args.value)?.label
                : args.placeholder}
        </Select.Trigger>

        <Select.Content>
            {#each args.items as item}
                <Select.Item value={item.value} disabled={item.disabled}>
                    {item.label}
                </Select.Item>
            {/each}
        </Select.Content>
    </Select.Root>
{/snippet}

<Story name="Select" let:args {template} />
