import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
    return (
        <fieldset
            data-slot="field-set"
            className={cn(
                "flex flex-col",
                "[&>[data-slot=radio-group]]:mt-4 [&>[data-slot=card-radio-group]]:mt-3",
                "[&>[data-slot=checkbox-group]]:mt-4 [&>[data-slot=card-checkbox-group]]:mt-3",
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
                "group/field-group @container/field-group flex w-full flex-col gap-8",
                className
            )}
            {...props}
        />
    )
}

const fieldVariants = cva(
    "group/field flex w-full gap-2.5",
    {
        variants: {
            orientation: {
                vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
                horizontal:
                    "flex-row gap-2.75 items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto",
                responsive:
                    "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto",
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
                "group/field-content flex flex-1 flex-col gap-2.5",
                "group-[]/card-radio:gap-1.25 group-[]/card-checkbox:gap-1.25",
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
                "group/field-label peer/field-label text-base font-normal leading-none text-foreground cursor-pointer",
                "group-has-disabled/field:pointer-events-none group-has-disabled/field:opacity-50 group-has-data-disabled/field:pointer-events-none group-has-data-disabled/field:opacity-50",
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
                "flex w-fit items-center gap-2 text-base",
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
                "text-base font-normal leading-[1] text-foreground",
                className
            )}
            {...props}
        />
    )
}

function FieldDescription({
    className,
    children,
    ...props
}: React.ComponentProps<"p">) {
    if (!children) return null

    return (
        <p
            data-slot="field-description"
            className={cn(
                "text-[0.9rem] leading-tight w-full text-secondary",
                "group-has-disabled/field:pointer-events-none group-has-disabled/field:opacity-50 group-has-data-disabled/field:pointer-events-none group-has-data-disabled/field:opacity-50",
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}

function FieldError({
    className,
    children,
    ...props
}: React.ComponentProps<"p">) {
    return (
        <p
            role="alert"
            data-slot="field-error"
            className={cn(
                "text-[0.9rem] leading-tight w-full font-normal text-destructive",
                "group-has-disabled/field:pointer-events-none group-has-disabled/field:opacity-50 group-has-data-disabled/field:pointer-events-none group-has-data-disabled/field:opacity-50",
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}

export interface FieldMessageProps extends React.ComponentProps<"div"> {
    description?: React.ReactNode
    error?: React.ReactNode
    invalid?: boolean
}

function FieldMessage({
    className,
    description,
    error,
    invalid,
    children,
    ...props
}: FieldMessageProps) {
    return (
        <div
            data-slot="field-message"
            className={cn("w-full relative -mt-0.5", className)}
            {...props}
        >
            {invalid && error ? (
                <FieldError>{error}</FieldError>
            ) : (
                <FieldDescription>{description ?? children}</FieldDescription>
            )}
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
    FieldError,
    FieldMessage,
    FieldGroup,
    FieldSet,
    FieldLegend,
    FieldContent,
    FieldTitle,
    FieldSeparator,
}
