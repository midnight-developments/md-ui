import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { inputVariants } from "@/components/ui/input.variants"

export interface InputProps
  extends React.ComponentProps<"input">,
  VariantProps<typeof inputVariants> {
  ref?: React.Ref<HTMLInputElement>
}

function Input({ className, variant, type, id, ref, ...props }: InputProps) {
  const inputId = id || React.useId()

  return (
    <InputPrimitive
      ref={ref}
      id={inputId}
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Input, inputVariants }