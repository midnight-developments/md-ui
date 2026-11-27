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
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverTitle,
    PopoverDescription,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

const sides = ["top", "bottom", "left", "right"] as const
const alignments = ["start", "center", "end"] as const

export function PopoverPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <FieldGroup className="max-w-md">
                        {sides.map((side) => (
                            <Field key={side}>
                                <FieldLabel className="capitalize">Standard ({side})</FieldLabel>
                                <div className="flex flex-wrap gap-2">
                                    {alignments.map((align) => (
                                        <Popover key={align}>
                                            <PopoverTrigger
                                                render={
                                                    <Button variant="secondary" className="capitalize">
                                                        {align}
                                                    </Button>
                                                }
                                            />
                                            <PopoverContent side={side} align={align} className="w-72">
                                                <PopoverHeader>
                                                    <PopoverTitle className="capitalize">
                                                        {side} — {align}
                                                    </PopoverTitle>
                                                    <PopoverDescription>
                                                        Positioned on the {side} edge with {align} alignment.
                                                    </PopoverDescription>
                                                </PopoverHeader>
                                            </PopoverContent>
                                        </Popover>
                                    ))}
                                </div>
                            </Field>
                        ))}

                        <Field>
                            <FieldLabel>With Carat</FieldLabel>
                            <div className="flex flex-wrap gap-2">
                                {sides.map((side) => (
                                    <Popover key={side}>
                                        <PopoverTrigger
                                            render={
                                                <Button variant="secondary" className="capitalize">
                                                    {side}
                                                </Button>
                                            }
                                        />
                                        <PopoverContent
                                            showCarat
                                            side={side}
                                            align="center"
                                            className="w-72"
                                        >
                                            <PopoverHeader>
                                                <PopoverTitle className="capitalize">
                                                    Carat ({side})
                                                </PopoverTitle>
                                                <PopoverDescription>
                                                    Aligned to the trigger on the {side} side with a caret.
                                                </PopoverDescription>
                                            </PopoverHeader>
                                        </PopoverContent>
                                    </Popover>
                                ))}
                            </div>
                        </Field>
                    </FieldGroup>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Popover</PopupTitle>
                    <PopupDescription>
                        Non-modal floating overlay built on Base UI Popover primitives for contextual content and forms.
                    </PopupDescription>
                </PopupDetails>
            </PopupContent>
        </Popup >
    )
}

