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

const singleSelectOptions = [
    { value: "option-1", label: "Option 1" },
    { value: "option-2", label: "Option 2" },
    { value: "option-3", label: "Option 3" },
    { value: "option-4", label: "Option 4" },
]

const categorizedSelectGroups = [
    {
        label: "Category 1",
        items: [
            { value: "cat-1-item-1", label: "First Item" },
            { value: "cat-1-item-2", label: "Second Item" },
            { value: "cat-1-item-3", label: "Third Item" },
        ],
    },
    {
        label: "Category 2",
        items: [
            { value: "cat-2-item-1", label: "Fourth Item" },
            { value: "cat-2-item-2", label: "Fifth Item" },
        ],
    },
]

const comboOptions = ["Option A", "Option B", "Option C", "Option D"]

export function SelectPopup({ open, onOpenChange }: PopupProps) {
    const [singleValue, setSingleValue] = React.useState("option-1")
    const [categorizedValue, setCategorizedValue] = React.useState("cat-1-item-1")
    const [comboboxValue, setComboboxValue] = React.useState<string>("")

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col gap-5 max-w-sm w-full py-4">

                        <Field>
                            <FieldLabel>Select Input</FieldLabel>
                            <Select value={singleValue} onValueChange={(val) => val && setSingleValue(val)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an option…" />
                                </SelectTrigger>
                                <SelectContent>
                                    {singleSelectOptions.map((opt) => (
                                        <SelectItem key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>

                        <Field>
                            <FieldLabel>Select Input With Categories</FieldLabel>
                            <Select value={categorizedValue} onValueChange={(val) => val && setCategorizedValue(val)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an option…" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categorizedSelectGroups.map((group) => (
                                        <SelectGroup key={group.label}>
                                            <SelectLabel>{group.label}</SelectLabel>
                                            {group.items.map((item) => (
                                                <SelectItem key={item.value} value={item.value}>
                                                    {item.label}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>

                        <Field>
                            <FieldLabel>Combobox Input</FieldLabel>
                            <Combobox
                                value={comboboxValue}
                                onValueChange={(val) => setComboboxValue(val)}
                            >
                                <ComboboxInput
                                    placeholder="Select an option…"
                                />
                                <ComboboxContent>
                                    <ComboboxList>
                                        {comboOptions.map((opt) => (
                                            <ComboboxItem key={opt} value={opt}>
                                                {opt}
                                            </ComboboxItem>
                                        ))}
                                    </ComboboxList>
                                    <ComboboxEmpty>No options found</ComboboxEmpty>
                                </ComboboxContent>
                            </Combobox>
                        </Field>

                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Select & Combobox</PopupTitle>
                    <PopupDescription>
                        Animated select and searchable combobox primitives built on Base UI, featuring floating pill hover physics, instant keyboard navigation, and edge-lit glass shells.
                    </PopupDescription>

                    <PopupCharacteristics
                        items={[
                            {
                                title: "Smooth Popover Physics",
                                description: "Calibrated ease curve (cubic-bezier(0.16, 1, 0.3, 1)) ensures clean, non-bouncy opening transitions.",
                            },
                            {
                                title: "Unified InputShell Trigger",
                                description: "Select triggers seamlessly inherit the exact same InputShell tokens, focus glow, and animated chevron.",
                            },
                            {
                                title: "Searchable Combobox Filtering",
                                description: "Built-in instant query filtering with empty state detection, keyboard navigation, and synchronized pill transitions.",
                            },
                            {
                                title: "Grouped Options & Hierarchy",
                                description: "Support for categorized option groups with distinct labels and accessible keyboard traversal.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
