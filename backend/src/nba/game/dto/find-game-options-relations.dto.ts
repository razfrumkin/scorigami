import { IsBoolean, IsOptional } from 'class-validator'
import { TransformBoolean } from 'src/core/utilities/decorators/transform-boolean.decorator'

export class FindGameOptionsRelationsDto {
    @IsOptional()
    @TransformBoolean()
    @IsBoolean()
    withWinner?: boolean

    @IsOptional()
    @TransformBoolean()
    @IsBoolean()
    withLoser?: boolean
}
