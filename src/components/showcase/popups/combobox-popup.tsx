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
    Combobox,
    ComboboxInput,
    ComboboxContent,
    ComboboxList,
    ComboboxItem,
    ComboboxEmpty,
} from "@/components/ui/combobox"
import { Field, FieldLabel } from "@/components/ui/field"

const options = ["Option 1", "Option 2", "Option 3"]

export function ComboboxPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <Field className="max-w-sm">
                        <FieldLabel>Combobox</FieldLabel>
                        <Combobox items={options}>
                            <ComboboxInput placeholder="Search options…" />
                            <ComboboxContent>
                                <ComboboxList>
                                    {options.map((opt) => (
                                        <ComboboxItem key={opt} value={opt}>
                                            {opt}
                                        </ComboboxItem>
                                    ))}
                                </ComboboxList>
                                <ComboboxEmpty>No options found</ComboboxEmpty>
                            </ComboboxContent>
                        </Combobox>
                    </Field>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Combobox</PopupTitle>
                    <PopupDescription>
                        Searchable option selector built on Base UI Combobox primitives with live filtering and keyboard navigation.
                    </PopupDescription>
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}

