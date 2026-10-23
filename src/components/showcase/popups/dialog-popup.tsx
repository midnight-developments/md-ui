"use client"

import * as React from "react"
import {
    Popup,
    PopupContent,
    PopupPreview,
    PopupDetails,
    PopupTitle,
    PopupDescription,
    PopupCharacteristics,
    type PopupProps,
} from "@/components/showcase/popup"
import {
    Dialog,
    DialogTrigger,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogSurface,
} from "@/components/ui/dialog/dialog"
import { Button } from "@/components/ui/button/button"
import { WarningIcon } from "@/components/ui/dialog/header-icons/warning-icon"
import { Sparkles } from "lucide-react"

export function DialogPopup({ open, onOpenChange }: PopupProps) {
    const [isSubDialogOpen, setIsSubDialogOpen] = React.useState(false)

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col items-center gap-6 max-w-sm w-full">
                        <DialogSurface className="w-full">
                            <div className="flex flex-col items-center text-center gap-2">
                                <WarningIcon className="size-12" />
                                <h2 className="text-2xl text-foreground">Action Confirmation</h2>
                                <p className="text-[0.95rem] text-muted">
                                    Are you sure you want to deploy these changes to production? This operation will initiate zero-downtime rolling updates.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2 ">
                                <Dialog open={isSubDialogOpen} onOpenChange={setIsSubDialogOpen}>
                                    <DialogTrigger
                                        render={
                                            <Button variant="primary" className="w-full">
                                                <Sparkles className="size-4" />
                                                Open Dialog
                                            </Button>
                                        }
                                    />
                                    <DialogContent className="w-full max-w-sm">
                                        <DialogHeader className="items-center text-center">
                                            <WarningIcon className="size-12" />
                                            <DialogTitle>Action Confirmation</DialogTitle>
                                            <DialogDescription>
                                                Are you sure you want to deploy these changes to production? This operation will initiate zero-downtime rolling updates.
                                            </DialogDescription>
                                        </DialogHeader>

                                        <div className="flex flex-col gap-2">
                                            <DialogClose
                                                render={
                                                    <Button variant="primary" className="w-full">
                                                        Confirm
                                                    </Button>
                                                }
                                            />
                                            <DialogClose
                                                render={
                                                    <Button variant="secondary" className="w-full">
                                                        Cancel
                                                    </Button>
                                                }
                                            />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                                <Button variant="secondary" className="w-full">Cancel</Button>
                            </div>
                        </DialogSurface>

                        <p className="text-sm text-muted text-center max-w-xs">
                            Click above to test modal opening/closing
                        </p>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Dialog</PopupTitle>
                    <PopupDescription>
                        A physics-tuned modal dialog featuring custom rim lighting, backdrop blur, and zero DOM layout shifting.
                    </PopupDescription>

                    <PopupCharacteristics
                        items={[
                            {
                                title: "Framer Motion Animations",
                                description: "Silky smooth opening and closing physics, with calibrated spring scaling, fade-ins, and backdrop blur.",
                            },
                            {
                                title: "Modular Architecture",
                                description: "Cleanly separated compound structure (Dialog, DialogHeader, DialogBody, DialogFooter, and DialogClose) for composable layouts.",
                            },
                            {
                                title: "Zero Layout Shift",
                                description: "Configured with stable scrollbar gutters to eliminate annoying browser jumps when dialogs open and close.",
                            },
                            {
                                title: "Rim Light Architecture",
                                description: "Elevated card surface with simulated studio top-edge light and backdrop blur.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent >
        </Popup >
    )
}
