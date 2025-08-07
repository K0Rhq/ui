<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { LogoKOR } from "$lib/components/brand/logo-kor/index.ts";
    import { LogoBibleio } from "$lib/components/brand/logo-bibleio/index.ts";
    import { LogoAlive } from "$lib/components/brand/logo-alive/index.ts";
    import { LogoUnDocs } from "$lib/components/brand/logo-undocs/index.ts";
    import { LogoKorUI } from "$lib/components/brand/logo-korui/index.ts";

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

{#snippet kor(args)}
    <LogoKOR {...args} />
{/snippet}
<Story name="KOR Logo" let:args template={kor} />

{#snippet korui(args)}
    <LogoKorUI {...args} />
{/snippet}
<Story name="KORUI Logo" let:args template={korui} />

{#snippet bibleio(args)}
    <LogoBibleio {...args} />
{/snippet}
<Story name="Bibleio Logo" let:args template={bibleio} />

{#snippet alive(args)}
    <LogoAlive {...args} />
{/snippet}
<Story name="Alive Logo" let:args template={alive} />

{#snippet undocs(args)}
    <LogoUnDocs {...args} />
{/snippet}
<Story name="unDocs Logo" let:args template={undocs} />
