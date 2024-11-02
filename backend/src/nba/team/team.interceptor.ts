import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor
} from '@nestjs/common'
import { catchError } from 'rxjs'
import { TeamNotFoundError } from './errors/team-not-found.error'
import { TeamNotFoundException } from './exceptions/team-not-found.exception'

@Injectable()
export class TeamInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(
            catchError(error => {
                if (error instanceof TeamNotFoundError) {
                    throw new TeamNotFoundException()
                }

                throw error
            })
        )
    }
}
