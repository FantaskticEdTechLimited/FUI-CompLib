/**
 * Converts a single digit (value from 0 to 9) to double digits,
 * i.e. add a _`0`_ in front of it.
 *
 * For example, _`1`_ will be converted to _`01`_.
 */
export const FSingleToDoubleDigit = (value: number) => {
	if (value >= 0 && value < 10) return "0" + value;
	else return value;
};
