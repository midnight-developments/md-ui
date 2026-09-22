import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import "./input.css"

export const inputShellVariants = cva(
  [
    "flex h-9 w-full min-w-0 items-center rounded-md px-2.5 transition-snappy outline-none select-none",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-input ring-1 ring-inset ring-border rim-light-input",
          "[&:is(:hover,:focus-within,:focus-visible,:active,[data-popup-open],[data-state=open],[data-active=true],[aria-expanded=true])]:bg-input-hover",
          "[&:is(:focus-within,:focus-visible,:active,[data-popup-open],[data-state=open],[data-active=true],[aria-expanded=true])]:ring-2",
          "[&:is(:focus-within,:focus-visible,:active,[data-popup-open],[data-state=open],[data-active=true],[aria-expanded=true])]:ring-border-active",
          "[&:is([data-invalid=true],[aria-invalid=true],:has([data-invalid=true],[aria-invalid=true]))]:!ring-2",
          "[&:is([data-invalid=true],[aria-invalid=true],:has([data-invalid=true],[aria-invalid=true]))]:!ring-destructive",
          "group-data-[invalid=true]/field:!ring-2",
          "group-data-[invalid=true]/field:!ring-destructive",
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
    "w-full outline-none text-base text-foreground tracking-tight",
    "placeholder:text-muted data-placeholder:text-muted ",
    "disabled:cursor-not-allowed",
  ].join(" ")
)

export const inputVariants = (props?: InputShellVariantProps) =>
  cn(inputShellVariants(props), inputControlVariants())

export type InputShellVariantProps = VariantProps<typeof inputShellVariants>
export type InputControlVariantProps = VariantProps<typeof inputControlVariants>