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
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
} from "@/components/ui/dropdown"
import { Field, FieldLabel } from "@/components/ui/field"
import { Copy, Terminal, Share2, Download, Trash2 } from "lucide-react"

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
    const [actionFeedback, setActionFeedback] = React.useState<string | null>(null)

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col gap-5 max-w-sm w-full py-4">
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

                        {/* 4. Dropdown Menu */}
                        <Field>
                            <FieldLabel>Environment Operations</FieldLabel>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <span>Select an action...</span>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start" className="min-w-[220px]">
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem onClick={() => setActionFeedback("Copied Connection String")}>
                                            <Copy className="size-4" />
                                            <span>Copy Connection String</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setActionFeedback("Opened Web Terminal")}>
                                            <Terminal className="size-4" />
                                            <span>Open Web Terminal</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                <Share2 className="size-4" />
                                                <span>Share Environment</span>
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuSubContent>
                                                <DropdownMenuItem onClick={() => setActionFeedback("Invited Collaborator")}>Invite Collaborator</DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => setActionFeedback("Generated Read-Only Link")}>Generate Read-Only Link</DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => setActionFeedback("Exported Audit Log")}>Export Audit Log</DropdownMenuItem>
                                            </DropdownMenuSubContent>
                                        </DropdownMenuSub>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={() => setActionFeedback("Created Manual Backup")}>
                                            <Download className="size-4" />
                                            <span>Create Manual Backup</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem variant="destructive" onClick={() => setActionFeedback("Instance Terminated")}>
                                            <Trash2 className="size-4" />
                                            <span>Terminate Instance</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </Field>

                        <div className="p-3 rounded-md bg-white/[0.02] border border-white/6 text-[0.95rem] text-muted">
                            Active configuration: <span className="text-foreground font-medium">{engine}</span> in <span className="text-foreground font-medium">{region}</span> • <span className="text-foreground font-medium">{framework || "None"}</span>
                            {actionFeedback && (
                                <div className="mt-1 text-accent-text font-medium text-xs">
                                    Last action: {actionFeedback}
                                </div>
                            )}
                        </div>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Select, Dropdown & Combobox</PopupTitle>
                    <PopupDescription>
                        Animated select, dropdown menu, and searchable combobox primitives built on Base UI, featuring floating pill hover physics, instant keyboard navigation, and edge-lit glass shells.
                    </PopupDescription>

                    <PopupCharacteristics
                        items={[
                            {
                                title: "Smooth Popover Physics",
                                description: "Calibrated ease curve (cubic-bezier(0.16, 1, 0.3, 1)) ensures clean, non-bouncy opening transitions.",
                            },
                            {
                                title: "Unified InputShell Trigger",
                                description: "Dropdown and select triggers seamlessly inherit the exact same InputShell tokens, focus glow, and animated chevron.",
                            },
                            {
                                title: "Searchable Combobox Filtering",
                                description: "Built-in instant query filtering with empty state detection, keyboard navigation, and synchronized pill transitions.",
                            },
                            {
                                title: "Nested Submenus & Actions",
                                description: "Submenu flyouts with automated positioning, keyboard traversal, and destructive action styling.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
