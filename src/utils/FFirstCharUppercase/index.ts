/**
 * Converts **only** the _first_ character in a string to uppercase.
 */
export const FFirstCharUppercase = (inputString: string) => {
	return (
		inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
	);
};
