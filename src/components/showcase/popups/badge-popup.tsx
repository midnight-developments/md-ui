"use client"

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
import { Badge } from "@/components/ui/badge/badge"

export function BadgePopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col gap-6 w-full max-w-md py-2">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-lg text-muted leading-none">
                                Primary Variant
                            </h3>
                            <div className="flex items-center gap-3">
                                <Badge variant="primary" size="base">Primary</Badge>
                                <Badge variant="primary" size="base">Badge</Badge>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-lg text-muted leading-none">
                                Secondary Variant
                            </h3>
                            <div className="flex items-center gap-3">
                                <Badge variant="secondary" size="base">Secondary</Badge>
                                <Badge variant="secondary" size="base">Badge</Badge>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-lg text-muted leading-none">
                                Success Variant
                            </h3>
                            <div className="flex items-center gap-3">
                                <Badge variant="success" size="base">Success</Badge>
                                <Badge variant="success" size="base">Badge</Badge>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-lg text-muted leading-none">
                                Destructive Variant
                            </h3>
                            <div className="flex items-center gap-3">
                                <Badge variant="destructive" size="base">Destructive</Badge>
                                <Badge variant="destructive" size="base">Badge</Badge>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-lg text-muted leading-none">
                                Warning Variant
                            </h3>
                            <div className="flex items-center gap-3">
                                <Badge variant="warning" size="base">Warning</Badge>
                                <Badge variant="warning" size="base">Badge</Badge>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-lg text-muted leading-none">
                                Flat Variant
                            </h3>
                            <div className="flex items-center gap-3">
                                <Badge variant="flat" size="base">Flat</Badge>
                                <Badge variant="flat" size="base">Badge</Badge>
                            </div>
                        </div>

                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Badge</PopupTitle>
                    <PopupDescription>
                        Compact visual indicators for metadata, labels, and status tags with curated semantic color tokens.
                    </PopupDescription>

                    <PopupCharacteristics
                        items={[
                            {
                                title: "Semantic Transparencies",
                                description: "Calibrated alpha overlays (accent, success, destructive, secondary) that sit softly on dark backgrounds without visual distraction.",
                            },
                            {
                                title: "Compact Pill Styling",
                                description: "Clean border radius, refined typography, and balanced padding designed for concise labels.",
                            },
                            {
                                title: "Lightweight Primitive",
                                description: "Zero overhead span-based component styled using Tailwind CSS and class-variance-authority.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
