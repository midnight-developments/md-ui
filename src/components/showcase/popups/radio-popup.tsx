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
} from "@/components/showcase/popup"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CardRadioGroup, CardRadioGroupItem } from "@/components/ui/card-radio-group"
import { ShieldCheck, Zap } from "lucide-react"

export interface RadioPopupProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function RadioPopup({ open, onOpenChange }: RadioPopupProps) {
    const [standardRadio, setStandardRadio] = React.useState("daily")
    const [plan, setPlan] = React.useState("pro")

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col gap-8 max-w-md w-full">
                        {/* 1. Card Radio Group */}
                        <div className="flex flex-col gap-3">
                            <label className="text-sm font-sf-display text-muted">
                                Selectable Card Radio Group
                            </label>
                            <CardRadioGroup
                                value={plan}
                                onValueChange={(val) => val && setPlan(val as string)}
                                columns={2}
                            >
                                <CardRadioGroupItem value="starter">
                                    <div className="flex items-center gap-2">
                                        <Zap className="size-4 text-accent" />
                                        <span className="font-sf-display font-medium text-foreground">Starter</span>
                                    </div>
                                    <span className="text-xs text-muted">10 GB Storage · 1 Core</span>
                                </CardRadioGroupItem>

                                <CardRadioGroupItem value="pro">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="size-4 text-accent" />
                                        <span className="font-sf-display font-medium text-foreground">Pro Tier</span>
                                    </div>
                                    <span className="text-xs text-muted">100 GB Storage · 4 Cores</span>
                                </CardRadioGroupItem>
                            </CardRadioGroup>
                        </div>

                        {/* 2. Standard Radio Group */}
                        <div className="flex flex-col gap-3">
                            <label className="text-sm font-sf-display text-muted">
                                Standard Radio List (Backup Frequency)
                            </label>
                            <RadioGroup
                                value={standardRadio}
                                onValueChange={(val) => val && setStandardRadio(val as string)}
                                className="gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/6"
                            >
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <RadioGroupItem value="hourly" id="r-hourly" />
                                    <span className="font-sf-text text-sm text-foreground">Every hour (Continuous point-in-time recovery)</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <RadioGroupItem value="daily" id="r-daily" />
                                    <span className="font-sf-text text-sm text-foreground">Daily snapshot at 00:00 UTC</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <RadioGroupItem value="weekly" id="r-weekly" />
                                    <span className="font-sf-text text-sm text-foreground">Weekly archival backup</span>
                                </label>
                            </RadioGroup>
                        </div>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Radio</PopupTitle>
                    <PopupDescription>
                        Single-choice indicators and card-level radio selections with animated indicators, accessible focus styling, and active state transitions.
                    </PopupDescription>

                    <PopupCharacteristics
                        items={[
                            {
                                title: "Card Radio System",
                                description: "Transform standard radio groups into rich multi-column cards for plans, tiers, and settings.",
                            },
                            {
                                title: "Spring Dot Indicator",
                                description: "The inner accent dot scales in with smooth opacity transitions.",
                            },
                            {
                                title: "Base UI Radio Primitive",
                                description: "Keyboard arrow navigation (Up/Down/Left/Right) built-in out of the box.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
