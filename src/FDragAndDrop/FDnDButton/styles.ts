import { style } from 'typestyle'

export const FDnDButton_Container = (disabled?: boolean) =>
    style({
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        cursor: disabled ? 'not-allowed' : 'grab',
    })
