import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NBAPage } from './nba/pages/NBAPage'
import { CssBaseline, ThemeProvider } from '@mui/material'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import dayjs from 'dayjs'
import { theme } from './common/layout/theme'

dayjs.extend(localizedFormat)

const queryClient = new QueryClient()

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <NBAPage />
            </ThemeProvider>
        </QueryClientProvider>
    )
}
