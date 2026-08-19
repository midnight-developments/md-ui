import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-4 p-4 rounded-lg bg-card border-2 border-border overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header flex flex-col gap-0.5",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-lg text-foreground font-medium tracking-somewhat-tight leading-normal ",
        className
      )}
      {...props}
    />
  )
}

function CardTitleIcon({
  className,
  icon: Icon,
  ...props
}: React.ComponentProps<"div"> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <div
      data-slot="card-title-icon"
      className={cn(
        "flex p-1.5 items-center justify-center rounded bg-white/10",
        className
      )}
      {...props}
    >
      <Icon className="size-4" />
    </div>
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-sm text-muted ",
        className
      )}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "flex flex-col",
        className
      )}
      {...props}
    />
  )
}

function CardContentSection({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content-section"
      className={cn(
        "border-t border-white/3 py-4 flex flex-col",
        className
      )}
      {...props}
    />
  )
}


function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardTitleIcon,
  CardAction,
  CardDescription,
  CardContent,
  CardContentSection,
}
