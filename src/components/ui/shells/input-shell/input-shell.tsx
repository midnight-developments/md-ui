"use client"

import * as React from "react"
import { useRender } from "@base-ui/react/use-render"
import { mergeProps } from "@base-ui/react/merge-props"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

import advancedInputStyles from "./input-shell.module.css"

const inputShellClasses = [
    advancedInputStyles.shell,
    "relative flex h-9 w-full min-w-0 items-center rounded-lg px-2.5 gap-2.25 transition-snappy outline-none select-none",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
].join(" ")

export interface InputShellProps extends useRender.ComponentProps<"div"> {
    className?: any
}

export function InputShell({
    className,
    render,
    ...props
}: InputShellProps) {
    return useRender({
        defaultTagName: "div",
        props: mergeProps(
            {
                className: cn(inputShellClasses, className),
                "data-slot": "input-shell",
            },
            props
        ),
        render,
    })
}

export function TriggerChevron({
    className,
    ...props
}: React.ComponentProps<typeof ChevronDownIcon>) {
    return (
        <ChevronDownIcon
            aria-hidden="true"
            data-slot="trigger-chevron"
            className={cn(
                "ml-auto -mr-1 pointer-events-none size-4 shrink-0 text-muted",
                "group-data-popup-open/trigger:text-foreground group-data-popup-open/trigger:rotate-180",
                className
            )}
            {...props}
        />
    )
}
