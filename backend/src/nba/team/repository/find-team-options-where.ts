import { FindOptionsWhere, ILike } from 'typeorm'
import { Team } from '../entities/team.entity'
import { shake } from 'radash'
import { FindTeamOptionsDto } from '../dto/find-team-options.dto'

export const findTeamOptionsWhere = (
    findTeamOptionsDto?: FindTeamOptionsDto
): FindOptionsWhere<Team> => {
    const { abbreviation, nickname, city, isActive } = findTeamOptionsDto ?? {}

    return shake({
        abbreviation: ILike(`%${abbreviation ?? ''}%`),
        nickname: ILike(`%${nickname ?? ''}%`),
        city: ILike(`%${city ?? ''}%`),
        isActive
    })
}
