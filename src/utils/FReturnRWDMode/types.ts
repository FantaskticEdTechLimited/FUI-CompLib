export interface FRWDSizeProps {
	/** Width of _Mobile_ device.
	 * The device type will set as _`MOBILE`_ when the screen width is **below** this width. */
	mobileWidth?: number;
	/** Width of _PC_ device.
	 * The device type will set as _`PC`_ when the screen width is **over** this width. */
	pcWidth?: number;
}
