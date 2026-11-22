import * as React from "react"
import { cn } from "@/lib/utils"

export interface BlurMirrorEffectProps extends React.ComponentProps<"div"> {
    children?: React.ReactNode
    contentClassName?: string
    scale?: number
    blurAmount?: number
    translateX?: number
    translateY?: number
}

export function BlurMirrorEffect({
    children,
    className,
    contentClassName,
    scale = 0.98,
    blurAmount = 14,
    translateX = 15,
    translateY = 15,
    ...props
}: BlurMirrorEffectProps) {
    const staticBackground = React.useMemo(() => children, [])

    return (
        <div
            aria-hidden="true"
            inert={true}
            data-slot="blur-mirror-effect"
            className={cn(
                "pointer-events-none select-none absolute inset-0 z-0 overflow-hidden",
                className
            )}
            {...props}
        >
            <div
                className={cn(
                    "absolute inset-0 pointer-events-none select-none overflow-hidden",
                    "origin-center opacity-38",
                    "[contain:strict] [content-visibility:auto]",
                    contentClassName
                )}
                style={{
                    transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                    filter: `blur(${blurAmount}px) brightness(0.6) saturate(0.8)`,
                }}
            >
                {staticBackground}
            </div>
        </div>
    )
}
