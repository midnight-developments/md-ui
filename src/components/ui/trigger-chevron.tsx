"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function TriggerChevron({
    className,
    ...props
}: React.ComponentProps<typeof ChevronDownIcon>) {
    return (
        <ChevronDownIcon
            aria-hidden="true"
            data-slot="trigger-chevron"
            className={cn(
                "ml-auto -mr-0.5 pointer-events-none size-4 shrink-0 text-muted",
                "group-data-popup-open/trigger:text-foreground group-data-popup-open/trigger:rotate-180",
                className
            )}
            {...props}
        />
    )
}

