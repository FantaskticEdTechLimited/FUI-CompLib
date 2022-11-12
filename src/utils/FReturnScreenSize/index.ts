import { useLayoutEffect, useState } from "react";

/**
 * Returns current screen size, i.e. [ _width_, _height_ ].
 */
export const FReturnScreenSize = () => {
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
