import React from "react"; 
import { FBottomNavBar } from "../FBottomNavBar";
import { FBottomNavBarProps } from "../FBottomNavBar/types";
import { FScrollBarStyle } from "../FScrollBarStyle";
import { FUseStateSafe } from "../utils";
import { styles } from "./styles";
import { FFormProps } from "./types";

/** `<FForm />` is a component for data input on a form.
 *
 * Props: `FFormProps`
 */
export const FForm = (props: FFormProps) => {
	const [isLoading, setIsLoading] = FUseStateSafe(false);
	const bottomBarProps: FBottomNavBarProps = {
		leadingButtonLabel: "Cancel",
		actionButtonLabel: "Submit",
		...props.bottomBarProps,
	};

	const handleActionButtonClick = async () => {
		setIsLoading(true);
		props.onSubmit && (await props.onSubmit());
		setIsLoading(false);
	};

	const handleLeadingButtonClick = async () => {
		props.onClose && (await props.onClose());
	};

	return (
		<div
			className={
				styles.FForm_Container + " " + FScrollBarStyle() + " " + props.className
			}
			style={props.style}
		>
			<div
				style={props.contentContainerStyle}
				className={
					styles.FForm_Content_Container +
					" " +
					FScrollBarStyle() +
					" " +
					props.contentContainerClassName
				}
			>
				{props.children}
			</div>
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
		</div>
	);
};
