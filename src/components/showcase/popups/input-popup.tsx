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
} from "@/components/showcase/popup"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon } from "@/components/ui/input-group"
import { Search, Mail, Eye, EyeOff } from "lucide-react"

export interface InputPopupProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function InputPopup({ open, onOpenChange }: InputPopupProps) {
    const [showPassword, setShowPassword] = React.useState(false)
    const [query, setQuery] = React.useState("")

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col gap-6 max-w-md w-full">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-sf-display text-muted">Standard Input</label>
                            <Input placeholder="Enter username or email" defaultValue="danyalasghar@midnight.dev" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-sf-display text-muted">Search with Icon & Shortcut</label>
                            <InputGroup>
                                <InputGroupAddon align="inline-start">
                                    <Search className="size-4 text-muted" />
                                </InputGroupAddon>
                                <Input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search documentation or files..."
                                    className="border-none bg-transparent shadow-none"
                                />
                                <InputGroupAddon align="inline-end">
                                    <kbd className="inline-flex items-center gap-1 rounded bg-white/10 px-1.5 py-0.5 text-xs text-muted font-mono">
                                        ⌘K
                                    </kbd>
                                </InputGroupAddon>
                            </InputGroup>
                        </div>

                        {/* Password input with toggle button */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-sf-display text-muted">Secure Password Field</label>
                            <InputGroup>
                                <InputGroupAddon align="inline-start">
                                    <Mail className="size-4 text-muted" />
                                </InputGroupAddon>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    defaultValue="super-secret-password-123"
                                    className="border-none bg-transparent shadow-none"
                                />
                                <InputGroupAddon
                                    align="inline-end"
                                    className="cursor-pointer hover:text-white"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                                </InputGroupAddon>
                            </InputGroup>
                        </div>

                        {/* Invalid / validation state */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-sf-display text-destructive">Invalid Validation State</label>
                            <Input
                                defaultValue="invalid-email-format"
                                aria-invalid="true"
                                className="border-destructive/50 ring-1 ring-destructive/40 focus:ring-destructive"
                            />
                            <span className="text-xs text-destructive">Please enter a valid email address.</span>
                        </div>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Input</PopupTitle>
                    <PopupDescription>
                        Engineered with composable input groups, keyboard shortcut chips, interactive icons, and clean focus ring transitions.
                    </PopupDescription>

                    <PopupCharacteristics
                        items={[
                            {
                                title: "Addon Architecture",
                                description: "Easily place leading icons, trailing actions, or shortcut indicators inside the input shell.",
                            },
                            {
                                title: "Subtle Contrast",
                                description: "Calibrated background opacities (rgba(255, 255, 255, 0.05)) that brighten smoothly on hover and focus.",
                            },
                            {
                                title: "State Styling",
                                description: "Distinct focus, active, disabled, and validation error ring representations.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
