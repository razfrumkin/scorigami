import { Team } from '../../team/entities/team'

export interface Game {
    id: string
    season: string
    time: Date
    winnerPoints: number
    loserPoints: number
    winnerMatchup: string
    loserMatchup: string
    winner: Team
    loser: Team
}
