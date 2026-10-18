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
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogBody,
    DialogFooter,
} from "@/components/ui/dialog/dialog"
import { Button } from "@/components/ui/button/button"
import { Input } from "@/components/ui/input"
import {
    FieldGroup,
    Field,
    FieldLabel,
    FieldSet,
    FieldLegend,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group/radio-group"
import { CheckboxGroup, Checkbox } from "@/components/ui/checkbox-group/checkbox-group"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"

export function BillingDialogPopup({ open, onOpenChange }: PopupProps) {
    const [citizenid, setCitizenid] = React.useState("CID-1234")
    const [code, setCode] = React.useState("password123")
    const [billprice, setBillprice] = React.useState("1")
    const [billtype, setBilltype] = React.useState("cash")
    const [taxincl, setTaxincl] = React.useState(["business"])
    const [someselect, setSomeselect] = React.useState("other3")

    const [isLiveOpen, setIsLiveOpen] = React.useState(false)

    const formContent = (
        <form className="contents" onSubmit={(e) => { e.preventDefault(); setIsLiveOpen(false); }}>
            <DialogHeader className="items-start">
                <DialogTitle>Billing Form</DialogTitle>
                <DialogDescription>
                    Please fill out the details below.
                </DialogDescription>
            </DialogHeader>

            <DialogBody>
                <FieldGroup>
                    <Field>
                        <FieldLabel>Citizen ID (#)</FieldLabel>
                        <Input
                            name="citizenid"
                            type="text"
                            placeholder="Citizen ID (#)"
                            value={citizenid}
                            onChange={(e) => setCitizenid(e.target.value)}
                            required
                        />

                    </Field>

                    <Field>
                        <FieldLabel>Secret Code (Give to Nobody)</FieldLabel>
                        <Input
                            name="code"
                            type="password"
                            placeholder="Secret Code (Give to Nobody)"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            required
                        />
                    </Field>

                    <Field>
                        <FieldLabel>Bill Price ($)</FieldLabel>
                        <Input
                            name="billprice"
                            type="number"
                            placeholder="Bill Price ($)"
                            value={billprice}
                            onChange={(e) => setBillprice(e.target.value)}
                        />
                    </Field>

                    <FieldSet>
                        <FieldLegend>Bill Type</FieldLegend>
                        <RadioGroup
                            value={billtype}
                            onValueChange={(val) => val && setBilltype(val)}
                        >
                            <Field orientation="horizontal">
                                <RadioGroupItem value="bill" id="radio-bill" />
                                <FieldLabel htmlFor="radio-bill">Bill</FieldLabel>
                            </Field>
                            <Field orientation="horizontal">
                                <RadioGroupItem value="cash" id="radio-cash" />
                                <FieldLabel htmlFor="radio-cash">Cash</FieldLabel>
                            </Field>
                            <Field orientation="horizontal">
                                <RadioGroupItem value="bank" id="radio-bank" />
                                <FieldLabel htmlFor="radio-bank">Bank</FieldLabel>
                            </Field>
                        </RadioGroup>
                    </FieldSet>

                    <FieldSet>
                        <FieldLegend>Include Tax?</FieldLegend>
                        <CheckboxGroup
                            value={taxincl}
                            onValueChange={(val) => setTaxincl(val)}
                        >
                            <Field orientation="horizontal">
                                <Checkbox value="gst" id="check-gst" />
                                <FieldLabel htmlFor="check-gst">10% incl.</FieldLabel>
                            </Field>
                            <Field orientation="horizontal">
                                <Checkbox value="business" id="check-business" />
                                <FieldLabel htmlFor="check-business">35% incl.</FieldLabel>
                            </Field>
                            <Field orientation="horizontal">
                                <Checkbox value="othertax" id="check-othertax" />
                                <FieldLabel htmlFor="check-othertax">15% incl.</FieldLabel>
                            </Field>
                        </CheckboxGroup>
                    </FieldSet>

                    <Field>
                        <FieldLabel>Some Select</FieldLabel>
                        <Select
                            value={someselect}
                            onValueChange={(val) => val && setSomeselect(val)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="none">None</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                                <SelectItem value="other2">Other2</SelectItem>
                                <SelectItem value="other3">Other3</SelectItem>
                                <SelectItem value="other4">Other4</SelectItem>
                                <SelectItem value="other5">Other5</SelectItem>
                                <SelectItem value="other6">Other6</SelectItem>
                            </SelectContent>
                        </Select>
                    </Field>
                </FieldGroup>
            </DialogBody>

            <DialogFooter className="flex justify-end">
                <Button variant="secondary" type="button" className="px-6" onClick={() => setIsLiveOpen(false)}>
                    Cancel
                </Button>
                <Button variant="primary" type="submit" className="px-6">
                    Submit
                </Button>


            </DialogFooter>
        </form >
    )

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col items-center gap-6 max-w-md w-full">
                        <DialogContent className="w-full">
                            {formContent}
                        </DialogContent>

                        <Dialog open={isLiveOpen} onOpenChange={setIsLiveOpen}>
                            <DialogTrigger
                                render={
                                    <Button variant="secondary" className="w-full">
                                        Open Dialog
                                    </Button>
                                }
                            />
                            <DialogContent className="w-full max-w-md">
                                {formContent}
                            </DialogContent>
                        </Dialog>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Form Dialog</PopupTitle>
                    <PopupDescription>
                        A standard dialog containing form inputs built purely from bare primitives without custom class overrides.
                    </PopupDescription>

                    <PopupCharacteristics
                        items={[
                            {
                                title: "Pure Component Layout",
                                description: "Uses default Field, FieldGroup, FieldSet, and Dialog spacing tokens directly from the design system.",
                            },
                            {
                                title: "Diverse Input Types",
                                description: "Combines Text, Password, Number, RadioGroup, CheckboxGroup, and Select.",
                            },
                            {
                                title: "Zero Layout Shift",
                                description: "Animated modal popup with stable scroll gutters and backdrop blur.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
