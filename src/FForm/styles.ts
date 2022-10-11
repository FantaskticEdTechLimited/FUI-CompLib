import { stylesheet } from "typestyle";

export const styles = stylesheet({
	FForm_Container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		rowGap: "24px",
		height: "100%",
		width: "100%",
		overflowY: "auto",
	},
	FForm_Content_Container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		rowGap: "12px",
		height: "100%",
		width: "100%",
		overflowY: "auto",
	},
});
