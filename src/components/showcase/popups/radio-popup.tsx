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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio/radio-group"
import { CardRadioGroup, CardRadioGroupItem } from "@/components/ui/radio/card-radio-group"
import { Field, FieldGroup, FieldLabel, FieldContent, FieldLegend, FieldDescription, FieldSet } from "@/components/ui/field"

const cardRadioOptions = [
    { value: "card-1", label: "Option 1", description: "Description for option 1" },
    { value: "card-2", label: "Option 2", description: "Description for option 2" },
]

const standardRadioOptions = [
    { value: "opt-1", label: "Option 1", description: "This is a longer description of option 1." },
    { value: "opt-2", label: "Option 2", description: "This is a longer description of option 2." },
    { value: "opt-3", label: "Option 3", description: "This is a longer description of option 3." },
]

export function RadioPopup({ open, onOpenChange }: PopupProps) {
    const [standardRadio, setStandardRadio] = React.useState("opt-2")
    const [cardRadio, setCardRadio] = React.useState("card-2")

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <FieldGroup className="max-w-lg">
                        <FieldSet>
                            <FieldLegend>Selectable Card Radio Group</FieldLegend>
                            <CardRadioGroup
                                value={cardRadio}
                                onValueChange={(val) => val && setCardRadio(val as string)}
                                columns={2}
                            >
                                {cardRadioOptions.map((opt) => (
                                    <Field key={opt.value}>
                                        <CardRadioGroupItem value={opt.value}>
                                            <FieldContent>
                                                <FieldLabel className="cursor-pointer">{opt.label}</FieldLabel>
                                                <FieldDescription>{opt.description}</FieldDescription>
                                            </FieldContent>
                                        </CardRadioGroupItem>
                                    </Field>
                                ))}
                            </CardRadioGroup>
                        </FieldSet>

                        <FieldSet>
                            <FieldLegend>Standard Radio List</FieldLegend>
                            <RadioGroup
                                value={standardRadio}
                                onValueChange={(val) => val && setStandardRadio(val as string)}
                            >
                                {standardRadioOptions.map((opt) => (
                                    <Field orientation="horizontal" key={opt.value}>
                                        <RadioGroupItem value={opt.value} id={`r-${opt.value}`} />
                                        <FieldContent>
                                            <FieldLabel htmlFor={`r-${opt.value}`}>{opt.label}</FieldLabel>
                                            <FieldDescription>{opt.description}</FieldDescription>
                                        </FieldContent>
                                    </Field>
                                ))}
                            </RadioGroup>
                        </FieldSet>
                    </FieldGroup>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Radio</PopupTitle>
                    <PopupDescription>
                        Single-choice indicators and card-level radio selections with animated indicators, accessible focus styling, and active state transitions.
                    </PopupDescription>

                    <PopupCharacteristics
                        items={[
                            {
                                title: "Card Radio System",
                                description: "Transform standard radio groups into rich multi-column cards with custom descriptions.",
                            },
                            {
                                title: "Active Rim Light & Gradient",
                                description: "Smoothly transitioned purple radial gradient and luminous 2px border on selected card states.",
                            },
                            {
                                title: "Base UI Radio Primitive",
                                description: "Full keyboard arrow navigation (Up/Down/Left/Right) and accessible ARIA radio roles built-in.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
