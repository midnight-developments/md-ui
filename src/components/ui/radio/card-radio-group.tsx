"use client"

import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { cn } from "@/lib/utils"
import { RadioIndicator } from "./radio-indicator"
import advancedCardRadioGroupStyles from "./card-radio-group.module.css"

const columnClasses: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
}

const positionClasses = {
    "left-center": "items-center justify-start",
    "right-center": "items-center justify-between",
    "top-right": "items-start justify-between",
}

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
            className={cn("grid w-full gap-2.25", columnClasses[columns] ?? "grid-cols-2", className)}
            {...props}
        />
    )
}

function CardRadioGroupItem({
    className,
    children,
    showIndicator = true,
    indicatorPosition = "right-center",
    ...props
}: RadioPrimitive.Root.Props & {
    showIndicator?: boolean
    indicatorPosition?: "top-right" | "right-center" | "left-center"
}) {
    const isLeftCenter = indicatorPosition === "left-center"
    const isTopRight = indicatorPosition === "top-right"

    const indicatorElement = showIndicator && (
        <RadioIndicator
            variant="check"
            className={cn(isTopRight && "mt-0.5")}
        />
    )

    return (
        <RadioPrimitive.Root
            data-slot="card-radio-group-item"
            className={cn(
                "relative flex gap-3 p-3.5 rounded-md outline-none cursor-pointer select-none text-left transition-interactive ",
                "focus-visible:ring-2 focus-visible:ring-border-active",
                "disabled:cursor-not-allowed disabled:opacity-50",
                advancedCardRadioGroupStyles.card,
                positionClasses[indicatorPosition],
                className
            )}
            {...props}
        >
            {isLeftCenter ? (
                <>
                    {indicatorElement}
                    {children}
                </>
            ) : (
                <>
                    {children}
                    {indicatorElement}
                </>
            )}
        </RadioPrimitive.Root>
    )
}

export { CardRadioGroup, CardRadioGroupItem }
