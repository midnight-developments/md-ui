import * as React from "react"
import { cn } from "@/lib/utils"

export interface BlurMirrorEffectProps extends React.ComponentProps<"div"> {
    children?: React.ReactNode
    contentClassName?: string
}

export function BlurMirrorEffect({
    children,
    className,
    contentClassName,
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
                    "scale-[0.98] translate-x-[15px] translate-y-[15px] origin-center",
                    "blur-[14px] brightness-[0.6] saturate-[0.8] opacity-38",
                    "[contain:strict] [content-visibility:auto]",
                    contentClassName
                )}
            >
                {staticBackground}
            </div>
        </div>
    )
}
