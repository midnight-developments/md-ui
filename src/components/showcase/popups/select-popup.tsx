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
    type PopupProps,
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
import {
    Combobox,
    ComboboxInput,
    ComboboxContent,
    ComboboxList,
    ComboboxItem,
    ComboboxEmpty,
} from "@/components/ui/combobox"
import { Field, FieldLabel } from "@/components/ui/field"

const frameworks = [
    "Next.js",
    "SvelteKit",
    "Remix",
    "Astro",
    "Nuxt",
    "Vite",
    "FastAPI",
    "Hono",
]

export function SelectPopup({ open, onOpenChange }: PopupProps) {
    const [region, setRegion] = React.useState("us-east-1")
    const [engine, setEngine] = React.useState("postgres")
    const [framework, setFramework] = React.useState<string | null>("Next.js")

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col gap-6 max-w-sm w-full">
                        {/* 1. Cloud Region Select */}
                        <Field>
                            <FieldLabel>Primary Deployment Region</FieldLabel>
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
                        </Field>

                        {/* 2. Database Engine Select */}
                        <Field>
                            <FieldLabel>Database Engine & Version</FieldLabel>
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
                        </Field>

                        {/* 3. Searchable Combobox */}
                        <Field>
                            <FieldLabel>Framework Preset</FieldLabel>
                            <Combobox
                                items={frameworks}
                                value={framework}
                                onValueChange={(val) => setFramework(val)}
                            >
                                <ComboboxInput
                                    placeholder="Search framework..."
                                />
                                <ComboboxContent>
                                    <ComboboxList>
                                        {(item: string) => (
                                            <ComboboxItem key={item} value={item}>
                                                {item}
                                            </ComboboxItem>
                                        )}
                                    </ComboboxList>
                                    <ComboboxEmpty>No frameworks found</ComboboxEmpty>
                                </ComboboxContent>
                            </Combobox>
                        </Field>

                        <div className="p-3 rounded-md bg-white/[0.02] border border-white/6 text-[0.95rem] text-muted">
                            Active configuration: <span className="text-foreground font-medium">{engine}</span> in <span className="text-foreground font-medium">{region}</span> • <span className="text-foreground font-medium">{framework || "None"}</span>
                        </div>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Select & Combobox</PopupTitle>
                    <PopupDescription>
                        Animated dropdown and searchable combobox primitives built on Base UI, featuring floating pill hover physics, instant keyboard navigation, and edge-lit glass shells.
                    </PopupDescription>

                    <PopupCharacteristics
                        items={[
                            {
                                title: "Smooth Popover Physics",
                                description: "Calibrated ease curve (cubic-bezier(0.16, 1, 0.3, 1)) ensures clean, non-bouncy opening transitions.",
                            },
                            {
                                title: "Chevron Indicator Animation",
                                description: "Icon smoothly rotates 180° upon trigger activation.",
                            },
                            {
                                title: "Searchable Combobox Filtering",
                                description: "Built-in instant query filtering with empty state detection, keyboard navigation, and synchronized pill transitions.",
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
