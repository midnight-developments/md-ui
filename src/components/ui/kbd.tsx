import * as React from "react"
import {
    ArrowBigUp,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowRightToLine,
    ArrowUp,
    CornerDownLeft,
    Space,
} from "lucide-react"
import { cn } from "@/lib/utils"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
    return (
        <kbd
            data-slot="kbd"
            className={cn(
                "pointer-events-none inline-flex w-fit items-center justify-center gap-1 rounded-md px-2 py-0.5 text-sm font-normal text-foreground select-none",
                "bg-white/5 inset-ring inset-ring-white/10 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]",
                "[&_svg:not([class*='size-'])]:size-3",
                className
            )}
            {...props}
        />
    )
}

function KbdEnter(props: React.ComponentProps<"kbd">) {
    return (
        <Kbd {...props}>
            <CornerDownLeft className="text-muted" />
            Enter
        </Kbd>
    )
}

function KbdSpace(props: React.ComponentProps<"kbd">) {
    return (
        <Kbd {...props}>
            <Space className="text-muted" />
            Space
        </Kbd>
    )
}

function KbdTab(props: React.ComponentProps<"kbd">) {
    return (
        <Kbd {...props}>
            <ArrowRightToLine className="text-muted" />
            Tab
        </Kbd>
    )
}

function KbdShift(props: React.ComponentProps<"kbd">) {
    return (
        <Kbd {...props}>
            <ArrowBigUp className="text-muted" />
            Shift
        </Kbd>
    )
}

function KbdArrowDown(props: React.ComponentProps<"kbd">) {
    return (
        <Kbd {...props}>
            <ArrowDown className="text-muted" />
            ArrowDown
        </Kbd>
    )
}

function KbdArrowUp(props: React.ComponentProps<"kbd">) {
    return (
        <Kbd {...props}>
            <ArrowUp className="text-muted" />
            ArrowUp
        </Kbd>
    )
}

function KbdArrowLeft(props: React.ComponentProps<"kbd">) {
    return (
        <Kbd {...props}>
            <ArrowLeft className="text-muted" />
            ArrowLeft
        </Kbd>
    )
}

function KbdArrowRight(props: React.ComponentProps<"kbd">) {
    return (
        <Kbd {...props}>
            <ArrowRight className="text-muted" />
            ArrowRight
        </Kbd>
    )
}

export interface KbdGroupProps extends React.ComponentProps<"div"> {
    separator?: React.ReactNode
}

function KbdGroup({ className, separator, children, ...props }: KbdGroupProps) {
    const items = separator !== undefined ? React.Children.toArray(children) : null

    return (
        <div
            data-slot="kbd-group"
            className={cn("inline-flex flex-wrap items-center gap-1.5", className)}
            {...props}
        >
            {items
                ? items.map((child, idx) => (
                    <React.Fragment key={idx}>
                        {idx > 0 && (
                            <span className="text-sm text-muted select-none">
                                {separator}
                            </span>
                        )}
                        {child}
                    </React.Fragment>
                ))
                : children}
        </div>
    )
}

export {
    Kbd,
    KbdGroup,
    KbdEnter,
    KbdSpace,
    KbdTab,
    KbdShift,
    KbdArrowDown,
    KbdArrowUp,
    KbdArrowLeft,
    KbdArrowRight,
}