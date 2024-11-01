import { Module } from '@nestjs/common'
import { SeasonService } from './season.service'
import { SeasonController } from './season.controller'
import { GameModule } from '../game/game.module'

@Module({
    imports: [GameModule],
    providers: [SeasonService],
    controllers: [SeasonController],
    exports: []
})
export class SeasonModule {}
