import { style, stylesheet } from "typestyle";
import { FReturnColor } from "../../utils/FReturnColor";

export const styles = stylesheet({
	withIndicatorContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
	contentContainer: {
		flex: 1,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		columnGap: "16px",
	},
});

export const defaultContainer = (
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
			? "2px solid " + FReturnColor({ color: "Stroke Grey" })
			: undefined,
		backgroundColor: FReturnColor({
			color: isHover ? "BG Light" : "White",
		}),
	});
