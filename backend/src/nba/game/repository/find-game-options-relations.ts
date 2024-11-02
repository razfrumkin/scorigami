import { FindOptionsRelations } from 'typeorm'
import { Game } from '../entities/game.entity'
import { FindGameOptionsRelationsDto } from '../dto/find-game-options-relations.dto'

export const findGameOptionsRelations = (
    findGameOptionsRelationsDto?: FindGameOptionsRelationsDto
): FindOptionsRelations<Game> => {
    const { withWinner, withLoser } = findGameOptionsRelationsDto ?? {}

    return {
        winner: withWinner,
        loser: withLoser
    }
}
