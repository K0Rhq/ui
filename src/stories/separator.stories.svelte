<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import * as Separator from "$lib/components/ui/separator/index.ts";
    import { Root } from "$lib/components/ui/separator/index.ts";

    const { Story } = defineMeta({
        title: "Components/Separator",
        tags: ["autodocs"],
        component: Root,
        argTypes: {
            emphasis: {
                control: { type: "select" },
                options: ["subtle", "default", "bold"],
            },
            orientation: {
                control: { type: "select" },
                options: ["horizontal", "vertical"],
            },
        },
        args: {
            emphasis: "default",
            orientation: "horizontal",
        },
        parameters: {
            controls: {
                include: Object.keys({
                    emphasis: null,
                    orientation: null,
                }),
                hideNoControlsWarning: true,
            },
        },
    });
</script>

<Story name="Horizontal" let:args />
