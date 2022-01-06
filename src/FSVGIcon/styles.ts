import { style } from "typestyle";     
import { FSVGIconProps } from "./types";

export const FSVGIconDiv = (props: FSVGIconProps) => style({
    alignItems: "center",    
    cursor: props.disabled ? "not-allowed" : "pointer",
    display: "flex",
    opacity: props.disabled ? 0.4 : 1,
    overflow: "visible",
    width: "fit-content"
})