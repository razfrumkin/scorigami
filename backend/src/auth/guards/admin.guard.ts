import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Injectable
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Observable } from 'rxjs'

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private readonly configService: ConfigService) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest()
        const password = request.headers['x-admin-password']
        const adminPassword =
            this.configService.getOrThrow<string>('adminPassword')

        if (password !== adminPassword) {
            throw new ForbiddenException()
        }

        return true
    }
}
