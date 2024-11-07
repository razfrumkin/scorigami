import { FindByIdDto } from '../../../common/dto/findByIdDto'
import { Service } from '../../../common/services/service'
import { FindTeamOptionsDto } from '../dto/findTeamOptionsDto'
import { FindTeamOptionsRelationsDto } from '../dto/findTeamOptionsRelationsDto'
import { Team } from '../entities/team'

export class TeamService extends Service {
    static endpoint = 'nba/teams'

    static async findOne(
        findByIdDto: FindByIdDto,
        findTeamOptionsRelationsDto?: FindTeamOptionsRelationsDto
    ): Promise<Team> {
        const { data } = await this.axiosInstance.get<Team>(
            `${this.endpoint}/${findByIdDto.id}`,
            { params: findTeamOptionsRelationsDto }
        )

        return data
    }

    static async find(
        findTeamOptionsDto?: FindTeamOptionsDto
    ): Promise<Team[]> {
        const { data } = await this.axiosInstance.get<Team[]>(this.endpoint, {
            params: findTeamOptionsDto
        })

        return data
    }
}
