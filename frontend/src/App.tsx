import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NBAPage } from './nba/pages/NBAPage'

const queryClient = new QueryClient()

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <NBAPage />
        </QueryClientProvider>
    )
}
