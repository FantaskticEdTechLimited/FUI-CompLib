import { CSSProperties } from 'react'

export interface FDnDButtonProps {
    /** If `true`, the button is **NOT** allowed to use. */
    disabled?: boolean
    /** Style of the button. */
    style?: CSSProperties
    /** Class name of the button. */
    className?: string
}
