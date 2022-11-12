export interface FReturnDateProps {
	/** Input date data. */
	data: Date;
	/** If `true`, it **only** returns _date_ (_without weekday_). */
	dateOnly?: boolean;
	/** If `true`, it **only** returns _weekday_. */
	weekdayOnly?: boolean;
	/** If `true`, it **only** returns _date_ and _weekday_. */
	dateWithWeekdayOnly?: boolean;
	/** If `true`, it **only** returns _time_. */
	timeOnly?: boolean;
}
