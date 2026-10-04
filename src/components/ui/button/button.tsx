import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import advancedButtonStyles from "./button.module.css"

const buttonVariants = cva(
  [
    "group/button h-9.5 px-3.5 gap-1.5 inline-flex shrink-0 items-center justify-center rounded-md bg-clip-padding text-base cursor-pointer active:scale-[0.98] transition-snappy whitespace-nowrap",
    "disabled:pointer-events-none disabled:opacity-50 select-none outline-none",
    "[&:is(:focus-visible,[data-popup-open],[data-state=open],[aria-expanded=true])]:ring-2",
    "[&:is(:focus-visible,[data-popup-open],[data-state=open],[aria-expanded=true])]:ring-border-active",
  ].join(" "),
  {
    variants: {
      variant: {
        default: advancedButtonStyles.default,
        secondary: advancedButtonStyles.secondary,
        outline: advancedButtonStyles.secondary,
        destructive: advancedButtonStyles.destructive,
        ghost:
          "bg-transparent hover:bg-white/10 text-foreground",
        link:
          "h-auto p-0 bg-transparent gap-1 active:scale-[1] text-foreground underline-offset-4 hover:underline",
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
