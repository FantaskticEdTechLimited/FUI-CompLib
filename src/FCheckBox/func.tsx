import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import React from "react";
import { FUseTheme } from "..";
import { FCheckBoxProps } from "./types";

export const handleFCheckBox = (props: FCheckBoxProps) => {
	const { theme } = FUseTheme();
	switch (props.variant) {
		case "round":
			return props.checked ? (
				<>
					<path
						d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
						fill={props.fillColor ?? theme.mainThemeColor}
					/>
					<path
						d="M17.3896 8L9.3976 16L7 13.6024"
						stroke={props.iconColor ?? FColorTypes.PRIMARY_WHITE}
						strokeWidth={props.strokeWidth ?? "1.6"}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</>
			) : (
				<>
					<path
						d="M23.4 12C23.4 18.296 18.296 23.4 12 23.4C5.70395 23.4 0.6 18.296 0.6 12C0.6 5.70395 5.70395 0.6 12 0.6C18.296 0.6 23.4 5.70395 23.4 12Z"
						fill={props.fillColor ?? FColorTypes.PRIMARY_WHITE}
						stroke={props.borderColor ?? FColorTypes.PRIMARY_LIGHT}
						strokeWidth={props.strokeWidth ?? "1.2"}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M17.3896 8L9.3976 16L7 13.6024"
						stroke={props.iconColor ?? FColorTypes.PRIMARY_LIGHT}
						strokeWidth={props.strokeWidth ?? "1.6"}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</>
			);
		case "square":
			return props.checked ? (
				<>
					<path
						d="M21.3333 0H2.66667C1.19391 0 0 1.19391 0 2.66667V21.3333C0 22.8061 1.19391 24 2.66667 24H21.3333C22.8061 24 24 22.8061 24 21.3333V2.66667C24 1.19391 22.8061 0 21.3333 0Z"
						fill={
							props.fillColor ?? theme.mainThemeColor
						}
					/>
					<path
						d="M17.3896 8L9.3976 16L7 13.6024"
						stroke={props.iconColor ?? FColorTypes.PRIMARY_WHITE}
						strokeWidth={props.strokeWidth ?? "1.6"}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</>
			) : (
				<>
					<path
						d="M2.66667 0.6H21.3333C22.4747 0.6 23.4 1.52528 23.4 2.66667V21.3333C23.4 22.4747 22.4747 23.4 21.3333 23.4H2.66667C1.52528 23.4 0.6 22.4747 0.6 21.3333V2.66667C0.6 1.52528 1.52528 0.6 2.66667 0.6Z"
						fill={props.fillColor ?? FColorTypes.PRIMARY_WHITE}
						stroke={props.borderColor ?? FColorTypes.PRIMARY_LIGHT}
						strokeWidth={props.strokeWidth ?? "1.2"}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M17.3896 8L9.3976 16L7 13.6024"
						stroke={props.iconColor ?? FColorTypes.PRIMARY_LIGHT}
						strokeWidth={props.strokeWidth ?? "1.6"}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</>
			);
		default:
			return <> </>;
	}
};
