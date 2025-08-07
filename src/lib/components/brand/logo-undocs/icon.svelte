<script lang="ts" module>
    export interface LogoUnDocsProps {
        width?: number;
        height?: number;
        class?: string;
    }
</script>

<script lang="ts">
    import { cn } from "$lib/utils.js";

    let {
        width = 24,
        height = 24,
        class: className,
        ...restProps
    }: LogoUnDocsProps = $props();

    const widthRem = $derived(`${width / 16}rem`);
    const heightRem = $derived(`${height / 16}rem`);
</script>

<svg
    width={widthRem}
    height={heightRem}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class={cn(className)}
    {...restProps}
>
    <path
        d="M-2.84124e-07 6.5L0 0L12 5.24537e-07C18.6274 8.1423e-07 24 5.37258 24 12L17.5 12C17.5 8.96243 15.0376 6.5 12 6.5L-2.84124e-07 6.5Z"
        fill="#3B82F6"
    />
    <path
        d="M-2.84124e-07 6.5L0 0L12 5.24537e-07C18.6274 8.1423e-07 24 5.37258 24 12L17.5 12C17.5 8.96243 15.0376 6.5 12 6.5L-2.84124e-07 6.5Z"
        fill="#2DD4BF"
    />
    <path
        d="M24 12C24 18.6274 18.6274 24 12 24L-1.04907e-06 24L-7.64949e-07 17.5L12 17.5C15.0376 17.5 17.5 15.0376 17.5 12L24 12Z"
        fill="#3B82F6"
    />
</svg>
