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
import { Kbd, KbdEnter, KbdGroup, KbdShift, KbdSpace, KbdTab } from "@/components/ui/kbd"

export function PopoverPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview />

                <PopupDetails>
                    <PopupTitle>Popover</PopupTitle>
                    <PopupDescription>
                        Non-modal floating overlay built on Base UI Popover primitives for contextual content and forms.
                    </PopupDescription>

                    <PopupKeyboardInteractions
                        items={[
                            {
                                keys: <KbdGroup separator="or"><KbdEnter /><KbdSpace /></KbdGroup>,
                                description: "Opens or closes the popover from the trigger.",
                            },
                            {
                                keys: <KbdTab />,
                                description: "Moves focus to the next focusable element inside the popover.",
                            },
                            {
                                keys: <KbdGroup separator="+"><KbdShift /><KbdTab /></KbdGroup>,
                                description: "Moves focus to the previous focusable element inside the popover.",
                            },
                            {
                                keys: <Kbd>Escape</Kbd>,
                                description: "Closes the popover and returns focus to the trigger.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
