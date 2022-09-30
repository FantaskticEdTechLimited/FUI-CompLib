import React from "react";
import { DragIcon } from "./icon";
import { FDnDButton_Container } from "./styles";
import { FDnDButtonProps } from "./types";

/** `<FDnDButton />` is a button for drag and drop (_DnD_) action. */
export const FDnDButton = (props: FDnDButtonProps) => {
	return (
		<div
			style={props.style}
			className={FDnDButton_Container(props.disabled) + " " + props.className}
		>
			<DragIcon />
		</div>
	);
};
