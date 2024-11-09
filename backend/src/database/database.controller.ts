import {
    Controller,
    Get,
    Query,
    UseGuards,
    UseInterceptors
} from '@nestjs/common'
import { DatabaseService } from './database.service'
import { AdminGuard } from 'src/auth/guards/admin.guard'
import { QueryDatabaseOptionsDto } from './dto/query-database-options.dto'
import { DatabaseInterceptor } from './database.interceptor'

@UseInterceptors(DatabaseInterceptor)
@Controller('database')
export class DatabaseController {
    constructor(private readonly databaseService: DatabaseService) {}

    @UseGuards(AdminGuard)
    @Get()
    async query(
        @Query() queryDatabaseOptionsDto?: QueryDatabaseOptionsDto
    ): Promise<any> {
        return await this.databaseService.query(queryDatabaseOptionsDto)
    }
}
