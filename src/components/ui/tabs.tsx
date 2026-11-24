"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

function Tabs({
    className,
    ...props
}: Omit<TabsPrimitive.Root.Props, "orientation">) {
    return (
        <TabsPrimitive.Root
            data-slot="tabs"
            className={cn(
                "flex flex-col gap-2",
                className
            )}
            {...props}
        />
    )
}

const tabsListVariants = cva(
    "group/tabs-list relative inline-flex h-9 w-fit items-center justify-center rounded-lg text-muted data-[variant=line]:rounded-none",
    {
        variants: {
            variant: {
                default: "bg-white/2",
                line: "bg-transparent",
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
            <TabsIndicator />
        </TabsPrimitive.List>
    )
}

function TabsIndicator({
    className,
    ...props
}: TabsPrimitive.Indicator.Props) {
    return (
        <TabsPrimitive.Indicator
            data-slot="tabs-indicator"
            className={cn(
                "pointer-events-none absolute left-0 top-0 z-0 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) translate-y-(--active-tab-top) transform-gpu",
                "rounded-md border border-input bg-input/30",
                "group-data-[variant=line]/tabs-list:top-auto group-data-[variant=line]/tabs-list:bottom-0 group-data-[variant=line]/tabs-list:translate-y-0 group-data-[variant=line]/tabs-list:h-0.5 group-data-[variant=line]/tabs-list:rounded-none group-data-[variant=line]/tabs-list:border-0 group-data-[variant=line]/tabs-list:bg-foreground group-data-[variant=line]/tabs-list:shadow-none",
                className
            )}
            {...props}
        />
    )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
    return (
        <TabsPrimitive.Tab
            data-slot="tabs-trigger"
            className={cn(
                "relative z-1 inline-flex flex-1 cursor-pointer select-none items-center justify-center rounded-md py-0.5 px-6 gap-1.5",
                "text-base font-medium whitespace-nowrap text-muted ",
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
