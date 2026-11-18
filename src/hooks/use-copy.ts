import * as React from "react"

export function useCopy(timeout = 2000) {
    const [copied, setCopied] = React.useState(false)
    const [error, setError] = React.useState<Error | null>(null)
    const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

    const copy = React.useCallback(
        async (text: string) => {
            if (!navigator?.clipboard?.writeText) {
                const err = new Error("Clipboard API not available")
                setError(err)
                setCopied(false)
                return false
            }

            try {
                await navigator.clipboard.writeText(text)
                setCopied(true)
                setError(null)

                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current)
                }

                timeoutRef.current = setTimeout(() => {
                    setCopied(false)
                    timeoutRef.current = null
                }, timeout)

                return true
            } catch (err) {
                setError(err instanceof Error ? err : new Error(String(err)))
                setCopied(false)
                return false
            }
        },
        [timeout]
    )

    return { copied, copy, error }
}
