import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import React from "react";
import { FText } from "../..";
import * as styles from "./styles";
import { MoreActionItemProps } from "./types";

export const MoreActionItem = (props: MoreActionItemProps) => {
	return (
		<div className={styles.MoreActionItemnDiv(props)} onClick={props.onClick}>
			<FText
				font={props.font ?? FFontTypes.Text()}
				color={props.fontColor ?? FColorTypes.PRIMARY_BLACK}
			>
				{props.name}
			</FText>
			{props.icon}
		</div>
	);
};