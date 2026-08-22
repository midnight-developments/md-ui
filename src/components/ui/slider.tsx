import { Slider as SliderPrimitive } from "@base-ui/react/slider"

import { cn } from "@/lib/utils"

export interface SliderProps extends SliderPrimitive.Root.Props {
    label: string
    description?: string
    wrapperClassName?: string
}

function Slider({
    className,
    defaultValue,
    value,
    min = 0,
    max = 100,
    label,
    description,
    wrapperClassName,
    ...props
}: SliderProps) {
    const _values = value !== undefined
        ? (Array.isArray(value) ? value : [value])
        : defaultValue !== undefined
            ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue])
            : [min, max]

    const displayValue = _values.join(" - ")

    const sliderElement = (
        <SliderPrimitive.Root
            className={cn("data-horizontal:w-full data-vertical:h-full", className)}
            data-slot="slider"
            defaultValue={defaultValue}
            value={value}
            min={min}
            max={max}
            thumbAlignment="edge"
            {...props}
        >
            <SliderPrimitive.Control className="relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col">
                <SliderPrimitive.Track
                    data-slot="slider-track"
                    className="relative grow overflow-hidden rounded-xs bg-white/10 select-none data-horizontal:h-2 data-horizontal:w-full data-vertical:h-full data-vertical:w-1"
                >
                    <SliderPrimitive.Indicator
                        data-slot="slider-range"
                        className="bg-accent-gradient-x select-none data-horizontal:h-full data-vertical:w-full"
                    />
                </SliderPrimitive.Track>
                {Array.from({ length: _values.length }, (_, index) => (
                    <SliderPrimitive.Thumb
                        data-slot="slider-thumb"
                        key={index}
                        className="relative block size-4 shrink-0 rounded-full bg-white cursor-pointer active:scale-90 active:brightness-90 transition-[scale,filter] ease-in-out duration-200 select-none disabled:pointer-events-none disabled:opacity-50"
                    />
                ))}
            </SliderPrimitive.Control>
        </SliderPrimitive.Root>
    )

    return (
        <div className={cn("flex flex-col gap-3 w-full", wrapperClassName)}>
            <div className="flex justify-between items-center w-full">
                <label className="text-md font-normal text-foreground tracking-somewhat-tight leading-none">
                    {label}
                </label>
                <span className="text-md font-normal text-foreground tracking-somewhat-tight leading-none">
                    {displayValue}
                </span>
            </div>
            {sliderElement}
            {description && (
                <p className="text-sm tracking-somewhat-tight text-secondary leading-none -mt-0.5">
                    {description}
                </p>
            )}
        </div>
    )
}

export { Slider }
