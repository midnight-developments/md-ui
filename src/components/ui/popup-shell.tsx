"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import CheckmarkIcon from "@/assets/icons/checkmark.svg?react"
import { ShineEffect } from "@/components/ui/effects/shine-effect"

const popupShellClasses = cn(
    "relative overflow-y-auto no-scrollbar rounded-[9px] p-1.75",
    "bg-[#161616] text-foreground inset-ring-2 inset-ring-white/[0.075] transform-gpu",
    "max-h-(--available-height) max-w-(--available-width)"
)

const popupItemClasses = cn(
    "flex w-full cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-base select-none",
    "text-secondary [&_svg]:text-muted [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    "data-highlighted:bg-accent/15 data-highlighted:text-accent-text data-highlighted:[&_svg]:text-current",
    "data-popup-open:bg-accent/15 data-popup-open:text-accent-text data-popup-open:[&_svg]:text-current",
    "data-[variant=destructive]:text-destructive data-[variant=destructive]:[&_svg]:text-destructive",
    "data-[variant=destructive]:data-highlighted:bg-destructive/15 data-[variant=destructive]:data-popup-open:bg-destructive/15",
    "data-disabled:pointer-events-none data-disabled:opacity-50"
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
            <ShineEffect
                start={-100}
                end={80}
                opacity={1}
                color="rgba(255, 255, 255, 0.5)"
            />
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
            className={cn("size-4.5 -mr-0.5 shrink-0 text-current", className)}
            {...props}
        />
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
