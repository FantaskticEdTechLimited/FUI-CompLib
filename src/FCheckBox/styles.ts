import { style } from "typestyle";    
import { FCheckBoxProps } from "./types";

export const FCheckBoxDiv = (props: FCheckBoxProps) => style({  
    cursor: props.disabled ? "not-allowed" : "pointer",
    height: "1.5rem", 
    opacity: props.disabled ? 0.4 : 1, 
    overflow: "visible",
    width: "1.5rem",
})
