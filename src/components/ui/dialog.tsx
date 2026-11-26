"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

import { BlurMirrorEffect } from "@/components/ui/effects/blur-mirror-effect"
import { ShineEffect } from "@/components/ui/effects/shine-effect"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

const DIALOG_EASE = [0.22, 1, 0.36, 1] as const

const DIALOG_TRANSITION = {
    duration: 0.22,
    ease: DIALOG_EASE,
} as const

const DIALOG_OVERLAY_VARIANTS = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
} as const

const DIALOG_CONTENT_VARIANTS = {
    open: { opacity: 1, scale: 1, },
    closed: { opacity: 0, scale: 0.97 },
} as const

const DIALOG_INNER_BLUR_TRANSITION = {
    duration: 0.2,
    ease: DIALOG_EASE,
} as const

const DIALOG_INNER_BLUR_VARIANTS = {
    open: { filter: "blur(0px)" },
    closed: { filter: "blur(8px)" },
} as const

function DialogOverlay({
    className,
    ...props
}: DialogPrimitive.Backdrop.Props) {
    return (
        <DialogPrimitive.Backdrop
            data-slot="dialog-overlay"
            render={(backdropProps, state) => (
                <motion.div
                    {...(backdropProps as React.ComponentProps<typeof motion.div>)}
                    initial={false}
                    animate={state.open ? "open" : "closed"}
                    variants={DIALOG_OVERLAY_VARIANTS}
                    transition={DIALOG_TRANSITION}
                />
            )}
            className={cn(
                "fixed inset-0 isolate z-50 bg-black/50 data-closed:pointer-events-none",
                className
            )}
            {...props}
        />
    )
}

export interface DialogShellProps extends React.ComponentProps<"div"> { }

function DialogShell({ className, children, ...props }: DialogShellProps) {
    return (
        <div
            data-slot="dialog-shell"
            className={cn(
                "relative grid w-full rounded-2xl p-5 overflow-hidden",
                "bg-dialog inset-ring inset-ring-dialog-border transform-gpu",
                className
            )}
            {...props}
        >
            <div
                aria-hidden="true"
                inert={true}
                data-slot="dialog-glow"
                className="pointer-events-none select-none absolute top-5 left-1/2 -translate-1/2 blur-[100px] bg-white/5 size-50"
            />

            <ShineEffect opacity={0.3} />

            <BlurMirrorEffect contentClassName="grid gap-4 w-full p-5">
                {children}
            </BlurMirrorEffect>

            {children}
        </div>
    )
}

function DialogContent({
    className,
    children,
    ...props
}: DialogPrimitive.Popup.Props) {
    return (
        <DialogPortal keepMounted>
            <DialogOverlay />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                <DialogPrimitive.Popup
                    data-slot="dialog-content"
                    render={(popupProps, state) => (
                        <motion.div
                            {...(popupProps as React.ComponentProps<typeof motion.div>)}
                            initial={false}
                            animate={state.open ? "open" : "closed"}
                            variants={DIALOG_CONTENT_VARIANTS}
                            transition={DIALOG_TRANSITION}
                        >
                            <DialogShell>
                                <motion.div
                                    className="grid w-full"
                                    initial={false}
                                    animate={state.open ? "open" : "closed"}
                                    variants={DIALOG_INNER_BLUR_VARIANTS}
                                    transition={DIALOG_INNER_BLUR_TRANSITION}
                                >
                                    {children}
                                </motion.div>
                            </DialogShell>
                        </motion.div>
                    )}
                    className={cn("w-full pointer-events-auto data-closed:pointer-events-none", className)}
                    {...props}
                />
            </div>
        </DialogPortal>
    )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="dialog-header"
            className={cn(
                "-mx-5 -mt-5 flex flex-col gap-2 p-5 justify-end",
                className
            )}
            {...props}
        />
    )
}

function DialogTitle({ className, ...props }: React.ComponentProps<"h2">) {
    return (
        <h2
            data-slot="dialog-title"
            className={cn("text-[1.5rem] leading-[1.35] tracking-tight font-medium", className)}
            {...props}
        />
    )
}

function DialogDescription({
    className,
    ...props
}: React.ComponentProps<"p">) {
    return (
        <p
            data-slot="dialog-description"
            className={cn(
                "text-base text-muted *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
                className
            )}
            {...props}
        />
    )
}

function DialogBody({
    className,
    children,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="dialog-body"
            className={cn(
                "-mx-5 flex flex-col p-5",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

function DialogFooter({
    className,
    children,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="dialog-footer"
            className={cn(
                "-mx-5 -mb-5 flex items-center justify-end gap-2 p-5",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export {
    Dialog,
    DialogClose,
    DialogContent,
    DialogShell,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
    DialogBody,
    DialogTrigger,
}