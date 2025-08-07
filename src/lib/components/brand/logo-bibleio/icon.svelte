<script lang="ts" module>
    export interface LogoBibleioProps {
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
    }: LogoBibleioProps = $props();

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
    <path d="M8.75 0H15.25V24H8.75V0Z" fill="#2DD4BF" />
    <path d="M0 6.25H15.25V12.75H0V6.25Z" fill="#F43F5E" />
    <path d="M24 6.25H15.25V12.75H24V6.25Z" fill="#FACC15" />
</svg>
