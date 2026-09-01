"use client"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
    return (
        <fieldset
            data-slot="field-set"
            className={cn(
                "flex flex-col gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
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
                "group/field-group @container/field-group flex w-full flex-col gap-8 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4",
                className
            )}
            {...props}
        />
    )
}

const fieldVariants = cva(
    "group/field flex w-full gap-2 data-[invalid=true]:text-destructive",
    {
        variants: {
            orientation: {
                vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
                horizontal:
                    "flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
                responsive:
                    "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
            },
        },
        defaultVariants: {
            orientation: "vertical",
        },
    }
)

function Field({
    className,
    orientation = "vertical",
    ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
    return (
        <div
            role="group"
            data-slot="field"
            data-orientation={orientation}
            className={cn(fieldVariants({ orientation }), className)}
            {...props}
        />
    )
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="field-content"
            className={cn(
                "group/field-content flex flex-1 flex-col gap-0.5 leading-snug",
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
                "group/field-label peer/field-label text-md font-normal text-foreground tracking-somewhat-tight leading-none",
                className
            )}
            {...props}
        />
    )
}

function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="field-label"
            className={cn(
                "flex w-fit items-center gap-2 text-sm font-medium group-data-[disabled=true]/field:opacity-50",
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
    const content = isError ? error : description

    return (
        <div className="overflow-hidden w-full relative -mt-1">
            <AnimatePresence mode="popLayout" initial={false}>
                {content && (
                    <motion.p
                        key={isError ? "error" : "description"}
                        role={isError ? "alert" : undefined}
                        data-slot={isError ? "field-error" : "field-description"}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] as any }}
                        className={cn(
                            "text-sm w-full will-change-transform",
                            isError
                                ? "font-normal text-destructive"
                                : "tracking-somewhat-tight text-secondary",
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

function FieldSeparator({ className, ...props }: React.ComponentProps<"hr">) {
    return (
        <hr
            data-slot="field-separator"
            className={cn("border-t border-white/5 my-3 w-full", className)}
            {...props}
        />
    )
}

export {
    Field,
    FieldLabel,
    FieldDescription,
    FieldGroup,
    FieldSet,
    FieldContent,
    FieldTitle,
    FieldSeparator,
}
