import { Injectable } from '@nestjs/common'
import { GameService } from '../game/game.service'

@Injectable()
export class SeasonService {
    constructor(private readonly gameService: GameService) {}

    async find(): Promise<string[]> {
        return await this.gameService.findAvailableSeasons()
    }
}
