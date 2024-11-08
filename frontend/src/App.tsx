import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NBAPage } from './nba/pages/NBAPage'
import { CssBaseline } from '@mui/material'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import dayjs from 'dayjs'

dayjs.extend(localizedFormat)

const queryClient = new QueryClient()

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <CssBaseline />
            <NBAPage />
        </QueryClientProvider>
    )
}
