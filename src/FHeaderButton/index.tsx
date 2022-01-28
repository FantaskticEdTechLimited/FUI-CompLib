import React from "react";
import { FHeaderButtonProps } from "./types";
import * as styles from "./styles";
import { handleFHeaderButton } from "./func";

export const FHeaderButton = (props: FHeaderButtonProps) => {
	return (
		<div
			style={props.containerStyle}
			className={
				props.containerClassName +
				" " +
				styles.FHeaderButtonContainer(props)
			}
			onClick={() =>
				props.disabled ? undefined : props.onClick && props.onClick()
			}
		>
			{props.children ?? handleFHeaderButton(props)}
		</div>
	);
};
