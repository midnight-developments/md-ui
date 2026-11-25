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
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogHeader,
    DialogDescription,
    DialogBody,
    DialogFooter,
    DialogClose,
    DialogShell,
} from "@/components/ui/dialog"
import { SuccessGraphic } from "@/components/ui/graphics/success-graphic"
import { Button } from "@/components/ui/button"
import ForwardIcon from "@/assets/icons/forward.svg?react"


export function DialogPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col gap-20 w-full max-w-md">
                        <div className="flex flex-col gap-5">
                            <h3 className="text-lg text-muted leading-none">
                                Preview
                            </h3>
                            <DialogShell >
                                <DialogHeader >
                                    <DialogTitle>Dialog Title</DialogTitle>
                                    <DialogDescription>Dialog Description</DialogDescription>
                                </DialogHeader>
                                <DialogBody className="flex flex-col gap-2">
                                    <span className="bg-white/7 p-1.5 rounded-sm w-1/2"></span>
                                    <span className="bg-white/5 p-4 rounded-sm w-full"></span>
                                    <span className="bg-white/3 p-1 rounded-sm w-2/3"></span>

                                    <span className="bg-white/7 p-1.5 rounded-sm w-1/3 mt-6"></span>
                                    <span className="bg-white/5 p-4 rounded-sm w-full"></span>
                                    <span className="bg-white/3 p-1 rounded-sm w-2/5"></span>
                                </DialogBody>
                                <DialogFooter className="grid grid-cols-2">
                                    <Button variant="secondary">Secondary</Button>
                                    <Button>Primary</Button>
                                </DialogFooter>
                            </DialogShell>
                        </div>

                        <div className="flex flex-col gap-5">
                            <h3 className="text-lg text-muted leading-none">
                                Actual Dialog
                            </h3>
                            <Button variant="secondary">Open Dialog</Button>
                        </div>




                    </div>

                </PopupPreview>
                <PopupDetails>
                    <PopupTitle>Dialog</PopupTitle>
                    <PopupDescription>
                        A physics-tuned modal dialog featuring custom rim lighting, backdrop blur, and zero DOM layout shifting.
                    </PopupDescription>
                </PopupDetails>
            </PopupContent >
        </Popup >
    )
}
