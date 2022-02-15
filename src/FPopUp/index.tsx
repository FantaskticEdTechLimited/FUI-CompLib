import React, { useEffect, useRef } from "react";
import { FPopUpProps } from "./types";
import * as styles from "./styles";
export const FPopUp = (props: FPopUpProps) => {
	const PopupRef = useRef<HTMLDivElement>(null);

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
			className={props.overlayClassName + " " + styles.FPopUpOverlay}
		>
			<div
				ref={props.isDisableCloseWhenClickOutside ? undefined : PopupRef}
				style={props.style}
				className={props.className + " " + styles.FPopUpDiv}
			>
				{props.children && props.children}
			</div>
		</div>
	);
};