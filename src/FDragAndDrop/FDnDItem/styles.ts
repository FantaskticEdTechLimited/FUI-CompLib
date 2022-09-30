import { style, stylesheet } from "typestyle";
import { FUseColor } from "../../utils";

export const styles = stylesheet({
	FDnDItem_WithIndicator_Container: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
	FDnDItem_ContentContainer: {
		flex: 1,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		columnGap: "16px",
	},
});

export const FDnDItem_Default_Container = (
	disabled?: boolean,
	isTargetOnContainer?: boolean,
	isHover?: boolean
) =>
	style({
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		columnGap: "16px",
		boxSizing: "border-box",
		padding: "16px",
		cursor: disabled ? "not-allowed" : "pointer",
		borderRadius: "4px",
		border: isTargetOnContainer
			? "2px solid " + FUseColor({ colorName: "Stroke Grey" })
			: undefined,
		backgroundColor: FUseColor({
			colorName: isHover ? "BG Light" : "White",
		}),
	});
