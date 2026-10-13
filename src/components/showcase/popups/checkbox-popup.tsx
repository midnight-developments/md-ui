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
import { CheckboxGroup, Checkbox } from "@/components/ui/checkbox-group/checkbox-group"
import { CardCheckboxGroup, CardCheckboxGroupItem } from "@/components/ui/card-checkbox-group/card-checkbox-group"
import { Field, FieldGroup, FieldLabel, FieldContent, FieldLegend, FieldDescription, FieldSet } from "@/components/ui/field"

export function CheckboxPopup({ open, onOpenChange }: PopupProps) {
    const [standardCheckboxes, setStandardCheckboxes] = React.useState<string[]>(["daily", "weekly"])
    const [addons, setAddons] = React.useState<string[]>(["pro", "analytics"])

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <FieldGroup className="max-w-sm">
                        <FieldSet>
                            <FieldLegend>Selectable Card Checkbox Group</FieldLegend>
                            <CardCheckboxGroup
                                value={addons}
                                onValueChange={(val) => setAddons(val)}
                                columns={1}
                            >
                                <Field>
                                    <CardCheckboxGroupItem value="analytics">
                                        <FieldContent>
                                            <FieldLabel className="cursor-pointer">Analytics</FieldLabel>
                                            <FieldDescription>Real-time telemetry & insights</FieldDescription>
                                        </FieldContent>
                                    </CardCheckboxGroupItem>
                                </Field>

                                <Field>
                                    <CardCheckboxGroupItem value="pro">
                                        <FieldContent>
                                            <FieldLabel className="cursor-pointer">Audit Logs</FieldLabel>
                                            <FieldDescription>Immutable compliance history</FieldDescription>
                                        </FieldContent>
                                    </CardCheckboxGroupItem>
                                </Field>
                            </CardCheckboxGroup>
                        </FieldSet>

                        <FieldSet>
                            <FieldLegend>Standard Checkbox List</FieldLegend>
                            <CheckboxGroup
                                value={standardCheckboxes}
                                onValueChange={(val) => setStandardCheckboxes(val)}
                            >
                                <Field orientation="horizontal">
                                    <Checkbox value="hourly" id="cb-hourly" />
                                    <FieldContent>
                                        <FieldLabel htmlFor="cb-hourly">Option 1</FieldLabel>
                                        <FieldDescription>This is a longer description of option 1.</FieldDescription>
                                    </FieldContent>
                                </Field>

                                <Field orientation="horizontal">
                                    <Checkbox value="daily" id="cb-daily" />
                                    <FieldContent>
                                        <FieldLabel htmlFor="cb-daily">Option 2</FieldLabel>
                                        <FieldDescription>This is a longer description of option 2.</FieldDescription>
                                    </FieldContent>
                                </Field>

                                <Field orientation="horizontal">
                                    <Checkbox value="weekly" id="cb-weekly" />
                                    <FieldContent>
                                        <FieldLabel htmlFor="cb-weekly">Option 3</FieldLabel>
                                        <FieldDescription>This is a longer description of option 3.</FieldDescription>
                                    </FieldContent>
                                </Field>
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
                                description: "Multi-select card layouts for feature add-ons, permission matrices, and interactive configurations.",
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
