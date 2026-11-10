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
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
} from "@/components/ui/dropdown"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverTitle,
    PopoverDescription,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button/button"
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field"
import { InputGroup, InputGroupInput } from "@/components/ui/input-group"
import { Checkbox } from "@/components/ui/checkbox/checkbox"
import {
    Copy,
    Code,
    Share2,
    Trash2,
    Grid,
    Sparkles,
} from "lucide-react"

export function DropdownPopoverPopup({ open, onOpenChange }: PopupProps) {
    const [, setActionFeedback] = React.useState<string | null>(null)

    // Submenu checkbox states (3 checks per submenu)
    const [sub1Checks, setSub1Checks] = React.useState({ opt1: true, opt2: false, opt3: false })
    const [sub2Checks, setSub2Checks] = React.useState({ opt1: false, opt2: true, opt3: false })

    // Popover settings state
    const [gridSize, setGridSize] = React.useState("24")
    const [snapToGrid, setSnapToGrid] = React.useState(true)
    const [showGuides, setShowGuides] = React.useState(true)

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col gap-6 max-w-sm w-full py-4">
                        <Field>
                            <FieldLabel>Example Basic Dropdown Menu</FieldLabel>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="w-40!">Options</DropdownMenuTrigger>
                                <DropdownMenuContent align="start" className="min-w-[240px]">
                                    <DropdownMenuItem onClick={() => setActionFeedback("Option 1 selected")}>
                                        <Copy className="size-4" />
                                        <span>Option 1</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setActionFeedback("Option 2 selected")}>
                                        <Code className="size-4" />
                                        <span>Option 2</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => setActionFeedback("Destructive Option selected")}
                                        variant="destructive"
                                    >
                                        <Trash2 className="size-4" />
                                        <span>Destructive Option</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </Field>

                        <Field>
                            <FieldLabel>Example Advanced Dropdown Menu</FieldLabel>
                            <FieldDescription>Multi-level context menu with submenus and inputs</FieldDescription>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="w-40!">Options</DropdownMenuTrigger>
                                <DropdownMenuContent align="start" className="min-w-[240px]">
                                    {/* Section 1: Label: Options */}
                                    <DropdownMenuGroup>
                                        <DropdownMenuLabel>Options</DropdownMenuLabel>
                                        <DropdownMenuItem onClick={() => setActionFeedback("Option 1 selected")}>
                                            <Copy className="size-4" />
                                            <span>Option 1</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setActionFeedback("Option 2 selected")}>
                                            <Code className="size-4" />
                                            <span>Option 2</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setActionFeedback("Option 3 selected")}>
                                            <Share2 className="size-4" />
                                            <span>Option 3</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>

                                    <DropdownMenuSeparator />

                                    {/* Section 2: Label: Sub Menus */}
                                    <DropdownMenuGroup>
                                        <DropdownMenuLabel>Sub Menus</DropdownMenuLabel>

                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                <span>Sub Menu 1</span>
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuSubContent>
                                                <DropdownMenuCheckboxItem
                                                    checked={sub1Checks.opt1}
                                                    onCheckedChange={(checked) => {
                                                        setSub1Checks((prev) => ({ ...prev, opt1: !!checked }))
                                                        setActionFeedback(`Sub Menu 1 - Option 1: ${checked ? "Checked" : "Unchecked"}`)
                                                    }}
                                                >
                                                    Option 1
                                                </DropdownMenuCheckboxItem>
                                                <DropdownMenuCheckboxItem
                                                    checked={sub1Checks.opt2}
                                                    onCheckedChange={(checked) => {
                                                        setSub1Checks((prev) => ({ ...prev, opt2: !!checked }))
                                                        setActionFeedback(`Sub Menu 1 - Option 2: ${checked ? "Checked" : "Unchecked"}`)
                                                    }}
                                                >
                                                    Option 2
                                                </DropdownMenuCheckboxItem>
                                                <DropdownMenuCheckboxItem
                                                    checked={sub1Checks.opt3}
                                                    onCheckedChange={(checked) => {
                                                        setSub1Checks((prev) => ({ ...prev, opt3: !!checked }))
                                                        setActionFeedback(`Sub Menu 1 - Option 3: ${checked ? "Checked" : "Unchecked"}`)
                                                    }}
                                                >
                                                    Option 3
                                                </DropdownMenuCheckboxItem>
                                            </DropdownMenuSubContent>
                                        </DropdownMenuSub>

                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                <span>Sub Menu 2</span>
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuSubContent>
                                                <DropdownMenuCheckboxItem
                                                    checked={sub2Checks.opt1}
                                                    onCheckedChange={(checked) => {
                                                        setSub2Checks((prev) => ({ ...prev, opt1: !!checked }))
                                                        setActionFeedback(`Sub Menu 2 - Option 1: ${checked ? "Checked" : "Unchecked"}`)
                                                    }}
                                                >
                                                    Option 1
                                                </DropdownMenuCheckboxItem>
                                                <DropdownMenuCheckboxItem
                                                    checked={sub2Checks.opt2}
                                                    onCheckedChange={(checked) => {
                                                        setSub2Checks((prev) => ({ ...prev, opt2: !!checked }))
                                                        setActionFeedback(`Sub Menu 2 - Option 2: ${checked ? "Checked" : "Unchecked"}`)
                                                    }}
                                                >
                                                    Option 2
                                                </DropdownMenuCheckboxItem>
                                                <DropdownMenuCheckboxItem
                                                    checked={sub2Checks.opt3}
                                                    onCheckedChange={(checked) => {
                                                        setSub2Checks((prev) => ({ ...prev, opt3: !!checked }))
                                                        setActionFeedback(`Sub Menu 2 - Option 3: ${checked ? "Checked" : "Unchecked"}`)
                                                    }}
                                                >
                                                    Option 3
                                                </DropdownMenuCheckboxItem>
                                            </DropdownMenuSubContent>
                                        </DropdownMenuSub>
                                    </DropdownMenuGroup>

                                    <DropdownMenuSeparator />

                                    {/* Section 3: Label: None */}
                                    <DropdownMenuItem
                                        variant="destructive"
                                        onClick={() => setActionFeedback("Destructive Option selected")}
                                    >
                                        <Trash2 className="size-4" />
                                        <span>Destructive Option</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </Field>

                        <Field>
                            <FieldLabel>Interactive Popover</FieldLabel>
                            <Popover>
                                <FieldDescription>
                                    Open a popover by{" "}
                                    <PopoverTrigger className="inline font-medium text-foreground underline underline-offset-4 hover:text-accent-text transition-colors cursor-pointer bg-transparent border-none p-0 outline-none">
                                        clicking here
                                    </PopoverTrigger>
                                </FieldDescription>
                                <PopoverContent >
                                    <PopoverHeader>
                                        <PopoverTitle >
                                            Display Settings
                                        </PopoverTitle>
                                        <PopoverDescription>
                                            Configure canvas grid division and guide overlays.
                                        </PopoverDescription>
                                    </PopoverHeader>

                                    <div className="flex flex-col">
                                        <Field>
                                            <FieldLabel >Grid Division (px)</FieldLabel>
                                            <InputGroup>
                                                <InputGroupInput
                                                    value={gridSize}
                                                    onChange={(e) => setGridSize(e.target.value)}
                                                    placeholder="24"
                                                    className="h-8 text-sm"
                                                />
                                            </InputGroup>
                                        </Field>

                                        <Field orientation="horizontal">
                                            <Checkbox
                                                checked={snapToGrid}
                                                onCheckedChange={(checked) => setSnapToGrid(!!checked)}
                                                id="snap-to-grid"
                                            />
                                            <FieldLabel htmlFor="snap-to-grid">
                                                Snap elements to grid
                                            </FieldLabel>
                                        </Field>

                                        <Field orientation="horizontal">
                                            <Checkbox
                                                checked={showGuides}
                                                onCheckedChange={(checked) => setShowGuides(!!checked)}
                                                id="show-guides"
                                            />
                                            <FieldLabel htmlFor="show-guides">
                                                Show smart guide overlays
                                            </FieldLabel>
                                        </Field>

                                        <div className="flex items-center justify-between pt-2 border-t border-white/6">
                                            <Button
                                                variant="secondary"
                                                onClick={() => {
                                                    setGridSize("24")
                                                    setSnapToGrid(true)
                                                    setShowGuides(true)
                                                }}
                                            >
                                                Reset
                                            </Button>
                                            <Button
                                                variant="primary"
                                                onClick={() => {
                                                    setActionFeedback(`Applied settings: ${gridSize}px`)
                                                }}
                                            >
                                                <span>Apply</span>
                                            </Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </Field>

                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Dropdown & Popover</PopupTitle>
                    <PopupDescription>
                        Context menus and rich floating overlays built on Base UI primitives, featuring nested flyout submenus, custom interactive forms, and edge-lit glass shells.
                    </PopupDescription>

                    <PopupCharacteristics
                        items={[
                            {
                                title: "Nested Submenus",
                                description: "Multi-level cascading flyout menus with collision detection, intelligent auto-flip, and instant keyboard traversal.",
                            },
                            {
                                title: "Rich Popover Overlays",
                                description: "Non-modal floating overlays supporting form controls, inputs, keyboard focus management, and automatic outside dismissal.",
                            },
                            {
                                title: "Item Variants & States",
                                description: "Unified item styling with check indicators, radio options, submenus, icons, and destructive action themes.",
                            },
                            {
                                title: "Edge-Lit Glass Shell",
                                description: "Both primitives share the same refined PopupShell container with subtle rim lighting and smooth easing curves.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
