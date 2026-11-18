import * as React from "react"
import { Lock, Eye, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"
import { inputShellClasses } from "@/components/ui/shells/input-shell/input-shell"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./input-group"

export interface InputProps extends React.ComponentProps<"input"> {
  "data-invalid"?: boolean | string
}

function PasswordInput({ className, id, ref, disabled, ...props }: InputProps) {
  const inputId = id || React.useId()
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <InputGroup
      data-disabled={disabled ? "" : undefined}
      data-invalid={props["data-invalid"]}
      className={cn("relative cursor-text", className)}
      onClick={(e) => {
        const target = e.target as HTMLElement
        if (target.tagName !== "INPUT" && !target.closest("[data-align='inline-end']")) {
          const input = e.currentTarget.querySelector("input")
          input?.focus()
        }
      }}
    >
      <InputGroupAddon align="inline-start">
        <Lock className="size-4 text-muted" />
      </InputGroupAddon>
      <InputGroupInput
        ref={ref}
        id={inputId}
        type={showPassword ? "text" : "password"}
        disabled={disabled}
        {...props}
      />
      <InputGroupAddon
        align="inline-end"
        className="cursor-pointer hover:text-white"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
      </InputGroupAddon>
    </InputGroup>
  )
}

function Input({ className, type, id, ref, disabled, ...props }: InputProps) {
  if (type === "password") {
    return (
      <PasswordInput
        ref={ref}
        id={id}
        disabled={disabled}
        className={className}
        {...props}
      />
    )
  }

  const inputId = id || React.useId()

  return (
    <div
      data-slot="input"
      data-disabled={disabled ? "" : undefined}
      data-invalid={props["data-invalid"]}
      className={cn(inputShellClasses, "relative cursor-text", className)}
      onClick={(e) => {
        const target = e.target as HTMLElement
        if (target.tagName !== "INPUT") {
          const input = e.currentTarget.querySelector("input")
          input?.focus()
        }
      }}
    >
      <input
        ref={ref}
        id={inputId}
        type={type}
        disabled={disabled}
        data-slot="input-element"
        className="h-full w-full bg-transparent border-none outline-none text-base text-foreground placeholder:text-muted disabled:cursor-not-allowed"
        {...props}
      />
    </div>
  )
}

export { Input, PasswordInput }
