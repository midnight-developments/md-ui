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
import { Search, Terminal, Plus, FileText, Settings, User, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface CommandItem {
    id: string
    title: string
    category: string
    shortcut?: string
    icon: React.ComponentType<{ className?: string }>
}

const COMMANDS: CommandItem[] = [
    { id: "new-db", title: "Create new database cluster", category: "Actions", shortcut: "⌘N", icon: Plus },
    { id: "run-query", title: "Open SQL query editor", category: "Actions", shortcut: "⌘E", icon: Terminal },
    { id: "backup", title: "Trigger point-in-time backup", category: "Actions", shortcut: "⇧⌘B", icon: Sparkles },
    { id: "docs", title: "Search API documentation", category: "Navigation", shortcut: "⌘D", icon: FileText },
    { id: "profile", title: "Manage organization & billing", category: "Navigation", shortcut: "⌘P", icon: User },
    { id: "settings", title: "Security & API keys", category: "Settings", shortcut: "⌘,", icon: Settings },
]

export function CommandMenuPopup({ open, onOpenChange }: PopupProps) {
    const [search, setSearch] = React.useState("")
    const [selectedId, setSelectedId] = React.useState<string>("new-db")
    const [recentAction, setRecentAction] = React.useState<string | null>(null)

    const filtered = COMMANDS.filter((cmd) =>
        cmd.title.toLowerCase().includes(search.toLowerCase()) ||
        cmd.category.toLowerCase().includes(search.toLowerCase())
    )

    const handleSelect = (cmd: CommandItem) => {
        setSelectedId(cmd.id)
        setRecentAction(`Executed: ${cmd.title}`)
        setTimeout(() => setRecentAction(null), 2500)
    }

    return (
        <Popup open={open} onOpenChange={onOpenChange}>
            <PopupContent>
                <PopupPreview>
                    <div className="w-full max-w-lg rounded-xl surface-grain bg-card rim-light border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                        {/* Search Input Bar */}
                        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/8 bg-white/[0.02]">
                            <Search className="size-4 text-muted shrink-0" />
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Type a command or search..."
                                className="w-full bg-transparent text-foreground placeholder:text-muted/70 text-base font-sf-text outline-none"
                                autoFocus
                            />
                            <kbd className="text-[11px] font-mono text-muted bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">
                                ESC
                            </kbd>
                        </div>

                        <div className="max-h-[320px] p-2 flex flex-col gap-1">
                            {filtered.length === 0 ? (
                                <div className="p-8 text-center text-sm text-muted font-sf-text">
                                    No commands found matching "{search}"
                                </div>
                            ) : (
                                filtered.map((cmd) => {
                                    const Icon = cmd.icon
                                    const isSelected = selectedId === cmd.id
                                    return (
                                        <button
                                            key={cmd.id}
                                            type="button"
                                            onClick={() => handleSelect(cmd)}
                                            className={cn(
                                                "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all text-sm font-sf-text cursor-pointer border",
                                                isSelected
                                                    ? "bg-accent/15 text-foreground border-accent/30"
                                                    : "hover:bg-white/5 text-muted/90 hover:text-foreground border-transparent"
                                            )}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Icon className={`size-4 ${isSelected ? "text-accent" : "text-muted"}`} />
                                                <span className="font-medium">{cmd.title}</span>
                                            </div>
                                            {cmd.shortcut && (
                                                <kbd className="text-xs font-mono text-muted/80 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                                                    {cmd.shortcut}
                                                </kbd>
                                            )}
                                        </button>
                                    )
                                })
                            )}
                        </div>

                        {/* Palette Footer */}
                        <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.015] border-t border-white/6 text-xs text-muted">
                            <div className="flex items-center gap-2">
                                <span>Navigation:</span>
                                <span className="text-white/60 font-mono">↑↓</span>
                                <span>Select:</span>
                                <span className="text-white/60 font-mono">↵</span>
                            </div>
                            {recentAction && (
                                <span className="text-accent font-medium">{recentAction}</span>
                            )}
                        </div>
                    </div>
                </PopupPreview>

                <PopupDetails>
                    <PopupTitle>Command K Menu</PopupTitle>
                    <PopupDescription>
                        A Spotlight-style command palette interface engineered for rapid keyboard-first navigation, fuzzy action filtering, and keyboard shortcut invocation.
                    </PopupDescription>

                    <PopupCharacteristics
                        items={[
                            {
                                title: "Instant Filtering",
                                description: "Real-time filtering across titles, categories, and tags with smooth transition states.",
                            },
                            {
                                title: "Keyboard Accelerators",
                                description: "Clear shortcut visual indicators (⌘N, ⌘E) for power users.",
                            },
                            {
                                title: "Dark Glass Surface",
                                description: "Surface grain, subtle border contrast, and accent highlights reflecting selected items.",
                            },
                        ]}
                    />
                </PopupDetails>
            </PopupContent>
        </Popup>
    )
}
