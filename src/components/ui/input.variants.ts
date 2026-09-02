import { cva } from "class-variance-authority"

export const inputVariants = cva(
  [
    "flex h-9 w-full min-w-0 items-center text-sm rounded px-2.5 select-none outline-none transition-all duration-200",
    "placeholder:text-muted data-placeholder:text-muted",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-input ring-1 ring-inset ring-border",
          "hover:bg-input-hover",
          "focus-visible:bg-input-hover focus-visible:ring-2 focus-visible:ring-border-active",
          "focus-within:bg-input-hover focus-within:ring-2 focus-within:ring-border-active",
          "data-[popup-open]:bg-input-hover data-[popup-open]:ring-2 data-[popup-open]:ring-border-active",
          "data-[state=open]:bg-input-hover data-[state=open]:ring-2 data-[state=open]:ring-border-active",
          "data-[active=true]:bg-input-hover data-[active=true]:ring-2 data-[active=true]:ring-border-active",
          "data-[focused=true]:bg-input-hover data-[focused=true]:ring-2 data-[focused=true]:ring-border-active",
          "aria-expanded:bg-input-hover aria-expanded:ring-2 aria-expanded:ring-border-active",
          "aria-invalid:ring-2 aria-invalid:ring-destructive",
          "data-[invalid=true]:ring-2 data-[invalid=true]:ring-destructive",
          "group-data-[invalid=true]/field:ring-2 group-data-[invalid=true]/field:ring-destructive",
          "group-data-[invalid=true]/field:hover:ring-destructive",
          "group-data-[invalid=true]/field:focus-visible:ring-destructive",
          "group-data-[invalid=true]/field:focus-within:ring-destructive",
        ].join(" "),
        ghost: "bg-transparent ring-0 shadow-none hover:bg-transparent focus-visible:ring-0 focus-within:ring-0 data-[popup-open]:ring-0 data-[state=open]:ring-0 data-[active=true]:ring-0 data-[focused=true]:ring-0 aria-expanded:ring-0 aria-invalid:ring-0 group-data-[invalid=true]/field:ring-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
