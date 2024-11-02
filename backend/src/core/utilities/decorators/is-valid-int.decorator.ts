import { applyDecorators } from '@nestjs/common'
import { TransformStringToNumber } from './transform-string-to-number.decorator'
import { IsInt, Max, Min } from 'class-validator'

export const IsValidInt = () =>
    applyDecorators(
        TransformStringToNumber(),
        IsInt(),
        Min(-2147483648),
        Max(2147483647)
    )
