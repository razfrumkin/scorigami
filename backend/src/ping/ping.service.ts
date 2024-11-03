import { Injectable } from '@nestjs/common'

@Injectable()
export class PingService {
    ping(): { message: string } {
        return { message: 'pong' }
    }
}
