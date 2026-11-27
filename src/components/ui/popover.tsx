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
    sideOffset,
    anchor,
    finalFocus = true,
    showCarat = false,
    ...props
}: PopoverPrimitive.Popup.Props &
    Pick<
        PopoverPrimitive.Positioner.Props,
        "align" | "alignOffset" | "side" | "sideOffset" | "anchor"
    > & {
        showCarat?: boolean
    }) {
    const resolvedSideOffset = sideOffset ?? (showCarat ? 14 : 6)

    return (
        <PopoverPrimitive.Portal>
            <PopoverPrimitive.Positioner
                align={align}
                alignOffset={alignOffset}
                side={side}
                sideOffset={resolvedSideOffset}
                anchor={anchor}
                className="isolate z-50"
            >
                <PopoverPrimitive.Popup
                    data-slot="popover-content"
                    finalFocus={finalFocus}
                    className={cn(
                        "flex flex-col w-72 gap-2.5 p-4",
                        showCarat && "overflow-visible",
                        className
                    )}
                    render={<PopupShell />}
                    {...props}
                >
                    {showCarat && (
                        <PopoverPrimitive.Arrow
                            data-slot="popover-carat"
                            className={cn(
                                "pointer-events-none z-10 size-3.5 rotate-45 rounded-tl-[3px] border-t border-l border-(--dialog-border) bg-(--dialog-bg)",
                                "data-[side=bottom]:-top-[7px] data-[side=top]:rotate-[225deg]",
                                "data-[side=top]:-bottom-[7px] data-[side=bottom]:border-white/25",
                                "data-[side=left]:-right-[7px] data-[side=left]:rotate-[135deg]",
                                "data-[side=right]:-left-[7px] data-[side=right]:-rotate-45"
                            )}
                        />
                    )}
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
            className={cn("flex flex-col gap-1.75", className)}
            {...props}
        />
    )
}

function PopoverTitle({ className, ...props }: PopoverPrimitive.Title.Props) {
    return (
        <PopoverPrimitive.Title
            data-slot="popover-title"
            className={cn("font-medium leading-tight", className)}
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
            className={cn("text-muted text-sm", className)}
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
