import { useContext } from 'react'
import { SeasonsContext } from '../contexts/seasonsContext'

export const useSeasons = () => {
    const seasons = useContext(SeasonsContext)

    if (seasons == null) {
        throw new Error('useSeasons must be used within SeasonsProvider')
    }

    return seasons
}
