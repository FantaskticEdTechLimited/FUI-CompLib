import { useEffect, useState } from "react";
/**
 * _Remarks: This function may be deprecated in the future._
 */
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
}; // Function Usage: `const { close, setClose } = FSideBarHandler()`
