import { FindByStringIdDto } from '../../../common/dto/findByStringIdDto'
import { Service } from '../../../common/services/service'
import { FindGameOptionsDto } from '../dto/findGameOptionsDto'
import { FindGameOptionsRelationsDto } from '../dto/findGameOptionsRelationsDto'
import { Game } from '../entities/game'

export class GameService extends Service {
    static endpoint = 'nba/games'

    static async findOne(
        findByStringIdDto: FindByStringIdDto,
        findGameOptionsRelationsDto?: FindGameOptionsRelationsDto
    ): Promise<Game> {
        const { data } = await this.axiosInstance.get<Game>(
            `${this.endpoint}/${findByStringIdDto.id}`,
            {
                params: findGameOptionsRelationsDto
            }
        )

        return data
    }

    static async find(
        findGameOptionsDto?: FindGameOptionsDto
    ): Promise<Game[]> {
        const { data } = await this.axiosInstance.get<Game[]>(this.endpoint, {
            params: findGameOptionsDto
        })

        return data
    }
}
