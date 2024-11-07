import { useContext } from 'react'
import { TeamsContext } from '../contexts/teamsContext'

export const useTeams = () => {
    const teams = useContext(TeamsContext)

    if (teams == null) {
        throw new Error('useTeams must be used within TeamsProvider')
    }

    return teams
}
