import * as React from "react"
import {
    Card,
    CardPreview,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/showcase/card'
import { Button } from '@/components/ui/button/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input/input-group'
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Field, FieldLabel } from '@/components/ui/field'
import { Search, Globe } from 'lucide-react'
import modalScreenshot from '@/assets/modal-screenshot.png'
import {
    ButtonPopup,
    InputPopup,
    SelectPopup,
    RadioPopup,
    DialogPopup,
    DatabaseCreationPopup,
    CommandMenuPopup,
    IntegrationDialogPopup,
} from '@/components/showcase/popups'

type PopupId =
    | 'button'
    | 'input'
    | 'select'
    | 'radio'
    | 'dialog'
    | 'database-creation'
    | 'command-menu'
    | 'integration-dialog'
    | null

export default function App() {
    const [activePopup, setActivePopup] = React.useState<PopupId>(null)

    return (
        <div className="min-h-screen font-sans selection:text-white py-16">
            <div className="max-w-screen-2xl mx-auto flex flex-col gap-12">

                {/* Header */}
                <header className="flex flex-col items-center text-center gap-3">
                    <h1 className="font-sf-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] text-foreground leading-[1.05]">
                        UI/UX Showcase By Danyal Asghar
                    </h1>

                    <p className="font-sf-text text-base sm:text-lg text-muted font-normal tracking-tight max-w-2xl">
                        Click any card to inspect interactive states and architecture :)
                        <br></br>
                        <br></br>
                        A quick demonstration of some of my UI component designs with some mockups. Engineered with Base UI headless primitives and Tailwind CSS.
                    </p>
                </header>

                <section className="flex flex-col gap-4">
                    <div className="flex items-center justify-center text-center">
                        <h2 className="font-sf-display text-lg font-medium text-foreground tracking-tight">Core Primitives</h2>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <Card onClick={() => setActivePopup('button')}>
                            <CardPreview>
                                <div className="grid grid-cols-2 gap-2 pointer-events-none select-none">
                                    <Button variant="default" className="h-8.5">Primary</Button>
                                    <Button variant="outline" className="h-8.5">Outline</Button>
                                    <Button variant="ghost" className="h-8.5">Ghost</Button>
                                    <Button variant="destructive" className="h-8.5">Destructive</Button>
                                </div>
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Button</CardTitle>
                                <CardDescription>Physical rim light & tactile click</CardDescription>
                            </CardContent>
                        </Card>

                        {/* 2. Input & InputGroup */}
                        <Card onClick={() => setActivePopup('input')}>
                            <CardPreview>
                                <Field className="w-full max-w-[210px] pointer-events-none select-none">
                                    <FieldLabel>Search with Icon</FieldLabel>
                                    <InputGroup>
                                        <InputGroupAddon align="inline-start">
                                            <Search className="size-4 text-muted" />
                                        </InputGroupAddon>
                                        <InputGroupInput placeholder="Search documentation..." readOnly />
                                    </InputGroup>
                                </Field>
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Input & InputGroup</CardTitle>
                                <CardDescription>Addons, icons & shortcuts</CardDescription>
                            </CardContent>
                        </Card>

                        {/* 3. Select */}
                        <Card onClick={() => setActivePopup('select')}>
                            <CardPreview>
                                <Field className="w-full max-w-[210px] pointer-events-none select-none">
                                    <FieldLabel className="flex items-center gap-2">
                                        <Globe className="size-4 text-accent" />
                                        Deployment Region
                                    </FieldLabel>
                                    <Select defaultValue="us-east-1">
                                        <SelectTrigger className="h-9">
                                            <SelectValue placeholder="Select a region..." />
                                        </SelectTrigger>
                                    </Select>
                                </Field>
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Select</CardTitle>
                                <CardDescription>Animated dropdown picker</CardDescription>
                            </CardContent>
                        </Card>

                        {/* 4. Radio */}
                        <Card onClick={() => setActivePopup('radio')}>
                            <CardPreview>
                                <Field className="w-full max-w-[190px] gap-2.5! pointer-events-none select-none">
                                    <FieldLabel>Backup Frequency</FieldLabel>
                                    <RadioGroup defaultValue="daily" className="gap-1.5">
                                        <Field orientation="horizontal">
                                            <RadioGroupItem value="hourly" id="prev-hourly" />
                                            <FieldLabel htmlFor="prev-hourly" className="text-sm font-normal text-foreground">Hourly</FieldLabel>
                                        </Field>
                                        <Field orientation="horizontal">
                                            <RadioGroupItem value="daily" id="prev-daily" />
                                            <FieldLabel htmlFor="prev-daily" className="text-sm font-normal text-foreground">Daily</FieldLabel>
                                        </Field>
                                        <Field orientation="horizontal">
                                            <RadioGroupItem value="weekly" id="prev-weekly" />
                                            <FieldLabel htmlFor="prev-weekly" className="text-sm font-normal text-foreground">Weekly</FieldLabel>
                                        </Field>
                                    </RadioGroup>
                                </Field>
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Radio</CardTitle>
                                <CardDescription>Card variants & keyboard navigation</CardDescription>
                            </CardContent>
                        </Card>

                        {/* 5. Dialog */}
                        <Card onClick={() => setActivePopup('dialog')}>
                            <CardPreview>
                                <img
                                    src={modalScreenshot}
                                    alt="Dialog preview"
                                    className="h-full scale-135 -mb-10 object-contain rounded-lg"
                                />
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Dialog</CardTitle>
                                <CardDescription>Spring physics & modular layout</CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Section 2: Full Mockups & Workflows (3 cards) */}
                <section className="flex flex-col gap-4">
                    <div className="flex items-center justify-center text-center">
                        <h2 className="font-sf-display text-lg font-medium text-foreground tracking-tight">Full Mockups & Workflows</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* 1. Database Creation Form */}
                        <Card onClick={() => setActivePopup('database-creation')}>
                            <CardPreview />
                            <CardContent>
                                <CardTitle>Database Creation</CardTitle>
                                <CardDescription>Provision high-availability cloud database</CardDescription>
                            </CardContent>
                        </Card>

                        {/* 2. Command K Menu */}
                        <Card onClick={() => setActivePopup('command-menu')}>
                            <CardPreview />
                            <CardContent>
                                <CardTitle>Command K Menu</CardTitle>
                                <CardDescription>Spotlight-style fast command palette</CardDescription>
                            </CardContent>
                        </Card>

                        {/* 3. Integration Dialog */}
                        <Card onClick={() => setActivePopup('integration-dialog')}>
                            <CardPreview />
                            <CardContent>
                                <CardTitle>Integration Dialog</CardTitle>
                                <CardDescription>Connect external tools & cloud providers</CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </section>

            </div>

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
            <RadioPopup
                open={activePopup === 'radio'}
                onOpenChange={(open) => !open && setActivePopup(null)}
            />
            <DialogPopup
                open={activePopup === 'dialog'}
                onOpenChange={(open) => !open && setActivePopup(null)}
            />
            <DatabaseCreationPopup
                open={activePopup === 'database-creation'}
                onOpenChange={(open) => !open && setActivePopup(null)}
            />
            <CommandMenuPopup
                open={activePopup === 'command-menu'}
                onOpenChange={(open) => !open && setActivePopup(null)}
            />
            <IntegrationDialogPopup
                open={activePopup === 'integration-dialog'}
                onOpenChange={(open) => !open && setActivePopup(null)}
            />
        </div>
    )
}