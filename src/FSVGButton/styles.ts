import { style } from "typestyle";     
import { FSVGButtonProps } from "./types";

export const FSVGButtonDiv = (props: FSVGButtonProps) => style({
    alignItems: "center",    
    cursor: props.disabled ? "not-allowed" : "pointer",
    display: "flex",
    opacity: props.disabled ? 0.4 : 1,
    overflow: "visible",
    width: "fit-content"
})