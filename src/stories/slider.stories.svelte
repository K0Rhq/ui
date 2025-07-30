<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { Slider } from "$lib/components/ui/slider/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Components/Slider",
        tags: ["autodocs"],
        component: Slider,
        argTypes: {
            disabled: {
                control: { type: "boolean" },
            },
            step: {
                control: { type: "number" },
            },
            orientation: {
                control: {
                    type: "select",
                    options: ["horizontal", "vertical"],
                },
            },
            direction: {
                control: { type: "select", options: ["ltr", "rtl"] },
            },
        },
        args: {
            onValueChange: fn(),
            disabled: false,
            max: 100,
            min: 0,
            step: 1,
            value: 50,
            orientation: "horizontal",
            dir: "ltr",
        },
        parameters: {
            controls: {
                include: Object.keys({
                    disabled: null,
                    step: null,
                    orientation: null,
                    direction: null,
                }),
                hideNoControlsWarning: true,
            },
        },
    });
</script>

<Story
    name="Single"
    args={{ type: "single", orientation: "horizontal", value: 89 }}
    let:args
/>
<Story
    name="Range"
    args={{ type: "multiple", orientation: "horizontal", value: [24, 89] }}
    let:args
/>
