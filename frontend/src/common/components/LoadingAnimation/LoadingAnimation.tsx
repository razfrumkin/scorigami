import { Box, CircularProgress } from '@mui/material'
import { useStyles } from './LoadingAnimation.styles'
import { useDimensions } from '../../hooks/useDimensions'

export const LoadingAnimation = () => {
    const [ref, { width, height }] = useDimensions()

    const { classes } = useStyles()

    return (
        <Box ref={ref} className={classes.root}>
            <CircularProgress size={(width < height ? width : height) / 2} />
        </Box>
    )
}
