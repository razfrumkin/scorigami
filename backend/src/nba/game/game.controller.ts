import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { GameService } from './game.service'
import { Game } from './entities/game.entity'
import { AdminGuard } from '../../auth/guards/admin.guard'
import { CreateGamesDto } from './dto/create-games.dto'

@Controller('nba/games')
export class GameController {
    constructor(private readonly gameService: GameService) {}

    @UseGuards(AdminGuard)
    @Post()
    async create(@Body() createGamesDto: CreateGamesDto): Promise<Game[]> {
        return this.gameService.create(createGamesDto)
    }

    @Get()
    async find(): Promise<Game[]> {
        return this.gameService.find()
    }
}
