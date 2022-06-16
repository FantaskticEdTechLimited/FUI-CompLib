import { useEffect, useState } from "react";

export const FSideBarHandler = () => {
	const [close, setClose] = useState<boolean>(false);

	useEffect(() => {
		if (close) {
			setTimeout(() => {
				setClose(false);
			}, 100);
		}
	}, [close]);

	return { close, setClose };
};  // Function Usage: `const { close, setClose } = FSideBarHandler()`


