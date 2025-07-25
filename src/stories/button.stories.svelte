<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { Button } from "$lib/components/ui/button/index.ts";

    const { Story } = defineMeta({
        title: "Components/Button",
        tags: ["autodocs"],
        component: Button,
        argTypes: {
            label: {
                control: { type: "text" },
            },
        },
        args: {
            label: "Button",
        },
        parameters: {
            controls: {
                include: Object.keys({
                    label: null,
                }),
                hideNoControlsWarning: true,
            },
        },
    });
</script>

{#snippet template(args)}
    <Button {...args}>{args.label}</Button>
{/snippet}

<Story name="Button" let:args {template} />
