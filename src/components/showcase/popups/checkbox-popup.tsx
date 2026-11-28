"use client"

import * as React from "react"
import {
    Popup,
    PopupContent,
    PopupPreview,
    PopupDetails,
    PopupTitle,
    PopupDescription,
    PopupKeyboardInteractions,
    type PopupProps,
} from "@/components/showcase/popup"
import {
    Checkbox,
    CheckboxGroup,
    CardCheckboxGroup,
    CardCheckboxGroupItem,
} from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel, FieldContent, FieldLegend, FieldDescription, FieldSet } from "@/components/ui/field"
import { KbdGroup, KbdShift, KbdSpace, KbdTab } from "@/components/ui/kbd"

const cardCheckboxOptions = [
    { value: "card-1", label: "Option 1", description: "Description for option 1" },
    { value: "card-2", label: "Option 2", description: "Description for option 2" },
]

const standardCheckboxOptions = [
    { value: "opt-1", label: "Option A", description: "This is a description for Option A." },
    { value: "opt-2", label: "Option B", description: "This is a description for Option B." },
    { value: "opt-3", label: "Option C", description: "This is a description for Option C." },
    { value: "opt-disabled", label: "Disabled Option", description: "This is a disabled option.", disabled: true },
]

export function CheckboxPopup({ open, onOpenChange }: PopupProps) {
    const [standardCheckboxes, setStandardCheckboxes] = React.useState<string[]>([])
    const [descriptionCheckboxes, setDescriptionCheckboxes] = React.useState<string[]>([])
    const [cardCheckboxes, setCardCheckboxes] = React.useState<string[]>([])

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <FieldGroup className="max-w-sm gap-12">
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
                                            <FieldContent className="gap-2">
                                                <FieldLabel className="cursor-pointer">{opt.label}</FieldLabel>
                                                <FieldDescription >{opt.description}</FieldDescription>
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
                                        <Checkbox value={opt.value} id={`cb-${opt.value}`} disabled={opt.disabled} />
                                        <FieldLabel htmlFor={`cb-${opt.value}`}>{opt.label}</FieldLabel>
                                    </Field>
                                ))}
                            </CheckboxGroup>
                        </FieldSet>

                        <FieldSet>
                            <FieldLegend>Checkbox List With Descriptions</FieldLegend>
                            <CheckboxGroup
                                value={descriptionCheckboxes}
                                onValueChange={(val) => setDescriptionCheckboxes(val)}
                            >
                                {standardCheckboxOptions.map((opt) => (
                                    <Field key={opt.value} orientation="horizontal">
                                        <Checkbox value={opt.value} id={`cbd-${opt.value}`} disabled={opt.disabled} />
                                        <FieldContent>
                                            <FieldLabel htmlFor={`cbd-${opt.value}`}>{opt.label}</FieldLabel>
                                            <FieldDescription>{opt.description}</FieldDescription>
                                        </FieldContent>
                                    </Field>
                                ))}
                            </CheckboxGroup>
                        </FieldSet>
                    </FieldGroup>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Standard Checkbox List</PopupTitle>
                    <PopupDescription>
                        Multi-selection checkboxes and rich card-level checkbox groups featuring calibrated tactile states, checkmark glyphs, and accessible group primitives.
                    </PopupDescription>

                    <PopupKeyboardInteractions
                        items={[
                            {
                                keys: <KbdTab />,
                                description: "Moves focus to the next checkbox in the group.",
                            },
                            {
                                keys: <KbdGroup separator="+"><KbdShift /><KbdTab /></KbdGroup>,
                                description: "Moves focus to the previous checkbox in the group.",
                            },
                            {
                                keys: <KbdSpace />,
                                description: "Toggles the focused checkbox checked or unchecked.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
