import { useEffect, useMemo } from "react";
import { FUseStateSafe } from "../FUseStateSafe";
import { FCountTimerProps } from "./types";

/**
 * Counts the time from _0s_ (by default).
 *
 * _**Caution: It cannot count down the time**_.
 * You should use `FCountDownTimer` instead.
 */
export const FCountTimer = (props: FCountTimerProps) => {
	const countTimerProps: FCountTimerProps = useMemo(() => {
		return {
			time: 0,
			defaultStart: true,
			...props,
		};
	}, [props]);

	const [currentTime, setCurrentTime] = FUseStateSafe<number>(
		countTimerProps.time!
	);
	const [isEnable, setIsEnable] = FUseStateSafe(countTimerProps.defaultStart);
	const [intervalId, setIntervalId] = FUseStateSafe<NodeJS.Timer | null>(null);

	const enableTimerCount = () => {
		setIsEnable(true);
	};

	const disableTimerCount = () => {
		pauseTimerCount();
		setCurrentTime(countTimerProps.time!);
	};

	const pauseTimerCount = () => {
		setIsEnable(false);
		intervalId && clearInterval(intervalId);
	};

	useEffect(() => {
		if (isEnable) {
			const id = setInterval(async () => {
				await setCurrentTime((currentTime) => currentTime + 1);
			}, 1000);
			setIntervalId(id);
			return () => {
				clearInterval(id);
			};
		} else return;
	}, [isEnable, setCurrentTime, setIntervalId]);

	useEffect(() => {
		if (currentTime <= 0) {
			countTimerProps.onCallback && countTimerProps.onCallback();
		}
	}, [currentTime, countTimerProps]);

	return {
		currentTime: currentTime,
		setCurrentTime: setCurrentTime,
		enableTimerCount: enableTimerCount,
		disableTimerCount: disableTimerCount,
		pauseTimerCount: pauseTimerCount,
	};
};
