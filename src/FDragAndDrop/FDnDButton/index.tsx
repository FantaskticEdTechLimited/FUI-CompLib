import React from "react";
import { FJoinClassNames } from "../../utils/FJoinClassNames";
import { DragIcon } from "./icon";
import { dndButtonContainer } from "./styles";
import { FDnDButtonProps } from "./types";

/** `<FDnDButton />` is a button for drag and drop (_DnD_) action. */
export const FDnDButton = (props: FDnDButtonProps) => {
	const { style, className, disabled } = props;
	return (
		<div
			style={style}
			className={FJoinClassNames([dndButtonContainer(disabled), className])}
		>
			<DragIcon />
		</div>
	);
};
