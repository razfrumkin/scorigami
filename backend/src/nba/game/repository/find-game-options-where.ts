import { Between, FindOptionsWhere, LessThan, MoreThan } from 'typeorm'
import { Game } from '../entities/game.entity'
import { shake } from 'radash'
import { FindGameOptionsDto } from '../dto/find-game-options.dto'
import { MINIMUM_DATE } from 'src/core/utilities/constants/minimum-date.constant'
import { MAXIMUM_DATE } from 'src/core/utilities/constants/maximum-date.constant'

export const findGameOptionsWhere = (
    findGameOptionsDto?: FindGameOptionsDto
): FindOptionsWhere<Game> => {
    const {
        season,
        startDate,
        endDate,
        winnerPoints,
        loserPoints,
        winnerMatchup,
        loserMatchup,
        winnerId,
        loserId
    } = findGameOptionsDto ?? {}

    return shake({
        season,
        time: Between(startDate ?? MINIMUM_DATE, endDate ?? MAXIMUM_DATE),
        winnerPoints,
        loserPoints,
        winnerMatchup,
        loserMatchup,
        winner: { id: winnerId },
        loser: { id: loserId }
    })
}
