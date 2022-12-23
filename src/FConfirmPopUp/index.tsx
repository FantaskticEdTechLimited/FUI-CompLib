import { FConfirmPopUpProps } from "./types";
import { styles } from "./styles";
import {
	FBottomNavBar,
	FPopUp,
	FText,
	FReturnColor,
	FUseStateSafe,
	FJoinClassNames,
} from "..";
import React from "react";
import { FFontTypes } from "@innoplus-studio/fui-fontlib";

/** `<FConfirmPopUp />` is a `<PopUp />` component
 * which contains a header (`title`, `subtitle`) and a bottom nav bar (`<FBottomNavBar />`)
 * to submit data to backend.
 *
 * Props: `FConfirmPopUpProps`
 */
export const FConfirmPopUp = (props: FConfirmPopUpProps) => {
	const {
		disableBottomBar = false,
		disableCloseWhenClickOutside = false,
		headerStyle,
		className,
		headerClassName,
		onClose,
		title,
		titleProps,
		subtitle,
		subtitleProps,
		children,
		bottomBarProps,
		scrollBarProps,
		...restProps
	} = props;
	const [isLoading, setIsLoading] = FUseStateSafe(false);

	const handleActionButtonClick = async () => {
		setIsLoading(true);
		bottomBarProps?.onActionButtonClick &&
			(await bottomBarProps?.onActionButtonClick());
		setIsLoading(false);
	};

	const handleLeadingButtonClick = async () => {
		bottomBarProps?.onLeadingButtonClick &&
			(await bottomBarProps?.onLeadingButtonClick());
	};

	return (
		<FPopUp
			onClose={disableCloseWhenClickOutside ? undefined : onClose}
			className={FJoinClassNames([styles.popUpContainer, className])}
			{...restProps}
		>
			<div
				style={headerStyle}
				className={FJoinClassNames([styles.headerDiv, headerClassName])}
			>
				<FText
					font={FFontTypes.Title()}
					maxRows={1}
					overflowHidden
					children={title}
					{...titleProps}
				/>
				{subtitle && (
					<FText
						font={FFontTypes.Text()}
						color={FReturnColor({ color: "Grey" })}
						maxRows={2}
						overflowHidden
						children={subtitle}
						{...subtitleProps}
					/>
				)}
			</div>
			{children}
			{!disableBottomBar && (
				<FBottomNavBar
					leadingButtonLabel={bottomBarProps?.leadingButtonLabel}
					actionButtonLabel={
						isLoading
							? "Loading"
							: bottomBarProps?.actionButtonLabel ?? "Confirm"
					}
					disableActionButton={isLoading}
					onLeadingButtonClick={handleLeadingButtonClick}
					onActionButtonClick={handleActionButtonClick}
					{...bottomBarProps}
				/>
			)}
		</FPopUp>
	);
};
