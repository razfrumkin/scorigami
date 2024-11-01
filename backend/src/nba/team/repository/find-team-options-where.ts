import { FindOptionsWhere, ILike } from 'typeorm'
import { Team } from '../entities/team.entity'
import { FindTeamOptionsWhereDto } from '../dto/find-team-options-where.dto'
import { shake } from 'radash'

export const findTeamOptionsWhere = (
    findTeamOptionsWhereDto?: FindTeamOptionsWhereDto
): FindOptionsWhere<Team> => {
    const { abbreviation, nickname, city, isActive } =
        findTeamOptionsWhereDto ?? {}

    return shake({
        abbreviation: ILike(`%${abbreviation ?? ''}%`),
        nickname: ILike(`%${nickname ?? ''}%`),
        city: ILike(`%${city ?? ''}%`),
        isActive
    })
}
