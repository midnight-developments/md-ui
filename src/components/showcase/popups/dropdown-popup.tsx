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
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown"
import { Button } from "@/components/ui/button"

export function DropdownPopup({ open, onOpenChange }: PopupProps) {
    const [showStatusBar, setShowStatusBar] = React.useState(true)
    const [showActivityBar, setShowActivityBar] = React.useState(false)
    const [showPanel, setShowPanel] = React.useState(true)
    const [position, setPosition] = React.useState("bottom")

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                render={<Button variant="secondary">Regular</Button>}
                            />
                            <DropdownMenuContent align="start">
                                <DropdownMenuItem>Option 1</DropdownMenuItem>
                                <DropdownMenuItem>Option 2</DropdownMenuItem>
                                <DropdownMenuItem>Option 3</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger
                                render={<Button variant="secondary">Groups &amp; Destructive</Button>}
                            />
                            <DropdownMenuContent align="start">
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>Group 1</DropdownMenuLabel>
                                    <DropdownMenuItem>Option 1</DropdownMenuItem>
                                    <DropdownMenuItem>Option 2</DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>Group 2</DropdownMenuLabel>
                                    <DropdownMenuItem>Option 3</DropdownMenuItem>
                                    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger
                                render={<Button variant="secondary">Checkboxes</Button>}
                            />
                            <DropdownMenuContent align="start">
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                                    <DropdownMenuCheckboxItem
                                        checked={showStatusBar}
                                        onCheckedChange={setShowStatusBar}
                                    >
                                        Status Bar
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem
                                        checked={showActivityBar}
                                        onCheckedChange={setShowActivityBar}
                                    >
                                        Activity Bar
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem
                                        checked={showPanel}
                                        onCheckedChange={setShowPanel}
                                    >
                                        Panel
                                    </DropdownMenuCheckboxItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger
                                render={<Button variant="secondary">Radios</Button>}
                            />
                            <DropdownMenuContent align="start">
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                        <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger
                                render={<Button variant="secondary">Submenu</Button>}
                            />
                            <DropdownMenuContent align="start">
                                <DropdownMenuItem>Option 1</DropdownMenuItem>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>Sub Option 1</DropdownMenuItem>
                                        <DropdownMenuItem>Sub Option 2</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem variant="destructive">Remove</DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuSub>
                                <DropdownMenuItem>Option 2</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Dropdown</PopupTitle>
                    <PopupDescription>
                        Floating action and selection menu built on Base UI Menu primitives inside a glass PopupShell.
                    </PopupDescription>
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}

