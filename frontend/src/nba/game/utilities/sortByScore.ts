import { Game } from '../entities/game'

export const sortByScore = (games: Game[]): { [score: string]: Game[] } =>
    games.reduce<{ [score: string]: Game[] }>((scores, game) => {
        const score = `${game.winnerPoints}-${game.loserPoints}`
        scores[score] = [...(scores[score] ?? []), game]

        return scores
    }, {})
