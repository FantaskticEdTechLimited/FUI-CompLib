/**
 * Checks the input date is _today_ or not.
 */
export const FCheckIsToday = (date: Date) => {
	const endDateDay = date.getDate();
	const endDateMonth = date.getMonth() + 1;
	const endDateYear = date.getFullYear();
	const todayDay = new Date().getDate();
	const todayMonth = new Date().getMonth() + 1;
	const todayYear = new Date().getFullYear();

	if (
		endDateDay === todayDay &&
		endDateMonth === todayMonth &&
		endDateYear === todayYear
	)
		return true;
	else return false;
};
