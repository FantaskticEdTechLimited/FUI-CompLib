import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FIcon, FIconTypes } from "@fantaskticedtechlimited/fui-iconlib";
import { useState, useEffect, useRef, Fragment } from "react";
import * as styles from "./styles";
import { FSideNavBarProps } from "./types";
import { FScrollBarStyle } from "../FScrollBar";
import React from "react";
import { RWDMode } from "../global.types";
export const FRWDNavBar = (props: FSideNavBarProps) => {
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
							props.topBarClassName + " " + styles.FTopNavBarContainer(props)
						}
					>
						{props.logo ?? props.topBarLeadingComponents}
						{props.topBarActionComponents ?? (
							<FIcon
								name={FIconTypes.MENU}
								size="large"
								onClick={() => setOpenSideBar(true)}
								strokeColor={FColorTypes.BRAND}
								containerClassName={styles.FTopNavBarContainer_MenuIcon}
								{...props.menuIconProps}
							/>
						)}
					</div>

					{/* Hidden SideBar */}
					<div
						style={props.overlayStyle}
						className={
							props.overlayClassName +
							" " +
							styles.FHiddenSideBarOverlay(props, openSideBar)
						}
					>
						{/* Menu location controller */}
						<div
							className={styles.FHiddenSideBarContainer}
							ref={OpenedSideNavBarRef}
						>
							{/* close button */}
							<FIcon
								name={FIconTypes.CLOSE}
								size="large"
								onClick={() => setOpenSideBar(false)}
								strokeColor={FColorTypes.BRAND}
								containerClassName={styles.FTopNavBarContainer_CloseIcon}
								{...props.closeIconProps}
							/>
							{/* scrollable menu */}
							<div
								style={props.contentDivStyle}
								className={
									props.contentDivClassName +
									" " +
									styles.FSideNavBarContainer +
									" " +
									FScrollBarStyle({
										visible: true,
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
					<div className={styles.FNormalSideNavBarContainer}>
						{props.logo}
						<div className={styles.Divider} />
						{/* scrollable menu */}
						<div
							className={
								props.contentDivClassName +
								" " +
								styles.FSideNavBarContainer +
								" " +
								FScrollBarStyle({
									visible: true,
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
