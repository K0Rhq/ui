<script lang="ts" module>
    export interface LogoKorUIProps {
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
    }: LogoKorUIProps = $props();

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
    <path d="M0 0H6.5V12H0V0Z" fill="#F43F5E" />
    <path d="M17.5 0H24V12H17.5V0Z" fill="#FACC15" />
    <path
        d="M17.5 12V12.25H17.4944C17.3637 15.1715 14.9538 17.5 12 17.5C9.04622 17.5 6.63628 15.1715 6.50558 12.25H6.5V12H0C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12H17.5Z"
        fill="#3B82F6"
    />
</svg>
