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
import { DialogSurface } from "@/components/ui/dialog/dialog-surface"
import {
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog/dialog"

export function BillingDialogPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col items-center gap-6 max-w-md w-full">
                        <DialogSurface className="w-full">
                            <DialogHeader>
                                <DialogTitle>Form Dialog</DialogTitle>
                                <DialogDescription>
                                    Multi-input dialog form.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogSurface>
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
