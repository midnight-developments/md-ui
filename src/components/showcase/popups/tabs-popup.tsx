"use client"

import {
    Popup,
    PopupContent,
    PopupPreview,
    PopupDetails,
    PopupTitle,
    PopupDescription,
    PopupKeyboardInteractions,
    type PopupProps,
} from "@/components/showcase/popup"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Kbd, KbdArrowLeft, KbdArrowRight, KbdGroup, KbdShift, KbdTab } from "@/components/ui/kbd"

export function TabsPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col gap-12 w-full max-w-md py-2">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg text-muted leading-none">
                                Default Variant
                            </h3>
                            <Tabs defaultValue="tab-1" >
                                <TabsList>
                                    <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
                                    <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
                                    <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
                                </TabsList>
                                <TabsContent value="tab-1" className="p-2 bg-white/5 border-border border rounded-lg text-primary text-base">
                                    Content 1
                                </TabsContent>
                                <TabsContent value="tab-2" className="p-2 bg-white/5 border-border border rounded-lg text-primary text-base">
                                    Content 2
                                </TabsContent>
                                <TabsContent value="tab-3" className="p-2 bg-white/5 border-border border rounded-lg text-primary text-base">
                                    Content 3
                                </TabsContent>
                            </Tabs>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-lg text-muted leading-none">
                                Line Variant
                            </h3>
                            <Tabs defaultValue="tab-1" >
                                <TabsList variant="line" className="w-2/3">
                                    <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
                                    <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
                                    <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
                                </TabsList>
                                <TabsContent value="tab-1" className="p-2 bg-white/5 border-border border rounded-lg text-primary text-base">
                                    Content 1
                                </TabsContent>
                                <TabsContent value="tab-2" className="p-2 bg-white/5 border-border border rounded-lg text-primary text-base">
                                    Content 2
                                </TabsContent>
                                <TabsContent value="tab-3" className="p-2 bg-white/5 border-border border rounded-lg text-primary text-base">
                                    Content 3
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Tabs</PopupTitle>
                    <PopupDescription>
                        Accessible tabbed navigation built on Base UI Tabs primitives with pill and underline indicator variants.
                    </PopupDescription>

                    <PopupKeyboardInteractions
                        items={[
                            {
                                keys: <KbdTab />,
                                description: "Moves focus into the active tab or forward to its panel.",
                            },
                            {
                                keys: <KbdGroup separator="+"><KbdShift /><KbdTab /></KbdGroup>,
                                description: "Moves focus back from the panel to the active tab.",
                            },
                            {
                                keys: <KbdGroup separator="or"><KbdArrowRight /><KbdArrowLeft /></KbdGroup>,
                                description: "Moves focus between tabs and activates them.",
                            },
                            {
                                keys: <KbdGroup separator="or"><Kbd>Home</Kbd><Kbd>End</Kbd></KbdGroup>,
                                description: "Jumps to the first or last tab.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}

