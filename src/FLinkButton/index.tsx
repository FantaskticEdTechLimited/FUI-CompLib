import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FIcon, FIconTypes } from "@fantaskticedtechlimited/fui-iconlib";
import React from "react";
import { Link } from "react-router-dom";
import { FLinkButtonHandler, FText } from "..";
import * as styles from "./styles";
import { FLinkButtonProps } from "./types";

export const FLinkButton = (props: FLinkButtonProps) => {
	const isHome = FLinkButtonHandler()
	const isSelected = isHome || props.pathIsSelected

	return (
		<Link
			style={props.style}
			className={
				props.className +
				" " +
				styles.FLinkButtonContainer(isSelected!, props.disabled!)
			}
			to={props.pathLink!}
			onClick={() => (props.disabled ? () => {} : props.onClick!())}
		>
			{props.children ?? (
				<>
					{props.leadingComponent ?? (
						<FIcon
							strokeColor={
								isSelected
									? FColorTypes.BRAND
									: FColorTypes.BLACK
							}
							{...props.leadingIcon}
						/>
					)}
					<FText
						style={props.labelStyle}
						className={props.labelClassName + " " + styles.FLinkButtonLabel}
						color={isSelected ? FColorTypes.BRAND : FColorTypes.BLACK}
						children={props.label}
					/>
					{props.actionComponent
						? props.actionComponent
						: props.containsRouteChildren && (
								<FIcon
									name={FIconTypes.ARROW_DOWN}
									size="small"
									strokeColor={
										isSelected
											? FColorTypes.BRAND
											: FColorTypes.BLACK
									}
									{...props.actionIcon}
								/>
						  )}
				</>
			)}
		</Link>
	);
};
