import * as React from "react"

export interface UseCopyToClipboardProps {
    timeout?: number
}

export function useCopyToClipboard({ timeout = 2000 }: UseCopyToClipboardProps = {}) {
    const [isCopied, setIsCopied] = React.useState(false)

    const copyToClipboard = React.useCallback((value: string) => {
        if (typeof window === "undefined" || !navigator.clipboard) {
            console.warn("Clipboard API not available")
            return
        }

        if (!value) return

        navigator.clipboard.writeText(value).then(() => {
            setIsCopied(true)
            setTimeout(() => {
                setIsCopied(false)
            }, timeout)
        }).catch((err) => {
            console.error("Failed to copy text: ", err)
        })
    }, [timeout])

    return { isCopied, copyToClipboard }
}
