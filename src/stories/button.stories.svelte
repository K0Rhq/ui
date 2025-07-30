<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { Button } from "$lib/components/ui/button/index.ts";
    import IconAirplane from "phosphor-icons-svelte/IconAirplaneRegular.svelte";

    const { Story } = defineMeta({
        title: "Components/Button",
        tags: ["autodocs"],
        component: Button,
        argTypes: {
            label: {
                control: { type: "text" },
            },
            variant: {
                control: {
                    type: "select",
                },
                options: ["primary", "success", "warning", "danger"],
            },
            appearance: {
                control: {
                    type: "select",
                },
                options: ["solid", "soft", "ghost"],
            },
            size: {
                control: { type: "select" },
                options: ["default", "sm", "icon", "icon-sm"],
            },
            disabled: {
                control: { type: "boolean" },
            },
        },
        args: {
            label: "Button",
            variant: "primary",
            appearance: "solid",
            size: "default",
            disabled: false,
        },
        parameters: {
            controls: {
                include: Object.keys({
                    label: null,
                    variant: null,
                    appearance: null,
                    size: null,
                    disabled: null,
                }),
                hideNoControlsWarning: true,
            },
        },
    });
</script>

{#snippet templateText(args)}
    <Button {...args}>{args.label}</Button>
{/snippet}
<Story name="Button" let:args template={templateText} />

{#snippet templatePrefix(args)}
    <Button {...args}><IconAirplane />{args.label}</Button>
{/snippet}
<Story name="Button Prefix" let:args template={templatePrefix} />

{#snippet templateSuffix(args)}
    <Button {...args}>{args.label}<IconAirplane /></Button>
{/snippet}
<Story name="Button Suffix" let:args template={templateSuffix} />

{#snippet templateIcon(args)}
    <Button {...args}><IconAirplane /></Button>
{/snippet}
<Story
    name="Button Icon"
    let:args
    args={{ size: "icon" }}
    template={templateIcon}
/>

{#snippet templateInvalid(args)}
    <Button {...args} aria-invalid>{args.label}</Button>
{/snippet}
<Story name="Invalid" let:args template={templateInvalid} />
