"use client"

import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { cn } from "@/lib/utils"
import { Indicator, IndicatorActive } from "@/components/ui/indicator"

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
    return (
        <RadioGroupPrimitive
            data-slot="radio-group"
            className={cn("grid w-full gap-3.5", className)}
            {...props}
        />
    )
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
    return (
        <RadioPrimitive.Root
            data-slot="radio-group-item"
            className={cn(
                "peer inline-flex shrink-0 items-center justify-center outline-none cursor-pointer",
                "disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        >
            <Indicator shape="circle">
                <RadioPrimitive.Indicator render={<IndicatorActive />} />
            </Indicator>
        </RadioPrimitive.Root>
    )
}

export { RadioGroup, RadioGroupItem }


