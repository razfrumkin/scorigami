import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Game } from './entities/game.entity'
import { Repository } from 'typeorm'
import { CreateGamesDto } from './dto/create-games.dto'
import { TeamService } from '../team/team.service'
import { Team } from '../team/entities/team.entity'
import { FindGameOptionsDto } from './dto/find-game-options.dto'
import { findGameOptionsWhere } from './repository/find-game-options-where'
import { findGameOptionsRelations } from './repository/find-game-options-relations'
import { FindByIdDto } from 'src/core/utilities/dto/find-by-id.dto'
import { FindGameOptionsRelationsDto } from './dto/find-game-options-relations.dto'
import { FindByStringIdDto } from 'src/core/utilities/dto/find-by-string-id.dto'
import { GameNotFoundError } from './errors/game-not-found.error'
import { inspect } from 'util'

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

    async findOneOrNull(
        findByStringIdDto: FindByStringIdDto,
        findGameOptionsRelationsDto?: FindGameOptionsRelationsDto
    ): Promise<Game | undefined> {
        const relations = findGameOptionsRelations(findGameOptionsRelationsDto)

        return await this.gameRepository.findOne({
            where: findByStringIdDto,
            relations
        })
    }

    async find(findGameOptionsDto?: FindGameOptionsDto): Promise<Game[]> {
        const where = findGameOptionsWhere(findGameOptionsDto)
        const relations = findGameOptionsRelations(findGameOptionsDto)

        console.log(inspect(where, { depth: 5, colors: true }))

        return await this.gameRepository.find({ where, relations })
    }

    async findOne(
        findByStringIdDto: FindByStringIdDto,
        findGameOptionsRelationsDto?: FindGameOptionsRelationsDto
    ): Promise<Game> {
        const game = await this.findOneOrNull(
            findByStringIdDto,
            findGameOptionsRelationsDto
        )

        if (game == null) {
            throw new GameNotFoundError(findByStringIdDto)
        }

        return game
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
