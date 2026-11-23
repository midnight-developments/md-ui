import * as React from "react"
import {
    Card,
    CardPreview,
    CardTitle,
    CardContent,
} from '@/components/showcase/card'
import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Field, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field'
import { Badge } from '@/components/ui/badge'
import { Search, SlidersHorizontal } from 'lucide-react'
import { TriggerChevron } from '@/components/ui/trigger-chevron'
import { DialogShell } from '@/components/ui/dialog'


import { ButtonPopup } from '@/components/showcase/popups/button-popup'
import { InputPopup } from '@/components/showcase/popups/input-popup'
import { SelectPopup } from '@/components/showcase/popups/select-popup'
import { DropdownPopoverPopup } from '@/components/showcase/popups/dropdown-popover-popup'
import { RadioPopup } from '@/components/showcase/popups/radio-popup'
import { CheckboxPopup } from '@/components/showcase/popups/checkbox-popup'
import { BadgePopup } from '@/components/showcase/popups/badge-popup'
import { DialogPopup } from '@/components/showcase/popups/dialog-popup'
import { ShareProjectPopup } from '@/components/showcase/popups/share-project-popup'
import { IntegrationDialogPopup } from '@/components/showcase/popups/integration-dialog-popup'
import { BillingDialogPopup } from '@/components/showcase/popups/billing-dialog-popup'
import { CheckboxGroup, Checkbox } from '@/components/ui/checkbox'

type PopupId =
    | 'button'
    | 'input'
    | 'select'
    | 'dropdown-popover'
    | 'radio'
    | 'checkbox'
    | 'badge'
    | 'dialog'
    | 'database-creation'
    | 'integration-dialog'
    | 'billing-dialog'
    | null

export default function App() {
    const [activePopup, setActivePopup] = React.useState<PopupId>(null)

    return (
        <div className="min-h-screen font-sans selection:text-white py-16 relative z-1">
            <div className="max-w-screen-2xl mx-auto flex flex-col gap-16">

                {/* Header */}
                <header className="flex flex-col items-center text-center gap-3">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground leading-[1.05]">
                        UI/UX Showcase By Danyal Asghar
                    </h1>

                    <p className="text-base sm:text-lg text-muted font-normal max-w-2xl">
                        Click any card to inspect interactive states and architecture :)
                        <br></br>
                        <br></br>
                        A quick demonstration of some of my UI component designs with some mockups. Engineered with Base UI headless primitives and Tailwind CSS.
                    </p>
                </header>

                <section className="flex flex-col gap-4">
                    <div className="flex items-center justify-center text-center">
                        <h2 className="text-2xl font-medium text-foreground">Mockups Using Primitives</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <Card onClick={() => setActivePopup('database-creation')}>
                            <CardPreview>
                                <div className="w-full max-w-[220px] pointer-events-none select-none">
                                    <DialogShell className="w-full p-4 gap-3 rounded-xl border border-white/10">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm font-medium text-foreground">Database Creation</span>
                                            <span className="text-xs text-muted">Mockup shell</span>
                                        </div>
                                        <div className="flex flex-col gap-1.5 pt-1">
                                            <div className="h-2 w-full bg-white/10 rounded" />
                                            <div className="h-2 w-2/3 bg-white/5 rounded" />
                                        </div>
                                    </DialogShell>
                                </div>
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Database Creation</CardTitle>
                            </CardContent>
                        </Card>

                        <Card onClick={() => setActivePopup('integration-dialog')}>
                            <CardPreview>
                                <div className="w-full max-w-[220px] pointer-events-none select-none">
                                    <DialogShell className="w-full p-4 gap-3 rounded-xl border border-white/10">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm font-medium text-foreground">Integration Dialog</span>
                                            <span className="text-xs text-muted">Mockup shell</span>
                                        </div>
                                        <div className="flex flex-col gap-1.5 pt-1">
                                            <div className="h-2 w-full bg-white/10 rounded" />
                                            <div className="h-2 w-2/3 bg-white/5 rounded" />
                                        </div>
                                    </DialogShell>
                                </div>
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Meeting Confirmation Dialog</CardTitle>
                            </CardContent>
                        </Card>

                        <Card onClick={() => setActivePopup('billing-dialog')}>
                            <CardPreview>
                                <div className="w-full max-w-[220px] pointer-events-none select-none">
                                    <DialogShell className="w-full p-4 gap-3 rounded-xl border border-white/10">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm font-medium text-foreground">Form Dialog</span>
                                            <span className="text-xs text-muted">Mockup shell</span>
                                        </div>
                                        <div className="flex flex-col gap-1.5 pt-1">
                                            <div className="h-2 w-full bg-white/10 rounded" />
                                            <div className="h-2 w-2/3 bg-white/5 rounded" />
                                        </div>
                                    </DialogShell>
                                </div>
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Form Dialog</CardTitle>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="flex flex-col gap-4">
                    <div className="flex items-center justify-center text-center">
                        <h2 className="text-2xl font-medium text-foreground">Core Primitives</h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                        <Card onClick={() => setActivePopup('button')}>
                            <CardPreview>
                                <div className="grid grid-cols-2 gap-2 pointer-events-none select-none">
                                    <Button variant="primary" className="h-8.5">Primary</Button>
                                    <Button variant="secondary" className="h-8.5">Secondary</Button>
                                    <Button variant="ghost" className="h-8.5">Ghost</Button>
                                    <Button variant="destructive" className="h-8.5">Destructive</Button>
                                </div>
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Button</CardTitle>
                            </CardContent>
                        </Card>

                        <Card onClick={() => setActivePopup('input')}>
                            <CardPreview>
                                <Field className="w-full max-w-[210px] pointer-events-none select-none">
                                    <FieldLabel>Search</FieldLabel>
                                    <InputGroup>
                                        <InputGroupAddon align="inline-start">
                                            <Search className="size-4 text-muted" />
                                        </InputGroupAddon>
                                        <InputGroupInput placeholder="Search…" readOnly />
                                    </InputGroup>
                                </Field>
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Input & Textarea</CardTitle>
                            </CardContent>
                        </Card>

                        <Card onClick={() => setActivePopup('select')}>
                            <CardPreview>
                                <Field className="w-full max-w-[210px] pointer-events-none select-none">
                                    <FieldLabel>Select</FieldLabel>
                                    <Select defaultValue="option-1">
                                        <SelectTrigger className="h-9">
                                            <SelectValue placeholder="Select an option…" />
                                        </SelectTrigger>
                                    </Select>
                                </Field>
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Select & Combobox</CardTitle>
                            </CardContent>
                        </Card>

                        <Card onClick={() => setActivePopup('dropdown-popover')}>
                            <CardPreview>
                                <div className="flex flex-col items-center gap-2.5 pointer-events-none select-none w-full max-w-[210px]">
                                    <div className="input-shell w-full">
                                        <SlidersHorizontal className="size-4 text-muted" />
                                        <span>Options</span>
                                        <TriggerChevron />
                                    </div>
                                    <p className="text-[14px] text-muted text-left w-full">
                                        Open a popover by{" "}
                                        <span className="text-foreground underline underline-offset-4 font-medium">
                                            clicking here
                                        </span>
                                    </p>
                                </div>
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Dropdown & Popover</CardTitle>
                            </CardContent>
                        </Card>

                        <Card onClick={() => setActivePopup('radio')}>
                            <CardPreview>
                                <FieldSet className="w-full max-w-[190px] gap-2.5! pointer-events-none select-none">
                                    <FieldLegend>Radio Group</FieldLegend>
                                    <RadioGroup defaultValue="opt-2" className="gap-3">
                                        <Field orientation="horizontal">
                                            <RadioGroupItem value="opt-1" id="prev-opt-1" />
                                            <FieldLabel htmlFor="prev-opt-1">Option 1</FieldLabel>
                                        </Field>
                                        <Field orientation="horizontal">
                                            <RadioGroupItem value="opt-2" id="prev-opt-2" />
                                            <FieldLabel htmlFor="prev-opt-2">Option 2</FieldLabel>
                                        </Field>
                                        <Field orientation="horizontal">
                                            <RadioGroupItem value="opt-3" id="prev-opt-3" />
                                            <FieldLabel htmlFor="prev-opt-3">Option 3</FieldLabel>
                                        </Field>
                                    </RadioGroup>
                                </FieldSet>
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Radio</CardTitle>
                            </CardContent>
                        </Card>

                        <Card onClick={() => setActivePopup('checkbox')}>
                            <CardPreview>
                                <FieldSet className="w-full max-w-[190px] gap-2.5! pointer-events-none select-none">
                                    <FieldLegend>Checkbox Group</FieldLegend>
                                    <CheckboxGroup defaultValue={['opt-1', 'opt-2']} className="gap-3.25">
                                        <Field orientation="horizontal">
                                            <Checkbox value="opt-1" id="prev-opt-1" />
                                            <FieldLabel htmlFor="prev-opt-1">Option 1</FieldLabel>
                                        </Field>
                                        <Field orientation="horizontal">
                                            <Checkbox value="opt-2" id="prev-opt-2" />
                                            <FieldLabel htmlFor="prev-opt-2">Option 2</FieldLabel>
                                        </Field>
                                        <Field orientation="horizontal">
                                            <Checkbox value="opt-3" id="prev-opt-3" />
                                            <FieldLabel htmlFor="prev-opt-3">Option 3</FieldLabel>
                                        </Field>
                                    </CheckboxGroup>
                                </FieldSet>
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Checkbox</CardTitle>
                            </CardContent>
                        </Card>

                        <Card onClick={() => setActivePopup('badge')}>
                            <CardPreview>
                                <div className="flex flex-col items-center justify-center gap-2 pointer-events-none select-none">
                                    <div className="flex items-center gap-1.5">
                                        <Badge variant="accent" size="base">Accent</Badge>
                                        <Badge variant="success" size="base">Success</Badge>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Badge variant="slate" size="base">Slate</Badge>
                                        <Badge variant="destructive" size="base">Destructive</Badge>
                                    </div>
                                </div>
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Badge</CardTitle>
                            </CardContent>
                        </Card>

                        <Card onClick={() => setActivePopup('dialog')}>
                            <CardPreview>

                            </CardPreview>
                            <CardContent>
                                <CardTitle>Dialog</CardTitle>
                            </CardContent>
                        </Card>
                    </div>
                </section>



            </div >

            <ButtonPopup
                open={activePopup === 'button'}
                onOpenChange={(open) => !open && setActivePopup(null)}
            />
            <InputPopup
                open={activePopup === 'input'}
                onOpenChange={(open) => !open && setActivePopup(null)}
            />
            <SelectPopup
                open={activePopup === 'select'}
                onOpenChange={(open) => !open && setActivePopup(null)}
            />
            <DropdownPopoverPopup
                open={activePopup === 'dropdown-popover'}
                onOpenChange={(open) => !open && setActivePopup(null)}
            />
            <RadioPopup
                open={activePopup === 'radio'}
                onOpenChange={(open) => !open && setActivePopup(null)}
            />
            <CheckboxPopup
                open={activePopup === 'checkbox'}
                onOpenChange={(open) => !open && setActivePopup(null)}
            />
            <BadgePopup
                open={activePopup === 'badge'}
                onOpenChange={(open) => !open && setActivePopup(null)}
            />
            <DialogPopup
                open={activePopup === 'dialog'}
                onOpenChange={(open) => !open && setActivePopup(null)}
            />
            <ShareProjectPopup
                open={activePopup === 'database-creation'}
                onOpenChange={(open) => !open && setActivePopup(null)}
            />
            <IntegrationDialogPopup
                open={activePopup === 'integration-dialog'}
                onOpenChange={(open) => !open && setActivePopup(null)}
            />
            <BillingDialogPopup
                open={activePopup === 'billing-dialog'}
                onOpenChange={(open) => !open && setActivePopup(null)}
            />
        </div >
    )
}