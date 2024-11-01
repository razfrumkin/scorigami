import { Module } from '@nestjs/common'
import { TeamModule } from './team/team.module'
import { GameModule } from './game/game.module'
import { SeasonModule } from './season/season.module'

@Module({
    imports: [TeamModule, GameModule, SeasonModule],
    providers: [],
    controllers: [],
    exports: []
})
export class NBAModule {}
