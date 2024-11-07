import { Game } from '../../game/entities/game'

export interface Team {
    id: number
    abbreviation: string
    nickname: string
    city: string
    isActive: boolean
    gamesWon: Game[]
    gamesLost: Game[]
}
