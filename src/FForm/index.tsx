import React from "react";
import { FBottomNavBar } from "../FBottomNavBar";
import { FScrollBarStyle } from "../FScrollBarStyle";
import { FJoinClassNames } from "../utils/FJoinClassNames";
import { FUseStateSafe } from "../utils/FUseStateSafe";
import { styles } from "./styles";
import { FFormProps } from "./types";

/** `<FForm />` is a component for data input on a form.
 *
 * Props: `FFormProps`
 */
export const FForm = (props: FFormProps) => {
	const {
		style,
		contentContainerStyle,
		className,
		contentContainerClassName,
		onClose,
		onSubmit,
		bottomBarProps,
		children,
	} = props;

	const [isLoading, setIsLoading] = FUseStateSafe(false);

	const handleActionButtonClick = async () => {
		setIsLoading(true);
		onSubmit && (await onSubmit());
		setIsLoading(false);
	};

	const handleLeadingButtonClick = async () => {
		onClose && (await onClose());
	};

	return (
		<div
			className={FJoinClassNames([
				styles.contentContainer,
				FScrollBarStyle(),
				className,
			])}
			style={style}
		>
			<div
				style={contentContainerStyle}
				className={FJoinClassNames([
					styles.contentContainer,
					FScrollBarStyle(),
					contentContainerClassName,
				])}
			>
				{children}
			</div>
			<FBottomNavBar
				leadingButtonLabel={bottomBarProps?.leadingButtonLabel ?? "Cancel"}
				actionButtonLabel={
					isLoading ? "Loading" : bottomBarProps?.actionButtonLabel ?? "Submit"
				}
				disableActionButton={isLoading}
				onLeadingButtonClick={handleLeadingButtonClick}
				onActionButtonClick={handleActionButtonClick}
				{...bottomBarProps}
			/>
		</div>
	);
};
