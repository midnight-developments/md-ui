"use client"

import {
    Popup,
    PopupContent,
    PopupPreview,
    PopupDetails,
    PopupTitle,
    PopupDescription,
    type PopupProps,
} from "@/components/showcase/popup"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"
import { Field, FieldLabel } from "@/components/ui/field"

export function SelectPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <Field className="max-w-sm">
                        <FieldLabel>Select</FieldLabel>
                        <Select defaultValue="option-1">
                            <SelectTrigger>
                                <SelectValue placeholder="Select an option…" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="option-1">Option 1</SelectItem>
                                <SelectItem value="option-2">Option 2</SelectItem>
                                <SelectItem value="option-3">Option 3</SelectItem>
                            </SelectContent>
                        </Select>
                    </Field>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Select</PopupTitle>
                    <PopupDescription>
                        Accessible option picker built on Base UI Select primitives with the unified input shell trigger and floating popup shell.
                    </PopupDescription>
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
