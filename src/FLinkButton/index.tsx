import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FIcon, FIconTypes } from "@fantaskticedtechlimited/fui-iconlib";
import React from "react";
import { Link } from "react-router-dom";
import { FText } from "..";
import * as styles from "./styles";
import { FLinkButtonProps } from "./types";

export const FLinkButton = (props: FLinkButtonProps) => {
	const isSelected = props.pathIsSelected;

	return (
		<Link
			style={props.style}
			className={
				props.className +
				" " +
				styles.FLinkButtonContainer(isSelected!, props.disabled!)
			}
			to={props.pathLink!}
			onClick={() =>
				props.disabled ? () => {} : props.onClick && props.onClick()
			}
		>
			{props.children ?? (
				<>
					{props.leadingComponents ?? props.leadingIcon ? (
						<FIcon
							strokeColor={
								isSelected ? FColorTypes.BRAND : FColorTypes.PRIMARY_BLACK
							}
							{...props.leadingIcon}
						/>
					) : undefined}
					<FText
						style={props.labelStyle}
						className={props.labelClassName + " " + styles.FLinkButtonLabel}
						color={isSelected ? FColorTypes.BRAND : FColorTypes.PRIMARY_BLACK}
						children={props.label}
						{...props.labelProps}
					/>
					{props.actionComponents
						? props.actionComponents
						: props.containsRouteChildren && (
								<FIcon
									name={FIconTypes.ARROW_DOWN}
									size="small"
									strokeColor={
										isSelected ? FColorTypes.BRAND : FColorTypes.PRIMARY_BLACK
									}
									{...props.actionIcon}
								/>
						  )}
				</>
			)}
		</Link>
	);
};
