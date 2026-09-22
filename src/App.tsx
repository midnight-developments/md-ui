import * as React from "react"
import {
    Card,
    CardImage,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/showcase/card'
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
                        A quick demonstration of some of my UI component designs with some mockups. Built on shadcn/ui components, particulary Base UI. Click onto any card for more details and interactions
                    </p>
                </header>

                <section className="flex flex-col gap-4">
                    <div className="flex items-center justify-center text-center">
                        <h2 className="font-sf-display text-lg font-medium text-foreground tracking-tight">Core Primitives</h2>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <Card onClick={() => setActivePopup('button')}>
                            <CardImage />
                            <CardContent>
                                <CardTitle>Button</CardTitle>
                                <CardDescription>Physical rim light & tactile click</CardDescription>
                            </CardContent>
                        </Card>

                        {/* 2. Input */}
                        <Card onClick={() => setActivePopup('input')}>
                            <CardImage />
                            <CardContent>
                                <CardTitle>Input</CardTitle>
                                <CardDescription>Addons, icons & shortcuts</CardDescription>
                            </CardContent>
                        </Card>

                        {/* 3. Select */}
                        <Card onClick={() => setActivePopup('select')}>
                            <CardImage />
                            <CardContent>
                                <CardTitle>Select</CardTitle>
                                <CardDescription>Animated dropdown picker</CardDescription>
                            </CardContent>
                        </Card>

                        {/* 4. Radio */}
                        <Card onClick={() => setActivePopup('radio')}>
                            <CardImage />
                            <CardContent>
                                <CardTitle>Radio</CardTitle>
                                <CardDescription>Single-choice indicator</CardDescription>
                            </CardContent>
                        </Card>

                        {/* 5. Dialog */}
                        <Card onClick={() => setActivePopup('dialog')}>
                            <CardImage />
                            <CardContent>
                                <CardTitle>Dialog</CardTitle>
                                <CardDescription>Zero-shift rim light modal</CardDescription>
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
                            <CardImage />
                            <CardContent>
                                <CardTitle>Database Creation</CardTitle>
                                <CardDescription>Provision high-availability cloud database</CardDescription>
                            </CardContent>
                        </Card>

                        {/* 2. Command K Menu */}
                        <Card onClick={() => setActivePopup('command-menu')}>
                            <CardImage />
                            <CardContent>
                                <CardTitle>Command K Menu</CardTitle>
                                <CardDescription>Spotlight-style fast command palette</CardDescription>
                            </CardContent>
                        </Card>

                        {/* 3. Integration Dialog */}
                        <Card onClick={() => setActivePopup('integration-dialog')}>
                            <CardImage />
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