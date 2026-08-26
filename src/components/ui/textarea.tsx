import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "flex field-sizing-content min-h-16 w-full rounded ring-2 ring-inset ring-border hover:ring-border-hover focus-visible:ring-border-active bg-white/5 px-2.5 py-2 text-sm outline-none transition-colors duration-200 placeholder:text-muted disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 group-data-[invalid=true]/field:ring-destructive group-data-[invalid=true]/field:hover:ring-destructive group-data-[invalid=true]/field:focus-visible:ring-destructive",
                className
            )}
            {...props}
        />
    )
}

export { Textarea }
