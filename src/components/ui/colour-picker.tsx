import * as React from "react";
import { HexColorPicker } from "react-colorful";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupText,
} from "@/components/ui/input-group";
import { FieldLabel } from "@/components/ui/field";
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

const DEFAULT_SWATCHES = [
    "#000000",
    "#ffffff",
    "#f43f5e",
    "#f97316",
    "#eab308",
    "#22c55e",
    "#06b6d4",
    "#3b82f6",
    "#6366f1",
    "#a855f7",
    "#ec4899",
    "#7869e6",
];

export interface ColourPickerProps extends Omit<React.ComponentProps<"div">, "onChange"> {
    color: string;
    onChange: (color: string) => void;
    swatches?: string[];
}

function ColourPicker({
    color,
    onChange,
    swatches = DEFAULT_SWATCHES,
    className,
    ...props
}: ColourPickerProps) {
    const rgb = hexToRgb(color);
    const [hexValue, setHexValue] = React.useState(() => color.replace("#", "").toUpperCase());

    React.useEffect(() => {
        setHexValue(color.replace("#", "").toUpperCase());
    }, [color]);

    const handleChannelChange = (channel: "r" | "g" | "b", valStr: string) => {
        const parsed = parseInt(valStr, 10);
        const clamped = isNaN(parsed) ? 0 : Math.max(0, Math.min(255, parsed));
        const nextRgb = { ...rgb, [channel]: clamped };
        onChange(rgbToHex(nextRgb.r, nextRgb.g, nextRgb.b));
    };

    const handleHexChange = (valStr: string) => {
        const cleaned = valStr.replace(/[^0-9A-Fa-f]/g, "").slice(0, 6).toUpperCase();
        setHexValue(cleaned);
        if (cleaned.length === 3 || cleaned.length === 6) {
            onChange(`#${cleaned}`);
        }
    };

    return (
        <div className={cn("flex flex-col gap-3 w-full", className)} {...props}>
            <div className="flex flex-row items-center gap-2 w-full">
                <HexColorPicker
                    color={color}
                    onChange={onChange}
                    className="w-64! h-42! shrink-0 "
                />

                <div className="flex flex-col gap-2 flex-1 min-w-0">
                    {(["r", "g", "b"] as const).map((channel) => (
                        <InputGroup key={channel} className="h-9 gap-0 flex items-center justify-between overflow-hidden ">
                            <InputGroupAddon
                                align="inline-start"
                                className="order-0 p-0 shrink-0 flex items-center"
                            >
                                <InputGroupText className="text-sm font-semibold uppercase text-muted leading-none">
                                    {channel}
                                </InputGroupText>
                            </InputGroupAddon>
                            <InputGroupInput
                                type="number"
                                min={0}
                                max={255}
                                value={rgb[channel]}
                                onChange={(e) => handleChannelChange(channel, e.target.value)}
                                className="flex-1 h-full  text-right text-sm font-medium leading-none px-0 py-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
                            />
                        </InputGroup>
                    ))}

                    <InputGroup className="h-9 gap-0 flex items-center justify-between overflow-hidden">
                        <InputGroupAddon
                            align="inline-start"
                            className="order-0 p-0 shrink-0 flex items-center"
                        >
                            <InputGroupText className="text-sm font-semibold uppercase text-muted leading-none">
                                HEX
                            </InputGroupText>
                        </InputGroupAddon>
                        <InputGroupInput
                            type="text"
                            maxLength={6}
                            value={hexValue}
                            onChange={(e) => handleHexChange(e.target.value)}
                            className="flex-1 h-full text-right text-sm font-medium uppercase leading-none px-0 py-0"
                        />
                    </InputGroup>
                </div>
            </div>

            {swatches.length > 0 && (
                <div className="flex flex-col gap-2.5 w-full pt-1">
                    <FieldLabel>Colour Presets</FieldLabel>
                    <div className="flex w-full items-center gap-1.5">
                        {swatches.map((s) => {
                            const isSelected = color.toLowerCase() === s.toLowerCase();
                            return (
                                <button
                                    key={s}
                                    type="button"
                                    onClick={() => onChange(s)}
                                    className={cn(
                                        "flex-1 h-7 rounded-xs ring-1 ring-border cursor-pointer transition-all duration-150 hover:-translate-y-0.75",
                                        isSelected && "shadow-sm"
                                    )}
                                    style={{ backgroundColor: s }}
                                    title={s}
                                    aria-label={`Select swatch ${s}`}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export { ColourPicker };