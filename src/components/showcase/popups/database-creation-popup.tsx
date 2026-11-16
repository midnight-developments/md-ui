"use client"

import * as React from "react"
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

export function DatabaseCreationPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col items-center gap-6 max-w-md w-full">
                        <DialogSurface className="w-full">
                            <DialogHeader>
                                <DialogTitle>Create a new database</DialogTitle>
                                <DialogDescription>
                                    Provision high-availability cloud database.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogSurface>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Create a new database</PopupTitle>
                    <PopupDescription>
                        Provision high-availability cloud database.
                    </PopupDescription>
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
