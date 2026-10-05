import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import advancedBadgeStyles from "./badge.module.css"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full px-2.5 py-0.75 text-[0.9rem] whitespace-nowrap transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        primary: advancedBadgeStyles.primary,
        secondary: advancedBadgeStyles.secondary,
        destructive: advancedBadgeStyles.destructive,
        success: advancedBadgeStyles.success,
        warning: advancedBadgeStyles.warning,
        flat:
          "border-transparent bg-white/10 text-foreground [a]:hover:bg-white/15 shadow-none",
        ghost:
          "hover:bg-muted/50 hover:text-muted-foreground",
        link: "text-foreground underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

export interface BadgeProps
  extends React.ComponentProps<"span">,
  VariantProps<typeof badgeVariants> { }

function Badge({
  className,
  variant = "primary",
  ...props
}: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
