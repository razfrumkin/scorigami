import { Transform } from 'class-transformer'

const transform = (value: string | any): boolean | any => {
    if (typeof value === 'string') {
        return value === 'true'
    }

    return value
}

export const TransformBoolean = (validationOptions?: { each: boolean }) =>
    Transform(({ value }) => {
        if (validationOptions?.each && Array.isArray(value)) {
            return value.map(transform)
        }

        return transform(value)
    })
