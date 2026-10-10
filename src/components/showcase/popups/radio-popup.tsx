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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CardRadioGroup, CardRadioGroupItem } from "@/components/ui/card-radio-group/card-radio-group"
import { Field, FieldGroup, FieldLabel, FieldContent, FieldLegend, FieldDescription, FieldSet } from "@/components/ui/field"
import { Badge } from "@/components/ui/badge/badge"

export function RadioPopup({ open, onOpenChange }: PopupProps) {
    const [standardRadio, setStandardRadio] = React.useState("daily")
    const [plan, setPlan] = React.useState("pro")

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <FieldGroup className="max-w-lg">
                        <FieldSet>
                            <FieldLegend>Selectable Card Radio Group</FieldLegend>
                            <CardRadioGroup
                                value={plan}
                                onValueChange={(val) => val && setPlan(val as string)}
                                columns={2}
                            >
                                <Field>
                                    <CardRadioGroupItem value="starter">
                                        <FieldContent>
                                            <FieldLabel className="cursor-pointer">Starter</FieldLabel>
                                            <FieldDescription>10 GB Storage · 1 Core</FieldDescription>
                                        </FieldContent>
                                    </CardRadioGroupItem>
                                </Field>

                                <Field>
                                    <CardRadioGroupItem value="pro">
                                        <FieldContent>
                                            <FieldLabel className="cursor-pointer">Pro Tier</FieldLabel>
                                            <FieldDescription>50 GB Storage · 4 Cores</FieldDescription>
                                        </FieldContent>
                                    </CardRadioGroupItem>
                                </Field>
                            </CardRadioGroup>
                        </FieldSet>

                        <FieldSet>
                            <FieldLegend>Standard Radio List (Backup Frequency)</FieldLegend>
                            <RadioGroup
                                value={standardRadio}
                                onValueChange={(val) => val && setStandardRadio(val as string)}
                            >
                                <Field orientation="horizontal">
                                    <RadioGroupItem value="hourly" id="r-hourly" />
                                    <FieldContent>
                                        <FieldLabel htmlFor="r-hourly">Every hour</FieldLabel>
                                        <FieldDescription>Continuous point-in-time recovery</FieldDescription>
                                    </FieldContent>
                                </Field>

                                <Field orientation="horizontal">
                                    <RadioGroupItem value="daily" id="r-daily" />
                                    <FieldContent>
                                        <FieldLabel htmlFor="r-daily">Daily snapshot</FieldLabel>
                                        <FieldDescription>Daily automated backup at 00:00 UTC</FieldDescription>
                                    </FieldContent>
                                </Field>

                                <Field orientation="horizontal">
                                    <RadioGroupItem value="weekly" id="r-weekly" />
                                    <FieldContent>
                                        <FieldLabel htmlFor="r-weekly">Weekly archival</FieldLabel>
                                        <FieldDescription>Weekly archival backup</FieldDescription>
                                    </FieldContent>
                                </Field>
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
                                description: "Transform standard radio groups into rich multi-column cards for plans, tiers, and settings.",
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
