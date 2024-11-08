import { useContext } from 'react'
import { GamesContext } from '../contexts/gamesContext'

export const useGames = () => {
    const games = useContext(GamesContext)

    if (games == null) {
        throw new Error('useGames must be used within GamesProvider')
    }

    return games
}
