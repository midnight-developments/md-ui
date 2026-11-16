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
    DialogBody,
    DialogFooter,
} from "@/components/ui/dialog/dialog"
import { Button } from "@/components/ui/button/button"
import { InfoIcon } from "lucide-react"

export function IntegrationDialogPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col items-center gap-6  w-full">
                        <DialogSurface className="w-lg">
                            <DialogHeader>
                                <DialogTitle>Your meeting has been scheduled</DialogTitle>
                            </DialogHeader>
                            <DialogBody className="flex flex-col gap-8">
                                <div className="flex items-center text-accent-text bg-accent/15 gap-2 bg-background-light px-3 py-2 rounded-lg">
                                    <InfoIcon size={20} />
                                    Check your inbox for an email with more details!
                                </div>
                                <div className="grid grid-cols-2 gap-2 gap-y-4">
                                    <div>
                                        <p className="text-base text-secondary">Date</p>
                                        <p className="text-base text-foreground">Mon, 11 November</p>
                                    </div>
                                    <div>
                                        <p className="text-base text-secondary">Time Zone</p>
                                        <p className="text-base text-foreground">PMT | GMT-8</p>
                                    </div>
                                    <div>
                                        <p className="text-base text-secondary">Time</p>
                                        <p className="text-base text-foreground">11:00am - 11:30am</p>
                                    </div>
                                    <div>
                                        <p className="text-base text-secondary">Location</p>
                                        <p className="text-base text-foreground">Online Remote</p>
                                    </div>
                                </div>
                                <div>
                                    <p>Attendees</p>
                                    <div>

                                    </div>
                                </div>

                            </DialogBody>
                            <DialogFooter className="grid grid-cols-2">
                                <Button variant="secondary">Return Home</Button>
                                <Button>Edit Details</Button>
                            </DialogFooter>
                        </DialogSurface>
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
