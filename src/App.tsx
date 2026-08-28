import { useState } from 'react'
import {
    ShareIcon,
    Square3Stack3DIcon,
    ExclamationTriangleIcon,
    ClockIcon,
    CalendarIcon,
    CreditCardIcon,
} from '@heroicons/react/24/solid'
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
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from "@/components/ui/button"
import { Field, FieldLabel, FieldDescription, FieldGroup, FieldSeparator, FieldSet } from '@/components/ui/field'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from '@/components/ui/input-group'
import { CopyIcon } from 'lucide-react'
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'


const shareFormSchema = z.object({
    expirationDays: z.number({ message: "Expiration period must be a number." })
        .min(1, { message: "Expiration period must be at least 1 day." }),
    passcode: z.string()
        .min(4, { message: "Passcode must be at least 4 characters." })
        .or(z.literal(""))
})

type ShareFormValues = z.infer<typeof shareFormSchema>

const statusItems = [
    { value: "all-invoices", label: "All Invoices" },
    { value: "outstanding-invoices", label: "Outstanding invoices" },
    { value: "overdue", label: "Overdue" },
    { value: "scheduled", label: "Scheduled" },
    { value: "paid", label: "Paid" },
]

export default function App() {
    const [isOpen, setIsOpen] = useState(false)
    const [message, setMessage] = useState("")
    const { copyToClipboard } = useCopyToClipboard()

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
        console.log("Form Submitted:", { ...data, message })
        setIsOpen(false)
        reset()
        setMessage("")
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Button onClick={() => setIsOpen(true)}>Open Share Panel</Button>

            <Dialog open={isOpen} onOpenChange={(open) => {
                setIsOpen(open)
                if (!open) {
                    reset()
                    setMessage("")
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
                                            <InputGroup>
                                                <InputGroupInput
                                                    value='https://docs.google.com/document/d/1234567890/edit?usp=sharing'
                                                    readOnly
                                                />

                                                <InputGroupAddon align="inline-end">
                                                    <InputGroupButton
                                                        aria-label="Copy"
                                                        title="Copy"
                                                        onClick={() => {
                                                            copyToClipboard("https://x.com/shadcn")
                                                        }}
                                                    >
                                                        <CopyIcon strokeWidth={2} />
                                                    </InputGroupButton>
                                                </InputGroupAddon>
                                            </InputGroup>
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
                                        <Field>
                                            <FieldLabel>Access Level</FieldLabel>
                                            <Select defaultValue="outstanding-invoices" items={statusItems}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select invoice status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="all-invoices">
                                                        <Square3Stack3DIcon className="size-4" />
                                                        <span>All Invoices</span>
                                                    </SelectItem>
                                                    <SelectItem value="outstanding-invoices">
                                                        <ExclamationTriangleIcon className="size-4" />
                                                        <span>Outstanding invoices</span>
                                                    </SelectItem>
                                                    <SelectItem value="overdue">
                                                        <ClockIcon className="size-4" />
                                                        <span>Overdue</span>
                                                    </SelectItem>
                                                    <SelectItem value="scheduled">
                                                        <CalendarIcon className="size-4" />
                                                        <span>Scheduled</span>
                                                    </SelectItem>
                                                    <SelectItem value="paid">
                                                        <CreditCardIcon className="size-4" />
                                                        <span>Paid</span>
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FieldDescription description="Select the permissions for new collaborators" />
                                        </Field>
                                        <Field>
                                            <FieldLabel>Invitation Message (Optional)</FieldLabel>
                                            <Textarea
                                                placeholder="Add a message to include with the invitation link..."
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                            />
                                            <FieldDescription description="This message will be included in the notification email." />
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
                                            setMessage("")
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