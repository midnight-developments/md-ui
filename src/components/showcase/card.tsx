import * as React from "react"
import { cn } from "@/lib/utils"

export function Card({ className, children, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="showcase-card"
            className={cn(
                "group/showcase-card cursor-pointer flex flex-col rounded-xl overflow-hidden bg-card border-2 border-white/5 hover:scale-101 hover:-translate-y-1 transition-all duration-200",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export interface CardImageProps extends React.ComponentProps<"div"> {
    src?: string
    alt?: string
}

export function CardImage({
    className,
    src,
    alt,
    children,
    ...props
}: CardImageProps) {
    return (
        <div
            data-slot="showcase-card-image"
            className={cn(
                "w-full aspect-[16/10] flex items-center justify-center overflow-hidden relative",
                className
            )}
            {...props}
        >
            {src ? (
                <img
                    src={src}
                    alt={alt ?? ""}
                    className="w-full h-full object-cover object-center"
                />
            ) : (
                children ?? null
            )}
        </div>
    )
}

export function CardTitle({ className, children, ...props }: React.ComponentProps<"h3">) {
    return (
        <h3
            data-slot="showcase-card-title"
            className={cn(
                "font-sf-display text-lg font-medium text-foreground ",
                className
            )}
            {...props}
        >
            {children}
        </h3>
    )
}

export function CardDescription({ className, children, ...props }: React.ComponentProps<"p">) {
    return (
        <p
            data-slot="showcase-card-description"
            className={cn(
                "text-base text-muted tracking-tight leading-relaxed",
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}

export function CardContent({ className, children, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="showcase-card-content"
            className={cn("p-4 flex flex-col gap-0.25", className)}
            {...props}
        >
            {children}
        </div>
    )
}

// Aliases with Showcase prefix if preferred
export {
    Card as ShowcaseCard,
    CardImage as ShowcaseCardImage,
    CardTitle as ShowcaseCardTitle,
    CardDescription as ShowcaseCardDescription,
    CardContent as ShowcaseCardContent,
}
