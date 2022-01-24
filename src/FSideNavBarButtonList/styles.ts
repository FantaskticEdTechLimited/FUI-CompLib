import { style } from "typestyle";     

export const FSideNavBarMainButtonListDiv = (isAutoExpand:boolean) => style({
    display: "flex",
    flexDirection: "column",
    flexGrow: isAutoExpand ? 1 : 0,
    justifyContent: "center",
    rowGap: "0.25rem" 
})


export const FSideNavBarSubButtonListDiv = (isIncluded:boolean, depth:number) => style({
    paddingLeft: `${0.75 * depth}rem`,
    display: (isIncluded || depth  === 0) ? "visible" : "none",
})
