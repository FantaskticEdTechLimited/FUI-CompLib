export interface FScrollBarStyleProps {
	/** If `true`, the scroll bar style is **NOT** allowed to use. */
	disabled?: boolean;
	/** Width of the scroll bar. */
	width?: number | string;
	/** Height of the scroll bar. */
	height?: number | string;
	/** Border style of the thumb part. */
	thumbBorder?: string;
	/** Border width of the thumb part. */
	thumbBorderWidth?: string | number;
	/** Border color of the thumb part. */
	thumbBorderColor?: string;
	/** Border radius of the thumb part. */
	thumbBorderRadius?: number | string;
	/** Background color of the thumb part. */
	thumbFillColor?: string;
	/** Border style of the thumb part when the scroll bar is hovered. */
	thumbHoveredBorder?: string;
	/** Border width of the thumb part when the scroll bar is hovered. */
	thumbHoveredBorderWidth?: string;
	/** Border color of the thumb part when the scroll bar is hovered. */
	thumbHoveredBorderColor?: string;
	/** Background color of the thumb part when the scroll bar is hovered. */
	thumbHoveredFillColor?: string;
	/** Border style of the track part. */
	trackBorder?: string;
	/** Border width of the track part. */
	trackBorderWidth?: string | number;
	/** Border color of the track part. */
	trackBorderColor?: string;
	/** Border radius of the track part. */
	trackBorderRadius?: number | string;
	/** Background color of the track part. */
	trackFillColor?: string;
}
