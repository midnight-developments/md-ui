import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

export interface InputProps extends React.ComponentProps<"input"> {
  ref?: React.Ref<HTMLInputElement>
}

function Input({ className, type, id, ref, ...props }: InputProps) {
  const inputId = id || React.useId()

  return (
    <InputPrimitive
      ref={ref}
      id={inputId}
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 text-sm rounded ring-1 ring-inset ring-border hover:ring-border-hover focus-visible:ring-2 focus-visible:ring-border-active bg-white/5 px-2.5 outline-none transition-all duration-200 placeholder:text-muted disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 group-data-[invalid=true]/field:ring-destructive group-data-[invalid=true]/field:hover:ring-destructive group-data-[invalid=true]/field:focus-visible:ring-2 group-data-[invalid=true]/field:focus-visible:ring-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }