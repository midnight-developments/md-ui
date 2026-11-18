import * as React from "react"
import { cn } from "@/lib/utils"
import { inputShellClasses } from "@/components/ui/shells/input-shell/input-shell"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                inputShellClasses,
                "field-sizing-content min-h-16 py-2 h-auto cursor-text",
                className
            )}
            {...props}
        />
    )
}

export { Textarea }
