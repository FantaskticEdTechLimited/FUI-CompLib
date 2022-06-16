/**
 * To generate number whose (positive) value is smaller than 10 to have a prefix 0.
 *
 * For example, '1' will become '01'.
 */
export const FNumberGenerator = (value: number) => {
	if (value >= 0 && value < 10) return "0" + value;
	else return value;
};
