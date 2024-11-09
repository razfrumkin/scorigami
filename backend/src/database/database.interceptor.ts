import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor
} from '@nestjs/common'
import { catchError, Observable } from 'rxjs'
import { SQLQueryError } from './errors/sql-query.error'
import { SQLQueryException } from './exceptions/sql-query.exception'

@Injectable()
export class DatabaseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(
            catchError(error => {
                if (error instanceof SQLQueryError) {
                    throw new SQLQueryException()
                }

                throw error
            })
        )
    }
}
