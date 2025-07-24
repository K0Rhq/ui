<script>
    import { cva } from "class-variance-authority";
    import { clsx } from "clsx";

    /** @typedef {Object} Props
     * @property {boolean} [primary=false] - Whether this is the primary button style
     * @property {string} [backgroundColor] - Custom background color
     * @property {'small' | 'medium' | 'large'} [size='medium'] - Button size
     * @property {string} label - Button text
     */

    /** @type {Props} */
    const {
        primary = false,
        backgroundColor,
        size = "medium",
        label,
        ...props
    } = $props();

    const buttonVariants = cva(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        {
            variants: {
                variant: {
                    primary:
                        "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700",
                    secondary:
                        "bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:active:bg-gray-500",
                },
                size: {
                    small: "h-8 px-3 text-sm",
                    medium: "h-10 px-4 text-base",
                    large: "h-12 px-6 text-lg",
                },
            },
            defaultVariants: {
                variant: "secondary",
                size: "medium",
            },
        },
    );

    const buttonClass = $derived(
        buttonVariants({
            variant: primary ? "primary" : "secondary",
            size,
        }),
    );

    const style = $derived(
        backgroundColor ? `background-color: ${backgroundColor}` : "",
    );
</script>

<button type="button" class={clsx(buttonClass)} {style} {...props}>
    {label}
</button>
