import { FindByIdDto } from 'src/core/utilities/dto/find-by-id.dto'

export class TeamNotFoundError extends Error {
    constructor(findByIdDto: FindByIdDto) {
        super(`Team not found with id: '${findByIdDto.id}'`)

        Object.setPrototypeOf(this, TeamNotFoundError.prototype)
    }
}
