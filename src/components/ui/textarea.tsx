import * as React from "react"
import { InputGroup, InputGroupTextarea } from "@/components/ui/input-group"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <InputGroup className={className}>
            <InputGroupTextarea {...props} />
        </InputGroup>
    )
}

export { Textarea }
