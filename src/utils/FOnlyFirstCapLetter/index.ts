/**
 * To return a string with the first character is Capital letter.
 *
 * For example, "it is a dog" will become "It is a dog".
 */
export const FOnlyFirstCapLetter = (inputString: string) => {
	return (
		inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
	);
};
