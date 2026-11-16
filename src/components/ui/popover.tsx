"use client"

import * as React from "react"
import { Popover as PopoverPrimitive } from "@base-ui/react/popover"
import { cn } from "@/lib/utils"
import { PopupShell } from "@/components/ui/shells/popup-shell/popup-shell"

function Popover({ ...props }: PopoverPrimitive.Root.Props) {
    return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({ ...props }: PopoverPrimitive.Trigger.Props) {
    return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
    className,
    children,
    align = "center",
    alignOffset = 0,
    side = "bottom",
    sideOffset = 6,
    anchor,
    finalFocus = false,
    ...props
}: PopoverPrimitive.Popup.Props &
    Pick<
        PopoverPrimitive.Positioner.Props,
        "align" | "alignOffset" | "side" | "sideOffset" | "anchor"
    >) {
    return (
        <PopoverPrimitive.Portal>
            <PopoverPrimitive.Positioner
                align={align}
                alignOffset={alignOffset}
                side={side}
                sideOffset={sideOffset}
                anchor={anchor}
                className="isolate z-50"
            >
                <PopoverPrimitive.Popup
                    data-slot="popover-content"
                    finalFocus={finalFocus}
                    className={cn("flex flex-col w-72 gap-2.5 p-3", className)}
                    render={<PopupShell />}
                    {...props}
                >
                    {children}
                </PopoverPrimitive.Popup>
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
