import { FindByStringIdDto } from 'src/core/utilities/dto/find-by-string-id.dto'

export class GameNotFoundError extends Error {
    constructor(findByStringIdDto: FindByStringIdDto) {
        super(`Game not found with id: '${findByStringIdDto.id}'`)

        Object.setPrototypeOf(this, GameNotFoundError.prototype)
    }
}
