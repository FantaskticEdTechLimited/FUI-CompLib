import React from "react";
import { FText } from "..";
import { styles } from "./styles";
import { noDataIcon } from "./svg";
import { FNoDataProps } from "./types";

export const FNoData = (props: FNoDataProps) => {
	return (
		<div
			style={props.style}
			className={styles.FNoData_Container + " " + props.className}
		>
			{props.icon ?? noDataIcon}
			<FText children={props.description ?? "No data"} />
		</div>
	);
};
