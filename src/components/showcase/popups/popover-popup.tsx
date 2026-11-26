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

export function PopoverPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <Popover>
                        <PopoverTrigger
                            render={
                                <Button variant="secondary">Open Popover</Button>
                            }
                        />
                        <PopoverContent className="w-72 p-4">
                            <PopoverHeader>
                                <PopoverTitle>Popover Title</PopoverTitle>
                                <PopoverDescription>
                                    A lightweight floating container for contextual details or controls.
                                </PopoverDescription>
                            </PopoverHeader>
                        </PopoverContent>
                    </Popover>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Popover</PopupTitle>
                    <PopupDescription>
                        Non-modal floating overlay built on Base UI Popover primitives for contextual content and forms.
                    </PopupDescription>
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}

