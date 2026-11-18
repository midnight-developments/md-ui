"use client"

import * as React from "react"
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
} from "@/components/ui/dialog/dialog"
import { Button } from "@/components/ui/button/button"
import { CopyIcon, CheckIcon, Lock } from "lucide-react"
import { useCopy } from "@/hooks/use-copy"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Field, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "@/components/ui/dropdown"
import { cn } from "@/lib/utils"
import { inputShellClasses, TriggerChevron } from "@/components/ui/shells/input-shell/input-shell"
import GlobeIcon from "@/assets/icons/globe.svg?react"
import ShareIcon from "@/assets/icons/share.svg?react"

export type Permission = "Admin" | "Can Edit" | "Can View"
export type GeneralAccessType = "restricted" | "anyone_with_link"

export interface UserRecipient {
    id: string
    name: string
    email: string
    avatar: string
    fallback: string
}

export interface ActiveRecipient extends UserRecipient {
    permission: Permission
}

const ALL_POSSIBLE_RECIPIENTS: UserRecipient[] = [
    {
        id: "1",
        name: "Shadab Ahmed",
        email: "m@shadcn.com",
        avatar: "https://github.com/shadcn.png",
        fallback: "CN",
    },
    {
        id: "2",
        name: "Sarah Connor",
        email: "sarah@example.com",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
        fallback: "SC",
    },
    {
        id: "3",
        name: "Alex Rivera",
        email: "alex@example.com",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
        fallback: "AR",
    },
    {
        id: "4",
        name: "Elena Rostova",
        email: "elena@example.com",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80",
        fallback: "ER",
    },
    {
        id: "5",
        name: "Michael Chen",
        email: "michael@example.com",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        fallback: "MC",
    },
]

const INITIAL_RECIPIENTS: ActiveRecipient[] = [
    { ...ALL_POSSIBLE_RECIPIENTS[0], permission: "Admin" },
    { ...ALL_POSSIBLE_RECIPIENTS[1], permission: "Can Edit" },
    { ...ALL_POSSIBLE_RECIPIENTS[2], permission: "Can View" },
]

const generalAccessDescriptions: Record<Permission, string> = {
    "Can View": "Anyone on the internet with the link can view",
    "Can Edit": "Anyone on the internet with the link can edit",
    "Admin": "Anyone on the internet with the link can administer",
}

export function ShareProjectPopup({ open, onOpenChange }: PopupProps) {
    const documentLink = "https://docs.google.com/document/u/0/"
    const { copy, copied } = useCopy()

    const [recipients, setRecipients] = React.useState<ActiveRecipient[]>(INITIAL_RECIPIENTS)
    const [searchValue, setSearchValue] = React.useState("")
    const [accessType, setAccessType] = React.useState<GeneralAccessType>("anyone_with_link")
    const [generalAccessPermission, setGeneralAccessPermission] = React.useState<Permission>("Can View")

    const availableRecipients = React.useMemo(() => {
        const existingIds = new Set(recipients.map((r) => r.id))
        return ALL_POSSIBLE_RECIPIENTS.filter((item) => !existingIds.has(item.id))
    }, [recipients])

    const handleAddRecipient = (user: UserRecipient) => {
        setRecipients((prev) => [...prev, { ...user, permission: "Can View" }])
        setSearchValue("")
    }

    const handleRemoveRecipient = (id: string) => {
        setRecipients((prev) => prev.filter((r) => r.id !== id))
    }

    const handlePermissionChange = (id: string, permission: Permission) => {
        setRecipients((prev) =>
            prev.map((r) => (r.id === id ? { ...r, permission } : r))
        )
    }

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <DialogShell className="w-140">
                        <DialogHeader className="flex-row items-center justify-start gap-3">
                            <ShareIcon className="text-foreground size-8 bg-white/10 p-2 rounded-lg" />
                            <DialogTitle>Share Project</DialogTitle>
                        </DialogHeader>
                        <DialogBody className="flex flex-col gap-8">
                            <Field>
                                <FieldLabel>Document Link</FieldLabel>
                                <InputGroup>
                                    <InputGroupInput
                                        readOnly
                                        value={documentLink}
                                    />
                                    <InputGroupAddon
                                        align="inline-end"
                                        className="cursor-pointer"
                                        onClick={() => copy(documentLink)}
                                        title={copied ? "Copied!" : "Copy link"}
                                    >
                                        {copied ? <CheckIcon className="size-4 text-green-400" /> : <CopyIcon />}
                                    </InputGroupAddon>
                                </InputGroup>
                            </Field>

                            <Field>
                                <FieldLabel>Search Recipients</FieldLabel>
                                <Combobox
                                    items={availableRecipients}
                                    itemToStringLabel={(item: UserRecipient) => (item ? `${item.name} ${item.email}` : "")}
                                    itemToStringValue={(item: UserRecipient) => (item ? item.id : "")}
                                    isItemEqualToValue={(a: UserRecipient, b: UserRecipient) => a?.id === b?.id}
                                    filter={(item: UserRecipient, query: string) => {
                                        const q = query.toLowerCase().trim()
                                        if (!q) return true
                                        return item.name.toLowerCase().includes(q) || item.email.toLowerCase().includes(q)
                                    }}
                                    inputValue={searchValue}
                                    onInputValueChange={(val) => setSearchValue(val)}
                                    value={null}
                                    onValueChange={(user: UserRecipient | null) => {
                                        if (user) handleAddRecipient(user)
                                    }}
                                >
                                    <ComboboxInput placeholder="Select an option…" />
                                    <ComboboxContent>
                                        <ComboboxList>
                                            {(user: UserRecipient) => (
                                                <ComboboxItem key={user.id} value={user}>
                                                    <div className="flex items-center gap-3 py-1.5">
                                                        <Avatar className="w-8 h-8">
                                                            <AvatarImage src={user.avatar} alt={user.name} />
                                                            <AvatarFallback>{user.fallback}</AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex flex-col gap-1.75">
                                                            <p className="leading-none text-foreground">{user.name}</p>
                                                            <p className="leading-none text-sm text-secondary">{user.email}</p>
                                                        </div>
                                                    </div>
                                                </ComboboxItem>
                                            )}
                                        </ComboboxList>
                                        <ComboboxEmpty>No options found</ComboboxEmpty>
                                    </ComboboxContent>
                                </Combobox>
                            </Field>

                            <div className="flex flex-col gap-4">
                                <p>Recipients</p>
                                <div className="flex flex-col gap-6">
                                    {recipients.length === 0 ? (
                                        <p className="text-center text-sm text-secondary">No recipients added</p>
                                    ) : (
                                        recipients.map((recipient) => (
                                            <div key={recipient.id} className="flex justify-between items-center">
                                                <div className="flex items-center gap-3.5">
                                                    <Avatar className="w-9 h-9">
                                                        <AvatarImage src={recipient.avatar} alt={recipient.name} />
                                                        <AvatarFallback>{recipient.fallback}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex flex-col gap-2">
                                                        <p className="leading-none">{recipient.name}</p>
                                                        <p className="leading-none text-sm text-secondary">{recipient.email}</p>
                                                    </div>
                                                </div>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger className={cn(inputShellClasses, "group/trigger cursor-pointer w-30")}>
                                                        <span className="flex-1 text-left truncate">{recipient.permission}</span>
                                                        <TriggerChevron />
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-40">
                                                        <DropdownMenuRadioGroup
                                                            value={recipient.permission}
                                                            onValueChange={(val) => {
                                                                if (val) handlePermissionChange(recipient.id, val as Permission)
                                                            }}
                                                        >
                                                            <DropdownMenuRadioItem value="Admin">Admin</DropdownMenuRadioItem>
                                                            <DropdownMenuRadioItem value="Can Edit">Can Edit</DropdownMenuRadioItem>
                                                            <DropdownMenuRadioItem value="Can View">Can View</DropdownMenuRadioItem>
                                                        </DropdownMenuRadioGroup>
                                                        <DropdownMenuItem
                                                            variant="destructive"
                                                            onClick={() => handleRemoveRecipient(recipient.id)}
                                                        >
                                                            Remove
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <p>General Access</p>
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3.5">
                                            {accessType === "restricted" ? (
                                                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                                                    <Lock className="text-foreground size-4" />
                                                </div>
                                            ) : (
                                                <div className="w-9 h-9 rounded-full bg-[rgb(196,238,208)] flex items-center justify-center">
                                                    <GlobeIcon className="text-[rgb(7,39,17)] size-6" />
                                                </div>
                                            )}
                                            <div className="flex flex-col gap-2">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger className="group/trigger flex items-center gap-1.5 cursor-pointer outline-none select-none">
                                                        <p className="leading-none">
                                                            {accessType === "restricted" ? "Restricted" : "Anyone with link"}
                                                        </p>
                                                        <TriggerChevron className="ml-0 mr-0 size-3.5 text-muted group-hover/trigger:text-foreground" />
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="start" className="w-50">
                                                        <DropdownMenuRadioGroup
                                                            value={accessType}
                                                            onValueChange={(val) => {
                                                                if (val) setAccessType(val as GeneralAccessType)
                                                            }}
                                                        >
                                                            <DropdownMenuRadioItem value="restricted">Restricted</DropdownMenuRadioItem>
                                                            <DropdownMenuRadioItem value="anyone_with_link">Anyone with link</DropdownMenuRadioItem>
                                                        </DropdownMenuRadioGroup>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                                <p className="leading-none text-sm text-secondary">
                                                    {accessType === "restricted"
                                                        ? "Only people with access can open with the link"
                                                        : generalAccessDescriptions[generalAccessPermission]}
                                                </p>
                                            </div>
                                        </div>
                                        {accessType === "anyone_with_link" && (
                                            <DropdownMenu>
                                                <DropdownMenuTrigger className={cn(inputShellClasses, "group/trigger cursor-pointer w-30")}>
                                                    <span className="flex-1 text-left truncate">{generalAccessPermission}</span>
                                                    <TriggerChevron />
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="w-40">
                                                    <DropdownMenuRadioGroup
                                                        value={generalAccessPermission}
                                                        onValueChange={(val) => {
                                                            if (val) setGeneralAccessPermission(val as Permission)
                                                        }}
                                                    >
                                                        <DropdownMenuRadioItem value="Can View">Can View</DropdownMenuRadioItem>
                                                        <DropdownMenuRadioItem value="Can Edit">Can Edit</DropdownMenuRadioItem>
                                                        <DropdownMenuRadioItem value="Admin">Admin</DropdownMenuRadioItem>
                                                    </DropdownMenuRadioGroup>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </DialogBody>
                        <DialogFooter>
                            <Button className="w-fit">Confirm Access</Button>
                        </DialogFooter>
                    </DialogShell>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Share Project Dialog</PopupTitle>
                    <PopupDescription>
                        Manage project access and collaborator permissions.
                    </PopupDescription>
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}