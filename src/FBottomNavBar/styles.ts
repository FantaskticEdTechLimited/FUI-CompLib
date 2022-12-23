import { style, stylesheet } from "typestyle";
import { FOverrideStyle } from "..";

export const styles = stylesheet({
	bottomNavBarContainer: {
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
	},
});

export const leadingButtonDiv = () =>
	style({
		alignSelf: "flex-start",
		padding: FOverrideStyle("8px 12px"),
	});

export const actionButtonDiv = () =>
	style({
		alignSelf: "flex-end",
		padding: FOverrideStyle("8px 12px"),
	});
