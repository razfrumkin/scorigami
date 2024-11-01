import { Type } from 'class-transformer'
import { IsArray, ValidateNested } from 'class-validator'
import { CreateGameDto } from './create-game.dto'

export class CreateGamesDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateGameDto)
    games: CreateGameDto[]
}
