import { IsValidInt } from '../decorators/is-valid-int.decorator'
import { TransformStringToNumber } from '../decorators/transform-string-to-number.decorator'

export class FindByIdDto {
    @TransformStringToNumber()
    @IsValidInt()
    id: number
}
