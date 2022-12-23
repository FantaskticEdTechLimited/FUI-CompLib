import React from "react";
import { PropsWithCustomStyle } from "../../global.types";
import { FJoinClassNames } from "../../utils/FJoinClassNames";
import { styles } from "./styles";

/** A default horizontal indicator will be shown on top or bottom of the hovered item. */
export const FDnDIndicator = (props: PropsWithCustomStyle) => {
	const { style, className } = props;
	return (
		<div
			style={style}
			className={FJoinClassNames([styles.indicatorContainer, className])}
		/>
	);
};
