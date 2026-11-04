"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const grainCache = new Map<string, string>()

function getStoneGrainPng(size = 512, intensity = 1.0): string {
    if (typeof document === "undefined") return ""
    const key = `${size}-${intensity}`
    let cached = grainCache.get(key)
    if (cached) return cached

    const canvas = document.createElement("canvas")
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext("2d")
    if (!ctx) return ""

    const imgData = ctx.createImageData(size, size)
    const data = imgData.data

    const hash = (x: number, y: number) => {
        let h = (x * 374761393 + y * 668265263) ^ 0x5bf03635
        h = Math.imul(h ^ (h >>> 13), 1274126177)
        return ((h ^ (h >>> 16)) >>> 0) / 4294967296
    }

    const gridSize = 64
    const grid = new Float32Array(gridSize * gridSize)
    for (let i = 0; i < grid.length; i++) {
        let s = (i * 1973 + 9277) ^ 0x45d9f3b
        s = Math.imul(s ^ (s >>> 15), 0x27d4eb2d)
        grid[i] = ((s ^ (s >>> 15)) >>> 0) / 4294967296
    }

    const sampleGrid = (x: number, y: number) => {
        const cellX = (x / size) * gridSize
        const cellY = (y / size) * gridSize
        const i0 = Math.floor(cellX) % gridSize
        const j0 = Math.floor(cellY) % gridSize
        const i1 = (i0 + 1) % gridSize
        const j1 = (j0 + 1) % gridSize
        const fx = cellX - Math.floor(cellX)
        const fy = cellY - Math.floor(cellY)

        const top = grid[j0 * gridSize + i0] * (1 - fx) + grid[j0 * gridSize + i1] * fx
        const bot = grid[j1 * gridSize + i0] * (1 - fx) + grid[j1 * gridSize + i1] * fx
        return top * (1 - fy) + bot * fy
    }

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const idx = (y * size + x) * 4

            // 1. Medium crystalline facet structure
            const medium = sampleGrid(x, y) - 0.5

            // 2. Ultra-sharp 1px micro-grit
            const fineGrit = hash(x, y) - 0.5

            // 3. Crisp mineral specks & micro-pits (pinpoint sharp crystals)
            const r = hash(x * 7 + 13, y * 11 + 37)
            let mineral = 0
            if (r > 0.93) {
                mineral = (r - 0.93) * 6.0 // crisp light quartz crystal fleck
            } else if (r < 0.07) {
                mineral = (r - 0.07) * 6.0 // crisp dark crevice pit
            }

            // Balanced overlay value centered strictly around 128 (neutral point)
            const combined = (medium * 0.35 + fineGrit * 0.45 + mineral * 0.55) * intensity
            const val = Math.max(0, Math.min(255, Math.round(128 + combined * 150)))

            data[idx] = val
            data[idx + 1] = val
            data[idx + 2] = val
            data[idx + 3] = 255
        }
    }

    ctx.putImageData(imgData, 0, 0)
    cached = canvas.toDataURL("image/png")
    grainCache.set(key, cached)
    return cached
}

export interface GrainProps extends React.ComponentProps<"div"> {
    opacity?: number
    blendMode?: React.CSSProperties["mixBlendMode"]
    tileSize?: number
    intensity?: number
}

export function Grain({
    className,
    opacity = 0.35,
    blendMode = "overlay",
    tileSize = 512,
    intensity = 1.0,
    style,
    ...props
}: GrainProps) {
    const [grainUrl, setGrainUrl] = React.useState<string>(() => {
        if (typeof window !== "undefined") {
            return getStoneGrainPng(tileSize, intensity)
        }
        return ""
    })

    React.useEffect(() => {
        const url = getStoneGrainPng(tileSize, intensity)
        if (url !== grainUrl) {
            setGrainUrl(url)
        }
    }, [tileSize, intensity, grainUrl])

    return (
        <div
            data-slot="grain-overlay"
            aria-hidden="true"
            className={cn(
                "pointer-events-none absolute inset-0 select-none rounded-[inherit]",
                className
            )}
            style={{
                backgroundImage: grainUrl ? `url("${grainUrl}")` : undefined,
                backgroundSize: `${tileSize}px ${tileSize}px`,
                backgroundRepeat: "repeat",
                mixBlendMode: blendMode,
                opacity,
                ...style,
            }}
            {...props}
        />
    )
}

export const GrainOverlay = Grain
