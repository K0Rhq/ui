<script>
    import { Select as SelectPrimitive } from "bits-ui";
    import { cva } from "class-variance-authority";
    import { clsx } from "clsx";

    /** @typedef {Object} Props
     * @property {Array<{value: string, label: string, disabled?: boolean}>} items - Array of select options
     * @property {string} [placeholder="Select..."] - Placeholder text
     * @property {string} [value] - Selected value
     * @property {boolean} [disabled=false] - Whether select is disabled
     * @property {'single' | 'multiple'} [type='single'] - Selection type
     * @property {'small' | 'medium' | 'large'} [size='medium'] - Select size
     */

    /** @type {Props} */
    let {
        items = [],
        placeholder = "Select...",
        value = $bindable(),
        disabled = false,
        type = "single",
        size = "medium",
        ...props
    } = $props();

    const triggerVariants = cva(
        "inline-flex items-center justify-between rounded-12 border border-stroke bg-surface-primary text-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-placeholder:text-text/60",
        {
            variants: {
                size: {
                    small: "h-8 px-3 text-sm",
                    medium: "h-10 px-3 text-sm",
                    large: "h-12 px-4 text-base",
                },
            },
            defaultVariants: {
                size: "medium",
            },
        },
    );

    const selectedLabel = $derived(
        type === "multiple" && Array.isArray(value)
            ? value.length === 0
                ? placeholder
                : value.length <= 4
                  ? value
                        .map(
                            (val) =>
                                items.find((item) => item.value === val)
                                    ?.label || val,
                        )
                        .join(", ")
                  : `${value.length} selected`
            : items.find((item) => item.value === value)?.label || placeholder,
    );
</script>

<SelectPrimitive.Root {type} bind:value {disabled} {items} {...props}>
    <SelectPrimitive.Trigger
        class={clsx(triggerVariants({ size }))}
        aria-label="Select option"
    >
        <span class="truncate">{selectedLabel}</span>
        <svg
            class="ml-2 h-4 w-4 opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
        </svg>
    </SelectPrimitive.Trigger>

    <SelectPrimitive.Portal>
        <SelectPrimitive.Content
            class="relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-stroke bg-surface-primary shadow-lg"
            sideOffset={4}
        >
            <SelectPrimitive.ScrollUpButton
                class="flex cursor-default items-center justify-center py-1"
            >
                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fill-rule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </SelectPrimitive.ScrollUpButton>

            <SelectPrimitive.Viewport class="p-1">
                {#each items as item}
                    <SelectPrimitive.Item
                        class="relative flex w-full cursor-default text-text select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-highlighted:bg-surface-base data-disabled:pointer-events-none data-disabled:opacity-50"
                        value={item.value}
                        label={item.label}
                        disabled={item.disabled}
                    >
                        {#snippet children({ selected })}
                            {#if selected}
                                <span
                                    class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
                                >
                                    <svg
                                        class="h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </span>
                            {/if}
                            <span>{item.label}</span>
                        {/snippet}
                    </SelectPrimitive.Item>
                {/each}
            </SelectPrimitive.Viewport>

            <SelectPrimitive.ScrollDownButton
                class="flex cursor-default items-center justify-center py-1"
            >
                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
</SelectPrimitive.Root>
