"use client"

import * as React from "react"
import { Menu as MenuPrimitive } from "@base-ui/react/menu"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = MenuPrimitive.Root

function DropdownMenuPortal({ ...props }: MenuPrimitive.Portal.Props) {
    return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
}

function DropdownMenuTrigger({ ...props }: MenuPrimitive.Trigger.Props) {
    return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />
}

function DropdownMenuContent({
    className,
    children,
    side = "bottom",
    sideOffset = 6,
    align = "center",
    alignOffset = 0,
    ...props
}: MenuPrimitive.Popup.Props &
    Pick<
        MenuPrimitive.Positioner.Props,
        "align" | "alignOffset" | "side" | "sideOffset"
    >) {
    return (
        <MenuPrimitive.Portal>
            <MenuPrimitive.Positioner
                side={side}
                sideOffset={sideOffset}
                align={align}
                alignOffset={alignOffset}
                className="isolate z-50"
            >
                <MenuPrimitive.Popup
                    data-slot="dropdown-menu-content"
                    data-align={align}
                    data-side={side}
                    className={cn(
                        "relative overflow-x-hidden overflow-y-auto rounded border border-border outline-hidden bg-black/40 text-foreground",
                        "max-h-(--available-height) min-w-(--anchor-width)",
                        "shadow-xl animate-popup p-1",
                        className
                    )}
                    {...props}
                >
                    {children}
                </MenuPrimitive.Popup>
            </MenuPrimitive.Positioner>
        </MenuPrimitive.Portal>
    )
}

function DropdownMenuGroup({ className, ...props }: MenuPrimitive.Group.Props) {
    return (
        <MenuPrimitive.Group
            data-slot="dropdown-menu-group"
            className={cn("scroll-my-1 p-1", className)}
            {...props}
        />
    )
}

function DropdownMenuLabel({
    className,
    inset,
    ...props
}: MenuPrimitive.GroupLabel.Props & {
    inset?: boolean
}) {
    return (
        <MenuPrimitive.GroupLabel
            data-slot="dropdown-menu-label"
            data-inset={inset}
            className={cn(
                "px-2 py-1.5 text-xs text-muted-foreground data-inset:pl-7",
                className
            )}
            {...props}
        />
    )
}

function DropdownMenuItem({
    className,
    inset,
    variant = "default",
    ...props
}: MenuPrimitive.Item.Props & {
    inset?: boolean
    variant?: "default" | "destructive"
}) {
    return (
        <MenuPrimitive.Item
            data-slot="dropdown-menu-item"
            data-inset={inset}
            data-variant={variant}
            className={cn(
                "relative flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-sm font-medium text-muted outline-hidden select-none transition-colors duration-150",
                "data-[highlighted]:bg-white/5 data-[highlighted]:text-foreground",
                "data-[selected]:bg-accent/15 data-[selected]:text-accent-active data-[selected]:data-[highlighted]:bg-accent/20",
                "data-disabled:pointer-events-none data-disabled:opacity-50",
                "data-[variant=destructive]:text-destructive data-[variant=destructive]:data-[highlighted]:bg-destructive/10 data-[variant=destructive]:data-[highlighted]:text-destructive",
                "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg]:text-muted data-[selected]:[&_svg]:text-accent-active data-[variant=destructive]:[&_svg]:text-destructive",
                className
            )}
            {...props}
        />
    )
}

function DropdownMenuSub({ ...props }: MenuPrimitive.SubmenuRoot.Props) {
    return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
    className,
    inset,
    children,
    ...props
}: MenuPrimitive.SubmenuTrigger.Props & {
    inset?: boolean
}) {
    return (
        <MenuPrimitive.SubmenuTrigger
            data-slot="dropdown-menu-sub-trigger"
            data-inset={inset}
            className={cn(
                "relative flex w-full cursor-pointer items-center justify-between gap-2 rounded px-2 py-1.5 text-sm font-medium text-muted outline-hidden select-none transition-colors duration-150",
                "data-[highlighted]:bg-white/5 data-[highlighted]:text-foreground data-[popup-open]:bg-white/5 data-[popup-open]:text-foreground",
                "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg]:text-muted",
                className
            )}
            {...props}
        >
            {children}
            <ChevronRightIcon className="ml-auto size-4" />
        </MenuPrimitive.SubmenuTrigger>
    )
}

function DropdownMenuSubContent({
    align = "start",
    alignOffset = -3,
    side = "right",
    sideOffset = 0,
    className,
    ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
    return (
        <DropdownMenuContent
            data-slot="dropdown-menu-sub-content"
            className={cn("w-auto min-w-[96px]", className)}
            align={align}
            alignOffset={alignOffset}
            side={side}
            sideOffset={sideOffset}
            {...props}
        />
    )
}

function DropdownMenuCheckboxItem({
    className,
    children,
    checked,
    inset,
    ...props
}: MenuPrimitive.CheckboxItem.Props & {
    inset?: boolean
}) {
    return (
        <MenuPrimitive.CheckboxItem
            data-slot="dropdown-menu-checkbox-item"
            data-inset={inset}
            className={cn(
                "relative flex w-full cursor-pointer items-center gap-2 rounded py-1.5 pr-8 pl-2 text-sm font-medium text-muted outline-hidden select-none transition-colors duration-150",
                "data-[highlighted]:bg-white/5 data-[highlighted]:text-foreground",
                "data-disabled:pointer-events-none data-disabled:opacity-50",
                "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                className
            )}
            checked={checked}
            {...props}
        >
            <span
                className="pointer-events-none absolute right-2 flex items-center justify-center size-4"
                data-slot="dropdown-menu-checkbox-item-indicator"
            >
                <MenuPrimitive.CheckboxItemIndicator render={<CheckIcon className="size-4 text-accent-active" />} />
            </span>
            {children}
        </MenuPrimitive.CheckboxItem>
    )
}

function DropdownMenuRadioGroup({ ...props }: MenuPrimitive.RadioGroup.Props) {
    return (
        <MenuPrimitive.RadioGroup
            data-slot="dropdown-menu-radio-group"
            {...props}
        />
    )
}

function DropdownMenuRadioItem({
    className,
    children,
    inset,
    ...props
}: MenuPrimitive.RadioItem.Props & {
    inset?: boolean
}) {
    return (
        <MenuPrimitive.RadioItem
            data-slot="dropdown-menu-radio-item"
            data-inset={inset}
            className={cn(
                "relative flex w-full cursor-pointer items-center gap-2 rounded py-1.5 pr-8 pl-2 text-sm font-medium text-muted outline-hidden select-none transition-colors duration-150",
                "data-[highlighted]:bg-white/5 data-[highlighted]:text-foreground",
                "data-[selected]:bg-accent/15 data-[selected]:text-accent-active data-[selected]:data-[highlighted]:bg-accent/20",
                "data-disabled:pointer-events-none data-disabled:opacity-50",
                "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg]:text-muted data-[selected]:[&_svg]:text-accent-active",
                className
            )}
            {...props}
        >
            <span
                className="pointer-events-none absolute right-2 flex items-center justify-center size-4"
                data-slot="dropdown-menu-radio-item-indicator"
            >
                <MenuPrimitive.RadioItemIndicator render={<CheckIcon className="size-4 text-accent-active" />} />
            </span>
            {children}
        </MenuPrimitive.RadioItem>
    )
}

function DropdownMenuSeparator({
    className,
    ...props
}: MenuPrimitive.Separator.Props) {
    return (
        <MenuPrimitive.Separator
            data-slot="dropdown-menu-separator"
            className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
            {...props}
        />
    )
}

function DropdownMenuShortcut({
    className,
    ...props
}: React.ComponentProps<"span">) {
    return (
        <span
            data-slot="dropdown-menu-shortcut"
            className={cn(
                "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
                className
            )}
            {...props}
        />
    )
}

export {
    DropdownMenu,
    DropdownMenuPortal,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
}
