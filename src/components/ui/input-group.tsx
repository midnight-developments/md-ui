"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="input-group"
            role="group"
            className={cn(
                "input-shell",
                "group/input-group",
                "has-[>[data-align^=block]]:h-auto has-[>[data-align^=block]]:flex-col",
                "has-[textarea]:h-auto",
                className
            )}
            {...props}
        />
    )
}

const inputGroupAddonVariants = cva(
    "flex h-auto items-center justify-center gap-2 text-base text-muted select-none [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            align: {
                "inline-start": "order-first",
                "inline-end": "order-last",
                "block-start": "order-first w-full justify-start pt-2 [.border-b]:pb-2",
                "block-end": "order-last w-full justify-start pb-2 [.border-t]:pt-2",
            },
        },
        defaultVariants: {
            align: "inline-start",
        },
    }
)

function InputGroupAddon({
    className,
    align = "inline-start",
    ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
    return (
        <div
            data-slot="input-group-addon"
            data-align={align}
            className={cn(inputGroupAddonVariants({ align }), className)}
            onMouseDown={(e) => e.preventDefault()}
            {...props}
        />
    )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
    return (
        <span
            className={cn("flex items-center gap-2 text-base text-muted", className)}
            {...props}
        />
    )
}

function InputGroupInput({ className, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            data-slot="input-group-control"
            className={cn(
                "h-full w-full flex-1 px-0 bg-transparent border-none text-base text-foreground placeholder:text-muted",
                className
            )}
            {...props}
        />
    )
}

function InputGroupTextarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="input-group-control"
            className={cn(
                "w-full flex-1 resize-none bg-transparent border-none py-2 text-base text-foreground placeholder:text-muted field-sizing-content min-h-16",
                className
            )}
            {...props}
        />
    )
}

export {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupInput,
    InputGroupTextarea,
}
