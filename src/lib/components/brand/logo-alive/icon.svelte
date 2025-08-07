<script lang="ts" module>
    export interface LogoAliveProps {
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
    }: LogoAliveProps = $props();

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
    <path d="M6.5 24H0L4.60287 11.375H11.1029L6.5 24Z" fill="#3B82F6" />
    <path d="M17.5 24H24L15.25 0H8.75L17.5 24Z" fill="#EF4444" />
    <path
        d="M14.0365 14.5L16.3151 20.75H7.6849L9.96354 14.5H14.0365Z"
        fill="#2DD4BF"
    />
</svg>
