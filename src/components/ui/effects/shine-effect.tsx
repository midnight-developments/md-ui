import * as React from "react"
import { cn } from "@/lib/utils"

export interface ShineEffectProps extends React.ComponentProps<"div"> {
    originX?: number
    originY?: number
    start?: number
    end?: number
    opacity?: number
}

export function ShineEffect({
    originX = 50,
    originY = 0,
    start = 0,
    end = 40,
    opacity = 0.4,
    className,
    style,
    ...props
}: ShineEffectProps) {
    return (
        <div
            aria-hidden="true"
            inert={true}
            data-slot="shine-effect"
            className={cn(
                "pointer-events-none select-none absolute inset-0 z-0 rounded-[inherit]",
                className
            )}
            style={{
                border: "1px solid transparent",
                background: `radial-gradient(ellipse 100% 100% at ${originX}% ${originY}%, white ${start}%, transparent ${end}%) border-box`,
                WebkitMask:
                    "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                opacity,
                ...style,
            }}
            {...props}
        />
    )
}
