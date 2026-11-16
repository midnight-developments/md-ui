"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { cn } from "@/lib/utils"
import { XIcon } from "lucide-react"

import { Button } from "@/components/ui/button/button"

const DialogContext = React.createContext<{ inDialog: boolean }>({ inDialog: false })

function Dialog({ ...props }: DialogPrimitive.Root.Props) {
    return (
        <DialogContext.Provider value={{ inDialog: true }}>
            <DialogPrimitive.Root data-slot="dialog" {...props} />
        </DialogContext.Provider>
    )
}

function DialogTrigger({ ...props }: DialogPrimitive.Trigger.Props) {
    return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({ ...props }: DialogPrimitive.Portal.Props) {
    return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({ ...props }: DialogPrimitive.Close.Props) {
    return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

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

function DialogContent({
    className,
    children,
    showCloseButton = true,
    ...props
}: DialogPrimitive.Popup.Props & {
    showCloseButton?: boolean
}) {
    return (
        <DialogPortal>
            <DialogOverlay />
            <DialogPrimitive.Popup
                data-slot="dialog-content"
                className={cn(
                    "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 ",
                    className
                )}
                {...props}
            >
                {children}
                {showCloseButton && (
                    <DialogPrimitive.Close data-slot="dialog-close" render={<Button variant="ghost" className="absolute top-2 right-2" ><XIcon /><span className="sr-only">Close</span></Button>} />
                )}
            </DialogPrimitive.Popup>
        </DialogPortal>
    )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="dialog-header"
            className={cn(
                "-mx-4 -mt-4 flex flex-col gap-2 p-4 justify-end",
                className
            )}
            {...props}
        />
    )
}


function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
    const { inDialog } = React.useContext(DialogContext)
    if (inDialog) {
        return (
            <DialogPrimitive.Title
                data-slot="dialog-title"
                className={cn(
                    "cn-font-heading text-base leading-none font-medium",
                    className
                )}
                {...props}
            />
        )
    }

    return (
        <h2
            data-slot="dialog-title"
            className={cn(
                "cn-font-heading text-base leading-none font-medium",
                className
            )}
            {...(props as React.ComponentProps<"h2">)}
        />
    )
}

function DialogDescription({
    className,
    ...props
}: DialogPrimitive.Description.Props) {
    const { inDialog } = React.useContext(DialogContext)
    if (inDialog) {
        return (
            <DialogPrimitive.Description
                data-slot="dialog-description"
                className={cn(
                    "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
                    className
                )}
                {...props}
            />
        )
    }

    return (
        <p
            data-slot="dialog-description"
            className={cn(
                "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
                className
            )}
            {...(props as React.ComponentProps<"p">)}
        />
    )
}

function DialogBody({
    className,
    children,
    ...props
}: React.ComponentProps<"div"> & {
    showCloseButton?: boolean
}) {
    return (
        <div
            data-slot="dialog-body"
            className={cn(
                "-mx-4 -my-4 flex flex-col p-4 ",
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
    showCloseButton = false,
    children,
    ...props
}: React.ComponentProps<"div"> & {
    showCloseButton?: boolean
}) {
    return (
        <div
            data-slot="dialog-footer"
            className={cn(
                "-mx-4 -mb-4 flex flex-col   gap-2 p-4 justify-end",
                className
            )}
            {...props}
        >
            {children}
            {showCloseButton && (
                <DialogPrimitive.Close render={<Button variant="outline">Close</Button>} />
            )}
        </div>
    )
}


export {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
    DialogBody,
    DialogTrigger,
}

export { DialogSurface } from "./dialog-surface"
