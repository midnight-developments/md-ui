"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { XIcon } from "lucide-react"
import { Button } from "@/components/ui/button/button"


export interface DialogSurfaceProps extends React.ComponentProps<"div"> {
    showCloseButton?: boolean
}

export function DialogSurface({
    className,
    children,
    showCloseButton = false,
    ...props
}: DialogSurfaceProps) {
    return (
        <div
            data-slot="dialog-surface"
            className={cn("relative grid w-full max-w-[calc(100%-2rem)] gap-4 rounded-xl bg-popover p-4 bg-[rgb(16,16,16)] ring-1 ring-border outline-none ", className)}
            {...props}
        >
            {children}
            {showCloseButton && (
                <Button
                    variant="ghost"
                    className="absolute top-2 right-2"
                >
                    <XIcon className="size-4" />
                    <span className="sr-only">Close</span>
                </Button>
            )}
        </div>
    )
}
