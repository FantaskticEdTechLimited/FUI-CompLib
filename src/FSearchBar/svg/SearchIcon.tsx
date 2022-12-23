import React, { SVGProps } from "react";
import { FSearchBarSearchIconProps } from "./types";
import { styles } from "./styles";
import { FJoinClassNames, FReturnColor } from "../..";

export const SearchIcon = (props: FSearchBarSearchIconProps) => {
	const { state, value, style, className, pathProps } = props;
	const mainThemeColor = FReturnColor({ color: "Main" });
	const greyColor = FReturnColor({ color: "Grey" });
	const blackColor = FReturnColor({ color: "Black" });
	const defaultPathProps: SVGProps<SVGPathElement> = {
		stroke:
			state?.isHover || state?.isTriggered || state?.isFilled
				? mainThemeColor
				: value && value.length > 0
				? blackColor
				: greyColor,
		strokeWidth: "1.2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		...pathProps,
	};

	return (
		<svg
			style={style && style(state!)}
			className={FJoinClassNames([
				styles.searchIconDiv,
				className && className(state!),
			])}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
				{...defaultPathProps}
			/>
			<path d="M15.75 15.75L12.4875 12.4875" {...defaultPathProps} />
		</svg>
	);
};
