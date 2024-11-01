import { IsDateString, IsInt, IsNotEmpty, IsString } from 'class-validator'

export class CreateGameDto {
    @IsString()
    @IsNotEmpty()
    id: string

    @IsString()
    @IsNotEmpty()
    season: string

    @IsDateString()
    time: Date

    @IsInt()
    winnerPoints: number

    @IsInt()
    loserPoints: number

    @IsString()
    @IsNotEmpty()
    winnerMatchup: string

    @IsString()
    @IsNotEmpty()
    loserMatchup: string

    @IsInt()
    winnerId: number

    @IsInt()
    loserId: number
}
