import { cva } from "class-variance-authority"

export const popupContentVariants = cva(
  [
    "relative overflow-hidden overflow-y-auto rounded border border-border outline-hidden bg-popup/80 text-foreground backdrop-blur-xl p-1",
    "max-h-(--available-height) min-w-(--anchor-width) max-w-(--available-width)",
    "shadow-xl transition-all duration-250 ease-[cubic-bezier(0.25,1,0.35,1)]",
    "data-[align=start]:origin-top-left data-[align=end]:origin-top-right data-[align=center]:origin-top data-[side=top]:data-[align=start]:origin-bottom-left data-[side=top]:data-[align=end]:origin-bottom-right data-[side=top]:data-[align=center]:origin-bottom",
    "[&:is([data-ending-style],[data-closed])]:pointer-events-none",
    "[&:is([data-starting-style],[data-ending-style])]:opacity-0",
    "[&:is([data-starting-style],[data-ending-style])]:scale-95",
    "[&:is([data-starting-style],[data-ending-style])[data-side=bottom]]:-translate-y-2",
    "[&:is([data-starting-style],[data-ending-style])[data-side=top]]:translate-y-2",
    "[&:is([data-starting-style],[data-ending-style])[data-side=left]]:translate-x-2",
    "[&:is([data-starting-style],[data-ending-style])[data-side=right]]:-translate-x-2",
  ].join(" ")
)

export const popupItemVariants = cva(
  [
    "relative flex w-full cursor-pointer items-center gap-2 rounded-xs px-2 py-1.5 text-sm font-medium text-muted outline-hidden select-none transition-colors duration-150",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg]:text-muted",
    "data-[highlighted]:bg-white/5 data-[highlighted]:text-foreground",
    "data-[selected]:bg-accent/15 data-[selected]:text-accent-active data-[selected]:data-[highlighted]:bg-accent/20",
    "data-[selected]:[&_svg]:text-accent-active",
    "data-[variant=destructive]:text-destructive data-[variant=destructive]:data-[highlighted]:bg-destructive/10 data-[variant=destructive]:data-[highlighted]:text-destructive",
    "data-[variant=destructive]:[&_svg]:text-destructive",
    "data-disabled:pointer-events-none data-disabled:opacity-50",
  ].join(" ")
)
