"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="input-group"
            role="group"
            className={cn(
                "group/input-group relative flex h-9 w-full min-w-0 items-center rounded bg-white/5 outline-none transition-all duration-200",
                "ring-2 ring-inset ring-border hover:ring-border-hover focus-within:ring-border-active focus-within:hover:ring-border-active",
                "has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50",
                "group-data-[invalid=true]/field:ring-destructive group-data-[invalid=true]/field:hover:ring-destructive group-data-[invalid=true]/field:focus-within:ring-destructive",
                "has-[[data-slot=input-group-control][aria-invalid=true]]:ring-destructive has-[[data-slot=input-group-control][aria-invalid=true]]:hover:ring-destructive has-[[data-slot=input-group-control][aria-invalid=true]]:focus-within:ring-destructive",
                "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col",
                "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col",
                "has-[>textarea]:h-auto",
                "has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3",
                "has-[>[data-align=inline-end]]:[&>input]:pr-2 has-[>[data-align=inline-start]]:[&>input]:pl-1.5",
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
                    "order-first pl-2.5",
                "inline-end":
                    "order-last pr-2.5",
                "block-start":
                    "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
                "block-end":
                    "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2",
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
            onClick={(e) => {
                if ((e.target as HTMLElement).closest("button")) {
                    return
                }
                e.currentTarget.parentElement?.querySelector("input")?.focus()
            }}
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
                "flex items-center justify-center h-9 p-0 bg-transparent hover:bg-transparent! active:scale-100 group-hover/button:[&_svg]:text-foreground!",
                className
            )}
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
            data-slot="input-group-control"
            className={cn(
                "flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 hover:ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 focus:ring-0 group-data-[invalid=true]/field:ring-0 group-data-[invalid=true]/field:hover:ring-0 group-data-[invalid=true]/field:focus-visible:ring-0",
                className
            )}
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
            className={cn(
                "flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 hover:ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 focus:ring-0 group-data-[invalid=true]/field:ring-0 group-data-[invalid=true]/field:hover:ring-0 group-data-[invalid=true]/field:focus-visible:ring-0",
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