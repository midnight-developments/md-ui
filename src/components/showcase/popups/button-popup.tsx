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
import { Button } from "@/components/ui/button/button"
import { Download, Trash2, Heart, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function ButtonPopup({ open, onOpenChange }: PopupProps) {
    const [isFavorite, setIsFavorite] = React.useState(false)

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col gap-8 w-full max-w-lg py-2">
                        <div className="flex flex-col gap-3.5">
                            <span className="font-sf-display text-lg text-muted leading-none">
                                Primary Variant
                            </span>
                            <div className="flex flex-wrap items-center gap-3">
                                <Button variant="default">Primary Action</Button>
                                <Button variant="default">
                                    <Download className="size-4" />
                                    With Icon
                                </Button>
                                <Button variant="default" disabled>Disabled</Button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3.5">
                            <span className="font-sf-display text-lg text-muted leading-none">
                                Outline Variant
                            </span>
                            <div className="flex flex-wrap items-center gap-3">
                                <Button variant="outline">Outline Action</Button>
                                <Button
                                    variant="outline"
                                    onClick={() => setIsFavorite((prev) => !prev)}
                                    className="transition-all"
                                >
                                    <Heart
                                        className={cn(
                                            "size-4 transition-all duration-200",
                                            isFavorite
                                                ? "fill-red-500 text-red-500 scale-110"
                                                : "text-red-400"
                                        )}
                                    />
                                    {isFavorite ? "Favorited" : "Favorite"}
                                </Button>
                                <Button variant="outline" disabled>Disabled</Button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3.5">
                            <span className="font-sf-display text-lg text-muted leading-none">
                                Ghost Variant
                            </span>
                            <div className="flex flex-wrap items-center gap-3">
                                <Button variant="ghost">Ghost Action</Button>
                                <Button variant="ghost">
                                    <ArrowRight className="size-4" />
                                    Continue
                                </Button>
                                <Button variant="ghost" disabled>Disabled</Button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3.5">
                            <span className="font-sf-display text-lg text-muted leading-none">
                                Destructive Variant
                            </span>
                            <div className="flex flex-wrap items-center gap-3">
                                <Button variant="destructive">Delete Project</Button>
                                <Button variant="destructive">
                                    <Trash2 className="size-4" />
                                    Remove
                                </Button>
                                <Button variant="destructive" disabled>Disabled</Button>
                            </div>
                        </div>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Button</PopupTitle>
                    <PopupDescription>
                        A physical rim light button built with high-fidelity Apple-inspired aesthetics, micro-interactions, and accessible Base UI button primitives.
                    </PopupDescription>

                    <PopupCharacteristics
                        items={[
                            {
                                title: "Rim Light Styling",
                                description: "Top and inner highlight gradient that simulates modern, physical studio lighting.",
                            },
                            {
                                title: "Snappy Feedback",
                                description: "Spring-damped 150ms cubic-bezier transition for press, hover, and focus states.",
                            },
                            {
                                title: "Accessible Base",
                                description: "Full keyboard navigation, focus rings, and screen-reader compliance via Base UI.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
