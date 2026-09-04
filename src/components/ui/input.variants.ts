import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

export const inputShellVariants = cva(
  [
    "flex h-9 w-full min-w-0 items-center rounded-sm px-2.5 transition-all duration-200 outline-none select-none",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-input ring-1 ring-inset ring-border",
          "[&:is(:hover,:focus,:focus-within,:active,:focus-visible,[data-popup-open],[data-state=open],[data-active=true],[data-focused=true],[aria-expanded=true])]:bg-input-hover",
          "[&:is(:focus,:focus-within,:active,:focus-visible,[data-popup-open],[data-state=open],[data-active=true],[data-focused=true],[aria-expanded=true])]:ring-2",
          "[&:is(:focus,:focus-within,:active,:focus-visible,[data-popup-open],[data-state=open],[data-active=true],[data-focused=true],[aria-expanded=true])]:ring-border-active",
          "[&:is([aria-invalid=true],[data-invalid=true],:has([aria-invalid=true]),.group\\/field[data-invalid=true]_&)]:ring-2",
          "[&:is([aria-invalid=true],[data-invalid=true],:has([aria-invalid=true]),.group\\/field[data-invalid=true]_&)]:ring-destructive",
        ].join(" "),
        ghost: "bg-transparent ring-0 shadow-none hover:bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export const inputControlVariants = cva(
  [
    "w-full outline-none text-sm text-foreground",
    "placeholder:text-muted data-placeholder:text-muted",
    "disabled:cursor-not-allowed",
  ].join(" ")
)

export const inputVariants = (props?: InputShellVariantProps) =>
  cn(inputShellVariants(props), inputControlVariants())

export type InputShellVariantProps = VariantProps<typeof inputShellVariants>
export type InputControlVariantProps = VariantProps<typeof inputControlVariants>