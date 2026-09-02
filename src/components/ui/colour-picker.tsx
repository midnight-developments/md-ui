import * as React from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupText,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { inputVariants } from "@/components/ui/input.variants";

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

            <div className="flex items-center gap-2 w-full">
                <Select value={format} onValueChange={(val) => setFormat(val as "HEX" | "RGB")}>
                    <SelectTrigger className="w-17.5 ">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent align="start" className="w-25">
                        <SelectItem value="HEX">HEX</SelectItem>
                        <SelectItem value="RGB">RGB</SelectItem>
                    </SelectContent>
                </Select>

                <div className="flex-1 min-w-0">
                    {format === "HEX" ? (
                        <HexColorInput
                            color={color}
                            onChange={onChange}
                            prefixed
                            className={cn(
                                inputVariants(),
                                "uppercase text-center px-2"
                            )}
                        />
                    ) : (
                        <InputGroup className="w-full h-9">
                            {(["r", "g", "b"] as const).map((channel, index) => (
                                <React.Fragment key={channel}>
                                    {index > 0 && <div className="h-4 w-px bg-border/40 shrink-0" />}
                                    <InputGroupAddon align="inline-start" className="order-0 pl-1.5 pr-0">
                                        <InputGroupText className="text-[10px] font-semibold uppercase text-muted">
                                            {channel}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <InputGroupInput
                                        type="number"
                                        min={0}
                                        max={255}
                                        value={rgb[channel]}
                                        onChange={(e) => handleChannelChange(channel, e.target.value)}
                                        className="text-center px-0.5 text-xs min-w-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                </React.Fragment>
                            ))}
                        </InputGroup>
                    )}
                </div>
            </div>
        </div>
    );
}

export { ColourPicker };