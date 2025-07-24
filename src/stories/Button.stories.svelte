<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Button from "~/components/Button.svelte";
    import { fn } from "storybook/test";

    // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
    const { Story } = defineMeta({
        title: "Example/Button",
        component: Button,
        tags: ["autodocs"],
        argTypes: {
            primary: {
                control: "boolean",
                description: "Whether this is the primary button style",
            },
            backgroundColor: {
                control: "color",
                description:
                    "Custom background color (overrides variant styles)",
            },
            size: {
                control: { type: "select" },
                options: ["small", "medium", "large"],
                description: "Button size",
            },
            label: {
                control: "text",
                description: "Button text content",
            },
        },
        args: {
            onclick: fn(),
            label: "Button",
        },
    });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
    name="Button"
    args={{
        primary: true,
        label: "Button",
    }}
/>
