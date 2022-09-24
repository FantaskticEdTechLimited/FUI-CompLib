import React, { useState } from "react";
import { FHeaderButtonProps } from "./types";
import { handleFHeaderButton } from "./func";
import { FHeaderButtonContainer } from "./styles";

/** `<FHeaderButton />` is a component to return an icon button on the header of a page.
 *
 * Props: `FHeaderButtonProps`.
 */
export const FHeaderButton = ({
	size = "large",
	type = "Back",
	disabled = false,
	disableAutoResize = true,
	...props
}: FHeaderButtonProps) => {
	const [isHover, setIsHover] = useState<boolean>(false);
	const param: Partial<FHeaderButtonProps> = {
		size: size,
		type: type,
		disabled: disabled,
		disableAutoResize: disableAutoResize,
		...props,
	};

	return (
		<div
			style={props.style && props.style(isHover)}
			className={
				FHeaderButtonContainer(param, isHover) +
				" " +
				(props.className && props.className(isHover))
			}
			onClick={() => (disabled ? undefined : props.onClick && props.onClick())}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			{props.children ?? handleFHeaderButton(param)}
		</div>
	);
};
