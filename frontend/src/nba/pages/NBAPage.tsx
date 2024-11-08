import { useGames } from '../game/hooks/useGames'
import { GamesProvider } from '../game/providers/GamesProvider'

export const NBAPage = () => {
    return (
        <GamesProvider options={{ seasons: ['2024-25'] }}>
            <TemporaryGamesList />
        </GamesProvider>
    )
}

const TemporaryGamesList = () => {
    const games = useGames()

    return (
        <div>
            {games.map(game => (
                <span key={game.id}>{JSON.stringify(game)}</span>
            ))}
        </div>
    )
}
