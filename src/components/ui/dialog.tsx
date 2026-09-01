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

export {
    Dialog,
    DialogContent,
}
