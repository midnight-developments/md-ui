"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import "@/components/ui/dialog/dialog.css" // Required: loads rim-light-dialog used by PopupContent

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
    // Handle Escape key navigation
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

const overlayVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] as any }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.36, ease: [0.4, 0.15, 0.2, 1] as any }
    }
}

const contentVariants = {
    initial: { y: "100vh", filter: "blur(12px)" },
    animate: {
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] as any }
    },
    exit: {
        y: "100vh",
        filter: "blur(12px)",
        transition: { duration: 0.36, ease: [0.4, 0.15, 0.2, 1] as any }
    }
}

export function PopupOverlay({ className, ...props }: React.ComponentProps<typeof motion.div>) {
    const { onOpenChange } = React.useContext(PopupContext)
    return (
        <motion.div
            data-slot="showcase-popup-overlay"
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={() => onOpenChange?.(false)}
            className={cn(
                "fixed inset-0 z-50 bg-black/65 backdrop-blur-md cursor-pointer pointer-events-auto",
                className
            )}
            {...props}
        />
    )
}

export interface PopupContentProps extends Omit<React.ComponentProps<typeof motion.div>, "children"> {
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

    if (!mounted) return null

    return createPortal(
        <AnimatePresence>
            {open && (
                <div
                    key="popup-portal-container"
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 pointer-events-none overflow-hidden"
                >
                    <PopupOverlay key="popup-overlay" />
                    <motion.div
                        key="popup-card-dialog"
                        data-slot="showcase-popup-content"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="showcase-popup-title"
                        aria-describedby="showcase-popup-description"
                        variants={contentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                        className={cn(
                            "relative z-50 pointer-events-auto outline-none cursor-default",
                            "w-full max-w-5xl xl:max-w-6xl h-[86vh] max-h-[820px]",
                            "rounded-2xl surface-grain bg-card rim-light-dialog border border-white/10 shadow-2xl",
                            "text-foreground flex flex-col overflow-hidden will-change-[transform,filter]",
                            className
                        )}
                        {...props}
                    >
                        <div className="flex-1 flex flex-col lg:flex-row h-full w-full overflow-hidden">
                            {children}
                        </div>
                        {showCloseButton && (
                            <PopupClose
                                style={{ position: "absolute", zIndex: 9999 }}
                                className="!absolute top-4 right-4 sm:top-5 sm:right-5 lg:top-6 lg:right-6 !z-[9999]"
                            />
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
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
                "bg-white/5 hover:bg-white/10 active:scale-95 text-muted hover:text-foreground border border-white/8 hover:border-white/15",
                "transition-all duration-150 focus:outline-none backdrop-blur-sm",
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
                "flex-[1.8] flex flex-col overflow-y-auto overflow-x-hidden min-h-[320px] lg:min-h-0",
                "border-b lg:border-b-0 lg:border-r border-white/8",
                "bg-white/[0.01] relative [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.15)_transparent]",
                className
            )}
            {...props}
        >
            <div className="m-auto shrink-0 w-full flex flex-col items-center justify-center p-6 md:p-10 lg:p-12">
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
                "font-sf-display text-3xl sm:text-4xl font-semibold text-foreground tracking-tight leading-tight pr-8 sm:pr-10",
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
                "font-sf-text text-base sm:text-lg text-muted tracking-tight leading-normal",
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}

export interface CharacteristicItem {
    title?: React.ReactNode
    description: React.ReactNode
}

export interface PopupCharacteristicsProps extends React.ComponentProps<"div"> {
    heading?: string
    items?: CharacteristicItem[]
}

export function PopupCharacteristics({
    className,
    heading = "Key Characteristics",
    items,
    children,
    ...props
}: PopupCharacteristicsProps) {
    return (
        <div
            data-slot="showcase-popup-characteristics"
            className={cn("flex flex-col gap-4 mt-4 pt-8 border-t border-white/6", className)}
            {...props}
        >
            {heading && (
                <h4 className="font-sf-display text-xl font-semibold text-muted">
                    {heading}
                </h4>
            )}
            <ul className="flex flex-col gap-4 font-sf-text text-sm text-muted/90">
                {items
                    ? items.map((item, index) => (
                        <PopupCharacteristicItem key={index} title={item.title}>
                            {item.description}
                        </PopupCharacteristicItem>
                    ))
                    : children}
            </ul>
        </div>
    )
}

export interface PopupCharacteristicItemProps extends Omit<React.ComponentProps<"li">, "title"> {
    title?: React.ReactNode
}

export function PopupCharacteristicItem({
    className,
    title,
    children,
    ...props
}: PopupCharacteristicItemProps) {
    return (
        <li
            data-slot="showcase-popup-characteristic-item"
            className={cn("flex items-start gap-2.5 leading-relaxed", className)}
            {...props}
        >
            <Check className="size-6 text-accent shrink-0 mt-0.5" />
            <span className="text-base tracking-tight">
                {title && <strong className="text-foreground font-medium">{title}</strong>}
                <br></br>
                {children}
            </span>
        </li>
    )
}

