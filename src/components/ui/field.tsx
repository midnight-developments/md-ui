import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
    return (
        <fieldset
            data-slot="field-set"
            className={cn(
                "group/field-set flex flex-col gap-5",
                className
            )}
            {...props}
        />
    )
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="field-group"
            className={cn(
                "flex w-full flex-col gap-8",
                className
            )}
            {...props}
        />
    )
}

export interface FieldProps extends React.ComponentProps<"div"> {
    orientation?: "vertical" | "horizontal"
}

function Field({
    className,
    orientation = "vertical",
    ...props
}: FieldProps) {
    return (
        <div
            data-slot="field"
            data-orientation={orientation}
            className={cn(
                "flex w-full",
                orientation === "horizontal"
                    ? "flex-row gap-2.5 items-start"
                    : "flex-col gap-2",
                className
            )}
            {...props}
        />
    )
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="field-content"
            className={cn(
                "flex flex-1 flex-col gap-1.5 cursor-pointer",
                className
            )}
            {...props}
        />
    )
}

function FieldLabel({
    className,
    ...props
}: React.ComponentProps<"label">) {
    return (
        <label
            data-slot="field-label"
            className={cn(
                "text-base font-normal leading-snug text-foreground",
                className
            )}
            {...props}
        />
    )
}

function FieldLegend({ className, ...props }: React.ComponentProps<"legend">) {
    return (
        <legend
            data-slot="field-legend"
            className={cn(
                "text-base font-normal leading-none text-foreground mb-6 group-has-[>[data-slot=field-description]]/field-set:mb-2.5 group-has-data-[slot=card-radio-group]/field-set:mb-2.5 group-has-data-[slot=card-checkbox-group]/field-set:mb-2.5",
                className
            )}
            {...props}
        />
    )
}

export interface FieldDescriptionProps extends React.ComponentProps<"p"> {
    description?: React.ReactNode
    error?: React.ReactNode
}

function FieldDescription({
    className,
    description,
    error,
    children,
    ...props
}: FieldDescriptionProps) {
    const isError = !!error
    const content = isError ? error : (description ?? children)

    return (
        <div data-slot="field-description" className="w-full relative -mt-0.5">
            <AnimatePresence mode="popLayout" initial={false}>
                {content && (
                    <motion.p
                        key={isError ? "error" : "description"}
                        role={isError ? "alert" : undefined}
                        data-slot={isError ? "field-error" : "field-description"}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as any }}
                        className={cn(
                            "text-base leading-tight w-full will-change-transform ",
                            isError
                                ? "font-normal text-destructive"
                                : " text-secondary",
                            className
                        )}
                        {...props as any}
                    >
                        {content}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    )
}

export {
    Field,
    FieldLabel,
    FieldDescription,
    FieldGroup,
    FieldSet,
    FieldLegend,
    FieldContent,
}
