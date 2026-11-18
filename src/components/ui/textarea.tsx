import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "input-shell field-sizing-content min-h-16 py-2 h-auto cursor-text select-text",
                className
            )}
            {...props}
        />
    )
}

export { Textarea }
