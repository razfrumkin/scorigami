import { DataSource } from 'typeorm'
import { QueryDatabaseOptionsDto } from './dto/query-database-options.dto'
import { SQLQueryError } from './errors/sql-query.error'
import { InjectDataSource } from '@nestjs/typeorm'

export class DatabaseService {
    constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

    async query(
        queryDatabaseOptionsDto?: QueryDatabaseOptionsDto
    ): Promise<any> {
        const { sqlQuery } = queryDatabaseOptionsDto ?? {}

        try {
            return await this.dataSource.query(sqlQuery)
        } catch (error) {
            throw new SQLQueryError(sqlQuery, error.message)
        }
    }
}
