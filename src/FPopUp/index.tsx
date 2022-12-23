import React, { useRef } from "react";
import { FPopUpProps } from "./types";
import { popUpContainer, popUpOverlay } from "./styles";
import { FScrollBarStyle } from "../FScrollBarStyle";
import { useOnClickOutside, useWindowSize } from "usehooks-ts";
import { FJoinClassNames } from "../utils/FJoinClassNames";

/** `<FPopUp />` is a component which pops an extra smaller window
 *  for any content to display or input.
 *
 * Props: `FPopUpProps`
 */
export const FPopUp = (props: FPopUpProps) => {
	const {
		disableCloseWhenClickOutside = false,
		style,
		overlayStyle,
		className,
		overlayClassName,
		onClose,
		children,
		scrollBarProps,
	} = props;

	const { width, height } = useWindowSize();
	const popUpRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = async (event: any) => {
		if (disableCloseWhenClickOutside) return;
		if (popUpRef.current) {
			if (!popUpRef.current.contains(event.target)) {
				onClose && (await onClose());
			}
		}
	};

	useOnClickOutside(popUpRef, handleClickOutside);

	return (
		<div
			style={overlayStyle}
			className={FJoinClassNames([popUpOverlay(), overlayClassName])}
		>
			<div
				ref={disableCloseWhenClickOutside ? undefined : popUpRef}
				style={style}
				className={FJoinClassNames([
					(popUpContainer(width, height),
					className,
					FScrollBarStyle({ ...scrollBarProps })),
				])}
			>
				{children}
			</div>
		</div>
	);
};
