"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import CheckmarkIcon from "@/assets/icons/checkmark.svg?react"
import advancedPopupStyles from "./popup-shell.module.css"

const popupShellClasses = cn(
    advancedPopupStyles.shell,
    "overflow-y-auto no-scrollbar rounded-[9px] p-2 px-1.75",
    "max-h-(--available-height) max-w-(--available-width)"
)

const popupItemClasses = cn(
    advancedPopupStyles.item,
    "flex w-full cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-base select-none",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
)

export interface PopupShellProps extends React.ComponentProps<"div"> { }

export function PopupShell({ className, children, ref, ...props }: PopupShellProps) {
    return (
        <div
            data-slot="popup-shell"
            ref={ref}
            className={cn(popupShellClasses, className)}
            {...props}
        >
            {children}
        </div>
    )
}

export interface PopupItemProps extends React.ComponentProps<"div"> {
    variant?: "default" | "destructive"
}

export function PopupItem({
    className,
    variant = "default",
    children,
    ...props
}: PopupItemProps) {
    return (
        <div
            data-slot="popup-item"
            data-variant={variant !== "default" ? variant : undefined}
            className={cn(popupItemClasses, className)}
            {...props}
        >
            {children}
        </div>
    )
}

export function PopupItemText({ className, ...props }: React.ComponentProps<"span">) {
    return (
        <span
            data-slot="popup-item-text"
            className={cn("flex flex-1 shrink-0 items-center gap-2 whitespace-nowrap", className)}
            {...props}
        />
    )
}

export function PopupCheckIcon({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <CheckmarkIcon
            aria-hidden="true"
            className={cn("size-4.5 shrink-0 text-current", className)}
            {...props}
        />
    )
}

export function PopupItemIndicator({ className, children, ...props }: React.ComponentProps<"span">) {
    return (
        <span
            data-slot="popup-item-indicator"
            className={cn("ml-auto flex items-center justify-center shrink-0 text-current", className)}
            {...props}
        >
            {children ?? <PopupCheckIcon />}
        </span>
    )
}

export function PopupLabel({
    className,
    inset,
    ...props
}: React.ComponentProps<"div"> & { inset?: boolean }) {
    return (
        <div
            data-slot="popup-label"
            data-inset={inset}
            className={cn("px-2 py-1.5 text-sm text-muted-foreground data-inset:pl-7", className)}
            {...props}
        />
    )
}

export function PopupSeparator({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            role="separator"
            data-slot="popup-separator"
            className={cn("pointer-events-none -mx-1.75 my-1 h-px bg-border", className)}
            {...props}
        />
    )
}
