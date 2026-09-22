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

export function CardPreview({ className, children, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="showcase-card-preview"
            className={cn(
                "w-full aspect-[16/8] flex items-center justify-center overflow-hidden relative p-3 bg-white/[0.015] border-b border-white/6 pointer-events-none select-none",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export function CardTitle({ className, children, ...props }: React.ComponentProps<"h3">) {
    return (
        <h3
            data-slot="showcase-card-title"
            className={cn(
                "font-sf-display text-lg font-medium text-foreground",
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
