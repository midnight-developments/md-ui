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
    RadioGroup,
    RadioGroupItem,
    CardRadioGroup,
    CardRadioGroupItem,
} from "@/components/ui/radio-group"
import { Field, FieldGroup, FieldLabel, FieldContent, FieldLegend, FieldDescription, FieldSet } from "@/components/ui/field"
import { KbdArrowDown, KbdArrowLeft, KbdArrowRight, KbdArrowUp, KbdGroup, KbdSpace } from "@/components/ui/kbd"

const cardRadioOptions = [
    { value: "card-1", label: "Option 1", description: "Description for option 1" },
    { value: "card-2", label: "Option 2", description: "Description for option 2" },
]

const standardRadioOptions = [
    { value: "opt-1", label: "Option 1", description: "This is a longer description of option 1." },
    { value: "opt-2", label: "Option 2", description: "This is a longer description of option 2." },
    { value: "opt-3", label: "Option 3", description: "This is a longer description of option 3." },
    { value: "opt-disabled", label: "Disabled Option", description: "This is a disabled option.", disabled: true },
]

export function RadioPopup({ open, onOpenChange }: PopupProps) {
    const [standardRadio, setStandardRadio] = React.useState("opt-2")
    const [descriptionRadio, setDescriptionRadio] = React.useState("opt-2")
    const [cardRadio, setCardRadio] = React.useState("card-2")

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <FieldGroup className="max-w-lg gap-12">
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
                                        <RadioGroupItem value={opt.value} id={`r-${opt.value}`} disabled={opt.disabled} />
                                        <FieldLabel htmlFor={`r-${opt.value}`}>{opt.label}</FieldLabel>
                                    </Field>
                                ))}
                            </RadioGroup>
                        </FieldSet>

                        <FieldSet>
                            <FieldLegend>Radio List With Descriptions</FieldLegend>
                            <RadioGroup
                                value={descriptionRadio}
                                onValueChange={(val) => val && setDescriptionRadio(val as string)}
                            >
                                {standardRadioOptions.map((opt) => (
                                    <Field orientation="horizontal" key={opt.value}>
                                        <RadioGroupItem value={opt.value} id={`rd-${opt.value}`} disabled={opt.disabled} />
                                        <FieldContent>
                                            <FieldLabel htmlFor={`rd-${opt.value}`}>{opt.label}</FieldLabel>
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

                    <PopupKeyboardInteractions
                        items={[
                            {
                                keys: <KbdGroup separator="or"><KbdArrowDown /><KbdArrowRight /></KbdGroup>,
                                description: "Moves focus and selects the next option in the group.",
                            },
                            {
                                keys: <KbdGroup separator="or"><KbdArrowUp /><KbdArrowLeft /></KbdGroup>,
                                description: "Moves focus and selects the previous option in the group.",
                            },
                            {
                                keys: <KbdSpace />,
                                description: "Selects the focused radio option.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
