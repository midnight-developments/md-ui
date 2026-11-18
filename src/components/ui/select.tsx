"use client"

import { Select as SelectPrimitive } from "@base-ui/react/select"

import { cn } from "@/lib/utils"
import { inputShellClasses, TriggerChevron } from "@/components/ui/shells/input-shell/input-shell"
import {
    PopupShell,
    PopupItem,
    PopupItemText,
    PopupCheckIcon,
    PopupSeparator,
    PopupLabel,
} from "@/components/ui/shells/popup-shell/popup-shell"

const Select = SelectPrimitive.Root

function SelectTrigger({
    className,
    children,
    ...props
}: SelectPrimitive.Trigger.Props) {
    return (
        <SelectPrimitive.Trigger
            data-slot="select-trigger"
            className={cn(inputShellClasses, "group/trigger cursor-pointer", className)}
            {...props}
        >
            {children}
            <TriggerChevron />
        </SelectPrimitive.Trigger>
    )
}


function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
    return (
        <SelectPrimitive.Value
            data-slot="select-value"
            className={cn("flex flex-1 items-center gap-2 line-clamp-1 text-left", className)}
            {...props}
        />
    )
}

function SelectContent({
    className,
    children,
    side = "bottom",
    sideOffset = 6,
    align = "start",
    alignOffset = 0,
    anchor,
    alignItemWithTrigger = false,
    finalFocus = false,
    ...props
}: SelectPrimitive.Popup.Props &
    Pick<
        SelectPrimitive.Positioner.Props,
        "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger" | "anchor"
    >) {
    return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Positioner
                side={side}
                sideOffset={sideOffset}
                align={align}
                alignOffset={alignOffset}
                anchor={anchor}
                alignItemWithTrigger={alignItemWithTrigger}
                className="isolate z-50"
            >
                <SelectPrimitive.Popup
                    data-slot="select-content"
                    finalFocus={finalFocus}
                    className={cn("w-(--anchor-width)", className)}
                    render={<PopupShell />}
                    {...props}
                >
                    <SelectPrimitive.List
                        data-slot="select-list"
                        className="flex flex-col has-[>[data-slot=select-group]]:gap-2"
                    >
                        {children}
                    </SelectPrimitive.List>
                </SelectPrimitive.Popup>
            </SelectPrimitive.Positioner>
        </SelectPrimitive.Portal>
    )
}

function SelectGroup({ className, ...props }: SelectPrimitive.Group.Props) {
    return (
        <SelectPrimitive.Group
            data-slot="select-group"
            className={cn("scroll-my-1", className)}
            {...props}
        />
    )
}

function SelectLabel({
    inset,
    ...props
}: SelectPrimitive.GroupLabel.Props & {
    inset?: boolean
}) {
    return (
        <SelectPrimitive.GroupLabel
            data-slot="select-label"
            data-inset={inset}
            render={<PopupLabel inset={inset} />}
            {...props}
        />
    )
}

function SelectItem({
    className,
    children,
    inset,
    variant = "default",
    ...props
}: SelectPrimitive.Item.Props & {
    inset?: boolean
    variant?: "default" | "destructive"
}) {
    return (
        <SelectPrimitive.Item
            data-slot="select-item"
            data-inset={inset}
            data-variant={variant}
            className={className}
            render={<PopupItem variant={variant} className={cn(inset && "pl-7")} />}
            {...props}
        >
            <SelectPrimitive.ItemText render={<PopupItemText />}>
                {children}
            </SelectPrimitive.ItemText>
            <SelectPrimitive.ItemIndicator>
                <PopupCheckIcon />
            </SelectPrimitive.ItemIndicator>
        </SelectPrimitive.Item>
    )
}

function SelectSeparator(props: SelectPrimitive.Separator.Props) {
    return (
        <SelectPrimitive.Separator
            data-slot="select-separator"
            render={<PopupSeparator />}
            {...props}
        />
    )
}

export {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem,
    SelectSeparator,
}
