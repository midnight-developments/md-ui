"use client"

import { Select as SelectPrimitive } from "@base-ui/react/select"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

function SelectGroup({ className, ...props }: SelectPrimitive.Group.Props) {
    return (
        <SelectPrimitive.Group
            data-slot="select-group"
            className={cn("scroll-my-1 p-1", className)}
            {...props}
        />
    )
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
    return (
        <SelectPrimitive.Value
            data-slot="select-value"
            className={cn("flex flex-1 text-left", className)}
            {...props}
        />
    )
}

function SelectTrigger({
    className,
    children,
    ...props
}: SelectPrimitive.Trigger.Props) {
    return (
        <SelectPrimitive.Trigger
            data-slot="select-trigger"
            className={cn(
                "h-9 w-full min-w-0 flex items-center justify-between gap-1.5 text-sm leading-none rounded ring-2 ring-inset ring-border hover:ring-border-hover  bg-white/5 px-2.5 outline-none transition-all duration-200 cursor-pointer select-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-placeholder:text-muted *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                className
            )}
            {...props}
        >
            {children}
            <SelectPrimitive.Icon
                render={
                    <ChevronDownIcon className="pointer-events-none size-4 text-muted-foreground" />
                }
            />
        </SelectPrimitive.Trigger>
    )
}

function SelectContent({
    className,
    children,
    side = "bottom",
    sideOffset = 8,
    align = "start",
    alignOffset = 0,
    alignItemWithTrigger = false,
    ...props
}: SelectPrimitive.Popup.Props &
    Pick<
        SelectPrimitive.Positioner.Props,
        "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger"
    >) {
    return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Positioner
                side={side}
                sideOffset={sideOffset}
                align={align}
                alignOffset={alignOffset}
                alignItemWithTrigger={alignItemWithTrigger}
                className="isolate z-50"
            >
                <SelectPrimitive.Popup
                    data-slot="select-content"
                    data-align-trigger={alignItemWithTrigger}
                    className={cn(
                        "relative isolate z-50 max-h-(--available-height) min-w-(--anchor-width) overflow-x-hidden overflow-y-auto rounded bg-black/40 backdrop-blur-xl text-foreground shadow-xl border-2 border-border outline-hidden duration-500",
                        "origin-(--transform-origin)",
                        "data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                        "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
                        "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
                        className
                    )}
                    {...props}
                >
                    <SelectPrimitive.List className="p-1">{children}</SelectPrimitive.List>
                </SelectPrimitive.Popup>
            </SelectPrimitive.Positioner>
        </SelectPrimitive.Portal>
    )
}

function SelectLabel({
    className,
    ...props
}: SelectPrimitive.GroupLabel.Props) {
    return (
        <SelectPrimitive.GroupLabel
            data-slot="select-label"
            className={cn("px-1.5 py-1 text-xs text-muted-foreground", className)}
            {...props}
        />
    )
}

function SelectItem({
    className,
    children,
    ...props
}: SelectPrimitive.Item.Props) {
    return (
        <SelectPrimitive.Item
            data-slot="select-item"
            className={cn(
                `relative flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-sm font-medium outline-hidden select-none transition-colors duration-150 text-muted 
                data-[highlighted]:bg-white/5 data-[highlighted]:text-foreground
                data-[selected]:bg-accent/15 data-[selected]:text-accent-active data-[selected]:font data-[selected]:data-[highlighted]:bg-accent/20
                data-disabled:pointer-events-none data-disabled:opacity-50
                [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg]:text-muted
                data-[selected]:[&_svg]:text-accent-active`,
                className
            )}
            {...props}
        >
            <SelectPrimitive.ItemText className="flex flex-1 shrink-0 items-center gap-2 whitespace-nowrap">
                {children}
            </SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    )
}

function SelectSeparator({
    className,
    ...props
}: SelectPrimitive.Separator.Props) {
    return (
        <SelectPrimitive.Separator
            data-slot="select-separator"
            className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
            {...props}
        />
    )
}

export {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
}
