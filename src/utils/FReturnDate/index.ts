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
	const weekday = FSingleToDoubleDigit(date.getDay());
	let hour = date.getHours();
	let isPM = false;
	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		isPM = true;
	}
	const minute = FSingleToDoubleDigit(date.getMinutes());
	let finalResult = "";

	const handleWeekday = () => {
		let result = "";
		switch (weekday) {
			case "00":
				result = "Sun";
				break;
			case "01":
				result = "Mon";
				break;
			case "02":
				result = "Tue";
				break;
			case "03":
				result = "Wed";
				break;
			case "04":
				result = "Thur";
				break;
			case "05":
				result = "Fri";
				break;
			case "06":
				result = "Sat";
				break;
		}
		return result;
	};

	if (props.dateOnly) finalResult = day + "/" + month + "/" + year;
	else if (props.weekdayOnly) finalResult = handleWeekday();
	else if (props.dateWithWeekdayOnly)
		finalResult = day + "/" + month + "/" + year + " " + handleWeekday();
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
			handleWeekday() +
			" " +
			FSingleToDoubleDigit(hour) +
			":" +
			minute +
			" " +
			(isPM ? "PM" : "AM");

	return finalResult;
};
