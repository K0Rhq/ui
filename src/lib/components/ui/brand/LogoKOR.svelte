<script lang="ts" module>
    export interface LogoKORProps {
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
    }: LogoKORProps = $props();

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
    <path d="M16.5 0H24L14 12H6.5L16.5 0Z" fill="#A3E635"></path>
    <path d="M16.5 24H24L14 12H6.5L16.5 24Z" fill="#A855F7"></path>
    <path d="M0 0H6.5V24H0V0Z" fill="#3B82F6"></path>
</svg>
