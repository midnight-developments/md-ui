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
import { CheckboxGroup, Checkbox } from "@/components/ui/checkbox/checkbox"
import { CardCheckboxGroup, CardCheckboxGroupItem } from "@/components/ui/checkbox/card-checkbox"
import { Field, FieldGroup, FieldLabel, FieldContent, FieldLegend, FieldDescription, FieldSet } from "@/components/ui/field"

const cardCheckboxOptions = [
    { value: "card-1", label: "Option 1", description: "Description for option 1" },
    { value: "card-2", label: "Option 2", description: "Description for option 2" },
]

const standardCheckboxOptions = [
    { value: "opt-1", label: "Option A", description: "This is a description for Option A." },
    { value: "opt-2", label: "Option B", description: "This is a description for Option B." },
    { value: "opt-3", label: "Option C", description: "This is a description for Option C." },
]

export function CheckboxPopup({ open, onOpenChange }: PopupProps) {
    const [standardCheckboxes, setStandardCheckboxes] = React.useState<string[]>([])
    const [cardCheckboxes, setCardCheckboxes] = React.useState<string[]>([])

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <FieldGroup className="max-w-sm">
                        <FieldSet>
                            <FieldLegend>Selectable Card Checkbox Group</FieldLegend>
                            <CardCheckboxGroup
                                value={cardCheckboxes}
                                onValueChange={(val) => setCardCheckboxes(val)}
                                columns={1}
                            >
                                {cardCheckboxOptions.map((opt) => (
                                    <Field key={opt.value}>
                                        <CardCheckboxGroupItem value={opt.value}>
                                            <FieldContent>
                                                <FieldLabel className="cursor-pointer">{opt.label}</FieldLabel>
                                                <FieldDescription>{opt.description}</FieldDescription>
                                            </FieldContent>
                                        </CardCheckboxGroupItem>
                                    </Field>
                                ))}
                            </CardCheckboxGroup>
                        </FieldSet>

                        <FieldSet>
                            <FieldLegend>Standard Checkbox List</FieldLegend>
                            <CheckboxGroup
                                value={standardCheckboxes}
                                onValueChange={(val) => setStandardCheckboxes(val)}
                            >
                                {standardCheckboxOptions.map((opt) => (
                                    <Field key={opt.value} orientation="horizontal">
                                        <Checkbox value={opt.value} id={`cb-${opt.value}`} />
                                        <FieldContent>
                                            <FieldLabel htmlFor={`cb-${opt.value}`}>{opt.label}</FieldLabel>
                                            <FieldDescription>{opt.description}</FieldDescription>
                                        </FieldContent>
                                    </Field>
                                ))}
                            </CheckboxGroup>
                        </FieldSet>
                    </FieldGroup>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Checkbox</PopupTitle>
                    <PopupDescription>
                        Multi-selection checkboxes and rich card-level checkbox groups featuring calibrated tactile states, checkmark glyphs, and accessible group primitives.
                    </PopupDescription>

                    <PopupCharacteristics
                        items={[
                            {
                                title: "Card Checkbox System",
                                description: "Multi-select card layouts with distinct descriptions and configurable grid columns.",
                            },
                            {
                                title: "Tactile Accent Rim",
                                description: "Crisp active borders and calibrated dark gradient fills with animated SVG checkmark reveal.",
                            },
                            {
                                title: "Base UI Checkbox Primitive",
                                description: "Headless group value management supporting controlled arrays, mixed/indeterminate states, and ARIA roles.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
