"use client"

import * as React from "react"
import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { cn } from "@/lib/utils"

function CardRadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
    return (
        <RadioGroupPrimitive
            data-slot="card-radio-group"
            className={cn("grid w-full gap-2.5 grid-cols-1 sm:grid-cols-2", className)}
            {...props}
        />
    )
}

function CardRadioGroupItem({
    className,
    children,
    ...props
}: RadioPrimitive.Root.Props) {
    return (
        <RadioPrimitive.Root
            data-slot="card-radio-group-item"
            className={cn(
                "group/card-radio peer relative flex items-start justify-between gap-3 p-3.5 rounded-md bg-card hover:bg-card-hover ring-1 ring-inset ring-border outline-none transition-snappy cursor-pointer select-none text-left",
                "focus-visible:ring-2 focus-visible:ring-border-active",
                "data-checked:ring-2 data-checked:ring-accent data-checked:bg-card-active",
                "disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        >
            <div className="flex flex-col gap-1 w-full">{children}</div>
            <RadioPrimitive.Indicator
                keepMounted
                data-slot="card-radio-group-indicator"
                className="flex size-4 shrink-0 aspect-square items-center justify-center rounded-full border border-white/20 bg-input pointer-events-none transition-snappy data-checked:border-accent mt-0.5"
            >
                <span className="size-2 rounded-full bg-accent transition-snappy data-unchecked:opacity-0 data-unchecked:scale-50 data-checked:opacity-100 data-checked:scale-100" />
            </RadioPrimitive.Indicator>
        </RadioPrimitive.Root>
    )
}

function CardRadioTitle({ className, ...props }: React.ComponentProps<"span">) {
    return (
        <span
            data-slot="card-radio-title"
            className={cn("text-sm font-medium text-foreground leading-snug", className)}
            {...props}
        />
    )
}

function CardRadioDescription({ className, ...props }: React.ComponentProps<"span">) {
    return (
        <span
            data-slot="card-radio-description"
            className={cn("text-xs text-muted leading-relaxed", className)}
            {...props}
        />
    )
}

export {
    CardRadioGroup,
    CardRadioGroupItem,
    CardRadioTitle,
    CardRadioDescription,
}
