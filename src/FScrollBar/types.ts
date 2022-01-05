import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";

export interface FScrollBarProps {
	visible: boolean;
	width?: number | string;
	height?: number | string;
	thumbBorder?: string;
	thumbHoveredBorder?: string;
	thumbBorderRadius?: number | string;
	thumbFillColor?: FColorTypes;
	thumbHoveredFillColor?: FColorTypes;
	trackBorder?: string;
	trackBorderRadius?: number | string;
	trackFillColor?: FColorTypes;
}
