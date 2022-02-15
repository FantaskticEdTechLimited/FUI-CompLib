import React from "react";
import { FText } from "..";
import * as styles from "./styles";
import { noDataIcon } from "./svg";
import { FNoDataProps } from "./types";

export const FNoData = (props: FNoDataProps) => {
	return (
		<div className={styles.emptyDataWarningDiv}>
			{noDataIcon}
			<FText children={props.description ?? "No data"} />
		</div>
	);
};
