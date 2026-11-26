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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldMessage,
} from "@/components/ui/field"

export function InputPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <FieldGroup className="max-w-md">
                        <Field>
                            <FieldLabel htmlFor="standard-input">Standard Input</FieldLabel>
                            <Input id="standard-input" placeholder="Enter text…" />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="description-input">Input With Description</FieldLabel>
                            <Input
                                id="description-input"
                                placeholder="Enter text…"
                                aria-describedby="description-input-message"
                            />
                            <FieldMessage id="description-input-message">
                                Description Goes Here
                            </FieldMessage>
                        </Field>

                        <Field data-invalid>
                            <FieldLabel htmlFor="errored-input">Errored State</FieldLabel>
                            <Input id="errored-input" placeholder="Enter email…" aria-invalid />
                            <FieldMessage
                                invalid
                                description="Random Description"
                                error="Please enter a valid email address (e.g. name@domain.com)."
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="disabled-input">Disabled State</FieldLabel>
                            <Input id="disabled-input" placeholder="Disabled input…" disabled />
                        </Field>


                        <Field>
                            <FieldLabel htmlFor="textarea-input">Textarea Input</FieldLabel>
                            <Textarea id="textarea-input" placeholder="Enter message…" />
                        </Field>

                    </FieldGroup>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Input & Textarea</PopupTitle>
                    <PopupDescription>
                        Single-line and multi-line text controls sharing the unified input shell, rim lighting, and focus states.
                    </PopupDescription>
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
