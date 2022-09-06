import { FOnClickFunction } from "../../global.types";

export interface FCountTimerProps {
	time?: number;
	defaultStart?: boolean;
	onCallback?: FOnClickFunction;
}
