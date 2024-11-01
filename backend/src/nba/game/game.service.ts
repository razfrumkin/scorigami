import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Game } from './entities/game.entity'
import { Repository } from 'typeorm'
import { CreateGamesDto } from './dto/create-games.dto'
import { TeamService } from '../team/team.service'
import { Team } from '../team/entities/team.entity'

@Injectable()
export class GameService {
    constructor(
        @InjectRepository(Game)
        private readonly gameRepository: Repository<Game>,
        private readonly teamService: TeamService
    ) {}

    async create(createGamesDto: CreateGamesDto): Promise<Game[]> {
        const { games } = createGamesDto

        const teams: { [id: number]: Team | null } = {}

        for (const { winnerId, loserId } of games) {
            if (!(winnerId in teams)) {
                teams[winnerId] = await this.teamService.findOneOrNull({
                    id: winnerId
                })
            }

            if (!(loserId in teams)) {
                teams[loserId] = await this.teamService.findOneOrNull({
                    id: loserId
                })
            }
        }

        Object.keys(teams).forEach(id => {
            const team = teams[id]

            if (team == null) {
                throw new HttpException(
                    `Invalid team with the id: '${id}'`,
                    HttpStatus.BAD_REQUEST
                )
            }
        })

        return this.gameRepository.save(
            games.map(game => ({
                ...game,
                winner: teams[game.winnerId],
                loser: teams[game.loserId]
            }))
        )
    }

    async find(): Promise<Game[]> {
        return this.gameRepository.find({
            relations: { winner: true, loser: true }
        })
    }

    async findAvailableSeasons(): Promise<string[]> {
        const records = await this.gameRepository
            .createQueryBuilder('game')
            .select('DISTINCT game.season')
            .orderBy('game.season', 'DESC')
            .getRawMany()

        return records.map(({ season }) => season)
    }
}
