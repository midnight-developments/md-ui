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
    DialogShell,
    DialogHeader,
    DialogTitle,
    DialogBody,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { InfoIcon } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { SuccessGraphic } from "@/components/ui/graphics/success-graphic"
import { Badge } from "@/components/ui/badge"

export function IntegrationDialogPopup({ open, onOpenChange }: PopupProps) {
    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="flex flex-col items-center gap-6  w-full">
                        <DialogShell className="w-120">
                            <DialogHeader className="gap-5">
                                <SuccessGraphic className="size-14 " />
                                <DialogTitle className="max-w-xs">Your meeting has been scheduled</DialogTitle>
                            </DialogHeader>
                            <DialogBody className="flex flex-col gap-8">
                                <div className="flex items-center text-accent-text bg-accent/15 gap-2 bg-background-light px-3 py-2 rounded-xl">
                                    <InfoIcon size={20} />
                                    Check your inbox for an email with more details!
                                </div>
                                <div className="grid grid-cols-2 gap-2 gap-y-4">
                                    <div>
                                        <p className="text-base text-secondary">Date</p>
                                        <p className="text-base text-foreground">Mon, 11 November</p>
                                    </div>
                                    <div>
                                        <p className="text-base text-secondary">Time Zone</p>
                                        <p className="text-base text-foreground">PMT | GMT-8</p>
                                    </div>
                                    <div>
                                        <p className="text-base text-secondary">Time</p>
                                        <p className="text-base text-foreground">11:00am - 11:30am</p>
                                    </div>
                                    <div>
                                        <p className="text-base text-secondary">Location</p>
                                        <p className="text-base text-foreground">Online Remote</p>
                                    </div>
                                </div>


                                <div className="flex flex-col gap-1">
                                    <p className="text-base text-secondary">Attendees</p>
                                    <div className="flex items-center gap-2.5 mt-0.75">
                                        <Avatar className="w-5 h-5">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        Shadab Ahmed <Badge variant="success">Admin</Badge>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Avatar className="w-5 h-5">
                                            <AvatarImage
                                                src="https://github.com/maxleiter.png"
                                                alt="@maxleiter"
                                            />
                                            <AvatarFallback>LR</AvatarFallback>
                                        </Avatar>
                                        Max Leiter
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Avatar className="w-5 h-5">
                                            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHfrn7uCuoNUxjLkSUegA83kNg-VhQfv81dj_nS94WraN-o8_3gQFZyoq&s=10" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        Darren Watkins
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Avatar className="w-5 h-5">
                                            <AvatarImage src="https://github.com/danyalasghar.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        Danyal Asghar
                                    </div>
                                </div>

                            </DialogBody>
                            <DialogFooter className="grid grid-cols-2">
                                <Button variant="secondary">Return Home</Button>
                                <Button>Edit Details</Button>
                            </DialogFooter>
                        </DialogShell>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Integration Dialog</PopupTitle>
                    <PopupDescription>
                        Connect external integrations and services.
                    </PopupDescription>
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
