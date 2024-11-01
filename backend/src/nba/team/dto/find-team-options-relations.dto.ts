import { IsBoolean, IsOptional } from 'class-validator'
import { TransformBoolean } from 'src/core/utilities/decorators/transform-boolean.decorator'

export class FindTeamOptionsRelationsDto {
    @IsOptional()
    @TransformBoolean()
    @IsBoolean()
    withGamesWon?: boolean

    @IsOptional()
    @TransformBoolean()
    @IsBoolean()
    withGamesLost?: boolean
}
