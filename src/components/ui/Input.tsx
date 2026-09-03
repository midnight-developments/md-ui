import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"
import { inputVariants, inputShellVariants, inputControlVariants, type InputShellVariantProps } from "@/components/ui/input.variants"

export interface InputProps
  extends React.ComponentProps<"input">,
  InputShellVariantProps {
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

export { Input, inputVariants, inputShellVariants, inputControlVariants }