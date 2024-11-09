import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class QueryDatabaseOptionsDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    sqlQuery?: string
}
