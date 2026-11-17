import * as React from "react"
import { cn } from "@/lib/utils"
import CheckmarkCircleIcon from "@/assets/icons/checkmark-circle.svg?react"
import styles from "./success-graphic.module.css"

export interface SuccessGraphicProps extends React.ComponentProps<"div"> {
    /**
     * Size in pixels (or any valid CSS length string). Defaults to 64.
     */
    size?: number | string
}

export function SuccessGraphic({
    size = 64,
    className,
    style,
    ...props
}: SuccessGraphicProps) {
    const sizeStyle = typeof size === "number" ? `${size}px` : size

    return (
        <div
            data-slot="success-graphic"
            className={cn(styles.container, className)}
            style={
                {
                    "--graphic-size": sizeStyle,
                    ...style,
                } as React.CSSProperties
            }
            {...props}
        >
            {/* Layer 2: Angled solid colored rounded square in the back */}
            <div data-slot="success-graphic-back" className={styles.backCard} />

            {/* Layer 1: Glassmorphic blurred rounded square in front */}
            <div data-slot="success-graphic-front" className={styles.frontCard}>
                <CheckmarkCircleIcon
                    data-slot="success-graphic-icon"
                    className={cn("size-7", styles.icon)}
                    aria-hidden="true"
                />
            </div>
        </div>
    )
}
