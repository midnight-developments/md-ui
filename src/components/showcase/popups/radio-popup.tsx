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
import { Field, FieldLabel, FieldTitle, FieldContent, FieldDescription } from "@/components/ui/field"

export function RadioPopup({ open, onOpenChange }: PopupProps) {
    const [standardRadio, setStandardRadio] = React.useState("daily")
    const [plan, setPlan] = React.useState("pro")

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col gap-12 max-w-lg w-full">
                        <Field>
                            <FieldLabel>Selectable Card Radio Group</FieldLabel>
                            <CardRadioGroup
                                value={plan}
                                onValueChange={(val) => val && setPlan(val as string)}
                                columns={2}
                            >
                                <CardRadioGroupItem value="starter">
                                    <FieldLabel className="cursor-pointer">Starter</FieldLabel>
                                    <FieldDescription>10 GB Storage · 1 Core</FieldDescription>
                                </CardRadioGroupItem>

                                <CardRadioGroupItem value="pro">
                                    <FieldLabel className="cursor-pointer">Pro Tier</FieldLabel>
                                    <FieldDescription>50 GB Storage · 4 Cores</FieldDescription>
                                </CardRadioGroupItem>
                            </CardRadioGroup>
                        </Field>

                        <Field>
                            <FieldLabel>Standard Radio List (Backup Frequency)</FieldLabel>
                            <RadioGroup
                                value={standardRadio}
                                onValueChange={(val) => val && setStandardRadio(val as string)}
                            >
                                <Field orientation="horizontal">
                                    <RadioGroupItem value="hourly" id="r-hourly" />
                                    <label htmlFor="r-hourly" className="cursor-pointer flex-1">
                                        <FieldContent>
                                            <FieldTitle>Every hour</FieldTitle>
                                            <FieldDescription>Continuous point-in-time recovery</FieldDescription>
                                        </FieldContent>
                                    </label>
                                </Field>

                                <Field orientation="horizontal">
                                    <RadioGroupItem value="daily" id="r-daily" />
                                    <label htmlFor="r-daily" className="cursor-pointer flex-1">
                                        <FieldContent>
                                            <FieldTitle>Daily snapshot</FieldTitle>
                                            <FieldDescription>Daily automated backup at 00:00 UTC</FieldDescription>
                                        </FieldContent>
                                    </label>
                                </Field>

                                <Field orientation="horizontal">
                                    <RadioGroupItem value="weekly" id="r-weekly" />
                                    <label htmlFor="r-weekly" className="cursor-pointer flex-1">
                                        <FieldContent>
                                            <FieldTitle>Weekly archival</FieldTitle>
                                            <FieldDescription>Weekly archival backup</FieldDescription>
                                        </FieldContent>
                                    </label>
                                </Field>
                            </RadioGroup>
                        </Field>
                    </div>
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
                                title: "Spring Dot Indicator",
                                description: "The inner accent dot scales in with smooth opacity transitions.",
                            },
                            {
                                title: "Base UI Radio Primitive",
                                description: "Keyboard arrow navigation (Up/Down/Left/Right) built-in out of the box.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
