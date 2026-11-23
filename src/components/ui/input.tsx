import * as React from "react"
import { InputGroup, InputGroupInput } from "@/components/ui/input-group"

function Input({ className, ...props }: React.ComponentProps<"input">) {
    return (
        <InputGroup className={className}>
            <InputGroupInput {...props} />
        </InputGroup>
    )
}

export { Input }
