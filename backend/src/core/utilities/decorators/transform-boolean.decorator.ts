import { Transform } from 'class-transformer'

export const TransformBoolean = () =>
    Transform(({ obj, key }) => {
        const value = obj[key]

        if (typeof value === 'string') {
            return obj[key] === 'true'
        }

        return value
    })
