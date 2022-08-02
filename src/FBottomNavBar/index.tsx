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
			style={props.style}
			className={styles.FBottomNavBarContainer + " " + props.className}
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
						style={props.leadingButtonProps?.style}
						className={() =>
							styles.FLeadingButtonDiv(props.disableActionButton!) +
							" " +
							props.leadingButtonProps?.className
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
						style={props.actionButtonProps?.style}
						className={() =>
							styles.FActionButtonDiv(props.disableActionButton!) +
							" " +
							props.actionButtonProps?.className
						}
						{...props.actionButtonProps}
					/>
				</>
			)}
		</div>
	);
};
