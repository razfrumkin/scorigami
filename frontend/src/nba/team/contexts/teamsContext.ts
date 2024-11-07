import { createContext } from 'react'
import { Team } from '../entities/team'

export const TeamsContext = createContext<Team[] | undefined>(undefined)
