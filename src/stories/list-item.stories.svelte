<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { ListItem } from "$lib/components/ui/list-item/index.ts";
    import { fn } from "storybook/test";
    import ArmchairIcon from "phosphor-icons-svelte/IconArmchairRegular.svelte";

    const { Story } = defineMeta({
        title: "Components/List Item",
        tags: ["autodocs"],
        component: ListItem,
        argTypes: {
            size: {
                control: { type: "select", options: ["sm", "default"] },
            },
            as: {
                control: {
                    type: "select",
                },
                options: ["li", "div", "span", "a"],
            },
        },
        args: {
            size: "default",
            as: "li",
        },
        parameters: {
            controls: {
                include: Object.keys({
                    size: null,
                    as: null,
                }),
                hideNoControlsWarning: true,
            },
        },
    });
</script>

{#snippet templateText(args)}
    <div class="flex flex-col gap-0 max-w-[20%] w-full">
        <ListItem {...args} selected>List Item</ListItem>
        <ListItem {...args}>List Item</ListItem>
        <ListItem {...args}>List Item</ListItem>
        <ListItem {...args}>List Item</ListItem>
    </div>
{/snippet}
<Story name="List Item" let:args template={templateText} />

{#snippet templateIcon(args)}
    <div class="flex flex-col gap-0 max-w-[20%] w-full">
        <ListItem {...args} selected><ArmchairIcon />List Item</ListItem>
        <ListItem {...args}><ArmchairIcon />List Item</ListItem>
        <ListItem {...args}><ArmchairIcon />List Item</ListItem>
        <ListItem {...args}><ArmchairIcon />List Item</ListItem>
    </div>
{/snippet}
<Story name="Icons" let:args template={templateIcon} />
