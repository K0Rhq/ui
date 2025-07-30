<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { Switch } from "$lib/components/ui/switch/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Components/Switch",
        tags: ["autodocs"],
        component: Switch,
        argTypes: {
            disabled: {
                control: { type: "boolean" },
            },
        },
        args: {
            onCheckedChange: fn(),
            disabled: false,
        },
        parameters: {
            controls: {
                include: Object.keys({
                    disabled: null,
                }),
                hideNoControlsWarning: true,
            },
        },
    });
</script>

<Story name="Switch" let:args />
<Story name="Invalid" args={{ "aria-invalid": true }} let:args />
