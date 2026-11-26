import * as React from "react"
import { Lock, Eye, EyeOff } from "lucide-react"

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"

export interface PasswordInputProps extends React.ComponentProps<"input"> {
    "data-invalid"?: boolean | string
}

function PasswordInput({
    className,
    ...props
}: PasswordInputProps) {
    const [showPassword, setShowPassword] = React.useState(false)

    return (
        <InputGroup
            data-invalid={props["data-invalid"]}
            className={className}
        >
            <InputGroupAddon align="inline-start">
                <Lock className="size-4 text-muted" />
            </InputGroupAddon>
            <InputGroupInput
                type={showPassword ? "text" : "password"}
                {...props}
            />
            <InputGroupAddon
                align="inline-end"
                className="cursor-pointer hover:text-foreground"
                onClick={() => setShowPassword((prev) => !prev)}
                title={showPassword ? "Hide password" : "Show password"}
                aria-label={showPassword ? "Hide password" : "Show password"}
            >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </InputGroupAddon>
        </InputGroup>
    )
}

export { PasswordInput }

