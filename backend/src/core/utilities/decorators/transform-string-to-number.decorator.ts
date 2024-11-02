import { Transform } from 'class-transformer'

const transform = (value: string | any): number | any => {
    const parsed = Number(value)

    return isNaN(parsed) ? value : parsed
}

export const TransformStringToNumber = (validationOptions?: {
    each: boolean
}) =>
    Transform(({ value }) => {
        if (validationOptions?.each && Array.isArray(value)) {
            return value.map(transform)
        }

        return transform(value)
    })
