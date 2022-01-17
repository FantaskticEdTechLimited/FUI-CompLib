import React, { useEffect, useRef, useState } from "react";
import * as styles from "./styles";
import { ClearIcon } from "./svg/ClearIcon";
import { SearchIcon } from "./svg/SearchIcon";
import { FSearchBarProps } from "./types";

// **** temp, may need change ****

export const FSearchBar = (props: FSearchBarProps) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isTriggered && inputRef.current) inputRef.current.focus();
	}, [isTriggered]);

	return (
		<div
			style={props.containerStyle}
			className={
				props.containerClassName + " " + styles.FSearchBarContainer(isTriggered)
			}
			onClick={() => setIsTriggered(true)}
			onBlur={() => setIsTriggered(false)}
		>
			<SearchIcon
				isTriggered={isTriggered}
				value={props.value}
				className={props.searchIconClassName}
				style={props.searchIconStyle}
			/>
			<input
				style={props.inputAreaStyle}
				className={
					props.inputAreaClassName + " " + styles.FSearchBarInputAreaDiv
				}
				type="text"
				ref={inputRef}
				value={props.value!}
				placeholder={props.placeholder}
				onChange={(event: any) => props.renderValue(event.target.value)}
			/>
			{props.value !== "" && (
				<ClearIcon
					className={props.clearIconClassName}
					style={props.clearIconStyle}
					onClick={() => props.renderValue("")}
				/>
			)}
		</div>
	);
};
