"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import CheckmarkIcon from "@/assets/icons/checkmark.svg?react"
import DashIcon from "@/assets/icons/dash.svg?react"
import styles from "./indicator.module.css"

const ICONS = {
    check: <CheckmarkIcon aria-hidden="true" className="size-3.5 text-white" />,
    dash: <DashIcon aria-hidden="true" className="size-3 text-white" />,
    dot: null,
}

export interface IndicatorActiveProps extends Omit<React.ComponentProps<"span">, "children"> {
    shape?: "circle" | "square"
    variant?: "dot" | "check" | "dash"
}

export function IndicatorActive({
    className,
    shape = "circle",
    variant = "dot",
    ...props
}: IndicatorActiveProps) {
    return (
        <span
            data-slot="indicator-active"
            className={cn(
                styles.activeIndicator,
                shape === "circle" ? "rounded-full" : "rounded-[3px]",
                variant === "dot" && styles.dot,
                "data-unchecked:hidden",
                className
            )}
            {...props}
        >
            {ICONS[variant]}
        </span>
    )
}

export interface IndicatorProps extends React.ComponentProps<"span"> {
    shape?: "circle" | "square"
    variant?: "dot" | "check" | "dash"
    indicatorClassName?: string
}

export function Indicator({
    className,
    shape = "circle",
    variant = "dot",
    indicatorClassName,
    children,
    ...props
}: IndicatorProps) {
    return (
        <span
            data-slot="indicator"
            className={cn(
                styles.indicator,
                shape === "circle" ? "rounded-full" : "rounded-[4px]",
                className
            )}
            {...props}
        >
            {children ?? (
                <IndicatorActive
                    shape={shape}
                    variant={variant}
                    className={indicatorClassName}
                />
            )}
        </span>
    )
}

Indicator.Active = IndicatorActive

export default Indicator
