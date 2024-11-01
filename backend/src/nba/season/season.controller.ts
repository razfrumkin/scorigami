import { Controller, Get } from '@nestjs/common'
import { SeasonService } from './season.service'

@Controller('nba/seasons')
export class SeasonController {
    constructor(private readonly seasonService: SeasonService) {}

    @Get()
    async find(): Promise<string[]> {
        return await this.seasonService.find()
    }
}
