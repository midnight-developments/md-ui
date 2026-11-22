"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group"
import { cn } from "@/lib/utils"
import { Indicator, IndicatorActive } from "@/components/ui/indicator"

function CheckboxGroup({ className, ...props }: CheckboxGroupPrimitive.Props) {
    return (
        <CheckboxGroupPrimitive
            data-slot="checkbox-group"
            className={cn("grid w-full gap-3.5", className)}
            {...props}
        />
    )
}

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
    return (
        <CheckboxPrimitive.Root
            data-slot="checkbox"
            className={cn(
                "peer inline-flex shrink-0 items-center justify-center outline-none cursor-pointer",
                "disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        >
            <Indicator shape="square">
                <CheckboxPrimitive.Indicator render={<IndicatorActive />} />
            </Indicator>
        </CheckboxPrimitive.Root>
    )
}

export { Checkbox, CheckboxGroup }


