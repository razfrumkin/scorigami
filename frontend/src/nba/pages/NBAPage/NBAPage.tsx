import { Box } from '@mui/material'
import { useStyles } from './NBAPage.styles'
import { ScorigamiChart } from '../../components/ScorigamiChart'
import { GamesProvider } from '../../game/providers/GamesProvider'

export const NBAPage = () => {
    const { classes } = useStyles()

    return (
        <Box className={classes.root}>
            <Box className={classes.chartContainer}>
                <GamesProvider>
                    <ScorigamiChart />
                </GamesProvider>
            </Box>
        </Box>
    )
}
