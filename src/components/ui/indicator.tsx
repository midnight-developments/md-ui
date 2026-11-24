import * as React from "react"
import { cn } from "@/lib/utils"
import CheckmarkIcon from "@/assets/icons/checkmark.svg?react"
import DashIcon from "@/assets/icons/dash.svg?react"
import { ShineEffect } from "@/components/ui/effects/shine-effect"

const ICONS = {
    check: CheckmarkIcon,
    dash: DashIcon,
}

export interface IndicatorActiveProps extends Omit<React.ComponentProps<"span">, "children"> {
    variant?: "check" | "dash"
    iconClassName?: string
}

export function IndicatorActive({
    className,
    variant = "check",
    iconClassName,
    ...props
}: IndicatorActiveProps) {
    const Icon = ICONS[variant]
    return (
        <span
            data-slot="indicator-active"
            className={cn(
                "size-full flex items-center justify-center rounded-[inherit]",
                "bg-indicator-active inset-ring inset-ring-white/15",
                "data-unchecked:hidden",
                className
            )}
            {...props}
        >
            <ShineEffect start={20} end={120} opacity={0.4} className="transform-none backface-visible" />
            <Icon
                aria-hidden="true"
                className={cn(
                    "size-full text-white shrink-0",
                    "group-data-[shape=circle]/indicator:size-4",
                    "group-data-[shape=square]/indicator:size-full",
                    iconClassName
                )}
            />
        </span>
    )
}

export interface IndicatorProps extends React.ComponentProps<"span"> {
    shape?: "circle" | "square"
}

export function Indicator({
    className,
    shape = "circle",
    children,
    ...props
}: IndicatorProps) {
    return (
        <span
            data-slot="indicator"
            data-shape={shape}
            className={cn(
                "group/indicator relative inline-flex size-4 shrink-0 items-center justify-center border-0 pointer-events-none select-none overflow-hidden",
                "bg-input inset-ring inset-ring-white/10",
                shape === "circle" ? "rounded-full" : "rounded-sm",
                className
            )}
            {...props}
        >
            {children}
        </span>
    )
}
