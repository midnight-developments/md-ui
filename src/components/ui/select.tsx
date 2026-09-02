"use client"

import { Select as SelectPrimitive } from "@base-ui/react/select"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { inputVariants } from "@/components/ui/input.variants"
import { popupContentVariants, popupItemVariants } from "@/components/ui/popup.variants"

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
                inputVariants(),
                "group/trigger justify-between cursor-pointer",
                "*:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 *:data-[slot=select-value]:line-clamp-1",
                className
            )}
            {...props}
        >
            {children}
            <SelectPrimitive.Icon
                render={<ChevronDownIcon className="-mr-0.5 opacity-50 pointer-events-none size-4 text-muted-foreground transition-transform duration-200 group-data-[popup-open]/trigger:rotate-180 group-data-[state=open]/trigger:rotate-180" />}
            />
        </SelectPrimitive.Trigger>
    )
}

function SelectContent({
    className,
    children,
    side = "bottom",
    sideOffset = 8,
    align = "center",
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
                    data-align={align}
                    data-side={side}
                    className={cn(popupContentVariants(), className)}
                    {...props}
                >
                    <SelectPrimitive.List data-slot="select-list">
                        {children}
                    </SelectPrimitive.List>
                </SelectPrimitive.Popup>
            </SelectPrimitive.Positioner>
        </SelectPrimitive.Portal>
    )
}

function SelectLabel({ className, ...props }: SelectPrimitive.GroupLabel.Props) {
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
            className={cn(popupItemVariants(), className)}
            {...props}
        >
            <SelectPrimitive.ItemText className="flex flex-1 shrink-0 items-center gap-2 whitespace-nowrap">
                {children}
            </SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    )
}

function SelectSeparator({ className, ...props }: SelectPrimitive.Separator.Props) {
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