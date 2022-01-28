import React from "react";
import { FBottomNavBar, FUseStateSafeHandler } from "..";
import * as styles from "./styles";
import { FFormProps } from "./types";

export const FForm = (props: FFormProps) => {
	const [isLoading, setIsLoading] = FUseStateSafeHandler(false);
	const handleActionButtonClick = async () => {
		setIsLoading(true);
		props.onSubmit && (await props.onSubmit());
		setIsLoading(false);
	};
	const handleLeadingButtonClick = async () => {
		props.onClose && (await props.onClose());
	};
	return (
		<div className={styles.fformContainer}>
			{/* content */}
			{props.children}

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
