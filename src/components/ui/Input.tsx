import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

export interface InputProps extends React.ComponentProps<"input"> {
  label: string
  description?: string
  wrapperClassName?: string
  actionButton?: React.ReactNode
}

function Input({ className, wrapperClassName, type, label, description, actionButton, id, ...props }: InputProps) {
  const generatedId = React.useId()
  const inputId = id || generatedId

  const inputElement = (
    <InputPrimitive
      id={inputId}
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 text-sm rounded ring-2 ring-inset ring-border hover:ring-border-hover focus-visible:ring-border-active bg-white/5 px-2.5 outline-none  transition-all duration-200 placeholder:text-muted disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ",
        className
      )}
      {...props}
    />
  )

  const contentElement = actionButton ? (
    <div className="flex flex-row items-center gap-2 w-full">
      {inputElement}
      {actionButton}
    </div>
  ) : (
    inputElement
  )

  return (
    <div className={cn("flex flex-col gap-2 w-full py-", wrapperClassName)}>
      <label className="text-md font-normal text-foreground tracking-somewhat-tight leading-none">
        {label}
      </label>
      {contentElement}
      {description && (
        <p className="text-sm tracking-somewhat-tight text-secondary leading-none">
          {description}
        </p>
      )}
    </div>
  )
}

export { Input }
