<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";

    const { Story } = defineMeta({
        title: "Guidelines/Typography",
    });
</script>

<Story name="Typography">
    <div class="flex flex-col gap-8 max-w-[32rem] text-text">
        <h1 class="display">Display</h1>
        <h1 class="large-title">Large Title</h1>
        <h1 class="title-1">Title 1</h1>
        <h2 class="title-2">Title 2</h2>
        <h3 class="title-3">Title 3</h3>
        <h4 class="subtitle">Subtitle (Title 4)</h4>
        <p class="body tracking-tighter">Body 1 line</p>
        <p class="body leading-relaxed">
            Body paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed euismod, nisl vel aliquam aliquet, nisl nisl aliquet nisl,
            vel aliquet nisl nisl vel aliquet. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquet,
            nisl nisl aliquet nisl, vel aliquet nisl nisl vel aliquet.
        </p>
        <p class="caption">Caption</p>
        <p class="subtext tracking-tight">Subtext 1 line</p>
        <p class="subtext leading-relaxed">
            Subtext paragraph. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed euismod, nisl vel aliquam aliquet, nisl nisl
            aliquet nisl, vel aliquet nisl nisl vel aliquet. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam
            aliquet, nisl nisl aliquet nisl, vel aliquet nisl nisl vel aliquet.
        </p>
    </div>
</Story>

<Story name="Mono">
    <div class="flex flex-col gap-8 max-w-[32rem] text-text">
        <h1 class="title-1 font-mono uppercase">Title 1 Uppercase</h1>
        <h1 class="title-1 font-mono">Title 1</h1>
        <h2 class="title-2 font-mono uppercase">Title 2 Uppercase</h2>
        <h2 class="title-2 font-mono">Title 2</h2>
        <h3 class="title-3 font-mono uppercase">Title 3 Uppercase</h3>
        <h3 class="title-3 font-mono">Title 3</h3>
        <code class="body tracking-tighter font-mono">Code line</code>
        <code class="body leading-relaxed font-mono">
            Code paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed euismod, nisl vel aliquam aliquet, nisl nisl aliquet nisl,
            vel aliquet nisl nisl vel aliquet. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquet,
            nisl nisl aliquet nisl, vel aliquet nisl nisl vel aliquet.
        </code>
    </div>
</Story>
