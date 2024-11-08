import { FindGameOptionsRelationsDto } from './findGameOptionsRelationsDto'

export interface FindGameOptionsDto extends FindGameOptionsRelationsDto {
    seasons?: string[]
    startDate?: Date
    endDate?: Date
    winnerPoints?: number
    loserPoints?: number
    winnerMatchup?: number
    loserMatchup?: number
    participatedTeamsIds?: number[]
}
