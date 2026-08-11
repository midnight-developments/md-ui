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
import { Input } from './components/ui/input'
import { Button } from "./components/ui/button"

export default function App() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card className="w-md">
                <CardHeader className="flex flex-row items-center gap-3">
                    <CardTitleIcon icon={ShareIcon} />
                    <CardTitle>Share Project</CardTitle>

                </CardHeader>
                <CardContent>
                    <CardContentSection className='flex flex-col gap-6'>
                        <Input
                            label='Document Link'
                            description='Share this link with others'
                            value='https://docs.google.com/document/d/1234567890/edit?usp=sharing'
                            action={<Button variant='outline'>Copy</Button>}
                        />
                        <Input
                            label='Search Recipents'
                            description='Add collaborators by username'
                            placeholder=''
                            action={<Button variant='outline'>Invite</Button>}
                        />
                    </CardContentSection>
                    <CardContentSection>
                        Soemthing
                    </CardContentSection>
                    <CardContentSection>
                        Soemthing
                    </CardContentSection>
                </CardContent>
                <CardFooter className="justify-between">
                    <div className="flex items-center gap-2">
                        <Button variant='link' className='opacity-60 '>
                            <CodeBracketIcon className="size-5" />
                            Get Embed Code
                        </Button>

                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant='outline'>Cancel</Button>
                        <Button variant='default'>Confirm Access</Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}