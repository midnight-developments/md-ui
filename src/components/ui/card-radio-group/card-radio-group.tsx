"use client"

import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { cn } from "@/lib/utils"
import advancedCardRadioGroupStyles from "./card-radio-group.module.css"

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
    indicatorPosition = "right-center",
    ...props
}: RadioPrimitive.Root.Props & {
    showIndicator?: boolean
    indicatorPosition?: "top-right" | "right-center" | "left-center"
}) {
    const isLeftCenter = indicatorPosition === "left-center"
    const isTopRight = indicatorPosition === "top-right"

    const indicatorElement = showIndicator && (
        <div
            data-slot="card-radio-group-indicator"
            className={cn(advancedCardRadioGroupStyles.indicator, isTopRight && "mt-0.5")}
        >
            <RadioPrimitive.Indicator
                keepMounted
                className={cn(
                    advancedCardRadioGroupStyles.activeIndicator,
                    "transition-snappy data-unchecked:opacity-0 data-checked:opacity-100"
                )}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-3.5 text-white"
                >
                    <path d="M5 13l4.5 4.5L19 7" />
                </svg>
            </RadioPrimitive.Indicator>
        </div>
    )

    return (
        <RadioPrimitive.Root
            data-slot="card-radio-group-item"
            className={cn(
                "group/card-radio peer relative flex gap-3 p-3.5 rounded-md bg-card hover:bg-card-hover ring-1 ring-inset ring-border outline-none transition-snappy cursor-pointer select-none text-left",
                "focus-visible:ring-2 focus-visible:ring-border-active",
                "data-checked:ring-2 data-checked:ring-accent data-checked:bg-card-active",
                "disabled:cursor-not-allowed disabled:opacity-50",
                isLeftCenter
                    ? "items-center justify-start"
                    : indicatorPosition === "right-center"
                        ? "items-center justify-between"
                        : "items-start justify-between",
                className
            )}
            {...props}
        >
            {isLeftCenter ? (
                <>
                    {indicatorElement}
                    <div className="flex flex-col w-full">{children}</div>
                </>
            ) : (
                <>
                    <div className="flex flex-col w-full">{children}</div>
                    {indicatorElement}
                </>
            )}
        </RadioPrimitive.Root>
    )
}

export { CardRadioGroup, CardRadioGroupItem }
