import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ShineEffect } from "@/components/ui/effects/shine-effect"


const buttonVariants = cva(
  [
    "group/button relative border-0 inset-ring outline-none overflow-hidden h-9 px-4 gap-1.5 inline-flex shrink-0 items-center justify-center rounded-lg bg-clip-padding cursor-pointer whitespace-nowrap select-none transform-gpu",
    "text-base text-foreground tracking-tight",
    "hover:brightness-110 active:brightness-92 active:text-foreground/80 active:scale-98",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: "bg-button-primary inset-ring-white/5",
        secondary: "bg-button-secondary inset-ring-white/2",
        destructive: "bg-button-destructive inset-ring-white/5",
        ghost: "bg-transparent inset-ring-0 hover:bg-white/10 text-foreground",
        link: "h-auto p-0 bg-transparent inset-ring-0 gap-1 underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

const buttonShineMap = {
  primary: { start: 25, end: 120, opacity: 0.4 },
  secondary: { start: 25, end: 100, opacity: 0.15 },
  destructive: { start: 25, end: 120, opacity: 0.35 },
  ghost: { start: 0, end: 0, opacity: 0 },
  link: { start: 0, end: 0, opacity: 0 },
}

function Button({
  className,
  variant = "primary",
  children,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  const shine = buttonShineMap[variant ?? "primary"]

  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    >
      {shine.opacity > 0 && (
        <ShineEffect
          start={shine.start}
          end={shine.end}
          opacity={shine.opacity}
        />
      )}
      {children}
    </button>
  )
}

export { Button, buttonVariants }
