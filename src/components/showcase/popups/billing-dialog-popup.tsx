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
    DialogBody,
} from "@/components/ui/dialog"

export function BillingDialogPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col items-center gap-6 max-w-xl w-full">
                        <DialogShell className="w-full h-100 p-0">
                            <DialogBody>
                                <input placeholder="Type a command or search" className="px-5"></input>
                            </DialogBody>
                        </DialogShell>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Form Dialog</PopupTitle>
                    <PopupDescription>
                        Multi-input dialog form.
                    </PopupDescription>
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
