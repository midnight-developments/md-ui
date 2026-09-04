import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button h-9 px-3.5 gap-1.5 inline-flex shrink-0 items-center justify-center rounded bg-clip-padding text-sm tracking-somewhat-tight font-medium cursor-pointer active:scale-[0.98] active:brightness-90 transition-all ease-in-out duration-200 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 select-none will-change-transform",
  {
    variants: {
      variant: {
        default:
          "ring-[1.5px] ring-inset ring-white/20 hover:brightness-110 bg-accent-gradient text-foreground active:text-foreground/80",
        outline:
          "ring-1 ring-inset ring-border hover:ring-border-hover bg-dark-gradient text-foreground active:text-foreground/80",
        link:
          "h-auto p-0 bg-transparent gap-1 active:scale-[1]",
        destructive:
          "border-destructive/40 bg-destructive/20 text-destructive hover:bg-destructive/30",
        ghost:
          "bg-transparent hover:bg-white/10 text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
