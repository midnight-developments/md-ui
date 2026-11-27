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
    SelectGroup,
    SelectLabel,
    SelectItem,
} from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel, FieldMessage } from "@/components/ui/field"

export function SelectPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <FieldGroup className="max-w-md">
                        <Field>
                            <FieldLabel htmlFor="standard-select">Standard Select</FieldLabel>
                            <Select
                                defaultValue="option-1"
                                items={{
                                    "option-1": "Option 1",
                                    "option-2": "Option 2",
                                    "option-3": "Option 3",
                                }}
                            >
                                <SelectTrigger id="standard-select">
                                    <SelectValue placeholder="Select an option…" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="option-1">Option 1</SelectItem>
                                    <SelectItem value="option-2">Option 2</SelectItem>
                                    <SelectItem value="option-3">Option 3</SelectItem>
                                </SelectContent>
                            </Select>
                        </Field>


                        <Field>
                            <FieldLabel htmlFor="grouped-select">Grouped Select</FieldLabel>
                            <Select
                                defaultValue="option-1"
                                items={{
                                    "option-1": "Option 1",
                                    "option-2": "Option 2",
                                    "option-3": "Option 3",
                                    "option-4": "Option 4",
                                }}
                            >
                                <SelectTrigger id="grouped-select">
                                    <SelectValue placeholder="Select an option…" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Group 1</SelectLabel>
                                        <SelectItem value="option-1">Option 1</SelectItem>
                                        <SelectItem value="option-2">Option 2</SelectItem>
                                    </SelectGroup>
                                    <SelectGroup>
                                        <SelectLabel>Group 2</SelectLabel>
                                        <SelectItem value="option-3">Option 3</SelectItem>
                                        <SelectItem value="option-4">Option 4</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </Field>

                        <Field data-invalid>
                            <FieldLabel htmlFor="errored-select">Errored State</FieldLabel>
                            <Select>
                                <SelectTrigger id="errored-select" aria-invalid>
                                    <SelectValue placeholder="Select an option…" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="option-1">Option 1</SelectItem>
                                    <SelectItem value="option-2">Option 2</SelectItem>
                                    <SelectItem value="option-3">Option 3</SelectItem>
                                </SelectContent>
                            </Select>
                            <FieldMessage
                                invalid
                                description="Random Description"
                                error="Please select an option."
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="disabled-select">Disabled State</FieldLabel>
                            <Select disabled>
                                <SelectTrigger id="disabled-select">
                                    <SelectValue placeholder="Disabled select…" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="option-1">Option 1</SelectItem>
                                    <SelectItem value="option-2">Option 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </Field>
                    </FieldGroup>
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
