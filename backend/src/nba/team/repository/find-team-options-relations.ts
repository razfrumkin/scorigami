import { FindOptionsRelations } from 'typeorm'
import { FindTeamOptionsRelationsDto } from '../dto/find-team-options-relations.dto'
import { Team } from '../entities/team.entity'

export const findTeamOptionsRelations = (
    findTeamOptionsRelationsDto?: FindTeamOptionsRelationsDto
): FindOptionsRelations<Team> => {
    const { withGamesWon, withGamesLost } = findTeamOptionsRelationsDto ?? {}

    return {
        gamesWon: withGamesWon,
        gamesLost: withGamesLost
    }
}
