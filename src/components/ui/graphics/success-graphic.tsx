import type * as React from "react"
import { cn } from "@/lib/utils"
import CheckmarkCircleIcon from "@/assets/icons/checkmark-circle.svg?react"
import { ShineEffect } from "@/components/ui/effects/shine-effect"

export interface SuccessGraphicProps extends React.ComponentProps<"div"> { }

export function SuccessGraphic({
    className,
    ...props
}: SuccessGraphicProps) {
    return (
        <div
            data-slot="success-graphic"
            className={cn("relative inline-flex shrink-0 items-center justify-center size-16 mt-2 select-none", className)}
            {...props}
        >
            <div
                data-slot="success-graphic-back"
                className="pointer-events-none absolute inset-0 z-1 rounded-2xl bg-accent rotate-15 translate-x-[18%] -translate-y-[12%] origin-center"
            />

            <div
                data-slot="success-graphic-front"
                className="relative z-2 size-full flex items-center justify-center rounded-2xl inset-ring inset-ring-white/2 shadow-md bg-accent-text/20 backdrop-blur-md backdrop-saturate-120 backdrop-brightness-110 transform-gpu overflow-hidden"
            >
                <ShineEffect
                    start={0}
                    end={150}
                    opacity={0.3}
                />
                <CheckmarkCircleIcon
                    data-slot="success-graphic-icon"
                    className="size-1/2 drop-shadow-sm relative z-1"
                    aria-hidden="true"
                />
            </div>
        </div>
    )
}

export default SuccessGraphic
