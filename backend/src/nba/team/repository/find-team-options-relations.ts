import { FindOptionsRelations } from 'typeorm'
import { Team } from '../entities/team.entity'
import { FindTeamOptionsRelationsDto } from '../dto/find-team-options-relations.dto'

export const findTeamOptionsRelations = (
    findTeamOptionsRelationsDto?: FindTeamOptionsRelationsDto
): FindOptionsRelations<Team> => {
    const { withGamesWon, withGamesLost } = findTeamOptionsRelationsDto ?? {}

    return {
        gamesWon: withGamesWon,
        gamesLost: withGamesLost
    }
}
