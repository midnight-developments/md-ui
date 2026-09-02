"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Tabs({
    className,
    orientation = "horizontal",
    ...props
}: TabsPrimitive.Root.Props) {
    return (
        <TabsPrimitive.Root
            data-slot="tabs"
            data-orientation={orientation}
            className={cn(
                "group/tabs flex gap-2 data-horizontal:flex-col",
                className
            )}
            {...props}
        />
    )
}

const tabsListVariants = cva(
    "group/tabs-list relative inline-flex w-fit items-center justify-center rounded p-[3px] text-muted-foreground group-data-horizontal/tabs:h-9 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",
    {
        variants: {
            variant: {
                default: "bg-white/5 ring-1 ring-inset ring-border",
                line: "bg-transparent gap-1",
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
            <TabsPrimitive.Indicator
                data-slot="tabs-indicator"
                className={cn(
                    "absolute z-0 rounded-xs bg-white/10 shadow-xs transition-all duration-200 ease-out pointer-events-none",
                    "top-(--active-tab-top) left-(--active-tab-left) w-(--active-tab-width) h-(--active-tab-height)",
                    "group-data-[variant=line]/tabs-list:bg-primary group-data-[variant=line]/tabs-list:h-0.5 group-data-horizontal/tabs:group-data-[variant=line]/tabs-list:bottom-0 group-data-vertical/tabs:group-data-[variant=line]/tabs-list:right-0 group-data-vertical/tabs:group-data-[variant=line]/tabs-list:w-0.5"
                )}
            />
        </TabsPrimitive.List>
    )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
    return (
        <TabsPrimitive.Tab
            data-slot="tabs-trigger"
            className={cn(
                "relative z-10 inline-flex h-full flex-1 items-center justify-center gap-1.5 rounded-xs px-2.5 py-1 text-xs font-medium whitespace-nowrap text-muted-foreground transition-colors duration-150 outline-none select-none cursor-pointer",
                "hover:text-foreground disabled:pointer-events-none disabled:opacity-50",
                "data-active:text-foreground",
                "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
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
            className={cn("flex-1 text-sm outline-none", className)}
            {...props}
        />
    )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
