import React, { useRef } from "react";
import { FHeaderButtonProps } from "./types";
import { getIcon } from "./helper";
import { buttonContainer } from "./styles";
import { FJoinClassNames } from "../utils/FJoinClassNames";
import { useHover } from "usehooks-ts";

/** `<FHeaderButton />` is a component to return an icon button on the header of a page.
 *
 * Props: `FHeaderButtonProps`.
 */
export const FHeaderButton = (props: FHeaderButtonProps) => {
	const {
		ref: ref,
		size = "large",
		type = "back",
		disabled = false,
		style,
		className,
		onClick,
		children,
	} = props;
	const hoverRef = useRef(null);
	const isHover = useHover(hoverRef);
	const icon = getIcon({ size, type, disabled });

	return (
		<div
			ref={ref ?? hoverRef}
			style={style}
			className={FJoinClassNames([
				buttonContainer(disabled, isHover),
				className,
			])}
			onClick={() => (disabled ? undefined : onClick && onClick())}
		>
			{children ? children : icon}
		</div>
	);
};
