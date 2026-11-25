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
import { Button } from "@/components/ui/button"
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
                            <h3 className="text-lg text-muted leading-none">
                                Primary Variant
                            </h3>
                            <div className="flex flex-wrap items-center gap-3">
                                <Button variant="primary">Primary Action</Button>
                                <Button variant="primary">
                                    <Download className="size-4" />
                                    With Icon
                                </Button>
                                <Button variant="primary" disabled>Disabled</Button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3.5">
                            <h3 className="text-lg text-muted leading-none">
                                Secondary Variant
                            </h3>
                            <div className="flex flex-wrap items-center gap-3">
                                <Button variant="secondary">Secondary Action</Button>
                                <Button
                                    variant="secondary"
                                    onClick={() => setIsFavorite((prev) => !prev)}
                                >
                                    <Heart
                                        className={cn(
                                            "size-4",
                                            isFavorite
                                                ? "fill-red-500 text-red-500"
                                                : "text-red-400"
                                        )}
                                    />
                                    {isFavorite ? "Favorited" : "Favorite"}
                                </Button>
                                <Button variant="secondary" disabled>Disabled</Button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3.5">
                            <h3 className="text-lg text-muted leading-none">
                                Ghost Variant
                            </h3>
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
                            <h3 className="text-lg text-muted leading-none">
                                Destructive Variant
                            </h3>
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
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
