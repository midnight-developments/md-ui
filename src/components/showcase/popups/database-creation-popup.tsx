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
    DialogShell,
    DialogHeader,
    DialogTitle,
    DialogBody,
    DialogFooter,
} from "@/components/ui/dialog/dialog"
import { Button } from "@/components/ui/button/button"
import { CopyIcon } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Field, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxList } from "@/components/ui/combobox"
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DatabaseCreationPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col items-center gap-6  w-full">
                        <DialogShell className="w-140">
                            <DialogHeader>
                                <DialogTitle>Share Project</DialogTitle>
                            </DialogHeader>
                            <DialogBody className="flex flex-col gap-8">
                                <Field>
                                    <FieldLabel>Document Link</FieldLabel>
                                    <InputGroup>
                                        <InputGroupInput placeholder="https://docs.google.com/document/u/0/" className="pointer-events-none" >
                                        </InputGroupInput>
                                        <InputGroupAddon align="inline-end" className="cursor-pointer">
                                            <CopyIcon></CopyIcon>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Field>


                                <Field>
                                    <FieldLabel>Search Recipents</FieldLabel>
                                    <Combobox

                                    >
                                        <ComboboxInput
                                            placeholder="Select an option…"
                                        />
                                        <ComboboxContent>
                                            <ComboboxList>

                                            </ComboboxList>
                                            <ComboboxEmpty>No options found</ComboboxEmpty>
                                        </ComboboxContent>
                                    </Combobox>
                                </Field>


                                <div className="flex flex-col gap-3">
                                    <p>Recipents</p>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex justify-between">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="w-8 h-8">
                                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p>Shadab Ahmed</p>
                                                    <p className="text-sm text-secondary">m@shadcn.com</p>
                                                </div>
                                            </div>
                                            <Select value="Admin">
                                                <SelectTrigger className="w-30"><SelectValue ></SelectValue></SelectTrigger>
                                                <SelectContent></SelectContent>
                                            </Select>
                                        </div>

                                        <div className="flex justify-between">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="w-8 h-8">
                                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p>Shadab Ahmed</p>
                                                    <p className="text-sm text-secondary">m@shadcn.com</p>
                                                </div>
                                            </div>
                                            <Select value="Can Edit">
                                                <SelectTrigger className="w-30"><SelectValue ></SelectValue></SelectTrigger>
                                                <SelectContent></SelectContent>
                                            </Select>
                                        </div>

                                        <div className="flex justify-between">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="w-8 h-8">
                                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p>Shadab Ahmed</p>
                                                    <p className="text-sm text-secondary">m@shadcn.com</p>
                                                </div>
                                            </div>
                                            <Select value="Can View">
                                                <SelectTrigger className="w-30"><SelectValue ></SelectValue></SelectTrigger>
                                                <SelectContent></SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <p>General Access</p>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex justify-between">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="w-8 h-8 bg-[rgb(196,238,208)]">

                                                </Avatar>
                                                <div>
                                                    <p>Anyone with link</p>
                                                    <p className="text-sm text-secondary">Anyone on the internet with the link can view
                                                    </p>
                                                </div>
                                            </div>
                                            <Select value="Admin">
                                                <SelectTrigger className="w-30"><SelectValue ></SelectValue></SelectTrigger>
                                                <SelectContent></SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </DialogBody>
                            <DialogFooter>
                                <Button className="w-fit">Confirm Access</Button>
                            </DialogFooter>
                        </DialogShell>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Integration Dialog</PopupTitle>
                    <PopupDescription>
                        Connect external integrations and services.
                    </PopupDescription>
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
