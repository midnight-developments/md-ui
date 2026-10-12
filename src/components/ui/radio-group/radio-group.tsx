"use client"

import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { cn } from "@/lib/utils"
import advancedRadioStyles from "./radio-group.module.css"

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
    return (
        <RadioGroupPrimitive
            data-slot="radio-group"
            className={cn("grid w-full gap-4.5", className)}
            {...props}
        />
    )
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
    return (
        <RadioPrimitive.Root
            data-slot="radio-group-item"
            className={cn(
                "group/radio-group-item peer outline-none transition-snappy cursor-pointer select-none",
                "focus-visible:ring-2 focus-visible:ring-border-active",
                "disabled:cursor-not-allowed disabled:opacity-50",
                advancedRadioStyles.indicator,
                className
            )}
            {...props}
        >
            <RadioPrimitive.Indicator
                keepMounted
                data-slot="radio-group-indicator"
                className={cn(
                    advancedRadioStyles.activeIndicator,
                    "transition-snappy data-unchecked:opacity-0 data-checked:opacity-100"
                )}
            />
        </RadioPrimitive.Root>
    )
}

export { RadioGroup, RadioGroupItem }
