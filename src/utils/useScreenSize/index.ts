import { useLayoutEffect, useState } from "react";

/**
 * Return current screen size (width, height) for RWD purpose.
 */
export const FUseScreenSize = () => {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
};
