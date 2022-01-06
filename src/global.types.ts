import { CSSProperties, ReactNode } from "react";

export type Nullable<T> = T | null;

export type OnClickFunction<T> = (data?: T) => void;

export interface FButtonProps {
	children?: ReactNode;
	className?: string;
	disabled?: boolean;
	label?: string;
	onClick?: OnClickFunction<void>;
	style?: CSSProperties;
	labelClassName?: string;
	labelStyle?: CSSProperties;
}
