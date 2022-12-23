import { FBottomNavBarProps } from "./types";
import { styles, leadingButtonDiv, actionButtonDiv } from "./styles";
import React from "react";
import { FButton, FJoinClassNames } from "..";

/** `<FBottomNavBar />` is a bottom navigation bar,
 * which contains a leading button (left) and a action button (right) in a row.
 *
 * Props: `FBottomNavBarProps`.
 */
export const FBottomNavBar = (props: FBottomNavBarProps) => {
	const {
		ref: ref,
		disableActionButton = false,
		disableLeadingButton = false,
		actionButtonLabel = "Next",
		leadingButtonLabel = "Cancel",
		actionButtonProps = { type: "primary" },
		leadingButtonProps = { type: "secondary" },
		style,
		className,
		children,
		onLeadingButtonClick,
		onActionButtonClick,
	} = props;

	return (
		<div
			ref={ref}
			style={style}
			className={FJoinClassNames([styles.bottomNavBarContainer, className])}
		>
			{children ? (
				children
			) : (
				<>
					<FButton
						disabled={disableLeadingButton}
						label={leadingButtonLabel}
						onClick={() =>
							disableLeadingButton ? () => {} : onLeadingButtonClick!()
						}
						className={FJoinClassNames([
							leadingButtonDiv(),
							leadingButtonProps?.className,
						])}
						{...leadingButtonProps}
					/>
					<FButton
						disabled={disableActionButton}
						label={actionButtonLabel}
						onClick={() =>
							disableActionButton ? () => {} : onActionButtonClick!()
						}
						className={FJoinClassNames([
							actionButtonDiv(),
							actionButtonProps?.className,
						])}
						{...actionButtonProps}
					/>
				</>
			)}
		</div>
	);
};
