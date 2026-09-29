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
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field"
import { Search, Lock, Eye, EyeOff } from "lucide-react"

export function InputPopup({ open, onOpenChange }: PopupProps) {
    const [showPassword, setShowPassword] = React.useState(false)
    const [query, setQuery] = React.useState("")
    const [email, setEmail] = React.useState("invalid-email-format")

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isInvalid = !isEmailValid

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col gap-8 max-w-md w-full">
                        <Field>
                            <FieldLabel>Standard Input</FieldLabel>
                            <Input placeholder="Enter username or email" defaultValue="danyalasghar@midnight.dev" />
                        </Field>

                        <Field>
                            <FieldLabel>Search with Icon</FieldLabel>
                            <InputGroup>
                                <InputGroupAddon align="inline-start">
                                    <Search className="size-4 text-muted" />
                                </InputGroupAddon>
                                <InputGroupInput
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search documentation or files..."
                                />
                            </InputGroup>
                        </Field>

                        {/* Password input with toggle button */}
                        <Field>
                            <FieldLabel>Secure Password Field</FieldLabel>
                            <InputGroup>
                                <InputGroupAddon align="inline-start">
                                    <Lock className="size-4 text-muted" />
                                </InputGroupAddon>
                                <InputGroupInput
                                    type={showPassword ? "text" : "password"}
                                    defaultValue="super-secret-password-123"
                                />
                                <InputGroupAddon
                                    align="inline-end"
                                    className="cursor-pointer hover:text-white"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                                </InputGroupAddon>
                            </InputGroup>
                        </Field>

                        {/* Interactive validation state with dynamic description / error */}
                        <Field data-invalid={isInvalid}>
                            <FieldLabel>Validation State</FieldLabel>
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@domain.com"
                                aria-invalid={isInvalid}
                            />
                            <FieldDescription
                                description="We'll send updates and verification links here."
                                error={
                                    isInvalid
                                        ? email.length === 0
                                            ? "Email address is required."
                                            : "Please enter a valid email address (e.g. name@domain.com)."
                                        : undefined
                                }
                            />
                        </Field>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Input & InputGroup</PopupTitle>
                    <PopupDescription>
                        Engineered with composable input groups, interactive icon addons, password visibility toggles, and clean focus ring transitions.
                    </PopupDescription>

                    <PopupCharacteristics
                        items={[
                            {
                                title: "Addon Architecture",
                                description: "Easily place leading icons, trailing actions, or helper controls inside the input shell.",
                            },
                            {
                                title: "Elevated Surface & Rim Light",
                                description: "Calibrated dark surface (rgba(35, 35, 35)) with subtle top rim lighting that brightens smoothly on hover and active focus.",
                            },
                            {
                                title: "Validation States",
                                description: "Distinct focus-visible rings, disabled states, and dynamic aria-invalid error boundaries via Field primitives.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
