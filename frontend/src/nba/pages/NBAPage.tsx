import { useSeasons } from '../season/hooks/useSeasons'
import { SeasonsProvider } from '../season/providers/SeasonsProvider'

export const NBAPage = () => {
    return (
        <SeasonsProvider>
            <TemprarySeasonsList />
        </SeasonsProvider>
    )
}

const TemprarySeasonsList = () => {
    const seasons = useSeasons()

    return (
        <div>
            {seasons.map(season => (
                <span key={season}>{season}</span>
            ))}
        </div>
    )
}
