import { style, stylesheet } from "typestyle";
import { FReturnColor } from "..";
import { FSelectContainerStyleProps } from "./types";

export const styles = stylesheet({
	FSelectWrapper: {
		position: "relative",
		display: "flex",
		flexDirection: "column",
	},
});

export const FSelectContainer = (
	props: FSelectContainerStyleProps<any>,
	isHover?: boolean
) =>
	style({
		alignItems: "center",
		backgroundColor: FReturnColor({ color: "White" }),
		border:
			"2px solid " +
			(props.isClicked
				? FReturnColor({ color: "Main" })
				: props.selectedOptions
				? isHover
					? FReturnColor({ color: "Main" })
					: FReturnColor({ color: "Black" })
				: isHover
				? FReturnColor({ color: "Black" })
				: FReturnColor({ color: "BG Light" })),
		borderRadius: "4px",
		boxSizing: "border-box",
		columnGap: "8px",
		cursor: props.disabled ? "not-allowed" : "pointer",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		opacity: props.disabled ? 0.4 : 1,
		padding: "12px",
	});

export const FSelectContentDiv = (showLabelOnly?: boolean) =>
	style({
		display: "flex",
		flexDirection: "column",
		flex: 1,
		rowGap: showLabelOnly ? 0 : "4px",
	});

export const FSelectDropdownWrapper = (
	ref: React.RefObject<HTMLDivElement>,
	isClicked: boolean
) =>
	style({
		position: "absolute",
		width: ref.current ? ref.current.offsetWidth : 0,
		maxHeight: "320px",
		marginTop: ref.current ? ref.current.offsetHeight : 0,
		visibility: isClicked ? "visible" : "hidden",
		transition: "all 0.1s ease-in-out",
	});
