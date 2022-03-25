export interface FScrollBarProps {
	disabled?: boolean;
	width?: number | string;
	height?: number | string;

	// thumb
	thumbBorder?: string;
	thumbBorderWidth?: string | number;
	thumbBorderColor?: string;
	thumbBorderRadius?: number | string;
	thumbFillColor?: string;

	// track hover style
	thumbHoveredBorder?: string;
	thumbHoveredBorderWidth?: string;
	thumbHoveredBorderColor?: string;
	thumbHoveredFillColor?: string;

	// track
	trackBorder?: string;
	trackBorderWidth?: string | number;
	trackBorderColor?: string;
	trackBorderRadius?: number | string;
	trackFillColor?: string;
}
