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
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Field, FieldLabel } from "@/components/ui/field"
import { Search } from "lucide-react"

export function InputGroupPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <Field className="max-w-sm">
                        <FieldLabel>InputGroup</FieldLabel>
                        <InputGroup>
                            <InputGroupAddon align="inline-start">
                                <Search className="size-4 text-muted" />
                            </InputGroupAddon>
                            <InputGroupInput placeholder="Search…" />
                        </InputGroup>
                    </Field>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>InputGroup</PopupTitle>
                    <PopupDescription>
                        Composable input container supporting leading and trailing icon or text addons inside the input shell.
                    </PopupDescription>
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}

