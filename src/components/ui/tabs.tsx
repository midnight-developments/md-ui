"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ShineEffect } from "@/components/ui/effects/shine-effect"

function Tabs({
    className,
    ...props
}: Omit<TabsPrimitive.Root.Props, "orientation">) {
    return (
        <TabsPrimitive.Root
            data-slot="tabs"
            className={cn(
                "w-full flex flex-col gap-2",
                className
            )}
            {...props}
        />
    )
}

const tabsListVariants = cva(
    "group/tabs-list relative h-9 grid grid-flow-col auto-cols-fr items-center rounded-lg text-muted data-[variant=line]:rounded-none",
    {
        variants: {
            variant: {
                default: "p-0.5 bg-white/2",
                line: "p-0 bg-transparent",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

function TabsList({
    className,
    variant = "default",
    children,
    ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
    return (
        <TabsPrimitive.List
            data-slot="tabs-list"
            data-variant={variant}
            className={cn(tabsListVariants({ variant }), className)}
            {...props}
        >
            {children}
            <TabsIndicator variant={variant} />
        </TabsPrimitive.List>
    )
}

const tabsIndicatorVariants = cva(
    "pointer-events-none absolute left-0 z-0 w-(--active-tab-width) translate-x-(--active-tab-left) transform-gpu",
    {
        variants: {
            variant: {
                default:
                    "top-0 h-(--active-tab-height) translate-y-(--active-tab-top) rounded-md bg-button-secondary inset-ring inset-ring-input",
                line: "bottom-0 h-0.5 rounded-none bg-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

function TabsIndicator({
    className,
    variant = "default",
    children,
    ...props
}: TabsPrimitive.Indicator.Props & VariantProps<typeof tabsIndicatorVariants>) {
    return (
        <TabsPrimitive.Indicator
            data-slot="tabs-indicator"
            className={cn(tabsIndicatorVariants({ variant }), className)}
            {...props}
        >
            {variant !== "line" && (
                <ShineEffect start={5} end={100} opacity={0.15} />
            )}
            {children}
        </TabsPrimitive.Indicator>
    )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
    return (
        <TabsPrimitive.Tab
            data-slot="tabs-trigger"
            className={cn(
                "relative z-1 inline-flex h-full cursor-pointer select-none items-center justify-center rounded-md px-4 gap-1.5 ",
                "text-base font-medium whitespace-nowrap text-muted data-active:text-foreground",
                "group-data-[variant=line]/tabs-list:bg-transparent [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                className
            )}
            {...props}
        />
    )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
    return (
        <TabsPrimitive.Panel
            data-slot="tabs-content"
            className={cn("flex-1", className)}
            {...props}
        />
    )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator, tabsListVariants }
