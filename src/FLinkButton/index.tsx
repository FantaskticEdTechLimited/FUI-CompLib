import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FIcon, FIconTypes } from "@fantaskticedtechlimited/fui-iconlib";
import React from "react";
import { Link } from "react-router-dom";
import { FText } from "..";
import * as styles from "./styles";
import { FLinkButtonProps } from "./types";

export const FLinkButton = (props: FLinkButtonProps) => {
	return (
		<Link
			style={props.style}
			className={
				props.className +
				" " +
				styles.FLinkButtonContainer(props.pathIsSelected!, props.disabled!)
			}
			to={props.pathLink!}
			onClick={() => (props.disabled ? () => {} : props.onClick!())}
		>
			{props.children ?? (
				<>
					{props.leadingComponent ?? (
						<FIcon
							strokeColor={
								props.pathIsSelected
									? FColorTypes.PURE_WHITE
									: FColorTypes.BRAND
							}
							{...props.leadingIcon}
						/>
					)}
					<FText
						style={props.labelStyle}
						className={props.labelClassName + " " + styles.FLinkButtonLabel}
						color={props.pathIsSelected ? FColorTypes.BRAND : FColorTypes.GREY}
						children={props.label}
					/>
					{props.actionComponent
						? props.actionComponent
						: props.containsRouteChildren && (
								<FIcon
									name={FIconTypes.ARROW_DOWN}
									size="small"
									strokeColor={
										props.pathIsSelected
											? FColorTypes.PURE_WHITE
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