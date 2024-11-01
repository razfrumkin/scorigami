import { Game } from 'src/nba/game/entities/game.entity'
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'

@Entity('team')
export class Team {
    @PrimaryColumn({ type: 'int' })
    id: number

    @Column()
    abbreviation: string

    @Column()
    nickname: string

    @Column()
    city: string

    @Column({ type: 'boolean' })
    isActive: boolean

    @OneToMany(() => Game, game => game.winner)
    gamesWon: Game[]

    @OneToMany(() => Game, game => game.loser)
    gamesLost: Game[]
}
