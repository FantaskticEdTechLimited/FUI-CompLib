import { FBottomNavBarProps } from "./types";
import * as styles from "./styles";
import React from "react";
import { FButton } from "..";

/** `<FBottomNavBar />` is a bottom navigation bar,
 * which contains a leading button (left) and a action button (right) in a row.
 *
 * Props: `FBottomNavBarProps`.
 */
export const FBottomNavBar = ({
	disableActionButton = false,
	disableLeadingButton = false,
	actionButtonLabel = "Next",
	leadingButtonLabel = "Cancel",
	actionButtonProps = { type: "Primary" },
	leadingButtonProps = { type: "Secondary" },
	...props
}: FBottomNavBarProps) => {
	return (
		<div
			style={props.style}
			className={styles.FBottomNavBarContainer + " " + props.className}
		>
			{props.customChildren ?? (
				<>
					<FButton
						type={leadingButtonProps?.type}
						disabled={disableLeadingButton}
						label={leadingButtonLabel}
						onClick={() =>
							disableLeadingButton ? () => {} : props.onLeadingButtonClick!()
						}
						style={leadingButtonProps?.style}
						className={() =>
							styles.FLeadingButtonDiv() + " " + leadingButtonProps?.className
						}
						{...leadingButtonProps}
					/>
					<FButton
						type={actionButtonProps?.type}
						disabled={disableActionButton}
						label={actionButtonLabel}
						onClick={() =>
							disableActionButton ? () => {} : props.onActionButtonClick!()
						}
						style={actionButtonProps?.style}
						className={() =>
							styles.FActionButtonDiv() + " " + actionButtonProps?.className
						}
						{...actionButtonProps}
					/>
				</>
			)}
		</div>
	);
};
