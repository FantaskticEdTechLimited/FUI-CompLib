import React, { useEffect, useRef } from "react";
import { FPopUpProps } from "./types";
import * as styles from "./styles";
import { FScrollBarStyle } from "../FScrollBarStyle";
import { FUseScreenSize } from "../utils";

export const FPopUp = (props: FPopUpProps) => {
	const PopupRef = useRef<HTMLDivElement>(null);
	const [width, height] = FUseScreenSize();

	const handleClickOutside = async (event: any) => {
		if (props.isDisableCloseWhenClickOutside) {
			return;
		}

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
				ref={props.isDisableCloseWhenClickOutside ? undefined : PopupRef}
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
				{props.children && props.children}
			</div>
		</div>
	);
};
