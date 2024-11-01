import { Controller, Get, Param, Query } from '@nestjs/common'
import { TeamService } from './team.service'
import { Team } from './entities/team.entity'
import { FindTeamOptionsWhereDto } from './dto/find-team-options-where.dto'
import { FindByIdDto } from '../../core/utilities/dto/find-by-id.dto'
import { FindTeamOptionsRelationsDto } from './dto/find-team-options-relations.dto'

@Controller('nba/teams')
export class TeamController {
    constructor(private readonly teamService: TeamService) {}

    @Get(':id')
    async findOne(
        @Param() findByIdDto: FindByIdDto,
        @Query() findTeamOptionsRelationsDto?: FindTeamOptionsRelationsDto
    ): Promise<Team> {
        return await this.teamService.findOne(
            findByIdDto,
            findTeamOptionsRelationsDto
        )
    }

    @Get()
    async find(
        @Query() findTeamOptionsWhereDto?: FindTeamOptionsWhereDto
    ): Promise<Team[]> {
        return this.teamService.find(findTeamOptionsWhereDto)
    }
}
