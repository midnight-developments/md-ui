"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"

const DialogContext = React.createContext<{ open: boolean }>({ open: false })

function Dialog({
    open = false,
    onOpenChange,
    ...props
}: DialogPrimitive.Root.Props) {
    return (
        <DialogContext.Provider value={{ open }}>
            <DialogPrimitive.Root
                data-slot="dialog"
                open={open}
                onOpenChange={onOpenChange}
                {...props}
            />
        </DialogContext.Provider>
    )
}

function DialogPortal({ ...props }: DialogPrimitive.Portal.Props) {
    return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

const overlayVariants = {
    initial: { opacity: 0, backdropFilter: "blur(0px)" },
    animate: {
        opacity: 1,
        backdropFilter: "blur(4px)",
        transition: {
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1] as any
        }
    },
    exit: {
        opacity: 0,
        backdropFilter: "blur(0px)",
        transition: {
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1] as any
        }
    }
}

const contentVariants = {
    initial: { opacity: 0, scale: 0.97, x: "-50%", y: "-50%" },
    animate: {
        opacity: 1,
        scale: 1,
        x: "-50%",
        y: "-50%",
        transition: {
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1] as any
        }
    },
    exit: {
        opacity: 0,
        scale: 0.97,
        x: "-50%",
        y: "-50%",
        transition: {
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1] as any
        }
    }
}

function DialogOverlay({
    className,
    ...props
}: DialogPrimitive.Backdrop.Props) {
    return (
        <DialogPrimitive.Backdrop
            data-slot="dialog-overlay"
            render={
                <motion.div
                    variants={overlayVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={cn(
                        "fixed inset-0 z-50 bg-black/60",
                        className
                    )}
                />
            }
            {...props}
        />
    )
}

function DialogContent({
    className,
    children,
    ...props
}: DialogPrimitive.Popup.Props) {
    const { open } = React.useContext(DialogContext)

    return (
        <DialogPortal keepMounted>
            <AnimatePresence>
                {open && (
                    <DialogOverlay key="overlay" />
                )}
                {open && (
                    <DialogPrimitive.Popup
                        key="content"
                        data-slot="dialog-content"
                        render={
                            <motion.div
                                variants={contentVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className={cn(
                                    "fixed top-1/2 left-1/2 z-50 outline-none",
                                    "flex flex-col gap-4 p-4 rounded-md bg-card border border-border overflow-hidden",
                                    className
                                )}
                            />
                        }
                        {...props}
                    >
                        {children}
                    </DialogPrimitive.Popup>
                )}
            </AnimatePresence>
        </DialogPortal>
    )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="dialog-header"
            className={cn(
                "flex flex-col gap-0.5",
                className
            )}
            {...props}
        />
    )
}

function DialogTitle({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <DialogPrimitive.Title
            data-slot="dialog-title"
            className={cn(
                "text-lg text-foreground font-medium tracking-somewhat-tight leading-normal",
                className
            )}
            {...props}
        />
    )
}

function DialogTitleIcon({
    className,
    icon: Icon,
    ...props
}: React.ComponentProps<"div"> & {
    icon: React.ComponentType<{ className?: string }>
}) {
    return (
        <div
            data-slot="dialog-title-icon"
            className={cn(
                "flex p-1.5 items-center justify-center rounded-md bg-white/10",
                className
            )}
            {...props}
        >
            <Icon className="size-4" />
        </div>
    )
}

function DialogDescription({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <DialogPrimitive.Description
            data-slot="dialog-description"
            className={cn(
                "text-sm text-muted",
                className
            )}
            {...props}
        />
    )
}

function DialogBody({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="dialog-body"
            className={cn(
                "flex flex-col",
                className
            )}
            {...props}
        />
    )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="dialog-footer"
            className={cn(
                "flex items-center",
                className
            )}
            {...props}
        />
    )
}

export {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTitleIcon,
    DialogDescription,
    DialogBody,
    DialogFooter,
}
