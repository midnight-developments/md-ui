"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group"
import { cn } from "@/lib/utils"
import { Indicator, IndicatorActive } from "@/components/ui/indicator/indicator"

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
                "group/checkbox peer outline-none transition-snappy cursor-pointer select-none",
                "focus-visible:ring-2 focus-visible:ring-border-active",
                "disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        >
            <Indicator shape="square">
                <CheckboxPrimitive.Indicator render={<IndicatorActive shape="square" variant="check" />} />
            </Indicator>
        </CheckboxPrimitive.Root>
    )
}

export { Checkbox, CheckboxGroup }
export default Checkbox


