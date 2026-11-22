import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ShineEffect } from "@/components/ui/effects/shine-effect"

const badgeVariants = cva(
  "relative inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-full px-2.75 py-0.5 font-normal whitespace-nowrap overflow-hidden [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        accent:
          "bg-badge-accent inset-ring inset-ring-accent/50 text-accent-text",
        slate:
          "bg-badge-slate inset-ring inset-ring-slate/25 text-slate",
        success:
          "bg-badge-success inset-ring inset-ring-success/25 text-success",
        warning:
          "bg-badge-warning inset-ring inset-ring-warning/25 text-warning",
        destructive:
          "bg-badge-destructive inset-ring inset-ring-destructive/25 text-destructive",
        flat:
          "bg-white/10 text-foreground",
      },
      size: {
        sm: "text-sm tracking-normal",
        base: "text-base tracking-tight",
      },
    },
    defaultVariants: {
      variant: "accent",
      size: "sm",
    },
  }
)

export interface BadgeProps
  extends React.ComponentProps<"span">,
  VariantProps<typeof badgeVariants> { }

function Badge({
  className,
  variant = "accent",
  size,
  children,
  ...props
}: BadgeProps) {
  const hasShine = variant && variant !== "flat"

  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {hasShine && (
        <ShineEffect
          color={`var(--color-badge-${variant}-shine)`}
          start={20}
          end={100}
          opacity={1}
        />
      )}
      {children}
    </span>
  )
}

export { Badge, badgeVariants }
