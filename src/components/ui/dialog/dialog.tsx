"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { cn } from "@/lib/utils"
import { XIcon } from "lucide-react"

import { Button } from "@/components/ui/button/button"
import advancedDialogStyles from "./dialog.module.css"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

function DialogOverlay({
    className,
    ...props
}: DialogPrimitive.Backdrop.Props) {
    return (
        <DialogPrimitive.Backdrop
            data-slot="dialog-overlay"
            className={cn(
                "fixed inset-0 isolate z-50 bg-black/10 supports-backdrop-filter:backdrop-blur-xs",
                className
            )}
            {...props}
        />
    )
}

export interface DialogShellProps extends React.ComponentProps<"div"> { }

function DialogShell({ className, children, ...props }: DialogShellProps) {

    const staticBackground = React.useMemo(() => children, [])

    return (
        <div
            data-slot="dialog-shell"
            className={cn(
                advancedDialogStyles.shell,
                "relative grid w-full max-w-[calc(100%-2rem)] rounded-2xl p-5 outline-none overflow-hidden",
                className
            )}
            {...props}
        >
            <div
                aria-hidden="true"
                inert={true}
                data-slot="dialog-background"
                className="pointer-events-none select-none absolute inset-0 z-0 overflow-hidden"
            >
                <div className="absolute top-5 left-1/2 -translate-y-1/2 -translate-x-1/2 blur-[100px] bg-white/7 size-50 pointer-events-none" />

                <div className={advancedDialogStyles.mirror}>
                    <div className="grid gap-4 w-full p-5">
                        {staticBackground}
                    </div>
                </div>
            </div>

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
        <DialogPortal>
            <DialogOverlay />
            <DialogPrimitive.Popup
                data-slot="dialog-content"
                render={
                    <DialogShell
                        className={cn(
                            "fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
                            className
                        )}
                    />
                }
                {...props}
            >
                {children}
                <DialogPrimitive.Close
                    data-slot="dialog-close"
                    render={
                        <Button variant="ghost" className="absolute top-2 right-2">
                            <XIcon className="size-4" />
                            <span className="sr-only">Close</span>
                        </Button>
                    }
                />
            </DialogPrimitive.Popup>
        </DialogPortal>
    )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="dialog-header"
            className={cn(
                "-mx-5 -mt-5 flex flex-col gap-5 p-5 justify-end",
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
            className={cn("text-[22px] w-5/12 leading-tight font-medium", className)}
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
                "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
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
