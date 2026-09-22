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
import { Button } from "@/components/ui/button/button"
import { Switch } from "@/components/ui/switch"
import { Cloud, Shield, RefreshCw } from "lucide-react"

function GithubIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
            />
        </svg>
    )
}

interface IntegrationItem {
    id: string
    name: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    connected: boolean
    account?: string
}

export function IntegrationDialogPopup({ open, onOpenChange }: PopupProps) {
    const [integrations, setIntegrations] = React.useState<IntegrationItem[]>([
        {
            id: "github",
            name: "GitHub Deployments",
            description: "Automatically deploy branches and sync schema migrations",
            icon: GithubIcon,
            connected: true,
            account: "midnight-dev/md-ui",
        },
        {
            id: "aws",
            name: "Amazon Web Services",
            description: "Cross-account IAM role for automated database backups in S3",
            icon: Cloud,
            connected: false,
        },
        {
            id: "discord",
            name: "Discord Webhooks",
            description: "Stream cluster health and failover alerts to team channels",
            icon: Shield,
            connected: true,
            account: "#infra-alerts",
        },
    ])

    const toggleConnection = (id: string) => {
        setIntegrations((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, connected: !item.connected } : item
            )
        )
    }

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="w-full max-w-lg p-6 rounded-xl surface-grain bg-card rim-light border border-white/10 shadow-2xl flex flex-col gap-5">
                        {/* Header */}
                        <div className="flex items-center justify-between pb-3 border-b border-white/6">
                            <div>
                                <h3 className="font-sf-display text-lg font-medium text-foreground">
                                    Connected Services & Integrations
                                </h3>
                                <p className="font-sf-text text-xs text-muted">
                                    Manage third-party OAuth links, webhooks, and cloud sync
                                </p>
                            </div>
                            <Button variant="ghost" className="size-8 p-0">
                                <RefreshCw className="size-3.5 text-muted hover:text-foreground" />
                            </Button>
                        </div>

                        {/* List */}
                        <div className="flex flex-col gap-3">
                            {integrations.map((item) => {
                                const Icon = item.icon
                                return (
                                    <div
                                        key={item.id}
                                        className="flex items-start justify-between p-3.5 rounded-lg bg-white/[0.02] border border-white/6 gap-3"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                                                <Icon className="size-5 text-foreground" />
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-sf-display text-sm font-medium text-foreground">
                                                        {item.name}
                                                    </span>
                                                    {item.connected ? (
                                                        <span className="inline-flex items-center gap-1 text-[11px] font-sf-text text-success bg-success/15 px-2 py-0.5 rounded-full border border-success/30">
                                                            Connected
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-1 text-[11px] font-sf-text text-muted bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                                                            Disconnected
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="font-sf-text text-xs text-muted leading-snug">
                                                    {item.description}
                                                </p>
                                                {item.account && (
                                                    <span className="font-mono text-[11px] text-white/50 pt-0.5">
                                                        Linked: {item.account}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <Switch
                                            checked={item.connected}
                                            onCheckedChange={() => toggleConnection(item.id)}
                                            className="shrink-0 mt-1"
                                        />
                                    </div>
                                )
                            })}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-2 border-t border-white/6 text-xs text-muted">
                            <span>OAuth tokens encrypted at rest (AES-256)</span>
                            <Button variant="outline" className="text-xs h-8">
                                Add Custom Webhook
                            </Button>
                        </div>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Integration Dialog</PopupTitle>
                    <PopupDescription>
                        A provider connectivity hub for managing cloud authentication, automated webhooks, OAuth synchronization, and live connection status switches.
                    </PopupDescription>

                    <PopupCharacteristics
                        items={[
                            {
                                title: "Real-time State Toggles",
                                description: "Switch components trigger instant optimistic updates with visual badge changes.",
                            },
                            {
                                title: "Badge System",
                                description: "Status tags provide high-contrast green/muted visual indicators for connectivity health.",
                            },
                            {
                                title: "Secure Credential Architecture",
                                description: "Clean presentation of linked identities and repository scopes.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
