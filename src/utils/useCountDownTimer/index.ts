import { useEffect, useMemo } from "react";
import { FUseStateSafe } from "../useStateSafe";
import { FCountDownTimerProps } from "./types";

export const FCountDownTimer = (props: FCountDownTimerProps) => {
	const countDownProps: FCountDownTimerProps = useMemo(() => {
		return {
			time: 10,
			defaultStart: true,
			...props,
		};
	}, [props]);
	const [currentTime, setCurrentTime] = FUseStateSafe<number>(
		countDownProps.time!
	);
	const [isEnable, setIsEnable] = FUseStateSafe(countDownProps.defaultStart);
	const [intervalId, setIntervalId] = FUseStateSafe<NodeJS.Timer | null>(null);

	const enableCountDown = () => {
		setIsEnable(true);
	};

	const disableCountDown = () => {
		pauseCountDown();
		setCurrentTime(countDownProps.time!);
	};

	const pauseCountDown = () => {
		setIsEnable(false);
		intervalId && clearInterval(intervalId);
	};

	useEffect(() => {
		if (isEnable) {
			const id = setInterval(async () => {
				await setCurrentTime((currentTime) => currentTime - 1);
			}, 1000);
			setIntervalId(id);
			return () => {
				clearInterval(id);
			};
		} else return;
	}, [isEnable, setCurrentTime, setIntervalId]);

	useEffect(() => {
		if (currentTime <= 0) {
			countDownProps.onCallback && countDownProps.onCallback();
		}
	}, [currentTime, countDownProps]);

	return {
		currentTime: currentTime,
		setCurrentTime: setCurrentTime,
		enableCountDown: enableCountDown,
		disableCountDown: disableCountDown,
		pauseCountDown: pauseCountDown,
	};
};
