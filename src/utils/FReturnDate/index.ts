import { FSingleToDoubleDigit } from "../FSingleToDoubleDigit";
import { FReturnDateProps } from "./types";

/**
 * Returns a complete date format with time (in _12-hour_).
 *
 * Output format (by default):
 *
 * _`day`_/_`month`_/_`year`_ _`weekday`_ _`hour`_:_`minute`_ _`AM`|`PM`_
 */
export const FReturnDate = (props: FReturnDateProps) => {
	const date = props.data;
	const day = FSingleToDoubleDigit(date.getDate());
	const month = FSingleToDoubleDigit(date.getMonth() + 1);
	const year = FSingleToDoubleDigit(date.getFullYear());
	const weekday = date.toDateString().slice(0, 3);
	let hour = date.getHours();
	let isPM = false;
	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		isPM = true;
	}
	const minute = FSingleToDoubleDigit(date.getMinutes());
	let finalResult = "";

	if (props.dateOnly) finalResult = day + "/" + month + "/" + year;
	else if (props.weekdayOnly) finalResult = weekday;
	else if (props.dateWithWeekdayOnly)
		finalResult = day + "/" + month + "/" + year + " " + weekday;
	else if (props.timeOnly)
		finalResult =
			FSingleToDoubleDigit(hour) + ":" + minute + " " + (isPM ? "PM" : "AM");
	else
		finalResult =
			day +
			"/" +
			month +
			"/" +
			year +
			" " +
			weekday +
			" " +
			FSingleToDoubleDigit(hour) +
			":" +
			minute +
			" " +
			(isPM ? "PM" : "AM");

	return finalResult;
};
