"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel, FieldGroup, FieldDescription } from "@/components/ui/field"

export function InputShowcase() {
    const [email, setEmail] = React.useState("invalid-email-format")

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isInvalid = !isEmailValid

    return (
        <FieldGroup className="max-w-md">
            <Field>
                <FieldLabel>Standard Input</FieldLabel>
                <Input placeholder="Enter username or email" defaultValue="danyalasghar@midnight.dev" />
            </Field>

            <Field>
                <FieldLabel>Secure Password Field</FieldLabel>
                <Input
                    type="password"
                    defaultValue="super-secret-password-123"
                />
            </Field>

            <Field>
                <FieldLabel>Textarea</FieldLabel>
                <Textarea
                    placeholder="Write project notes or a description..."
                    defaultValue="Engineered with automatic field-sizing and unified InputShell styling."
                    rows={2}
                />
            </Field>

            <Field data-invalid={isInvalid ? "" : undefined}>
                <FieldLabel>Validation State</FieldLabel>
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    data-invalid={isInvalid ? "" : undefined}
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
        </FieldGroup>
    )
}

