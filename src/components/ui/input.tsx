import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"
import { InputShell } from "./input-shell"

export interface InputProps extends React.ComponentProps<"input"> {}

function Input({ className, type, id, ref, disabled, ...props }: InputProps) {
  const inputId = id || React.useId()

  return (
    <InputShell
      data-disabled={disabled ? "" : undefined}
      className={cn("relative cursor-text", className)}
      onClick={(e) => {
        const target = e.target as HTMLElement
        if (target.tagName !== "INPUT") {
          const input = e.currentTarget.querySelector("input")
          input?.focus()
        }
      }}
    >
      <InputPrimitive
        ref={ref}
        id={inputId}
        type={type}
        disabled={disabled}
        data-slot="input"
        className="h-full w-full bg-transparent border-none outline-none ring-0 shadow-none text-base text-foreground placeholder:text-muted disabled:cursor-not-allowed"
        {...props}
      />
    </InputShell>
  )
}

export { Input }