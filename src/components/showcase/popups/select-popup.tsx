"use client"

import * as React from "react"
import {
    Popup,
    PopupContent,
    PopupPreview,
    PopupDetails,
    PopupTitle,
    PopupDescription,
    PopupCharacteristics,
} from "@/components/showcase/popup"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    SelectGroup,
    SelectLabel,
} from "@/components/ui/select"
import { Globe, Database } from "lucide-react"

export interface SelectPopupProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function SelectPopup({ open, onOpenChange }: SelectPopupProps) {
    const [region, setRegion] = React.useState("us-east-1")
    const [engine, setEngine] = React.useState("postgres")

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col gap-6 max-w-sm w-full">
                        {/* 1. Cloud Region Select */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-sf-display text-muted flex items-center gap-2">
                                <Globe className="size-4 text-accent" />
                                Primary Deployment Region
                            </label>
                            <Select value={region} onValueChange={(val) => val && setRegion(val)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a region..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>North America</SelectLabel>
                                        <SelectItem value="us-east-1">US East (N. Virginia)</SelectItem>
                                        <SelectItem value="us-west-2">US West (Oregon)</SelectItem>
                                        <SelectItem value="ca-central-1">Canada (Central)</SelectItem>
                                    </SelectGroup>
                                    <SelectGroup>
                                        <SelectLabel>Europe</SelectLabel>
                                        <SelectItem value="eu-west-1">Europe (Ireland)</SelectItem>
                                        <SelectItem value="eu-central-1">Europe (Frankfurt)</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* 2. Database Engine Select */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-sf-display text-muted flex items-center gap-2">
                                <Database className="size-4 text-accent" />
                                Database Engine & Version
                            </label>
                            <Select value={engine} onValueChange={(val) => val && setEngine(val)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an engine..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="postgres">PostgreSQL 16 (Recommended)</SelectItem>
                                    <SelectItem value="mysql">MySQL 8.4 LTS</SelectItem>
                                    <SelectItem value="redis">Redis 7.2 In-Memory</SelectItem>
                                    <SelectItem value="clickhouse">ClickHouse Analytics</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="p-4 rounded-lg bg-white/[0.02] border border-white/6 text-sm text-muted">
                            Active configuration: <span className="text-foreground font-medium">{engine}</span> in <span className="text-foreground font-medium">{region}</span>
                        </div>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Select</PopupTitle>
                    <PopupDescription>
                        An animated dropdown picker built on top of Base UI Select, featuring popover spring physics, keyboard selection, and smooth chevron state rotation.
                    </PopupDescription>

                    <PopupCharacteristics
                        items={[
                            {
                                title: "Bouncy Popover Physics",
                                description: "Spring-curved ease (cubic-bezier(0.16, 1, 0.3, 1.25)) ensures snappy opening transitions.",
                            },
                            {
                                title: "Chevron Indicator Animation",
                                description: "Icon smoothly rotates 180° upon trigger activation.",
                            },
                            {
                                title: "Grouped Items & Labels",
                                description: "Organize lists into sections with subtle headers and auto-aligned selection checkmarks.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
