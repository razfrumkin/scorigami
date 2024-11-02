import {
    Between,
    Brackets,
    FindOptionsWhere,
    In,
    LessThan,
    MoreThan
} from 'typeorm'
import { Game } from '../entities/game.entity'
import { shake } from 'radash'
import { FindGameOptionsDto } from '../dto/find-game-options.dto'
import { MINIMUM_DATE } from 'src/core/utilities/constants/minimum-date.constant'
import { MAXIMUM_DATE } from 'src/core/utilities/constants/maximum-date.constant'

export const findGameOptionsWhere = (
    findGameOptionsDto?: FindGameOptionsDto
): FindOptionsWhere<Game>[] => {
    const {
        season,
        startDate,
        endDate,
        winnerPoints,
        loserPoints,
        winnerMatchup,
        loserMatchup,
        participatedTeamsIds
    } = findGameOptionsDto ?? {}

    return [
        shake({
            season,
            time: Between(startDate ?? MINIMUM_DATE, endDate ?? MAXIMUM_DATE),
            winnerPoints,
            loserPoints,
            winnerMatchup,
            loserMatchup,
            winner:
                participatedTeamsIds == null
                    ? undefined
                    : { id: In(participatedTeamsIds) }
        }),
        shake({
            season,
            time: Between(startDate ?? MINIMUM_DATE, endDate ?? MAXIMUM_DATE),
            winnerPoints,
            loserPoints,
            winnerMatchup,
            loserMatchup,
            loser:
                participatedTeamsIds == null
                    ? undefined
                    : { id: In(participatedTeamsIds) }
        })
    ]
}
