import { FBottomNavBarProps } from "./types";
import * as styles from "./styles";
import React from "react";
import { FPrimaryButton, FTextButton } from "..";

export const FBottomNavBar = (props: FBottomNavBarProps) => {
	return (
		<div
			style={props.navBarStyle}
			className={props.navBarClassName + " " + styles.FBottomNavBarContainer}
		>
			{
				props.children ??
				<>
				<FTextButton
					disabled={props.disableLeadingButton}
					label={props.leadingButtonLabel}
					onClick={() =>
						props.disableLeadingButton ? () => {} : props.onLeadingButtonClick()
					}
					style={props.leadingButtonStyle}
					className={
						props.leadingButtonClassName + " " + styles.FLeadingButtonDiv
					}
				/>
				<FPrimaryButton
					disabled={props.disableActionButton}
					label={props.actionButtonLabel}
					onClick={() =>
						props.disableActionButton ? () => {} : props.onActionButtonClick()
					}
					style={props.actionButtonStyle}
					className={props.actionButtonClassName + " " + styles.FActionButtonDiv}
				/>
				</>
			}
		</div>
	);
};
