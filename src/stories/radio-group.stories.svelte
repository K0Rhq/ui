<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import {
        RadioGroup,
        RadioGroupItem,
    } from "$lib/components/ui/radio-group/index.ts";
    import { Label } from "$lib/components/ui/label/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Components/Radio Group",
        tags: ["autodocs"],
        component: RadioGroup,
        args: {
            onValueChange: fn(),
        },
        parameters: {
            controls: {
                include: Object.keys({}),
                hideNoControlsWarning: true,
            },
        },
    });
</script>

{#snippet template(args)}
    <RadioGroup {...args}>
        <div class="flex items-center gap-2">
            <RadioGroupItem value="option1" id="option1" />
            <Label for="option1">Option 1</Label>
        </div>
        <div class="flex items-center gap-2">
            <RadioGroupItem value="option2" id="option2" />
            <Label for="option2">Option 2</Label>
        </div>
        <div class="flex items-center gap-2">
            <RadioGroupItem value="option3" id="option3" />
            <Label for="option3">Option 3</Label>
        </div>
        <div class="flex items-center gap-2">
            <RadioGroupItem value="option4" id="option4" disabled />
            <Label for="option4">Option 4</Label>
        </div>
        <div class="flex items-center gap-2">
            <RadioGroupItem value="option5" id="option5" />
            <Label for="option5">Option 5</Label>
        </div>
        <div class="flex items-center gap-2">
            <RadioGroupItem value="option6" id="option6" aria-invalid />
            <Label for="option6">Option 6</Label>
        </div>
    </RadioGroup>
{/snippet}
<Story name="Radio Group" let:args {template} />
