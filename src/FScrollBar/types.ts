import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";

export interface FScrollBarProps {
	visible: boolean;
	width?: number | string;
	height?: number | string;

	// thumb
	thumbBorder?: string;
	thumbBorderWidth?: string | number;
	thumbBorderColor?: FColorTypes | string;
	thumbBorderRadius?: number | string;
	thumbFillColor?: FColorTypes | string;

	// track hover style
	thumbHoveredBorder?: string;
	thumbHoveredBorderWidth?: string;
	thumbHoveredBorderColor?: string;
	thumbHoveredFillColor?: FColorTypes | string;

	// track
	trackBorder?: string;
	trackBorderWidth?: string | number;
	trackBorderColor?: FColorTypes | string;
	trackBorderRadius?: number | string;
	trackFillColor?: FColorTypes | string;
}
