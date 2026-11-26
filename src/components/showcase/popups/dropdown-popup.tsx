"use client"

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
    DropdownMenuItem,
} from "@/components/ui/dropdown"
import { Button } from "@/components/ui/button"

export function DropdownPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            render={
                                <Button variant="secondary">Open Menu</Button>
                            }
                        />
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem>Option 1</DropdownMenuItem>
                            <DropdownMenuItem>Option 2</DropdownMenuItem>
                            <DropdownMenuItem>Option 3</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
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

