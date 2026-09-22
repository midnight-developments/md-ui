"use client"

import { Select as SelectPrimitive } from "@base-ui/react/select"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { inputVariants, type InputShellVariantProps } from "@/components/ui/input/input.variants"
import { popupContentVariants, popupItemVariants } from "@/components/ui/popup/popup.variants"

function Select<Value, Multiple extends boolean | undefined = false>({
    modal = false,
    onOpenChange,
    onOpenChangeComplete,
    ...props
}: SelectPrimitive.Root.Props<Value, Multiple>) {
    return (
        <SelectPrimitive.Root
            modal={modal}
            onOpenChange={(open, eventDetails) => {
                onOpenChange?.(open, eventDetails)
                if (!open && (eventDetails?.reason === "escape-key" || eventDetails?.reason === "outside-press")) {
                    if (document.activeElement instanceof HTMLElement) {
                        document.activeElement.blur()
                    }
                }
            }}
            onOpenChangeComplete={(open) => {
                onOpenChangeComplete?.(open)
                if (!open) {
                    if (document.activeElement instanceof HTMLElement) {
                        document.activeElement.blur()
                    }
                }
            }}
            {...props}
        />
    )
}

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
    variant = "default",
    children,
    onKeyDown,
    ...props
}: SelectPrimitive.Trigger.Props & InputShellVariantProps) {
    return (
        <SelectPrimitive.Trigger
            data-slot="select-trigger"
            onKeyDown={(e) => {
                onKeyDown?.(e)
                if (e.key === "Escape") {
                    e.currentTarget.blur()
                }
            }}
            className={cn(
                inputVariants({ variant }),
                "group/trigger justify-between cursor-pointer focus:not-focus-visible:ring-1 focus:not-focus-visible:ring-border",
                "*:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 *:data-[slot=select-value]:line-clamp-1",
                className
            )}
            {...props}
        >
            {children}
            <SelectPrimitive.Icon
                render={<ChevronDownIcon className="-mr-1 opacity-50 pointer-events-none size-4 text-muted-foreground transition-snappy group-data-[popup-open]/trigger:rotate-180 group-data-[state=open]/trigger:rotate-180" />}
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
    finalFocus = false,
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
                    finalFocus={finalFocus}
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
            className={cn("px-1.5 py-1 text-sm text-muted-foreground", className)}
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