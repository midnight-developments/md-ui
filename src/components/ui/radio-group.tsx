"use client"

import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { cn } from "@/lib/utils"

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
    return (
        <RadioGroupPrimitive
            data-slot="radio-group"
            className={cn("grid w-full gap-2", className)}
            {...props}
        />
    )
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
    return (
        <RadioPrimitive.Root
            data-slot="radio-group-item"
            className={cn(
                "group/radio-group-item peer relative flex aspect-square size-4 shrink-0 items-center justify-center rounded-full border border-white/20 bg-input outline-none transition-snappy cursor-pointer",
                "focus-visible:ring-2 focus-visible:ring-border-active",
                "data-checked:border-accent data-checked:bg-transparent",
                "disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        >
            <RadioPrimitive.Indicator
                keepMounted
                data-slot="radio-group-indicator"
                className="flex size-full items-center justify-center pointer-events-none transition-snappy data-unchecked:opacity-0 data-unchecked:scale-50 data-checked:opacity-100 data-checked:scale-100"
            >
                <span className="size-2.5 rounded-full bg-accent" />
            </RadioPrimitive.Indicator>
        </RadioPrimitive.Root>
    )
}

export { RadioGroup, RadioGroupItem }
