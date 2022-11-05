import { style, stylesheet } from "typestyle";
import { FOverrideStyle } from "../../utils/FOverrideStyle";
import { FReturnColor } from "../../utils/FReturnColor";

export const FTabsHeader_Button_Div = (isHover?: boolean) =>
	style({
		padding: FOverrideStyle("8px 16px"),
		borderRadius: "8px",
		backgroundColor: isHover
			? FOverrideStyle(FReturnColor({ color: "Sub" }))
			: undefined,
	});

export const styles = stylesheet({
	FTabsHeader_Container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		columnGap: "8px",
		paddingBottom: "2px",
		overflowX: "auto",
		overflowY: "hidden",
	},
});
