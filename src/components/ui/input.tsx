import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type = "text", ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "input-shell cursor-text select-text",
                className
            )}
            {...props}
        />
    )
}

export { Input }
