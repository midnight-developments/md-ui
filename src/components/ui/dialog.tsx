"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"

const DialogContext = React.createContext<{ open: boolean }>({ open: false })

function Dialog({
    open = false,
    onOpenChange,
    modal = "trap-focus",
    ...props
}: DialogPrimitive.Root.Props) {
    return (
        <DialogContext.Provider value={{ open }}>
            <DialogPrimitive.Root
                data-slot="dialog"
                open={open}
                onOpenChange={onOpenChange}
                modal={modal}
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
            duration: 0.25,
            ease: [0.16, 1, 0.3, 1] as any
        }
    },
    exit: {
        opacity: 0,
        backdropFilter: "blur(0px)",
        transition: {
            duration: 0.2,
            ease: [0.16, 1, 0.3, 1] as any
        }
    }
}

const contentVariants = {
    initial: { opacity: 0, scale: 0.97 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.25,
            ease: [0.16, 1, 0.3, 1] as any
        }
    },
    exit: {
        opacity: 0,
        scale: 0.97,
        transition: {
            duration: 0.2,
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
                        "fixed inset-0 z-50 bg-black/60 pointer-events-auto",
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
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <DialogOverlay key="overlay" />
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
                                        "relative z-50 outline-none pointer-events-auto",
                                        "flex flex-col gap-4 p-6 rounded-xl surface-grain bg-card rim-light overflow-hidden",
                                        className
                                    )}
                                />
                            }
                            {...props}
                        >
                            {children}
                        </DialogPrimitive.Popup>
                    </div>
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
                "flex flex-col  gap-2 text-center items-center",
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
                "text-2xl font-sf-display text-foreground leading-[1]",
                className
            )}
            {...props}
        />
    )
}


function DialogDescription({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <DialogPrimitive.Description
            data-slot="dialog-description"
            className={cn(
                "text-base text-muted tracking-tight leading-[1.35]",
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
                "flex flex-col flex-1",
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
                "flex items-center mt-1",
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
    DialogDescription,
    DialogBody,
    DialogFooter,
}
