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
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogContent,
} from "@/components/ui/dialog/dialog"
import { Button } from "@/components/ui/button/button"
import { ChevronsRight, Check, Loader2 } from "lucide-react"
import gmailLogo from "@/assets/gmail-logo.jpg"
import tempoLogo from "@/assets/tempo-logo.png"

function GoogleIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className}>
            <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
            />
            <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
            />
            <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
            />
            <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
            />
        </svg>
    )
}

export function IntegrationDialogPopup({ open, onOpenChange }: PopupProps) {
    const [status, setStatus] = React.useState<"idle" | "loading" | "success">("idle")

    const handleConnect = () => {
        setStatus("loading")
        setTimeout(() => {
            setStatus("success")
            setTimeout(() => {
                setStatus("idle")
            }, 3000)
        }, 1200)
    }

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <DialogContent >
                        <DialogHeader >
                            <div className="flex items-center justify-center gap-3.5 mb-3">
                                <div className="size-14 rounded-lg overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.3),0_4px_12px_rgba(255,255,255,0.08)] flex items-center justify-center bg-white rim-light">
                                    <img src={gmailLogo} alt="Gmail" className="size-full object-contain p-1" />
                                </div>
                                <ChevronsRight className="size-4.5 text-muted/40 shrink-0" />
                                <div className="size-14 rounded-lg overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.3),0_4px_12px_rgba(255,255,255,0.08)] flex items-center justify-center bg-white rim-light">
                                    <img src={tempoLogo} alt="Tempo" className="size-full object-contain p-1.5" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 py-2">
                                <DialogTitle >
                                    Connect Gmail and Tempo
                                </DialogTitle>
                                <DialogDescription >
                                    You will be directed to sign in with Google
                                </DialogDescription>
                            </div>

                        </DialogHeader>

                        <DialogFooter className="flex-col w-full gap-2.5 mt-0">
                            <Button
                                variant="default"
                                className="w-full gap-2"
                                onClick={handleConnect}
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="size-4 animate-spin" />
                                        Connecting to Google...
                                    </>
                                ) : status === "success" ? (
                                    <>
                                        <Check className="size-4 text-success" />
                                        Connected to Gmail!
                                    </>
                                ) : (
                                    <>
                                        <GoogleIcon className="size-4 shrink-0" />
                                        Sign in with Google
                                    </>
                                )}
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full "
                                onClick={() => onOpenChange?.(false)}
                            >
                                Cancel
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Gmail & Tempo Integration Dialog</PopupTitle>
                    <PopupDescription>
                        A clean OAuth connection dialog designed for linking Gmail and Tempo with fluid visual flow, brand identity badges, and standard action controls.
                    </PopupDescription>

                    <PopupCharacteristics
                        heading="Key Elements"
                        items={[
                            {
                                title: "Brand Identity Squircle Badges",
                                description: "Layered glassmorphic icon containers with directional chevron progression indicator.",
                            },
                            {
                                title: "Standard Dialog Hierarchy",
                                description: "Composed with DialogHeader, DialogTitle, DialogDescription, and vertical DialogFooter.",
                            },
                            {
                                title: "Integrated OAuth Action",
                                description: "Dedicated single sign-on Google button with tactile interactive state handling.",
                            },
                            {
                                title: "Accessible Action Dismissal",
                                description: "Full-width secondary outline cancel button providing an escape hatch.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
