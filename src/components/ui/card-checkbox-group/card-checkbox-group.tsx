"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group"
import { cn } from "@/lib/utils"
import advancedCardCheckboxStyles from "./card-checkbox-group.module.css"

function CardCheckboxGroup({
    className,
    columns = 2,
    ...props
}: CheckboxGroupPrimitive.Props & {
    columns?: number
}) {
    return (
        <CheckboxGroupPrimitive
            data-slot="card-checkbox-group"
            className={cn("grid w-full gap-2.5", `grid-cols-${columns}`, className)}
            {...props}
        />
    )
}

function CardCheckboxGroupItem({
    className,
    children,
    showIndicator = true,
    indicatorPosition = "right-center",
    ...props
}: CheckboxPrimitive.Root.Props & {
    showIndicator?: boolean
    indicatorPosition?: "top-right" | "right-center" | "left-center"
}) {
    const isLeftCenter = indicatorPosition === "left-center"
    const isTopRight = indicatorPosition === "top-right"

    const indicatorElement = showIndicator && (
        <div
            data-slot="card-checkbox-group-indicator"
            className={cn(advancedCardCheckboxStyles.indicator, isTopRight && "mt-0.5")}
        >
            <CheckboxPrimitive.Indicator
                keepMounted
                className={cn(
                    advancedCardCheckboxStyles.activeIndicator,
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
            </CheckboxPrimitive.Indicator>
        </div>
    )

    return (
        <CheckboxPrimitive.Root
            data-slot="card-checkbox-group-item"
            className={cn(
                "group/card-checkbox peer relative flex gap-3 p-3.5 rounded-md bg-card hover:bg-card-hover ring-1 ring-inset ring-border outline-none transition-snappy cursor-pointer select-none text-left",
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
        </CheckboxPrimitive.Root>
    )
}

export { CardCheckboxGroup, CardCheckboxGroupItem }
