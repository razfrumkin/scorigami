import { FindTeamOptionsRelationsDto } from './findTeamOptionsRelationsDto'

export interface FindTeamOptionsDto extends FindTeamOptionsRelationsDto {
    abbreviation?: string
    nickname?: string
    city?: string
    isActive?: boolean
}
