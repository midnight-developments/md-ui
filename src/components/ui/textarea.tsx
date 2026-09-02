import * as React from "react"

import { cn } from "@/lib/utils"
import { inputVariants } from "@/components/ui/input.variants"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                inputVariants(),
                "field-sizing-content min-h-16 py-2 h-auto",
                className
            )}
            {...props}
        />
    )
}

export { Textarea }
