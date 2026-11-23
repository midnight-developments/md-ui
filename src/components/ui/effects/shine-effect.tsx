import type * as React from "react"
import { cn } from "@/lib/utils"

export interface ShineEffectProps extends React.ComponentProps<"div"> {
    originX?: number
    originY?: number
    start?: number
    end?: number
    opacity?: number
    color?: string
    size?: string
    borderWidth?: number | string
}

export function ShineEffect({
    originX = 50,
    originY = 0,
    start = 0,
    end = 40,
    opacity,
    color = "white",
    size = "100% 100%",
    borderWidth = 1,
    className,
    style,
    ...props
}: ShineEffectProps) {
    const borderWidthStyle =
        typeof borderWidth === "number" ? `${borderWidth}px` : borderWidth

    return (
        <div
            aria-hidden="true"
            inert={true}
            data-slot="shine-effect"
            className={cn(
                "pointer-events-none select-none absolute inset-0 z-0 rounded-[inherit] transform-gpu backface-hidden",
                opacity === undefined && "opacity-40",
                className
            )}
            style={{
                border: `${borderWidthStyle} solid transparent`,
                background: `radial-gradient(ellipse ${size} at ${originX}% ${originY}%, ${color} ${start}%, transparent ${end}%) border-box`,
                WebkitMask:
                    "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                ...(opacity !== undefined ? { opacity } : {}),
                ...style,
            }}
            {...props}
        />
    )
}
