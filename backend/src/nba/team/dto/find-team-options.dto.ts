import { IsBoolean, IsOptional, IsString } from 'class-validator'
import { TransformBoolean } from 'src/core/utilities/decorators/transform-boolean.decorator'
import { FindTeamOptionsRelationsDto } from './find-team-options-relations.dto'

export class FindTeamOptionsDto extends FindTeamOptionsRelationsDto {
    @IsOptional()
    @IsString()
    abbreviation?: string

    @IsOptional()
    @IsString()
    nickname?: string

    @IsOptional()
    @IsString()
    city?: string

    @IsOptional()
    @TransformBoolean()
    @IsBoolean()
    isActive?: boolean
}
