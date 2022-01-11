import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";

export interface FScrollBarProps {
	visible: boolean;
	width?: number | string;
	height?: number | string;
	thumbBorder?: string;
	thumbHoveredBorder?: string;
	thumbBorderRadius?: number | string;
	thumbFillColor?: FColorTypes | string;
	thumbHoveredFillColor?: FColorTypes | string;
	trackBorder?: string;
	trackBorderRadius?: number | string;
	trackFillColor?: FColorTypes | string;
}
