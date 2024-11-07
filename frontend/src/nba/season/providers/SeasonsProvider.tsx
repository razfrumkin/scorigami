import { useQuery } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'
import { SeasonService } from '../services/seasonService'
import { SeasonsContext } from '../contexts/seasonsContext'
import { SeasonQueries } from '../queries/seasonQueries'
import { LoadingAnimation } from '../../../common/components/LoadingAnimation'
import { ErrorMessage } from '../../../common/components/ErrorMessage/ErrorMessage'

interface SeasonsProviderProps {
    children: ReactNode
}

export const SeasonsProvider: FC<SeasonsProviderProps> = ({ children }) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [SeasonQueries.GET_SEASONS],
        queryFn: async () => await SeasonService.find()
    })

    if (isLoading) {
        return <LoadingAnimation />
    }

    if (isError) {
        return <ErrorMessage error={error} />
    }

    return (
        <SeasonsContext.Provider value={data}>
            {children}
        </SeasonsContext.Provider>
    )
}
