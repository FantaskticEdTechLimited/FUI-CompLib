import { FBottomNavBarProps } from "./types";
import * as styles from "./styles";
import React from "react";
import { FButton } from "..";
import { FButtonTypes } from "../FButton/types";

/**
 * A bar at the bottom containing two buttons (one left: leading button; one right: action button).
 */
export const FBottomNavBar = (props: FBottomNavBarProps) => {
	return (
		<div
			style={props.navBarStyle}
			className={styles.FBottomNavBarContainer + " " + props.navBarClassName}
		>
			{props.children ?? (
				<>
					<FButton
						type={props.leadingButtonProps?.type ?? FButtonTypes.SECONDARY}
						disabled={props.disableLeadingButton}
						label={props.leadingButtonLabel ?? "Cancel"}
						onClick={() =>
							props.disableLeadingButton
								? () => {}
								: props.onLeadingButtonClick!()
						}
						style={props.leadingButtonStyle}
						className={
							styles.FLeadingButtonDiv(props.disableActionButton!) +
							" " +
							props.leadingButtonClassName
						}
						{...props.leadingButtonProps}
					/>
					<FButton
						type={props.actionButtonProps?.type ?? FButtonTypes.PRIMARY}
						disabled={props.disableActionButton}
						label={props.actionButtonLabel ?? "Next"}
						onClick={() =>
							props.disableActionButton
								? () => {}
								: props.onActionButtonClick!()
						}
						style={props.actionButtonStyle}
						className={
							styles.FActionButtonDiv(props.disableActionButton!) +
							" " +
							props.actionButtonClassName
						}
						{...props.actionButtonProps}
					/>
				</>
			)}
		</div>
	);
};
