import { FC, ReactNode } from 'react'
import { FindGameOptionsDto } from '../dto/findGameOptionsDto'
import { useQuery } from '@tanstack/react-query'
import { GameQueries } from '../queries/gameQueries'
import { GameService } from '../services/gameService'
import { LoadingAnimation } from '../../../common/components/LoadingAnimation'
import { ErrorMessage } from '../../../common/components/ErrorMessage/ErrorMessage'
import { GamesContext } from '../contexts/gamesContext'

interface GamesProviderProps {
    children: ReactNode
    options?: FindGameOptionsDto
}

export const GamesProvider: FC<GamesProviderProps> = ({
    children,
    options
}) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [GameQueries.GET_GAMES, options],
        queryFn: async () => await GameService.find(options)
    })

    if (isLoading) {
        return <LoadingAnimation />
    }

    if (isError) {
        return <ErrorMessage error={error} />
    }

    return (
        <GamesContext.Provider value={data}>{children}</GamesContext.Provider>
    )
}
