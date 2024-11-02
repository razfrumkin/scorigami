import { IsDateString, IsOptional, IsString } from 'class-validator'
import { FindGameOptionsRelationsDto } from './find-game-options-relations.dto'
import { IsValidInt } from 'src/core/utilities/decorators/is-valid-int.decorator'

export class FindGameOptionsDto extends FindGameOptionsRelationsDto {
    @IsOptional()
    @IsString()
    season?: string

    @IsOptional()
    @IsDateString()
    startDate?: string

    @IsOptional()
    @IsDateString()
    endDate?: string

    @IsOptional()
    @IsValidInt()
    winnerPoints?: number

    @IsOptional()
    @IsValidInt()
    loserPoints?: number

    @IsOptional()
    @IsString()
    winnerMatchup?: string

    @IsOptional()
    @IsString()
    loserMatchup?: string

    @IsOptional()
    @IsValidInt()
    winnerId: number

    @IsOptional()
    @IsValidInt()
    loserId: number
}
