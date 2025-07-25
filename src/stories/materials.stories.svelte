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

<Story name="BaseRaised">
    <div
        class="flex flex-col gap-8 w-[48rem] text-text bg-[url(/bg.jpg)] bg-cover h-full p-20"
    >
        <div
            class="bg-surface-base flex flex-col gap-2 backdrop-blur-surface-base rounded-16 border border-stroke w-full p-4 pt-16"
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

<Story name="PrimaryRaised1">
    <div class="flex flex-col gap-8 w-[32rem] text-text">
        <div
            class="bg-surface-base flex flex-col gap-2 overflow-clip relative rounded-16 border border-stroke w-full p-4 pt-16"
        >
            <code>surface-base</code>
            <p
                class="body leading-relaxed absolute w-full top-1/2 -translate-y-1/2"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                labore magni blanditiis deleniti non ratione! Vero nesciunt quod
                sequi libero quisquam distinctio omnis ad hic. Vero aspernatur
                itaque et eligendi! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Soluta labore magni blanditiis deleniti non
                ratione! Vero nesciunt quod sequi libero quisquam distinctio
                omnis ad hic. Vero aspernatur itaque et eligendi! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Soluta labore magni
                blanditiis deleniti non ratione! Vero nesciunt quod sequi libero
                quisquam distinctio omnis ad hic. Vero aspernatur itaque et
                eligendi! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Soluta labore magni blanditiis deleniti non ratione! Vero
                nesciunt quod sequi libero quisquam distinctio omnis ad hic.
                Vero aspernatur itaque et eligendi! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Soluta labore magni blanditiis
                deleniti non ratione! Vero nesciunt quod sequi libero quisquam
                distinctio omnis ad hic. Vero aspernatur itaque et eligendi!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                labore magni blanditiis deleniti non ratione! Vero nesciunt quod
                sequi libero quisquam distinctio omnis ad hic. Vero aspernatur
                itaque et eligendi!
            </p>
            <div
                class="bg-surface-primary shadow-glass rounded-8 border border-stroke backdrop-blur-raised-1 w-full p-4 pt-16"
            >
                <code>surface-primary raised 1</code>
            </div>
            <div
                class="bg-surface-primary-success text-text-success-contrast shadow-glass rounded-8 border border-stroke backdrop-blur-raised-1 w-full p-4 pt-16"
            >
                <code>surface-primary-success raised 1</code>
            </div>
            <div
                class="bg-surface-primary-warning text-text-warning-contrast shadow-glass rounded-8 border border-stroke backdrop-blur-raised-1 w-full p-4 pt-16"
            >
                <code>surface-primary-warning raised 1</code>
            </div>
            <div
                class="bg-surface-primary-danger text-text-danger-contrast shadow-glass rounded-8 border border-stroke backdrop-blur-raised-1 w-full p-4 pt-16"
            >
                <code>surface-primary-danger raised 1</code>
            </div>
        </div>
    </div>
</Story>

<Story name="PrimaryRaised2">
    <div class="flex flex-col gap-8 w-[32rem] text-text">
        <div
            class="bg-surface-base flex flex-col gap-2 overflow-clip relative rounded-16 border border-stroke w-full p-4 pt-16"
        >
            <code>surface-base</code>
            <p
                class="body leading-relaxed absolute w-full top-1/2 -translate-y-1/2"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                labore magni blanditiis deleniti non ratione! Vero nesciunt quod
                sequi libero quisquam distinctio omnis ad hic. Vero aspernatur
                itaque et eligendi! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Soluta labore magni blanditiis deleniti non
                ratione! Vero nesciunt quod sequi libero quisquam distinctio
                omnis ad hic. Vero aspernatur itaque et eligendi! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Soluta labore magni
                blanditiis deleniti non ratione! Vero nesciunt quod sequi libero
                quisquam distinctio omnis ad hic. Vero aspernatur itaque et
                eligendi! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Soluta labore magni blanditiis deleniti non ratione! Vero
                nesciunt quod sequi libero quisquam distinctio omnis ad hic.
                Vero aspernatur itaque et eligendi! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Soluta labore magni blanditiis
                deleniti non ratione! Vero nesciunt quod sequi libero quisquam
                distinctio omnis ad hic. Vero aspernatur itaque et eligendi!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                labore magni blanditiis deleniti non ratione! Vero nesciunt quod
                sequi libero quisquam distinctio omnis ad hic. Vero aspernatur
                itaque et eligendi!
            </p>
            <div
                class="bg-surface-primary shadow-glass rounded-8 border border-stroke backdrop-blur-raised-2 w-full p-4 pt-16"
            >
                <code>surface-primary raised 2</code>
            </div>
            <div
                class="bg-surface-primary-success text-text-success-contrast shadow-glass rounded-8 border border-stroke backdrop-blur-raised-2 w-full p-4 pt-16"
            >
                <code>surface-primary-success raised 2</code>
            </div>
            <div
                class="bg-surface-primary-warning text-text-warning-contrast shadow-glass rounded-8 border border-stroke backdrop-blur-raised-2 w-full p-4 pt-16"
            >
                <code>surface-primary-warning raised 2</code>
            </div>
            <div
                class="bg-surface-primary-danger text-text-danger-contrast shadow-glass rounded-8 border border-stroke backdrop-blur-raised-2 w-full p-4 pt-16"
            >
                <code>surface-primary-danger raised 2</code>
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
