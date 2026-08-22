import { useState } from 'react'
import { CodeBracketIcon, ShareIcon } from '@heroicons/react/24/solid'
import {
    Card,
    CardHeader,
    CardTitle,
    CardTitleIcon,
    CardContent,
    CardContentSection,
    CardFooter,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import { Input } from './components/ui/input'
import { Button } from "./components/ui/button"

export default function App() {
    const [isOpen, setIsOpen] = useState(false)
    const [expirationDays, setExpirationDays] = useState(30)
    const [passcode, setPasscode] = useState("")

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
                            <CardContentSection className='flex flex-col gap-8'>
                                <Input
                                    label='Document Link'
                                    description='Share this link with others'
                                    value='https://docs.google.com/document/d/1234567890/edit?usp=sharing'
                                    actionButton={<Button variant='outline'>Copy</Button>}
                                />
                                <Input
                                    label='Search Recipents'
                                    description='Add collaborators by username'
                                    placeholder=''
                                    actionButton={<Button variant='outline'>Invite</Button>}
                                />
                            </CardContentSection>
                            <CardContentSection className='flex flex-col gap-8'>
                                <Input
                                    type="number"
                                    label="Expiration Period"
                                    description="Number of days before the link expires"
                                    value={expirationDays}
                                    onChange={(e) => setExpirationDays(Number(e.target.value))}
                                />
                                <Input
                                    type="password"
                                    label="Access Passcode"
                                    description="Require visitors to enter this passcode to view"
                                    value={passcode}
                                    onChange={(e) => setPasscode(e.target.value)}
                                    placeholder="Enter passcode"
                                />
                            </CardContentSection>
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