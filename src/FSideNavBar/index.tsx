import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FIcon, FIconTypes } from "@fantaskticedtechlimited/fui-iconlib";
import React, { useState, useEffect, useRef } from "react";
import { FScreenSizeHandler, FScrollBarStyle } from "..";
import * as styles from "./styles";
import { FSideNavBarProps } from "./types";

export const FSideNavBar = (props: FSideNavBarProps) => {
	const [screenWidth] = FScreenSizeHandler();
	const [openSideBar, setOpenSideBar] = useState<boolean>(false);
	const OpenedSideNavBarRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: any) => {
		if (
			OpenedSideNavBarRef.current &&
			!OpenedSideNavBarRef.current.contains(event.target)
		)
			setOpenSideBar(false);
	};

	useEffect(() => {
		window.addEventListener("mousedown", handleClickOutside);
		return () => {
			window.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		if (props.forcedToClose) setOpenSideBar(false);
	}, [props.forcedToClose]);

	return (
		<>
			{/* Top NavBar when tablet mode */}
			{screenWidth < 1280 && (
				<div
					style={props.topBarStyle}
					className={
						props.topBarClassName +
						" " +
						styles.FTopNavBarContainer(props, screenWidth)
					}
				>
					{props.logo ?? props.topBarLeadingComponents}
					{props.topBarActionComponents ?? (
						<FIcon
							name={FIconTypes.MENU}
							size="large"
							onClick={() => setOpenSideBar(true)}
							strokeColor={FColorTypes.BRAND}
							containerStyle={{
								borderRadius: "0.25rem",
								backgroundColor: FColorTypes.BRAND_BG,
								padding: "0.25rem",
							}}
							{...props.menuIconProps}
						/>
					)}
				</div>
			)}
			<div
				style={props.overlayStyle}
				className={
					props.overlayClassName +
					" " +
					styles.FSideNarBarOverlayContainer(props, openSideBar, screenWidth)
				}
			>
				<div
					style={props.containerStyle}
					className={
						props.containerClassName +
						" " +
						styles.FSideNavBarContainer(openSideBar, screenWidth) +
						" " +
						FScrollBarStyle({
							visible: true,
							...props.scrollBarProps,
						})
					}
					ref={screenWidth >= 1280 ? undefined : OpenedSideNavBarRef}
				>
					<div
						style={props.contentDivStyle}
						className={
							props.contentDivClassName +
							" " +
							styles.FSideNavBarContentDiv(props, screenWidth)
						}
					>
						{screenWidth >= 1280 ? (
							props.logo
						) : (
							<FIcon
								name={FIconTypes.CLOSE}
								size="large"
								onClick={() => setOpenSideBar(false)}
								strokeColor={FColorTypes.BRAND}
								containerStyle={{
									borderRadius: "0.25rem",
									backgroundColor: FColorTypes.BRAND_BG,
									padding: "0.25rem",
									alignSelf: "flex-end",
								}}
								{...props.closeIconProps}
							/>
						)}
						{props.children}
					</div>
				</div>
			</div>
		</>
	);
};
