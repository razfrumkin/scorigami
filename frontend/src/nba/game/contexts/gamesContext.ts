import { createContext } from 'react'
import { Game } from '../entities/game'

export const GamesContext = createContext<Game[] | undefined>(undefined)
