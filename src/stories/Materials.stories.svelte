<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";

    const { Story } = defineMeta({
        title: "Guidelines/Materials",
    });
</script>

<Story name="Glass">
    <div class="flex flex-col gap-8 min-w-[32rem] text-text">
        <div
            class="bg-surface-base flex flex-col gap-2 rounded-16 border border-stroke w-full p-4 pt-16"
        >
            <code>surface-base</code>
            <div
                class="bg-surface-primary shadow-glass rounded-8 border border-stroke w-full p-4 pt-16"
            >
                <code>surface-primary</code>
            </div>
            <div
                class="bg-surface-primary-success text-text-success-contrast shadow-glass rounded-8 border border-stroke w-full p-4 pt-16"
            >
                <code>surface-primary-success</code>
            </div>
            <div
                class="bg-surface-primary-warning text-text-warning-contrast shadow-glass rounded-8 border border-stroke w-full p-4 pt-16"
            >
                <code>surface-primary-warning</code>
            </div>
            <div
                class="bg-surface-primary-danger text-text-danger-contrast shadow-glass rounded-8 border border-stroke w-full p-4 pt-16"
            >
                <code>surface-primary-danger</code>
            </div>
        </div>
    </div>
</Story>

<Story name="Skeuo">
    <div class="flex flex-col gap-8 min-w-[32rem] text-text">
        <div
            class="bg-surface-base flex flex-col gap-2 rounded-16 border border-stroke w-full p-4 pt-16"
        >
            <code>surface-base</code>
            <div
                class="bg-surface-component shadow-skeuo text-text-invert rounded-8 border border-stroke w-full p-3"
            >
                <code>surface-component</code>
            </div>
            <div
                class="bg-surface-component-success shadow-skeuo text-text-success-invert rounded-8 border border-stroke w-full p-3"
            >
                <code>surface-component-success</code>
            </div>
            <div
                class="bg-surface-component-warning shadow-skeuo text-text-warning-invert rounded-8 border border-stroke w-full p-3"
            >
                <code>surface-component-warning</code>
            </div>
            <div
                class="bg-surface-component-danger shadow-skeuo text-text-danger-invert rounded-8 border border-stroke w-full p-3"
            >
                <code>surface-component-danger</code>
            </div>
        </div>
    </div>
</Story>
