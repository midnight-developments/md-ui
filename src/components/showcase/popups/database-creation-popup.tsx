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
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardRadioGroup, CardRadioGroupItem } from "@/components/ui/card-radio-group"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Database, ShieldCheck, Zap, Check, Server } from "lucide-react"

export interface DatabaseCreationPopupProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function DatabaseCreationPopup({ open, onOpenChange }: DatabaseCreationPopupProps) {
    const [tier, setTier] = React.useState("production")
    const [highAvailability, setHighAvailability] = React.useState(true)
    const [region, setRegion] = React.useState("us-east-1")
    const [dbName, setDbName] = React.useState("production-cluster-01")
    const [isCreated, setIsCreated] = React.useState(false)

    const handleProvision = (e: React.FormEvent) => {
        e.preventDefault()
        setIsCreated(true)
        setTimeout(() => setIsCreated(false), 3000)
    }

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="w-full max-w-lg p-6 sm:p-8 rounded-xl surface-grain bg-card rim-light border border-white/10 shadow-2xl">
                        <form onSubmit={handleProvision} className="flex flex-col gap-5">
                            {/* Form Header */}
                            <div className="flex items-center gap-3 pb-3 border-b border-white/6">
                                <div className="p-2 rounded-lg bg-accent/15 text-accent border border-accent/25">
                                    <Database className="size-5" />
                                </div>
                                <div>
                                    <h3 className="font-sf-display text-lg font-medium text-foreground">
                                        Provision Cloud Cluster
                                    </h3>
                                    <p className="font-sf-text text-xs text-muted">
                                        Configure compute, networking, and automatic failover
                                    </p>
                                </div>
                            </div>

                            {/* Database Name */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-muted font-sf-display uppercase tracking-wider">
                                    Cluster Identifier
                                </label>
                                <Input
                                    value={dbName}
                                    onChange={(e) => setDbName(e.target.value)}
                                    placeholder="cluster-name"
                                    required
                                />
                            </div>

                            {/* Region & Engine Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-medium text-muted font-sf-display uppercase tracking-wider">
                                        Region
                                    </label>
                                    <Select value={region} onValueChange={(v) => v && setRegion(v)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select region" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="us-east-1">US East (N. Virginia)</SelectItem>
                                            <SelectItem value="us-west-2">US West (Oregon)</SelectItem>
                                            <SelectItem value="eu-west-1">EU (Ireland)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-medium text-muted font-sf-display uppercase tracking-wider">
                                        Engine Version
                                    </label>
                                    <Select defaultValue="pg16">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Engine" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="pg16">PostgreSQL 16.2</SelectItem>
                                            <SelectItem value="pg15">PostgreSQL 15.6</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Plan Selection via CardRadioGroup */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-medium text-muted font-sf-display uppercase tracking-wider">
                                    Instance Performance Tier
                                </label>
                                <CardRadioGroup
                                    value={tier}
                                    onValueChange={(val) => val && setTier(val as string)}
                                    columns={2}
                                >
                                    <CardRadioGroupItem value="development">
                                        <div className="flex items-center gap-1.5 font-sf-display text-sm font-medium text-foreground">
                                            <Zap className="size-3.5 text-accent" />
                                            Development
                                        </div>
                                        <span className="text-xs text-muted">2 vCPU · 4 GB RAM</span>
                                    </CardRadioGroupItem>

                                    <CardRadioGroupItem value="production">
                                        <div className="flex items-center gap-1.5 font-sf-display text-sm font-medium text-foreground">
                                            <ShieldCheck className="size-3.5 text-accent" />
                                            Production Pro
                                        </div>
                                        <span className="text-xs text-muted">8 vCPU · 32 GB RAM</span>
                                    </CardRadioGroupItem>
                                </CardRadioGroup>
                            </div>

                            {/* High Availability Switch */}
                            <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/6">
                                <div className="flex flex-col gap-0.5">
                                    <span className="font-sf-display text-sm font-medium text-foreground">Multi-AZ Redundancy</span>
                                    <span className="text-xs text-muted">Automatic standby replica with instant failover</span>
                                </div>
                                <Switch
                                    checked={highAvailability}
                                    onCheckedChange={setHighAvailability}
                                />
                            </div>

                            {/* Submit Button */}
                            <Button type="submit" variant="default" className="w-full mt-2">
                                {isCreated ? (
                                    <>
                                        <Check className="size-4" />
                                        Cluster Successfully Initialized!
                                    </>
                                ) : (
                                    <>
                                        <Server className="size-4" />
                                        Provision Instance
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Database Creation</PopupTitle>
                    <PopupDescription>
                        A comprehensive cloud infrastructure provisioning workflow demonstrating how multiple core primitives compose seamlessly into a production-grade interface.
                    </PopupDescription>

                    <PopupCharacteristics
                        heading="Integrated Components"
                        items={[
                            {
                                title: "Card Radio Tier Selection",
                                description: "Structured comparison of compute, memory, and performance profiles.",
                            },
                            {
                                title: "Region Dropdown",
                                description: "Fast keyboard-driven Base UI select picker for geographic zone deployment.",
                            },
                            {
                                title: "Multi-AZ Switch",
                                description: "Tactile toggle control for high-availability failover replication.",
                            },
                            {
                                title: "Rim-Light Action Button",
                                description: "Prominent call-to-action button with instant interactive state response.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
