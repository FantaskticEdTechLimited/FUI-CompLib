import React from "react";
import { FJoinClassNames, FText } from "..";
import { styles } from "./styles";
import { noDataIcon } from "./svg";
import { FNoDataProps } from "./types";

export const FNoData = (props: FNoDataProps) => {
	const {
		style,
		className,
		icon = noDataIcon,
		description = "No data",
	} = props;

	return (
		<div
			style={style}
			className={FJoinClassNames([styles.noDataContainer, className])}
		>
			{icon}
			<FText>{description}</FText>
		</div>
	);
};
