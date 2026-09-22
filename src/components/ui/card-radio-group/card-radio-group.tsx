"use client"

import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { cn } from "@/lib/utils"
import "./card-radio-group.css"

function CardRadioGroup({
    className,
    columns = 2,
    ...props
}: RadioGroupPrimitive.Props & {
    columns?: number
}) {
    return (
        <RadioGroupPrimitive
            data-slot="card-radio-group"
            className={cn("grid w-full gap-2.5", `grid-cols-${columns}`, className)}
            {...props}
        />
    )
}

function CardRadioGroupItem({
    className,
    children,
    showIndicator = true,
    indicatorPosition = "top",
    ...props
}: RadioPrimitive.Root.Props & {
    showIndicator?: boolean
    indicatorPosition?: "top" | "center"
}) {
    return (
        <RadioPrimitive.Root
            data-slot="card-radio-group-item"
            className={cn(
                "group/card-radio peer relative flex justify-between gap-3 p-3.5 rounded-md ring-2 ring-inset ring-border outline-none transition-snappy cursor-pointer select-none text-left rim-light-card-radio",
                "focus-visible:ring-2 focus-visible:ring-border-active",
                "data-checked:ring-transparent",
                "disabled:cursor-not-allowed disabled:opacity-50",
                indicatorPosition === "center" ? "items-center" : "items-start",
                className
            )}
            {...props}
        >
            <span aria-hidden="true" className="card-radio-active-bg" />
            <span aria-hidden="true" className="card-radio-active-rim" />
            <div className="flex flex-col gap-1.75 w-full">{children}</div>
            {showIndicator && (
                <div
                    data-slot="card-radio-group-indicator"
                    className={cn(
                        "relative flex aspect-square size-4 shrink-0 items-center justify-center rounded-full border border-white/20 bg-input pointer-events-none transition-snappy",
                        "group-data-checked/card-radio:border-accent group-data-checked/card-radio:bg-transparent",
                        indicatorPosition === "top" && "mt-0.5"
                    )}
                >
                    <RadioPrimitive.Indicator
                        keepMounted
                        className="flex size-full items-center justify-center pointer-events-none transition-snappy data-unchecked:opacity-0 data-unchecked:scale-50 data-checked:opacity-100 data-checked:scale-100"
                    >
                        <span className="size-2.5 rounded-full bg-accent" />
                    </RadioPrimitive.Indicator>
                </div>
            )}
        </RadioPrimitive.Root>
    )
}

export { CardRadioGroup, CardRadioGroupItem }
