import { HttpException, HttpStatus } from '@nestjs/common'

export class SQLQueryException extends HttpException {
    constructor() {
        super('SQL query failed', HttpStatus.BAD_REQUEST)
    }
}
