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
    Combobox,
    ComboboxCollection,
    ComboboxInput,
    ComboboxContent,
    ComboboxList,
    ComboboxGroup,
    ComboboxLabel,
    ComboboxItem,
    ComboboxEmpty,
} from "@/components/ui/combobox"
import { Field, FieldGroup, FieldLabel, FieldMessage } from "@/components/ui/field"
import { Kbd, KbdArrowDown, KbdArrowUp, KbdEnter, KbdGroup } from "@/components/ui/kbd"

const options = ["Option 1", "Option 2", "Option 3"]
const groupedOptions = [
    { value: "Group 1", items: ["Option 1", "Option 2"] },
    { value: "Group 2", items: ["Option 3", "Option 4"] },
]

export function ComboboxPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <FieldGroup className="max-w-md">
                        <Field>
                            <FieldLabel htmlFor="standard-combobox">Standard Combobox</FieldLabel>
                            <Combobox items={options}>
                                <ComboboxInput id="standard-combobox" placeholder="Search options…" />
                                <ComboboxContent>
                                    <ComboboxList>
                                        {(item) => (
                                            <ComboboxItem key={item} value={item}>
                                                {item}
                                            </ComboboxItem>
                                        )}
                                    </ComboboxList>
                                    <ComboboxEmpty>No options found</ComboboxEmpty>
                                </ComboboxContent>
                            </Combobox>
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="grouped-combobox">Grouped Combobox</FieldLabel>
                            <Combobox items={groupedOptions}>
                                <ComboboxInput id="grouped-combobox" placeholder="Search options…" />
                                <ComboboxContent>
                                    <ComboboxList>
                                        {(group) => (
                                            <ComboboxGroup key={group.value} items={group.items}>
                                                <ComboboxLabel>{group.value}</ComboboxLabel>
                                                <ComboboxCollection>
                                                    {(item: string) => (
                                                        <ComboboxItem key={item} value={item}>
                                                            {item}
                                                        </ComboboxItem>
                                                    )}
                                                </ComboboxCollection>
                                            </ComboboxGroup>
                                        )}
                                    </ComboboxList>
                                    <ComboboxEmpty>No options found</ComboboxEmpty>
                                </ComboboxContent>
                            </Combobox>
                        </Field>

                        <Field data-invalid>
                            <FieldLabel htmlFor="errored-combobox">Errored State</FieldLabel>
                            <Combobox items={options}>
                                <ComboboxInput
                                    id="errored-combobox"
                                    placeholder="Search options…"
                                    aria-invalid
                                />
                                <ComboboxContent>
                                    <ComboboxList>
                                        {(opt: string) => (
                                            <ComboboxItem key={opt} value={opt}>
                                                {opt}
                                            </ComboboxItem>
                                        )}
                                    </ComboboxList>
                                    <ComboboxEmpty>No options found</ComboboxEmpty>
                                </ComboboxContent>
                            </Combobox>
                            <FieldMessage
                                invalid
                                description="Random Description"
                                error="Please select an option."
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="disabled-combobox">Disabled State</FieldLabel>
                            <Combobox items={options} disabled>
                                <ComboboxInput
                                    id="disabled-combobox"
                                    placeholder="Disabled combobox…"
                                    disabled
                                />
                                <ComboboxContent>
                                    <ComboboxList>
                                        {(opt: string) => (
                                            <ComboboxItem key={opt} value={opt}>
                                                {opt}
                                            </ComboboxItem>
                                        )}
                                    </ComboboxList>
                                    <ComboboxEmpty>No options found</ComboboxEmpty>
                                </ComboboxContent>
                            </Combobox>
                        </Field>
                    </FieldGroup>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Combobox</PopupTitle>
                    <PopupDescription>
                        Searchable option selector built on Base UI Combobox primitives with live filtering and keyboard navigation.
                    </PopupDescription>

                    <PopupKeyboardInteractions
                        items={[
                            {
                                keys: <KbdGroup separator="or"><KbdArrowDown /><KbdArrowUp /></KbdGroup>,
                                description: "Opens the list or moves focus between filtered options.",
                            },
                            {
                                keys: <KbdGroup separator="or"><Kbd>Home</Kbd><Kbd>End</Kbd></KbdGroup>,
                                description: "Jumps to the first or last option.",
                            },
                            {
                                keys: <KbdEnter />,
                                description: "Selects the highlighted option.",
                            },
                            {
                                keys: <Kbd>Escape</Kbd>,
                                description: "Closes the list or clears the input.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}

