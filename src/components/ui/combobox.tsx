"use client"

import { Combobox as ComboboxPrimitive } from "@base-ui/react"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { PopupShell, PopupItem, PopupCheckIcon } from "@/components/ui/popup-shell"
import {
    InputGroup,
    InputGroupInput,
} from "@/components/ui/input-group"

const Combobox = ComboboxPrimitive.Root

function ComboboxTrigger({
    className,
    children,
    ...props
}: ComboboxPrimitive.Trigger.Props) {
    return (
        <ComboboxPrimitive.Trigger
            data-slot="combobox-trigger"
            className={cn(
                "flex items-center justify-center -mr-1 size-4 shrink-0 bg-transparent text-muted-foreground opacity-50 cursor-pointer outline-none group-hover/input-group:opacity-100 hover:opacity-100",
                "group-data-[popup-open]/input-group:rotate-180 data-[popup-open]:rotate-180",
                className
            )}
            {...props}
        >
            {children ?? <ChevronDownIcon aria-hidden="true" className="pointer-events-none size-4" />}
        </ComboboxPrimitive.Trigger>
    )
}

function ComboboxInput({
    className,
    children,
    disabled = false,
    showTrigger = true,
    ...props
}: ComboboxPrimitive.Input.Props & {
    showTrigger?: boolean
}) {
    return (
        <ComboboxPrimitive.InputGroup
            render={<InputGroup className={cn("w-full justify-between cursor-text", className)} />}
        >
            <ComboboxPrimitive.Input
                render={<InputGroupInput disabled={disabled} />}
                {...props}
            />
            {showTrigger && <ComboboxTrigger disabled={disabled} />}
            {children}
        </ComboboxPrimitive.InputGroup>
    )
}

function ComboboxContent({
    className,
    children,
    side = "bottom",
    sideOffset = 6,
    align = "start",
    alignOffset = 0,
    anchor,
    ...props
}: ComboboxPrimitive.Popup.Props &
    Pick<
        ComboboxPrimitive.Positioner.Props,
        "side" | "align" | "sideOffset" | "alignOffset" | "anchor"
    >) {
    return (
        <ComboboxPrimitive.Portal>
            <ComboboxPrimitive.Positioner
                side={side}
                sideOffset={sideOffset}
                align={align}
                alignOffset={alignOffset}
                anchor={anchor}
                className="isolate z-50"
            >
                <ComboboxPrimitive.Popup
                    data-slot="combobox-content"
                    className={cn("w-(--anchor-width)", className)}
                    render={<PopupShell />}
                    {...props}
                >
                    {children}
                </ComboboxPrimitive.Popup>
            </ComboboxPrimitive.Positioner>
        </ComboboxPrimitive.Portal>
    )
}

function ComboboxList({
    className,
    ...props
}: ComboboxPrimitive.List.Props) {
    return (
        <ComboboxPrimitive.List
            data-slot="combobox-list"
            className={cn("flex flex-col has-[>[data-slot=combobox-group]]:gap-2", className)}
            {...props}
        />
    )
}

function ComboboxItemIndicator({
    className,
    children,
    ...props
}: ComboboxPrimitive.ItemIndicator.Props) {
    return (
        <ComboboxPrimitive.ItemIndicator
            data-slot="combobox-item-indicator"
            className={cn("ml-auto flex items-center justify-center shrink-0 text-current", className)}
            {...props}
        >
            {children ?? <PopupCheckIcon />}
        </ComboboxPrimitive.ItemIndicator>
    )
}

function ComboboxItem({
    className,
    children,
    ...props
}: ComboboxPrimitive.Item.Props) {
    return (
        <ComboboxPrimitive.Item
            data-slot="combobox-item"
            className={className}
            render={<PopupItem />}
            {...props}
        >
            <span className="flex flex-1 shrink-0 items-center gap-2 whitespace-nowrap">
                {children}
            </span>
            <ComboboxItemIndicator />
        </ComboboxPrimitive.Item>
    )
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
    return (
        <ComboboxPrimitive.Group
            data-slot="combobox-group"
            className={cn("scroll-my-1", className)}
            {...props}
        />
    )
}

function ComboboxLabel({
    className,
    ...props
}: ComboboxPrimitive.GroupLabel.Props) {
    return (
        <ComboboxPrimitive.GroupLabel
            data-slot="combobox-label"
            className={cn("px-2 py-1.5 text-sm text-muted-foreground", className)}
            {...props}
        />
    )
}

function ComboboxEmpty({
    className,
    children,
    ...props
}: ComboboxPrimitive.Empty.Props) {
    return (
        <ComboboxPrimitive.Empty
            data-slot="combobox-empty"
            {...props}
        >
            <div
                className={cn(
                    "flex items-center justify-center py-4 text-center text-base text-secondary select-none",
                    className
                )}
            >
                {children ?? "No results found."}
            </div>
        </ComboboxPrimitive.Empty>
    )
}

function ComboboxSeparator({
    className,
    ...props
}: ComboboxPrimitive.Separator.Props) {
    return (
        <ComboboxPrimitive.Separator
            data-slot="combobox-separator"
            className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
            {...props}
        />
    )
}




export {
    Combobox,
    ComboboxInput,
    ComboboxContent,
    ComboboxList,
    ComboboxItem,
    ComboboxGroup,
    ComboboxLabel,
    ComboboxEmpty,
    ComboboxSeparator,
    ComboboxTrigger,
    ComboboxItemIndicator,
}
