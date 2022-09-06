import React from "react";
import { FBottomNavBar, FUseStateSafe } from "..";
import * as styles from "./styles";
import { FFormProps } from "./types";

export const FForm = (props: FFormProps) => {
	const [isLoading, setIsLoading] = FUseStateSafe(false);
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
			className={styles.FForm_Container + " " + props.containerClassName}
			style={props.containerStyle}
		>
			{/* content */}
			<div
				style={props.contentContainerStyle}
				className={
					styles.FForm_Content_Container + " " + props.contentContainerClassName
				}
			>
				{props.children}
			</div>
			{/* Footer */}
			<FBottomNavBar
				leadingButtonLabel="Cancel"
				actionButtonLabel={isLoading ? "Loading" : "Submit"}
				disableActionButton={isLoading}
				onLeadingButtonClick={handleLeadingButtonClick}
				onActionButtonClick={handleActionButtonClick}
				{...props.FBottomNavigationProps}
			/>
		</div>
	);
};
