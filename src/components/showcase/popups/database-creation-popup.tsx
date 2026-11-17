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
import { InfoIcon } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { SuccessGraphic } from "@/components/ui/graphics/success-graphic"
import { Badge } from "@/components/ui/badge/badge"

export function DatabaseCreationPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col items-center gap-6  w-full">
                        <DialogShell className="w-120">
                            <DialogHeader>
                                <DialogTitle>Share Project</DialogTitle>
                            </DialogHeader>
                            <DialogBody className="flex flex-col gap-8">

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
