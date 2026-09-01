import * as React from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { ChevronDownIcon } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function hexToRgb(hex: string) {
    const cleanHex = hex.replace("#", "");
    const fullHex = cleanHex.length === 3 ? cleanHex.split("").map((c) => c + c).join("") : cleanHex;
    const [r, g, b] = fullHex.match(/.{1,2}/g)?.map((x) => parseInt(x, 16)) || [0, 0, 0];
    return { r: r || 0, g: g || 0, b: b || 0 };
}

function rgbToHex(r: number, g: number, b: number) {
    const clamp = (n: number) => Math.max(0, Math.min(255, isNaN(n) ? 0 : n));
    const toHex = (n: number) => clamp(n).toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export interface ColourPickerProps extends Omit<React.ComponentProps<"div">, "onChange"> {
    color: string;
    onChange: (color: string) => void;
}

function ColourPicker({ color, onChange, className, ...props }: ColourPickerProps) {
    const [format, setFormat] = React.useState<"HEX" | "RGB">("HEX");

    const rgb = hexToRgb(color);

    const handleChannelChange = (channel: "r" | "g" | "b", valStr: string) => {
        const parsed = parseInt(valStr, 10);
        const clamped = isNaN(parsed) ? 0 : Math.max(0, Math.min(255, parsed));
        const nextRgb = { ...rgb, [channel]: clamped };
        onChange(rgbToHex(nextRgb.r, nextRgb.g, nextRgb.b));
    };

    return (
        <div className={cn("flex flex-col items-center gap-3 w-64 max-w-64", className)} {...props}>
            <HexColorPicker color={color} onChange={onChange} className="w-full! h-48! rounded-sm" />

            <div className="flex flex-col items-center gap-2 w-full">
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex h-9 w-full items-center justify-between gap-1.5 rounded bg-white/5 px-2.5 text-xs font-semibold uppercase text-foreground ring-1 ring-inset ring-border hover:ring-border-hover focus-visible:ring-2 focus-visible:ring-border-active cursor-pointer outline-none select-none transition-all duration-200">
                        <span>{format}</span>
                        <ChevronDownIcon className="size-3 text-muted-foreground shrink-0" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-(--anchor-width) min-w-0">
                        <DropdownMenuItem onClick={() => setFormat("HEX")}>
                            HEX
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setFormat("RGB")}>
                            RGB
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {format === "HEX" ? (
                    <HexColorInput
                        color={color}
                        onChange={onChange}
                        prefixed
                        className="h-9 w-full min-w-0 text-sm uppercase text-center rounded ring-1 ring-inset ring-border hover:ring-border-hover focus-visible:ring-2 focus-visible:ring-border-active bg-white/5 px-2 outline-none transition-all duration-200 placeholder:text-muted disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                    />
                ) : (
                    <div className="flex items-center gap-1.5 w-full min-w-0">
                        <Input
                            type="number"
                            min={0}
                            max={255}
                            value={rgb.r}
                            onChange={(e) => handleChannelChange("r", e.target.value)}
                            className="text-center px-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            placeholder="R"
                        />
                        <Input
                            type="number"
                            min={0}
                            max={255}
                            value={rgb.g}
                            onChange={(e) => handleChannelChange("g", e.target.value)}
                            className="text-center px-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            placeholder="G"
                        />
                        <Input
                            type="number"
                            min={0}
                            max={255}
                            value={rgb.b}
                            onChange={(e) => handleChannelChange("b", e.target.value)}
                            className="text-center px-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            placeholder="B"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export { ColourPicker };