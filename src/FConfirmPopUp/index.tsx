import { FConfirmPopUpProps } from "./types";
import { styles } from "./styles";
import {
	FBottomNavBar,
	FBottomNavBarProps,
	FPopUp,
	FText,
	FReturnColor,
	FUseStateSafe,
} from "..";
import React from "react";
import { FFontTypes } from "@innoplus-studio/fui-fontlib";

/** `<FConfirmPopUp />` is a `<PopUp />` component
 * which contains a header (`title`, `subtitle`) and a bottom nav bar (`<FBottomNavBar />`)
 * to submit data to backend.
 *
 * Props: `FConfirmPopUpProps`
 */
export const FConfirmPopUp = ({
	disableBottomBar = false,
	disableCloseWhenClickOutside = false,
	...props
}: FConfirmPopUpProps) => {
	const [isLoading, setIsLoading] = FUseStateSafe(false);
	const FPopUpParams: Partial<FConfirmPopUpProps> = {
		disableCloseWhenClickOutside: disableCloseWhenClickOutside,
		overlayClassName: props.overlayClassName,
		overlayStyle: props.overlayStyle,
		style: props.style,
		scrollBarProps: props.scrollBarProps,
	};
	const bottomBarProps: FBottomNavBarProps = {
		actionButtonLabel: "Confirm",
		...props.bottomBarProps,
	};

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
			{...FPopUpParams}
			onClose={disableCloseWhenClickOutside ? undefined : props.onClose}
			className={styles.FConfirmPopUp_Container + " " + props.className}
		>
			<div
				style={props.headerStyle}
				className={styles.FConfirmPopUp_HeaderDiv + " " + props.headerClassName}
			>
				<FText
					font={FFontTypes.Title()}
					maxRows={1}
					overflowHidden
					children={props.title}
					{...props.titleProps}
				/>
				{props.subtitle && (
					<FText
						font={FFontTypes.Text()}
						color={() => FReturnColor({ color: "Grey" })}
						maxRows={2}
						overflowHidden
						children={props.subtitle}
						{...props.subtitleProps}
					/>
				)}
			</div>
			{props.children}
			{!disableBottomBar && (
				<FBottomNavBar
					leadingButtonLabel={bottomBarProps.leadingButtonLabel}
					actionButtonLabel={
						isLoading ? "Loading" : bottomBarProps.actionButtonLabel
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
