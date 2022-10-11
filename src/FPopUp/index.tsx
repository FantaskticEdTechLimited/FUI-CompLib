import React, { useEffect, useRef } from "react";
import { FPopUpProps } from "./types";
import * as styles from "./styles";
import { FScrollBarStyle } from "../FScrollBarStyle";
import { FUseScreenSize } from "../utils";

/** `<FPopUp />` is a component which pops an extra smaller window
 *  for any content to display or input.
 *
 * Props: `FPopUpProps`
 */
export const FPopUp = ({
	disableCloseWhenClickOutside = false,
	...props
}: FPopUpProps) => {
	const PopupRef = useRef<HTMLDivElement>(null);
	const [width, height] = FUseScreenSize();

	const handleClickOutside = async (event: any) => {
		if (disableCloseWhenClickOutside) return;
		if (PopupRef.current) {
			if (!PopupRef.current.contains(event.target)) {
				props.onClose && (await props.onClose());
			}
		}
	};

	useEffect(() => {
		window.addEventListener("mousedown", handleClickOutside);
		return () => {
			window.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div
			style={props.overlayStyle}
			className={styles.FPopUpOverlay() + " " + props.overlayClassName}
		>
			<div
				ref={disableCloseWhenClickOutside ? undefined : PopupRef}
				style={props.style}
				className={
					styles.FPopUpContainer(width, height) +
					" " +
					props.className +
					" " +
					FScrollBarStyle({
						...props.scrollBarProps,
					})
				}
			>
				{props.children}
			</div>
		</div>
	);
};
