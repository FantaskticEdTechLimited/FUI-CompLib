import { FIcon, FIconNames } from "@fantaskticedtechlimited/fui-iconlib";
import React from "react";
import { useState, useEffect, useRef, Fragment } from "react";
import { FScrollBarStyle, FUseTheme } from "..";
import { RWDMode } from "../global.types";
import * as styles from "./styles";
import { FSideNavBarProps } from "./types";

export const FRWDNavBar = (props: FSideNavBarProps) => {
	const { theme } = FUseTheme();
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
			{/* Mobile Mode */}
			{props.rwdMode !== RWDMode.FULL ? (
				<Fragment>
					{/* Top Bar */}
					<div
						style={props.topBarStyle}
						className={
							styles.FTopNavBarContainer(props, theme) +
							" " +
							props.topBarClassName
						}
					>
						{props.logo ?? props.topBarLeadingComponents}
						{props.topBarActionComponents ?? (
							<FIcon
								name={FIconNames.MENU}
								size="large"
								onClick={() => setOpenSideBar(true)}
								strokeColor={theme.mainThemeColor}
								className={styles.FTopNavBarContainer_MenuIcon(theme)} 
								{...props.menuIconProps}
							/>
						)}
					</div>

					{/* Hidden SideBar */}
					<div
						style={props.overlayStyle}
						className={
							styles.FHiddenSideBarOverlay(props, openSideBar) +
							" " +
							props.overlayClassName
						}
					>
						{/* Menu location controller */}
						<div
							className={
								styles.FHiddenSideBarContainer(theme) +
								" " +
								props.containerClassName
							}
							ref={OpenedSideNavBarRef}
						>
							{/* close button */}
							<FIcon
								name={FIconNames.CLOSE}
								size="large"
								onClick={() => setOpenSideBar(false)}
								strokeColor={theme.mainThemeColor}
								className={styles.FTopNavBarContainer_CloseIcon(theme)} 
								{...props.closeIconProps}
							/>
							{/* scrollable menu */}
							<div
								style={props.contentDivStyle}
								className={
									styles.FSideNavBarContainer +
									" " +
									props.contentDivClassName +
									" " +
									FScrollBarStyle({
										...props.scrollBarProps,
									})
								}
							>
								{props.children}
							</div>
						</div>
					</div>
				</Fragment>
			) : (
				// PC Mode
				<Fragment>
					{/* Normal SideBar */}
					<div
						className={
							styles.FNormalSideNavBarContainer(theme) +
							" " +
							props.containerClassName
						}
					>
						{props.logo}
						<div className={styles.Divider} />
						{/* scrollable menu */}
						<div
							className={
								styles.FSideNavBarContainer +
								" " +
								props.contentDivClassName +
								" " +
								FScrollBarStyle({
									...props.scrollBarProps,
								})
							}
							style={{
								overflowY: "scroll",
							}}
						>
							{props.children}
						</div>
					</div>
				</Fragment>
			)}
		</>
	);
};
