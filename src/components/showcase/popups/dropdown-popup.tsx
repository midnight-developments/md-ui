"use client"

import * as React from "react"
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
import { CircleDot, CornerDownRight, FolderTree, Layers, List, ListChecks } from "lucide-react"
import { Kbd, KbdArrowDown, KbdArrowUp, KbdEnter, KbdGroup, KbdSpace } from "@/components/ui/kbd"

export function DropdownPopup({ open, onOpenChange }: PopupProps) {
    const [showStatusBar, setShowStatusBar] = React.useState(true)
    const [showActivityBar, setShowActivityBar] = React.useState(false)
    const [showPanel, setShowPanel] = React.useState(true)
    const [position, setPosition] = React.useState("bottom")
    const [deepOption1, setDeepOption1] = React.useState(true)
    const [deepOption2, setDeepOption2] = React.useState(false)

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col gap-8 w-full max-w-lg py-2">
                        <div className="flex flex-col gap-3.5">
                            <h3 className="text-lg text-muted leading-none">
                                Basic &amp; Grouped
                            </h3>
                            <div className="flex flex-wrap items-center gap-3">
                                <DropdownMenu>
                                    <DropdownMenuTrigger
                                        render={
                                            <Button variant="secondary">
                                                <List className="size-4" />
                                                Regular Dropdown
                                            </Button>
                                        }
                                    />
                                    <DropdownMenuContent align="start">
                                        <DropdownMenuItem>Option 1</DropdownMenuItem>
                                        <DropdownMenuItem>Option 2</DropdownMenuItem>
                                        <DropdownMenuItem variant="destructive"> Destructive Option</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                <DropdownMenu>
                                    <DropdownMenuTrigger
                                        render={
                                            <Button variant="secondary">
                                                <Layers className="size-4" />
                                                Grouped Options
                                            </Button>
                                        }
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
                                            <DropdownMenuItem variant="destructive">Destructive Option</DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3.5">
                            <h3 className="text-lg text-muted leading-none">
                                Selection Controls
                            </h3>
                            <div className="flex flex-wrap items-center gap-3">
                                <DropdownMenu>
                                    <DropdownMenuTrigger
                                        render={
                                            <Button variant="secondary">
                                                <ListChecks className="size-4" />
                                                Checkboxes
                                            </Button>
                                        }
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
                                        render={
                                            <Button variant="secondary">
                                                <CircleDot className="size-4" />
                                                Radios
                                            </Button>
                                        }
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
                            </div>
                        </div>

                        <div className="flex flex-col gap-3.5">
                            <h3 className="text-lg text-muted leading-none">
                                Nested Menus
                            </h3>
                            <div className="flex flex-wrap items-center gap-3">
                                <DropdownMenu>
                                    <DropdownMenuTrigger
                                        render={
                                            <Button variant="secondary">
                                                <CornerDownRight className="size-4" />
                                                With Submenu
                                            </Button>
                                        }
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

                                <DropdownMenu>
                                    <DropdownMenuTrigger
                                        render={
                                            <Button variant="secondary">
                                                <FolderTree className="size-4" />
                                                With Double Submenu
                                            </Button>
                                        }
                                    />
                                    <DropdownMenuContent align="start">
                                        <DropdownMenuItem>Option 1</DropdownMenuItem>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>Level 1</DropdownMenuSubTrigger>
                                            <DropdownMenuSubContent>
                                                <DropdownMenuItem>Sub Option 1</DropdownMenuItem>
                                                <DropdownMenuSub>
                                                    <DropdownMenuSubTrigger>Level 2</DropdownMenuSubTrigger>
                                                    <DropdownMenuSubContent>
                                                        <DropdownMenuCheckboxItem
                                                            checked={deepOption1}
                                                            onCheckedChange={setDeepOption1}
                                                        >
                                                            Deep Option 1
                                                        </DropdownMenuCheckboxItem>
                                                        <DropdownMenuCheckboxItem
                                                            checked={deepOption2}
                                                            onCheckedChange={setDeepOption2}
                                                        >
                                                            Deep Option 2
                                                        </DropdownMenuCheckboxItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem variant="destructive">Destructive Option</DropdownMenuItem>
                                                    </DropdownMenuSubContent>
                                                </DropdownMenuSub>
                                                <DropdownMenuItem>Sub Option 2</DropdownMenuItem>
                                            </DropdownMenuSubContent>
                                        </DropdownMenuSub>
                                        <DropdownMenuItem>Option 2</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Dropdown</PopupTitle>
                    <PopupDescription>
                        Floating action and selection menu built on Base UI Menu primitives inside a glass PopupShell.
                    </PopupDescription>

                    <PopupKeyboardInteractions
                        items={[
                            {
                                keys: <KbdGroup separator="or"><KbdEnter /><KbdSpace /><KbdArrowDown /></KbdGroup>,
                                description: "Opens the menu from the trigger.",
                            },
                            {
                                keys: <KbdGroup separator="or"><KbdArrowDown /><KbdArrowUp /></KbdGroup>,
                                description: "Moves focus between items, looping at the ends.",
                            },
                            {
                                keys: <KbdGroup separator="or"><Kbd>Home</Kbd><Kbd>End</Kbd></KbdGroup>,
                                description: "Jumps to the first or last item.",
                            },
                            {
                                keys: <Kbd>Escape</Kbd>,
                                description: "Closes the menu and returns focus to the trigger.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
