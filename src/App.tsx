import { useState } from 'react'
import { ShareIcon } from '@heroicons/react/24/solid'
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
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const shareFormSchema = z.object({
    expirationDays: z.number({ message: "Expiration period must be a number." })
        .min(1, { message: "Expiration period must be at least 1 day." }),
    passcode: z.string()
        .min(4, { message: "Passcode must be at least 4 characters." })
        .or(z.literal(""))
})

type ShareFormValues = z.infer<typeof shareFormSchema>

export default function App() {
    const [isOpen, setIsOpen] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ShareFormValues>({
        resolver: zodResolver(shareFormSchema),
        defaultValues: {
            expirationDays: 30,
            passcode: "",
        },
        mode: "onChange",
    })

    const onSubmit = (data: ShareFormValues) => {
        console.log("Form Submitted:", data)
        setIsOpen(false)
        reset()
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Button onClick={() => setIsOpen(true)}>Open Share Panel</Button>

            <Dialog open={isOpen} onOpenChange={(open) => {
                setIsOpen(open)
                if (!open) {
                    reset()
                }
            }}>
                <DialogContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                                    type="button"
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
                                                <Button type="button" variant='outline'>Invite</Button>
                                            </div>
                                            <FieldDescription description="Add collaborators by username" />
                                        </Field>
                                    </FieldGroup>
                                    <FieldSeparator />
                                    <FieldGroup>
                                        <Field data-invalid={!!errors.expirationDays}>
                                            <FieldLabel>Expiration Period</FieldLabel>
                                            <Input
                                                type="number"
                                                {...register('expirationDays', { valueAsNumber: true })}
                                            />
                                            <FieldDescription
                                                description="Number of days before the link expires"
                                                error={errors.expirationDays?.message}
                                            />
                                        </Field>
                                        <Field data-invalid={!!errors.passcode}>
                                            <FieldLabel>Access Passcode</FieldLabel>
                                            <Input
                                                type="password"
                                                placeholder="Enter passcode"
                                                {...register('passcode')}
                                            />
                                            <FieldDescription
                                                description="Require visitors to enter this passcode to view"
                                                error={errors.passcode?.message}
                                            />
                                        </Field>
                                    </FieldGroup>
                                    <FieldSeparator />
                                </FieldSet>
                            </CardContent>
                            <CardFooter className="justify-between">
                                <div className="flex items-center gap-2" />
                                <div className="flex items-center gap-2">
                                    <Button
                                        type="button"
                                        variant='outline'
                                        onClick={() => {
                                            setIsOpen(false)
                                            reset()
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button type="submit" variant='default'>Confirm Access</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}