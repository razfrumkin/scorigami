import { Service } from '../../../common/services/service'

export class SeasonService extends Service {
    static endPoint = 'nba/seasons'

    static async find(): Promise<string[]> {
        const { data } = await this.axiosInstance.get<string[]>(this.endPoint)

        return data
    }
}