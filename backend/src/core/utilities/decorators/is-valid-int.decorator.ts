import { applyDecorators } from '@nestjs/common'
import { TransformStringToNumber } from './transform-string-to-number.decorator'
import { IsInt, Max, Min, ValidationOptions } from 'class-validator'

export const IsValidInt = (validationOptions?: { each: boolean }) =>
    applyDecorators(
        TransformStringToNumber(validationOptions),
        IsInt(validationOptions),
        Min(-2147483648, validationOptions),
        Max(2147483647, validationOptions)
    )
