import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor
} from '@nestjs/common'
import { catchError } from 'rxjs'
import { GameNotFoundError } from './errors/game-not-found.error'
import { GameNotFoundException } from './exceptions/game-not-found.exception'

@Injectable()
export class GameInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(
            catchError(error => {
                if (error instanceof GameNotFoundError) {
                    throw new GameNotFoundException()
                }

                throw error
            })
        )
    }
}
