import { FOnClickFunction } from "../../global.types";

export interface FCountDownTimerProps {
	time?: number;
	defaultStart?: boolean;
	onCallback?: FOnClickFunction;
}
