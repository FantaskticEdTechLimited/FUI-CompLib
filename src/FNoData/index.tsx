import React from "react";
import { FText } from "..";
import * as styles from "./style";
import { noDataIcon } from "./svg";
import { FNoDataProps } from "./type";

export const FNoData = (props: FNoDataProps) => {
	return (
		<div className={styles.emptyDataWarningDiv}>
			{noDataIcon}
			<FText children={props.description ?? "No data"} />
		</div>
	);
};
