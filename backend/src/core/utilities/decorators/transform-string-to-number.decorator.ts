import { Transform } from 'class-transformer'

export const TransformStringToNumber = () =>
    Transform(({ value }) => {
        const parsed = Number(value)

        return isNaN(parsed) ? value : parsed
    })
