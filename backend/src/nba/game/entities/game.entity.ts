import { Team } from '../../../nba/team/entities/team.entity'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'

@Entity('game')
export class Game {
    @PrimaryColumn()
    id: string

    @Column()
    season: string

    @Column()
    time: Date

    @Column({ type: 'int' })
    winnerPoints: number

    @Column({ type: 'int' })
    loserPoints: number

    @Column()
    winnerMatchup: string

    @Column()
    loserMatchup: string

    @ManyToOne(() => Team, team => team.gamesWon)
    @JoinColumn()
    winner: Team

    @ManyToOne(() => Team, team => team.gamesLost)
    @JoinColumn()
    loser: Team
}
