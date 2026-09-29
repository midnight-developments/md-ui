"use client"

import { useRender } from "@base-ui/react/use-render"
import { mergeProps } from "@base-ui/react/merge-props"
import { cn } from "@/lib/utils"

const inputShellClasses = [
    "flex h-9 w-full min-w-0 items-center rounded-md px-2.5 transition-snappy outline-none select-none",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    "bg-input ring-1 ring-inset ring-border",
    "[&:is(:hover,:focus-within,:focus-visible,:active,[data-popup-open],[data-state=open],[data-active=true],[aria-expanded=true])]:bg-input-hover",
    "[&:is(:focus-within,:focus-visible,:active,[data-popup-open],[data-state=open],[data-active=true],[aria-expanded=true])]:ring-2",
    "[&:is(:focus-within,:focus-visible,:active,[data-popup-open],[data-state=open],[data-active=true],[aria-expanded=true])]:ring-border-active",
    "[&:is([data-invalid=true],[aria-invalid=true],:has([data-invalid=true],[aria-invalid=true]))]:!ring-2",
    "[&:is([data-invalid=true],[aria-invalid=true],:has([data-invalid=true],[aria-invalid=true]))]:!ring-destructive",
    "group-data-[invalid=true]/field:!ring-2",
    "group-data-[invalid=true]/field:!ring-destructive",
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
