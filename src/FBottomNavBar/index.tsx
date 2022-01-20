import { FBottomNavBarProps } from "./types";
import * as styles from "./styles";
import React from "react";
import { FButton } from "..";
import { FButtonTypes } from "../FButton/types";

export const FBottomNavBar = (props: FBottomNavBarProps) => {
	return (
		<div
			style={props.navBarStyle}
			className={props.navBarClassName + " " + styles.FBottomNavBarContainer}
		>
			{props.children ?? (
				<>
					<FButton
						type={FButtonTypes.TEXT}
						disabled={props.disableLeadingButton}
						label={props.leadingButtonLabel ?? "Cancel"}
						onClick={() =>
							props.disableLeadingButton
								? () => {}
								: props.onLeadingButtonClick!()
						}
						style={props.leadingButtonStyle}
						className={
							props.leadingButtonClassName + " " + styles.FLeadingButtonDiv
						}
						{...props.leadingButtonProps}
					/>
					<FButton
						type={FButtonTypes.PRIMARY}
						disabled={props.disableActionButton}
						label={props.actionButtonLabel ?? "Next"}
						onClick={() =>
							props.disableActionButton
								? () => {}
								: props.onActionButtonClick!()
						}
						style={props.actionButtonStyle}
						className={
							props.actionButtonClassName +
							" " +
							styles.FActionButtonDiv(props.disableActionButton!)
						}
						{...props.actionButtonProps}
					/>
				</>
			)}
		</div>
	);
};
