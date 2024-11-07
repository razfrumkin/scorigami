import { useTeams } from '../team/hooks/useTeams'
import { TeamsProvider } from '../team/providers/SeasonsProvider'

export const NBAPage = () => {
    return (
        <TeamsProvider options={{ isActive: true }}>
            <TemporaryTeamsList />
        </TeamsProvider>
    )
}

const TemporaryTeamsList = () => {
    const teams = useTeams()

    return (
        <div>
            {teams.map(team => (
                <span key={team.id}>{JSON.stringify(team)}</span>
            ))}
        </div>
    )
}
