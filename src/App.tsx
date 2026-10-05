import * as React from "react"
import {
    Card,
    CardPreview,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/showcase/card'
import { Button } from '@/components/ui/button/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Field, FieldLabel } from '@/components/ui/field'
import { Badge } from '@/components/ui/badge/badge'
import { Search } from 'lucide-react'
import modalScreenshot from '@/assets/dialog-screenshot.png'
import databaseCreationScreenshot from '@/assets/database-creation-screenshot.png'
import tempoGmailScreenshot from '@/assets/gmail-tempo-screenshot.png'


import { ButtonPopup } from '@/components/showcase/popups/button-popup'
import { InputPopup } from '@/components/showcase/popups/input-popup'
import { SelectPopup } from '@/components/showcase/popups/select-popup'
import { RadioPopup } from '@/components/showcase/popups/radio-popup'
import { BadgePopup } from '@/components/showcase/popups/badge-popup'
import { DialogPopup } from '@/components/showcase/popups/dialog-popup'
import { DatabaseCreationPopup } from '@/components/showcase/popups/database-creation-popup'
import { IntegrationDialogPopup } from '@/components/showcase/popups/integration-dialog-popup'

type PopupId =
    | 'button'
    | 'input'
    | 'select'
    | 'radio'
    | 'badge'
    | 'dialog'
    | 'database-creation'
    | 'integration-dialog'
    | null

export default function App() {
    const [activePopup, setActivePopup] = React.useState<PopupId>(null)

    return (
        <div className="min-h-screen font-sans selection:text-white py-16 relative z-1">
            <div className="max-w-screen-2xl mx-auto flex flex-col gap-16">

                {/* Header */}
                <header className="flex flex-col items-center text-center gap-3">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground leading-[1.05] text-glow">
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
                        <h2 className="text-2xl font-medium text-foreground">Core Primitives</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        <Card onClick={() => setActivePopup('button')}>
                            <CardPreview>
                                <div className="grid grid-cols-2 gap-2 pointer-events-none select-none">
                                    <Button variant="default" className="h-8.5">Primary</Button>
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
                                <CardTitle>Input & Textarea</CardTitle>
                            </CardContent>
                        </Card>

                        <Card onClick={() => setActivePopup('select')}>
                            <CardPreview>
                                <Field className="w-full max-w-[210px] pointer-events-none select-none">
                                    <FieldLabel>Deployment Region</FieldLabel>
                                    <Select defaultValue="us-east-1">
                                        <SelectTrigger className="h-9">
                                            <SelectValue placeholder="Select a region..." />
                                        </SelectTrigger>
                                    </Select>
                                </Field>
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Select</CardTitle>
                            </CardContent>
                        </Card>

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
                            </CardContent>
                        </Card>

                        <Card onClick={() => setActivePopup('badge')}>
                            <CardPreview>
                                <div className="flex flex-col items-center justify-center gap-2 pointer-events-none select-none">
                                    <div className="flex items-center gap-1.5">
                                        <Badge variant="primary">Primary</Badge>
                                        <Badge variant="success">Success</Badge>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Badge variant="secondary">Secondary</Badge>
                                        <Badge variant="destructive">Destructive</Badge>
                                    </div>
                                </div>
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Badge</CardTitle>
                            </CardContent>
                        </Card>

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
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="flex flex-col gap-4">
                    <div className="flex items-center justify-center text-center">
                        <h2 className="text-2xl font-medium text-foreground">Mockups Using Primitives</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card onClick={() => setActivePopup('database-creation')}>
                            <CardPreview>
                                <img
                                    src={databaseCreationScreenshot}
                                    alt="Database creation preview"
                                    className="h-full scale-135 -mb-40 object-contain rounded-lg"
                                />
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Database Creation</CardTitle>
                                <CardDescription>Provision high-availability cloud database</CardDescription>
                            </CardContent>
                        </Card>

                        <Card onClick={() => setActivePopup('integration-dialog')}>
                            <CardPreview>
                                <img
                                    src={tempoGmailScreenshot}
                                    alt="Integration dialog preview"
                                    className="h-full scale-80 -mb-10 object-contain rounded-lg"
                                />
                            </CardPreview>
                            <CardContent>
                                <CardTitle>Integration Dialog</CardTitle>
                                <CardDescription>Connect Gmail and Tempo via Google OAuth</CardDescription>
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
            <BadgePopup
                open={activePopup === 'badge'}
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
            <IntegrationDialogPopup
                open={activePopup === 'integration-dialog'}
                onOpenChange={(open) => !open && setActivePopup(null)}
            />
        </div>
    )
}