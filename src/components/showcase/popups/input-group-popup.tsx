"use client"

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
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import { PasswordInput } from "@/components/ui/password-input"
import { Field, FieldGroup, FieldLabel, FieldMessage } from "@/components/ui/field"
import { CopyIcon, FileCode, RotateCw, Search, CreditCardIcon } from "lucide-react"
import { KbdEnter, KbdGroup, KbdShift, KbdSpace, KbdTab } from "@/components/ui/kbd"

export function InputGroupPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <FieldGroup className="max-w-md">
                        <Field>
                            <FieldLabel htmlFor="search-input-group">Search Input</FieldLabel>
                            <InputGroup>
                                <InputGroupAddon align="inline-start">
                                    <Search className="size-4 text-muted" />
                                </InputGroupAddon>
                                <InputGroupInput id="search-input-group" placeholder="Search…" />
                            </InputGroup>
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="password-input-group">Password Input</FieldLabel>
                            <PasswordInput id="password-input-group" placeholder="Enter password…" />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="currency-input-group">Currency Input</FieldLabel>
                            <InputGroup>
                                <InputGroupAddon align="inline-start">
                                    <InputGroupText>$</InputGroupText>
                                </InputGroupAddon>
                                <InputGroupInput id="currency-input-group" placeholder="0.00" />
                                <InputGroupAddon align="inline-end">
                                    <InputGroupText>USD</InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="code-input-group">Block Input</FieldLabel>
                            <InputGroup>
                                <InputGroupAddon align="block-start" className="justify-between border-b ">
                                    <InputGroupText className="font-mono">
                                        <FileCode className="size-4" />
                                        script.js
                                    </InputGroupText>
                                    <InputGroupButton className="ml-auto mr-1" aria-label="Reset code">
                                        <RotateCw />
                                    </InputGroupButton>
                                    <InputGroupButton aria-label="Copy code">
                                        <CopyIcon />
                                    </InputGroupButton>
                                </InputGroupAddon>
                                <InputGroupTextarea
                                    id="code-input-group"
                                    placeholder="console.log('Hello, world!');"
                                    className=" min-h-28"
                                />
                                <InputGroupAddon align="block-end" className="border-t">
                                    <InputGroupText className="text-sm">
                                        Line 1, Column 1
                                    </InputGroupText>

                                </InputGroupAddon>
                            </InputGroup>
                        </Field>

                        <Field data-invalid>
                            <FieldLabel htmlFor="errored-input-group">Errored State</FieldLabel>
                            <InputGroup>
                                <InputGroupAddon align="inline-start">
                                    <CreditCardIcon className="size-4 text-muted" />
                                </InputGroupAddon>
                                <InputGroupInput
                                    id="errored-input-group"
                                    placeholder="Search…"
                                    aria-invalid
                                />
                            </InputGroup>
                            <FieldMessage
                                invalid
                                description="Random Description"
                                error="Please enter a valid card number."
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="disabled-input-group">Disabled State</FieldLabel>
                            <InputGroup>
                                <InputGroupAddon align="inline-start">
                                    <Search className="size-4 text-muted" />
                                </InputGroupAddon>
                                <InputGroupInput
                                    id="disabled-input-group"
                                    placeholder="Disabled input…"
                                    disabled
                                />
                            </InputGroup>
                        </Field>
                    </FieldGroup>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>InputGroup</PopupTitle>
                    <PopupDescription>
                        Composable input container supporting leading and trailing icon or text addons inside the input shell.
                    </PopupDescription>

                    <PopupKeyboardInteractions
                        items={[
                            {
                                keys: <KbdTab />,
                                description: "Moves focus between the input and interactive buttons in the group.",
                            },
                            {
                                keys: <KbdGroup separator="+"><KbdShift /><KbdTab /></KbdGroup>,
                                description: "Moves focus backward through buttons and the input in the group.",
                            },
                            {
                                keys: <KbdGroup separator="or"><KbdEnter /><KbdSpace /></KbdGroup>,
                                description: "Activates the focused button inside the group.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup >
    )
}

