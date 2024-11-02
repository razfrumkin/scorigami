import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Query,
    UseGuards,
    UseInterceptors
} from '@nestjs/common'
import { GameService } from './game.service'
import { Game } from './entities/game.entity'
import { AdminGuard } from '../../auth/guards/admin.guard'
import { CreateGamesDto } from './dto/create-games.dto'
import { FindGameOptionsDto } from './dto/find-game-options.dto'
import { FindByStringIdDto } from 'src/core/utilities/dto/find-by-string-id.dto'
import { FindGameOptionsRelationsDto } from './dto/find-game-options-relations.dto'
import { GameInterceptor } from './game.interceptor'

@UseInterceptors(GameInterceptor)
@Controller('nba/games')
export class GameController {
    constructor(private readonly gameService: GameService) {}

    @UseGuards(AdminGuard)
    @Post()
    async create(@Body() createGamesDto: CreateGamesDto): Promise<Game[]> {
        return await this.gameService.create(createGamesDto)
    }

    @Get(':id')
    async findOne(
        @Param() findByStringIdDto: FindByStringIdDto,
        @Query() findGameOptionsRelationsDto?: FindGameOptionsRelationsDto
    ): Promise<Game> {
        return await this.gameService.findOne(
            findByStringIdDto,
            findGameOptionsRelationsDto
        )
    }

    @Get()
    async find(
        @Query() findGameOptionsDto?: FindGameOptionsDto
    ): Promise<Game[]> {
        return await this.gameService.find(findGameOptionsDto)
    }
}
