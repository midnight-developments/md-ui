import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button h-9  px-3.5 gap-1.5 inline-flex shrink-0 items-center justify-center rounded active:brightness-90 bg-clip-padding text-sm tracking-somewhat-tight font-medium cursor-pointer active:scale-[0.98] transition-all ease-in-out duration-200 whitespace-nowrap  disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default:
          "ring-[1.5px] ring-inset ring-white/20 hover:brightness-110 bg-accent-gradient text-foreground active:text-foreground/80",
        outline:
          "ring-1 ring-inset ring-border hover:ring-border-hover hover:ring-2 bg-dark-gradient text-foreground active:text-foreground/80 ",
        link:
          "p-0 gap-1 hover:underline hover:opacity-100 transition-none font-normal text-foreground",
        destructive:
          "border-destructive/40 bg-destructive/20 text-destructive hover:bg-destructive/30 focus-visible:border-destructive/40",
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
