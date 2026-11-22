"use client"

import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { cn } from "@/lib/utils"
import { Indicator, IndicatorActive } from "@/components/ui/indicator"
import { ShineEffect } from "@/components/ui/effects/shine-effect"

export interface RadioGroupProps extends RadioGroupPrimitive.Props { }

function RadioGroup({ className, ...props }: RadioGroupProps) {
    return (
        <RadioGroupPrimitive
            data-slot="radio-group"
            className={cn("grid w-full gap-3.5", className)}
            {...props}
        />
    )
}

export interface RadioGroupItemProps extends RadioPrimitive.Root.Props { }

function RadioGroupItem({ className, ...props }: RadioGroupItemProps) {
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

const columnClasses: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
}

export interface CardRadioGroupProps extends RadioGroupPrimitive.Props {
    columns?: number
}

function CardRadioGroup({
    className,
    columns = 2,
    ...props
}: CardRadioGroupProps) {
    return (
        <RadioGroupPrimitive
            data-slot="card-radio-group"
            className={cn("grid w-full gap-2.5", columnClasses[columns] ?? "grid-cols-2", className)}
            {...props}
        />
    )
}

export interface CardRadioGroupItemProps extends RadioPrimitive.Root.Props {
    showIndicator?: boolean
    indicatorPosition?: "top-right" | "right-center" | "left-center"
}

function CardRadioGroupItem({
    className,
    children,
    showIndicator = true,
    indicatorPosition = "right-center",
    ...props
}: CardRadioGroupItemProps) {
    const isLeft = indicatorPosition === "left-center"
    const isTop = indicatorPosition === "top-right"

    const indicatorElement = showIndicator && (
        <Indicator
            shape="circle"
            className={cn(isTop && "mt-0.5")}
        >
            <RadioPrimitive.Indicator render={<IndicatorActive />} />
        </Indicator>
    )

    return (
        <RadioPrimitive.Root
            data-slot="card-radio-group-item"
            className={cn(
                "group group/card-radio peer relative flex gap-3 p-3.5 rounded-lg outline-none cursor-pointer select-none text-left",
                "bg-card inset-ring inset-ring-border",
                "hover:not-data-[checked]:not-disabled:inset-ring-white/14",
                "data-[checked]:inset-ring-2 data-[checked]:inset-ring-accent data-[checked]:bg-card-active",
                "disabled:cursor-not-allowed disabled:opacity-50",
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
                className="opacity-0 group-data-[checked]:opacity-20"
            />

            {isLeft && indicatorElement}
            <div className="flex flex-col w-full">{children}</div>
            {!isLeft && indicatorElement}
        </RadioPrimitive.Root>
    )
}

export {
    RadioGroup,
    RadioGroupItem,
    CardRadioGroup,
    CardRadioGroupItem,
}
