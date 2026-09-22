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
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogBody,
    DialogFooter,
} from "@/components/ui/dialog/dialog"
import { Button } from "@/components/ui/button/button"
import { WarningIcon } from "@/components/ui/warning-icon"
import { Sparkles } from "lucide-react"

export function DialogPopup({ open, onOpenChange }: PopupProps) {
    const [isSubDialogOpen, setIsSubDialogOpen] = React.useState(false)

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col items-center gap-6 max-w-sm w-full">
                        <div className="w-full flex flex-col gap-4 p-6 rounded-xl surface-grain bg-card rim-light-dialog border border-white/10 shadow-2xl">
                            <div className="flex flex-col items-center text-center gap-2">
                                <WarningIcon className="size-12" />
                                <h3 className="text-xl font-sf-display text-foreground">Action Confirmation</h3>
                                <p className="text-[0.95rem] text-muted tracking-tight">
                                    Are you sure you want to deploy these changes to production? This operation will initiate zero-downtime rolling updates.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2 mt-2">
                                <Button
                                    variant="default"
                                    className="w-full"
                                    onClick={() => setIsSubDialogOpen(true)}
                                >
                                    <Sparkles className="size-4" />
                                    Open Dialog
                                </Button>
                                <Button variant="outline" className="w-full">Cancel</Button>
                            </div>
                        </div>

                        <p className="text-sm text-muted text-center max-w-xs">
                            Click above to test modal opening/closing
                        </p>

                        {/* Interactive live Dialog */}
                        <Dialog open={isSubDialogOpen} onOpenChange={setIsSubDialogOpen}>
                            <DialogContent className="w-sm">
                                <DialogHeader>
                                    <WarningIcon className="size-14" />
                                    <DialogTitle>Zero-Shift Modal</DialogTitle>
                                </DialogHeader>
                                <DialogBody>
                                    <DialogDescription className="text-center">
                                        Notice how opening and closing this dialog produces zero layout jump, thanks to CSS <code className="text-white/80">scrollbar-gutter: stable</code> .
                                    </DialogDescription>
                                </DialogBody>
                                <DialogFooter className="flex-col w-full gap-2">
                                    <Button
                                        variant="default"
                                        className="w-full"
                                        onClick={() => setIsSubDialogOpen(false)}
                                    >
                                        Got it
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Dialog</PopupTitle>
                    <PopupDescription>
                        A physics-tuned modal dialog featuring custom rim lighting, subtle film grain texture, backdrop blur, and zero DOM layout shifting.
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
                                title: "Rim Light & Film Grain",
                                description: "Elevated card surface with simulated studio top-edge light and subtle analog film texture.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
