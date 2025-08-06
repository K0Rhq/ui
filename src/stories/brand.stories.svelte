<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { LogoKOR } from "$lib/components/ui/brand/index.ts";

    const { Story } = defineMeta({
        title: "Guidelines/Brand",
        component: LogoKOR,
        argTypes: {
            width: {
                control: { type: "number" },
            },
            height: {
                control: { type: "number" },
            },
        },
        args: {
            width: 24,
            height: 24,
        },
    });
</script>

<Story name="KOR Logo" />
