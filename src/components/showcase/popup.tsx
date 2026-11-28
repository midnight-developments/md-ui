"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const POPUP_EASE = [0.22, 1, 0.36, 1] as const

const POPUP_TRANSITION = {
    duration: 0.22,
    ease: POPUP_EASE,
} as const

export type PopupProps = Pick<DialogPrimitive.Root.Props, "open" | "onOpenChange" | "children">

const Popup = DialogPrimitive.Root

function PopupOverlay({
    className,
    ...props
}: DialogPrimitive.Backdrop.Props) {
    return (
        <DialogPrimitive.Backdrop
            data-slot="showcase-popup-overlay"
            render={(backdropProps) => (
                <motion.div
                    {...(backdropProps as React.ComponentProps<typeof motion.div>)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={POPUP_TRANSITION}
                />
            )}
            className={cn(
                "fixed inset-0 isolate z-50 bg-black/65 backdrop-blur-md cursor-pointer",
                className
            )}
            {...props}
        />
    )
}

export interface PopupContentProps extends DialogPrimitive.Popup.Props {
    showCloseButton?: boolean
}

function PopupContent({
    className,
    children,
    showCloseButton = true,
    ...props
}: PopupContentProps) {
    return (
        <DialogPrimitive.Portal>
            <PopupOverlay />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 pointer-events-none">
                <DialogPrimitive.Popup
                    data-slot="showcase-popup-content"
                    render={(popupProps) => (
                        <motion.div
                            {...(popupProps as React.ComponentProps<typeof motion.div>)}
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={POPUP_TRANSITION}
                        />
                    )}
                    className={cn(
                        "relative z-50 pointer-events-auto cursor-default outline-none",
                        "w-full max-w-[80vw] h-[90vh] max-h-[920px]",
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
                </DialogPrimitive.Popup>
            </div>
        </DialogPrimitive.Portal>
    )
}

function PopupClose({
    className,
    children,
    ...props
}: DialogPrimitive.Close.Props) {
    return (
        <DialogPrimitive.Close
            data-slot="showcase-popup-close"
            aria-label="Close"
            className={cn(
                "cursor-pointer inline-flex items-center justify-center size-9 rounded-full",
                "bg-white/5 hover:bg-white/10 text-muted hover:text-foreground border border-white/8 hover:border-white/15",
                "backdrop-blur-sm",
                className
            )}
            {...props}
        >
            {children ?? <X className="size-4" />}
        </DialogPrimitive.Close>
    )
}

function PopupPreview({ className, children, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="showcase-popup-preview"
            className={cn(
                "flex-1 min-w-0 flex flex-col items-center justify-start p-6 md:p-8 lg:p-10",
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

function PopupDetails({ className, children, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="showcase-popup-details"
            className={cn(
                "flex-1 min-w-0 flex flex-col justify-start p-6 md:p-10 lg:p-12 overflow-y-auto no-scrollbar gap-4 bg-transparent",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

function PopupTitle({ className, ...props }: DialogPrimitive.Title.Props) {
    return (
        <DialogPrimitive.Title
            data-slot="showcase-popup-title"
            className={cn(
                "text-3xl sm:text-4xl font-semibold text-foreground leading-tight pr-8 sm:pr-10",
                className
            )}
            {...props}
        />
    )
}

function PopupDescription({ className, ...props }: DialogPrimitive.Description.Props) {
    return (
        <DialogPrimitive.Description
            data-slot="showcase-popup-description"
            className={cn(
                "text-base sm:text-lg text-muted leading-normal",
                className
            )}
            {...props}
        />
    )
}

export interface KeyboardInteraction {
    keys: React.ReactNode
    description: string
}

export interface PopupKeyboardInteractionsProps extends React.ComponentProps<"div"> {
    title?: string
    items: KeyboardInteraction[]
}

function PopupKeyboardInteractions({
    className,
    title = "Keyboard interactions",
    items,
    ...props
}: PopupKeyboardInteractionsProps) {
    return (
        <div
            data-slot="showcase-popup-keyboard-interactions"
            className={cn("mt-4 flex flex-col gap-3", className)}
            {...props}
        >
            <h3 className="text-2xl font-medium text-foreground">{title}</h3>
            <div className="rounded-xl border border-white/8 bg-white/[0.02] divide-y divide-white/8">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="grid grid-cols-[minmax(140px,180px)_1fr] items-start justify-items-start gap-4 px-4 py-3"
                    >
                        {item.keys}
                        <p className="text-sm sm:text-base text-secondary leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export {
    Popup,
    PopupOverlay,
    PopupContent,
    PopupClose,
    PopupPreview,
    PopupDetails,
    PopupTitle,
    PopupDescription,
    PopupKeyboardInteractions,
}
