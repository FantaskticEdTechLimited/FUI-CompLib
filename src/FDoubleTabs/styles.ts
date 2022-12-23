import { style, stylesheet } from "typestyle";
import { FOverrideStyle, FReturnColor } from "..";

export const doubleTabsWrapper = (disabled: boolean) =>
	style({
		display: "flex",
		flexDirection: "column",
		height: "100%",
		width: "100%",
		rowGap: "16px",
		cursor: disabled ? "not-allowed" : "auto",
		opacity: disabled ? 0.4 : 1,
	});

export const styles = stylesheet({
	doubleTabsHeader: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		alignSelf: "center",
		width: "fit-content",
	},
});

export const doubleTabsTabContainer = () =>
	style({
		display: "flex",
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		columnGap: "4px",
		boxSizing: "border-box",
		padding: "4px",
		backgroundColor: FReturnColor({ color: "Sub" }),
		boxShadow: "inset 0 0 2px rgba(0, 0, 0, 0.04)",
		borderRadius: "8px",
	});

export const doubleTabsTabButtonContainer = (isSelected: boolean) =>
	style({
		display: "flex",
		justifyContent: "center",
		boxSizing: "border-box",
		padding: FOverrideStyle("8px 10px"),
		backgroundColor: isSelected ? undefined : FOverrideStyle("transparent"),
	});
