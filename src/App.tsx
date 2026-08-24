import { useState } from 'react'
import { CodeBracketIcon, ShareIcon } from '@heroicons/react/24/solid'
import {
    Card,
    CardHeader,
    CardTitle,
    CardTitleIcon,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import { Input } from './components/ui/input'
import { Button } from "./components/ui/button"
import { Field, FieldLabel, FieldDescription, FieldGroup, FieldSeparator, FieldSet } from './components/ui/field'

export default function App() {
    const [isOpen, setIsOpen] = useState(false)
    const [expirationDays, setExpirationDays] = useState(30)
    const [passcode, setPasscode] = useState("")

    const passcodeError = passcode.length > 0 && passcode.length < 4
        ? "Passcode must be at least 4 characters."
        : undefined

    const expirationError = expirationDays < 1
        ? "Expiration period must be at least 1 day."
        : undefined

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Button onClick={() => setIsOpen(true)}>Open Share Panel</Button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                    <Card className="w-md">
                        <CardHeader className="flex flex-row items-center gap-3">
                            <CardTitleIcon icon={ShareIcon} />
                            <CardTitle>Share Project</CardTitle>

                        </CardHeader>
                        <CardContent>
                            <FieldSet>
                                <FieldSeparator className="my-0" />
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel>Document Link</FieldLabel>
                                        <div className="flex flex-row items-center gap-2 w-full">
                                            <Input
                                                value='https://docs.google.com/document/d/1234567890/edit?usp=sharing'
                                                readOnly
                                            />
                                            <Button
                                                variant='outline'
                                                onClick={() => {
                                                    navigator.clipboard.writeText('https://docs.google.com/document/d/1234567890/edit?usp=sharing')
                                                }}
                                            >
                                                Copy
                                            </Button>
                                        </div>
                                        <FieldDescription description="Share this link with others" />
                                    </Field>
                                    <Field>
                                        <FieldLabel>Search Recipents</FieldLabel>
                                        <div className="flex flex-row items-center gap-2 w-full">
                                            <Input placeholder='' />
                                            <Button variant='outline'>Invite</Button>
                                        </div>
                                        <FieldDescription description="Add collaborators by username" />
                                    </Field>
                                </FieldGroup>
                                <FieldSeparator />
                                <FieldGroup>
                                    <Field data-invalid={!!expirationError}>
                                        <FieldLabel>Expiration Period</FieldLabel>
                                        <Input
                                            type="number"
                                            value={expirationDays}
                                            onChange={(e) => setExpirationDays(Number(e.target.value))}
                                        />
                                        <FieldDescription
                                            description="Number of days before the link expires"
                                            error={expirationError}
                                        />
                                    </Field>
                                    <Field data-invalid={!!passcodeError}>
                                        <FieldLabel>Access Passcode</FieldLabel>
                                        <Input
                                            type="password"
                                            value={passcode}
                                            onChange={(e) => setPasscode(e.target.value)}
                                            placeholder="Enter passcode"
                                        />
                                        <FieldDescription
                                            description="Require visitors to enter this passcode to view"
                                            error={passcodeError}
                                        />
                                    </Field>
                                </FieldGroup>
                                <FieldSeparator />

                            </FieldSet>
                        </CardContent>
                        <CardFooter className="justify-between">
                            <div className="flex items-center gap-2">


                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant='outline' onClick={() => setIsOpen(false)}>Cancel</Button>
                                <Button variant='default' onClick={() => setIsOpen(false)}>Confirm Access</Button>
                            </div>
                        </CardFooter>
                    </Card>
                </DialogContent>
            </Dialog>
        </div>
    )
}