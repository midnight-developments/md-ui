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
import { Input } from "@/components/ui/input/input"
import { Button } from "@/components/ui/button/button"
import { Badge } from "@/components/ui/badge"
import { Field, FieldLabel, FieldDescription, FieldGroup, FieldSet, FieldContent, FieldTitle } from "@/components/ui/field"
import { CardRadioGroup, CardRadioGroupItem } from "@/components/ui/card-radio-group/card-radio-group"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"
import {
    DialogHeader,
    DialogTitle,
    DialogBody,
    DialogFooter,
} from "@/components/ui/dialog/dialog"
import { Globe, Infinity as InfinityIcon, ArrowRight, Check } from "lucide-react"

export function DatabaseCreationPopup({ open, onOpenChange }: PopupProps) {
    const [organization, setOrganization] = React.useState("pixsellz")
    const [dbName, setDbName] = React.useState("")
    const [region, setRegion] = React.useState("ap-east-1")
    const [planType, setPlanType] = React.useState("pro")
    const [isSubmitted, setIsSubmitted] = React.useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 2500)
    }

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="w-full max-w-xl p-6 sm:p-7 rounded-xl surface-grain bg-card rim-light-dialog border border-white/10 shadow-2xl">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                            <DialogHeader className="text-left items-start gap-1">
                                <DialogTitle>
                                    Create a new database
                                </DialogTitle>
                            </DialogHeader>

                            <DialogBody>
                                <FieldGroup className="gap-8">
                                    <FieldGroup className="flex-col sm:flex-row sm:items-start gap-3 sm:gap-3.5">
                                        <Field className="w-full sm:w-36">
                                            <FieldLabel>Organization</FieldLabel>
                                            <Select value={organization} onValueChange={(v) => v && setOrganization(v)}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Organization" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="pixsellz">pixsellz</SelectItem>
                                                    <SelectItem value="midnight-dev">midnight-dev</SelectItem>
                                                    <SelectItem value="personal">personal</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </Field>

                                        <div className="hidden sm:flex items-center pt-8 text-muted/60 text-lg font-light select-none">
                                            /
                                        </div>

                                        <Field className="flex-1">
                                            <FieldLabel>Database name</FieldLabel>
                                            <Input
                                                value={dbName}
                                                onChange={(e) => setDbName(e.target.value)}
                                                placeholder="database-name"
                                                required
                                            />
                                            <FieldDescription>
                                                Lowercase alphanumeric characters, dashes only
                                            </FieldDescription>
                                        </Field>
                                    </FieldGroup>

                                    <Field>
                                        <FieldLabel>Region</FieldLabel>
                                        <Select value={region} onValueChange={(v) => v && setRegion(v)}>
                                            <SelectTrigger >
                                                <SelectValue placeholder="Select region" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="ap-east-1">ap-east-1 Asia Pacific (Hong Kong)</SelectItem>
                                                <SelectItem value="us-east-1">us-east-1 US East (N. Virginia)</SelectItem>
                                                <SelectItem value="us-west-2">us-west-2 US West (Oregon)</SelectItem>
                                                <SelectItem value="eu-central-1">eu-central-1 Europe (Frankfurt)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FieldDescription>
                                            For best performance, choose a region closest to your application
                                        </FieldDescription>
                                    </Field>

                                    <FieldSet>
                                        <FieldLabel >Plan type</FieldLabel>
                                        <CardRadioGroup
                                            value={planType}
                                            onValueChange={(val) => val && setPlanType(val as string)}
                                            columns={1}
                                            className="gap-3"
                                        >
                                            <CardRadioGroupItem value="business" showIndicator={false} className="p-3.5 sm:p-4">
                                                <FieldContent className="gap-1 ">
                                                    <div className="flex items-center gap-2">
                                                        <FieldTitle >
                                                            Business
                                                        </FieldTitle>
                                                        <Badge variant="outline" className="gap-1 px-1.5 py-0.5 text-xs font-normal border-border bg-white/[0.04] text-muted">
                                                            <Globe className="size-3" />
                                                            AWS ap-east-1
                                                        </Badge>
                                                    </div>
                                                    <FieldDescription>
                                                        Choose the compute and memory resources for your needs
                                                    </FieldDescription>
                                                    <div className="flex items-center gap-1.5 text-xs mt-4">
                                                        <span className="font-medium text-success flex items-center gap-1">
                                                            <InfinityIcon className="size-3.5" /> Unlimited
                                                        </span>
                                                        <span className="text-muted">row reads and writes</span>
                                                    </div>
                                                </FieldContent>
                                                <div className="absolute top-0 right-0 text-right tracking-tighter pointer-events-none">
                                                    <span className="text-base font-semibold text-accent">from $28</span>
                                                    <span className="text-sm text-muted block -mt-0.5">/ month</span>
                                                </div>
                                            </CardRadioGroupItem>

                                            <CardRadioGroupItem value="free" showIndicator={false} className="p-3.5 sm:p-4">
                                                <FieldContent className="gap-1">
                                                    <div className="flex items-center gap-2">
                                                        <FieldTitle>
                                                            Pro
                                                        </FieldTitle>
                                                        <Badge variant="outline" className="gap-1 px-1.5 py-0.5 text-xs font-normal border-border bg-white/[0.04] text-muted">
                                                            <Globe className="size-3" />
                                                            AWS ap-east-1
                                                        </Badge>
                                                    </div>
                                                    <FieldDescription>
                                                        Read/write-based billing for lower traffic applications
                                                    </FieldDescription>
                                                    <div className="text-xs text-muted mt-4">
                                                        <span className="font-semibold text-foreground">1 billion</span> row reads and 10 million row writes / month
                                                    </div>
                                                </FieldContent>
                                                <div className="absolute right-0 top-0 text-right pointer-events-none">
                                                    <span className="text-sm font-semibold text-foreground">Free</span>
                                                </div>
                                            </CardRadioGroupItem>
                                        </CardRadioGroup>
                                    </FieldSet>
                                </FieldGroup>
                            </DialogBody>

                            <DialogFooter className="justify-between pt-1">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => onOpenChange?.(false)}
                                    className="px-5"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="default"
                                    className="px-5 gap-1.5"
                                >
                                    {isSubmitted ? (
                                        <>
                                            <Check className="size-4" />
                                            Database Provisioned!
                                        </>
                                    ) : (
                                        <>
                                            Next Step
                                            <ArrowRight className="size-4" />
                                        </>
                                    )}
                                </Button>
                            </DialogFooter>
                        </form>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Create a new database</PopupTitle>
                    <PopupDescription>
                        A clean, production-ready database creation flow matching modern cloud infrastructure interfaces with composable design system primitives.
                    </PopupDescription>

                    <PopupCharacteristics
                        heading="Integrated Components"
                        items={[
                            {
                                title: "Scoped Namespace Path",
                                description: "Organization select dropdown coupled with slugified database identifier and helper guidance.",
                            },
                            {
                                title: "Composite Region InputGroup",
                                description: "Input group with dedicated addon prefix tab and native select menu.",
                            },
                            {
                                title: "Left-Aligned Card Radio Tiers",
                                description: "Comparison radio cards displaying compute badges, dynamic pricing, and throughput allowances.",
                            },
                            {
                                title: "Standard Action Footer",
                                description: "Clear secondary dismiss and high-emphasis forward progression buttons.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
