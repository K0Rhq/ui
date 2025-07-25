<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { fn } from "storybook/test";
    import Select from "~/components/Select.svelte";

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
        component: Select,
        tags: ["autodocs"],
        argTypes: {
            items: {
                control: "object",
                description:
                    "Array of select options with value, label, and optional disabled properties",
            },
            placeholder: {
                control: "text",
                description: "Placeholder text when no option is selected",
            },
            value: {
                control: "text",
                description: "Currently selected value(s)",
            },
            disabled: {
                control: "boolean",
                description: "Whether the select is disabled",
            },
            type: {
                control: { type: "select" },
                options: ["single", "multiple"],
                description: "Selection type - single or multiple",
            },
            size: {
                control: { type: "select" },
                options: ["small", "medium", "large"],
                description: "Select size variant",
            },
            onValueChange: {
                action: "valueChanged",
                description: "Callback fired when the selected value changes",
            },
        },
        args: {
            items: sampleItems,
            placeholder: "Select a fruit...",
            disabled: false,
            type: "single",
            size: "medium",
            onValueChange: fn(),
        },
    });
</script>

<Story
    name="Select"
    args={{
        items: sampleItems,
        placeholder: "Select a fruit...",
        disabled: false,
        type: "single",
        size: "medium",
        onValueChange: fn(),
    }}
/>
