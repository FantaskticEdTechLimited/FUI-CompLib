import { stylesheet } from "typestyle";

export const styles = stylesheet({
	formContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		rowGap: "24px",
		height: "100%",
		width: "100%",
		overflowY: "auto",
	},
	contentContainer: {
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
