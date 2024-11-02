import { IsDateString, IsInt, IsNotEmpty, IsString } from 'class-validator'
import { IsValidInt } from 'src/core/utilities/decorators/is-valid-int.decorator'
import { TransformTeamId } from 'src/nba/team/decorators/transform-team-id'

export class CreateGameDto {
    @IsString()
    @IsNotEmpty()
    id: string

    @IsString()
    @IsNotEmpty()
    season: string

    @IsDateString()
    time: Date

    @IsValidInt()
    winnerPoints: number

    @IsValidInt()
    loserPoints: number

    @IsString()
    @IsNotEmpty()
    winnerMatchup: string

    @IsString()
    @IsNotEmpty()
    loserMatchup: string

    @IsValidInt()
    @TransformTeamId()
    winnerId: number

    @IsValidInt()
    @TransformTeamId()
    loserId: number
}
