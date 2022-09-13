import React, { useState } from "react";
import { FHeaderButtonProps } from "./types";
import * as styles from "./styles";
import { handleFHeaderButton } from "./func";

export const FHeaderButton = (props: FHeaderButtonProps) => {
	const [isHover, setIsHover] = useState<boolean>(false);

	return (
		<div
			style={props.style && props.style(isHover)}
			className={
				styles.FHeaderButtonContainer(props) +
				" " +
				(props.className && props.className(isHover))
			}
			onClick={() =>
				props.disabled ? undefined : props.onClick && props.onClick()
			}
			// Added hover effect for className and style
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			{props.children ?? handleFHeaderButton(props)}
		</div>
	);
};
