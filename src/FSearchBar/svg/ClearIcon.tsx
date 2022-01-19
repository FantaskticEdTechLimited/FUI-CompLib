import React from "react"
import { ClearIconProps } from "./types"
import * as styles from "./styles"
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib"


export const ClearIcon = (props: ClearIconProps) => {
    return(
		<svg
            style={props.style}
            className={props.className + " " + styles.ClearIconDiv}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => props.onClick()}
        > 
            <path d="M13.5 4.5L4.5 13.5" 
                stroke={FColorTypes.GREY} 
                strokeWidth="1.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path d="M4.5 4.5L13.5 13.5" 
                stroke={FColorTypes.GREY} 
                strokeWidth="1.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
		</svg>
    )
}