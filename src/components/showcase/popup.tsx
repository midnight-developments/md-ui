"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const PopupContext = React.createContext<{
    open: boolean
    onOpenChange?: (open: boolean) => void
}>({ open: false })

export interface PopupProps {
    open?: boolean
    onOpenChange?: (open: boolean) => void
    children?: React.ReactNode
}

export function Popup({
    open = false,
    onOpenChange,
    children,
}: PopupProps) {
    React.useEffect(() => {
        if (!open) return
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onOpenChange?.(false)
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [open, onOpenChange])

    return (
        <PopupContext.Provider value={{ open, onOpenChange }}>
            {children}
        </PopupContext.Provider>
    )
}

export function PopupOverlay({ className, ...props }: React.ComponentProps<"div">) {
    const { onOpenChange } = React.useContext(PopupContext)
    return (
        <div
            data-slot="showcase-popup-overlay"
            onClick={() => onOpenChange?.(false)}
            className={cn(
                "fixed inset-0 z-50 bg-black/65 backdrop-blur-md cursor-pointer pointer-events-auto",
                className
            )}
            {...props}
        />
    )
}

export interface PopupContentProps extends React.ComponentProps<"div"> {
    children?: React.ReactNode
    showCloseButton?: boolean
}

export function PopupContent({
    className,
    children,
    showCloseButton = true,
    ...props
}: PopupContentProps) {
    const { open } = React.useContext(PopupContext)
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted || !open) return null

    return createPortal(
        <div
            key="popup-portal-container"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 pointer-events-none overflow-hidden"
        >
            <PopupOverlay key="popup-overlay" />
            <div
                key="popup-card-dialog"
                data-slot="showcase-popup-content"
                role="dialog"
                aria-modal="true"
                aria-labelledby="showcase-popup-title"
                aria-describedby="showcase-popup-description"
                onClick={(e) => e.stopPropagation()}
                className={cn(
                    "relative z-50 pointer-events-auto cursor-default",
                    "w-full max-w-5xl xl:max-w-6xl h-[90vh] max-h-[920px]",
                    "rounded-2xl bg-card border border-white/10 text-foreground flex flex-col overflow-hidden",
                    className
                )}
                {...props}
            >
                <div className="flex-1 flex flex-col lg:flex-row h-full w-full overflow-hidden">
                    {children}
                </div>
                {showCloseButton && (
                    <PopupClose className="absolute top-4 right-4 sm:top-5 sm:right-5 lg:top-6 lg:right-6 z-50" />
                )}
            </div>
        </div>,
        document.body
    )
}

export function PopupClose({ className, children, onClick, style, ...props }: React.ComponentProps<"button">) {
    const { onOpenChange } = React.useContext(PopupContext)
    return (
        <button
            type="button"
            data-slot="showcase-popup-close"
            onClick={(e) => {
                e.stopPropagation()
                onClick?.(e)
                onOpenChange?.(false)
            }}
            style={style}
            className={cn(
                "cursor-pointer inline-flex items-center justify-center size-9 rounded-full pointer-events-auto",
                "bg-white/5 hover:bg-white/10 text-muted hover:text-foreground border border-white/8 hover:border-white/15",
                "backdrop-blur-sm",
                className
            )}
            aria-label="Close"
            {...props}
        >
            {children ?? <X className="size-4" />}
        </button>
    )
}

export function PopupPreview({ className, children, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="showcase-popup-preview"
            className={cn(
                "flex-[1.8] flex flex-col items-center justify-start p-6 md:p-8 lg:p-10",
                "border-b lg:border-b-0 lg:border-r border-white/8",
                "bg-white/[0.01] relative overflow-y-auto min-h-[320px] lg:min-h-0",
                className
            )}
            {...props}
        >
            <div className="w-full flex justify-center my-auto">
                {children}
            </div>
        </div>
    )
}

export function PopupDetails({ className, children, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="showcase-popup-details"
            className={cn(
                "flex-1 flex flex-col justify-start p-6 md:p-10 lg:p-12 overflow-y-auto no-scrollbar gap-4 bg-transparent",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export function PopupTitle({ className, children, ...props }: React.ComponentProps<"h2">) {
    return (
        <h2
            id="showcase-popup-title"
            data-slot="showcase-popup-title"
            className={cn(
                "text-3xl sm:text-4xl font-semibold text-foreground leading-tight pr-8 sm:pr-10",
                className
            )}
            {...props}
        >
            {children}
        </h2>
    )
}

export function PopupDescription({ className, children, ...props }: React.ComponentProps<"p">) {
    return (
        <p
            id="showcase-popup-description"
            data-slot="showcase-popup-description"
            className={cn(
                "text-base sm:text-lg text-muted leading-normal",
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}

