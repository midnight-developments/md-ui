"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input, inputShellVariants } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="input-group"
            role="group"
            className={cn(
                inputShellVariants(),
                "group/input-group relative gap-2.5 px-2.5",
                "has-[[data-slot=input-group-control]:is([aria-invalid=true],[data-invalid=true])]:ring-2 has-[[data-slot=input-group-control]:is([aria-invalid=true],[data-invalid=true])]:ring-destructive",
                "has-[>[data-align^=block]]:h-auto has-[>[data-align^=block]]:flex-col",
                "has-[[data-slot=textarea]]:h-auto",
                className
            )}
            {...props}
        />
    )
}

const inputGroupAddonVariants = cva(
    "flex h-auto cursor-text items-center justify-center gap-2 text-sm font-medium text-muted-foreground select-none [&_svg:not([class*='size-'])]:size-4.5 [&_svg]:text-muted [&_svg]:transition-colors [&_svg]:duration-200 group-hover/input-group:[&_svg]:text-primary group-focus-within/input-group:[&_svg]:text-primary",
    {
        variants: {
            align: {
                "inline-start":
                    "order-first",
                "inline-end":
                    "order-last",
                "block-start":
                    "order-first w-full justify-start pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
                "block-end":
                    "order-last w-full justify-start pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2",
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
            role="group"
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
    ...props
}: Omit<React.ComponentProps<typeof Button>, "type" | "variant"> & {
    type?: "button" | "submit" | "reset"
}) {
    return (
        <Button
            type={type}
            variant="ghost"
            className={cn(
                "flex items-center justify-center h-9 p-0 bg-transparent hover:bg-transparent! active:scale-100 hover:[&_svg]:text-foreground active:[&_svg]:text-foreground",
                className
            )}
            onMouseDown={(e) => e.preventDefault()}
            {...props}
        />
    )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
    return (
        <span
            className={cn(
                "flex items-center gap-2 text-sm text-muted [&_svg]:pointer-events-none",
                className
            )}
            {...props}
        />
    )
}

function InputGroupInput({
    className,
    ref,
    ...props
}: React.ComponentProps<typeof Input> & { ref?: React.Ref<HTMLInputElement> }) {
    return (
        <Input
            ref={ref}
            variant="ghost"
            data-slot="input-group-control"
            className={cn("h-full flex-1 rounded-none px-0", className)}
            {...props}
        />
    )
}

function InputGroupTextarea({
    className,
    ref,
    ...props
}: React.ComponentProps<typeof Textarea> & { ref?: React.Ref<HTMLTextAreaElement> }) {
    return (
        <Textarea
            ref={ref}
            data-slot="input-group-control"
            className={cn("flex-1 resize-none rounded-none py-2", className)}
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