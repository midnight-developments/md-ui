"use client"

import * as React from "react"
import { Popover as PopoverPrimitive } from "@base-ui/react/popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger

function PopoverContent({
    className,
    align = "start",
    alignOffset = 0,
    side = "bottom",
    sideOffset = 4,
    ...props
}: PopoverPrimitive.Popup.Props &
    Pick<
        PopoverPrimitive.Positioner.Props,
        "align" | "alignOffset" | "side" | "sideOffset"
    >) {
    return (
        <PopoverPrimitive.Portal>
            <PopoverPrimitive.Positioner
                align={align}
                alignOffset={alignOffset}
                side={side}
                sideOffset={sideOffset}
                className="isolate z-50"
            >
                <PopoverPrimitive.Popup
                    data-slot="popover-content"
                    data-align={align}
                    data-side={side}
                    className={cn(
                        "z-50 flex w-72 flex-col gap-2.5 rounded-md border border-border outline-hidden bg-black/40 text-foreground p-2.5 text-sm",
                        "shadow-xl animate-popup",
                        className
                    )}
                    {...props}
                />
            </PopoverPrimitive.Positioner>
        </PopoverPrimitive.Portal>
    )
}

function PopoverHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="popover-header"
            className={cn("flex flex-col gap-0.5 text-sm", className)}
            {...props}
        />
    )
}

function PopoverTitle({ className, ...props }: PopoverPrimitive.Title.Props) {
    return (
        <PopoverPrimitive.Title
            data-slot="popover-title"
            className={cn("font-medium", className)}
            {...props}
        />
    )
}

function PopoverDescription({
    className,
    ...props
}: PopoverPrimitive.Description.Props) {
    return (
        <PopoverPrimitive.Description
            data-slot="popover-description"
            className={cn("text-muted-foreground", className)}
            {...props}
        />
    )
}

export {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
}
