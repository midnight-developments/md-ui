"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import advancedPopupStyles from "./popup-shell.module.css"

const popupShellClasses = [
    advancedPopupStyles.shell,
    "overflow-y-auto no-scrollbar rounded-md outline-hidden p-1.5",
    "max-h-(--available-height) min-w-(--anchor-width) max-w-(--available-width)",
    "transition-popup",
    "data-[align=start]:origin-top-left data-[align=end]:origin-top-right data-[align=center]:origin-top data-[side=top]:data-[align=start]:origin-bottom-left data-[side=top]:data-[align=end]:origin-bottom-right data-[side=top]:data-[align=center]:origin-bottom",
    "[&:is([data-ending-style],[data-closed])]:pointer-events-none",
    "[&:is([data-starting-style],[data-ending-style])]:opacity-0",
    "[&:is([data-starting-style],[data-ending-style])]:scale-95",
    "[&:is([data-starting-style],[data-ending-style])[data-side=bottom]]:-translate-y-2",
    "[&:is([data-starting-style],[data-ending-style])[data-side=top]]:translate-y-2",
    "[&:is([data-starting-style],[data-ending-style])[data-side=left]]:translate-x-2",
    "[&:is([data-starting-style],[data-ending-style])[data-side=right]]:-translate-x-2",
].join(" ")

const popupItemClasses = [
    "relative z-10 flex w-full cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-base font-medium text-muted outline-hidden select-none transition-snappy",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg]:text-muted [&_svg]:transition-snappy",
    "data-[selected]:text-accent-text data-[selected]:[&_svg]:text-current",
    "data-[highlighted]:text-accent-text hover:text-accent-text data-[highlighted]:[&_svg]:text-current hover:[&_svg]:text-current",
    "data-[variant=destructive]:text-destructive data-[variant=destructive]:data-[highlighted]:text-destructive data-[variant=destructive]:hover:text-destructive",
    "data-[variant=destructive]:[&_svg]:text-destructive",
    "data-disabled:pointer-events-none data-disabled:opacity-50",
].join(" ")

export interface PopupShellProps extends Omit<React.ComponentProps<"div">, "className"> {
    className?: any
}

export const PopupShell = React.forwardRef<HTMLDivElement, PopupShellProps>(
    function PopupShell({ className, children, onMouseMove, onMouseLeave, ...props }, forwardedRef) {
        const shellRef = React.useRef<HTMLDivElement>(null)

        const setPosition = (item: HTMLElement | null) => {
            const shell = shellRef.current
            if (!shell) return
            if (item) {
                shell.style.setProperty("--pill-y", `${item.offsetTop}px`)
                shell.style.setProperty("--pill-h", `${item.offsetHeight}px`)
                shell.style.setProperty("--pill-opacity", "1")
            } else {
                shell.style.setProperty("--pill-opacity", "0")
            }
        }

        React.useEffect(() => {
            const selected = shellRef.current?.querySelector<HTMLElement>('[data-selected], [data-highlighted]')
            if (selected) {
                shellRef.current?.style.setProperty("--pill-transition", "none")
                setPosition(selected)
                requestAnimationFrame(() => {
                    shellRef.current?.style.removeProperty("--pill-transition")
                })
            }
        }, [])

        const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            onMouseMove?.(e)
            const item = (e.target as HTMLElement).closest<HTMLElement>('[data-slot="popup-item"], [data-slot="select-item"], [role="option"]')
            if (item) setPosition(item)
        }

        const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
            onMouseLeave?.(e)
            const selected = shellRef.current?.querySelector<HTMLElement>('[data-selected]')
            setPosition(selected ?? null)
        }

        return (
            <div
                data-slot="popup-shell"
                ref={(node) => {
                    shellRef.current = node
                    if (typeof forwardedRef === "function") forwardedRef(node)
                    else if (forwardedRef) (forwardedRef as any).current = node
                }}
                className={cn(popupShellClasses, className)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                {...props}
            >
                <div
                    data-slot="popup-indicator"
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1.5 right-1.5 top-0 rounded-sm bg-accent/20 z-0"
                    style={{
                        transform: "translate3d(0, var(--pill-y, 0px), 0)",
                        height: "var(--pill-h, 0px)",
                        opacity: "var(--pill-opacity, 0)",
                        transition: "var(--pill-transition, transform var(--duration-snappy) var(--ease-snappy), height var(--duration-snappy) var(--ease-snappy), opacity var(--duration-snappy) var(--ease-snappy))",
                    }}
                />
                {children}
            </div>
        )
    }
)

export interface PopupItemProps extends Omit<React.ComponentProps<"div">, "className"> {
    className?: any
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
