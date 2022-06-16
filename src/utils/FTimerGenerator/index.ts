/**
 * To generate a timer, i.e. 00:00:00 (hr:min:sec) or 00:00 (min:sec).
 */
export const FTimerGenerator = (time: number) => {
	let hour, min, sec, temp;

	if (Math.floor(time / 3600) > 0 && Math.floor(time / 3600) < 10)
		hour = "0" + Math.floor(time / 3600);
	else hour = Math.floor(time / 3600);
	if (Math.floor(time / 60) > 0 && Math.floor(time / 60) < 10)
		min = "0" + Math.floor(time / 60);
	else min = Math.floor(time / 60);
	if (time >= 0 && time < 10) sec = "0" + time;
	else if (Math.floor(time / 60) > 0) {
		temp = time % (60 * Math.floor(time / 60));
		if (temp > 0 && temp < 10) sec = "0" + temp;
		else sec = temp;
	} else sec = time;

	if (hour > 0) return `${hour}:${min}:${sec}`;
	else return `${min}:${sec}`;
};
