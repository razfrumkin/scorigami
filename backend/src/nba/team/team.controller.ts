import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common'
import { TeamService } from './team.service'
import { Team } from './entities/team.entity'
import { FindByIdDto } from '../../core/utilities/dto/find-by-id.dto'
import { FindTeamOptionsRelationsDto } from './dto/find-team-options-relations.dto'
import { TeamInterceptor } from './team.interceptor'
import { FindTeamOptionsDto } from './dto/find-team-options.dto'

@UseInterceptors(TeamInterceptor)
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
        @Query() findTeamOptionsDto?: FindTeamOptionsDto
    ): Promise<Team[]> {
        return await this.teamService.find(findTeamOptionsDto)
    }
}
