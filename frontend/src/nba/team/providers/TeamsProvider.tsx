import { useQuery } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'
import { TeamQueries } from '../queries/teamQueries'
import { TeamService } from '../services/teamService'
import { TeamsContext } from '../contexts/teamsContext'
import { LoadingAnimation } from '../../../common/components/LoadingAnimation'
import { ErrorMessage } from '../../../common/components/ErrorMessage/ErrorMessage'
import { FindTeamOptionsDto } from '../dto/findTeamOptionsDto'

interface TeamsProviderProps {
    children: ReactNode
    options?: FindTeamOptionsDto
}

export const TeamsProvider: FC<TeamsProviderProps> = ({
    children,
    options
}) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [TeamQueries.GET_TEAMS, options],
        queryFn: async () => await TeamService.find(options)
    })

    if (isLoading) {
        return <LoadingAnimation />
    }

    if (isError) {
        return <ErrorMessage error={error} />
    }

    return (
        <TeamsContext.Provider value={data}>{children}</TeamsContext.Provider>
    )
}
