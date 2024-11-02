import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Team } from './entities/team.entity'
import { Repository } from 'typeorm'
import { findTeamOptionsWhere } from './repository/find-team-options-where'
import { findTeamOptionsRelations } from './repository/find-team-options-relations'
import { FindByIdDto } from '../../core/utilities/dto/find-by-id.dto'
import { FindTeamOptionsRelationsDto } from './dto/find-team-options-relations.dto'
import { TeamNotFoundError } from './errors/team-not-found.error'
import { FindTeamOptionsDto } from './dto/find-team-options.dto'

@Injectable()
export class TeamService {
    constructor(
        @InjectRepository(Team)
        private readonly teamRepository: Repository<Team>
    ) {}

    async findOneOrNull(
        findByIdDto: FindByIdDto,
        findTeamOptionsRelationsDto?: FindTeamOptionsRelationsDto
    ): Promise<Team | undefined> {
        const relations = findTeamOptionsRelations(findTeamOptionsRelationsDto)

        return await this.teamRepository.findOne({
            where: findByIdDto,
            relations
        })
    }

    async findOne(
        findByIdDto: FindByIdDto,
        findTeamOptionsRelationsDto?: FindTeamOptionsRelationsDto
    ): Promise<Team> {
        const team = await this.findOneOrNull(
            findByIdDto,
            findTeamOptionsRelationsDto
        )

        if (team == null) {
            throw new TeamNotFoundError(findByIdDto)
        }

        return team
    }

    async find(findTeamOptionsDto?: FindTeamOptionsDto): Promise<Team[]> {
        const where = findTeamOptionsWhere(findTeamOptionsDto)
        const relations = findTeamOptionsRelations(findTeamOptionsDto)

        return await this.teamRepository.find({ where, relations })
    }
}
