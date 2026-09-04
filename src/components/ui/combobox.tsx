"use client"

import * as React from "react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react"
import { ChevronDownIcon, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { popupContentVariants, popupItemVariants } from "@/components/ui/popup.variants"
import { Button } from "@/components/ui/button"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group"

const Combobox = ComboboxPrimitive.Root

function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
    return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />
}

function ComboboxTrigger({
    className,
    children,
    ...props
}: ComboboxPrimitive.Trigger.Props) {
    return (
        <ComboboxPrimitive.Trigger
            data-slot="combobox-trigger"
            className={cn("group/trigger [&_svg:not([class*='size-'])]:size-4", className)}
            {...props}
        >
            {children}
            <ChevronDownIcon className="-mr-1 pointer-events-none size-4 text-muted-foreground transition-transform duration-200 group-data-[popup-open]/trigger:rotate-180 group-data-[state=open]/trigger:rotate-180" />
        </ComboboxPrimitive.Trigger>
    )
}

function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
    return (
        <ComboboxPrimitive.Clear data-slot="combobox-clear" className={cn(className)} {...props} render={<InputGroupButton className="size-6 p-0"><XIcon className="pointer-events-none size-3.5" /></InputGroupButton>} />
    )
}

function ComboboxInput({
    className,
    children,
    disabled = false,
    showTrigger = true,
    showClear = false,
    ...props
}: ComboboxPrimitive.Input.Props & {
    showTrigger?: boolean
    showClear?: boolean
}) {
    return (
        <ComboboxPrimitive.InputGroup
            render={<InputGroup className={cn("w-auto", className)} />}
        >
            <ComboboxPrimitive.Input
                render={<InputGroupInput disabled={disabled} />}
                {...props}
            />
            {(showTrigger || showClear) && (
                <InputGroupAddon align="inline-end">
                    {showTrigger && (
                        <InputGroupButton
                            render={<ComboboxTrigger />}
                            data-slot="input-group-button"
                            className="group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent size-6 p-0"
                            disabled={disabled}
                        />
                    )}
                    {showClear && <ComboboxClear disabled={disabled} />}
                </InputGroupAddon>
            )}
            {children}
        </ComboboxPrimitive.InputGroup>
    )
}

function ComboboxContent({
    className,
    children,
    side = "bottom",
    sideOffset = 6,
    align = "center",
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
                    data-chips={!!anchor}
                    data-align={align}
                    data-side={side}
                    className={cn(popupContentVariants(), "w-(--anchor-width)", className)}
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
            className={cn("no-scrollbar scroll-py-1 overflow-y-auto overscroll-contain", className)}
            {...props}
        />
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
            className={cn(popupItemVariants(), className)}
            {...props}
        >
            {children}
        </ComboboxPrimitive.Item>
    )
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
    return (
        <ComboboxPrimitive.Group
            data-slot="combobox-group"
            className={cn(className)}
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
            className={cn("px-2 py-1.5 text-xs text-muted-foreground", className)}
            {...props}
        />
    )
}

function ComboboxCollection({ ...props }: ComboboxPrimitive.Collection.Props) {
    return (
        <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
    )
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
    return (
        <ComboboxPrimitive.Empty
            data-slot="combobox-empty"
            className={cn(
                "hidden w-full justify-center py-2 text-center text-sm text-muted-foreground group-data-empty/combobox-content:flex",
                className
            )}
            {...props}
        />
    )
}

function ComboboxSeparator({
    className,
    ...props
}: ComboboxPrimitive.Separator.Props) {
    return (
        <ComboboxPrimitive.Separator
            data-slot="combobox-separator"
            className={cn("-mx-1 my-1 h-px bg-border", className)}
            {...props}
        />
    )
}

function ComboboxChips({
    className,
    ...props
}: React.ComponentPropsWithRef<typeof ComboboxPrimitive.Chips> &
    ComboboxPrimitive.Chips.Props) {
    return (
        <ComboboxPrimitive.Chips
            data-slot="combobox-chips"
            className={cn(
                "flex min-h-8 flex-wrap items-center gap-1 rounded-md border border-input bg-transparent bg-clip-padding px-2.5 py-1 text-sm transition-colors",
                "focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50",
                "has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20",
                "has-data-[slot=combobox-chip]:px-1 dark:bg-input/30",
                "dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:ring-destructive/40",
                className
            )}
            {...props}
        />
    )
}

function ComboboxChip({
    className,
    children,
    showRemove = true,
    ...props
}: ComboboxPrimitive.Chip.Props & {
    showRemove?: boolean
}) {
    return (
        <ComboboxPrimitive.Chip
            data-slot="combobox-chip"
            className={cn(
                "flex h-[calc(--spacing(5.25))] w-fit items-center justify-center gap-1 rounded-md bg-muted px-1.5 text-xs font-medium whitespace-nowrap text-foreground",
                "has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-[slot=combobox-chip-remove]:pr-0",
                className
            )}
            {...props}
        >
            {children}
            {showRemove && (
                <ComboboxPrimitive.ChipRemove className="-ml-1 opacity-50 hover:opacity-100" data-slot="combobox-chip-remove" render={<Button variant="ghost" className="size-4 p-0 rounded-full"><XIcon className="pointer-events-none size-3" /></Button>} />
            )}
        </ComboboxPrimitive.Chip>
    )
}

function ComboboxChipsInput({
    className,
    ...props
}: ComboboxPrimitive.Input.Props) {
    return (
        <ComboboxPrimitive.Input
            data-slot="combobox-chip-input"
            className={cn("min-w-16 flex-1 outline-none", className)}
            {...props}
        />
    )
}

function useComboboxAnchor() {
    return React.useRef<HTMLDivElement | null>(null)
}

export {
    Combobox,
    ComboboxInput,
    ComboboxContent,
    ComboboxList,
    ComboboxItem,
    ComboboxGroup,
    ComboboxLabel,
    ComboboxCollection,
    ComboboxEmpty,
    ComboboxSeparator,
    ComboboxChips,
    ComboboxChip,
    ComboboxChipsInput,
    ComboboxTrigger,
    ComboboxValue,
    useComboboxAnchor,
}
