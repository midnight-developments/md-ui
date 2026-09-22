import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"
import { inputShellVariants, inputControlVariants, type InputShellVariantProps } from "./input.variants"

export interface InputProps extends React.ComponentProps<"input">, InputShellVariantProps {
  ref?: React.Ref<HTMLInputElement>
}

function Input({ className, variant = "default", type, id, ref, disabled, ...props }: InputProps) {
  const inputId = id || React.useId()

  if (variant === "ghost") {
    return (
      <InputPrimitive
        ref={ref}
        id={inputId}
        type={type}
        disabled={disabled}
        data-slot="input"
        className={cn(inputControlVariants(), className)}
        {...props}
      />
    )
  }

  return (
    <div
      data-slot="input-shell"
      data-disabled={disabled ? "" : undefined}
      className={cn(
        inputShellVariants({ variant }),
        "relative cursor-text",
        className
      )}
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
        className={cn(inputControlVariants(), "h-full bg-transparent border-none outline-none ring-0 shadow-none")}
        {...props}
      />
    </div>
  )
}

export { Input }