"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="input-group"
            role="group"
            className={cn(
                "input-shell px-0 gap-0",
                "group/input-group",
                "has-[>[data-align=inline-start]]:[&>input]:pl-2",
                "has-[>[data-align=inline-end]]:[&>input]:pr-2",
                "has-[>[data-align^=block]]:h-auto has-[>[data-align^=block]]:flex-col",
                "has-[>[data-align=block-start]]:[&>input]:pt-3",
                "has-[>[data-align=block-end]]:[&>input]:pb-3",
                "has-[textarea]:h-auto",
                className
            )}
            {...props}
        />
    )
}

const inputGroupAddonVariants = cva(
    "flex h-auto items-center justify-center gap-2 text-base text-muted select-none [&_svg:not([class*='size-'])]:size-4 border-white/5",
    {
        variants: {
            align: {
                "inline-start": "order-first pl-2.5",
                "inline-end": "order-last pr-2.5",
                "block-start": "order-first w-full justify-start px-2.5 pt-2 [.border-b]:pb-2",
                "block-end": "order-last w-full justify-start px-2.5 pb-2 [.border-t]:pt-2",
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

function InputGroupButton({
    className,
    type = "button",
    variant = "ghost",
    ...props
}: React.ComponentProps<typeof Button>) {
    return (
        <Button
            type={type}
            variant={variant}
            className={cn(
                "size-6 h-4 rounded-xs px-0 w-fit hover:bg-transparent text-muted hover:text-foreground",
                className
            )}
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
                "h-full pb-px w-full flex-1 px-2.5 bg-transparent border-none text-base text-foreground placeholder:text-muted",
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
                "w-full flex-1 resize-none bg-transparent border-none px-2.5 py-1.5 text-base text-foreground placeholder:text-muted field-sizing-content min-h-16",
                className
            )}
            {...props}
        />
    )
}

export {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupText,
    InputGroupInput,
    InputGroupTextarea,
}
