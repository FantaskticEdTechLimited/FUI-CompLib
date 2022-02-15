import React from "react";
import { FHeaderButtonProps } from "./types";
import * as styles from "./styles";
import { handleFHeaderButton } from "./func";
import { FUseTheme } from "..";

export const FHeaderButton = (props: FHeaderButtonProps) => {
	const { theme } = FUseTheme();

	return (
		<div
			style={props.containerStyle}
			className={
				props.containerClassName +
				" " +
				styles.FHeaderButtonContainer(props, theme)
			}
			onClick={() =>
				props.disabled ? undefined : props.onClick && props.onClick()
			}
		>
			{props.children ?? handleFHeaderButton(props)}
		</div>
	);
};
