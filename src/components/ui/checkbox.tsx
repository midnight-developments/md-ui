"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group"
import { cn } from "@/lib/utils"
import { Indicator, IndicatorActive } from "@/components/ui/indicator"
import { ShineEffect } from "@/components/ui/effects/shine-effect"

export interface CheckboxGroupProps extends CheckboxGroupPrimitive.Props { }

function CheckboxGroup({ className, ...props }: CheckboxGroupProps) {
    return (
        <CheckboxGroupPrimitive
            data-slot="checkbox-group"
            className={cn("grid w-full gap-3.5", className)}
            {...props}
        />
    )
}

export interface CheckboxProps extends CheckboxPrimitive.Root.Props { }

function Checkbox({ className, ...props }: CheckboxProps) {
    return (
        <CheckboxPrimitive.Root
            data-slot="checkbox"
            className={cn(
                "inline-flex shrink-0 items-center justify-center cursor-pointer",
                className
            )}
            {...props}
        >
            <Indicator shape="square" className="size-4.25">
                <CheckboxPrimitive.Indicator render={<IndicatorActive />} />
            </Indicator>
        </CheckboxPrimitive.Root>
    )
}

const columnClasses: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
}

export interface CardCheckboxGroupProps extends CheckboxGroupPrimitive.Props {
    columns?: number
}

function CardCheckboxGroup({
    className,
    columns = 2,
    ...props
}: CardCheckboxGroupProps) {
    return (
        <CheckboxGroupPrimitive
            data-slot="card-checkbox-group"
            className={cn("grid w-full gap-2.5", columnClasses[columns] ?? "grid-cols-2", className)}
            {...props}
        />
    )
}

export interface CardCheckboxGroupItemProps extends CheckboxPrimitive.Root.Props {
    showIndicator?: boolean
    indicatorPosition?: "top-right" | "right-center" | "left-center"
}

function CardCheckboxGroupItem({
    className,
    children,
    showIndicator = true,
    indicatorPosition = "right-center",
    ...props
}: CardCheckboxGroupItemProps) {
    const isLeft = indicatorPosition === "left-center"
    const isTop = indicatorPosition === "top-right"

    const indicatorElement = showIndicator && (
        <Indicator
            shape="square"
            className={cn(isTop && "mt-0.5", "size-4.5")}
        >
            <CheckboxPrimitive.Indicator render={<IndicatorActive />} />
        </Indicator>
    )

    return (
        <CheckboxPrimitive.Root
            data-slot="card-checkbox-group-item"
            className={cn(
                "group/card-checkbox relative flex gap-3 p-3.5 rounded-lg cursor-pointer select-none text-left",
                "bg-card inset-ring inset-ring-border",
                "hover:not-data-checked:inset-ring-white/14",
                "data-checked:inset-ring-2 data-checked:inset-ring-accent data-checked:bg-card-active",
                isTop ? "items-start" : "items-center",
                isLeft ? "justify-start" : "justify-between",
                className
            )}
            {...props}
        >
            <ShineEffect
                originX={10}
                originY={0}
                start={20}
                end={120}
                borderWidth={2}
                className="opacity-0 group-data-checked:opacity-20"
            />

            {isLeft && indicatorElement}
            <div className="flex flex-col w-full">{children}</div>
            {!isLeft && indicatorElement}
        </CheckboxPrimitive.Root>
    )
}

export {
    Checkbox,
    CheckboxGroup,
    CardCheckboxGroup,
    CardCheckboxGroupItem,
}
