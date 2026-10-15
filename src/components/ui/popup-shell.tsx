"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import advancedPopupStyles from "./popup-shell.module.css"

const popupShellClasses = cn(
    advancedPopupStyles.shell,
    "overflow-y-auto no-scrollbar rounded-md outline-hidden p-1.5",
    "max-h-(--available-height) min-w-(--anchor-width) max-w-(--available-width) transition-popup",
    "data-[align=start]:origin-top-left data-[align=end]:origin-top-right data-[align=center]:origin-top",
    "data-[side=top]:data-[align=start]:origin-bottom-left data-[side=top]:data-[align=end]:origin-bottom-right data-[side=top]:data-[align=center]:origin-bottom",
    "[&:is([data-ending-style],[data-closed])]:pointer-events-none",
    "[&:is([data-starting-style],[data-ending-style])]:opacity-0 [&:is([data-starting-style],[data-ending-style])]:scale-95",
    "[&:is([data-starting-style],[data-ending-style])[data-side=bottom]]:-translate-y-2",
    "[&:is([data-starting-style],[data-ending-style])[data-side=top]]:translate-y-2",
    "[&:is([data-starting-style],[data-ending-style])[data-side=left]]:translate-x-2",
    "[&:is([data-starting-style],[data-ending-style])[data-side=right]]:-translate-x-2"
)

const popupItemClasses = cn(
    "relative z-10 flex w-full cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-base font-medium text-muted outline-hidden select-none transition-snappy",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg]:text-muted [&_svg]:transition-snappy",
    "data-[selected]:text-accent-text data-[checked]:text-accent-text data-[highlighted]:text-accent-text hover:text-accent-text",
    "data-[selected]:[&_svg]:text-current data-[checked]:[&_svg]:text-current data-[highlighted]:[&_svg]:text-current hover:[&_svg]:text-current",
    "data-[variant=destructive]:text-destructive data-[variant=destructive]:[&_svg]:text-destructive",
    "data-disabled:pointer-events-none data-disabled:opacity-50"
)

export interface PopupShellProps extends React.ComponentProps<"div"> { }

export const PopupShell = React.forwardRef<HTMLDivElement, PopupShellProps>(
    function PopupShell({ className, children, onMouseMove, onMouseLeave, ...props }, forwardedRef) {
        const internalRef = React.useRef<HTMLDivElement>(null)

        const setPosition = (item: HTMLElement | null) => {
            const el = internalRef.current
            if (!el) return
            if (item) {
                el.style.setProperty("--pill-y", `${item.offsetTop}px`)
                el.style.setProperty("--pill-h", `${item.offsetHeight}px`)
                el.style.setProperty("--pill-opacity", "1")
            } else {
                el.style.setProperty("--pill-opacity", "0")
            }
        }

        const getActiveItem = () => {
            const el = internalRef.current
            if (!el) return null
            return (
                el.querySelector<HTMLElement>("[data-highlighted]") ??
                el.querySelector<HTMLElement>("[data-selected], [data-checked]")
            )
        }

        React.useEffect(() => {
            const shell = internalRef.current
            if (!shell) return

            const updatePill = (immediate = false) => {
                const target = getActiveItem()
                if (immediate) {
                    shell.style.setProperty("--pill-transition", "none")
                    setPosition(target)
                    requestAnimationFrame(() => {
                        shell.style.removeProperty("--pill-transition")
                    })
                } else {
                    setPosition(target)
                }
            }

            updatePill(true)

            const observer = new MutationObserver(() => updatePill(false))
            observer.observe(shell, {
                subtree: true,
                attributes: true,
                attributeFilter: ["data-highlighted", "data-selected", "data-checked"],
            })

            return () => observer.disconnect()
        }, [])

        const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            onMouseMove?.(e)
            const item = (e.target as HTMLElement).closest<HTMLElement>(
                '[data-slot="popup-item"], [data-slot="select-item"], [role="option"]'
            )
            if (item) setPosition(item)
        }

        const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
            onMouseLeave?.(e)
            setPosition(getActiveItem())
        }

        return (
            <div
                data-slot="popup-shell"
                ref={(node) => {
                    internalRef.current = node
                    if (typeof forwardedRef === "function") forwardedRef(node)
                    else if (forwardedRef) forwardedRef.current = node
                }}
                className={cn(popupShellClasses, className)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                {...props}
            >
                <div
                    data-slot="popup-indicator"
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1.5 right-1.5 top-0 z-0 rounded-sm bg-accent/20"
                    style={{
                        transform: "translate3d(0, var(--pill-y, 0px), 0)",
                        height: "var(--pill-h, 0px)",
                        opacity: "var(--pill-opacity, 0)",
                        transition:
                            "var(--pill-transition, transform var(--duration-snappy) var(--ease-snappy), height var(--duration-snappy) var(--ease-snappy), opacity var(--duration-snappy) var(--ease-snappy))",
                    }}
                />
                {children}
            </div>
        )
    }
)

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

export function PopupCheckIcon({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("size-4.5 shrink-0 text-current", className)}
            {...props}
        >
            <path d="M5 13l4.5 4.5L19 7" />
        </svg>
    )
}