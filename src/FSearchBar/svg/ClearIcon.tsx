import React from "react"
import { ClearIconProps } from "./types"
import * as styles from "./styles"
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib"


export const ClearIcon = (props: ClearIconProps) => {
    return(
		<svg
            style={props.style}
            className={props.className + " " + styles.ClearIconDiv}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => props.onClick()}
        >
            <path d="M12 4L4 12" 
                stroke={FColorTypes.DARK_GREY} 
                strokeWidth="1.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path d="M4 4L12 12" 
                stroke={FColorTypes.DARK_GREY} 
                strokeWidth="1.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
		</svg>
    )
}